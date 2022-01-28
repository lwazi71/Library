const newBook = document.querySelector('.new-book');
const bookSumbit = document.querySelector(".submit")
let myLibrary = [];

function Book(title,author,pages,isRead){
     this.title = title;
     this.author = author;
     this.pages = pages;
     this.isRead = isRead;
     this.info = function(){
         return this.title + " written by " + this.author + " has " + this.pages + " pages " + isRead;
     }
} 
function addBooktoLibrary(title,author,pages,isRead) {
    myLibrary.push(title,author,pages,isRead);
}
function addBook(){
    document.getElementById("bookForm").style.display = "block";
}
function closeBook() {
    document.getElementById("bookForm").style.display = "none";
}
bookSumbit.addEventListener('click', () => {
    var strText1 = document.getElementById("title").value;
    var strText2 = document.getElementById("author").value;
    var strText3 = document.getElementById("page-count").value;
    document.getElementById("p1").innerHTML = strText1;
    document.getElementById("p2").innerHTML = strText2;
    document.getElementById("p3").innerHTML = strText3;
})
