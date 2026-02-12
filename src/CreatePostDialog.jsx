import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";

export function CreatePostDialog({ open, onOpenChange, user }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="border-b border-gray-200 px-4 py-3">
          <DialogTitle className="text-center text-lg font-semibold">
            Create post
          </DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <Avatar>
              <img src={user.avatar} alt={user.name} />
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900">{user.name}</span>
              <button className="text-xs px-2 py-1 rounded-md bg-gray-200 text-gray-700">
                Friends
              </button>
            </div>
          </div>
          <textarea
            className="w-full min-h-[120px] resize-none border-none focus:ring-0 text-lg placeholder:text-gray-500"
            placeholder={`What's on your mind, ${user.firstName}?`}
          />
          <div className="mt-4 border border-gray-200 rounded-lg flex items-center justify-between px-3 py-2">
            <span className="text-sm text-gray-600">Add to your post</span>
            <div className="flex gap-2">
              <button className="text-xl">📷</button>
              <button className="text-xl">👥</button>
              <button className="text-xl">😊</button>
            </div>
          </div>
          <Button className="w-full mt-4" disabled>
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
