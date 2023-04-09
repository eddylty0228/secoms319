function displayOnSide(data) {
    for (let key in selected){
      let i = 0;
      addListItem(i,key)
    }
  }
  const cartNum = document.getElementById('cartNum');
  mySpan.textContent = cartItemNum.toString();
  function addListItem(position, key){
      let li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between lh-sm";
      div.innerHTML = `
      <div>
      <h6 class="my-0">${data[position].name}</h6>
      <small class="text-muted">${data[position]}</small>
      </div>
      <span class="text-muted">"$"${parseInt(data[position].price)*data[key]}</span>
      `;
    document.getElementById("selected_items").appendChild(li);}