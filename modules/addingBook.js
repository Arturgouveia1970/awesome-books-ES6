export function addNewBook(title, author) {
  const id = bookStore.length + 1;
  const addbook = {
    title,
    author,
    id,
  };
  bookStore.push(addbook); localStorage.setItem('singleBook', JSON.stringify(bookStore));
  getBookList();
}