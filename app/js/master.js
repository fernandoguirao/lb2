function jsfakeMessage(target){
  $(target).parent().parent().children('.container-inline').children('.two-rows').children('a').click(function(e){
    e.preventDefault();
    var textVar = $(this).text();
    fakeMessage(textVar, true);
    $('.two-rows').remove();
  });
}

var variables = [];

function getVariable(variableName, variableValue){
  variables[variableName] = variableValue;
  console.log(variables);
}

function returnVariable(variableName) {
  return variableName;
}

function loadVariable(variableName){
  var variableValue = variables[variableName];
  console.log(variableValue);
  if(variables[variableName]){
    var popup1 = '<div class="popup"><p class="text"><span>Confirma que tu ';
    var popup2 = ' es <b>';
    var popup3 = '</b></span><span class="btts"><i class="btt" onclick="fakeMessage(\'';
    var popup4 = '\');closePopup();">Sí</i><i class="btt" onclick="closePopup();">No</i></span></p><p></p><p></p></div>';
    var messagePopup = popup1 + variableName + popup2 + variableValue + popup3 + variableValue
     + popup4;
     $('.hu-composer-text').before(messagePopup);
   }
}

function closePopup() {
  $('.popup').remove();
}

function loadButtons(target,jsonURL) {

  $.getJSON( jsonURL, function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<div class='la-choices' data-keyword='"+val['keyword']+"'><img src='"+val['image']+"' alt=''><span>" + val['name'] + "</span></div>" );
    });
    $(target).parent().parent().addClass('js-flex js-thumbs');

    $(target).parent().parent().html('<div class="la-flex">'+items+'</div>');

    $('.la-choices').click(function(){
      var textVar = $(this).data('keyword');
      fakeMessage(textVar, true);
      $('.js-flex').parent().parent().parent().parent().remove();
    });
  });

}



function jsFlex(target){
  $(target).parent().parent().addClass('js-flex');
  $(target).parent().parent().parent().parent().parent().parent().addClass('js-flexparent');
  $(target).parent().parent().children('.la-flex').children().click(function(){
    var textVar = $(this).text();
    fakeMessage(textVar, true);
  });
};

function removeFlex(){
  $('.js-flex').remove();
}

function jsaddClass(target,huclass){
  $(target).parent().parent().addClass(huclass);
}

function jsReferral(target){
  $(target).parent().parent().parent().prev().addClass('js-referral');
  $(target).parent().parent().addClass('js-flex');
  // $(target).parent().parent().children('.la-flex').children().click(function(){
  //   var textVar = $(this).text();
  //   fakeMessage(textVar, true);
  // });
};

function identifyUser(flag, data) {
  if (typeof(window[flag])=='undefined'){
    var analyticsUserId = window.analytics.user().id();
    if( analyticsUserId == null ) {
      var distinctId = window.mixpanel.get_distinct_id();
      window.analytics.identify(distinctId, data );
    } else {
      if (analyticsUserId.substr(0,6) != 'brand_') {
        window.analytics.identify(analyticsUserId, data );
      }
    }
    window[flag]=1;
  }
};

function forabotTypingState( data ){
  helloumi.webchat.umichatcore.setTypingState(-22);
  setTimeout(function(){
    helloumi.webchat.umichatcore.setTypingState('');
  }, data.timeout);
}

function forabotMessageReceived( message ) {
  var __timestamp = window.jsbotTimestamp = (window.jsbotTimestamp) ? window.jsbotTimestamp + 0.000001 : 0.000001;
  var __datetime = new Date(__timestamp);
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
    type: (message.image) ? 'image' : 'dialog',
    buttons: $.map(message.buttons, function(elem,index) {
      return elem.caption;
    }),
    payloads: $.map(message.buttons, function(elem,index) {
      return elem.caption;
    }),
    extra_data: message.extra_data,
  }
  helloumi.webchat.umichatcore.loadMessage(__message);
}

function helloumiLivechatLoaded() {
  // document.querySelector('.hu-messenger-body').addEventListener('scroll', function(e) {
  //   if (e.target.scrollTop <= 5) {
  //     document.getElementById('hu-experiment-header').className = '';
  //   } else {
  //     document.getElementById('hu-experiment-header').className = 'hu-scrolled';
  //   }
  // });
  if (helloumi.webchat.umichatcore.config.jsbot && helloumi.webchat.umichatcore.config.customerToken == null ) {
    window.jsbot = new ForaBotController();
    window.jsbot.on('message', forabotMessageReceived);
    window.jsbot.on('typing', forabotTypingState);
    window.jsbot.load(
      new ForaBot(Date.now().toString(), helloumi.webchat.umichatcore.config.jsbot )
    );
    $('#hu-composer-box').prop('placeholder', 'Escribe tu mensaje aquí');
    window.jsbot.start();
    document.getElementById('hu-webchat-loader').style.setProperty('display', 'none', 'important');
  }
  hideLoader();
}

function helloumiLivechatIframeLoaded() {
  window.HULiveChat.ifrWindow.document.querySelector('head').innerHTML += '<link rel="stylesheet" href="css/botchat.css" type="text/css"/>';
  // window.HULiveChat.ifrWindow.document.querySelector('.hu-messenger-body').addEventListener('scroll', function(e) {
  //   if (e.target.scrollTop <= 5) {
  //     document.getElementById('hu-experiment-header').className = '';
  //   } else {
  //     document.getElementById('hu-experiment-header').className = 'hu-scrolled';
  //   }
  // });
  hideLoader();
}

function trackEvent(flag, eventName, stepName) {
  if (typeof(window[flag])=='undefined'){
    window.analytics.track(eventName, {step: stepName});
    window[flag]=1;
  }
};

