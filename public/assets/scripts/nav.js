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


  $('.tablink').click(function(){
    $('.tabcontent').hide();
    $('.tablink').removeClass('open');
    $('.tablink').css('background', '');
    $(this).addClass('open');

    var pageName = this.dataset.value
    var leavePage = window.location.hash.substring(1)
    $('body').removeClass(`${leavePage}Page`);
    $('body').addClass(`${pageName}Page`);

    //TODO   clean here, move into CSS

    if(pageName != 'services'){
        $('#service-carousel img.service-image').attr('src', '');
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
