import { FacebookLayout } from "@/layouts/FacebookLayout";
import { Sidebar } from "@/components/layout/Sidebar";
import { MarketplaceGrid } from "@/components/MarketplaceGrid";
import { ContactsList } from "@/components/ContactsList";

export default function Marketplace() {
  return (
    <FacebookLayout
      sidebar={<Sidebar active="marketplace" />}
      main={<MarketplaceGrid />}
      right={<ContactsList />}
    />
  );
}
