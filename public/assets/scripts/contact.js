$(document).ready(function(){

  var modal = $('#contact-modal')
  var closeModal = $('#close-modal')
  $('#contact.tabLink').click(function(){
    modal.show();
  })

  function showModal(){
      modal.show();
  }
  closeModal.click(function(){
    modal.hide();
  })


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
// $.post(url, body)
    var posting = $.ajax({
      type:'POST',
      url: url,
      data: JSON.stringify(body),
      contentType: 'application/json'
    });

    posting.done(function(data){
      // var content = $(data).find('#content');
      // $("#result").empty().append(content);

      console.log("posting is done ---- ", data)
    })
  })
});
