class ObjStorageFunc {
  constructor() {
    this.data = {};
  }

  addValue(key, value) {
    this.data[key] = value;
  }

  getValue(key) {
    return this.data[key];
  }

  deleteValue(key) {
    delete this.data[key];
  }

  getKeys() {
    return Object.keys(this.data);
  }
}

const drinkStorage = new ObjStorageFunc();

document.getElementById("addButton").addEventListener("click", function () {
  const name = document.getElementById("drinkName").value;
  const recipe = document.getElementById("drinkRecipe").value;

  drinkStorage.addValue(name, recipe);
});

document.getElementById("getButton").addEventListener("click", function () {
  const name = document.getElementById("drinkName").value;
  const recipe = drinkStorage.getValue(name);

  if (recipe) {
    alert("${name}: ${recipe}");
  } else {
    alert("Drink not found");
  }
});

document.getElementById("deleteButton").addEventListener("click", function () {
  const name = document.getElementById("drinkName").value;

  drinkStorage.deleteValue(name);
});

document.getElementById("getAllButton").addEventListener("click", function () {
  const drinkList = document.getElementById("drinkList");
  drinkList.innerHTML = "";

  const keys = drinkStorage.getKeys();
  keys.forEach((key) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${key}: ${drinkStorage.getValue(key)}`;
    drinkList.appendChild(listItem);
  });
});
