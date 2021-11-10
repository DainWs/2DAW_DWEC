class BookView {
    constructor() {}

    getAddBookButton() {
        return document.getElementById("add-book-btn");
    }

    getFinishBookButton() {
        return document.getElementById("finish-book-btn");
    }

    addReadedBook(book) {
        let bookElement = document.createElement("li");
        bookElement.setAttribute("id", book.getTitle());
        bookElement.innerText = `${book.getTitle()}`;
        document.getElementById("booksReaded").appendChild(bookElement);
    }

    addNotReadedBook(book) {
        let bookElement = document.createElement("li");
        bookElement.setAttribute("id", book.getTitle());
        bookElement.innerText = `${book.getTitle()}`;
        document.getElementById("booksNotReaded").appendChild(bookElement);
    }

    moveReadedBook(book) {
        let bookElement = document.getElementById(book.getTitle());
        document.getElementById("booksReaded").removeChild(bookElement);
        document.getElementById("booksNotReaded").appendChild(bookElement);
    }

    moveNotReadedBook(book) {
        let bookElement = document.getElementById(book.getTitle());
        document.getElementById("booksNotReaded").removeChild(bookElement);
        document.getElementById("booksReaded").appendChild(bookElement);
    }

    showBook(book) {
        document.getElementById("book-title").innerText = book.getTitle();
        document.getElementById("book-genre").innerText = book.getGenre();
        document.getElementById("book-author").innerText = book.getAuthor();
    }

    clearBook() {
        document.getElementById("book-title").innerText = '';
        document.getElementById("book-genre").innerText = '';
        document.getElementById("book-author").innerText = '';
    }

    getFormBookTitle() {
        console.log(document.getElementById("form-book-title"));
        return document.getElementById("form-book-title").value;
    }

    getFormBookGenre() {
        return document.getElementById("form-book-genre").value;
    }

    getFormBookAuthor() {
        return document.getElementById("form-book-author").value;
    }

    getFormBookIsReaded() {
        return document.getElementById("form-book-isreaded").checked;
    }

    getFormBookReadDate() {
        return document.getElementById("form-book-readdate").value;
    }
}