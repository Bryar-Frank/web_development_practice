const form = document.querySelector("#shelterForm");
const input = document.querySelector("#item");
const list = document.querySelector("#list");

let addItemToList = function() {
  let newListItem = document.createElement('li');
  newListItem.innerText = input.value;
  list.appendChild(newListItem);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addItemToList();
  input.value="";
});