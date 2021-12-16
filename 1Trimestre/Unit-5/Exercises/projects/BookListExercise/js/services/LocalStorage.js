import { BookList } from "../domain/BookList.js";
import { Book } from "../models/Book.js";

var bookList = new BookList();

function parseToBookList(object) {
    bookList.numBooksReaded = object.numBooksReaded;
    bookList.numBooksNotReaded = object.numBooksNotReaded;

    Array.from(object.books).forEach(obj => {
        bookList.add(parseToBook(obj));
    });
}

function parseToBook(object) {
    let book = null;
    if (object != null) {
        book = new Book();
        book.setId(object.id);
        book.setTitle(object.title);
        book.setGenre(object.genre);
        book.setAuthor(object.author);
        book.setReaded(object.read);
        if (object.readDate != null && book.isReaded()) {
            book.readDate = new Date(object.readDate);
        }
    }
    return book;
}

class LocalStorage {

    get() {
        let bookListJson = window.localStorage.getItem('bookList');
        parseToBookList(JSON.parse(bookListJson));
        return bookList;
    }

    saveBookList(bookList) {
        let bookListJson = JSON.stringify(bookList);
        window.localStorage.setItem('bookList', bookListJson);
    }
}

export { LocalStorage };