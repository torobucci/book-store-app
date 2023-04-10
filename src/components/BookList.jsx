import { useSelector } from 'react-redux';

function BookList() {
  const { books } = useSelector((state) => state.books);

  return (
    <div className="bookList container">
      {books.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button type="button">Comment</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BookList;
