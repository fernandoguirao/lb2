function renderHelloumiLiveChat( configKey, callback ) {
  showLoader();
  new UmichatRequirements(function(){
    new TemplateUtils();
    // Default snippet config load
    var __configKeys = Object.keys(window.chatbotConfigs);
    if (__configKeys.length > 0) {
      var __config, __email = getEmailFromURL();
      if (configKey && window.chatbotConfigs[configKey] ) {
        __config = window.chatbotConfigs[configKey];
      } else {
        __config = window.chatbotConfigs[ __configKeys[0] ];
      }
      if (__config) {
        var __umichatCore = new UmichatCore( __config );
        __umichatCore.on('render', helloumiLivechatLoaded);
        if ( typeof(callback) == 'function' ) {
          __umichatCore.on('render', callback);
        }
      }
    }
  });
}

function loadHelloumiLiveChat( configKey ) {
  var __container = document.getElementById('hu-container-widget');
  if ( __container ) {
    __container.parentNode.removeChild(__container);
    var firebaseApp =(helloumi.webchat.umimessageservice) ? helloumi.webchat.umimessageservice.firebaseApp : null;
    if (firebaseApp) {
      firebaseApp.delete().then(function(){
        renderHelloumiLiveChat( configKey );
      })
    } else {
      renderHelloumiLiveChat( configKey );
    }
  }
}

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

function customizeTextbox(){
  var landbottextbox = document.createElement('div');
  landbottextbox.id = "landbot-textbox";
  document.querySelector("#hu-webchat-ghosts").before(landbottextbox);
  if(screen.width >= 800) document.querySelector('.hu-composer-send-button').classList.remove('hu-js-hide');
  helloumi.webchat.umichatgui.setVisibleSendButtonBackUp = helloumi.webchat.umichatgui.setVisibleSendButton;
  helloumi.webchat.umichatgui.setVisibleSendButton = setVisibleSendButtonWrapper;
}

function setVisibleSendButtonWrapper(visible){
  if( screen.width < 800 ){
    helloumi.webchat.umichatgui.setVisibleSendButtonBackUp(visible);
  }
  if(document.querySelector("#hu-container-widget").dataset.textbox){
    return true;
  }
  helloumi.webchat.umichatgui.setVisibleSendButtonBackUp(visible);
}

function showTextBox(messageData){
  var containerwidget = document.querySelector("#hu-container-widget");
  if(messageData.features.textarea.field){
    document.querySelector("#hu-composer-box").placeholder = "Type your " + messageData.features.textarea.field + " here ...";
    containerwidget.dataset.textboxplaceholder = 'prefixed';
  }
  else{
    document.querySelector("#hu-composer-box").placeholder = "Type here ...";
     containerwidget.dataset.textboxplaceholder = 'custom';
  }

  if(screen.width < 800) return true;
  /* Move textbox next last message; hide emoji and file buttons; and show send button*/
  var landbottextbox = document.querySelector("#landbot-textbox");
  landbottextbox.appendChild(document.querySelector(".hu-messenger-footer"));
  document.querySelector('.hu-composer-send-button').classList.remove('hu-js-hide');
  document.querySelector('.hu-composer-file-button').classList.add('hu-js-hide');
  document.querySelector('.hu-composer-emoji-button').classList.add('hu-js-hide');
}
function hideTextBox(messageData){
  /* For mobile never hide */
  if(screen.width < 800) return true;
  /* Reset values */
  document.querySelector("#hu-composer-box").placeholder = "Type here ...";
  document.querySelector('.hu-composer-file-button').classList.remove('hu-js-hide');
  document.querySelector('.hu-composer-emoji-button').classList.remove('hu-js-hide');
  /* Return textbox to original position */
  document.querySelector("#hu-container-widget").appendChild(document.querySelector(".hu-messenger-footer"));
}

function fadeOutButtons(element) {
  // element.parentNode.parentNode.classList.
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
  if ( !localStorage.getItem('landbot_'+helloumi.webchat.umichatcore.config.channelToken+'_'+flag) ){
    try {
      var analyticsUserId = window.analytics.user().id();
      if( analyticsUserId == null ) {
        var distinctId = window.mixpanel.get_distinct_id();
        window.analytics.identify(distinctId, data );
      } else {
        if (analyticsUserId.substr(0,6) != 'brand_') {
          window.analytics.identify(analyticsUserId, data );
        }
      }
      localStorage.setItem('landbot_'+helloumi.webchat.umichatcore.config.channelToken+'_'+flag, 1);
    } catch(e) {
      var __data = (typeof(data) == 'object') ?  JSON.stringify(data) : ''
      console.log('Landbot Analytics: error identifying user '+ __data);
    }
  }
};

