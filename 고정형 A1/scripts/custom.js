$('.menu li').mouseenter(function () {
  $('.sub-menu').stop().slideDown()
});
$('.menu li').mouseleave(function () {
  $('.sub-menu').stop().slideUp()
});

// $('.menu li').mouseenter(function () {
//   $(this).children('.sub-menu').stop().slideDown()
// });
// $('.menu li').mouseleave(function () {
//   $(this).children('.sub-menu').stop().slideUp()
// });

$('.btn a:first-child').click(function () {
  $('.tab1').show()
  $('.tab2').hide()
});

$('.btn a:last-child').click(function () {
  $('.tab1').hide()
  $('.tab2').show()
});

$('.btn a').click(function () {
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
});
