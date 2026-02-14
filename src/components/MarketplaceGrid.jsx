import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function MarketplaceGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} className="overflow-hidden">
          <div className="h-40 bg-gray-300" />
          <CardContent className="pt-3">
            <p className="font-semibold text-gray-900">$25 · Item {i}</p>
            <p className="text-xs text-gray-600">Phoenix · 2 miles away</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
