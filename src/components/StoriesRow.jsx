import React from "react";
import { Card } from "@/components/ui/card";

export function StoriesRow() {
  const stories = Array.from({ length: 5 });

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {stories.map((_, i) => (
        <Card
          key={i}
          className="min-w-[110px] h-[190px] relative overflow-hidden cursor-pointer hover:shadow-md"
        >
          <div className="absolute inset-0 bg-gray-300" />
          <div className="absolute bottom-2 left-2 text-white text-sm font-semibold drop-shadow">
            Story {i + 1}
          </div>
        </Card>
      ))}
    </div>
  );
}
