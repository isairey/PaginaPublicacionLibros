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
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-bold">
          Explorar libros
        </h1>

        <p className="mt-4 text-zinc-500 text-xl">
          Descubre historias creadas por la comunidad.
        </p>

        <input
          type="text"
          placeholder="Buscar libros..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            mt-8
            w-full
            px-5
            py-4
            bg-white
            border
            border-zinc-200
            rounded-2xl
          "
        />
      </section>

      <BookList
        books={filteredBooks}
        onDelete={deleteBook}
        onLike={likeBook}
      />
    </div>
  );
}