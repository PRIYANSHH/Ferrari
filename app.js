$(".nav-link").click(function(){$("a.do").removeClass("do"),$(this).addClass("do")}),$(".test").click(function(){$("a.bor").removeClass("bor"),$(this).addClass("bor")}),$(".navbar-toggler").click(function(){function a(a){a.matches?($(".navbar-brand").css("margin-left","300px"),$("button").css("margin-right","230px"),$("body").width("890")):($(".navbar-brand").css("margin-left","20px"),$("button").css("margin-right","0"),$("body").width("100%"))}var n=window.matchMedia("(max-width: 890px)");a(n),n.addListener(a)});
