import { api } from './';

export const getBooks = async (): Promise<any> => {
  try {
    const res = await api.get('library/books');
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
