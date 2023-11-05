console.log("HEllo World");


document.addEventListener("DOMContentLoaded", function () {
    const shoesList = [ {
        id: 1,
        name: "Nike Air Force 1 '07",
        price: 109.95,
        type: "Men's Shoes",
        color: "2 Colors",
        desctiption: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
        image: "img/airforceWhite.jpeg"
    }, 
    {
        id: 2,
        name: "Nike Air Jordan 1 Hi FlyEase",
        price: 164.95,
        type: "Men's Shoes",
        color: "1 Colors",
        desctiption: "The Air Jordan 1 Hi FlyEase combines the coveted style of Michael Jordan's first signature sneaker with a quick and easy one-handed entry system. There are no laces to tie, just a wraparound zip and two straps to secure a custom fit.",
        image: "img/jordan1Purple.jpeg"
    },
    {
        id: 3,
        name: "Nike SB Dunk Low Pro Premium",
        price: 109.95,
        type: "Skate Shoes",
        color: "2 Colors",
        desctiption: "He suede, she suede—no, we suede: Dunk! Constructed almost entirely from fluffy suede, this Dunk packs retro appeal and then some. Undeniably groovy (kinda like your skate game), vibrant colours like Mystic Red and Emerald Rise boost the fabric's allure. And for the cherry on the bottom: a Rosewood outsole lets you ride straight back to the '70s.",
        image: "img/nikeDunkSb.jpeg"
    } ];
    
    let shoeContainer = document.getElementById("shoeContainer");
    
    function cart () {
        let cartItems = sessionStorage.getItem("cartItems");
        console.log(cartItems);
        
    }
    
    
    cart();
} );