import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Cuenta creada correctamente 🎉");

      navigate("/explore");
    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Este correo ya está registrado");
          break;

        case "auth/weak-password":
          alert(
            "La contraseña debe tener al menos 6 caracteres"
          );
          break;

        default:
          alert(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8f4] overflow-hidden relative">

      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-green-200/40 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-emerald-100/50 blur-[150px]" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div
          className="
            w-full
            max-w-6xl
            grid
            lg:grid-cols-2
            bg-white
            rounded-[40px]
            overflow-hidden
            border
            border-green-100
            shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          "
        >

          {/* Panel izquierdo */}
          <div
            className="
              hidden
              lg:flex
              flex-col
              justify-center
              p-16
              bg-gradient-to-br
              from-green-50
              to-white
            "
          >

            <span
              className="
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
              "
            >
              ✨ Únete a la comunidad
            </span>

            <h1
              className="
                mt-8
                text-6xl
                font-bold
                leading-tight
                text-zinc-900
              "
            >
              Comienza tu
              <br />
              aventura como
              <br />
              escritor.
            </h1>

            <p
              className="
                mt-8
                text-zinc-600
                text-lg
                max-w-lg
              "
            >
              Publica novelas, cuentos y relatos.
              Comparte tus historias con lectores
              de todo el mundo y construye tu
              propia audiencia.
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

          {/* Formulario */}
          <div className="bg-white p-10 lg:p-16">

            <div className="max-w-md mx-auto">

              <h2 className="text-4xl font-bold text-zinc-900">
                Crear cuenta 🚀
              </h2>

              <p className="mt-3 text-zinc-500">
                Empieza a publicar en BookVerse.
              </p>

              <form
                onSubmit={handleRegister}
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
                  Crear cuenta
                </button>

              </form>

              <div className="mt-8 text-center">

                <p className="text-zinc-500">
                  ¿Ya tienes una cuenta?
                </p>

                <Link
                  to="/login"
                  className="
                    mt-2
                    inline-block
                    font-semibold
                    text-green-700
                    hover:text-green-800
                  "
                >
                  Iniciar sesión
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}