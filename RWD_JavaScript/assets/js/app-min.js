document.addEventListener("DOMContentLoaded",function(){console.log("Hi");var e=0,n=0;window.addEventListener("resize",function(){e++,console.log("Resize"+e)}),window.matchMedia("(max-width: 450px)").addListener(function(e){e.matches&&(n++,console.log("matchMedia"+n))})});