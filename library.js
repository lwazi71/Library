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
var row = bookTable.insertRow(-1);

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
        title: "Wise Man's Fear",
        author: "Patrick Routhfuss",
        pages: "1000",
        read: "Not Read"
    },
    {
        title: "Psycho-Cybernetics",
        author: "Maxwell Maltz",
        pages: "336",
        read: "Not Read"

    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

function newCell() {
    var title = row.insertCell(0);
    var author = row.insertCell(1);
    var pages = row.insertCell(2);
    var status = row.insertCell(3);

    title.innerHTML = bookTitle.value;
    author.innerHTML = bookAuthor.value;
    pages.innerHTML = bookPages.value;
    status.innerHTML = bookOptions.value;

    function deleteBook() {
        var btndelete = row.insertCell(4);
        btndelete.innerHTML = "<button class = delete>Delete 🗑️</button>";
        btndelete.addEventListener('click', function() {
            var td = event.target.parentNode;
            var tr = td.parentNode;
            tr.parentNode.removeChild(tr);
            myLibrary.splice(0, 1)
            console.log(myLibrary)

        })
    }
    deleteBook()

    function changeStatus() {
        var btnprogress = row.insertCell(5)
        btnprogress.innerHTML = "<button class = read-progress> Book Status</button>";

        btnprogress.addEventListener('click', function() {
            if (status.innerHTML == "Not Read") {
                status.innerHTML = "Read";
            } else {
                status.innerHTML = "Not Read";
            }
        })
    }
    changeStatus()

    return false;

}

function displayBooks() {
    myLibrary.forEach((book) => {

        const bookBody = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read}</td>
            <td><button onclick = "deleteBook()" class = delete>Delete🗑️</button></td>
            <td><button onclick = "changeStatus()"class = read-progress> Book Status</button></td>
            `;
        bookTable.insertAdjacentHTML("afterbegin", bookBody);
    })
}
displayBooks()
bookSubmit.addEventListener("click", addBooktoLibrary);