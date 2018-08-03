$(document).ready(function(){
  $('.services li').hover(function(){
    $(this).find('.marker').toggleClass('visible')
    $(this).siblings().find('.visible').toggleClass('visible')
    var position = $('.services li').index(this)
    var imageList = imageUrls.filter(url => url.indexOf('services') != -1)
    $('#about-carousel .carousel-image img').attr('src', imageList[position]);
    $('.service-images').animate({opacity: 0}, 50)
    $('.service-images').eq(position).animate({opacity: 1}, 100);
  });

  $('.services .subheader').click(function(){
    $(this).siblings('.content').toggle();
  });
})
