$(document).ready(function(){

  var modal = $('#contact-modal')
  var closeModal = $('#close-modal')
  $('#contact').click(function(){
    modal.show();
  })

  function showModal(){
      modal.show();
  }
  closeModal.click(function(){
    modal.hide();
  })

  $('input').focus(function(){
      if($('input#send').hasClass('error')){
          $('input#send').removeClass('error');
          $('.error-message').hide();
          $('.marker').removeClass('marker-error');
      }
  });

  // $('input').blur(function(){
  //     if($(this).prev('.marker').hasClass('.error-marker') &&
  //       !isBlank($(this).val())
  //       ){
  //         $(this).prev('.marker').removeClass('.error-marker')
  //     }
  // })

  $('#contactForm').submit(function(e){
    e.preventDefault();

    var $form = $(this),
        name = $form.find('input[name="name"]').val(),
        email = $form.find('input[name="email"]').val(),
        subject = $form.find('input[name="subject"]').val(),
        message = $form.find('textarea').val(),
        url = $form.attr('action')

    var body = { name, email, subject, message}
    console.log("Body : ", body)
    var fields = [name, email, subject, message]
    for(var i = 0; i< fields.length; i++){
      var value = fields[i]
      if(isBlank(value)){
        $('input').eq(i).siblings('.marker').eq(i).addClass('marker-error')
        $('input#send').addClass('error');
        $('.error-message').show();
      }
    }

    if(isEmail(email) && !$('input#send').hasClass('error')){
        console.log(' alll goood ---- ')

        $.ajax({
          type:'POST',
          url: url,
          data: JSON.stringify(body),
          contentType: 'application/json'
        }).done(function(data){
          // var content = $(data).find('#content');
          // $("#result").empty().append(content);
          console.log("posting is done ---- ", data)

          $('input#send').addClass('success');
          $('.success-message').show();
          $('input').val('');
           $('textarea').val('');

       }).fail(function(){
           $('input#send').addClass('error');
           $('.error-network').show();
       })
    }


  })
});


function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
