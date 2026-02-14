export default function Marketplace() {
  return (
    <FacebookLayout
      sidebar={<Sidebar active="marketplace" />}
      main={<MarketplaceGrid />}
      right={<ContactsList />}
    />
  );
}
