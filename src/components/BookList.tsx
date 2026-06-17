import type { Book } from "../types/Book";
import BookCard from "./BookCard";

interface Props {
  books: Book[];
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
}

export default function BookList({
  books,
  onDelete,
  onLike,
}: Props) {
  if (books.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div
          className="
            bg-white
            border
            border-emerald-100
            rounded-[40px]
            p-16
            text-center
            shadow-lg
          "
        >
          <div className="text-7xl mb-6">
            📚
          </div>

          <h2 className="text-4xl font-bold text-zinc-900">
            Aún no hay libros publicados
          </h2>

          <p className="mt-4 text-lg text-zinc-500 max-w-xl mx-auto">
            Comienza a construir tu biblioteca digital.
            Publica tu primera historia y compártela
            con lectores de todo el mundo.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <div
              className="
                px-5
                py-2
                rounded-full
                bg-emerald-50
                text-emerald-700
                text-sm
                font-medium
              "
            >
              ✍️ Escribe
            </div>

            <div
              className="
                px-5
                py-2
                rounded-full
                bg-emerald-50
                text-emerald-700
                text-sm
                font-medium
              "
            >
              📖 Comparte
            </div>

            <div
              className="
                px-5
                py-2
                rounded-full
                bg-emerald-50
                text-emerald-700
                text-sm
                font-medium
              "
            >
              ❤️ Inspira
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">

      {/* Encabezado */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-4xl font-bold text-zinc-900">
            Biblioteca
          </h2>

          <p className="mt-2 text-zinc-500">
            {books.length} libro
            {books.length !== 1 ? "s" : ""} publicado
            {books.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div
          className="
            hidden
            md:flex
            items-center
            gap-2
            px-4
            py-2
            rounded-2xl
            bg-emerald-50
            text-emerald-700
            font-medium
          "
        >
          📚 {books.length}
        </div>
      </div>

      {/* Grid */}
      <div
        className="
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onDelete={onDelete}
            onLike={onLike}
          />
        ))}
      </div>
    </section>
  );
}