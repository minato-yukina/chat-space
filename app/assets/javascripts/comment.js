$(function(){
  function buildHTML(message){
    message.image ? image = `<img src="${message.image}">` : image = ""
    var html = `<div class="message">
                           <div class="upper-message">
                               <div class="upper-message__user-name">
                                   ${ message.user_name }
                               </div>
                               <div class="upper-message__date">
                                   ${ message.time }
                               </div>
                           </div>
                           <div class="lower-message">
                               <p class="lower-message__content">
                                   ${ message.content }
                               </p>
                               ${image}
                           </div>
                       </div>`
        return html;
    }
  $("#new_message")[0].reset();
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $("#new_message")[0].reset();
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
     })
     .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form_message').val('');
      $('.form__submit').val('');
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
     })
     .fail(function(){
      alert('error')
      $('.form__submit').prop('disabled', false);
     })
   })
 });