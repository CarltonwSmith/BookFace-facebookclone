import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { conversations, messages as initialMessages, friends } from '../data/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import {
  Search,
  Edit,
  MoreHorizontal,
  Phone,
  Video,
  Info,
  Image,
  Smile,
  ThumbsUp,
  Send,
  ArrowLeft,
  Plus,
  Mic,
  GripVertical
} from 'lucide-react';

const Messages = () => {
  const { user } = useAuth();
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeConversation]);

  const handleSendMessage = () => {
    if (newMessage.trim() && activeConversation) {
      const convId = activeConversation.id;
      const newMsg = {
        id: `m${Date.now()}`,
        senderId: user.id,
        content: newMessage,
        timestamp: 'Just now'
      };
      setMessages(prev => ({
        ...prev,
        [convId]: [...(prev[convId] || []), newMsg]
      }));
      setNewMessage('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    `${conv.participant.firstName} ${conv.participant.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const currentMessages = messages[activeConversation?.id] || [];

  return (
    <div className="h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-[360px] border-r flex flex-col">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Chats</h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
                <Edit className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search Messenger"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-100 border-none rounded-full"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setActiveConversation(conv)}
              className={`w-full flex items-center gap-3 p-3 hover:bg-gray-100 transition-colors ${
                activeConversation?.id === conv.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="relative">
                <Avatar className="w-14 h-14">
                  <AvatarImage src={conv.participant.avatar} />
                  <AvatarFallback>{conv.participant.firstName[0]}</AvatarFallback>
                </Avatar>
                {conv.isOnline && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold">
                  {conv.participant.firstName} {conv.participant.lastName}
                </h3>
                <p className={`text-sm truncate ${
                  conv.unread > 0 ? 'font-semibold text-black' : 'text-gray-500'
                }`}>
                  {conv.lastMessage}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs text-gray-500">{conv.timestamp}</span>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      {activeConversation ? (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-3 border-b">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={activeConversation.participant.avatar} />
                  <AvatarFallback>{activeConversation.participant.firstName[0]}</AvatarFallback>
                </Avatar>
                {activeConversation.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>
              <div>
                <h2 className="font-semibold">
                  {activeConversation.participant.firstName} {activeConversation.participant.lastName}
                </h2>
                <p className="text-xs text-gray-500">
                  {activeConversation.isOnline ? 'Active now' : 'Offline'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-50">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-50">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-50">
                <Info className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {currentMessages.map((message) => {
              const isOwn = message.senderId === user?.id || message.senderId === 'user-1';
              return (
                <div
                  key={message.id}
                  className={`flex items-end gap-2 ${isOwn ? 'flex-row-reverse' : ''}`}
                >
                  {!isOwn && (
                    <Avatar className="w-7 h-7">
                      <AvatarImage src={activeConversation.participant.avatar} />
                      <AvatarFallback>{activeConversation.participant.firstName[0]}</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-[18px] ${
                      isOwn
                        ? 'bg-blue-600 text-white rounded-br-sm'
                        : 'bg-gray-100 text-black rounded-bl-sm'
                    }`}
                  >
                    <p className="text-[15px]">{message.content}</p>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="p-3 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-blue-600">
                <Plus className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-600">
                <Image className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-600">
                <Smile className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-600">
                <Mic className="w-6 h-6" />
              </Button>
              <div className="flex-1 relative">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Aa"
                  className="rounded-full bg-gray-100 border-none pr-10"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Smile className="w-5 h-5 text-blue-600" />
                </button>
              </div>
              {newMessage ? (
                <Button
                  onClick={handleSendMessage}
                  variant="ghost"
                  size="icon"
                  className="text-blue-600"
                >
                  <Send className="w-6 h-6" />
                </Button>
              ) : (
                <Button variant="ghost" size="icon" className="text-blue-600">
                  <ThumbsUp className="w-6 h-6" />
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Edit className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-500">Select a conversation to start messaging</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
