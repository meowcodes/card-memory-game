var card = document.getElementsByClassName("card");

var count = 0;
var imgSrc = [];

for(var i=0; i<card.length; i++){
  card[i].addEventListener("click", function() {
    if(count < 2){
      console.log(this);
      this.firstElementChild.style.display = "block";
      imgSrc.push(this);
      count += 1;
      if(count === 2){
        setTimeout(function() {
          if(imgSrc[0].firstElementChild.src === imgSrc[1].firstElementChild.src){
            imgSrc[0].firstElementChild.classList.remove("card-unmatched");
            imgSrc[0].firstElementChild.classList.add("card-matched");
            imgSrc[1].firstElementChild.classList.remove("card-unmatched");
            imgSrc[1].firstElementChild.classList.add("card-matched");
          }else {
            imgSrc[0].firstElementChild.style.display = "none";
            imgSrc[1].firstElementChild.style.display = "none";
          }
          count = 0;
          imgSrc = [];
        },1000);
        
      }
    }else {
      console.log("no more!");
    }
  });


  // if(count === 2){
  //   if(imgSrc[0] === imgSrc[1]){

  //   }
  // }
}