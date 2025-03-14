import { getUsers } from "@/lib/api";
import { UserList } from "./user-list";

export default async function UsersPage() {
  // Fetch users on the server
  const users = await getUsers();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Usuarios</h1>
        <p className="text-muted-foreground">
          Encuantra todos los usuarios que tenemos en nuestro portal
        </p>
      </div>

      <UserList initialUsers={users} />
    </div>
  );
}
