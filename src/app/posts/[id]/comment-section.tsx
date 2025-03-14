"use client";

import type React from "react";

import { useState } from "react";
import type { Comment as UserComment } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPostComments } from "@/lib/api";
import { toast } from "react-toastify";


interface CommentSectionProps {
  initialComments: UserComment[];
  postId: string;
}

export function CommentSection({
  initialComments,
  postId,
}: CommentSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  // Use TanStack Query for client-side data fetching with initial data from SSR
  const { data: comments } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getPostComments(postId),
    initialData: initialComments,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !body) {
      toast.error(`Error: description: Please fill in all fields`
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Create new comment (client-side only)
      const newComment: UserComment = {
        postId: Number.parseInt(postId),
        id: Date.now(), // Use timestamp as temporary ID
        name,
        email,
        body,
      };

      // Update cache with new comment
      queryClient.setQueryData<UserComment[]>(
        ["comments", postId],
        (oldData = []) => [newComment, ...oldData]
      );

      // Reset form
      setName("");
      setEmail("");
      setBody("");

      toast.success("Success: Comment added successfully");
    } catch (error) {
      toast.error(`Error: Failed to add comment -- ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">
        Comments ({comments.length})
      </h2>

      <Card>
        <CardHeader>
          <CardTitle>Add a Comment</CardTitle>
          <CardDescription>Share your thoughts about this post</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="comment" className="text-sm font-medium">
                Comment
              </label>
              <Textarea
                id="comment"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write your comment here..."
                rows={4}
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Comment"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardHeader>
              <CardTitle className="text-base">{comment.name}</CardTitle>
              <CardDescription>{comment.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{comment.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
