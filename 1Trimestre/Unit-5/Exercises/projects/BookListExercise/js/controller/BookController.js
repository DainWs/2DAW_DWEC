import { BookList } from "../domain/BookList";
import { Book } from "../models/Book";
import { BookView } from "../views/BookView";

class BookController {
    constructor() {}

    initialize() {
        this.booklist = new BookList();
        this.view = new BookView();

        let addBtn = this.view.getAddBookButton();
        addBtn.onclick = (e => controller.addBook(e));
        let finishBtn = this.view.getFinishBookButton();
        finishBtn.onclick = (e => controller.finishBook(e));
    }

    addBook(event) {
        let book = new Book();
        console.log(this);
        book.setTitle(this.view.getFormBookTitle());
        book.setGenre(this.view.getFormBookGenre());
        book.setAuthor(this.view.getFormBookAuthor());
        let isReaded = this.view.getFormBookIsReaded();
        book.setReaded(isReaded);
        if (isReaded) {
            console.log(this.view.getFormBookReadDate());
            book.setReadDate(this.view.getFormBookReadDate());
        }
        this.booklist.add(book);
        if (book.isReaded()) this.view.addReadedBook(book);
            else this.view.addNotReadedBook(book);
        this.update();
    }

    finishBook(event) {
        let book = this.booklist.getCurrentBook();
        if (book != null) {
            if (book.isReaded()) this.view.moveReadedBook(book);
            else this.view.moveNotReadedBook(book);
        }
        this.booklist.finishCurrentBook();
        this.update();
    }

    update() {
        let book = this.booklist.getCurrentBook();
        if (book == null) this.view.clearBook();
        else this.view.showBook(book);
    }
}

export { BookController };