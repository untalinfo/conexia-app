"use client";

import type { Post } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface UserPostsProps {
  initialPosts: Post[];
}

export function UserPosts({ initialPosts }: UserPostsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {initialPosts.length === 0 ? (
        <p className="col-span-full text-center py-4">
          Este usuario aun no tiene posts
        </p>
      ) : (
        initialPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{post.body}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/posts/${post.id}`}>Ver Post</Link>
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
}
