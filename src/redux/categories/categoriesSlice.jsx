import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: 'Under Construction',
  },
  reducers: {
    checkStatus: (state) => state.categories,
  },
});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
