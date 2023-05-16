import axios from "axios";

export const api = axios.create({
  // baseURL: process.env.REACT_APP_API_ROOT,
  baseURL: "https://homeserver.marioprada.me/",
});

export const handleErrorResponse = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Something went wrong";
};
