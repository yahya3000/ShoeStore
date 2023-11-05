function addToBag (shoes) {
    shoes.forEach(shoe => {
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "shoes-item");
        mainDiv.innerHTML = 
            `<div class="infos">
            <div class="shoesImages">
                <img src="img/airforceWhite.jpeg" alt="">
            </div>
            <div class="description">
                <p class="title">Nike Air Force 1 '07</p>
                <p class="text">Men's Shoes</p>
                <p class="text">White/White</p>
            </div>
        </div>`;
        shoeContainer.appendChild(mainDiv);
    });
}