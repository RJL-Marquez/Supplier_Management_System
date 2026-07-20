import { AccountProfile } from '../App';

export interface ChatMessage {
  id: string;
  senderEmail: string;
  senderName: string;
  senderRole: 'Admin' | 'Employee';
  content: string;
  timestamp: string; // ISO String
}

export interface ChatConversation {
  employeeEmail: string;
  employeeName: string;
  employeeDepartment: string;
  messages: ChatMessage[];
  deletedAtMap: Record<string, string>; // userEmail => ISO String of deletion time
  employeeUnread: boolean; // true if admin responded and employee hasn't read yet
  adminsUnread: boolean; // true if employee messaged and admins haven't read yet
}

const STORAGE_KEY = 'mgenesis_chat_conversations_v1';

// Load conversations from localStorage
export function getConversations(): ChatConversation[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

// Save conversations to localStorage and dispatch event
export function saveConversations(convs: ChatConversation[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(convs));
  window.dispatchEvent(new CustomEvent('chat-updated'));
}

// Get or create conversation for a given employee
export function getOrCreateConversation(
  employee: AccountProfile,
  initialMsg?: string
): ChatConversation {
  const convs = getConversations();
  let conv = convs.find(
    (c) => c.employeeEmail.trim().toLowerCase() === employee.email.trim().toLowerCase()
  );

  if (!conv) {
    const employeeName = employee.email.split('@')[0]
      .split('.')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    conv = {
      employeeEmail: employee.email.trim().toLowerCase(),
      employeeName: employeeName,
      employeeDepartment: employee.department,
      messages: [],
      deletedAtMap: {},
      employeeUnread: false,
      adminsUnread: false,
    };

    if (initialMsg) {
      conv.messages.push({
        id: `msg-init-${Date.now()}`,
        senderEmail: 'system@mgenesis.com',
        senderName: 'System Bot',
        senderRole: 'Admin',
        content: initialMsg,
        timestamp: new Date().toISOString(),
      });
    }

    convs.push(conv);
    saveConversations(convs);
  }

  return conv;
}

// Add a message to an employee's conversation
export function sendMessage(
  employeeEmail: string,
  sender: AccountProfile,
  isAdminUser: boolean,
  content: string
): ChatConversation {
  const convs = getConversations();
  let conv = convs.find(
    (c) => c.employeeEmail.trim().toLowerCase() === employeeEmail.trim().toLowerCase()
  );

  if (!conv) {
    // If not found, create a placeholder
    const employeeName = employeeEmail.split('@')[0]
      .split('.')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    conv = {
      employeeEmail: employeeEmail.trim().toLowerCase(),
      employeeName,
      employeeDepartment: 'Logistics',
      messages: [],
      deletedAtMap: {},
      employeeUnread: false,
      adminsUnread: false,
    };
    convs.push(conv);
  }

  const senderName = sender.email.split('@')[0]
    .split('.')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  const newMsg: ChatMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    senderEmail: sender.email.trim().toLowerCase(),
    senderName,
    senderRole: isAdminUser ? 'Admin' : 'Employee',
    content,
    timestamp: new Date().toISOString(),
  };

  conv.messages.push(newMsg);

  // Mark unread flags
  if (isAdminUser) {
    conv.employeeUnread = true;
    conv.adminsUnread = false;
  } else {
    conv.adminsUnread = true;
    conv.employeeUnread = false;
  }

  // If conversation was deleted previously by someone, we may want to clear that deletion timestamp 
  // for the sender, so they see the new message.
  const senderLower = sender.email.trim().toLowerCase();
  if (conv.deletedAtMap[senderLower]) {
    delete conv.deletedAtMap[senderLower];
  }

  // We should also clear deletion for the other party if a new message is received,
  // so the conversation pops back up for them if they had deleted it!
  // This is typical chat behavior: deleting a conversation clears history, but a new message starts it again.
  if (isAdminUser) {
    // Admin sent it. If employee had deleted, they should see this new message
    delete conv.deletedAtMap[employeeEmail.trim().toLowerCase()];
  } else {
    // Employee sent it. All admins should see the new message (clear deletion mapping for admins)
    // We can clear all admin deletion markers in the map, or just keep it simple.
    Object.keys(conv.deletedAtMap).forEach((email) => {
      if (email !== employeeEmail.trim().toLowerCase()) {
        delete conv.deletedAtMap[email];
      }
    });
  }

  saveConversations(convs);

  // Trigger system notification
  triggerSystemNotificationForChat(conv, newMsg);

  return conv;
}

// Mark a conversation as read for a given user
export function markAsRead(employeeEmail: string, isAdminUser: boolean) {
  const convs = getConversations();
  const conv = convs.find(
    (c) => c.employeeEmail.trim().toLowerCase() === employeeEmail.trim().toLowerCase()
  );
  if (conv) {
    if (isAdminUser) {
      conv.adminsUnread = false;
    } else {
      conv.employeeUnread = false;
    }
    saveConversations(convs);
  }
}

