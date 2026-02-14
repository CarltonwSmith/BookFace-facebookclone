import React from "react";

export function Sidebar({ active }) {
  const items = [
    { id: "home", label: "Home" },
    { id: "friends", label: "Friends" },
    { id: "groups", label: "Groups" },
    { id: "watch", label: "Watch" },
    { id: "marketplace", label: "Marketplace" },
  ];

  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <button
          key={item.id}
          className={`flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-200 transition ${
            active === item.id ? "bg-gray-200" : ""
          }`}
        >
          <span className="w-8 h-8 bg-gray-300 rounded-full" />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
