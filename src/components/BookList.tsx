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
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-zinc-900">
          No hay libros publicados
        </h2>

        <p className="mt-3 text-zinc-500">
          Sé el primero en compartir una historia.
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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