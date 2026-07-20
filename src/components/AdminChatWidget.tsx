import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  ArrowLeft, 
  Search, 
  User, 
  Trash2, 
  AlertCircle, 
  CheckCheck,
  Shield,
  Info
} from 'lucide-react';
import { AccountProfile } from '../App';
import { 
  getConversations, 
  getOrCreateConversation, 
  sendMessage, 
  markAsRead, 
  deleteConversationSide, 
  getVisibleMessages, 
  getChatUnreadCount,
  ChatConversation 
} from '../utils/chatService';

interface AdminChatWidgetProps {
  currentUser: AccountProfile;
  accounts: AccountProfile[];
}

export function AdminChatWidget({ currentUser, accounts }: AdminChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [conversations, setConversations] = useState<ChatConversation[]>([]);
  const [activeConvEmail, setActiveConvEmail] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load and subscribe to chat changes
  const refreshWidget = () => {
    const list = getConversations();
    setConversations(list);
    setUnreadCount(getChatUnreadCount(currentUser.email, true));
  };

  useEffect(() => {
    refreshWidget();

    const handleUpdate = () => {
      refreshWidget();
    };

    window.addEventListener('chat-updated', handleUpdate);
    return () => {
      window.removeEventListener('chat-updated', handleUpdate);
    };
  }, [currentUser]);

  // Handle active conversation updates and scroll
  const activeConv = activeConvEmail 
    ? conversations.find(c => c.employeeEmail.trim().toLowerCase() === activeConvEmail.trim().toLowerCase()) 
    : null;

  const visibleMessages = activeConv ? getVisibleMessages(activeConv, currentUser.email) : [];

  useEffect(() => {
    if (activeConvEmail) {
      markAsRead(activeConvEmail, true);
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConvEmail, visibleMessages.length]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !activeConvEmail) return;

    sendMessage(activeConvEmail, currentUser, true, messageInput.trim());
    setMessageInput('');

    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleDeleteConversation = () => {
    if (!activeConvEmail) return;
    deleteConversationSide(activeConvEmail, currentUser.email);
    setShowDeleteConfirm(false);
    setActiveConvEmail(null);
    refreshWidget();
  };

  // Filter conversations based on admin search and deleted state
  const filteredConvs = conversations.filter(conv => {
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 1. Chat Dialog Drawer Frame (Only rendered when expanded) */}
      {isOpen && (
        <div className="mb-4 w-[360px] h-[500px] rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200">
          
          {/* A. Widget Header */}
          <div className="bg-[#0063a9] text-white px-4 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              {activeConvEmail && (
                <button 
                  onClick={() => setActiveConvEmail(null)}
                  className="p-1 hover:bg-white/10 rounded-md transition"
                >
                  <ArrowLeft size={16} />
                </button>
              )}
              <div>
                <h4 className="text-sm font-bold flex items-center gap-1.5">
                  <MessageSquare size={16} />
                  <span>{activeConv ? activeConv.employeeName : 'Support Desks'}</span>
                </h4>
                <p className="text-[10px] text-blue-200 tracking-wider">
                  {activeConv ? activeConv.employeeDepartment : 'Instant System Chats'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {activeConvEmail && (
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="p-1 hover:bg-white/10 rounded-md text-red-200 hover:text-white transition"
                  title="Delete conversation on my side only"
                >
                  <Trash2 size={15} />
                </button>
              )}
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-md transition"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* B. Widget Main Area (Conversations list OR Active conversation workspace) */}
          <div className="flex-1 overflow-hidden flex flex-col min-h-0 bg-slate-50/20 dark:bg-slate-950/20">
            {!activeConvEmail ? (
              // B1. Conversations List View
              <div className="flex-1 flex flex-col min-h-0">
                <div className="p-3 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-white dark:bg-slate-900">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search support channels..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 text-slate-900 dark:text-slate-100 outline-none focus:border-[#0063a9] dark:focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                  {filteredConvs.length === 0 ? (
                    <div className="py-16 text-center text-slate-400 space-y-2">
                      <MessageSquare size={24} className="mx-auto opacity-30 text-slate-400" />
                      <p className="text-xs font-semibold">No active channels yet</p>
                    </div>
                  ) : (
                    filteredConvs.map((conv) => {
                      const lastMsg = conv.messages[conv.messages.length - 1];
                      const hasUnread = conv.adminsUnread;

                      return (
                        <button
                          key={conv.employeeEmail}
                          onClick={() => {
                            setActiveConvEmail(conv.employeeEmail);
                            markAsRead(conv.employeeEmail, true);
                          }}
                          className="w-full text-left p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg flex items-start gap-3 transition"
                        >
                          <div className="relative shrink-0">
                            <div className="h-9 w-9 rounded-full bg-[#0063a9]/10 text-[#0063a9] dark:bg-blue-950/40 dark:text-blue-300 font-bold flex items-center justify-center text-xs">
                              <User size={15} />
                            </div>
                            <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-emerald-500 ring-1 ring-white dark:ring-slate-900" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                                {conv.employeeName}
                              </span>
                              {hasUnread && (
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0" />
                              )}
                            </div>
                            <p className="text-[9px] font-bold uppercase text-slate-400 tracking-wider">
                              {conv.employeeDepartment}
                            </p>
                            <p className="text-[11px] truncate text-slate-500 dark:text-slate-400 mt-0.5">
                              {lastMsg ? lastMsg.content : 'No message history'}
                            </p>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            ) : (
              // B2. Active Channel Workspace View
              <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-slate-900">
                <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-0">
                  {visibleMessages.map((msg) => {
                    const isMe = msg.senderEmail.trim().toLowerCase() === currentUser.email.trim().toLowerCase();
                    const isSystem = msg.senderEmail === 'system@mgenesis.com';

                    if (isSystem) {
                      return (
                        <div key={msg.id} className="flex justify-center my-2">
                          <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] py-0.5 px-2 rounded-full border border-slate-200 dark:border-slate-700">
                            {msg.content}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'} items-end gap-1.5`}>
                        {!isMe && (
                          <div className="h-6 w-6 rounded-full bg-[#0063a9]/10 text-[#0063a9] dark:bg-blue-950/40 dark:text-blue-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                            <User size={12} />
                          </div>
                        )}
                        <div className="max-w-[75%] space-y-0.5">
                          {!isMe && (
                            <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider pl-1">
                              {msg.senderName}
                            </span>
                          )}
                          <div className={`p-2.5 rounded-xl text-xs leading-relaxed ${
                            isMe 
                              ? 'bg-[#0063a9] text-white rounded-br-none font-medium' 
                              : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200/40 dark:border-slate-700/60'
                          }`}>
                            <p className="whitespace-pre-wrap">{msg.content}</p>
                          </div>
                          <div className={`flex items-center gap-1 text-[9px] text-slate-400 dark:text-slate-500 ${isMe ? 'justify-end pr-1' : 'pl-1'}`}>
                            <span>
                              {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                            {isMe && <CheckCheck size={10} className="text-emerald-500" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 dark:border-slate-800 flex gap-2 items-center bg-slate-50/50 dark:bg-slate-950/20 shrink-0">
                  <input
                    type="text"
                    placeholder="Type your reply..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-slate-100 outline-none focus:border-[#0063a9]"
                  />
                  <button
                    type="submit"
                    disabled={!messageInput.trim()}
                    className="p-2 bg-[#0063a9] hover:bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed rounded-md transition"
                  >
                    <Send size={13} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Chat Circular Bubble Toggle Switch Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-[#0063a9] hover:bg-blue-700 text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 duration-200 relative cursor-pointer"
        title="Admin Support Workspace"
      >
        <MessageSquare size={24} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white dark:border-slate-950 bg-rose-500 px-1 text-[10px] font-bold leading-none text-white shadow-sm">
            {unreadCount}
          </span>
        )}
      </button>

      {/* 3. Side Conversation Deletion Popup Modal (Inside widget stack) */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400">
              <AlertCircle size={20} className="shrink-0" />
              <h3 className="text-sm font-bold">Delete Conversation?</h3>
            </div>
            
            <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Are you sure you want to delete this chat history? This deletes the log <strong>on your side only</strong>. The employee will still see the complete history.
            </p>

            <div className="mt-4 flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="px-3 py-1.5 text-[11px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 dark:text-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConversation}
                className="px-3 py-1.5 text-[11px] font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition"
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
