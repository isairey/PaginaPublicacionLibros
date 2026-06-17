import { useEffect, useState } from "react";
import type { Book } from "../types/Book";
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function Explore() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    const saved = localStorage.getItem("books");

    if (saved) {
      setBooks(JSON.parse(saved));
    }
  }, []);

  const deleteBook = (id: string) => {
    const updated = books.filter(
      (book) => book.id !== id
    );

    setBooks(updated);

    localStorage.setItem(
      "books",
      JSON.stringify(updated)
    );
  };

  const likeBook = (id: string) => {
    const updated = books.map((book) =>
      book.id === id
        ? {
            ...book,
            likes: book.likes + 1,
          }
        : book
    );

    setBooks(updated);

    localStorage.setItem(
      "books",
      JSON.stringify(updated)
    );
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      book.author
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f7faf7]">

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-200/30 blur-[120px]" />
          <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-emerald-100/40 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <span
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-white
              border
              border-green-100
              text-green-700
              text-sm
              font-medium
              shadow-sm
            "
          >
             Comunidad BookVerse
          </span>

          <h1
            className="
              mt-8
              text-7xl
              font-bold
              tracking-tight
              text-zinc-900
              max-w-4xl
            "
          >
            Descubre historias
            <br />
            increíbles.
          </h1>

          <p
            className="
              mt-8
              text-xl
              text-zinc-600
              max-w-2xl
            "
          >
            Explora novelas, cuentos y relatos
            publicados por escritores de todo el
            mundo. Encuentra tu próxima lectura
            favorita.
          </p>

          {/* Buscador */}
          <div className="mt-12 max-w-3xl">

            <div
              className="
                bg-white
                border
                border-zinc-200
                rounded-3xl
                shadow-lg
                p-3
              "
            >
              <input
                type="text"
                placeholder="Buscar libros, autores o historias..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  px-5
                  py-4
                  text-lg
                  bg-transparent
                  outline-none
                "
              />
            </div>

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">

        <div className="grid md:grid-cols-3 gap-6">

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              border
              border-zinc-200
              shadow-sm
            "
          >
            <p className="text-zinc-500">
              Libros publicados
            </p>

            <h2 className="mt-3 text-5xl font-bold text-green-700">
              {books.length}
            </h2>
          </div>

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              border
              border-zinc-200
              shadow-sm
            "
          >
            <p className="text-zinc-500">
              Likes totales
            </p>

            <h2 className="mt-3 text-5xl font-bold text-green-700">
              {books.reduce(
                (acc, book) =>
                  acc + (book.likes || 0),
                0
              )}
            </h2>
          </div>

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              border
              border-zinc-200
              shadow-sm
            "
          >
            <p className="text-zinc-500">
              Autores
            </p>

            <h2 className="mt-3 text-5xl font-bold text-green-700">
              {
                new Set(
                  books.map(
                    (book) => book.author
                  )
                ).size
              }
            </h2>
          </div>

        </div>
      </section>

      {/* Título */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-8">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-4xl font-bold text-zinc-900">
              Biblioteca
            </h2>

            <p className="mt-2 text-zinc-500">
              {filteredBooks.length} historias
              encontradas
            </p>
          </div>

          {user && (
            <div
              className="
                hidden
                md:flex
                items-center
                gap-3
                bg-white
                px-5
                py-3
                rounded-2xl
                border
                border-zinc-200
              "
            >
              <span></span>

              <span className="text-zinc-700">
                {user.email}
              </span>
            </div>
          )}

        </div>

      </section>

      {/* Libros */}
      <BookList
        books={filteredBooks}
        onDelete={deleteBook}
        onLike={likeBook}
      />

    </div>
  );
}