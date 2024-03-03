console.log("This is index.js")


// Constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;

}

//Display Constructor



//Add methods to display prototype



// Add Submit event listener

 let libraryForm = document.getElementById('libraryForm');
 libraryForm.addEventListener('submit', libraryFormSubmit);

 function libraryFormSubmit(e){
    e.preventDefault();
    console.log("You have submitted library form");
 }