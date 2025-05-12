function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

$(document).ready(function(){
  $('#home').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/home.jpg")')
  });
  $('#about').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/about.jpg")')
  });
  $('#blog').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/blog.jpg")')
  });
  $('#fanfiction').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/fanfiction.jpg")')
  });
  $('#fanart').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/fanart.jpg")')
  });
  $('#projects').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/projects.jpg")')
  });
  $('#quotes').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/quotes.jpg")')
  });
  $('#podcast').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/podcast.jpg")')
  });
  $('#social').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/social.jpg")')
  });
  $('#credits').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/credits.jpg")')
  });
  $('#feedback').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/feedback.jpg")')
  });
  $('#search').hover(function(){
    $('#image').css('background-image','url("'+templateUrl+'/assets/images/menu/search.jpg")')
  });
  
});