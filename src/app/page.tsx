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
        <h1 className="text-4xl font-bold">
          Conexia: Conecta, Descubre y Transforma
        </h1>
        <p className="text-xl text-muted-foreground">
          Bienvenido a Conexia, el punto de encuentro donde las ideas se unen y
          las conexiones cobran vida. Sumérgete en una comunidad vibrante,
          explora perfiles de usuarios destacados y descubre publicaciones
          llenas de inspiración. ¡Tu nueva experiencia digital te espera!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Usuarios</CardTitle>
            <CardDescription>
              Encuantra todos los usuarios que tenemos en nuestro portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Vea una lista de todos los usuarios, filtre por nombre o nombre de
              usuario y vea información detallada sobre cada uno.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/users">Ver Usuarios</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Posts</CardTitle>
            <CardDescription>Explore posts y sus comentarios</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Explora todas las publicaciones, filtra y ordena por título y
              consulta información detallada, incluidos los comentarios.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/posts">Ver Posts</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
