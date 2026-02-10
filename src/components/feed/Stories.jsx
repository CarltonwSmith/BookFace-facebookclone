import React, { useState } from 'react';
import { stories, currentUser } from '../../data/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent } from '../ui/dialog';

const Stories = () => {
  const [activeStory, setActiveStory] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = document.getElementById('stories-container');
    const scrollAmount = 200;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative">
        <div
          id="stories-container"
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Create Story Card */}
          <div className="flex-shrink-0 w-[112px] h-[200px] rounded-xl overflow-hidden bg-white shadow-sm border cursor-pointer group">
            <div className="relative h-[140px]">
              <img
                src={currentUser.avatar}
                alt="Create story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative bg-white h-[60px] flex flex-col items-center justify-end pb-3">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-center">Create story</span>
            </div>
          </div>

          {/* Story Cards */}
          {stories.slice(1).map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(story)}
              className="flex-shrink-0 w-[112px] h-[200px] rounded-xl overflow-hidden cursor-pointer relative group"
            >
              <img
                src={story.image}
                alt={story.user.firstName}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
              
              {/* User Avatar */}
              <div className={`absolute top-3 left-3 w-10 h-10 rounded-full ${story.hasNew ? 'ring-4 ring-blue-600' : 'ring-4 ring-gray-300'} bg-white`}>
                <Avatar className="w-full h-full">
                  <AvatarImage src={story.user.avatar} />
                  <AvatarFallback>{story.user.firstName[0]}</AvatarFallback>
                </Avatar>
              </div>

              {/* User Name */}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xs font-semibold truncate">
                  {story.user.firstName} {story.user.lastName}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Story Viewer Modal */}
      <Dialog open={!!activeStory} onOpenChange={() => setActiveStory(null)}>
        <DialogContent className="max-w-md p-0 overflow-hidden bg-black border-none">
          {activeStory && (
            <div className="relative w-full h-[600px]">
              <img
                src={activeStory.image}
                alt="Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
              
              {/* Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center gap-3">
                <Avatar className="w-10 h-10 ring-2 ring-white">
                  <AvatarImage src={activeStory.user.avatar} />
                  <AvatarFallback>{activeStory.user.firstName[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">
                    {activeStory.user.firstName} {activeStory.user.lastName}
                  </p>
                  <p className="text-white/70 text-xs">2h ago</p>
                </div>
                <button
                  onClick={() => setActiveStory(null)}
                  className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="absolute top-2 left-4 right-4 h-0.5 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-white w-1/2 rounded-full animate-pulse" />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Stories;
