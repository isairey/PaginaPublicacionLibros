import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      <div className="max-w-md mx-auto mt-20 bg-white border border-zinc-200 rounded-3xl p-8">

        <h1 className="text-3xl font-bold">
          Crear cuenta
        </h1>

        <div className="mt-6 space-y-4">
          <input
            placeholder="Nombre"
            className="w-full p-4 border rounded-xl"
          />

          <input
            placeholder="Correo"
            className="w-full p-4 border rounded-xl"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-4 border rounded-xl"
          />

          <button className="w-full bg-black text-white p-4 rounded-xl">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}