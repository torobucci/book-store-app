import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [{
      id: 1,
      title: 'pride and prejudice',
      author: 'jane austen',
    }, {
      id: 2,
      title: 'unleash man within',
      author: 'sathiya sam',
    }, {
      id: 3,
      title: 'Man with a plan',
      author: 'Matt Le Blanc',
    }, {
      id: 4,
      title: 'Breaking Bad',
      author: 'Vince Gilligan',
    }],
  },
  reducers: {
    addBook: (state) => {
      state.books.push({
        title: 'Breaking Bad',
        author: 'Vince Gilligan',
      });
    },
    removeBook: (state) => {
      state.books.filter((book) => book.id < 4);
    },
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
