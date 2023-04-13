import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addNewBook, addBook } from '../redux/books/bookSlice';

function AddBook() {
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const handleBookName = (e) => {
    setBookName(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (bookName.trim() && author.trim()) {
      const newBookDetails = {
        author,
        title: bookName,
        category: 'Fiction',
        item_id: uuid().slice(0, 5),
      };
      dispatch(addBook(newBookDetails));
      dispatch(addNewBook(newBookDetails));
      setAuthor('');
      setBookName('');
    }
  };
  return (
    <div>
      <h2>Add book</h2>
      <form style={{ display: 'flex', gap: '40px' }} onSubmit={submitForm}>
        <input
          type="text"
          placeholder="add book name"
          value={bookName}
          onChange={handleBookName}
          required
        />
        <input
          type="text"
          placeholder="add author of book"
          value={author}
          onChange={handleAuthor}
          required
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}
export default AddBook;
