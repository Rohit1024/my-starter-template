import { PostCreateButton } from "@/components/dashboard/post-create-button";
import { PostItem } from "@/components/dashboard/post-item";
import { Header } from "@/components/header";
import { Shell } from "@/components/shell";

export default function PostsLoading() {
  return (
    <Shell>
      <Header title="Posts" description="Create and manage posts.">
        <PostCreateButton />
      </Header>
      <div className="divide-border-200 divide-y rounded-md border">
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
      </div>
    </Shell>
  );
}
