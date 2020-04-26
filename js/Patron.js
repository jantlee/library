/*
    properties: name, email, currentBook
    methods: checkOut(), returnBook()
*/

class Patron {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;
    this.balance = 0;
  }

  checkOut(book) {
    book.out = true;
    this.currentBook = book;
    book.patron = this;
  }

  returnBook(book) {
    book.out = false;
    this.currentBook = null;
  }
}
