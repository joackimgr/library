const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let id = crypto.randomUUID();
    let book = new Book(id, title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("book1", "author1", "100", "true");
addBookToLibrary("book2", "author2", "100", "false");
addBookToLibrary("book3", "author3", "100", "false");

for (let i = 0; i < myLibrary.length; i++) {
    let booksList = document.querySelector(".books");
    let curBook = myLibrary[i];
    let card = document.createElement("div");
    card.classList.add("card");
    let title = document.createElement("div");
    title.classList.add("title");
    let author = document.createElement("div");
    // author.classList.add("author");
    author.classList.add("author");
    let pages = document.createElement("pages");
    pages.classList.add("pages");
    let read = document.createElement("div");
    read.classList.add("read");
    title.append(curBook.title);
    author.append(`Author: ${curBook.author}`)
    pages.append(`Pages: ${curBook.pages}`);
    read.append(curBook.read);
    card.append(title);
    card.append(author);
    card.append(pages);
    card.append(read);
    booksList.append(card);
}