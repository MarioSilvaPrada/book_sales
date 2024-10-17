import axios from "axios";
import { baseURL } from "./baseQuery";

export const api = axios.create({
  // baseURL: process.env.REACT_APP_API_ROOT,
  baseURL,
});
