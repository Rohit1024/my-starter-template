import { CardSkeleton } from "@/components/card-skeleton";
import { Header } from "@/components/header";
import { Shell } from "@/components/shell";

export default function DashboardAccountLoading() {
  return (
    <Shell>
      <Header
        title="Account"
        description="Manage account and website settings."
        size="default"
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </Shell>
  );
}
