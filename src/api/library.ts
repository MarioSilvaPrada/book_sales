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
