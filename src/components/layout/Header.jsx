import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { notifications } from '../../data/mockData';
import {
  Search,
  Home,
  Users,
  PlaySquare,
  Store,
  Menu,
  MessageCircle,
  Bell,
  ChevronDown,
  Settings,
  HelpCircle,
  Moon,
  LogOut,
  User
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const unreadNotifications = notifications.filter(n => !n.read).length;

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Users, path: '/friends', label: 'Friends' },
    { icon: PlaySquare, path: '/watch', label: 'Watch' },
    { icon: Store, path: '/marketplace', label: 'Marketplace' },
    { icon: Users, path: '/groups', label: 'Groups' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white shadow-sm z-50 px-4">
      <div className="flex items-center justify-between h-full max-w-[1920px] mx-auto">
        {/* Left Section - Logo & Search */}
        <div className="flex items-center gap-2 w-[280px]">
          <Link to="/" className="flex-shrink-0">
            <svg viewBox="0 0 36 36" className="w-10 h-10" fill="url(#fbGradient)">
              <defs>
                <linearGradient id="fbGradient" x1="50%" x2="50%" y1="97.078%" y2="0%">
                  <stop offset="0%" stopColor="#0062E0" />
                  <stop offset="100%" stopColor="#19AFFF" />
                </linearGradient>
              </defs>
              <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
              <path fill="white" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" />
            </svg>
          </Link>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search Facebook"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Center Section - Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 max-w-[600px] mx-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex-1 flex items-center justify-center h-12 rounded-lg mx-1 transition-all duration-200 relative group ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-6 h-6" />
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 rounded-t-full" />
                )}
                <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Section - Actions & Profile */}
        <div className="flex items-center gap-2 w-[280px] justify-end">
          <button className="md:hidden p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Menu className="w-5 h-5" />
          </button>

          <Link
            to="/messages"
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative">
                <Bell className="w-5 h-5" />
                {unreadNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadNotifications}
                  </span>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-2">
              <h3 className="font-bold text-xl px-2 py-1">Notifications</h3>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                      !notif.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={notif.user.avatar} />
                      <AvatarFallback>{notif.user.firstName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-semibold">{notif.user.firstName} {notif.user.lastName}</span>{' '}
                        {notif.content}
                      </p>
                      <p className="text-xs text-blue-600">{notif.timestamp}</p>
                    </div>
                    {!notif.read && (
                      <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 p-1 rounded-full hover:bg-gray-100 transition-colors">
                <Avatar className="w-9 h-9">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>{user?.firstName?.[0]}</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 p-2">
              <Link to={`/profile/${user?.id}`}>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback>{user?.firstName?.[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{user?.firstName} {user?.lastName}</p>
                    <p className="text-sm text-gray-500">See your profile</p>
                  </div>
                </div>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-2 cursor-pointer">
                <Settings className="w-5 h-5 mr-3" />
                Settings & Privacy
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2 cursor-pointer">
                <HelpCircle className="w-5 h-5 mr-3" />
                Help & Support
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2 cursor-pointer">
                <Moon className="w-5 h-5 mr-3" />
                Display & Accessibility
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="p-2 cursor-pointer">
                <LogOut className="w-5 h-5 mr-3" />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
