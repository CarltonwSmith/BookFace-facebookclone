import React from "react";

export function ContactsList() {
  const contacts = ["Contact 1", "Contact 2", "Contact 3"];

  return (
    <div className="space-y-2">
      {contacts.map((name) => (
        <div key={name} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <span className="text-sm text-gray-800">{name}</span>
        </div>
      ))}
    </div>
  );
}
