import { BookType } from 'data/Books/types';
import { api, handleErrorResponse } from './';
import { AxiosError } from 'axios';

export const getBooks = async (
  page?: string,
  search?: string
): Promise<any> => {
  try {
    let url = 'library/books/';
    if (page) {
      url = url + `?page=${page}`;
    }
    if (search) {
      url = url + `?search=${search}`;
    }
    const res = await api.get(url);
    return res;
  } catch (e) {
    let errorMessage = 'Failed to do something exceptional';
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return errorMessage;
  }
};

export const getSingleBook = async (
  id: string
): Promise<string | { status: number; data: BookType }> => {
  try {
    const { status, data } = await api.get('library/books/' + id);
    return { status, data };
  } catch (e) {
    let errorMessage = 'Failed to do something exceptional';
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return errorMessage;
  }
};

export type ReservationsParams = {
  book: number;
  name: string;
  email: string;
  phone?: string;
  comment?: string;
};
export const reserveBook = async (
  params: ReservationsParams
): Promise<{ status: number } | AxiosError | string> => {
  try {
    const { status } = await api.post('library/reservations/', params);
    return { status };
  } catch (err) {
    return handleErrorResponse(err);
  }
};

export const getAllCollections = async (): Promise<any> => {
  try {
    const url = 'library/collections/';
    const res = await api.get(url);
    return res;
  } catch (e) {
    let errorMessage = 'Failed to do something exceptional';
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return errorMessage;
  }
};

export const getSingleCollection = async (id: string): Promise<any> => {
  try {
    const url = 'library/collections/' + id;
    const res = await api.get(url);
    return res;
  } catch (e) {
    let errorMessage = 'Failed to do something exceptional';
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return errorMessage;
  }
};
