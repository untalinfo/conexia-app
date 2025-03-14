import type { User, Post, Comment} from "@/types"

const API_BASE_URL = "https://jsonplaceholder.typicode.com"

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${API_BASE_URL}/users`)
  if (!response.ok) {
    throw new Error("Failed to fetch users")
  }
  return response.json()
}

export async function getUser(id: string): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/users/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch user with id ${id}`)
  }
  return response.json()
}

export async function getUserPosts(userId: string): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/posts`)
  if (!response.ok) {
    throw new Error(`Failed to fetch posts for user with id ${userId}`)
  }
  return response.json()
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts`)
  if (!response.ok) {
    throw new Error("Failed to fetch posts")
  }
  return response.json()
}

export async function getPost(id: string): Promise<Post> {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch post with id ${id}`)
  }
  return response.json()
}

export async function getPostComments(postId: string): Promise<Comment[]> {
  const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`)
  if (!response.ok) {
    throw new Error(`Failed to fetch comments for post with id ${postId}`)
  }
  return response.json()
}