//Need different add/minus functions
function add(e) {
  //document.getElementById(e).innerHTML = "Quantity: " + ++e;
}

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
// function setupBrowse(search){

// }

// function setupCart(){

// }

function checkRegex() {
  values = [];
  sValue = document.getElementById("search").value.toLowerCase();
  if (sValue.length == 0) {
    console.log("true");
    values = [1, 2, 3, 4, 5, 6];
    return values;
  } else {
    products.forEach((e) => {
      console.log(e);
      if (e.name.toLowerCase().includes(sValue)) {
        values[values.length] = e.id;
      }
    });
  }
  //
  console.log("Values: " + values);
  return values;
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

  // if(sValue.length == 0){
  //     console.log("true");
  //     values = [1,2,3,4,5,6];
  //     return values;
  // } else{
  //     products.forEach((e) =>
  //     {
  //         console.log(e);
  //         if(e.name.toLowerCase().includes(sValue)){
  //              values[values.length] = e.id;

  //         }

  //     });
  // }
}

// function generateTable() {
//     let div = document.getElementById("grid");
//     div.innerHTML = "";
//     const tbl = document.createElement("table");
//     const tblBody = document.createElement("tbody");

//     //get ids of products to send
//     productNum = checkRegex();
//     console.log(productNum + " product num"); // ID values to display

//     if(productNum.length == 0){
//         return 0; //leave if no products found
//     }

//     let rows = productNum.length == 6 ? 2 : 1; console.log(rows + " rows");
//     let cols = 3;

//     // creating all cells
//     for (let i = 0; i < rows; i++) {
//       const row = document.createElement("tr");

//       for (let j = 0; j < cols; j++) {

//         //TO DO
//         //
//         // - Populate price
//         // - Populate desc
//         // - Populate name

//         const cell = document.createElement("td");
//         img = document.createElement("img");
//         console.log("I : " + i + "\n J: " + j + "\n");
//         img.src = products[productNum[(i*3)+j]-1].image;
//         img.style.width = "100px";
//         img.style.height = "100px";
//         //img.size = 25;
//         h1 = document.createElement("h1");
//         h1.innerHTML = (products[productNum[(i*3)+j]-1].name);
//         p = document.createElement("p")
//         p.innerHTML = products[productNum[(i*3)+j]-1].desc;

//         cell.appendChild(img);
//         cell.appendChild(h1);
//         cell.appendChild(p);
//         row.appendChild(cell);

//       }
//       tblBody.appendChild(row);
//     }
//     tbl.appendChild(tblBody);
//     div.appendChild(tbl);
//     tbl.setAttribute("border", "2");
// }

var values = [];
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

export var selected = {};
export var cartItemNum = 0
const addAirBtn = document.getElementById("addAir");
addAirBtn.addEventListener("click", addAir);
function addAir() {
  if ("air" in selected) {
    selected["air"] += 1;
    cartItemNum += 1
  } else {
    selected["air"] = 0;
  }
}

const minusAirBtn = document.getElementById("minusAir");
minusAirBtn.addEventListener("click", subtractAir);

function subtractAir() {
  if ("air" in selected) {
    selected["air"] -= 1;
    cartItemNum -= 1;
  } else {
    selected["air"] = 0;
  }
}
const addBlendBtn = document.getElementById("addBlend");
addBlendBtn.addEventListener("click", addBlend);

function addBlend() {
  if ("blend" in selected) {
    selected["blend"] += 1;
    cartItemNum += 1
  } else {
    selected["blend"] = 0;
  }
}
const minusBlendBtn = document.getElementById("minusBlend");
minusBlendBtn.addEventListener("click", subtractBlend);

function subtractBlend() {
  if ("blend" in selected) {
    selected["blend"] -= 1;
    cartItemNum -= 1;
  } else {
    selected["blend"] = 0;
  }
}
const addJuicerBtn = document.getElementById("addJuicer");
addJuicerBtn.addEventListener("click", addJuicer);

function addJuicer() {
  if ("juice" in selected) {
    selected["juice"] += 1;
    cartItemNum += 1;
  } else {
    selected["juice"] = 0;
  }
}
const minusJuicerBtn = document.getElementById("minusJuicer");
minusJuicerBtn.addEventListener("click", subtractJuicer);

function subtractJuicer() {
  if ("juice" in selected) {
    selected["juice"] -= 1;
    cartItemNum -= 1
  } else {
    selected["juice"] = 0;
  }
}
const addMugBtn = document.getElementById("addMug");
addMugBtn.addEventListener("click", addMug);

function addMug() {
  if ("mug" in selected) {
    selected["mug"] += 1;
    cartItemNum += 1
  } else {
    selected["mug"] = 0;
  }
}
const minusMugBtn = document.getElementById("minusMug");
minusMugBtn.addEventListener("click", subtractMug);

function subtractMug() {
  if ("mug" in selected) {
    selected["mug"] -= 1;
    cartItemNum -= 1
  } else {
    selected["mug"] = 0;
  }
}
const addCoffeeBtn = document.getElementById("addCoffee");
addCoffeeBtn.addEventListener("click", addCoffee);

function addCoffee() {
  if ("coffee" in selected) {
    selected["coffee"] += 1;
    cartItemNum += 1
  } else {
    selected["coffee"] = 0;
  }
}
const minusCoffeeBtn = document.getElementById("minusCoffee");
minusCoffeeBtn.addEventListener("click", subtractCoffee);

function subtractCoffee() {
  if ("coffee" in selected) {
    selected["coffee"] -= 1;
    cartItemNum -= 1
  } else {
    selected["coffee"] = 0;
  }
}
const addToasterBtn = document.getElementById("addToaster");
addToasterBtn.addEventListener("click", addToaster);

function addToaster() {
  if ("toast" in selected) {
    selected["toast"] += 1;
    cartItemNum +=1
  } else {
    selected["toast"] = 0;
  }
}
const minusToasterBtn = document.getElementById("minusToaster");
minusToasterBtn.addEventListener("click", subtractToaster);

function subtractToaster() {
  if ("toast" in selected) {
    selected["toast"] -= 1;
    cartItemNum -= 1
  } else {
    selected["toast"] = 0;
  }
}


