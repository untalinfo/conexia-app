import { getUser, getUserPosts } from "@/lib/api";
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
import { UserPosts } from "./user-posts";
import { toast } from "react-toastify";

interface UserDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  try {
    // Await params before using its properties
    const resolvedParams = await params;
    if (!resolvedParams?.id) {
      notFound();
    }
    // Fetch user and their posts on the server
    const user = await getUser(resolvedParams.id);
    const posts = await getUserPosts(resolvedParams.id);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{user.name}</h1>
          <Button asChild variant="outline">
            <Link href="/users">Regresar a usuarios</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Información del usuario</CardTitle>
              <CardDescription>Personal y detalles de contacto</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    Username
                  </span>
                  <span className="font-medium">{user.username}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <span className="font-medium">{user.email}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    Telefono
                  </span>
                  <span className="font-medium">{user.phone}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Website</span>
                  <span className="font-medium">{user.website}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Address</CardTitle>
              <CardDescription>{`User's location information`}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Dir</span>
                  <span className="font-medium">{user.address.street}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Suite</span>
                  <span className="font-medium">{user.address.suite}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Ciudad</span>
                  <span className="font-medium">{user.address.city}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Zipcode</span>
                  <span className="font-medium">{user.address.zipcode}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Compañia</CardTitle>
              <CardDescription>{`User's company information`}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Name</span>
                  <span className="font-medium">{user.company.name}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    Catch Phrase
                  </span>
                  <span className="font-medium">
                    {user.company.catchPhrase}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">BS</span>
                  <span className="font-medium">{user.company.bs}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Post del usuario
          </h2>
          <UserPosts initialPosts={posts} />
        </div>
      </div>
    );
  } catch (error) {
    toast.error(`${error}`);
    notFound();
  }
}
