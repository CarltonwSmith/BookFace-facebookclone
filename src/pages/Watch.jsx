import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { videos } from '../data/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent } from '../components/ui/dialog';
import {
  Search,
  Home,
  Tv,
  Video,
  Bookmark,
  Clock,
  Play,
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  X
} from 'lucide-react';

const Watch = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'live', icon: Tv, label: 'Live' },
    { id: 'reels', icon: Video, label: 'Reels' },
    { id: 'saved', icon: Bookmark, label: 'Saved videos' },
  ];

  return (
    <MainLayout showRightSidebar={false} showLeftSidebar={false}>
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className="w-[360px] bg-white border-r fixed left-0 top-14 bottom-0 overflow-y-auto hidden lg:block">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Watch</h1>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
                <Search className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-blue-600' : 'bg-gray-200'
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                    </div>
                    <span className="font-semibold">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="border-t my-4" />

            <h3 className="font-semibold text-gray-500 mb-2">Your Watch List</h3>
            <div className="space-y-2">
              {videos.slice(0, 3).map((video) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-16 h-10 object-cover rounded"
                  />
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium line-clamp-2">{video.title}</p>
                    <p className="text-xs text-gray-500">{video.views}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-[360px]">
          <div className="max-w-[900px] mx-auto py-6 px-4">
            <h2 className="text-xl font-bold mb-6">
              {activeTab === 'home' && 'Videos for you'}
              {activeTab === 'live' && 'Live videos'}
              {activeTab === 'reels' && 'Reels'}
              {activeTab === 'saved' && 'Saved videos'}
            </h2>

            <div className="space-y-4">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden">
                  {/* Video Creator Info */}
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={video.creator.avatar} />
                        <AvatarFallback>{video.creator.firstName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">
                          {video.creator.firstName} {video.creator.lastName}
                        </p>
                        <p className="text-xs text-gray-500">{video.createdAt}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Video Thumbnail */}
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{video.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{video.views}</p>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-around mt-4 pt-4 border-t">
                      <Button variant="ghost" className="flex-1">
                        <ThumbsUp className="w-5 h-5 mr-2" />
                        Like
                      </Button>
                      <Button variant="ghost" className="flex-1">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Comment
                      </Button>
                      <Button variant="ghost" className="flex-1">
                        <Share2 className="w-5 h-5 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          {selectedVideo && (
            <div>
              <div className="relative">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <div className="aspect-video">
                  <iframe
                    src={selectedVideo.videoUrl.replace('watch?v=', 'embed/') + '?autoplay=1'}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="bg-white p-4">
                <h2 className="font-bold text-lg">{selectedVideo.title}</h2>
                <div className="flex items-center gap-3 mt-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={selectedVideo.creator.avatar} />
                    <AvatarFallback>{selectedVideo.creator.firstName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">
                      {selectedVideo.creator.firstName} {selectedVideo.creator.lastName}
                    </p>
                    <p className="text-sm text-gray-500">{selectedVideo.views}</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default Watch;
