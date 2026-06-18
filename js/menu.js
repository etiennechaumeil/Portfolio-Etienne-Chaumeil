if (window.matchMedia("(max-width: 900px)").matches) {
    $(document).ready(function(){
    $('.menutoggle').click(function(){
 $('.menutoggle').toggleClass('active')
})
})
$('.menutoggle').click(function(){
  $('ul').slideToggle('100');
});
$('ul').click(function(){
  $('ul').slideToggle('');
$('.menutoggle').toggleClass('active')
});

    }