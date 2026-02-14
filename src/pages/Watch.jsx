export default function Watch() {
  return (
    <FacebookLayout
      sidebar={<Sidebar active="watch" />}
      main={<WatchFeed />}
      right={<ContactsList />}
    />
  );
}
