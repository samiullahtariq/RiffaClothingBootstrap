// var a = prompt("Enter Promo Code To get a discount");

let btntop =document.getElementById("btntop");

btntop.addEventListener("click", function(e){
    

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
});


 
let yours = document.getElementById("yours");
yours.addEventListener("click" , function (e){
    alert("Welcome Ali Haider");
});