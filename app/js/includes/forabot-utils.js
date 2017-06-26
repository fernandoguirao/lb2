function forabotTypingState( data ){
  helloumi.webchat.umichatcore.setTypingState(-22);
  setTimeout(function(){
    helloumi.webchat.umichatcore.setTypingState('');
  }, data.timeout);
}

function forabotMessageSent( message ) {
  var __timestamp = message.timestamp || Date.now() / 1000;
  var __datetime = new Date(__timestamp);
  var __message = {
    key: 'jsbot-' + __timestamp,
    message: message.text,
    title: message.text,
    timestamp: __timestamp,
    time: helloumi.utils.date.hhmm( __datetime ),
    day: helloumi.utils.date.yyyymmdd( __datetime ),
    readClass: 'hu-js-readed',
    authorClass: 'hu-messenger-message-user',
    type: 'text',
    incoming: true
  }
  helloumi.webchat.umichatcore.loadMessage(__message);
}

function forabotMessageReceived( message ) {
  var __datetime = new Date(__timestamp);
  var __timestamp = message.timestamp || Date.now() / 1000;
  var __message = {
    key: 'jsbot-' + __timestamp,
    message: message.text,
    title: message.text,
    timestamp: __timestamp,
    time: helloumi.utils.date.hhmm( __datetime ),
    day: helloumi.utils.date.yyyymmdd( __datetime ),
    readClass: 'hu-js-readed',
    url: message.image,
    samurai: -22,
    authorClass: 'hu-messenger-message-brand',
    type: (message.image) ? 'image' : (message.buttons && message.buttons.length > 0) || (message.checklist) ? 'dialog' : 'text',
    incoming: true,
    extra: message.extra
  }
  if (message.buttons && message.buttons.length > 0) {
    var __captions = $.map(message.buttons, function(elem,index) {
      return elem.caption;
    });
    __message['buttons'] = __captions;
    __message['payloads'] = __captions;
  } else if (message.checklist && message.checklist.values) {
    __message['buttons'] = $.map(message.checklist.values, function(elem,key) {
      return elem;
    });
    __message['payloads'] = $.map(message.checklist.values, function(elem,key) {
      return key;
    });
    // __message.features['buttons'] = {
    //   "multi": true,
    // };
  }
  helloumi.webchat.umichatcore.loadMessage(__message);
}
