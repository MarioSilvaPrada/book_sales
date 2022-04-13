import { AxiosResponse } from 'axios';

export type ReservationState = {
  loading: boolean;
  hasErrors: boolean;
  errorMessage: string | AxiosResponse;
  isSuccessful: boolean;
};
