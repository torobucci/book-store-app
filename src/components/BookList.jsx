import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import RemoveBtn from './RemoveBtn';
import { fetchBooks } from '../redux/books/bookSlice';

function BookList() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="bookList container">
      {books.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button type="button">Comment</button>
            <button type="button">Edit</button>
            <RemoveBtn bookId={book.item_id} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default BookList;
