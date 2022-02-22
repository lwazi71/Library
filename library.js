const newBook = document.querySelector('.new-book');
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("page-count");
const openButton = document.querySelector(".openButton");
const bookValues = document.querySelector(".bookValues");
const bookOutline = document.querySelector(".book");
const bookForm = document.getElementById("bookForm");
const bookOptions = document.querySelector('.status');
const bookCard = document.querySelector(".book");
const bookTable = document.querySelector(".table");
let bookSubmit = document.querySelector(".submit");
 
const closeBook = () => {
    bookForm.style.display = "none";
};
const openBook = () => {
    bookForm.style.display = "block";
    const cancel = document.querySelector(".cancel");
    cancel.addEventListener("click", (e) => {
        e.preventDefault();
        closeBook();
    })
};
newBook.addEventListener("click", openBook);

let myLibrary = [{
        title: "Name of Wind",
        author: "Patrick Routhfuss",
        pages: "800",
        read: "Read"
    },
    {
        title: "Rational Male",
        author: " Rollo Tomassi",
        pages: "364",
        read: "Not Read"
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function displayBooks() {
    for (i = 0; i < myLibrary.array; i++) {
    }
}

function createBook() {
    const bookProgress = document.createElement("button");
    const bookDelete = document.createElement("button");

    bookProgress.classList.add("read-progress");
    bookDelete.classList.add("delete");
    bookOutline.appendChild(bookDelete);
    bookOutline.appendChild(bookProgress);

    bookDelete.innerHTML = "Delete 🗑️";
    bookProgress.innerHTML = "Book Status";

    bookProgress.addEventListener('click', function() {
        if (para4.innerHTML == "Status: Not Read") {
            para4.innerHTML = "Status: Read";
        } else {
            para4.innerHTML = "Status: Not Read";
        }
    })

    bookDelete.addEventListener('click', function() {
        bookCard.parentNode.remove()
        myLibrary.shift()
        console.log(myLibrary)
    })
}

function addBooktoLibrary() {
    newCell()
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookOptions.value);
    myLibrary.push(newBook);
    bookForm.onsubmit = e => {
        e.target.reset();
    }
    bookForm.style.display = "none";
    console.log(myLibrary)
}
function newCell(){
    var row  = bookTable.insertRow(-1);
    var title  = row.insertCell(0);
    var author = row.insertCell(1);
    var pages = row.insertCell(2);
    var status = row.insertCell(3);

    title.innerHTML = bookTitle.value;
    author.innerHTML = bookAuthor.value;
    pages.innerHTML = bookPages.value;
    status.innerHTML = bookOptions.value;

    return false;
}
bookSubmit.addEventListener("click", addBooktoLibrary);