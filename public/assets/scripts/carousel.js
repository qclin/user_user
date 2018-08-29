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
      var captions = ['Ciliwung River, Jakarta, Indonesia (2016)', 'Jakarta, Indonesia (2016)', 'Jakarta, Indonesia (2016)']
      var selectedImage = getImageForPage(currentPage)
      $('#about-carousel .carousel-image img').attr('src', selectedImage.url).fadeIn("slow")
      $('#about-carousel .carousel-image caption').text(selectedImage.info)
      $('body').addClass('inverse');
    }


}

function getImageForPage(page){
    var aboutSet = [{
        'info': "Irrawaddy River, Myin Ka Bar, Yangon (2014)",
        'url':"https://s3.eu-central-1.amazonaws.com/userlanding/assets/about/1_about_usergroup.jpg"
    }, {
        'info': "Water level sensor installation, Jakarta, Indonesia (2016)",
        'url':"https://s3.eu-central-1.amazonaws.com/userlanding/assets/about/2_about_usergroup.jpg"
    }, {
        'info': "Marunda Rasunawan, Jakarta, Indonesia (2013)",
        'url': "https://s3.eu-central-1.amazonaws.com/userlanding/assets/about/3_about_usergroup.jpg"
    }]
    var philosophySet = [{
        'info': "Sulphur mining, Banyuwangi Regency, Indonesia (2014)",
        'url': "https://s3.eu-central-1.amazonaws.com/userlanding/assets/philosophy/1_philosophy_usergroup.jpg"
    }, {
        'info': "Tanjung Priok, Jakarta, Indonesia (2016)",
        'url': "https://s3.eu-central-1.amazonaws.com/userlanding/assets/philosophy/2_philosophy_usergroup.jpg"
    }, {
        'info': "Kampung Pulo, Jakarta, Indonesia (2016)",
        'url': "https://s3.eu-central-1.amazonaws.com/userlanding/assets/philosophy/3_philosophy_usergroup.jpg"
    }]

    var imageList = aboutSet

    if(page == 'philosophy'){
        imageList = philosophySet
    }

    console.log("carousel ---- -", imageList)
      var index = Math.floor(Math.random()*imageList.length)
      var imageItem = imageList[index];
      return imageItem
}
