import React, { useState } from "react";
import { FacebookLayout } from "@/layouts/FacebookLayout";
import { Sidebar } from "@/components/layout/Sidebar";
import { StoriesRow } from "@/components/StoriesRow";
import { CreatePost } from "@/components/feed/CreatePost";
import { CreatePostDialog } from "@/components/feed/CreatePostDialog";
import { ContactsList } from "@/components/ContactsList";
import { FeedPosts } from "@/components/feed/FeedPosts";


export default function Home() {
  const [open, setOpen] = useState(false);

  const user = {
    name: "Carlton Thompson",
    firstName: "Carlton",
    avatar: "/avatar.jpg",
  };

  return (
    <FacebookLayout
      sidebar={<Sidebar active="home" />}
      main={
        <>
        <>
  <StoriesRow />
  <CreatePost user={user} onOpen={() => setOpen(true)} />
  <CreatePostDialog open={open} onOpenChange={setOpen} user={user} />
  <FeedPosts />
</>

          <StoriesRow />
          <CreatePost user={user} onOpen={() => setOpen(true)} />
          <CreatePostDialog open={open} onOpenChange={setOpen} user={user} />
          {/* FeedPosts will go here */}
        </>
      }
      right={<ContactsList />}
    />
  );
}
