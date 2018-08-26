$(document).ready( function(){

  if(!location.hash && location.hash.length > 0){
    $('.tablink').eq(0).click();
  }
});

function loadCarousel(){
    var currentPage = $('.open').data().value
    if(currentPage == 'services'){
      $('#about-carousel .carousel-image').empty()
      $('body').removeClass('inverse');
    }else{

      if($('#about-carousel .carousel-image').find('img').length == 0){
        $('#about-carousel .carousel-image').prepend('<img>');
      }
      if($('#about-carousel .carousel-image').find('caption').length == 0){
        $('#about-carousel .carousel-image').append('<caption>');
      }
      var captions = ['Ciliwung River, Jakarta, Indonesia (2016)', 'Place two year 2', 'place three, year 3']
      var selectedImage = getImageForPage(imageUrls, currentPage)
      $('#about-carousel .carousel-image img').attr('src', selectedImage.image)
      $('#about-carousel .carousel-image caption').text(captions[selectedImage.index])
      $('body').addClass('inverse');
    }

    
}

function getImageForPage(imageUrls, page){
  var imageList = imageUrls.filter(url => url.indexOf(page) != -1)
  var index = Math.floor(Math.random()*imageList.length)
  var image = imageList[index];
  return {index, image}
}
