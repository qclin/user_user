$(document).ready( function(){
  var link = location.hash
  var subTabs = ['#about', '#services', '#philosophy', '#contact']

  clearLoadingPage();
  setTimeout(function(){
    loadComponents()
    if(subTabs.indexOf(link) > -1){
      $(`[data-value=${link.substring(1)}]`).eq(0)[0].click();
    }else{

      setTimeout(openTab, 1000);
    }
}, 1000);

// Logo transition
if($(window).width() < 769){
    $("h1.flat-link.logo a").animate({'opacity': 0}, 1000,function() {
      $(this).text("ug")
  }).animate({'opacity': 1}, 30);
}

  $('.tablink').click(function(){
    $('.tabcontent').hide();
    $('.tablink').removeClass('open');
    $('.tablink').css('background', '');
    $(this).addClass('open');

    var pageName = this.dataset.value
    var leavePage = window.location.hash.substring(1)
    if(leavePage.length == 0){
        leavePage = 'about'
    }
    $('body').removeClass(`${leavePage}Page`);
    $('body').addClass(`${pageName}Page`);

    //TODO   clean here, move into CSS

    if(pageName != 'services'){
        $('#service-carousel img.service-image').hide()
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


function openTab(){
    $("#defaultOpen").click();
}
function clearLoadingPage(){
    if($(window).width() < 769){
        $('.navDot').hide();
    }else{
        $('nav').hide();
    }
    $('footer').hide(); 
}

function loadComponents(){
    if($(window).width() < 769){
        $('.flat-link').show();
        $('.navDot').show();
    }else{
        $('nav').show();
    }
    if(location.hash && location.hash != '#about'){
        $('footer').show();
    }
    $('.loader').hide().fadeOut('slow')
}


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
