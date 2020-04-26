/* 
    properties: title, author, ISBN
    new properties: out, dueDate, patron
    methods: N/a
*/

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this._out = false;
    this.dueDate = null;
    this.patron = null;
  }

  set out(out) {
    this._out = out;

    if (out) {
      const newDueDate = new Date();
      newDueDate.setDate(newDueDate.getDate() + 14);
      book.dueDate = newDueDate;
    } else {
      this.patron = null;
      this.dueDate = null;
    }
  }

  get out() {
    return this._out;
  }
}
