const savePerson = () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  const person = { name, age };

  localStorage.setItem("person", JSON.stringify(person));

  displayPerson();

  alert(`Person saved: ${name}, ${age}`);
};

