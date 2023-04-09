fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        addItem(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    });
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
    }