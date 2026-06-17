
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
export default function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();
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

      navigate("/explore");
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Correo o contraseña incorrectos");
          break;

        default:
          alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8f4] overflow-hidden relative">
<Navbar />
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-green-200/40 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-emerald-100/60 blur-[150px]" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div className="
          w-full
          max-w-6xl
          grid
          lg:grid-cols-2
          rounded-[40px]
          overflow-hidden
          bg-white
          border
          border-green-100
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        ">

          {/* Left */}
          <div className="
            hidden
            lg:flex
            flex-col
            justify-center
            p-16
            bg-gradient-to-br
            from-green-50
            to-white
          ">

            <span className="
              inline-flex
              w-fit
              px-4
              py-2
              rounded-full
              border
              border-green-200
              bg-white
              text-green-700
              text-sm
              font-medium
            ">
              📚 Plataforma para escritores
            </span>

            <h1 className="
              mt-8
              text-6xl
              font-bold
              leading-tight
              text-zinc-900
            ">
              Comparte tus
              <br />
              historias con
              <br />
              el mundo.
            </h1>

            <p className="
              mt-8
              text-zinc-600
              text-lg
              max-w-lg
            ">
              Publica novelas, cuentos y relatos.
              Construye una audiencia, recibe
              comentarios y crea tu biblioteca
              digital profesional.
            </p>

            <div className="mt-12 flex gap-10">
              <div>
                <h3 className="text-4xl font-bold text-green-700">
                  10K+
                </h3>

                <p className="text-zinc-500">
                  Lectores
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-700">
                  2K+
                </h3>

                <p className="text-zinc-500">
                  Historias
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-700">
                  500+
                </h3>

                <p className="text-zinc-500">
                  Autores
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white p-10 lg:p-16">

            <div className="max-w-md mx-auto">

              <h2 className="
                text-4xl
                font-bold
                text-zinc-900
              ">
                Bienvenido 👋
              </h2>

              <p className="mt-3 text-zinc-500">
                Inicia sesión para continuar
                en BookVerse.
              </p>

              <form
                onSubmit={handleLogin}
                className="mt-10 space-y-5"
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
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-zinc-200
                    bg-zinc-50
                    outline-none
                    focus:border-green-500
                    focus:ring-4
                    focus:ring-green-100
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
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-zinc-200
                    bg-zinc-50
                    outline-none
                    focus:border-green-500
                    focus:ring-4
                    focus:ring-green-100
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    py-4
                    rounded-2xl
                    bg-green-700
                    text-white
                    font-medium
                    hover:bg-green-800
                    transition
                    shadow-lg
                  "
                >
                  {loading
                    ? "Iniciando sesión..."
                    : "Iniciar sesión"}
                </button>

              </form>

              <div className="mt-8 text-center">
                <p className="text-zinc-500">
                  ¿No tienes cuenta?
                </p>

                <Link
                  to="/register"
                  className="
                    mt-2
                    inline-block
                    font-semibold
                    text-green-700
                    hover:text-green-800
                  "
                >
                  Crear cuenta
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

