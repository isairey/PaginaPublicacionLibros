import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-xl text-zinc-900"
        >
           BookVerse
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/explore"
            className="px-4 py-2 rounded-xl border border-zinc-200 hover:bg-zinc-100 transition"
          >
            Explorar
          </Link>

          {user && (
            <Link
              to="/publish"
              className="px-4 py-2 rounded-xl border border-zinc-200 hover:bg-zinc-100 transition"
            >
              Publicar
            </Link>
          )}

          {user ? (
            <>
              <span className="hidden md:block text-sm text-zinc-600">
                👤 {user.email}
              </span>

              <button
                onClick={logout}
                className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl border border-zinc-200 hover:bg-zinc-100 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 rounded-xl bg-black text-white hover:bg-zinc-800 transition"
              >
                Registro
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}