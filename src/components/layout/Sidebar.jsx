import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { groups, friends } from '../../data/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  Users,
  UserPlus,
  UsersRound,
  Clock,
  Bookmark,
  Flag,
  Calendar,
  Gamepad2,
  PlaySquare,
  Store,
  Heart,
  ChevronDown
} from 'lucide-react';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const menuItems = [
    { icon: null, label: `${user?.firstName} ${user?.lastName}`, path: `/profile/${user?.id}`, avatar: user?.avatar },
    { icon: Users, label: 'Friends', path: '/friends' },
    { icon: UsersRound, label: 'Groups', path: '/groups' },
    { icon: Store, label: 'Marketplace', path: '/marketplace' },
    { icon: PlaySquare, label: 'Watch', path: '/watch' },
    { icon: Clock, label: 'Memories', path: '/memories' },
    { icon: Bookmark, label: 'Saved', path: '/saved' },
    { icon: Flag, label: 'Pages', path: '/pages' },
    { icon: Calendar, label: 'Events', path: '/events' },
    { icon: Gamepad2, label: 'Gaming', path: '/gaming' },
    { icon: Heart, label: 'Fundraisers', path: '/fundraisers' },
  ];

  return (
    <aside className="fixed left-0 top-14 w-[280px] h-[calc(100vh-56px)] overflow-y-auto pb-4 hidden lg:block">
      <div className="p-2">
        {menuItems.slice(0, 6).map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors ${
                isActive ? 'bg-gray-100' : ''
              }`}
            >
              {item.avatar ? (
                <Avatar className="w-9 h-9">
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback>{item.label[0]}</AvatarFallback>
                </Avatar>
              ) : (
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-700" />
                </div>
              )}
              <span className="font-medium text-[15px]">{item.label}</span>
            </Link>
          );
        })}

        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors w-full">
          <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center">
            <ChevronDown className="w-5 h-5" />
          </div>
          <span className="font-medium text-[15px]">See more</span>
        </button>

        <div className="border-t border-gray-200 my-3" />

        <h3 className="px-2 py-1 text-gray-500 font-semibold text-[17px]">Your shortcuts</h3>
        {groups.filter(g => g.isJoined).map((group) => (
          <Link
            key={group.id}
            to={`/groups/${group.id}`}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img
              src={group.cover}
              alt={group.name}
              className="w-9 h-9 rounded-lg object-cover"
            />
            <span className="font-medium text-[15px] truncate">{group.name}</span>
          </Link>
        ))}

        <div className="px-2 pt-4 text-xs text-gray-500">
          <p>Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2025</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
