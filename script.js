const form = document.querySelector('#myform');
const addbutton = document.querySelector('#addbutton');
const content = document.querySelector('.content');
const statbutton = document.querySelector('#statusbutton');
const panel = document.querySelector('.new-book-panel__form');
const panelbutton = document.querySelector('#new-book-panel__open');


let myLibrary = [new Book("J.R.R. Tolkien", "The Lord of the Rings", "1178", "unread"),
                 new Book("Stephen King", "Dark Tower: The Gunslinger", "300", "unread"),
                 new Book("Stephen King", "The Dark Tower II: The Drawing of the Three", "400", "unread"),
                 new Book("Stephen King", "The Dark Tower III: The Waste Lands", "512", "unread"),
                 new Book("Stephen King", "The Dark Tower IV: Wizard and Glass", "887", "unread"),
                 new Book("A Game of Thrones", "George R.R. Martin", "694", "unread")];

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
};

function addBook() {
  myLibrary.push(new Book(form.booktitle.value, form.authorname.value, form.pagecount.value, form.bookstatus.value));
};

panelbutton.addEventListener("click", () => {
  panel.style.visibility = "visible"
});

addbutton.addEventListener("click", () => {
  addBook();
  panel.style.visibility = "hidden";
  form.reset();
  redraw();
});


function redraw() {
  content.innerHTML = "";
  displayBooks();
};

function displayBooks() {
  for(let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    content.appendChild(card);
    card.setAttribute('data-attribute', i)
    let booktitle = document.createElement('p');
    card.appendChild(booktitle);
    booktitle.textContent = "Title: " + myLibrary[i].title;
    let bookauthor = document.createElement('p');
    card.appendChild(bookauthor);
    bookauthor.textContent = "Author: " + myLibrary[i].author;
    let bookpages = document.createElement('p');
    card.appendChild(bookpages);
    bookpages.textContent = "Pagecount: " + myLibrary[i].pages;
    let bookstatus = document.createElement('p');
    card.appendChild(bookstatus);
    bookstatus.textContent = "Completion status: " + myLibrary[i].status;
    let removebutton = document.createElement('button');
    card.appendChild(removebutton);
    removebutton.setAttribute('id', 'removebutton');
    removebutton.setAttribute('data-attribute', i);
    removebutton.innerHTML = "Remove book";
    removebutton.addEventListener("click", () => {
      removeBook(i);
    })
    let statusbutton = document.createElement('button');
    card.appendChild(statusbutton);
    statusbutton.setAttribute('id', 'statusbutton');
    statusbutton.setAttribute('data-attribute', i);
    statusbutton.innerHTML = "Change status";
    statusbutton.addEventListener("click", () => {
      changeStatus(i);
    })
  };
};

function changeStatus(index) {
  if (myLibrary[index].status == "read"){
    myLibrary[index].status = "unread";
  } else if (myLibrary[index].status == "unread") {
    myLibrary[index].status = "read";
  };
  redraw();
};

function removeBook(index) {
  myLibrary.splice(index, 1);
  redraw();
}

displayBooks();