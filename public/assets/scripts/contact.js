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

  $('#contactForm').submit(function(e){
    e.preventDefault();

    var $form = $(this),
        name = $form.find('input[name="name"]').val(),
        email = $form.find('input[name="email"]').val(),
        subject = $form.find('input[name="subject"]').val(),
        message = $form.find('textarea').val(),
        url = $form.attr('action')

    var body = { name, email, subject, message}
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

        $.ajax({
          type:'POST',
          url: url,
          data: JSON.stringify(body),
          contentType: 'application/json'
        }).done(function(data){
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
