// src/components/ui/toast.jsx
import React from "react";
import { cn } from "@/lib/utils";

export function Toast({ title, description }) {
  return (
    <div
      className={cn(
        "bg-white shadow-lg rounded-lg p-4 border border-gray-200",
        "animate-in fade-in slide-in-from-top-5"
      )}
    >
      {title && <p className="font-semibold">{title}</p>}
      {description && (
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      )}
    </div>
  );
}

export function Toaster({ toasts }) {
  return (
    <div className="fixed top-4 right-4 flex flex-col gap-3 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          description={toast.description}
        />
      ))}
    </div>
  );
}
