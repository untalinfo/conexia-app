import { getPosts } from "@/lib/api";
import { PostList } from "./post-list";

export default async function PostsPage() {
  // Fetch posts on the server
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
        <p className="text-muted-foreground">Explore posts y sus comentarios</p>
      </div>

      <PostList initialPosts={posts} />
    </div>
  );
}
