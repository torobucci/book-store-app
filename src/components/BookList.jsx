import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import RemoveBtn from './RemoveBtn';
import { fetchBooks } from '../redux/books/bookSlice';
import style from './styles/BookList.module.css';

function BookList() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className={style['booklist-container']}>
      <ul className={style.books}>
        {books.map((book) => (
          <li key={book.item_id}>
            <div className={style.book}>
              <div className={style['book-content']}>
                <div className={style['book-info']}>
                  <h4>{book.category}</h4>
                  <h2>{book.title}</h2>
                  <h6>{book.author}</h6>
                  <div className={style['action-buttons']}>
                    <button type="button">Comment</button>
                    <div className={style['vertical-divider']} />
                    <RemoveBtn bookId={book.item_id} />
                    <div className={style['vertical-divider']} />
                    <button type="button">Edit</button>
                  </div>
                </div>
                <div className={style['progress-container']}>
                  <div className={style['circular-progress-container']}>
                    <div className={style['circular-progress']} />
                  </div>
                  <div className="progress stats">
                    <p className={style.percent}>70%</p>
                    <p className={style.completed}>Completed</p>
                  </div>
                  <div className={style['progress-divider']} />
                  <div className={style['current-chapter-container']}>
                    <p className={style['current-chapter-label']}>current chapter</p>
                    <p className={style['current-chapter']}>Chapter 19</p>
                    <button type="button" className={style['update-progress']}>update progress</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={style['horizontal-divider']} />
    </div>
  );
}
export default BookList;
