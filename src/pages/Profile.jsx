import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PostCard from '../components/feed/PostCard';
import CreatePost from '../components/feed/CreatePost';
import { users, posts, friends } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Camera,
  UserPlus,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Clock,
  Users,
  Image as ImageIcon,
  Film,
  Calendar,
  Star
} from 'lucide-react';

const Profile = () => {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('posts');

  // Find user by ID or show current user
  const profileUser = userId ? users.find(u => u.id === userId) || currentUser : currentUser;
  const isOwnProfile = profileUser?.id === currentUser?.id;

  // Get user's posts
  const userPosts = posts.filter(p => p.userId === profileUser?.id);

  // Sample photos for the Photos tab
  const photos = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop',
  ];

  return (
    <MainLayout showRightSidebar={false}>
      <div className="bg-gray-100 min-h-screen">
        {/* Cover Photo & Profile Section */}
        <div className="bg-white shadow">
          <div className="max-w-[1095px] mx-auto">
            {/* Cover Photo */}
            <div className="relative h-[350px] rounded-b-lg overflow-hidden">
              <img
                src={profileUser?.coverPhoto || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop'}
                alt="Cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {isOwnProfile && (
                <Button className="absolute bottom-4 right-4 bg-white text-black hover:bg-gray-100">
                  <Camera className="w-4 h-4 mr-2" />
                  Edit cover photo
                </Button>
              )}
            </div>

            {/* Profile Info Section */}
            <div className="px-4 pb-4 relative">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                {/* Profile Picture */}
                <div className="relative -mt-[84px] md:-mt-[40px]">
                  <Avatar className="w-[168px] h-[168px] border-4 border-white shadow-lg">
                    <AvatarImage src={profileUser?.avatar} />
                    <AvatarFallback className="text-5xl">{profileUser?.firstName?.[0]}</AvatarFallback>
                  </Avatar>
                  {isOwnProfile && (
                    <button className="absolute bottom-2 right-2 w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <Camera className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Name & Stats */}
                <div className="flex-1 md:pb-4">
                  <h1 className="text-[32px] font-bold">
                    {profileUser?.firstName} {profileUser?.lastName}
                  </h1>
                  <p className="text-gray-500 font-medium">
                    {profileUser?.friendsCount?.toLocaleString()} friends
                    {!isOwnProfile && profileUser?.mutualFriends > 0 && (
                      <span> · {profileUser.mutualFriends} mutual</span>
                    )}
                  </p>
                  {/* Friends Avatars */}
                  <div className="flex -space-x-2 mt-2">
                    {friends.slice(0, 8).map((friend, index) => (
                      <Avatar key={index} className="w-8 h-8 border-2 border-white">
                        <AvatarImage src={friend.avatar} />
                        <AvatarFallback>{friend.firstName[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pb-4">
                  {isOwnProfile ? (
                    <>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Add to story
                      </Button>
                      <Button variant="secondary">
                        <Pencil className="w-4 h-4 mr-2" />
                        Edit profile
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Add Friend
                      </Button>
                      <Button variant="secondary">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                    </>
                  )}
                  <Button variant="secondary" size="icon">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="border-t mt-4 pt-1">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="bg-transparent gap-1 h-auto p-0">
                    {['Posts', 'About', 'Friends', 'Photos', 'Videos', 'Check-ins', 'More'].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab.toLowerCase()}
                        className="px-4 py-4 text-[15px] font-semibold text-gray-500 rounded-none border-b-[3px] border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent hover:bg-gray-100 rounded-t-lg"
                      >
                        {tab}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1095px] mx-auto py-4 px-4">
          <div className="flex gap-4">
            {/* Left Column - About */}
            <div className="w-[360px] flex-shrink-0 hidden lg:block space-y-4">
              {/* Intro Card */}
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-bold mb-4">Intro</h2>
                {profileUser?.bio && (
                  <p className="text-center text-gray-700 mb-4">{profileUser.bio}</p>
                )}
                <div className="space-y-3">
                  {profileUser?.workplace && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                      <span>Works at <strong>{profileUser.workplace}</strong></span>
                    </div>
                  )}
                  {profileUser?.education && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-5 h-5 text-gray-400" />
                      <span>Studied at <strong>{profileUser.education}</strong></span>
                    </div>
                  )}
                  {profileUser?.location && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span>Lives in <strong>{profileUser.location}</strong></span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span>Joined {profileUser?.joinedDate || 'January 2020'}</span>
                  </div>
                </div>
                {isOwnProfile && (
                  <Button variant="secondary" className="w-full mt-4">
                    Edit details
                  </Button>
                )}
              </div>

              {/* Photos Card */}
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Photos</h2>
                  <Link to="#" className="text-blue-600 hover:underline text-sm">See all photos</Link>
                </div>
                <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
                  {photos.slice(0, 9).map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-full aspect-square object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              {/* Friends Card */}
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">Friends</h2>
                    <p className="text-gray-500 text-sm">{profileUser?.friendsCount?.toLocaleString()} friends</p>
                  </div>
                  <Link to="#" className="text-blue-600 hover:underline text-sm">See all friends</Link>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {friends.slice(0, 9).map((friend) => (
                    <Link key={friend.id} to={`/profile/${friend.id}`} className="group">
                      <img
                        src={friend.avatar}
                        alt={friend.firstName}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                      <p className="text-xs font-semibold mt-1 group-hover:underline truncate">
                        {friend.firstName} {friend.lastName}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Posts */}
            <div className="flex-1 space-y-4">
              {isOwnProfile && <CreatePost />}
              
              {/* Posts Filter */}
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Posts</h2>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm">
                      <Star className="w-4 h-4 mr-1" />
                      Filters
                    </Button>
                    <Button variant="secondary" size="sm">
                      Manage posts
                    </Button>
                  </div>
                </div>
              </div>

              {/* Posts List */}
              {userPosts.length > 0 ? (
                userPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <p className="text-gray-500">No posts to show</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Add Plus icon that was missing
const Plus = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default Profile;
