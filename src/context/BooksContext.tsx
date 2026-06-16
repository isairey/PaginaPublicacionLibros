import { createContext } from "react";
import type { Book } from "../types/Book";

export interface BooksContextType {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const BooksContext =
  createContext<BooksContextType | null>(null);