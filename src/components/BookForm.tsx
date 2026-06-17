import { useState } from "react";
import type { Book } from "../types/Book";

interface Props {
  onAddBook: (book: Book) => void;
}

export default function BookForm({
  onAddBook,
}: Props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] =
    useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchGoogleBook = async (
    title: string
  ) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          title
        )}&maxResults=1`
      );

      const data = await response.json();

      if (
        data.items &&
        data.items.length > 0
      ) {
        const volume =
          data.items[0].volumeInfo;

        return {
          cover:
            volume.imageLinks?.thumbnail ||
            "",
          author:
            volume.authors?.[0] || "",
          description:
            volume.description || "",
        };
      }

      return null;
    } catch {
      return null;
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !author.trim() ||
      !description.trim() ||
      !content.trim()
    ) {
      alert(
        "Completa todos los campos obligatorios"
      );
      return;
    }

    setLoading(true);

    let finalCover = cover;

    if (!finalCover) {
      const googleBook =
        await fetchGoogleBook(title);

      if (googleBook?.cover) {
        finalCover = googleBook.cover;
      }
    }

    const newBook: Book = {
      id: crypto.randomUUID(),
      title,
      author,
      description,
      cover:
        finalCover ||
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200",
      likes: 0,
      content,
    };

    onAddBook(newBook);

    setTitle("");
    setAuthor("");
    setDescription("");
    setCover("");
    setContent("");

    setLoading(false);
  };

  const autoFillBook = async () => {
    if (!title.trim()) {
      alert(
        "Escribe primero el título del libro"
      );
      return;
    }

    setLoading(true);

    const googleBook =
      await fetchGoogleBook(title);

    if (googleBook) {
      if (!author)
        setAuthor(googleBook.author);

      if (!description)
        setDescription(
          googleBook.description
        );

      if (!cover)
        setCover(googleBook.cover);
    } else {
      alert(
        "No se encontró información para ese libro"
      );
    }

    setLoading(false);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white border border-emerald-100 rounded-[32px] p-8 shadow-lg">

        <div className="mb-8">
          <h2 className="text-4xl font-bold text-zinc-900">
             Publicar un libro
          </h2>

          <p className="text-zinc-500 mt-2">
            Comparte tus historias con la
            comunidad de BookVerse.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Título del libro"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="
                flex-1
                px-5
                py-4
                rounded-2xl
                border
                border-zinc-200
                outline-none
                focus:ring-2
                focus:ring-emerald-500
              "
            />

            <button
              type="button"
              onClick={autoFillBook}
              disabled={loading}
              className="
                px-6
                rounded-2xl
                bg-emerald-600
                text-white
                font-medium
                hover:bg-emerald-700
                transition
              "
            >
               Buscar
            </button>
          </div>

          <input
            type="text"
            placeholder="Nombre del autor"
            value={author}
            onChange={(e) =>
              setAuthor(e.target.value)
            }
            className="
              w-full
              px-5
              py-4
              rounded-2xl
              border
              border-zinc-200
              outline-none
              focus:ring-2
              focus:ring-emerald-500
            "
          />

          <input
            type="url"
            placeholder="URL de la portada (opcional)"
            value={cover}
            onChange={(e) =>
              setCover(e.target.value)
            }
            className="
              w-full
              px-5
              py-4
              rounded-2xl
              border
              border-zinc-200
              outline-none
              focus:ring-2
              focus:ring-emerald-500
            "
          />

          {cover && (
            <img
              src={cover}
              alt="preview"
              className="
                w-48
                rounded-2xl
                border
                border-zinc-200
              "
            />
          )}

          <textarea
            rows={4}
            placeholder="Descripción del libro"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="
              w-full
              px-5
              py-4
              rounded-2xl
              border
              border-zinc-200
              outline-none
              resize-none
              focus:ring-2
              focus:ring-emerald-500
            "
          />

          <textarea
            rows={12}
            placeholder="Escribe aquí el contenido completo de tu libro..."
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            className="
              w-full
              px-5
              py-4
              rounded-2xl
              border
              border-zinc-200
              outline-none
              resize-none
              focus:ring-2
              focus:ring-emerald-500
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-4
              rounded-2xl
              bg-emerald-600
              text-white
              font-semibold
              hover:bg-emerald-700
              transition
              disabled:opacity-50
            "
          >
            {loading
              ? "Publicando..."
              : " Publicar libro"}
          </button>
        </form>
      </div>
    </section>
  );
}