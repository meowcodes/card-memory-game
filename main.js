var card = document.getElementsByClassName("card");
var theCount = document.getElementById("the-count");

var count = 0;
var pickedCard = [];
var size = 16;
var clickCount;

init();

for(var i=0; i<card.length; i++){
  card[i].addEventListener("click", function() {
    clickCount += 1;
    theCount.innerText = clickCount;
    if(this === pickedCard[0] || this.firstElementChild.classList[1] === "card-matched"){
      console.log("same card or already matched");
    }else if(count < 2){
      console.log(this);
      this.firstElementChild.style.display = "block";
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
            pickedCard[1].firstElementChild.style.display = "none";
          }
          count = 0;
          pickedCard = [];
        },1000);
      }
    }else {
      console.log("no more!");
    }
  });
}

function init() {
  clickCount = 0;
  var randomList = [];
  //pick random cards
  for(var j=0; j<(card.length/2); j++){
    var temp = Math.floor(Math.random()* Math.floor(size))+1;
    if(randomList.includes(temp)){
      j -= 1;
    }else {
      randomList.push(temp);
    }
  }
  console.log(randomList);
  var num = {};
  for(var k=0; k<card.length; k++){
    var temp = randomList[Math.floor(Math.random()* Math.floor(randomList.length))];
    console.log(temp);
    if(num[temp] >= 2){
      k -= 1;
    }else {
      card[k].firstElementChild.src = "img/kitty" + temp + ".jpg";
      console.log(card[k].firstElementChild.src);
      if(num[temp] === undefined){
        num[temp] = 1;
      }else {
        num[temp] += 1;
      }
    }
  }
  console.log(num);
}