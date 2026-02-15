import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export function Post({ post }) {
  return (
    <Card className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <CardContent className="p-4 pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <img src={post.user.avatar} alt={post.user.name} />
          </Avatar>

          <div className="leading-tight">
            <p className="font-semibold text-gray-900">{post.user.name}</p>
            <p className="text-xs text-gray-500">
              <p className="line-clamp-2">{post.text}</p>
              {post.time} · <span className="text-gray-400">🌍</span>
            </p>
          </div>

          <button className="ml-auto text-gray-500 hover:bg-gray-100 p-2 rounded-full">
            ⋯
          </button>
        </div>
      </CardContent>

      {/* Text */}
      {post.text && (
        <CardContent className="px-4 pb-2 text-gray-800">
          <p className="line-clamp-4">{post.text}</p>
        </CardContent>
      )}

      {/* Image */}
      {post.image && (
        <div className="mt-2">
          <img
            src={post.image}
            alt=""
            className="w-full max-h-[600px] object-cover"
          />
        </div>
      )}

      {/* Stats */}
      <CardContent className="px-4 py-2">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span className="text-blue-600 text-lg">👍</span>
            <span>{post.likes}</span>
          </div>
          <div>
            {post.comments} comments · {post.shares} shares
          </div>
        </div>
      </CardContent>

      <div className="border-b border-gray-200"></div>

      {/* Action bar */}
      <CardContent className="px-4 py-1">
        <div className="flex justify-between text-gray-600 text-sm font-medium">
          <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg w-full justify-center">
            👍 Like
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg w-full justify-center">
            💬 Comment
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg w-full justify-center">
            ↗️ Share
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
