import { combineReducers } from '@reduxjs/toolkit';

import bookReducer from './Books/slice';
import reservationReducer from './Reservations/slice';

const rootReducer = combineReducers({
  books: bookReducer,
  reservations: reservationReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
