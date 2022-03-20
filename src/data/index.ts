import { combineReducers } from '@reduxjs/toolkit';

import bookReducer from './Books/slice';

const rootReducer = combineReducers({
  books: bookReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
