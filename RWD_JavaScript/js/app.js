document.addEventListener("DOMContentLoaded", function() {


var counterResize = 0,
    counterMatchMedia = 0;


window.addEventListener( 'resize', function(){
  counterResize++;
  document.getElementById('resize').innerHTML = counterResize;
});



var media = window.matchMedia( "(max-width: 500px)" );

media.addListener( function(media){
  if( media.matches ){
    counterMatchMedia++;
    document.getElementById('matchMedia').innerHTML = counterMatchMedia;
  }
});



/**
 * Menu Toggle
 */
document.getElementById("toggle-menu").addEventListener("click", function(){
  document.getElementById( 'menu' ).classList.toggle( 'opened' );
});




});
