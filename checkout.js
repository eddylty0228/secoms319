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
    if(key ="air"){
        addListItem(0, key);
    }
    if(key="blend"){
        addListItem(1,key);
    }
    if(key="juice"){
        addListItem(2,key)
    }
    if(key ="mug"){
        addListItem(3, key);
    }
    if(key="coffee"){
        addListItem(4,key);
    }
    if(key="toast"){
        addListItem(5,key)
    }
    
  }
}
const cartNum = document.getElementById("cartNum");
cartNum.textContent = cartItemNum.toString();
function addListItem(position, key) {
  let li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between lh-sm";
  div.innerHTML = `
      <div>
      <h6 class="my-0">${data[position].name}</h6>
      <small class="text-muted">${data[position]}</small>
      </div>
      <span class="text-muted">"$"${
        parseInt(data[position].price) * data[key]
      }</span>
      `;
  document.getElementById("selected_items").appendChild(li);
}
