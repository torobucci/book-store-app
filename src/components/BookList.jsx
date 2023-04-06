function BookList() {
  const books = [{
    title: 'pride and prejudice',
    author: 'jane austen',
  }, {
    title: 'unleash man within',
    author: 'sathiya sam',
  }, {
    title: 'Man with a plan',
    author: 'Matt Le Blanc',
  }, {
    title: 'Breaking Bad',
    author: 'Vince Gilligan',
  }];

  return (
    <div className="bookList container">
      {books.map((book) => (
        <div key="book">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}
export default BookList;
