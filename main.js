var card = document.getElementsByClassName("card");

for(var i=0; i<card.length; i++){
  card[i].addEventListener("click", function() {
    console.log(this);
    this.firstElementChild.style.display = "block";
  });
}