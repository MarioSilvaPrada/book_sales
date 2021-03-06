import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { RootState } from '../';
import { ReservationState } from './types';
export const initialState: ReservationState = {
  loading: false,
  hasErrors: false,
  errorMessage: '',
  isSuccessful: false,
};

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setReservationError: (
      state,
      action: PayloadAction<string | AxiosResponse>
    ) => {
      state.hasErrors = true;
      state.errorMessage = action.payload;
    },
    resetErrors: (state) => {
      state.hasErrors = false;
      state.errorMessage = '';
    },
    setReservationHasDone: (state) => {
      state.isSuccessful = true;
    },
    resetForm: (state) => {
      state.isSuccessful = false;
      state.hasErrors = false;
      state.errorMessage = '';
    },
  },
});

export const {
  isLoading,
  setReservationError,
  setReservationHasDone,
  resetErrors,
  resetForm,
} = reservationSlice.actions;

export const reservationSelector = (state: RootState) => state.reservations;

const reservationReducer = reservationSlice.reducer;
export default reservationReducer;
