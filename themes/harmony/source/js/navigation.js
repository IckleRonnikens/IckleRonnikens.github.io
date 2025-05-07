function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

$(document).ready(function(){
  $('#home').hover(function(){
    $('#image').css('background-image','url("../images/menu/home.jpg")')
  });
  $('#about').hover(function(){
    $('#image').css('background-image','url("../images/menu/about.jpg")')
  });
  $('#blog').hover(function(){
    $('#image').css('background-image','url("../images/menu/blog.jpg")')
  });
  $('#social').hover(function(){
    $('#image').css('background-image','url("../images/menu/social.jpg")')
  });
  $('#fanfiction').hover(function(){
    $('#image').css('background-image','url("../images/menu/fanfiction.jpg")')
  });
  $('#quotes').hover(function(){
    $('#image').css('background-image','url("../images/menu/quotes.jpg")')
  });
  $('#fanart').hover(function(){
    $('#image').css('background-image','url("../images/menu/fanart.jpg")')
  });
  $('#podcast').hover(function(){
    $('#image').css('background-image','url("../images/menu/podcast.jpg")')
  });
  $('#projects').hover(function(){
    $('#image').css('background-image','url("../images/menu/projects.jpg")')
  });
  $('#credits').hover(function(){
    $('#image').css('background-image','url("../images/menu/credits.jpg")')
  });
  $('#search').hover(function(){
    $('#image').css('background-image','url("../images/menu/search.jpg")')
  });
  
});