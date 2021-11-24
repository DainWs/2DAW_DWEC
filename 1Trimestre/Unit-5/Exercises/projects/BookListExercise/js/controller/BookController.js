import { BookList } from "../domain/BookList.js";
import { Book } from "../models/Book.js";
import { BookView } from "../views/BookView.js";

class BookController {
    constructor() {}

    initialize() {
        this.booklist = new BookList();
        this.view = new BookView();

        let addBtn = this.view.getAddBookButton();
        addBtn.onclick = ((e) => instance.addBook(e));
        let finishBtn = this.view.getFinishBookButton();
        finishBtn.onclick = ((e) => instance.finishBook(e));
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
        if (this.validateBook(book)) {
            if (book.isReaded()) 
                this.view.addReadedBook(book);
            else 
                this.view.addNotReadedBook(book);
            this.update();
        }
        else {
            this.view.showTooltipOf(event.target);
        }
    }

    validateBook(book) {
        let isValid = true;
        if(book.getTitle() == "") {
            isValid = false;
        }
        return isValid;
    }

    finishBook(event) {
        let book = this.booklist.getCurrentBook();
        if (book != null) {
            if (book.isReaded()) this.view.moveReadedBook(book);
            else this.view.moveNotReadedBook(book);
        } else {
            this.view.showTooltipOf(event.target);
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

const instance = new BookController();

export { instance };