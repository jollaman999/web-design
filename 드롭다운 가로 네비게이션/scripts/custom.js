/* Navigation */
$('.menu li').mouseenter(function() {
  // $('.sub-menu').slideDown()
  $(this).children('.sub-menu').stop().slideDown()
})

$('.menu li').mouseleave(function() {
  // $('.sub-menu').slideDown()
  $(this).children('.sub-menu').stop().slideUp()
})