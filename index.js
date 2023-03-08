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
    let mainContainer = document.getElementById("grid-container");
    for (let element of data["Games"]) {
        let div = document.createElement("div");
        div.innerHTML = `
        <a href="${element["page"]}" class="image-link-container">
                <img src="${element["img-url"]}" alt="${element["name"]}" class="image-link">
        </a>
        <p class="subtitle">${element["name"]}</p>`;
        mainContainer.appendChild(div)
    }
}