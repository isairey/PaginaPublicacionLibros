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
        rounded-[32px]
        overflow-hidden
        border
        border-emerald-100
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >
      {/* Imagen */}
      <div className="relative overflow-hidden">

        <img
          src={book.cover}
          alt={book.title}
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200";
          }}
          className="
            w-full
            h-80
            object-cover
            group-hover:scale-110
            transition-transform
            duration-700
          "
        />

        {/* Gradiente */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            via-transparent
            to-transparent
          "
        />

        {/* Likes flotantes */}
        <div
          className="
            absolute
            top-4
            right-4
            bg-white/90
            backdrop-blur
            px-3
            py-1.5
            rounded-full
            text-sm
            font-semibold
            text-emerald-700
            shadow-md
          "
        >
          ❤️ {book.likes}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">

        <span
          className="
            inline-flex
            px-3
            py-1
            rounded-full
            bg-emerald-50
            text-emerald-700
            text-xs
            font-semibold
          "
        >
          ✍️ {book.author}
        </span>

        <h2
          className="
            mt-4
            text-2xl
            font-bold
            text-zinc-900
            line-clamp-2
          "
        >
          {book.title}
        </h2>

        <p
          className="
            mt-3
            text-zinc-600
            leading-relaxed
            line-clamp-4
          "
        >
          {book.description}
        </p>

        {/* Botones */}
        <div className="flex gap-3 mt-6">

          <Link
            to={`/book/${book.id}`}
            className="
              flex-1
              text-center
              py-3
              rounded-2xl
              bg-emerald-600
              text-white
              font-semibold
              hover:bg-emerald-700
              transition
            "
          >
            📖 Leer libro
          </Link>

          <button
            onClick={() => onLike(book.id)}
            className="
              px-4
              rounded-2xl
              border
              border-emerald-200
              text-emerald-700
              hover:bg-emerald-50
              transition
            "
          >
            ❤️
          </button>

        </div>

        <button
          onClick={() => onDelete(book.id)}
          className="
            w-full
            mt-3
            py-3
            rounded-2xl
            border
            border-red-100
            text-red-500
            hover:bg-red-50
            transition
            font-medium
          "
        >
          🗑️ Eliminar libro
        </button>

      </div>
    </div>
  );
}