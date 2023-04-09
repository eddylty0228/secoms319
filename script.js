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

//export var selected = {};
//export var cartItemNum = 0

try{
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
const addToasterBtn = document.getElementById("addToaster");
addToasterBtn.addEventListener("click", addToaster);
const minusToasterBtn = document.getElementById("minusToaster");
minusToasterBtn.addEventListener("click", subtractToaster);
console.log("added listeners");

}catch(err){
  console.log("Failed: " + err);
}
function addAir() {
  console.log("selected");
  if ("air" in selected) {
    selected["air"] += 1;
    cartItemNum += 1
  } else {
    selected["air"] = 0;
  }
}



function subtractAir() {
  if ("air" in selected) {
    selected["air"] -= 1;
    cartItemNum -= 1;
  } else {
    selected["air"] = 0;
  }
}


function addBlend() {
  if ("blend" in selected) {
    selected["blend"] += 1;
    cartItemNum += 1
  } else {
    selected["blend"] = 0;
  }
}


function subtractBlend() {
  if ("blend" in selected) {
    selected["blend"] -= 1;
    cartItemNum -= 1;
  } else {
    selected["blend"] = 0;
  }
}


function addJuicer() {
  if ("juice" in selected) {
    selected["juice"] += 1;
    cartItemNum += 1;
  } else {
    selected["juice"] = 0;
  }
}


function subtractJuicer() {
  if ("juice" in selected) {
    selected["juice"] -= 1;
    cartItemNum -= 1
  } else {
    selected["juice"] = 0;
  }
}


function addMug() {
  if ("mug" in selected) {
    selected["mug"] += 1;
    cartItemNum += 1
  } else {
    selected["mug"] = 0;
  }
}


function subtractMug() {
  if ("mug" in selected) {
    selected["mug"] -= 1;
    cartItemNum -= 1
  } else {
    selected["mug"] = 0;
  }
}


function addCoffee() {
  if ("coffee" in selected) {
    selected["coffee"] += 1;
    cartItemNum += 1
  } else {
    selected["coffee"] = 0;
  }
}

function subtractCoffee() {
  if ("coffee" in selected) {
    selected["coffee"] -= 1;
    cartItemNum -= 1
  } else {
    selected["coffee"] = 0;
  }
}

function addToaster() {
  if ("toast" in selected) {
    selected["toast"] += 1;
    cartItemNum +=1
  } else {
    selected["toast"] = 0;
  }
}


function subtractToaster() {
  if ("toast" in selected) {
    selected["toast"] -= 1;
    cartItemNum -= 1
  } else {
    selected["toast"] = 0;
  }
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