import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  MoreHorizontal,
  Globe,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  EyeOff,
  Flag,
  X,
  Heart,
  Laugh,
  Send
} from 'lucide-react';

const reactionEmojis = [
  { type: 'like', emoji: '👍', color: 'text-blue-600', bg: 'bg-blue-600' },
  { type: 'love', emoji: '❤️', color: 'text-red-500', bg: 'bg-red-500' },
  { type: 'haha', emoji: '😂', color: 'text-yellow-500', bg: 'bg-yellow-500' },
  { type: 'wow', emoji: '😮', color: 'text-yellow-500', bg: 'bg-yellow-500' },
  { type: 'sad', emoji: '😢', color: 'text-yellow-500', bg: 'bg-yellow-500' },
  { type: 'angry', emoji: '😡', color: 'text-orange-500', bg: 'bg-orange-500' },
];

const PostCard = ({ post }) => {
  const [userReaction, setUserReaction] = useState(post.userReaction);
  const [showReactions, setShowReactions] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, user: post.user, text: 'This is amazing! 🔥', timestamp: '1h' },
    { id: 2, user: { firstName: 'John', lastName: 'Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' }, text: 'Totally agree with this!', timestamp: '45m' },
  ]);

  const handleReaction = (reactionType) => {
    setUserReaction(userReaction === reactionType ? null : reactionType);
    setShowReactions(false);
  };

  const handleComment = () => {
    if (commentText.trim()) {
      setComments([...comments, {
        id: Date.now(),
        user: { firstName: 'You', lastName: '', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
        text: commentText,
        timestamp: 'Just now'
      }]);
      setCommentText('');
    }
  };

  const currentReaction = reactionEmojis.find(r => r.type === userReaction);

  const getTopReactions = () => {
    const sortedReactions = Object.entries(post.reactions)
      .filter(([_, count]) => count > 0)
      .sort(([_, a], [__, b]) => b - a)
      .slice(0, 3);
    return sortedReactions.map(([type]) => reactionEmojis.find(r => r.type === type));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Post Header */}
      <div className="flex items-start justify-between p-4">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.user.id}`}>
            <Avatar className="w-10 h-10 cursor-pointer hover:opacity-90 transition-opacity">
              <AvatarImage src={post.user.avatar} />
              <AvatarFallback>{post.user.firstName[0]}</AvatarFallback>
            </Avatar>
          </Link>
          <div>
            <Link to={`/profile/${post.user.id}`} className="font-semibold hover:underline">
              {post.user.firstName} {post.user.lastName}
            </Link>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>{post.createdAt}</span>
              <span>·</span>
              <Globe className="w-3 h-3" />
            </div>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuItem className="p-3 cursor-pointer">
              <Bookmark className="w-5 h-5 mr-3" />
              <div>
                <p className="font-semibold">Save post</p>
                <p className="text-xs text-gray-500">Add this to your saved items.</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-3 cursor-pointer">
              <EyeOff className="w-5 h-5 mr-3" />
              <div>
                <p className="font-semibold">Hide post</p>
                <p className="text-xs text-gray-500">See fewer posts like this.</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-3 cursor-pointer">
              <Flag className="w-5 h-5 mr-3" />
              <div>
                <p className="font-semibold">Report post</p>
                <p className="text-xs text-gray-500">I'm concerned about this post.</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{post.content}</p>
      </div>

      {/* Post Images */}
      {post.images && post.images.length > 0 && (
        <div className="relative">
          {post.images.length === 1 ? (
            <img
              src={post.images[0]}
              alt="Post"
              className="w-full max-h-[500px] object-cover cursor-pointer"
            />
          ) : (
            <div className="grid grid-cols-2 gap-1">
              {post.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Post ${index + 1}`}
                  className="w-full h-64 object-cover cursor-pointer"
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Reactions & Comments Count */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1">
            {getTopReactions().map((reaction, index) => (
              <span
                key={index}
                className={`w-[18px] h-[18px] ${reaction?.bg} rounded-full flex items-center justify-center text-xs border border-white`}
              >
                {reaction?.emoji}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">
            {post.totalReactions.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <button onClick={() => setShowComments(!showComments)} className="hover:underline">
            {post.comments} comments
          </button>
          <span>{post.shares} shares</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="border-t border-b border-gray-200 mx-4 py-1">
        <div className="flex items-center justify-around">
          {/* Like Button */}
          <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg w-full justify-center">
            <span className="animate-bounce-in text-blue-600 text-lg">👍</span>
            Like
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold text-sm">Comment</span>
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
            <Share2 className="w-5 h-5" />
            <span className="font-semibold text-sm">Share</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="p-4">
          {/* Comment Input */}
          <div className="flex items-start gap-2 mb-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
              <AvatarFallback>Y</AvatarFallback>
            </Avatar>
            <div className="flex-1 relative">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleComment()}
                placeholder="Write a comment..."
                className="w-full bg-gray-100 rounded-full py-2 px-4 pr-10 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleComment}
                disabled={!commentText.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 disabled:text-gray-400"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-3">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={comment.user.avatar} />
                  <AvatarFallback>{comment.user.firstName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-gray-100 rounded-2xl px-3 py-2">
                    <p className="font-semibold text-sm">{comment.user.firstName} {comment.user.lastName}</p>
                    <p className="text-sm">{comment.text}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-1 px-2 text-xs text-gray-500">
                    <button className="font-semibold hover:underline">Like</button>
                    <button className="font-semibold hover:underline">Reply</button>
                    <span>{comment.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
