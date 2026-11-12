// Service module

import type {
  IApiResponse,
  TBookPreview,
  TBook,
  TEntityId,
  TBookCreatePayload,
  TBookUpdatePayload,
  TIsbnParts,
} from "../types/book.d.ts";
import { books } from "../utils/books.js";

async function fetchBooks(): Promise<IApiResponse<TBookPreview[]>> {
  const response = await fetch("/api/books");
  const data = await response.json();
  return data as IApiResponse<TBookPreview[]>;
}

async function fetchBook(id: TEntityId): Promise<IApiResponse<TBook>> {
  const response = await fetch(`/api/books${id}`);
  const data = await response.json();
  return data as IApiResponse<TBook>;
}

async function createBook(
  payload: TBookCreatePayload,
): Promise<IApiResponse<TBook>> {
  const response = await fetch("/api/books", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return (await response.json()) as IApiResponse<TBook>;
}

async function updateBook(
  id: TEntityId,
  changes: TBookUpdatePayload,
): Promise<IApiResponse<TBook>> {
  const response = await fetch(`/api/books/${id}`);
  const data = await response.json();
  return data as IApiResponse<TBook>;
}

function parseIsbn(isbn: string): TIsbnParts {
  return [0, "", ""];
}

/*
Generic collection utilities
Write three generic utility functions that work with any object type. Test each one using an array of Book objects.

groupBy<T, K extends keyof T>(items: T[], key: K): Record<string, T[]> takes an array and a property name, then returns an object where each key is a distinct value of that property and each value is an array of matching items. Example: grouping books by author.

pluck<T, K extends keyof T>(items: T[], key: K): T[K][] takes an array and a property name, then returns an array containing just that property’s value from each item. Example: extracting all book titles.

merge<T>(base: T, updates: Partial<T>): T takes a base object and a partial update, then returns a new object with the updates applied. Example: applying a BookUpdatePayload to a Book.

Each function must be generic, fully annotated, and work with any object type, not just Book.
*/

function groupBy<T, K extends keyof T>( // input has type T, value K
  items: T[],
  key: K,
): Record<string, T[]> {
  // object, where every key is type of string and every value is type of T[]
  const result: Record<string, T[]> = {};
  for (const item of items) {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }
  return result;
}

console.log(groupBy(books, "author"));

/*
function pluck<T, K extends keyof T>(items: T[], title: K): T[K][] {
  return items[title];
}
*/
// takes an array and a property name, then returns an array containing just that property’s value from each item. Example: extracting all book titles.

// function merge<T>(base: T, updates: Partial<T>): T {}

// takes a base object and a partial update, then returns a new object with the updates applied. Example: applying a BookUpdatePayload to a Book.
