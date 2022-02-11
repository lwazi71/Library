const newBook = document.querySelector('.new-book');
const bookSumbit = document.querySelector(".submit");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("page-count");
const openButton = document.querySelector(".openButton");
const bookValues = document.querySelector(".bookValues");
const bookOutline = document.querySelector(".book");
const bookDelete = document.querySelector(".delete");
const individualBook = document.querySelector(".book");
const bookForm = document.getElementById("bookForm");
const bookProgress = document.querySelector(".read-progress");
const bookOptions = document.querySelector('.status');
const bookCard = document.querySelector(".book");

const para1 = document.createElement("p");
const para1Text = document.createTextNode("Title:");
const para2 = document.createElement("p");
const para2Text = document.createTextNode("Author:");
const para3 = document.createElement("p");
const para3Text = document.createTextNode("Pages:");
const para4 = document.createElement("p");
const para4Text = document.createTextNode("Status:");

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
let myLibrary = [];

function bookStyling() {
    para1.classList.add('para-title');
    para1.appendChild(para1Text);
    bookOutline.appendChild(para1);

    para2.classList.add('para-author')
    para2.appendChild(para2Text);
    bookOutline.appendChild(para2);

    para3.appendChild(para3Text);
    para3.classList.add('para-pages')
    bookOutline.appendChild(para3);

    para4.appendChild(para4Text);
    para4.classList.add("para-status")
    bookOutline.appendChild(para4);
}
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBooktoLibrary() {
    bookStyling()
    para1.innerHTML += bookTitle.value;
    para2.innerHTML += bookAuthor.value;
    para3.innerHTML += bookPages.value;
    para4.innerHTML += bookOptions.value;
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookOptions.value);
    myLibrary.push(newBook);
    bookForm.onsubmit = e => {
        e.target.reset();
        bookValues.style.display = "block";
    };
    bookForm.style.display = "none";
    console.log(myLibrary)
}
bookSumbit.addEventListener("click", addBooktoLibrary);

function removeBooks(){
    bookCard.parentNode.remove()
    myLibrary.shift()
    console.log(myLibrary)
}
bookProgress.addEventListener('click', function() {
    if (para4.innerHTML == "Status: Not Read") {
        para4.innerHTML = "Status: Read";
    } else {
        para4.innerHTML = "Status: Not Read";
    }
})