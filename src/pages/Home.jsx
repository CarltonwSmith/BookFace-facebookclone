import React, { useState } from "react";
import { CreatePost } from "@/components/CreatePost";
import { CreatePostDialog } from "@/components/CreatePostDialog";

export default function Home() {
  const [open, setOpen] = useState(false);
  const user = {
    name: "Carlton Thompson",
    firstName: "Carlton",
    avatar: "/avatar.jpg",
  };

  return (
    <>
      <CreatePost user={user} onOpen={() => setOpen(true)} />
      <CreatePostDialog open={open} onOpenChange={setOpen} user={user} />
      {/* feed posts below */}
    </>
  );
}
