let myLibrary = [];
const newBook = document.querySelector('.new-book');
const bookSumbit = document.querySelector(".submit");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("page-count");
const bookOptions = document.querySelector('.status');
const openButton = document.querySelector(".openButton");
const para1 =  document.getElementById("p1");
const para2 = document.getElementById("p2");
const para3 = document.getElementById("p3");
const para4 = document.getElementById("p4");

document.querySelector(".bookValues").style.display = "none";

function Book(title,author,pages,read){
     this.title = title;
     this.author = author;
     this.pages = pages;
     this.read = read;
     this.info = function(){
         return this.title + " written by " + this.author + " has " + this.pages + " pages " + isRead;
     }
}
function addBooktoLibrary(){
    if (bookTitle.value && bookAuthor.value && bookPages.value && bookOptions.value){
        myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookOptions.value))
    } else{
        alert("Please enter all information")
    }
    console.log(myLibrary)
}
openButton.addEventListener('click',() => {
    document.getElementById("bookForm").style.display = "block";
})
function closeBook() {
    document.getElementById("bookForm").style.display = "none";
}
bookSumbit.addEventListener('click', () => {
    para1.innerHTML += bookTitle.value;
    para2.innerHTML += bookAuthor.value;
    para3.innerHTML += bookPages.value;
    para4.innerHTML += bookOptions.value;
    document.querySelector(".bookValues").style.display = "block";
})
