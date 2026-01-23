import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Stories from '../components/feed/Stories';
import CreatePost from '../components/feed/CreatePost';
import PostCard from '../components/feed/PostCard';
import { posts as initialPosts, currentUser } from '../data/mockData';

const Home = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handleNewPost = (newPostData) => {
    const newPost = {
      id: `post-${Date.now()}`,
      userId: currentUser.id,
      user: currentUser,
      content: newPostData.content,
      images: newPostData.images,
      createdAt: 'Just now',
      reactions: { like: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 },
      totalReactions: 0,
      comments: 0,
      shares: 0,
      userReaction: null
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <MainLayout>
      <div className="max-w-[680px] mx-auto py-6 px-4">
        <Stories />
        <div className="mt-4">
          <CreatePost onPost={handleNewPost} />
        </div>
        <div className="mt-4 space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
