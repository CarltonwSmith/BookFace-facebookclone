import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CreatePost({ user, onOpen }) {
  return (
    <Card className="mb-4">
      <CardHeader className="flex items-center gap-3 border-b border-gray-200">
        <Avatar>
          <img src={user.avatar} alt={user.name} />
        </Avatar>
        <button
          onClick={onOpen}
          className="flex-1 text-left bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full px-4 py-2 text-sm"
        >
          What&apos;s on your mind, {user.firstName}?
        </button>
      </CardHeader>
      <CardContent className="flex justify-between pt-3">
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg">
          <span className="text-red-500">●</span> Live video
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg">
          <span className="text-green-500">●</span> Photo/video
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg">
          <span className="text-yellow-500">●</span> Feeling/activity
        </button>
      </CardContent>
    </Card>
  );
}
