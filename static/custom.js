var socket = new WebSocket('wss://cbapi.up.railway.app/ws');   

var $messages = $('.messages-content'),
d, h, m,
i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  socket.send("Hallo");
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  socket.send(msg)
  updateScrollbar();
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

socket.onmessage = function(msg) {
    $('<div class="message loading new"><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();
  
    $('.message.loading').remove();
    $('<div class="message new">' + msg.data + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
};
