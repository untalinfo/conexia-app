import type { User } from "@/types"

const API_BASE_URL = "https://jsonplaceholder.typicode.com"

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${API_BASE_URL}/users`)
  if (!response.ok) {
    throw new Error("Failed to fetch users")
  }
  return response.json()
}