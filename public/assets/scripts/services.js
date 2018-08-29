$(document).ready(function(){
  $('.services li').hover(function(){

    $(this).find('.marker').toggleClass('tinted')
    $(this).siblings().find('.tinted').toggleClass('tinted')
    var imageSrc = $(this).find('img').attr('src')
    var position = $('.services li').index(this)
    var displayImage = $('#service-carousel img.service-image')
    if(displayImage.is(':hidden')){
        displayImage.show();
    }
    displayImage.attr('src', imageSrc);
    if($(window).width() > 768){
      $('body').addClass('inverse');
    }
  });

  $('.services .subheader').click(function(){
    $(this).siblings('.content').toggle();
      $(this).parent().siblings().find('.content').hide();
  });

  var width = $( document ).width();
  if(width < 769){
      $('.methodology .subheader').click(function(){
        $(this).siblings('.content').toggle();
          $(this).parent().siblings().find('.content').hide();
      });
  }
})
