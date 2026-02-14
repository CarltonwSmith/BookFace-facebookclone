import React, { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { StoriesRow } from "@/components/StoriesRow";
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
      {/* FeedPosts and ContactsList go here */}
    </>
  );
}


export default function Home() {
  return (
    <FacebookLayout
      sidebar={<Sidebar active="home" />}
      main={
        <>
          <StoriesRow />
          <CreatePost user={user} onOpen={() => setOpen(true)} />
          <FeedPosts />
        </>
      }
      right={<ContactsList />}
    />
  );
}
