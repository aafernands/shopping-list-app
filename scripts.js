const savePerson = () => {
  const item = document.getElementById("name").value;
  const qty = document.getElementById("qty").value;

  const items = { item, age };

  localStorage.setItem("items", JSON.stringify(items));

  displayItems();

  alert(`Items saved: ${item}, ${qty}`);
};

const displayItems = () => {
  const output = document.getElementById("output");
  const person = localStorage.getItem("items");

  if (items) {
    const parsedItems = JSON.parse(items);
    output.innerHTML = `<strong> Stored Items: </strong> <br>
                          Name: ${parsedItems.item} <br>
                          Age: ${parsedItems.qty}`;
  } else {
    output.innerHTML = `<strong> No items data found in localStorage.: </strong>`;
  }
};

// const deletePerson = () => {
//   alert("Deleted");
// };
