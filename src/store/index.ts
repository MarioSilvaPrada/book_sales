import rootReducer, { RootState } from 'data';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = Dispatch<unknown>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
