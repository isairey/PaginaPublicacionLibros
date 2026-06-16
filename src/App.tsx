/*import { useState, useRef } from "react";
import type { Book } from "./types/Book";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  const formRef = useRef<HTMLDivElement>(null);
  const booksRef = useRef<HTMLDivElement>(null);

  const addBook = (book: Book) => {
    setBooks((prev) => [book, ...prev]);
  };

  const deleteBook = (id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const likeBook = (id: string) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? { ...book, likes: book.likes + 1 }
          : book
      )
    );
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToBooks = () => {
    booksRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Navbar }
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="font-bold text-xl text-zinc-900">
            📚 BookVerse
          </h1>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert("Próximamente")}
              className="px-4 py-2 rounded-xl border border-zinc-200 hover:bg-zinc-100 transition"
            >
              Iniciar sesión
            </button>

            <button
              onClick={scrollToForm}
              className="px-4 py-2 rounded-xl bg-black text-white hover:bg-zinc-800 transition"
            >
              Registrarse
            </button>
          </div>
        </div>
      </nav>

      {/* Hero }
      <header className="border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <span className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-1 text-sm text-zinc-600">
            Plataforma para escritores
          </span>

          <h1 className="mt-6 text-6xl font-bold tracking-tight text-zinc-900">
            Publica tus historias.
          </h1>

          <p className="mt-6 text-xl text-zinc-500 max-w-3xl">
            Comparte novelas, cuentos y relatos con lectores de todo el mundo.
            Construye tu audiencia y crea tu propia biblioteca digital.
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={scrollToForm}
              className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-zinc-800 transition"
            >
              Comenzar gratis
            </button>

            <button
              onClick={scrollToBooks}
              className="px-6 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-100 transition"
            >
              Explorar libros
            </button>
          </div>
        </div>
      </header>

      {/* Estadísticas }
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-zinc-200 rounded-3xl p-6">
            <h3 className="text-zinc-500 text-sm">
              Libros publicados
            </h3>
            <p className="text-4xl font-bold mt-2">
              {books.length}
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6">
            <h3 className="text-zinc-500 text-sm">
              Likes totales
            </h3>
            <p className="text-4xl font-bold mt-2">
              {books.reduce((acc, book) => acc + book.likes, 0)}
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6">
            <h3 className="text-zinc-500 text-sm">
              Autores
            </h3>
            <p className="text-4xl font-bold mt-2">
              {new Set(books.map((b) => b.author)).size}
            </p>
          </div>
        </div>
      </section>

      {/* Buscador }
      <section className="max-w-7xl mx-auto px-6">
        <input
          type="text"
          placeholder="Buscar libros o autores..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-zinc-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
        />
      </section>

      {/* Formulario }
      <div ref={formRef}>
        <BookForm onAddBook={addBook} />
      </div>

      {/* Libros }
      <div ref={booksRef}>
        <BookList
          books={filteredBooks}
          onDelete={deleteBook}
          onLike={likeBook}
        />
      </div>
    </div>
  );
}
*/

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Publish from "./pages/Publish";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookDetails from "./pages/BookDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/explore"
        element={<Explore />}
      />

      <Route
        path="/publish"
        element={<Publish />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/book/:id"
        element={<BookDetails />}
      />
    </Routes>
  );
}