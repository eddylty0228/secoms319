import { selected } from "./script.js";
import { cartItemNum } from "./script.js";
fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    displayOnSide(data);
  })
  .catch(function (err) {
    console.log("error:" + err);
  });
function displayOnSide(data) {
  for (let key in selected) {
    if (key == "air") {
      addListItem(4, key, data);
    }
    if (key == "blend") {
      addListItem(2, key, data);
    }
    if (key == "juice") {
      addListItem(3, key, data);
    }
    if (key == "mug") {
      addListItem(0, key, data);
    }
    if (key == "coffee") {
      addListItem(1, key, data);
    }
    if (key == "toast") {
      addListItem(5, key, data);
    }
  }
}
var total = 0;
const cartNum = document.getElementById("cartNum");
cartNum.textContent = cartItemNum.toString();
function addListItem(position, key, data) {
  let li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between lh-sm";
  li.innerHTML = `
      <div>
      <h6 class="my-0">${data[position].name}</h6>
      <small class="text-muted">${data[position]}</small>
      </div>
      <span class="text-muted">$${
        parseInt(data[position].price) * selected[key]
      }</span>
      `;
  document.getElementById("selected_items").appendChild(li);
  total += parseInt(data[position].price) * selected[key];
}
let litotal = document.createElement("li");
litotal.className = "list-group-item d-flex justify-content-between";
litotal.innerHTML = `
    <span>Total (USD)</span>
    <strong>$${total}</strong>
    `;
document.getElementById("selected_items").appendChild(litotal);
