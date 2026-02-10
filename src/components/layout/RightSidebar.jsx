import React from 'react';
import { friends, friendSuggestions } from '../../data/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Search, MoreHorizontal, Video, Edit3 } from 'lucide-react';

const RightSidebar = () => {
  const onlineFriends = friends.filter(f => f.isOnline);

  return (
    <aside className="fixed right-0 top-14 w-[280px] h-[calc(100vh-56px)] overflow-y-auto pb-4 hidden xl:block">
      <div className="p-2">
        {/* Sponsored Section */}
        <div className="mb-4">
          <h3 className="px-2 py-1 text-gray-500 font-semibold text-[17px]">Sponsored</h3>
          <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop"
              alt="Ad"
              className="w-[120px] h-[120px] rounded-lg object-cover"
            />
            <div>
              <p className="font-medium text-sm">Premium Sneakers</p>
              <p className="text-xs text-gray-500">shoebrand.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 my-3" />

        {/* Friend Requests / Suggestions */}
        <div className="mb-4">
          <div className="flex items-center justify-between px-2 py-1">
            <h3 className="text-gray-500 font-semibold text-[17px]">Friend Requests</h3>
            <button className="text-blue-600 hover:underline text-sm">See all</button>
          </div>
          {friendSuggestions.slice(0, 2).map((suggestion) => (
            <div key={suggestion.id} className="flex items-center gap-3 p-2">
              <Avatar className="w-12 h-12">
                <AvatarImage src={suggestion.user.avatar} />
                <AvatarFallback>{suggestion.user.firstName[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-sm">{suggestion.user.firstName} {suggestion.user.lastName}</p>
                <p className="text-xs text-gray-500">{suggestion.user.mutualFriends} mutual friends</p>
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 bg-blue-600 text-white text-sm font-semibold py-1.5 px-3 rounded-md hover:bg-blue-700 transition-colors">
                    Confirm
                  </button>
                  <button className="flex-1 bg-gray-200 text-black text-sm font-semibold py-1.5 px-3 rounded-md hover:bg-gray-300 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 my-3" />

        {/* Birthdays */}
        <div className="mb-4">
          <h3 className="px-2 py-1 text-gray-500 font-semibold text-[17px]">Birthdays</h3>
          <div className="flex items-center gap-3 p-2">
            <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xl">🎂</span>
            </div>
            <p className="text-sm">
              <span className="font-semibold">Sarah Johnson</span> and <span className="font-semibold">2 others</span> have birthdays today.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 my-3" />

        {/* Contacts */}
        <div>
          <div className="flex items-center justify-between px-2 py-1">
            <h3 className="text-gray-500 font-semibold text-[17px]">Contacts</h3>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-gray-100 rounded-full">
                <Video className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-full">
                <Search className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-full">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
          {friends.map((friend) => (
            <button
              key={friend.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors w-full"
            >
              <div className="relative">
                <Avatar className="w-9 h-9">
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>{friend.firstName[0]}</AvatarFallback>
                </Avatar>
                {friend.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>
              <span className="font-medium text-[15px]">{friend.firstName} {friend.lastName}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
