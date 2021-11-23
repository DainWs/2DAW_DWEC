class BookList {
    constructor(books = []) {
        this.numBooksReaded = 0;
        this.numBooksNotReaded = 0;
        this.nextBookToRead = null;
        this.currentBook = null;
        this.lastBookReaded = null;
        this.books = books;
        
        books.forEach(book => {
            if (book.isReaded()) this.numBooksReaded++;
            else this.numBooksNotReaded++;
        });

        if (this.books.length > 0 && this.currentBook == null) {
            this.currentBook = this.searchNextBookNotReaded();
            this.nextBookToRead = this.searchNextBookNotReaded();
        }
    }

    getNumBooksReaded() {
        return this.numBooksReaded;
    }

    getNumBooksNotReaded() {
        return this.numBooksNotReaded;
    }

    add(book) {
        this.books.push(book);
    }

    getCurrentBook() {
        if (this.currentBook == null) {
            this.currentBook = this.searchNextBookNotReaded();
        }
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
            if (book.read || (book == this.currentBook))
                result = false;
            if (book == this.currentBook)
                result = false;
            if (book == this.nextBookToRead)
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