import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function WatchFeed() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardContent>
            <div className="h-64 bg-black rounded-lg mb-3" />
            <p className="text-gray-900 font-semibold">Video title {i}</p>
            <p className="text-gray-600 text-sm">Page name · 10K views</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
