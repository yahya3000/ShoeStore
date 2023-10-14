console.log("Hello World");


document.addEventListener("DOMContentLoaded", function () { 

    var fistName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var number = document.getElementById("number");
    var adress = document.getElementById("adress");
    var btnPlaceOrder = document.getElementById("btnPlaceOrder");
    btnPlaceOrder.addEventListener("click", ()=> PlaceOrder());

    function PlaceOrder() {
        // console.log("Check Out has been successful", id);

        let checkOutItems = sessionStorage.getItem("checkOutItems");
        let placeOrderBanner = document.getElementById("placeOrderBanner");
        placeOrderBanner.style.display = "block";

        setTimeout(()=>{
            placeOrderBanner.style.display = "none";
        }, 6000);

        // console.log(checkOutItems);
    }

});