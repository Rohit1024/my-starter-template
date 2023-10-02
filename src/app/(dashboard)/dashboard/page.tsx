import { CardSkeleton } from "@/components/card-skeleton";
import { Header } from "@/components/header";
import { Shell } from "@/components/shell";

export default function Dashboard() {
  return (
    <Shell>
      <Header
        title="Dashboard"
        description="Manage Dashboard Settings here..."
      />
      <div className="grid gap-10">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </Shell>
  );
}
