import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { users, friendRequests, friendSuggestions, friends } from '../data/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Link } from 'react-router-dom';
import {
  Search,
  UserPlus,
  Users,
  UserCheck,
  Clock,
  MoreHorizontal,
  X
} from 'lucide-react';

const Friends = () => {
  const [activeTab, setActiveTab] = useState('suggestions');
  const [searchQuery, setSearchQuery] = useState('');
  const [localRequests, setLocalRequests] = useState(friendRequests);
  const [localSuggestions, setLocalSuggestions] = useState(friendSuggestions);

  const handleAcceptRequest = (requestId) => {
    setLocalRequests(prev => prev.filter(r => r.id !== requestId));
  };

  const handleDeleteRequest = (requestId) => {
    setLocalRequests(prev => prev.filter(r => r.id !== requestId));
  };

  const handleAddFriend = (suggestionId) => {
    setLocalSuggestions(prev => prev.filter(s => s.id !== suggestionId));
  };

  const handleRemoveSuggestion = (suggestionId) => {
    setLocalSuggestions(prev => prev.filter(s => s.id !== suggestionId));
  };

  const filteredFriends = friends.filter(friend =>
    `${friend.firstName} ${friend.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout showRightSidebar={false}>
      <div className="max-w-[940px] mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow">
          {/* Header */}
          <div className="p-4 border-b">
            <h1 className="text-2xl font-bold">Friends</h1>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="px-4 border-b">
              <TabsList className="bg-transparent gap-1 h-auto p-0">
                <TabsTrigger
                  value="suggestions"
                  className="px-4 py-3 text-[15px] font-semibold text-gray-500 rounded-none border-b-[3px] border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent hover:bg-gray-100 rounded-t-lg"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Suggestions
                </TabsTrigger>
                <TabsTrigger
                  value="requests"
                  className="px-4 py-3 text-[15px] font-semibold text-gray-500 rounded-none border-b-[3px] border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent hover:bg-gray-100 rounded-t-lg"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Friend Requests
                  {localRequests.length > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {localRequests.length}
                    </span>
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="all"
                  className="px-4 py-3 text-[15px] font-semibold text-gray-500 rounded-none border-b-[3px] border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent hover:bg-gray-100 rounded-t-lg"
                >
                  <Users className="w-4 h-4 mr-2" />
                  All Friends
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Suggestions Tab */}
            <TabsContent value="suggestions" className="p-4">
              <h2 className="text-xl font-bold mb-4">People you may know</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {localSuggestions.map((suggestion) => (
                  <div key={suggestion.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                    <Link to={`/profile/${suggestion.user.id}`}>
                      <img
                        src={suggestion.user.coverPhoto || suggestion.user.avatar}
                        alt={suggestion.user.firstName}
                        className="w-full h-[150px] object-cover"
                      />
                    </Link>
                    <div className="p-3">
                      <Link to={`/profile/${suggestion.user.id}`}>
                        <h3 className="font-semibold hover:underline">
                          {suggestion.user.firstName} {suggestion.user.lastName}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-500 mb-3">
                        {suggestion.user.mutualFriends} mutual friends
                      </p>
                      <Button
                        onClick={() => handleAddFriend(suggestion.id)}
                        className="w-full bg-blue-600 hover:bg-blue-700 mb-2"
                        size="sm"
                      >
                        <UserPlus className="w-4 h-4 mr-1" />
                        Add Friend
                      </Button>
                      <Button
                        onClick={() => handleRemoveSuggestion(suggestion.id)}
                        variant="secondary"
                        className="w-full"
                        size="sm"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                {/* Add more suggestions from users */}
                {users.slice(1).map((user) => (
                  <div key={user.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                    <Link to={`/profile/${user.id}`}>
                      <img
                        src={user.coverPhoto || user.avatar}
                        alt={user.firstName}
                        className="w-full h-[150px] object-cover"
                      />
                    </Link>
                    <div className="p-3">
                      <Link to={`/profile/${user.id}`}>
                        <h3 className="font-semibold hover:underline">
                          {user.firstName} {user.lastName}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-500 mb-3">
                        {user.mutualFriends || 5} mutual friends
                      </p>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 mb-2"
                        size="sm"
                      >
                        <UserPlus className="w-4 h-4 mr-1" />
                        Add Friend
                      </Button>
                      <Button
                        variant="secondary"
                        className="w-full"
                        size="sm"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Friend Requests Tab */}
            <TabsContent value="requests" className="p-4">
              <h2 className="text-xl font-bold mb-4">Friend Requests</h2>
              {localRequests.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {localRequests.map((request) => (
                    <div key={request.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                      <Link to={`/profile/${request.user.id}`}>
                        <img
                          src={request.user.coverPhoto || request.user.avatar}
                          alt={request.user.firstName}
                          className="w-full h-[150px] object-cover"
                        />
                      </Link>
                      <div className="p-3">
                        <Link to={`/profile/${request.user.id}`}>
                          <h3 className="font-semibold hover:underline">
                            {request.user.firstName} {request.user.lastName}
                          </h3>
                        </Link>
                        <p className="text-xs text-gray-500 mb-3">
                          {request.user.mutualFriends} mutual friends
                        </p>
                        <Button
                          onClick={() => handleAcceptRequest(request.id)}
                          className="w-full bg-blue-600 hover:bg-blue-700 mb-2"
                          size="sm"
                        >
                          Confirm
                        </Button>
                        <Button
                          onClick={() => handleDeleteRequest(request.id)}
                          variant="secondary"
                          className="w-full"
                          size="sm"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">No friend requests</p>
                </div>
              )}
            </TabsContent>

            {/* All Friends Tab */}
            <TabsContent value="all" className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">All Friends</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search friends"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64 bg-gray-100"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFriends.map((friend) => (
                  <div key={friend.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <Link to={`/profile/${friend.id}`} className="flex items-center gap-3">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={friend.avatar} />
                        <AvatarFallback>{friend.firstName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold hover:underline">
                          {friend.firstName} {friend.lastName}
                        </h3>
                        <p className="text-sm text-gray-500">{friend.friendsCount} friends</p>
                      </div>
                    </Link>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Friends;
