$(document).ready( function(){


  $('.tablink').click(function(){
    $('.tabcontent').hide();
    $('.tablink').removeClass('open');
    $('.tablink').css('background', '');
    $(this).addClass('open');
    var pageName = this.dataset.value
    if(pageName == 'about'){
      addAboutCarousel();
    }

    if(pageName != 'services'){
      $('.service-images').css('opacity', '0');
    }
    $(`#${pageName}-page`).show();

    loadCarousel();

     // bing this to certain scroll index
  });


  $("#defaultOpen").click();

});

function addAboutCarousel(){
}


$(window).scroll(function() {
    if ($(this).scrollTop() > 250){
        $('nav').addClass("sticky");
    }
    else{
        $('nav').removeClass("sticky");
    }
});
