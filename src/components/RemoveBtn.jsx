import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';

function RemoveBtn({ bookId }) {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(removeBook(bookId))}>Remove</button>
  );
}
export default RemoveBtn;
RemoveBtn.propTypes = {
  bookId: PropTypes.string.isRequired,
};
