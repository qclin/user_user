$(document).ready(function(){
  $('.services li').hover(function(){
    $(this).find('.marker').toggleClass('tinted')
    $(this).siblings().find('.tinted').toggleClass('tinted')
    var imageSrc = $(this).find('img').attr('src')
    var position = $('.services li').index(this)
    // var imageList = imageUrls.filter(url => url.indexOf('services') != -1)
    console.log(" Image source ---- ", imageSrc)

    // TODO:// only load the carousel image of selection
    $('#about-carousel .carousel-image img').attr('src', imageSrc);
    $('.service-images').animate({opacity: 0}, 10)
    $('.service-images').eq(position).animate({opacity: 1}, 10);
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
  // var width = $( document ).width();
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
