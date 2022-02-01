$('p').css({ 'display': 'none' });
$('.show-btn').click(function () {
  $('.box').slideDown().removeClass('box-hide').addClass('box-show');
});
$('.hide-btn').click(function () {
  $('.box').slideUp().removeClass('box-show').addClass('box-hide');
});
