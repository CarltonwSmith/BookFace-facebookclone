import React from "react";

export function FacebookLayout({ sidebar, main, right }) {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <div className="max-w-6xl mx-auto pt-4 px-2 md:px-4 flex gap-4">
        <aside className="hidden lg:block w-1/4 space-y-3">{sidebar}</aside>
        <main className="w-full lg:w-2/4 space-y-4">{main}</main>
        <aside className="hidden xl:block w-1/4 space-y-3">{right}</aside>
      </div>
    </div>
  );
}
