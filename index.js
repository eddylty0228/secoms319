fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    })
function appendData(data) {

    var page = location.pathname.split("/").slice(-1)
    console.log( page );

    if(page == "games.html"){
        for (let element of data["Games"]) {
            let div = document.createElement("div");
            div.innerHTML = `
            <a href="${element["page"]}" class="image-link-container">
                    <img src="${element["img-url"]}" alt="${element["name"]}" class="image-link">
            </a>
            <p class="subtitle">${element["name"]}</p>`;
            document.getElementById("grid-container").appendChild(div)
        }
    } else if(page == "movies.html") {
        for (let element of data["Movies"]) {
            let div = document.createElement("div");
            div.innerHTML = `
            <a href="${element["page"]}" class="image-link-container">
                    <img src="${element["img-url"]}" alt="${element["name"]}" class="image-link">
            </a>
            <p class="subtitle">${element["name"]}</p>`;
            document.getElementById("grid-container").appendChild(div)
        }
    } else if(page == "music.html"){
        for (let element of data["Music"]) {
            let div = document.createElement("div");
            div.innerHTML = `
            <a href="${element["page"]}" class="image-link-container">
                    <img src="${element["img-url"]}" alt="${element["name"]}" class="image-link">
            </a>
            <p class="subtitle">${element["name"]}</p>`;
            document.getElementById("grid-container").appendChild(div)
        }

    } else if(page == "cars.html"){
        for (let element of data["Cars"]) {
            let div = document.createElement("div");
            div.innerHTML = `
            <a href="${element["page"]}" class="image-link-container">
                    <img src="${element["img-url"]}" alt="${element["name"]}" class="image-link">
            </a>
            <p class="subtitle">${element["name"]}</p>`;
            document.getElementById("grid-container").appendChild(div)
        }
    }
    
}