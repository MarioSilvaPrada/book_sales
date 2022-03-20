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
