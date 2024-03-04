console.log("This is index.js")


// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

//Display Constructor
function Display() {


}



//Add methods to display prototype

Display.prototype.add = function (book) {
    // console.log("Adding to UI");
    tableBody = document.getElementById('tableBody')
    let uiString = `
        <tr>
            <td>${book.name}</td>
           <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>
    `;
    tableBody.innerHTML += uiString;

};
// Implement the Clear Function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};

// Implement  the validate Function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 3) {
        return false;
    }
    else {
        return true;
    }
};
// Status Message regarding book  
Display.prototype.show = function (type, message) {

    let msg = document.getElementById('msg')
    msg.innerHTML = ` 
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message:</strong>    ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

    setTimeout(function () {
        msg.innerHTML = ``;
    }, 2000)

}



// Add Submit event listener

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted library form");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    //  fiction nonFiction scienceFiction drama biographies computerProgramming cooking

    // Types of Book  targeted by Each ID
    let fiction = document.getElementById('fiction');
    let nonFiction = document.getElementById('nonFiction');
    let scienceFiction = document.getElementById('scienceFiction');
    let drama = document.getElementById('drama');
    let biographies = document.getElementById('biographies');
    let computerProgramming = document.getElementById('computerProgramming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (nonFiction.checked) {
        type = nonFiction.value;
    }
    else if (scienceFiction.checked) {
        type = scienceFiction.value;
    }
    else if (drama.checked) {
        type = drama.value;
    }
    else if (biographies.checked) {
        type = biographies.value;
    }
    else if (computerProgramming.checked) {
        type = computerProgramming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', '   Your book has been successfully added.');
    }
    else {
        // Show error to the users
        display.show('danger', '   Sorry! You cannot add this book.');

    }

    e.preventDefault();
}