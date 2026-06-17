import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

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

      alert("Cuenta creada");

      navigate("/explore");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6">
      <div className="bg-white border border-zinc-200 rounded-3xl p-10 w-full max-w-md">
        <h1 className="text-4xl font-bold">
          Crear cuenta
        </h1>

        <p className="mt-3 text-zinc-500">
          Únete a BookVerse
        </p>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-4"
        >
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full px-4 py-3 rounded-xl border border-zinc-200"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full px-4 py-3 rounded-xl border border-zinc-200"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white"
          >
            Registrarse
          </button>
        </form>

        <p className="mt-5 text-center text-zinc-500">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="text-black font-medium"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}