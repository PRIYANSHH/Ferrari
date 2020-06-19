
$(".nav-link").click(function(){
  $('a.do').removeClass('do');
  $(this).addClass('do');
});
$(".test").click(function(){
  $('a.bor').removeClass('bor');
  $(this).addClass('bor');
});
$(".navbar-toggler").click(function(){
  function myFunction(x) {
    if (x.matches) {
      $(".navbar-brand").css("margin-left","220px");
      $("button").css("margin-right","200px");
      $("body").width("890");
    }
    else{
      $(".navbar-brand").css("margin-left","20px");
      $("button").css("margin-right","0");
      $("body").width("100%");
    }
  }
  var x = window.matchMedia("(max-width: 890px)")
  myFunction(x)
  x.addListener(myFunction)
});
