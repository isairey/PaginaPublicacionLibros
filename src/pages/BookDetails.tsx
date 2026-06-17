import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import type { Book } from "../types/Book";

export default function BookDetails() {
  const { id } = useParams();

  const books: Book[] = JSON.parse(
    localStorage.getItem("books") || "[]"
  );

  const book = books.find(
    (b) => b.id === id
  );

  if (!book) {
    return (
      <div className="min-h-screen bg-emerald-50">
        <Navbar />

        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="text-8xl mb-6">
            
          </div>

          <h1 className="text-5xl font-bold text-zinc-900">
            Libro no encontrado
          </h1>

          <p className="mt-5 text-zinc-500 text-lg">
            Este libro no existe o fue eliminado.
          </p>

          <Link
            to="/explore"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              px-8
              py-4
              rounded-2xl
              bg-emerald-600
              text-white
              font-semibold
              hover:bg-emerald-700
              transition
            "
          >
            ← Volver a explorar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-emerald-100
            via-white
            to-emerald-50
          "
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>

              <span
                className="
                  inline-flex
                  px-4
                  py-2
                  rounded-full
                  bg-emerald-100
                  text-emerald-700
                  text-sm
                  font-semibold
                "
              >
                📖 Historia publicada
              </span>

              <h1
                className="
                  mt-8
                  text-6xl
                  lg:text-7xl
                  font-black
                  text-zinc-900
                  leading-tight
                "
              >
                {book.title}
              </h1>

              <p
                className="
                  mt-5
                  text-2xl
                  text-emerald-700
                  font-medium
                "
              >
                 {book.author}
              </p>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-zinc-600
                  max-w-2xl
                "
              >
                {book.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <div
                  className="
                    px-5
                    py-3
                    rounded-2xl
                    bg-white
                    border
                    border-emerald-100
                    shadow-sm
                  "
                >
                  ❤️ {book.likes} Likes
                </div>

                <div
                  className="
                    px-5
                    py-3
                    rounded-2xl
                    bg-white
                    border
                    border-emerald-100
                    shadow-sm
                  "
                >
                  📚 Lectura completa
                </div>

                <div
                  className="
                    px-5
                    py-3
                    rounded-2xl
                    bg-white
                    border
                    border-emerald-100
                    shadow-sm
                  "
                >
                  🌎 BookVerse
                </div>

              </div>

            </div>

            {/* Portada */}
            <div className="flex justify-center">

              <div
                className="
                  relative
                  group
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-emerald-300/20
                    blur-3xl
                    rounded-full
                    scale-110
                  "
                />

                <img
                  src={book.cover}
                  alt={book.title}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200";
                  }}
                  className="
                    relative
                    w-[380px]
                    h-[560px]
                    object-cover
                    rounded-[32px]
                    shadow-2xl
                    group-hover:scale-105
                    transition-all
                    duration-700
                  "
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Lectura */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div
          className="
            bg-white
            rounded-[40px]
            border
            border-emerald-100
            shadow-xl
            overflow-hidden
          "
        >
          <div
            className="
              px-10
              py-8
              border-b
              border-zinc-100
            "
          >
            <h2 className="text-3xl font-bold">
              Comenzar lectura
            </h2>

            <p className="text-zinc-500 mt-2">
              Disfruta de esta historia escrita por{" "}
              {book.author}
            </p>
          </div>

          <div className="p-10 lg:p-16">

            <div
              className="
                whitespace-pre-wrap
                text-xl
                leading-[2.2]
                text-zinc-700
                font-light
              "
            >
              {book.content}
            </div>

          </div>

        </div>

      </section>

      {/* Fin */}
      <section className="max-w-4xl mx-auto px-6 pb-24">

        <div
          className="
            bg-white
            border
            border-emerald-100
            rounded-[40px]
            p-12
            text-center
            shadow-lg
          "
        >
          <div className="text-6xl">
            
          </div>

          <h3 className="mt-6 text-4xl font-bold text-zinc-900">
            Fin de la historia
          </h3>

          <p className="mt-4 text-lg text-zinc-500">
            Gracias por leer
          </p>

          <p className="mt-2 text-emerald-700 font-semibold text-xl">
            "{book.title}"
          </p>

          <Link
            to="/explore"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              px-8
              py-4
              rounded-2xl
              bg-emerald-600
              text-white
              font-semibold
              hover:bg-emerald-700
              transition
            "
          >
             Explorar más libros
          </Link>

        </div>

      </section>
    </div>
  );
}