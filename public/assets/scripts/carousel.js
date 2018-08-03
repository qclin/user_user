$(document).ready( function(){
  loadCarousel()
});

function loadCarousel(){
    var currentPage = $('.open').data().value
    if(currentPage == 'services'){
      $('#about-carousel .carousel-image').empty()
      $('body').removeClass('inverse');
    }else{
      var img = $('#about-carousel .carousel-image').prepend('<img>');
      var selectedImage = getImageForPage(imageUrls, currentPage)
      $('#about-carousel .carousel-image img').attr('src', selectedImage)
      $('body').addClass('inverse');
    }
}

function getImageForPage(imageUrls, page){
  var imageList = imageUrls.filter(url => url.indexOf(page) != -1)
  var image = imageList[Math.floor(Math.random()*imageList.length)];
  return image
}
