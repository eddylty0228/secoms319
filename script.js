const products = [
  {
    id: 1,
    name: "Mug",
    image: "images/mug.jpg",
    desc: "..",
    price: 10,
  },
  {
    id: 2,
    name: "Coffee Maker",
    image: "images/coffeemaker.jpg",
    desc: "tbd",
    price: 75,
  },
  {
    id: 3,
    name: "Blender",
    image: "images/blender.webp",
    desc: "tbd",
    price: 60,
  },
  {
    id: 4,
    name: "Juicer",
    image: "images/juicer.jpg",
    desc: "tbd",
    price: 60,
  },
  {
    id: 5,
    name: "Air Fryer",
    image: "images/airfryer.webp",
    desc: "tbd",
    price: 50,
  },
  {
    id: 6,
    name: "Toaster",
    image: "images/toaster.jpg",
    desc: "tbd",
    price: 30,
  },
];
//
//export var selected = {};
//export var cartItemNum = 0

document.addEventListener("DOMContentLoaded", function () {
  var total = 0;
  var selected = {};
  var cartItemNum = 0;
  const submitBtn = document.getElementById("submitPay");

  submitBtn.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var zipcode = document.getElementById("zip").value;
    var city = document.getElementById("city").value;
    var card = document.getElementById("card-number").value;
    var expiration_date = document.getElementById("expiration-date").value;
    var cvv = document.getElementById("cvv").value;
    if (
      name == "" ||
      email == "" ||
      address == "" ||
      state == "" ||
      zipcode == "" ||
      city === "" ||
      card == "" ||
      expiration_date == "" ||
      cvv == ""
    ) {
      alert("Please complete the form");
    } else {
      alert("Order is complet. Thank you for shopping.");
    }
  });
  const checkout = document.getElementById("CheckoutBtn");
  checkout.addEventListener("click", function () {
    while (selectedItems.firstChild) {
      selectedItems.removeChild(selectedItems.firstChild);
    }
    loadOnside();

    setTimeout(function () {
      let litotal = document.getElementById("total");
      litotal.innerHTML = `
      <span>Total (USD)</span>
      <strong>$${total}</strong>
  `;
    }, 500);
    total = 0;
  });
  const cartNum = document.getElementById("cartNum");
  const selectedItems = document.getElementById("selected_items");

  const addAirBtn = document.getElementById("addAir");
  addAirBtn.addEventListener("click", addAir);
  console.log("try");
  const minusAirBtn = document.getElementById("minusAir");
  minusAirBtn.addEventListener("click", subtractAir);
  const addBlendBtn = document.getElementById("addBlend");
  addBlendBtn.addEventListener("click", addBlend);
  const minusBlendBtn = document.getElementById("minusBlend");
  minusBlendBtn.addEventListener("click", subtractBlend);
  const addJuicerBtn = document.getElementById("addJuicer");
  addJuicerBtn.addEventListener("click", addJuicer);
  const minusJuicerBtn = document.getElementById("minusJuicer");
  minusJuicerBtn.addEventListener("click", subtractJuicer);
  const addMugBtn = document.getElementById("addMug");
  addMugBtn.addEventListener("click", addMug);
  const minusMugBtn = document.getElementById("minusMug");
  minusMugBtn.addEventListener("click", subtractMug);
  const addCoffeeBtn = document.getElementById("addCoffee");
  addCoffeeBtn.addEventListener("click", addCoffee);
  const minusCoffeeBtn = document.getElementById("minusCoffee");
  minusCoffeeBtn.addEventListener("click", subtractCoffee);
  const addToasterBtn = document.getElementById("addToast");
  addToasterBtn.addEventListener("click", addToaster);
  const minusToasterBtn = document.getElementById("minusToast");
  minusToasterBtn.addEventListener("click", subtractToaster);
  function addAir() {
    cartItemNum++;
    if ("air" in selected) {
      selected["air"] += 1;
    } else {
      selected["air"] = 1;
    }
    document.getElementById('air').innerHTML = ("Quantity: " + selected['air']);
    //console.log("airfiyer:" + selected["air"]); testing logs
  }

  function subtractAir() {
    cartItemNum--;
    if ("air" in selected) {
      selected["air"] -= 1;
    }
    console.log("airfiyer:" + selected["air"]);
    if (selected["air"] == 0) {
      delete selected["air"];
    }
    if (cartItemNum < 0) {
      cartItemNum = 0;
    }
    document.getElementById('air').innerHTML = ("Quantity: " + selected['air']);
  }

  function addBlend() {
    cartItemNum++;
    if ("blend" in selected) {
      selected["blend"] += 1;
    } else {
      selected["blend"] = 1;
    }
    document.getElementById('blend').innerHTML = ("Quantity: " + selected['blend']);
  }

  function subtractBlend() {
    cartItemNum--;
    if ("blend" in selected) {
      selected["blend"] -= 1;
    }
    if (selected["blend"] == 0) {
      delete selected["blend"];
    }
    if (cartItemNum < 0) {
      cartItemNum = 0;
    }
    document.getElementById('blend').innerHTML = ("Quantity: " + selected['blend']);

  }

  function addJuicer() {
    cartItemNum++;
    if ("juice" in selected) {
      selected["juice"] += 1;
    } else {
      selected["juice"] = 1;
    }
    document.getElementById('juice').innerHTML = ("Quantity: " + selected['juice']);

  }

  function subtractJuicer() {
    cartItemNum--;
    if ("juice" in selected) {
      selected["juice"] -= 1;
    }
    if (selected["juice"] == 0) {
      delete selected["juice"];
    }
    if (cartItemNum < 0) {
      cartItemNum = 0;
    }
    document.getElementById('juice').innerHTML = ("Quantity: " + selected['juice']);

  }

  function addMug() {
    cartItemNum++;
    if ("mug" in selected) {
      selected["mug"] += 1;
    } else {
      selected["mug"] = 1;
    }
    document.getElementById('mugq').innerHTML = ("Quantity: " + selected['mug']);

  }

  function subtractMug() {
    cartItemNum--;
    if ("mug" in selected) {
      selected["mug"] -= 1;
    }
    if (selected["mug"] == 0) {
      delete selected["mug"];
    }
    if (cartItemNum < 0) {
      cartItemNum = 0;
    }
    document.getElementById('mugq').innerHTML = ("Quantity: " + selected['mug']);

  }

  function addCoffee() {
    cartItemNum++;
    if ("coffee" in selected) {
      selected["coffee"] += 1;
    } else {
      selected["coffee"] = 1;
    }
    document.getElementById('coffee').innerHTML = ("Quantity: " + selected['coffee']);

  }

  function subtractCoffee() {
    cartItemNum--;
    if ("coffee" in selected) {
      selected["coffee"] -= 1;
    }
    if (selected["blend"] == 0) {
      delete selected["blend"];
    }
    if (cartItemNum < 0) {
      cartItemNum = 0;
    }
    document.getElementById('coffee').innerHTML = ("Quantity: " + selected['coffee']);

  }

  function addToaster() {
    cartItemNum++;
    if ("toast" in selected) {
      selected["toast"] += 1;
    } else {
      selected["toast"] = 1;
    }
    document.getElementById('toast').innerHTML = ("Quantity: " + selected['toast']);

  }

  function subtractToaster() {
    cartItemNum--;
    if ("toast" in selected) {
      selected["toast"] -= 1;
    }
    if (selected["toast"] == 0) {
      delete selected["toast"];
    }
    if (cartItemNum < 0) {
      cartItemNum = 0;
    }
    document.getElementById('toast').innerHTML = ("Quantity: " + selected['toast']);

  }

  function loadOnside() {
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
    cartNum.textContent = cartItemNum.toString();
    function addListItem(position, key, data) {
      total += data[position].price * selected[key];
      let li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between lh-sm";
      li.innerHTML = `
    <div>
    <h6 class="my-0">${data[position].name}</h6>
    <small class="text-muted">${data[position].desc}</small>
    </div>
    <span class="text-muted">$${
      parseInt(data[position].price) * selected[key]
    }</span>
    `;
      selectedItems.appendChild(li);
    }
  }
});

function toggleDiv(divid) {
  varon = divid + "on";
  varoff = divid + "off";
  console.log(varon);
  console.log(varoff);
  if (document.getElementById(varon).style.display == "block") {
    document.getElementById(varon).style.display = "none";
    document.getElementById(varoff).style.display = "block";
  } else {
    document.getElementById(varoff).style.display = "none";
    document.getElementById(varon).style.display = "block";
  }
}

function searchBar() {
  ids = ["mug", "airfryer", "toaster", "juicer", "blender", "coffeemaker"];
  let divOn = [];
  let divOff = [];

  sValue = document.getElementById("search").value.toLowerCase();

  ids.forEach((e) => {
    if (sValue == "") {
      divOn = [
        "mug",
        "airfryer",
        "toaster",
        "juicer",
        "blender",
        "coffeemaker",
      ];
      divOff = [];
    }
    if (e.toLowerCase().includes(sValue)) {
      divOn.push(e);
    } else {
      divOff.push(e);
    }
  });
  console.log("Div on = " + divOn + "\nDiv off = " + divOff);

  divOn.forEach((e) => {
    document.getElementById(e).style.display = "block";
  });
  divOff.forEach((e) => {
    document.getElementById(e).style.display = "none";
  });
}
