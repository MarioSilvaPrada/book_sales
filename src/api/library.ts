import { BookType } from 'data/Books/types';
import { api } from './';

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
    console.log({ res });
    return res;
  } catch (e) {
    console.log({ e });
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

type ErrorType = {
  config: any;
  data: Record<string, any>;
  headers: Record<string, any>;
  status: number;
  statusText: string;
} & Error;

type ReservationsParams = {
  book: number;
  name: string;
  email: string;
  phone?: string;
  comment?: string;
};
export const reserveBook = async (
  params: ReservationsParams
): Promise<string | { status: number }> => {
  try {
    const { status } = await api.post('library/reservations/', params);
    return { status };
  } catch (e) {
    //@ts-ignore
    console.log(e.response);
    let errorMessage = 'Failed to do something exceptional';
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return errorMessage;
  }
};
