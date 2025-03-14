import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to CONEXIA App</h1>
        <p className="text-xl text-muted-foreground">
          A Next.js 14 application that consumes JSONPlaceholder API
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Browse and filter users from JSONPlaceholder
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              View a list of all users, filter by name or username, and see
              detailed information about each user.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/users">View Users</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Posts</CardTitle>
            <CardDescription>Explore posts and their comments</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Browse all posts, filter and sort by title, and view detailed
              information including comments.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/posts">View Posts</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
