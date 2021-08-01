let aboutOffset = $('#about').offset().top;

$(window).scroll(function () {

  let windowScroll = $(window).scrollTop();

  if (windowScroll > aboutOffset) {
    $('#main-nav').css("backgroundColor", "rgb(247, 243, 232)");
    $("#btnUp").fadeIn(300);
  }
  else {
    $('#main-nav').css("backgroundColor", "transparent");
    $("#btnUp").fadeout(300);
  }
})

$("#btnUp").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 2000);
})




