const savePerson = () => {
  const item = document.getElementById("name").value;
  const qty = document.getElementById("qty").value;

  const items = { item, age };

  localStorage.setItem("items", JSON.stringify(items));

  displayItems();

  alert(`Items saved: ${item}, ${qty}`);
};

