import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import type { Book } from "../types/Book";

export default function BookDetails() {
  const { id } = useParams();

  const books: Book[] = JSON.parse(
    localStorage.getItem("books") || "[]"
  );

  const book = books.find(
    (book) => book.id === id
  );

  if (!book) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <Navbar />

        <h1 className="text-center mt-20 text-4xl font-bold">
          Libro no encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-[500px] object-cover rounded-3xl"
        />

        <h1 className="text-5xl font-bold mt-10">
          {book.title}
        </h1>

        <p className="text-zinc-500 mt-3">
          ✍️ {book.author}
        </p>

        <p className="mt-8 text-zinc-600">
          {book.description}
        </p>

        <div className="mt-10 bg-white border rounded-3xl p-10 whitespace-pre-wrap leading-8">
          {book.content}
        </div>
      </div>
    </div>
  );
}