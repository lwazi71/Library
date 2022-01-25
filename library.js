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