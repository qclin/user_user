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

});
