$('.serv').click(function(){
  $('html,body').animate({
    scrollTop: $('#services').offset().top
  },2000);
}); 
$('.test').click(function(){
  $('html,body').animate({
    scrollTop: $('#test').offset().top
  },2000);
});
$('.project').click(function(){
  $('html,body').animate({
    scrollTop: $('#project').offset().top
  },2000);
});
$('.contact').click(function(){
  $('html,body').animate({
    scrollTop: $('#contact').offset().top
  },2000);
});

$(function(){
  $('.project>  ul li').on('click',function(){
      $(this).addClass('show').siblings().removeClass('show');
      if($(this).data('filter')=== 'all'){
          $('.project_img img').show();
      }
      else {
        $('.project_img img').hide();
        var selector = $(this).data('filter');
        $('.'+selector).show();
      }
    });
    
});

(function autoslider(){
  $('.on').each(function() {
    if(!$(this).is(':first-child')) {
      $(this).delay(3000).fadeOut(1000).fadeIn(3000);
      
    }
  });
}());

