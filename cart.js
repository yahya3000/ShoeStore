console.log("HEllo World");

// 
const shoesList = [ {
    id: 1,
    name: "Nike Air Force 1 '07",
    price: 109.95,
    type: "Men's Shoes",
    color: "White/White",
    desctiption: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    image: "img/airforceWhite.jpeg"
}, 
{
    id: 2,
    name: "Nike Air Jordan 1 Hi FlyEase",
    price: 164.95,
    type: "Men's Shoes",
    color: "Purple/Black",
    desctiption: "The Air Jordan 1 Hi FlyEase combines the coveted style of Michael Jordan's first signature sneaker with a quick and easy one-handed entry system. There are no laces to tie, just a wraparound zip and two straps to secure a custom fit.",
    image: "img/jordan1Purple.jpeg"
},
{
    id: 3,
    name: "Nike SB Dunk Low Pro Premium",
    price: 109.95,
    type: "Skate Shoes",
    color: "Orange/Blue",
    desctiption: "He suede, she suede—no, we suede: Dunk! Constructed almost entirely from fluffy suede, this Dunk packs retro appeal and then some. Undeniably groovy (kinda like your skate game), vibrant colours like Mystic Red and Emerald Rise boost the fabric's allure. And for the cherry on the bottom: a Rosewood outsole lets you ride straight back to the '70s.",
    image: "img/nikeDunkSb.jpeg"
} ];


function cart() {

    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    console.log(cartItems);
    let infoDiv = document.getElementById("info-div");
    infoDiv.innerHTML = "";

    var total = document.getElementById("total");
    total.innerHTML = "";
    var sum = 0;

    let ProductContainer = document.getElementById("product-container");
    ProductContainer.innerHTML = "";

    for (let i = 0; i < cartItems.length; i++) {
        console.log(cartItems[i]);
        if(cartItems[i] === null){
            continue;
        }

        let shoe = shoesList.find(x=>x.id === cartItems[i]);
        console.log(shoe);

        let mainDiv = document.createElement("div");
        mainDiv.innerHTML = 
        `<div class="infos">
            <div class="shoesImages">
                <img src="${shoe.image}" alt="">
            </div>
            <div class="description">
                <p class="title">${shoe.name}</p>
                <div id="shoeDetail-removeIcon">
                    <div id="shoeDetail">
                        <p class="text">${shoe.type}</p>
                        <p class="text">${shoe.color}</p>
                    </div>
                    <div id="delete-icon" onclick="openModel(${shoe.id})">
                        <i class="fa-solid fa-trash-can" id="delete-shoe-id" data-shoe-id="${shoe.id}"></i>
                    </div>
                </div>
            </div>
        </div>`;
        infoDiv.appendChild(mainDiv);

        let productTotalDiv = document.createElement("div");
        productTotalDiv.innerHTML = 
        `<div id="product-container">
            <div  class="price-calculation-css" id="price-calculation1">
                <p class="product" class="subtotal">${shoe.name}</p>
                <p class="price"> £${shoe.price}</p>
            </div>
        </div>`;
        ProductContainer.appendChild(productTotalDiv);
        
        sum += shoe.price;
    }
    
    console.log("sum", sum);
    total.innerHTML = '£'+ Math.round(sum*100)/100;
}


function deleteItem() {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    let deleteId = sessionStorage.getItem("delete-id");
    // console.log("Item has been removed");
    
    if(cartItems.find(x=>x == deleteId)){
        let index = cartItems.indexOf(parseInt(deleteId));
        console.log(index);
        delete cartItems[index];
        // console.log(delete cartItems[index]);
        // console.log(cartItems);

        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        let banner = document.getElementById("banner");
        banner.style.display = "flex";
        
        cancelModel();

        setTimeout(()=>{
            banner.style.display = "none";
        }, 3000);
    }
    // in else is nothing
    else{}

    cart();
}

cart();
// 


function openModel(id) {
    let popUp = document.getElementById("popUp");
    popUp.style.display = "block";

    sessionStorage.setItem("delete-id", id);
}


function cancelModel() {
    console.log("model is cancelled");
    let popUp = document.getElementById("popUp");
    popUp.style.display = "none";
}