function helloumiLivechatLoaded() {
  if ( HULandbot && typeof(HULandbot.config.initialMessage) == 'string' && helloumi.webchat.umichatcore.config.customerToken == null ) {
    fakeMessage(HULandbot.config.initialMessage)
  }
  hideLoader();
}

function trackEvent(flag, eventName, stepName) {
  if ( !localStorage.getItem('landbot_'+helloumi.webchat.umichatcore.config.channelToken+'_'+flag) ){
    try {
      window.analytics.track(eventName, {step: stepName});
      localStorage.setItem('landbot_'+helloumi.webchat.umichatcore.config.channelToken+'_'+flag, 1);
    } catch (e) {
      console.log('Landbot Analytics: error tracking event '+ eventName + ' ' + (stepName||''));
    }
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
	d.classList.add("notclickable");
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
  if (__loader) __loader.style.zIndex = "99999";
  if (__loader) __loader2.style.zIndex = "99999";
}

function hideLoader(){
  var __loader = document.querySelector(".sk-folding-cube");
  var __loader2 = document.querySelector(".loader-referral");
	if (__loader) __loader.style.opacity = "0";
  if (__loader2) __loader2.style.opacity = "0";
  if (__loader) __loader.style.zIndex = "-1";
  if (__loader) __loader2.style.zIndex = "-1";
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






// ==============
// MENÚ BACK NEXT
// ==============

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("back-btn").onclick = function(){
     fakeMessage('back');
   }
   document.getElementById("publish-btn").onclick = function(){
      fakeMessage('next');
    }
});

var showFooter = function(){
  $('body').addClass('show-footer');
}

var changeFooter = function(){
  $('.foot-container .description b').html("EDITING BOT");
  $('.foot-container .back-btn').remove();
  $('.foot-container .publish-btn').attr('id','publish-btn2');
  $('<div class="back-btn" style="margin-right: 7px;" id="preview-btn"><span style="margin-left: 0!important;">Preview</span></div>').insertBefore('.foot-container .publish-btn');
  document.getElementById("publish-btn2").onclick = function(){
     fakeMessage('#publish');
  }
  document.getElementById("preview-btn").onclick = function(){
    fakeMessage('#preview');
  }
}

var previewFooter = function(){
  $('.foot-container .description b').html("PREVIEWING BOT");
  $('<div class="back-btn" style="margin-right: 7px;" id="preview-btn2"><span style="margin-left: 0!important;">End Preview</span></div>').insertBefore('.foot-container .publish-btn');
  $('#preview-btn').hide();
  document.getElementById("preview-btn2").onclick = function(){
     fakeMessage('#finish');
  }
}

var endPreviewFooter = function(){
  $('.foot-container .description b').html("EDITING BOT");
  $('#preview-btn').show();
  $('#preview-btn2').remove();
}

var fadeBtn = function(){
  $('body').addClass('fade-btn');
}

var fadeOutBtn = function(){
  $('body').removeClass('fade-btn');
}

var hideFooter = function(){
  $('body').removeClass('show-footer');
}


// ============
// COLOR PICKER
// ============

var flagColor = 0;
function addColorPicker(){
  var colors = ['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#f1c40f','#e67e22','#e74c3c','#ecf0f1','#bdc3c7','#95a5a6'];
  if (flagColor < 1){
    var colorsHTML = "";
    $.each(colors, function(i){
      colorsHTML += '<li style="background-color:'+colors[i]+';" onclick="fakeMessage(\''+colors[i]+'\')"></li>';
    });
    var colorPicker = '<div class="color-picker"><ul>'+ colorsHTML +'</ul></div>';
    $('.hu-footer-state').prepend(colorPicker);
    flagColor = 1;
  }
}

function removeColorPicker(){
  $('.color-picker').remove();
  flagColor = 0;
}


// BTN UPLOAD
function showBtnUpload() {
  $('.hu-composer-file-button').addClass('btn-upload');
}

function hideBtnUpload() {
  $('.btn-upload').removeClass('btn-upload');
}
