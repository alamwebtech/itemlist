

// delete Method
var list = document.querySelector("#book-list, ul");
list.addEventListener("click", function(e){
  if(e.target.className === "delete"){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// Adding to the list
var addItem = document.forms["add-book"];
addItem.addEventListener("submit", function(e){
  e.preventDefault();
  var value = addItem.querySelector('input[type="text"]').value;


// Creating Elements

const li = document.createElement("li");
const bookName = document.createElement("span");
const deleteBtn = document.createElement("span");

// add content

deleteBtn.textContent = "delete";
bookName.textContent=value;

// Addinng Classes to the Elements

bookName.classList.add("name");
deleteBtn.classList.add("delete");


// adding list or appending to the UL
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
});

// We can hide the booklist applying the below Method

const hideBookList = document.querySelector("#hide");
hideBookList.addEventListener("change", function(e){
  if(hideBookList.checked){
    list.style.display="none";
  }else{
    list.style.display = "initial"
  }
});


// Searcing the book from the List
const searchBook = document.forms["search-books"].querySelector("input");
searchBook.addEventListener("keyup", function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display="block";
    }else{
      book.style.display = "none";
    }
  });
});
