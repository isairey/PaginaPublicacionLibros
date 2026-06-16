import { useState } from "react";
import type { Book } from "../types/Book";
import BookForm from "../components/BookForm";
import Navbar from "../components/Navbar";

export default function Publish() {
  const [books, setBooks] = useState<Book[]>(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });

  const addBook = (book: Book) => {
    const updatedBooks = [book, ...books];

    setBooks(updatedBooks);

    localStorage.setItem(
      "books",
      JSON.stringify(updatedBooks)
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-1 text-sm text-zinc-600">
            Publicar historia
          </span>

          <h1 className="mt-5 text-6xl font-bold">
            Comparte tu libro.
          </h1>

          <p className="mt-4 text-xl text-zinc-500">
            Publica novelas, cuentos o relatos para que otros lectores puedan descubrirlos.
          </p>
        </div>

        <BookForm onAddBook={addBook} />
      </section>
    </div>
  );
}