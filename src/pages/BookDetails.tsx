import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import type { Book } from "../types/Book";

export default function BookDetails() {
  const { id } = useParams();

  const books: Book[] = JSON.parse(
    localStorage.getItem("books") || "[]"
  );

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <Navbar />

        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold text-zinc-900">
            Libro no encontrado
          </h1>

          <p className="mt-4 text-zinc-500">
            Este libro no existe o fue eliminado.
          </p>

          <Link
            to="/explore"
            className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-xl"
          >
            Volver a explorar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-1 text-sm text-zinc-600">
                📚 Historia publicada
              </span>

              <h1 className="mt-6 text-6xl font-bold tracking-tight text-zinc-900">
                {book.title}
              </h1>

              <p className="mt-4 text-xl text-zinc-500">
                ✍️ {book.author}
              </p>

              <p className="mt-8 text-lg text-zinc-600 leading-8">
                {book.description}
              </p>

              <div className="mt-8 flex gap-4">
                <div className="bg-zinc-100 px-4 py-2 rounded-xl">
                  ❤️ {book.likes} Likes
                </div>

                <div className="bg-zinc-100 px-4 py-2 rounded-xl">
                  📖 Lectura completa
                </div>
              </div>
            </div>

            <div>
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl border border-zinc-200 p-10 shadow-sm">

          <div className="prose prose-zinc max-w-none">
            <div className="whitespace-pre-wrap text-lg leading-9 text-zinc-700">
              {book.content}
            </div>
          </div>

        </div>
      </section>

      {/* Footer lectura */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 text-center">

          <h3 className="text-2xl font-bold">
            Fin de la historia
          </h3>

          <p className="mt-3 text-zinc-500">
            Gracias por leer "{book.title}"
          </p>

          <Link
            to="/explore"
            className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-zinc-800 transition"
          >
            Explorar más libros
          </Link>

        </div>
      </section>
    </div>
  );
}