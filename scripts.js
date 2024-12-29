const saveItem = () => {
  const item = document.getElementById("item").value;
  const qty = document.getElementById("qty").value;

  const items = { item, qty };

  localStorage.setItem("items", JSON.stringify(items));

  displayItems();

  alert(`Items saved: ${item}, ${qty}`);
};

const displayItems = () => {
  const output = document.getElementById("output");
  const items = localStorage.getItem("items");

  if (items) {
    const parsedItems = JSON.parse(items);
    output.innerHTML = `<strong> Stored Items: </strong> <br>
                          Item: ${parsedItems.item} <br>
                          Quantity: ${parsedItems.qty}`;
  } else {
    output.innerHTML = `<strong> No items data found in localStorage.: </strong>`;
  }
};

const deleteItem = () => {
  alert("Item Deleted");
};
