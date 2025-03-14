"use client"

import { useState } from "react"
import Link from "next/link"
import type { User } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useQuery } from "@tanstack/react-query"
import { getUsers } from "@/lib/api"

interface UserListProps {
  initialUsers: User[]
}

export function UserList({ initialUsers }: UserListProps) {
  const [searchTerm, setSearchTerm] = useState("")

  // Use TanStack Query for client-side data fetching with initial data from SSR
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    initialData: initialUsers,
  })

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Input
          placeholder="Filter by name or username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {filteredUsers.length === 0 ? (
        <p className="text-center py-4">No users found matching your search criteria.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <Card key={user.id}>
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <span className="font-medium">Username:</span> {user.username}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {user.email}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/users/${user.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

