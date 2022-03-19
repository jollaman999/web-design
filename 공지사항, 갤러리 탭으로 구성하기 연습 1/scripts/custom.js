$('.btns a:nth-child(1)').on('click', function(e) {
    $('.tab1').show()
    $('.tab2').hide()
});

$('.btns a:nth-child(2)').on('click', function(e) {
    $('.tab1').hide()
    $('.tab2').show()
});

$('.btns > a').on('click', function(e) {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
});