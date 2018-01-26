var titles = document.getElementsByClassName("title");

// To check  if it is Array and if not then convert it to Array following methods.
// console.log (Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
  return item;
})
