import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Book } from "../types/Book";
import Navbar from "../components/Navbar";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const savedBooks = localStorage.getItem("books");

    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  const totalLikes = books.reduce(
    (acc, book) => acc + book.likes,
    0
  );

  const totalAuthors = new Set(
    books.map((book) => book.author)
  ).size;

  const featuredBooks = [...books]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const getBookCover = (book: Book) => {
    if (
      book.cover &&
      book.cover.trim() !== "" &&
      !book.cover.includes("unsplash")
    ) {
      return book.cover;
    }

    return `https://books.google.com/books/content?printsec=frontcover&img=1&zoom=1&source=gbs_api&q=${encodeURIComponent(
      `${book.title} ${book.author}`
    )}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-200/40 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-200/40 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <span
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-emerald-50
              border
              border-emerald-200
              text-emerald-700
              font-medium
            "
          >
            ✨ Plataforma moderna para escritores
          </span>

          <h1
            className="
              mt-8
              text-6xl
              md:text-8xl
              font-black
              tracking-tight
              text-zinc-900
              max-w-5xl
            "
          >
            Publica historias
            <br />
            que merecen ser leídas.
          </h1>

          <p
            className="
              mt-8
              text-xl
              text-zinc-600
              max-w-3xl
              leading-relaxed
            "
          >
            Comparte novelas, cuentos y relatos con miles
            de lectores. Construye tu audiencia y crea
            tu propia biblioteca digital.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="
                px-8
                py-4
                rounded-2xl
                bg-emerald-600
                text-white
                font-semibold
                hover:bg-emerald-700
                transition
              "
            >
              Comenzar gratis
            </Link>

            <Link
              to="/explore"
              className="
                px-8
                py-4
                rounded-2xl
                bg-white
                border
                border-zinc-200
                hover:bg-zinc-100
                transition
              "
            >
              Explorar historias
            </Link>

            <Link
              to="/publish"
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-emerald-300
                text-emerald-700
                bg-emerald-50
                hover:bg-emerald-100
                transition
              "
            >
              Publicar libro
            </Link>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div
            className="
              bg-white
              border
              border-zinc-200
              rounded-3xl
              p-8
              shadow-sm
            "
          >
            <p className="text-zinc-500">
              Libros publicados
            </p>

            <h3 className="text-5xl font-bold mt-3">
              {books.length}
            </h3>
          </div>

          <div
            className="
              bg-white
              border
              border-zinc-200
              rounded-3xl
              p-8
              shadow-sm
            "
          >
            <p className="text-zinc-500">
              Likes totales
            </p>

            <h3 className="text-5xl font-bold mt-3">
              {totalLikes}
            </h3>
          </div>

          <div
            className="
              bg-white
              border
              border-zinc-200
              rounded-3xl
              p-8
              shadow-sm
            "
          >
            <p className="text-zinc-500">
              Autores activos
            </p>

            <h3 className="text-5xl font-bold mt-3">
              {totalAuthors}
            </h3>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <span className="text-emerald-600 font-semibold">
            CARACTERÍSTICAS
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Todo para escritores
          </h2>

          <p className="mt-4 text-zinc-500 text-lg">
            Diseñado para autores independientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-lg transition">
            <div className="text-5xl">📚</div>

            <h3 className="mt-6 text-2xl font-bold">
              Publica fácilmente
            </h3>

            <p className="mt-3 text-zinc-500">
              Comparte tus historias en segundos.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-lg transition">
            <div className="text-5xl">❤️</div>

            <h3 className="mt-6 text-2xl font-bold">
              Recibe apoyo
            </h3>

            <p className="mt-3 text-zinc-500">
              Consigue lectores y likes.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-lg transition">
            <div className="text-5xl">🌎</div>

            <h3 className="mt-6 text-2xl font-bold">
              Alcance global
            </h3>

            <p className="mt-3 text-zinc-500">
              Llega a lectores de todo el mundo.
            </p>
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      {books.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-emerald-600 font-semibold">
                DESTACADOS
              </span>

              <h2 className="text-5xl font-bold mt-2">
                Historias populares
              </h2>
            </div>

            <Link
              to="/explore"
              className="text-emerald-600 font-semibold"
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="
                  group
                  bg-white
                  rounded-[32px]
                  overflow-hidden
                  border
                  border-zinc-200
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                <div className="overflow-hidden relative">
                  <img
                    src={getBookCover(book)}
                    alt={book.title}
                    className="
                      h-96
                      w-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-700
                    "
                    onError={(e) => {
                      (
                        e.target as HTMLImageElement
                      ).src =
                        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200";
                    }}
                  />

                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      bg-white/90
                      backdrop-blur
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                    "
                  >
                    ❤️ {book.likes}
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-sm text-emerald-700 font-medium">
                    ✍️ {book.author}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    {book.title}
                  </h3>

                  <p className="mt-4 text-zinc-600 line-clamp-3">
                    {book.description}
                  </p>

                  <Link
                    to={`/book/${book.id}`}
                    className="
                      inline-block
                      mt-6
                      text-emerald-700
                      font-semibold
                    "
                  >
                    Leer historia →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div
          className="
            rounded-[40px]
            bg-gradient-to-r
            from-emerald-600
            to-green-700
            p-16
            text-center
            text-white
          "
        >
          <h2 className="text-5xl font-bold">
            Tu próxima historia comienza hoy.
          </h2>

          <p className="mt-5 text-xl text-emerald-100">
            Miles de lectores están esperando tu obra.
          </p>

          <Link
            to="/publish"
            className="
              inline-block
              mt-8
              px-8
              py-4
              rounded-2xl
              bg-white
              text-emerald-700
              font-bold
              hover:scale-105
              transition
            "
          >
            Publicar ahora
          </Link>
        </div>
      </section>
    </div>
  );
}