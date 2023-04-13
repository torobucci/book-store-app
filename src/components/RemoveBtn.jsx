import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook, deleteBook } from '../redux/books/bookSlice';

function RemoveBtn({ bookId }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBook(bookId));
    dispatch(deleteBook(bookId));
  };
  return (
    <button type="button" onClick={handleClick}>Remove</button>
  );
}
export default RemoveBtn;
RemoveBtn.propTypes = {
  bookId: PropTypes.string.isRequired,
};
