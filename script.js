
// Event Bubbling

var form = document.querySelector("form");
var cardBody = document.querySelector(".card-body");
var card = document.querySelector(".card");
var container = document.querySelector(".container");



form.addEventListener("click",function(){
    console.log("form");
});

cardBody.addEventListener("click",function(){
    console.log("card body");
});

card.addEventListener("click",function(){
    console.log("card");
});

container.addEventListener("click",function(){
    console.log("container");
});


  