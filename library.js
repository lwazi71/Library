let myLibrary = [];
const newBook = document.querySelector('.new-book');
const bookSumbit = document.querySelector(".submit");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("page-count");
const bookOptions = document.querySelector('.status');
const openButton = document.querySelector(".openButton");
const bookValues = document.querySelector(".bookValues");

var para1 = document.createElement("p");
var para1Text = document.createTextNode("Title:");
para1.appendChild(para1Text);
bookValues.appendChild(para1);

var para2 = document.createElement("p");
var para2Text = document.createTextNode("Author:");
para2.appendChild(para2Text);
bookValues.appendChild(para2);

var para3 = document.createElement("p");
var para3Text = document.createTextNode("Pages:");
para3.appendChild(para3Text);
bookValues.appendChild(para3);

var para4= document.createElement("p");
var para4Text = document.createTextNode("Status:");
para4.appendChild(para4Text);
bookValues.appendChild(para4);


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
