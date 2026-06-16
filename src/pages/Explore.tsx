import { useEffect, useState } from "react";
import type { Book } from "../types/Book";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";

export default function Explore() {
  const [books, setBooks] = useState<Book[]>(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

useEffect(() => {
  localStorage.setItem(
    "books",
    JSON.stringify(books)
  );
}, [books]);

  const addBook = (book: Book) => {
    setBooks((prev) => [book, ...prev]);
  };

  const deleteBook = (id: string) => {
    setBooks((prev) =>
      prev.filter((book) => book.id !== id)
    );
  };

  const likeBook = (id: string) => {
  setBooks((prev) =>
    prev.map((book) =>
      book.id === id
        ? {
            ...book,
            likes: book.likes + 1,
          }
        : book
    )
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

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold mb-8">
          Explorar libros
        </h1>

        <input
          type="text"
          placeholder="Buscar libros o autores..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full bg-white border border-zinc-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
        />
      </section>

      <BookForm onAddBook={addBook} />

      <BookList
        books={filteredBooks}
        onDelete={deleteBook}
        onLike={likeBook}
      />
    </div>
  );
}