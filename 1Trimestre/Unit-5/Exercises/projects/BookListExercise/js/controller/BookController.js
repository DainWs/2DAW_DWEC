import { Book } from "../models/Book.js";
import { LocalStorage } from "../services/LocalStorage.js";
import { BookView } from "../views/BookView.js";

class BookController {
    constructor() {}

    initialize() {
        this.storage = new LocalStorage();
        this.booklist = this.storage.get();
        this.view = new BookView();

        this.booklist.books.forEach(book => {
            if (book.isReaded()) 
                this.view.addReadedBook(book);
            else 
                this.view.addNotReadedBook(book);
        });
        this.update();

        let addBtn = this.view.getAddBookButton();
        addBtn.onclick = ((e) => instance.addBook(e));
        let finishBtn = this.view.getFinishBookButton();
        finishBtn.onclick = ((e) => instance.finishBook(e));
    }

    addBook(event) {
        let book = new Book();
        book.setTitle(this.view.getFormBookTitle());
        book.setGenre(this.view.getFormBookGenre());
        book.setAuthor(this.view.getFormBookAuthor());
        let isReaded = this.view.getFormBookIsReaded();
        book.setReaded(isReaded);
        if (isReaded) {
            book.setReadDate(this.view.getFormBookReadDate());
        }

        if (this.validateBook(book)) {
            this.booklist.add(book);
        
            if (book.isReaded()) 
                this.view.addReadedBook(book);
            else 
                this.view.addNotReadedBook(book);
            this.update();

            this.storage.saveBookList(this.booklist);
        }
        else {
            this.view.showTooltipOf(event.target, this.errorMessage);
        }
    }

    validateBook(book) {
        let isValid = true;
        if(book.getTitle() == "") {
            this.errorMessage = "Para agregar un libro, indique un nombre.";
            isValid = false;
        }

        if (this.booklist.indexOf(book) > -1) {
            this.errorMessage = "Este libro ya existe.";
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