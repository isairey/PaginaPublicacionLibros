import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Bienvenido a BookVerse 📚");

      navigate("/explore");
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Correo o contraseña incorrectos");
          break;

        case "auth/user-not-found":
          alert("Usuario no encontrado");
          break;

        case "auth/wrong-password":
          alert("Contraseña incorrecta");
          break;

        case "auth/invalid-email":
          alert("Correo inválido");
          break;

        default:
          alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-zinc-900">
              Bienvenido
            </h1>

            <p className="mt-3 text-zinc-500">
              Inicia sesión en BookVerse
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-4"
          >
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                px-4
                py-3
                rounded-2xl
                border
                border-zinc-200
                outline-none
                focus:ring-2
                focus:ring-black
              "
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                w-full
                px-4
                py-3
                rounded-2xl
                border
                border-zinc-200
                outline-none
                focus:ring-2
                focus:ring-black
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-3
                rounded-2xl
                bg-black
                text-white
                font-medium
                hover:bg-zinc-800
                transition
                disabled:opacity-50
              "
            >
              {loading
                ? "Iniciando sesión..."
                : "Iniciar sesión"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zinc-500">
              ¿No tienes cuenta?
            </p>

            <Link
              to="/register"
              className="
                inline-block
                mt-2
                text-black
                font-medium
                hover:underline
              "
            >
              Crear una cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}