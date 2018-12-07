var card = document.getElementsByClassName("card");
var theCount = document.getElementById("the-count");
var newGame = document.getElementById("new-game-btn");
var count;
var pickedCard;
var clickCount;
var size = 16;

init();

newGame.addEventListener("click", function(){
  init();
})

for(var i=0; i<card.length; i++){
  card[i].addEventListener("click", function() {
    clickCount += 1;
    theCount.innerText = clickCount;
    if(this === pickedCard[0] || this.firstElementChild.classList[1] === "card-matched"){
      console.log("same card or already matched");
    }else if(count < 2){
      this.firstElementChild.style.display = "block";
      this.style.backgroundColor = "lavender";
      pickedCard.push(this);
      count += 1;
      if(count === 2){
        setTimeout(function() {
          if(pickedCard[0].firstElementChild.src === pickedCard[1].firstElementChild.src){
            pickedCard[0].firstElementChild.classList.remove("card-unmatched");
            pickedCard[0].firstElementChild.classList.add("card-matched");
            pickedCard[1].firstElementChild.classList.remove("card-unmatched");
            pickedCard[1].firstElementChild.classList.add("card-matched");
          }else {
            pickedCard[0].firstElementChild.style.display = "none";
            pickedCard[0].style.backgroundColor = "ghostwhite";
            pickedCard[1].firstElementChild.style.display = "none";
            pickedCard[1].style.backgroundColor = "ghostwhite";
          }
          count = 0;
          pickedCard = [];
        },1000);
      }
    }else {
      console.log("wait!");
    }
  });
}

function init() {
  count = 0;
  pickedCard = [];
  clickCount = 0;
  theCount.innerText = clickCount;
  var randomList = [];
  for(var i=0; i<card.length; i++){
    card[i].firstElementChild.classList.remove("card-matched");
    card[i].firstElementChild.classList.add("card-unmatched");
    card[i].firstElementChild.style.display = "none";
    card[i].style.backgroundColor = "ghostwhite";
  }
  //pick random cards
  for(var j=0; j<(card.length/2); j++){
    var temp = Math.floor(Math.random()* Math.floor(size))+1;
    if(randomList.includes(temp)){
      j -= 1;
    }else {
      randomList.push(temp);
    }
  }
  var num = {};
  for(var k=0; k<card.length; k++){
    var temp = randomList[Math.floor(Math.random()* Math.floor(randomList.length))];
    if(num[temp] >= 2){
      k -= 1;
    }else {
      card[k].firstElementChild.src = "img/kitty" + temp + ".jpg";
      if(num[temp] === undefined){
        num[temp] = 1;
      }else {
        num[temp] += 1;
      }
    }
  }
}