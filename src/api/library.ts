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
