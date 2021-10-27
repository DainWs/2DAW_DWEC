class BookList {
   constructor(builder) {
      this.numBooksReaded = builder.numBooksReaded;
      this.numBooksNotReaded = builder.numBooksNotReaded;
      this.nextBookToRead = builder.nextBookToRead;
      this.currentBook = builder.currentBook;
      this.lastBookReaded = builder.lastBookReaded;
      this.books = builder.books;

      if (this.currentBook == null) {
         this.currentBook = this.searchNextBookNotReaded();
         this.nextBookToRead = this.searchNextBookNotReaded();
      }
   }

   add(book) {
      this.books.add(book);
   }

   remove(book) {
      this.books.remove(book);
   }

   getCurrentBook() {
      return this.currentBook;
   }

   finishCurrentBook() {
      if (this.currentBook != null) {
         this.currentBook.finishRead();
         this.lastBookReaded = this.currentBook;
      }

      if (this.hasNextBook()) {
         this.currentBook = this.nextBookToRead;
         this.nextBookToRead = this.searchNextBookNotReaded();
      } else {
         this.currentBook = null;
         console.log("No more books to read");
      }
   }

   searchNextBookNotReaded() {
      let unreadedBooks = this.books.filter(book => {
         let result = true;
         if(book.read || (book == this.currentBook)) 
            result = false;
         if(book == this.currentBook) 
            result = false;
         if(book == this.nextBookToRead)
            result == false;
         return result;
      });

      this.numBooksNotReaded = unreadedBooks.length;
      this.numBooksReaded = Math.abs(this.books.length - unreadedBooks.length);

      let newNextBook;
      if (unreadedBooks.length > 0) {
         newNextBook = unreadedBooks.shift();
      }

      return newNextBook;
   }

   hasNextBook() {
      return this.nextBookToRead != null;
   }
}

class Book {
   constructor(builder) {
      this.title = builder.title;
      this.genre = builder.genre;
      this.author = builder.author;
      this.read = builder.read;
      this.readDate = builder.readDate;
   }

   finishRead() {
      if (!this.read) {
         this.read = true;
         this.readDate = new Date(Date.now);
      }
   }
}

let booksL = [];
booksL.push(new Book({title="Los Tres Cerditos", genre="niños", author="Pepe", read=false, readDate=null}));
booksL.push(new Book({title="Spiderman", genre="accion", author="Javi", read=false, readDate=null}));
booksL.push(new Book({title="Batman", genre="accion", author="Alberto", read=false, readDate=null}));

let builder = {
   numBooksReaded=0,
   numBooksNotReaded=booksL.length,
   nextBookToRead=null,
   currentBook=null,
   lastBookReaded=null,
   books=booksL
};

let bookList = new BookList(builder);
console.log(bookList.getCurrentBook());
bookList.finishCurrentBook();
console.log(bookList.getCurrentBook());
bookList.finishCurrentBook();
console.log(bookList.getCurrentBook());
bookList.finishCurrentBook();