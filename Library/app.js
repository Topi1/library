let myLibrary = [];
let newBook;

const popForm = document.querySelector(".formpop");
const newBookBtn = document.querySelector(".newBookButton");
newBookBtn.addEventListener('click', () => popForm.style.display = "block");

const cancelBtn = document.querySelector(".cancelButton");
cancelBtn.addEventListener('click', () => popForm.style.display = "none");


function bookConstruct(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        let array = [title, author, pages];
        let text = array.join(", ");
        return text;
    };
};



function addBook() {

};