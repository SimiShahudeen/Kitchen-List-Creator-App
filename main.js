let kitchenInput = document.getElementById("kitchen-input");
let addButton = document.getElementById("btn");
let kitchenList = document.getElementById("list");

function addItem() {
  // alert('item added successfully')
  let itemEnter = kitchenInput.value;
  console.log(itemEnter);
  let listCreate = document.createElement("li");
  listCreate.innerText = itemEnter;
  kitchenList.appendChild(listCreate);
  console.log(listCreate);
  kitchenInput.value = ""
  kitchenInput.focus();
}


addButton.addEventListener("click", addItem);

