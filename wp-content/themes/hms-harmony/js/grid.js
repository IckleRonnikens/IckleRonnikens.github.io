var grid = document.querySelector('.grid'),
imgs = document.images,
len = imgs.length,
counter = 0;

[].forEach.call( imgs, function( img ) {
img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
counter++;
if ( counter === len ) {
  grid.classList.add('revealed');
}
}

var images = document.querySelectorAll('img');

[].forEach.call( images, function( img ) {
img.addEventListener("load", function() {
this.parentNode.style.opacity = '1';
});
});

for (let image of images) {
image.addEventListener("load", function() {
this.parentNode.style.opacity = '1';
});
}


function hardRefresh() {
const t = parseInt(Date.now() / 10000); //10s tics
const x = localStorage.getItem("t");
localStorage.setItem("t", t);

if (x != t) location.reload(true) //force page refresh from server
else { //refreshed from server within 10s
const a = document.querySelectorAll("a, link, script, img")
var n = a.length
while(n--) {
  var tag = a[n]
  var url = new URL(tag.href || tag.src);
  url.searchParams.set('r', t.toString());
  tag.href = url.toString(); //a, link, ...
  tag.src = tag.href; //rerun script, refresh img
}
}
}

window.addEventListener("DOMContentLoaded", hardRefresh);
window.addEventListener("deviceorientation", hardRefresh, true);