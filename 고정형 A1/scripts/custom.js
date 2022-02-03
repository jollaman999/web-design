$('.menu li').mouseenter(function () {
  $('.sub-menu').stop().slideDown()
});
$('.menu li').mouseleave(function () {
  $('.sub-menu').stop().slideUp()
});
