$(document).ready( function(){
  var link = location.hash
  var subTabs = ['#about', '#services', '#philosophy', '#contact']
  if(subTabs.indexOf(link) != 0){
    $(`a[href='${link}']`).click();
  }

  if(link == '#about'){
    $('footer').hide();
  }else{
    $('footer').show();
  }

  $('.tablink').click(function(){
    $('.tabcontent').hide();
    $('.tablink').removeClass('open');
    $('.tablink').css('background', '');
    $(this).addClass('open');
    var pageName = this.dataset.value

    if(pageName == 'about'){
      addAboutCarousel();
      $('footer').hide();
    }else{
      $('footer').show(); 
    }

    if(pageName != 'services'){
      $('.service-images').css('opacity', '0');
    }
    $(`#${pageName}-page`).show();

    loadCarousel();
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
