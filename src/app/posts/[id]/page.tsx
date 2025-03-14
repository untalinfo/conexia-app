import { getPost, getPostComments, getUser } from "@/lib/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CommentSection } from "./comment-section";
import { toast } from "react-toastify";

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  try {
    // Fetch post and comments on the server
    const post = await getPost(params.id);
    const comments = await getPostComments(params.id);
    const user = await getUser(post.userId.toString());

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight line-clamp-1">
            {post.title}
          </h1>
          <Button asChild variant="outline">
            <Link href="/posts">Back to Posts</Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
            <CardDescription>
              By{" "}
              <Link
                href={`/users/${user.id}`}
                className="underline hover:text-primary"
              >
                {user.name}
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line">{post.body}</p>
          </CardContent>
        </Card>

        <CommentSection initialComments={comments} postId={params.id} />
      </div>
    );
  } catch (error) {
    toast.error(`${error}`)
    notFound();
  }
}
