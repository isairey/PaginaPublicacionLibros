import type { Book } from "../types/Book";
import { Link } from "react-router-dom";

interface Props {
  book: Book;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
}

export default function BookCard({
  book,
  onDelete,
  onLike,
}: Props) {
  return (
    <div
      className="
        group
        bg-white
        border
        border-zinc-200
        rounded-3xl
        overflow-hidden
        hover:border-zinc-300
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      {/* Portada */}
      <div className="overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="
            w-full
            h-72
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <p className="text-sm text-zinc-500">
          ✍️ {book.author}
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 mt-2">
          {book.title}
        </h2>

        <p className="text-zinc-600 mt-3 line-clamp-3">
          {book.description}
        </p>

        {/* Acciones */}
        <div className="flex items-center justify-between mt-6">
          <Link
            to={`/book/${book.id}`}
            className="
              text-sm
              font-medium
              text-black
              hover:text-zinc-600
              transition
            "
          >
            Leer →
          </Link>

          <button
            onClick={() => onLike(book.id)}
            className="
              px-3
              py-1.5
              rounded-xl
              bg-zinc-100
              hover:bg-zinc-200
              transition
              text-sm
            "
          >
            ❤️ {book.likes}
          </button>
        </div>

        {/* Eliminar */}
        <button
          onClick={() => onDelete(book.id)}
          className="
            w-full
            mt-4
            py-2.5
            rounded-xl
            border
            border-red-200
            text-red-600
            hover:bg-red-50
            transition
          "
        >
          Eliminar libro
        </button>
      </div>
    </div>
  );
}