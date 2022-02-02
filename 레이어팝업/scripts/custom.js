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

/* Modal */
$('.open-modal').click(function () {
  $('.modal').fadeIn(300)
});

$('.close-modal').click(function () {
  $('.modal').fadeOut(300)
});