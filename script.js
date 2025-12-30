const myLibrary = [];

class Book {
    constructor(id, title, author, pages, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let id = crypto.randomUUID();
    let book = new Book(id, title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    let booksList = document.querySelector(".books");
    booksList.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let curBook = myLibrary[i];
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.innerText = "Remove";
        removeBtn.dataset.bookId = curBook.id;
        let card = document.createElement("div");
        card.classList.add("card");
        let title = document.createElement("div");
        title.classList.add("title");
        let author = document.createElement("div");
        author.classList.add("author");
        let pages = document.createElement("div");
        pages.classList.add("pages");
        let readBtn = document.createElement("button");
        readBtn.classList.add("toggleReadBtn");
        readBtn.dataset.bookId = curBook.id;
        if (curBook.read === true || curBook.read === "true") {
            readBtn.innerText = "Read";
            readBtn.classList.add("readBtn");
        } else {
            readBtn.innerText = "Not Read";
            readBtn.classList.add("notReadBtn");
        }
        title.append(curBook.title);
        author.append(`Author: ${curBook.author}`)
        pages.append(`Pages: ${curBook.pages}`);
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(readBtn);
        card.append(removeBtn);
        booksList.append(card);
    }
}

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!author.validity.valid) {
        showError();
        return;
    }
    let titleVal = document.querySelector("#btitle").value;
    let authorVal = document.querySelector("#bauthor").value;
    let pagesVal = document.querySelector("#bpages").value;
    let readVal = document.querySelector("#bread").checked;
    addBookToLibrary(titleVal, authorVal, pagesVal, readVal);
    let container = document.querySelector(".books");
    container.style.display = 'grid';
    displayBooks();
    form.reset();
    dial.close();
})

let newBtn = document.querySelector("#newBookBtn");
let dial = document.querySelector("#dial");
newBtn.addEventListener("click", () => {
    dial.showModal();
})

let cancelBtn = document.querySelector("#cancelBtn");
cancelBtn.addEventListener("click", () => {
    dial.close();
})

const booksContainer = document.querySelector(".books");
booksContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeBtn")) {
        const idRemove = event.target.dataset.bookId;
        const indexRemove = myLibrary.findIndex(book => book.id === idRemove);
        if (indexRemove > -1) {
            myLibrary.splice(indexRemove, 1);
        }
        displayBooks();
    } else if (event.target.classList.contains("toggleReadBtn")) {
        const idToggle = event.target.dataset.bookId;
        const bookToggle = myLibrary.find(book => book.id === idToggle);
        if (bookToggle) {
            bookToggle.toggleReadStatus();
        }
        displayBooks();
    }
})

const author = document.getElementById("bauthor");
const authorError = document.querySelector(".error");

author.addEventListener("input", () => {
    if (author.validity.valid) {
        authorError.textContent = '';
        authorError.className = 'error';
    } else {
        showError();
    }
})

function showError() {
    if (author.validity.valueMissing) {
        authorError.textContent = 'Author field name must be filled!';
    };

    authorError.className = 'error active';
}