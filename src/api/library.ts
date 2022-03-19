import { api } from './';

export const getBooks = async () => {
  try {
    const res = await api.get('library/books');
    console.log({ res });
  } catch (e) {
    console.log({ e });
  }
};
