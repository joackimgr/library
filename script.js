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

function displayBooks() {
    let booksList = document.querySelector(".books");
    booksList.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let curBook = myLibrary[i];
        let card = document.createElement("div");
        card.classList.add("card");
        let title = document.createElement("div");
        title.classList.add("title");
        let author = document.createElement("div");
        author.classList.add("author");
        let pages = document.createElement("pages");
        pages.classList.add("pages");
        let read = document.createElement("div");
        read.classList.add("read");``
        if (curBook.read === true || curBook.read === "true") {
            read.append("Status: Read");
        } else {
            read.append("Status: Not Read");
        }
        title.append(curBook.title);
        author.append(`Author: ${curBook.author}`)
        pages.append(`Pages: ${curBook.pages}`);
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(read);
        booksList.append(card);
    }
}

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let titleVal = document.querySelector("#btitle").value;
    let authorVal = document.querySelector("#bauthor").value;
    let pagesVal = document.querySelector("#bpages").value;
    let readVal = document.querySelector("#bread").checked;
    addBookToLibrary(titleVal, authorVal, pagesVal, readVal);
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
