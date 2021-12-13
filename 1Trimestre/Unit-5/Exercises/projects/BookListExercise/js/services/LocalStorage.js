import { BookList } from "../domain/BookList.js";

class LocalStorage {

    get() {
        let bookListJson = window.localStorage.getItem('bookList');
        return JSON.parse(bookListJson, BookList);
    }

    saveBookList(bookList) {
        let bookListJson = JSON.stringify(bookList);
        window.localStorage.setItem('bookList', bookListJson);
    }
}

export { LocalStorage };