import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Trash2, 
  Shield, 
  User, 
  Search, 
  Info, 
  CheckCheck, 
  AlertCircle, 
  MessageSquare,
  Building,
  UserCheck
} from 'lucide-react';
import { AccountProfile } from '../App';
import { 
  getConversations, 
  getOrCreateConversation, 
  sendMessage, 
  markAsRead, 
  deleteConversationSide, 
  getVisibleMessages, 
  ChatConversation, 
  ChatMessage 
} from '../utils/chatService';

interface LiveChatPageProps {
  currentUser: AccountProfile;
  isAdmin: boolean;
  accounts: AccountProfile[];
}

export function LiveChatPage({ currentUser, isAdmin, accounts }: LiveChatPageProps) {
  const [conversations, setConversations] = useState<ChatConversation[]>([]);
  const [activeConvEmail, setActiveConvEmail] = useState<string>('');
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load and refresh conversations on update
  const refreshConversations = () => {
    const list = getConversations();
    setConversations(list);

    if (isAdmin) {
      // Find employees to make sure they all have a conversation
      const employees = accounts.filter(
        (a) => a.role !== 'Admin' && !a.permissions?.pages.includes('account-management')
      );
      
      // Select the first active conversation if none selected yet
      if (employees.length > 0) {
        // Initialize if empty
        employees.forEach((emp) => {
          getOrCreateConversation(emp, `Hello! This is the Live Chat Support channel. Send a message here to connect with any of our active Business Solutions System Admins.`);
        });
        
        const updatedList = getConversations();
        setConversations(updatedList);
        
        if (!activeConvEmail) {
          // Default to the first employee's chat
          const firstEmp = employees[0].email.trim().toLowerCase();
          setActiveConvEmail(firstEmp);
          markAsRead(firstEmp, true);
        }
      }
    } else {
      // Employee side: they only have their own conversation
      const myConv = getOrCreateConversation(
        currentUser,
        `Hello! This is the Live Chat Support channel. Send a message here to connect with any of our active Business Solutions System Admins.`
      );
      setActiveConvEmail(currentUser.email.trim().toLowerCase());
      markAsRead(currentUser.email.trim().toLowerCase(), false);
    }
  };

  useEffect(() => {
    refreshConversations();

    // Listen for real-time updates from service
    const handleUpdate = () => {
      const list = getConversations();
      setConversations(list);
    };

    window.addEventListener('chat-updated', handleUpdate);
    return () => {
      window.removeEventListener('chat-updated', handleUpdate);
    };
  }, [currentUser, isAdmin, accounts]);

  // Mark active conversation as read when active conversation or conversation length changes
  const activeConv = conversations.find(
    (c) => c.employeeEmail.trim().toLowerCase() === activeConvEmail.trim().toLowerCase()
  );

  const visibleMessages = activeConv ? getVisibleMessages(activeConv, currentUser.email) : [];

  useEffect(() => {
    if (activeConvEmail) {
      markAsRead(activeConvEmail, isAdmin);
    }
    // Scroll to bottom on load/update
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConvEmail, visibleMessages.length]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !activeConvEmail) return;

    sendMessage(activeConvEmail, currentUser, isAdmin, messageInput.trim());
    setMessageInput('');
    
    // Smooth scroll down
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleDeleteConversation = () => {
    if (!activeConvEmail) return;
    deleteConversationSide(activeConvEmail, currentUser.email);
    setShowDeleteConfirm(false);
    refreshConversations();
  };

  // Filter conversation list for Admin search
  const filteredConvsForAdmin = conversations.filter((conv) => {
    const query = searchQuery.toLowerCase();
    
    // Hide chats deleted by admin where no new messages exist yet
    const deletedAt = conv.deletedAtMap[currentUser.email.trim().toLowerCase()];
    if (deletedAt) {
      const deleteTime = new Date(deletedAt).getTime();
      const hasNewer = conv.messages.some(m => new Date(m.timestamp).getTime() > deleteTime);
      if (!hasNewer) return false;
    }

    return (
      conv.employeeName.toLowerCase().includes(query) ||
      conv.employeeEmail.toLowerCase().includes(query) ||
      conv.employeeDepartment.toLowerCase().includes(query)
    );
  });

  return (
    <div className="panel p-0 overflow-hidden h-[calc(100vh-210px)] min-h-[500px] flex flex-col md:flex-row bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
      
      {/* 1. Admin Conversations List Sidebar (Only shown to Admin users) */}
      {isAdmin && (
        <div className="w-full md:w-80 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 bg-slate-50/40 dark:bg-slate-950">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <MessageSquare size={16} className="text-[#0063a9] dark:text-blue-400" />
              <span>Employee Live Channels</span>
            </h3>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search active employee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-900/60 p-2 space-y-1">
            {filteredConvsForAdmin.length === 0 ? (
              <div className="py-12 text-center text-slate-400 dark:text-slate-500 space-y-2">
                <Search size={28} className="mx-auto opacity-30" />
                <p className="text-xs">No matching live chats found</p>
              </div>
            ) : (
              filteredConvsForAdmin.map((conv) => {
                const isActive = conv.employeeEmail.toLowerCase() === activeConvEmail.toLowerCase();
                const lastMsg = conv.messages[conv.messages.length - 1];
                const hasUnread = conv.adminsUnread;

                return (
                  <button
                    key={conv.employeeEmail}
                    onClick={() => {
                      setActiveConvEmail(conv.employeeEmail);
                      markAsRead(conv.employeeEmail, true);
                    }}
                    className={`w-full text-left p-3 rounded-lg flex items-start gap-3 transition-all ${
                      isActive 
                        ? 'bg-[#0063a9] text-white shadow-md' 
                        : 'hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="relative shrink-0">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#0063a9]/10 text-[#0063a9] dark:bg-blue-950/40 dark:text-blue-300'
                      }`}>
                        <User size={18} />
                      </div>
                      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-950" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                          {conv.employeeName}
                        </span>
                        {hasUnread && (
                          <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                        )}
                      </div>
                      <p className={`text-[10px] uppercase font-bold tracking-wider ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                        {conv.employeeDepartment}
                      </p>
                      <p className={`text-xs truncate mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        {lastMsg ? lastMsg.content : 'No message history'}
                      </p>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* 2. Main Chat Workspace / Messenger Frame */}
      <div className="flex-1 flex flex-col bg-white dark:bg-slate-900">
        
        {/* Active Conversation Header */}
        {activeConv ? (
          <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/40">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#0063a9]/10 text-[#0063a9] dark:bg-blue-950/40 dark:text-blue-300 flex items-center justify-center font-bold">
                {isAdmin ? <User size={18} /> : <Shield size={18} />}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>{isAdmin ? activeConv.employeeName : 'Business Solutions System Admins'}</span>
                  {isAdmin ? (
                    <span className="text-[10px] uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 px-1.5 py-0.5 rounded-md font-bold">
                      Employee
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase bg-[#00528c]/10 text-[#0063a9] dark:bg-blue-950/50 dark:text-blue-300 px-1.5 py-0.5 rounded-md font-bold">
                      All Admins
                    </span>
                  )}
                </h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <span>{isAdmin ? activeConv.employeeDepartment : 'Instant 24/7 Support Line'}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1 text-emerald-500 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </span>
                </p>
              </div>
            </div>

            {/* Delete Conversation action button */}
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-all cursor-pointer"
              title="Delete conversation on my side only"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ) : (
          <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex items-center justify-center">
            <span className="text-xs text-slate-400">Loading conversation profile...</span>
          </div>
        )}

        {/* Messaging Area */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 min-h-0 bg-slate-50/20 dark:bg-slate-950/20">
          
          {visibleMessages.length === 0 ? (
            <div className="py-20 text-center text-slate-400 dark:text-slate-500 space-y-3 max-w-sm mx-auto">
              <MessageSquare size={36} className="mx-auto opacity-30 text-[#0063a9] dark:text-blue-400" />
              <p className="text-sm font-semibold">Start a conversation!</p>
              <p className="text-xs">
                {isAdmin 
                  ? 'Send a friendly support reply to this employee.' 
                  : 'Let the System Admins know what assistance, logins, or survey issues you are having!'}
              </p>
            </div>
          ) : (
            visibleMessages.map((msg) => {
              // Message is from "me" if the senderEmail matches currentUser email
              const isMe = msg.senderEmail.trim().toLowerCase() === currentUser.email.trim().toLowerCase();
              const isSystem = msg.senderEmail === 'system@mgenesis.com';

              if (isSystem) {
                return (
                  <div key={msg.id} className="flex justify-center my-3">
                    <div className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] py-1 px-3 rounded-full flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 font-medium">
                      <Info size={12} className="text-[#0063a9] dark:text-blue-400" />
                      <span>{msg.content}</span>
                    </div>
                  </div>
                );
              }

              return (
                <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'} items-end gap-2`}>
                  {/* Left profile circles for other party */}
                  {!isMe && (
                    <div className="h-8 w-8 rounded-full bg-[#0063a9]/10 text-[#0063a9] dark:bg-blue-950/50 dark:text-blue-300 font-bold flex items-center justify-center shrink-0 text-xs">
                      {msg.senderRole === 'Admin' ? <Shield size={14} /> : <User size={14} />}
                    </div>
                  )}

                  <div className="max-w-[70%] space-y-1">
                    {/* Sender Name (for GCs, especially useful on Employee side to see which Admin replied) */}
                    {!isMe && (
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1">
                        {msg.senderName} ({msg.senderRole})
                      </span>
                    )}

                    <div className={`p-3.5 rounded-2xl text-xs relative leading-relaxed ${
                      isMe 
                        ? 'bg-[#0063a9] text-white rounded-br-none shadow-sm font-medium' 
                        : 'bg-white text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 rounded-bl-none shadow-xs'
                    }`}>
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>

                    <div className={`flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500 ${isMe ? 'justify-end pr-1' : 'pl-1'}`}>
                      <span>
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      {isMe && <CheckCheck size={12} className="text-emerald-500" />}
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form Footer */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200 dark:border-slate-800 flex gap-3 items-center bg-slate-50/20 dark:bg-slate-950/20">
          <input
            type="text"
            placeholder={isAdmin ? "Type your admin reply..." : "Ask Admins for help/logins..."}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs outline-none focus:border-[#0063a9] dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all"
          />
          <button
            type="submit"
            disabled={!messageInput.trim()}
            className="p-2.5 bg-[#0063a9] hover:bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed rounded-lg shadow-sm transition-colors cursor-pointer"
            title="Send Message"
          >
            <Send size={15} />
          </button>
        </form>
      </div>

      {/* 3. Confirm Conversation Deletion Modal Popup */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400">
              <AlertCircle size={24} className="shrink-0" />
              <h3 className="text-base font-bold">Delete Conversation?</h3>
            </div>
            
            <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Are you sure you want to delete this chat conversation? This deletes history <strong>on your side only</strong>. The other party will still see the entire message history until they delete it on their end too.
            </p>

            <div className="mt-5 flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 dark:text-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConversation}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors cursor-pointer"
              >
                Delete Side
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