// MENSAJE FAKE
function fakeMessage(msg, ghost){
  var umichatCore = (typeof(helloumi) != 'undefined') ? helloumi.webchat.umichatcore
                  : HULiveChat.ifrWindow.helloumi.webchat.umichatcore;
  var umichatGUI = (typeof(helloumi) != 'undefined') ? helloumi.webchat.umichatgui
                  : HULiveChat.ifrWindow.helloumi.webchat.umichatgui;

  if (ghost === true) {
    umichatGUI.createGhost({
      timestamp: Date.now()/1000,
      type: "text",
      message: msg,
    });
  }// Ghost image message

  // Send message
	var formData = new FormData();
	formData.append('message', msg);
	umichatCore.sendMessage(
		formData,
		umichatCore.messageSent.bind(umichatCore)
	);
}

// ADD CLASS REMOVE CLASS
function addClass(){
	var d = document.getElementById("rightheader");
	d.className = "hu-right-header notclickable";
}

function removeClass(){
	var d = document.getElementById("rightheader");
	d.classList.remove("notclickable");
}

// ADD CLASS REMOVE CLASS
function showLoader(){
  var __loader = document.querySelector(".sk-folding-cube");
  var __loader2 = document.querySelector(".loader-referral");
  if (__loader) __loader.style.opacity = "1";
  if (__loader) __loader2.style.opacity = "1";
}

function hideLoader(){
  var __loader = document.querySelector(".sk-folding-cube");
  var __loader2 = document.querySelector(".loader-referral");
	if (__loader) __loader.style.opacity = "0";
  if (__loader2) __loader2.style.opacity = "0";
}

function getEmailFromURL(){
  var url = window.location.href; // or window.location.href for current url
  var emailRegExp = new RegExp('(\\?|\\&)(email\=)([^&]+)','gi');
  var trashRegExp = new RegExp('^(\\?|\\&)(email\=)','i');
  var matches = url.match(emailRegExp);
  var result = matches ? matches[0].replace(trashRegExp, '') : false;
  return result;
}

function loadSearch(elem, path, callback){
  var $elem = $(elem);
  var $container = $elem.parent().parent();
  var $paragraph = $elem.parent();
  $paragraph.fadeTo(0, 0);
  if ( $elem.length > 0) {
    $.ajax(
      {
        url: path,
        type: 'GET',
        error: function() {
          if ( typeof(callback) == 'function' ) callback(false);
        },
        success: function(result) {
          var __data;
          if ( typeof(result) == 'object' ) __data = result;
          if (__data) {

            var $selectize = $('<select placeholder="Type here...">');
            var __dataFormatted = $.map( __data, function( elem, index ){
              return $.extend({}, elem );
            });
            $container.addClass('hu-message-content-search');
            $container.append( $selectize );
            $selectize.selectize({
              maxOptions: 4,
              valueField: 'keyword',
              labelField: 'name',
              searchField: ['name'],
              sortField: [{ field: 'score', direction: 'desc' }],
              placeholder: $paragraph.text(),
              preload: true,
              highlight: true,
              openOnFocus: false,
              create: false,
              onItemAdd: function(keyword, $item){
                fakeMessage(keyword, true);
                $item.parent().parent().parent().parent().parent().parent().remove();
                setTimeout( this.destroy.bind(this), 100);
              },
              onInitialize: function(){
                $paragraph.fadeTo(200, 1);
                helloumi.webchat.umichatgui.scrollBottom();
              },
              onType: function(text) {
                if (text.length > 0) {
                  this.$dropdown_content.addClass('hu-searching');
                } else {
                  this.$dropdown_content.removeClass('hu-searching');
                }
                helloumi.webchat.umichatgui.scrollBottom();
              },
              onFocus: function() {
                this.$dropdown_content.removeClass('hu-searching');
              },
              onBlur: function() {
                if (this.$dropdown_content.hasClass('hu-searching')) {
                  this.$dropdown_content.removeClass('hu-searching');
                  this.refreshOptions();
                }
              },
              score: function(search) {
                  if (search.length > 0) {
                    var score = this.getScoreFunction(search);
                    return function(item) {
                      console.log(item.name + ': ' + (score(item) * (1 + Math.min(item.score / 100, 1))));
                      return score(item) * (1 + Math.min(item.score / 100, 1));
                    };
                  } else {
                    return function(item) {
                      console.log(item.name + ': ' + (1 + Math.min(item.score / 100, 1)));
                      return (1 + Math.min(item.score / 100, 1));
                    };
                  }
              },
              options: __dataFormatted,
              render: {
                option: function(item, escape) {
                  return '<div class="hu-selectize-item" data-keyword="' + escape(item.keyword) + '" onclick="javascript:selectizeClick(this);">' +
                    '<span class="hu-selectize-avatar" style="background-image: url(' + escape(item.image) + ')"></span>' +
                    '<span class="hu-selectize-text">' + escape(item.name) + '</span></div>';
                }
              }
            })
            $paragraph.remove();
            $container.find('.selectize-input').click(); // Foces open
            if ( typeof(callback) == 'function' ) callback(true);
          } else {
            if ( typeof(callback) == 'function' ) callback(false);
          }
        }
      }
    );
  }
}


function selectizeClick( elem ){
  var $elem = $(elem);
  var __keyword = $elem.data('keyword');
  if (__keyword) {
    var $selectize = $elem.parent().parent().parent().parent().find('select.selectized');
    if ($selectize.length > 0) {
      fakeMessage(__keyword, true);
      $selectize[0].selectize.destroy();
      $selectize.parent().parent().parent().parent().parent().remove();
    }
  }
}
