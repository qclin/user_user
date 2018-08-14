$(document).ready(function(){
  $('.services li').hover(function(){
    $(this).find('.marker').toggleClass('tinted')
    $(this).siblings().find('.tinted').toggleClass('tinted')
    var position = $('.services li').index(this)
    var imageList = imageUrls.filter(url => url.indexOf('services') != -1)
    $('#about-carousel .carousel-image img').attr('src', imageList[position]);
    $('.service-images').animate({opacity: 0}, 10)
    $('.service-images').eq(position).animate({opacity: 1}, 10);
    $('body').addClass('inverse');
  });

  $('.services .subheader').click(function(){
    $(this).siblings('.content').toggle();
    // $(this).parent().siblings().find('.content').hide();
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
