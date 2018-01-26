

// delete Method
var delButton = document.querySelector("#book-list, ul");
delButton.addEventListener("click", function(e){
  if(e.target.className === "delete"){
    let li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});
