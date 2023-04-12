import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_POST_BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jFgFPX1ePQ3LgYOp0Krp/books';
const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(GET_POST_BOOKS_URL);
  return response.data;
});
const addNewBook = createAsyncThunk('books/addNewBook', async (book) => {
  await axios.post(GET_POST_BOOKS_URL, book);
});
const deleteBook = createAsyncThunk('books/addNewBook', async (id) => {
  const DELETE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jFgFPX1ePQ3LgYOp0Krp/books/${id}`;
  await axios.delete(DELETE_URL, id);
});
const initialState = {
  books: [],
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, bookData) => {
      state.books.push(bookData.payload);
    },
    removeBook: (state, bookId) => {
      const index = state.books.findIndex(
        (book) => book.item_id === bookId.payload,
      );
      state.books.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const receivedData = action.payload;
      const items = Object.keys(receivedData);
      const data = [];
      items.forEach((item) => {
        receivedData[item][0].item_id = item;
        data.push(receivedData[item][0]);
      });
      return {
        ...state,
        books: data,
      };
    });
  },
});

const { addBook, removeBook } = bookSlice.actions;
export {
  addBook, removeBook, fetchBooks, addNewBook, deleteBook,
};
export default bookSlice.reducer;
