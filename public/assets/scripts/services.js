$(document).ready(function(){
  $('.services li').hover(function(){

    $(this).find('.marker').toggleClass('tinted')
    $(this).siblings().find('.tinted').toggleClass('tinted')
    var imageSrc = $(this).find('img').attr('src')
    var position = $('.services li').index(this)
    $('#service-carousel img.service-image').attr('src', imageSrc);
    if($(window).width() > 768){
      $('body').addClass('inverse');
    }
  });

  $('.services .subheader').click(function(){
    $(this).siblings('.content').toggle();
    // if($(window).width() < 769){
      /// whether this is can be mobile only
      $(this).parent().siblings().find('.content').hide();
    // }

  });

  var width = $( document ).width();
  if(width < 769){
      $('.methodology .subheader').click(function(){
        $(this).siblings('.content').toggle();
          $(this).parent().siblings().find('.content').hide();
      });
  }

  // if(768 < width && width < 1024){
  //
  //   console.log(' here --- ', width)
  //   $('.services li').removeClass('one-third');
  //   $('.services li').addClass('one-half');
  // }
  // $(window).resize(function(){
  //   console.log($( window ).width() )
  // })
})
