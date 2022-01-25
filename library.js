let myLibrary = ["Name of Wind", "Wise Man Fear", "Can't Hurt Me", "Subtle art of not giving a fuck"];
var str = '<ul>'
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
myLibrary.forEach(function(myLibrary){
    str += '<li>'+ myLibrary + '</li>';
});
str += '</ul>';
document.getElementById("slideContainer").innerHTML = str;