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
let bookSubmit = document.querySelector(".submit");
 
window.onload = function() {
    bookValues.style.display = "none";
}
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
        createBook(myLibrary[i])
        para1Text.innerHTML = book.title;
        para2Text.innerHTML = book.author;
        para3Text.innerHTML = book.pages;
        para4Text.innerHTML = book.read;
    }
}

function createBook() {
    const para1 = document.createElement("p");
    const para1Text = document.createTextNode("Title:");
    const para2 = document.createElement("p");
    const para2Text = document.createTextNode("Author:");
    const para3 = document.createElement("p");
    const para3Text = document.createTextNode("Pages:");
    const para4 = document.createElement("p");
    const para4Text = document.createTextNode("Status:");
    const bookProgress = document.createElement("button");
    const bookDelete = document.createElement("button");

    para1.classList.add('para-title');
    para1.appendChild(para1Text);
    bookOutline.appendChild(para1);

    para2.classList.add('para-author');
    para2.appendChild(para2Text);
    bookOutline.appendChild(para2);

    para3.appendChild(para3Text);
    para3.classList.add('para-pages');
    bookOutline.appendChild(para3);

    para4.appendChild(para4Text);
    para4.classList.add("para-status");
    bookOutline.appendChild(para4);

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
    createBook()
    displayBooks()
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookOptions.value);
    myLibrary.push(newBook);
    bookForm.onsubmit = e => {
        e.target.reset();
        bookValues.style.display = "block";
    };
    bookForm.style.display = "none";
    console.log(myLibrary)
}
bookSubmit.addEventListener("click", addBooktoLibrary);