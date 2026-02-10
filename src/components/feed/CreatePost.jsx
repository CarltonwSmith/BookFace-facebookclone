import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Video, Image, Smile, MapPin, UserPlus, MoreHorizontal, X } from 'lucide-react';

const CreatePost = ({ onPost }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const handlePost = () => {
    if (content.trim() || selectedImages.length > 0) {
      onPost && onPost({
        content,
        images: selectedImages
      });
      setContent('');
      setSelectedImages([]);
      setIsOpen(false);
    }
  };

  const quickActions = [
    { icon: Video, label: 'Live video', color: 'text-red-500' },
    { icon: Image, label: 'Photo/video', color: 'text-green-500' },
    { icon: Smile, label: 'Feeling/activity', color: 'text-yellow-500' },
  ];

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{user?.firstName?.[0]}</AvatarFallback>
          </Avatar>
          <button
            onClick={() => setIsOpen(true)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full py-2.5 px-4 text-left text-gray-500 transition-colors"
          >
            What's on your mind, {user?.firstName}?
          </button>
        </div>

        <div className="border-t border-gray-200 mt-3 pt-3">
          <div className="flex items-center justify-around">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => setIsOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Icon className={`w-6 h-6 ${action.color}`} />
                  <span className="text-sm font-medium text-gray-600 hidden sm:inline">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg p-0">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="text-xl font-bold text-center">Create post</DialogTitle>
          </DialogHeader>

          <div className="p-4">
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback>{user?.firstName?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{user?.firstName} {user?.lastName}</p>
                <button className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-xs font-semibold">
                  <span>🌍</span> Public
                </button>
              </div>
            </div>

            {/* Content Input */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={`What's on your mind, ${user?.firstName}?`}
              className="w-full h-32 resize-none outline-none text-xl placeholder:text-gray-400"
            />

            {/* Selected Images Preview */}
            {selectedImages.length > 0 && (
              <div className="relative mt-4 p-2 border rounded-lg">
                <button
                  onClick={() => setSelectedImages([])}
                  className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100 z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="grid grid-cols-2 gap-2">
                  {selectedImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="Selected"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Add to Post */}
            <div className="flex items-center justify-between mt-4 p-3 border rounded-lg">
              <span className="font-semibold">Add to your post</span>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Image className="w-6 h-6 text-green-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <UserPlus className="w-6 h-6 text-blue-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Smile className="w-6 h-6 text-yellow-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MapPin className="w-6 h-6 text-red-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreHorizontal className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Post Button */}
            <button
              onClick={handlePost}
              disabled={!content.trim() && selectedImages.length === 0}
              className="w-full mt-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Post
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePost;
