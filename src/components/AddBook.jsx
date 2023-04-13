import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addNewBook, addBook } from '../redux/books/bookSlice';
import style from './styles/AddBook.module.css';

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
    <div className={style.container}>
      <h2 className={style.h2}>Add new book</h2>
      <form className={style.form} onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Book title"
          value={bookName}
          onChange={handleBookName}
          required
        />
        <input
          type="text"
          placeholder="Book author"
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
