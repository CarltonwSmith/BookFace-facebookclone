import { FacebookLayout } from "@/layouts/FacebookLayout";
import { Sidebar } from "@/components/layout/Sidebar";
import { WatchFeed } from "@/components/WatchFeed";
import { ContactsList } from "@/components/ContactsList";

export default function Watch() {
  return (
    <FacebookLayout
      sidebar={<Sidebar active="watch" />}
      main={<WatchFeed />}
      right={<ContactsList />}
    />
  );
}
