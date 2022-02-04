let myLibrary = [];
const newBook = document.querySelector('.new-book');
const bookSumbit = document.querySelector(".submit");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("page-count");
const bookOptions = document.querySelector('.status');
const openButton = document.querySelector(".openButton");
const bookValues = document.querySelector(".bookValues");
const bookOutline = document.querySelector(".book");
const bookDelete = document.querySelector(".delete");
const individualBook = document.querySelector(".book");
const bookForm = document.getElementById("bookForm");
bookValues.style.display = "none";

var para1 = document.createElement("p");
var para1Text = document.createTextNode("Title:");
para1.classList.add('para-title');
para1.appendChild(para1Text);
bookOutline.appendChild(para1);

var para2 = document.createElement("p");
var para2Text = document.createTextNode("Author:");
para2.classList.add('para-author')
para2.appendChild(para2Text);
bookOutline.appendChild(para2);

var para3 = document.createElement("p");
var para3Text = document.createTextNode("Pages:");
para3.appendChild(para3Text);
para3.classList.add('para-pages')
bookOutline.appendChild(para3);

var para4= document.createElement("p");
var para4Text = document.createTextNode("Status:");
para4.appendChild(para4Text);
bookOutline.appendChild(para4);


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
    bookForm.style.display = "block";
})
function closeBook() {
    bookForm.style.display = "none";
}
bookSumbit.addEventListener('click', () => {
    para1.innerHTML += bookTitle.value;
    para2.innerHTML += bookAuthor.value;
    para3.innerHTML += bookPages.value;
    para4.innerHTML += bookOptions.value;
    bookValues.style.display = "block";
})
bookDelete.addEventListener("click", function(e){
    e.target.parentNode.remove()
    bookValues.style.display = "none";
    
})