export function deleteBook(id) {
  bookStore = this.bookStore.filter((item) => {
      if (item.id ===Number(id)) {
        return false;
      }
      return true;  
  });
  localStorage.setItem('singleBook', JSON.stringify(bookStore));
    getBookList();
}