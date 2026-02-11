import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { groups } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Link } from 'react-router-dom';
import {
  Search,
  Plus,
  Compass,
  Users,
  Settings,
  Globe,
  Lock,
  MoreHorizontal
} from 'lucide-react';

const Groups = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [joinedGroups, setJoinedGroups] = useState(
    groups.filter(g => g.isJoined).map(g => g.id)
  );

  const handleJoinGroup = (groupId) => {
    setJoinedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const yourGroups = groups.filter(g => joinedGroups.includes(g.id));
  const suggestedGroups = groups.filter(g => !joinedGroups.includes(g.id));

  return (
    <MainLayout showRightSidebar={false} showLeftSidebar={false}>
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className="w-[360px] bg-white border-r fixed left-0 top-14 bottom-0 overflow-y-auto hidden lg:block">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Groups</h1>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
                <Settings className="w-5 h-5" />
              </Button>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search groups"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-100 border-none rounded-full"
              />
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setActiveTab('feed')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'feed' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  activeTab === 'feed' ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <Users className={`w-5 h-5 ${activeTab === 'feed' ? 'text-white' : ''}`} />
                </div>
                <span className="font-semibold">Your feed</span>
              </button>

              <button
                onClick={() => setActiveTab('discover')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'discover' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  activeTab === 'discover' ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <Compass className={`w-5 h-5 ${activeTab === 'discover' ? 'text-white' : ''}`} />
                </div>
                <span className="font-semibold">Discover</span>
              </button>

              <button
                onClick={() => setActiveTab('your-groups')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'your-groups' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  activeTab === 'your-groups' ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <Users className={`w-5 h-5 ${activeTab === 'your-groups' ? 'text-white' : ''}`} />
                </div>
                <span className="font-semibold">Your groups</span>
              </button>
            </div>

            <Button className="w-full mt-4 bg-blue-100 text-blue-600 hover:bg-blue-200">
              <Plus className="w-4 h-4 mr-2" />
              Create new group
            </Button>

            {/* Groups you've joined */}
            {yourGroups.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-500">Groups you've joined</h3>
                  <button className="text-blue-600 text-sm hover:underline">See all</button>
                </div>
                <div className="space-y-1">
                  {yourGroups.map((group) => (
                    <Link
                      key={group.id}
                      to={`/groups/${group.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <img
                        src={group.cover}
                        alt={group.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate">{group.name}</h4>
                        <p className="text-xs text-gray-500">Last active 2h ago</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-[360px]">
          <div className="max-w-[900px] mx-auto py-6 px-4">
            {activeTab === 'feed' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Recent activity</h2>
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="font-semibold mb-2">No recent activity</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    When your groups have new posts, they'll appear here.
                  </p>
                  <Button onClick={() => setActiveTab('discover')}>
                    Discover groups
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'discover' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Suggested for you</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredGroups.map((group) => (
                    <div key={group.id} className="bg-white rounded-lg shadow overflow-hidden">
                      <img
                        src={group.cover}
                        alt={group.name}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{group.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          {group.privacy === 'Public' ? (
                            <Globe className="w-4 h-4" />
                          ) : (
                            <Lock className="w-4 h-4" />
                          )}
                          <span>{group.privacy} group</span>
                          <span>·</span>
                          <span>{group.members.toLocaleString()} members</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {group.description}
                        </p>
                        <Button
                          onClick={() => handleJoinGroup(group.id)}
                          className={`w-full mt-4 ${
                            joinedGroups.includes(group.id)
                              ? 'bg-gray-200 text-black hover:bg-gray-300'
                              : 'bg-blue-600 hover:bg-blue-700'
                          }`}
                        >
                          {joinedGroups.includes(group.id) ? 'Joined' : 'Join group'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'your-groups' && (
              <div>
                <h2 className="text-xl font-bold mb-4">All groups you've joined</h2>
                {yourGroups.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {yourGroups.map((group) => (
                      <div key={group.id} className="bg-white rounded-lg shadow overflow-hidden">
                        <img
                          src={group.cover}
                          alt={group.name}
                          className="w-full h-[150px] object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-bold text-lg">{group.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <span>{group.members.toLocaleString()} members</span>
                            <span>·</span>
                            <span>{group.posts} posts</span>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button variant="secondary" className="flex-1">
                              View group
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-5 h-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow p-8 text-center">
                    <p className="text-gray-500">You haven't joined any groups yet.</p>
                    <Button onClick={() => setActiveTab('discover')} className="mt-4">
                      Discover groups
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Groups;
