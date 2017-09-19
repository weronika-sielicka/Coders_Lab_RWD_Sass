

document.addEventListener("DOMContentLoaded", function() {

console.log("Hi");






var counterResize = 0;
var counterMatchMedia = 0;

window.addEventListener("resize", function(){
  counterResize++;
  console.log("Resize" + counterResize);
})

var media = window.matchMedia('(max-width: 450px)');

media.addListener(function(media){
  if (media.matches){
    counterMatchMedia++;
    console.log("matchMedia" + counterMatchMedia);
  }
});


});
