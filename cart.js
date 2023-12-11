console.log("HEllo World");


document.addEventListener("DOMContentLoaded", function () {
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
        
        var total = document.getElementById("total");
        var sum = 0;

        for (let i = 0; i < cartItems.length; i++) {
            console.log(cartItems[i]);

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
                        <div id="delete-icon">
                            <i class="fa-solid fa-trash-can" onclick="deleteItem(${shoe.id})" id="delete"></i>
                        </div>
                    </div>
                </div>
            </div>`;
            infoDiv.appendChild(mainDiv);
            
            let ProductContainer = document.getElementById("product-container");
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
        
        
        total.innerHTML = '£'+ Math.round(sum*100)/100;
    }
    
    
    cart();
} );


function deleteItem(id) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    console.log();
    
    if(cartItems.find(x=>x === id)){
        var index = cartItems.indexOf(id);
        delete cartItems[index];    
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        let banner = document.getElementById("banner");
        banner.style.display = "flex";
        
        setTimeout(()=>{
            banner.style.display = "none";
        }, 3000);
    }
    else{}


    window.location.reload();
}