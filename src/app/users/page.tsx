import { getUsers } from "@/lib/api";
import { UserList } from "./user-list";

export default async function UsersPage() {
  // Fetch users on the server
  const users = await getUsers();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">
          Browse and filter users from JSONPlaceholder
        </p>
      </div>

      <UserList initialUsers={users} />
    </div>
  );
}
