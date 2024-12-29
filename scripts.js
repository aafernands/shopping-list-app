const saveOnList = () => {
  const item = document.getElementById("item").value;
  const qty = document.getElementById("qty").value;

  const itemOnList = { item, qty };

  localStorage.setItem("itemOnList", JSON.stringify(itemOnList));

  displayItems();

  alert(`Items saved: ${item}, ${qty}`);
};

const displayItems = () => {
  const output = document.getElementById("output");
  const itemOnList = localStorage.getItem("itemOnList");

  if (itemOnList) {
    const parsedItems = JSON.parse(itemOnList);
    output.innerHTML = `<strong> Stored Items: </strong> <br>
                          Item: ${parsedItems.item} <br>
                          Quantity: ${parsedItems.qty}`;
  } else {
    output.innerHTML = `<strong> No items data found in localStorage.: </strong>`;
  }
};

const deleteItems = () => {
    localStorage.removeItem("itemOnList");
    displayItems();

  alert("Item Deleted");
};

displayItems();
