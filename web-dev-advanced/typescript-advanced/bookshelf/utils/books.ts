import type { TBook } from "../types/book.d.ts";

export const books: TBook[] = [
  {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "first Book",
    author: "first author",
    isbn: [123, "first publisher", "first titleIdentifier"],
    isAvailable: true,
  },
  {
    id: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "second Book",
    author: "second author",
    isbn: [123, "second publisher", "second titleIdentifier"],
    isAvailable: false,
  },
  {
    id: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "third Book",
    author: "third author",
    isbn: [123, "third publisher", "third titleIdentifier"],
    isAvailable: false,
  },
  {
    id: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "fourth Book",
    author: "fourth author",
    isbn: [123, "fourth publisher", "fourth titleIdentifier"],
    isAvailable: false,
  },
  {
    id: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "fifth Book",
    author: "first author",
    isbn: [123, "fifth publisher", "fifth titleIdentifier"],
    isAvailable: false,
  },
];
