console.log("Hello World");


document.addEventListener("DOMContentLoaded", function () { 
    
    var btnPlaceOrder = document.getElementById("btnPlaceOrder");
    btnPlaceOrder.addEventListener("click", ()=> PlaceOrder());
    var emtyinputbanner = document.getElementById("emtyinputbanner");
    
    function PlaceOrder() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("number").value;
        var adress = document.getElementById("adress").value;
        // console.log("Check Out has been successful", id);
        
        let checkOutItems = sessionStorage.getItem("checkOutItems");
        let placeOrderBanner = document.getElementById("placeOrderBanner");
        
        
        // console.log(checkOutItems);
        console.log("Input console", firstName, lastName, email, number, adress);
        
        if(firstName !== "" || lastName !== "" || email !== "" || number !== "" || adress !== ""){
            if(firstName.length>30 || lastName.length>30 || email.length>30 || number.length>24 || adress.length>40){
                emtyinputbanner.style.display = "block";

                setTimeout(()=>{
                    emtyinputbanner.style.display = "none";
                }, 6000);
            }
            else{
                placeOrderBanner.style.display = "block";
                console.log(firstName, lastName, email, number, adress);

                setTimeout(()=>{
                    placeOrderBanner.style.display = "none";
                }, 6000);
            }
        }
        else{
            emtyinputbanner.style.display = "block";
    
            setTimeout(()=>{
                emtyinputbanner.style.display = "none";
            }, 6000);
        }
    }
    
});