class Book {
    constructor() {
        this.title = '';
        this.genre = '';
        this.author = '';
        this.read = false;
        this.readDate = null;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setGenre(genre) {
        this.genre = genre;
    }

    getGenre() {
        return this.genre;
    }

    setAuthor(author) {
        this.author = author;
    }

    getAuthor() {
        return this.author;
    }

    setReaded(read) {
        this.read = read;
    }

    isReaded() {
        return this.read;
    }

    setReadDate(readDate) {
        this.readDate = readDate;
    }

    getReadDate() {
        return this.readDate;
    }

    finishRead() {
        if (!this.read) {
            this.read = true;
            this.readDate = new Date(Date.now);
        }
    }
}

export { Book };