$(document).ready( function(){
  var link = location.hash
  var subTabs = ['#about', '#services', '#philosophy', '#contact']
  setTimeout(function(){
    if(subTabs.indexOf(link) > -1){
      $(`[data-value=${link.substring(1)}]`).eq(0)[0].click();
    }else if(link.indexOf('philosophy') > -1){
      $('[data-value="philosophy"]').eq(0)[0].click();
    }else{
      $("#defaultOpen").click();
    }
  }, 1);

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
      $('footer').hide();
    }else{
      $('footer').show();
    }

    if(pageName != 'services' || $(window).width() < 769){
      $('.service-images').css('opacity', '0');
      $('footer').removeClass('locked');

    }else{
      $('footer').addClass('locked');
    }
    $(`#${pageName}-page`).show();

    loadCarousel();

    if($(window).width() < 769){
      $(window).scrollTop(0);
    }
  });

  $('body').on('click', '.open-popup', function () {
      toggleNav();
    });

  $('#stickySide a').click(function(){
    $('.highlight').removeClass('highlight')
    $(this).addClass('highlight')
  });

});


function toggleNav(){
  $('nav').toggleClass('open-popup');
  $('body').toggleClass('fixed');
  $('span.navDot').toggleClass('pop');
}

// function closeNav(){
//     $('nav').removeClass('open-popup');
//   $('body').removeClass('fixed');
// }

$(window).scroll(function() {
    if ($(this).scrollTop() > 250 && $(window).width() > 769){
        $('nav').addClass("sticky");
    }else{
        $('nav').removeClass("sticky");
    }

    if($(this).scrollTop() > $(window).height()){
      $('#stickySide').css('position', 'fixed')
    }else{
      $('#stickySide').css('position', 'inherit')
    }
});
