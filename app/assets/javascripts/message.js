$(function() {
  function buildHTML(message){
    image = (message.image.url) ? `<img class= "lower-message__image" src=${message.image.url} >` : "";
    var html = `<div class="message" data-message-id="${message.id}">     
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

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
      var last_message_id = $('.message:last').data("message-id");
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {

      //追加するHTMLの入れ物を作る
      var insertHTML = '';
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
      messages.forEach(function (message) {
      //メッセージが入ったHTMLを取得
      insertHTML = buildHTML(message);
      //メッセージを追加
      $('.messages').append(insertHTML);
    })
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
  })
    .fail(function() {
      alert('自動更新に失敗しました');
    });
    }
  };
  // });
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
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
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.form_message').val('');
      $("#new_message")[0].reset();
      $('.form__submit')
      $(".submit-btn").prop("disabled", false);
    })
    .fail(function(){
      alert('error')
    })
    .always(function(data){
      $('.submit-btn').prop('disabled', false); //ここで解除している
    })
  })
  setInterval(reloadMessages, 7000);
  })