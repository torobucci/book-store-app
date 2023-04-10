function AddBook() {
  return (
    <div>
      <h2>Add book</h2>
      <form style={{ display: 'flex', gap: '40px' }}>
        <input type="text" placeholder="add book name" />
        <input type="text" placeholder="add author of book" />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}
export default AddBook;
