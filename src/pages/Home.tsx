import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-1 text-sm text-zinc-600">
          Plataforma para escritores
        </span>

        <h1 className="mt-6 text-7xl font-bold tracking-tight">
          Publica tus historias.
        </h1>

        <p className="mt-6 text-xl text-zinc-500 max-w-3xl">
          Comparte novelas, cuentos y relatos con lectores de todo el mundo.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            to="/register"
            className="px-6 py-3 rounded-xl bg-black text-white"
          >
            Comenzar gratis
          </Link>

          <Link
  to="/publish"
  className="
    px-6
    py-3
    rounded-xl
    bg-black
    text-white
  "
>
  Publicar libro
</Link>

<Link
  to="/explore"
  className="
    px-6
    py-3
    rounded-xl
    border
  "
>
  Explorar libros
</Link>
        </div>
      </section>
    </div>
  );
}