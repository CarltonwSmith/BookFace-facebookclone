import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

function App() {
  const { toasts, toast } = useToast();

  // Example: call toast({ title, description }) somewhere in your app
  // toast({ title: "Post created", description: "Your post is now live." });

  return (
    <>
      {/* your routes / layout here */}

      <Toaster toasts={toasts} />
    </>
  );
}

export default App;
