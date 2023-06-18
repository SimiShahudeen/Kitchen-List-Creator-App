let kitchenInput = document.getElementById("kitchen-input");
let addButton = document.getElementById("btn");
let kitchenList = document.getElementById("list");

function addItem() {
  // alert('item added successfully')
  let itemEnter = kitchenInput.value;
  console.log(itemEnter);
  let listCreate = document.createElement("li");
  listCreate.style.marginBottom = '10px';
  listCreate.style.backgroundColor = 'aqua';
  listCreate.classList.add('slideIn');
  listCreate.classList.add('trash')
  listCreate.innerText = itemEnter;
  kitchenList.appendChild(listCreate);
  console.log(listCreate);
  kitchenInput.value = ""
  kitchenInput.focus();

  //create i tag for trash button
  let trashButton = document.createElement('i');
  // trashButton.style.
  trashButton.classList.add('fas', 'fa-trash');
  listCreate.appendChild(trashButton)
  // console.log(trashButton);
  // trashButton.addEventListener('click',deleteItem);

}
const deleteItem = (event) => {
  // console.log(event)
  console.log(event.target.classList[1])
  if (event.target.classList[1] === "fa-trash") {
    let item = event.target.parentElement;
    item.classList.add('slideOut');
    item.addEventListener('transitionend', function(){
    item.remove();
    })
  }
}

addButton.addEventListener("click", addItem);
kitchenList.addEventListener('click', deleteItem);









//-------------------------------------------------

// document.addEventListener('DOMContentLoaded', () => {
// let id1 = document.getElementById("id1");
// let id2 = document.getElementById("id2");
// let id3 = document.getElementById("id3");

// const display = () => {
//   let inputValue = id1.value;
//   let listCreate1 = document.createElement('li');
//   listCreate1.style.backgroundColor = 'green';
//   listCreate1.style.marginTop= '10px';
//   listCreate1.innerText = inputValue;
//   id3.appendChild(listCreate1);
//   id1.value = ''
//   id1.focus();
// }


// id2.addEventListener('click', display);


























