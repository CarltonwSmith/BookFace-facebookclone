import React from "react";
import { Post } from "./Post";

export function FeedPosts() {
  const posts = [
    {
      id: 1,
      user: {
        name: "John Carter",
        avatar: "/avatars/user1.jpg",
      },
      time: "2h",
      text: "What a beautiful day in Phoenix!",
      image: "/images/post1.jpg",
      likes: 120,
      comments: 14,
      shares: 3,
    },
    {
      id: 2,
      user: {
        name: "Sarah Williams",
        avatar: "/avatars/user2.jpg",
      },
      time: "5h",
      text: "New project coming soon 👀",
      likes: 89,
      comments: 22,
      shares: 1,
    },
  ];

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

