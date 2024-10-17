import { BookType } from "data/Books/types";
import { api } from "./";

export const getSingleBook = async (
  id: string
): Promise<string | { status: number; data: BookType }> => {
  try {
    const { status, data } = await api.get("library/books/" + id);
    return { status, data };
  } catch (e) {
    let errorMessage = "Failed to do something exceptional";
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return errorMessage;
  }
};

export const getAllCollections = async (): Promise<any> => {
  try {
    const url = "library/collections/";
    const res = await api.get(url);
    return res;
  } catch (e) {
    let errorMessage = "Failed to do something exceptional";
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return errorMessage;
  }
};

export const getSingleCollection = async (id: string): Promise<any> => {
  try {
    const url = "library/collections/" + id;
    const res = await api.get(url);
    return res;
  } catch (e) {
    let errorMessage = "Failed to do something exceptional";
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return errorMessage;
  }
};
