import { FacebookLayout } from "@/layouts/FacebookLayout";
import { Sidebar } from "@/components/layout/Sidebar";
import { CreatePost } from "@/components/CreatePost";
import { StoriesRow } from "@/components/StoriesRow";

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
