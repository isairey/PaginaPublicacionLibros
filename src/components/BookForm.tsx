import { useState } from "react";
import type { Book } from "../types/Book";

interface Props {
  onAddBook: (book: Book) => void;
}

export default function BookForm({ onAddBook }: Props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !author.trim() ||
      !description.trim() ||
      !content.trim()
    ) {
      return;
    }

    const newBook: Book = {
      id: crypto.randomUUID(),
      title,
      author,
      description,
      cover:
        cover ||
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
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Publicar un libro
          </h2>

          <p className="text-zinc-500 mt-2">
            Comparte tus historias con miles de lectores.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Título del libro"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-zinc-200 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="Nombre del autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-zinc-200 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="url"
            placeholder="URL de la portada (opcional)"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-zinc-200 outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            rows={4}
            placeholder="Descripción del libro"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-zinc-200 outline-none focus:ring-2 focus:ring-black resize-none"
          />

          <textarea
            rows={12}
            placeholder="Escribe aquí el contenido completo de tu libro..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-zinc-200 outline-none focus:ring-2 focus:ring-black resize-none"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl font-medium hover:bg-zinc-800 transition"
          >
            📚 Publicar libro
          </button>
        </form>
      </div>
    </section>
  );
}