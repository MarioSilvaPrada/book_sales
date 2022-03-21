import { api } from './';

export const getBooks = async (page?: string): Promise<any> => {
  try {
    let url = 'library/books/';
    if (page) {
      url = url + `?page=${page}`;
    }
    const res = await api.get(url);
    console.log({ res });
    return res;
  } catch (e) {
    console.log({ e });
  }
};

export const getSingleBook = async (id: string): Promise<any> => {
  try {
    const res = await api.get('library/books/' + id);
    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    console.log({ e });
  }
};