// Delete conversation on your side only
export function deleteConversationSide(employeeEmail: string, userEmail: string) {
  const convs = getConversations();
  const conv = convs.find(
    (c) => c.employeeEmail.trim().toLowerCase() === employeeEmail.trim().toLowerCase()
  );
  if (conv) {
    const userLower = userEmail.trim().toLowerCase();
    conv.deletedAtMap[userLower] = new Date().toISOString();
    
    // Clear unread flag for this side when deleted
    if (userLower === conv.employeeEmail) {
      conv.employeeUnread = false;
    } else {
      // If deleted by an admin, we could clear admin unread, but since there are multiple admins, 
      // let's just clear unread flags on their own side
      conv.adminsUnread = false;
    }

    saveConversations(convs);
  }
}

// Filter messages that are visible to a given user based on their side-deletion timestamp
export function getVisibleMessages(conv: ChatConversation, userEmail: string): ChatMessage[] {
  const userLower = userEmail.trim().toLowerCase();
  const deletedAt = conv.deletedAtMap[userLower];
  if (!deletedAt) return conv.messages;

  const deleteTime = new Date(deletedAt).getTime();
  return conv.messages.filter((msg) => new Date(msg.timestamp).getTime() > deleteTime);
}

// Get total unread count for a given user
export function getChatUnreadCount(userEmail: string, isAdminUser: boolean): number {
  const convs = getConversations();
  const userLower = userEmail.trim().toLowerCase();

  if (isAdminUser) {
    // Return count of conversations where adminsUnread is true and they didn't delete it after the latest message
    return convs.filter((c) => {
      if (!c.adminsUnread) return false;
      const deletedAt = c.deletedAtMap[userLower];
      if (!deletedAt) return true;

      // Check if latest message is newer than deletion
      const latestMsg = c.messages[c.messages.length - 1];
      if (!latestMsg) return false;
      return new Date(latestMsg.timestamp).getTime() > new Date(deletedAt).getTime();
    }).length;
  } else {
    // Employee: check their single conversation
    const conv = convs.find((c) => c.employeeEmail === userLower);
    if (!conv || !conv.employeeUnread) return 0;

    const deletedAt = conv.deletedAtMap[userLower];
    if (!deletedAt) return 1;

    const latestMsg = conv.messages[conv.messages.length - 1];
    if (!latestMsg) return 0;
    return new Date(latestMsg.timestamp).getTime() > new Date(deletedAt).getTime() ? 1 : 0;
  }
}

// Initialize chat support GCs for all employees with admins
export function initializeSystemChats(accounts: AccountProfile[]) {
  const employees = accounts.filter(
    (a) => a.role !== 'Admin' && !a.permissions?.pages.includes('account-management')
  );

  employees.forEach((emp) => {
    getOrCreateConversation(emp, `Hello! This is the Live Chat Support channel. Send a message here to connect with any of our active Business Solutions System Admins.`);
  });
}

// Generate system notifications that integrate with Notification Logs Page and Bell
function triggerSystemNotificationForChat(conv: ChatConversation, msg: ChatMessage) {
  const systemNotifsKey = 'survey_notifications_v1';
  let list: any[] = [];
  try {
    const data = localStorage.getItem(systemNotifsKey);
    if (data) list = JSON.parse(data);
  } catch (e) {
    // Ignore
  }

  // Add custom notification item for chat response
  const isMessageFromEmployee = msg.senderRole === 'Employee';
  
  const newNotif = {
    id: `chat-${msg.id}`,
    responseId: `chat-${msg.id}`,
    surveyType: 'Courier' as any, // mock tag
    respondentType: isMessageFromEmployee ? 'Employee Chat Message' : 'Admin Chat Support',
    submissionDate: msg.timestamp,
    company: isMessageFromEmployee 
      ? `Support Request: ${msg.senderName}`
      : `Message from Admin: ${msg.senderName}`,
    department: isMessageFromEmployee ? conv.employeeDepartment : 'Business Solutions Manager',
    rating: 5,
    comment: msg.content.substring(0, 80) + (msg.content.length > 80 ? '...' : ''),
    respondentEmail: msg.senderEmail,
    // Custom tag so we can ignore it in survey reports but display it in alerts
    isChatNotification: true, 
    read: false,
    employeeEmail: conv.employeeEmail,
    senderEmail: msg.senderEmail,
    senderRole: msg.senderRole,
  };

  // Prepend to notifications list
  list.unshift(newNotif);
  localStorage.setItem(systemNotifsKey, JSON.stringify(list));
  
  // Dispatch notification update event so bells update in real-time
  window.dispatchEvent(new CustomEvent('notifications-updated'));
}
