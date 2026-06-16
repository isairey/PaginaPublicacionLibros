import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="font-bold text-xl"
        >
          BookVerse
        </Link>

        <div className="flex gap-3">
          <Link
  to="/explore"
  className="px-4 py-2 rounded-xl border"
>
  Explorar
</Link>

<Link
  to="/publish"
  className="px-4 py-2 rounded-xl border"
>
  Publicar
</Link>

          <Link
            to="/login"
            className="px-4 py-2 rounded-xl border"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-xl bg-black text-white"
          >
            Registro
          </Link>


          
        </div>
      </div>
    </nav>
  );
}