// Base types

export type TEntityId = number | string;

type TTimestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type THasId = {
  id: TEntityId;
};

export type TIsbnParts = [
  group: number,
  publisher: string,
  titleIdentifier: string,
];

type TBookFields = {
  title: string;
  author: string;
  isbn: TIsbnParts;
  isAvailable: boolean;
};

export type TBook = THasId & TTimestamped & TBookFields;

// Derived payload types

export type TBookCreatePayload = Omit<TBook, "id" | "createdAt" | "updatedAt">;

export type TBookUpdatePayload = Partial<
  Omit<TBook, "id" | "createdAt" | "updatedAt">
>;

export type TBookPreview = Pick<TBook, "id" | "title" | "author">;

// Generic response wrapper

export interface IApiResponse<T> {
  status: number;
  message: string;
  data: T;
}
