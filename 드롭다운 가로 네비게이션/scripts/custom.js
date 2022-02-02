/* Navigation */
$('.menu li').mouseenter(function() {
  $('.sub-menu, .sub-back').stop().slideDown(300)
})

$('.menu li').mouseleave(function() {
  $('.sub-menu, .sub-back').stop().slideUp(300)
})