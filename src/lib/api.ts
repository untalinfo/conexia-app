import type { User, Post } from "@/types"

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
