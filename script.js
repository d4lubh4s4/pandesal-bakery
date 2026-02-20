// Load saved groceries on page load
document.addEventListener("DOMContentLoaded", loadGroceries);

// Save pandesal production
function savePandesal() {
  const cheese = document.getElementById("cheeseQty").value || 0;
  const ube = document.getElementById("ubeQty").value || 0;

  localStorage.setItem("cheesePandesal", cheese);
  localStorage.setItem("ubePandesal", ube);

  document.getElementById("pandesalResult").innerText =
    `Saved: Cheese ${cheese}, Ube ${ube}`;
}

// Add grocery item
function addGrocery() {
  const name = document.getElementById("groceryName").value;
  const qty = document.getElementById("groceryQty").value;

  if (name === "" || qty === "") {
    alert("Please enter product name and quantity");
    return;
  }

  const groceries = JSON.parse(localStorage.getItem("groceries")) || [];
  groceries.push({ name, qty });

  localStorage.setItem("groceries", JSON.stringify(groceries));

  document.getElementById("groceryName").value = "";
  document.getElementById("groceryQty").value = "";

  loadGroceries();
}

// Load grocery list
function loadGroceries() {
  const groceries = JSON.parse(localStorage.getItem("groceries")) || [];
  const table = document.getElementById("groceryList");

  table.innerHTML = "";

  groceries.forEach(item => {
    const row = `<tr>
      <td>${item.name}</td>
      <td>${item.qty}</td>
    </tr>`;
    table.innerHTML += row;
  });
}