function uploadLogo(logo) {
  console.log(logo);
  $('.hu-left-header img,.logo').remove();
  $('.hu-left-header').prepend('<span class="logo">'+logo+'</span>');
}

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




var vars = {
  containertype:'fullscreen',
  accent: '#ce4b81',
  contrast: '#4a50a8',
  light: 'white',
  dark: '#000',
  font: 'Gotham Rounded',
  fonttype: 'sans-serif',
  fontsize: '14px',
  embfonts: 'true',
  fonturl: 'https://fonts.googleapis.com/css?family=Lato',
  backgroundtype: 'gradient',
  gradientfrom: '#ffad59',
  gradientto: '#ffe199',
  backgroundimageurl: 'https://storage.googleapis.com/media.yexir.com/channels_back/31.png',
  backgroundcolor: 'transparent',
  videotexture: 'color',
  boxfooter: '#ce4b81',
  videoname: 'video',
  videoupload: 'false',
  videourl: 'files/video.mp4'
};

function getCSS(variables){

  if (variables['containertype']) { vars['containertype'] = variables['containertype']; }
  if (variables['accent']) { vars['accent'] = variables['accent']; }
  if (variables['contrast']) { vars['contrast'] = variables['contrast']; }
  if (variables['light']) { vars['light'] = variables['light']; }
  if (variables['dark']) { vars['dark'] = variables['dark']; }
  if (variables['font']) { vars['font'] = variables['font']; }
  if (variables['fonttype']) { vars['fonttype'] = variables['fonttype']; }
  if (variables['fontsize']) { vars['fontsize'] = variables['fontsize']; }
  if (variables['embfonts']) { vars['embfonts'] = variables['embfonts']; }
  if (variables['fonturl']) { vars['fonturl'] = variables['fonturl']; }
  if (variables['backgroundtype']) { vars['backgroundtype'] = variables['backgroundtype']; }
  if (variables['gradientfrom']) { vars['gradientfrom'] = variables['gradientfrom']; }
  if (variables['gradientto']) { vars['gradientto'] = variables['gradientto']; }
  if (variables['backgroundimageurl']) { vars['backgroundimageurl'] = variables['backgroundimageurl']; }
  if (variables['backgroundcolor']) { vars['backgroundcolor'] = variables['backgroundcolor']; }
  if (variables['videotexture']) { vars['videotexture'] = variables['videotexture']; }
  if (variables['boxfooter']) { vars['boxfooter'] = variables['boxfooter']; }
  if (variables['videourl']) { vars['videourl'] = variables['videourl']; }
  if (variables['videoname']) { vars['videoname'] = variables['videoname']; }
  if (variables['videoupload']) { vars['videoupload'] = variables['videoupload']; }
  console.log(vars);

  var urlPar = '?containertype=' + vars['containertype'] +
  '&accent='+ encodeURIComponent(vars['accent']) +
  '&contrast=' + encodeURIComponent(vars['contrast']) +
  '&light='+ encodeURIComponent(vars['light']) +
  '&dark='+ encodeURIComponent(vars['dark']) +
  '&font=' + encodeURI(vars['font']) +
  '&font-type=' + encodeURI(vars['fonttype']) +
  '&font-size=' + vars['fontsize'] +
  '&embfonts=' + vars['embfonts'] +
  '&font-url=' + encodeURIComponent(vars['fonturl']) +
  '&background-type=' + vars['backgroundtype'] +
  '&gradient-from=' + encodeURIComponent(vars['gradientfrom']) +
  '&gradient-to=' + encodeURIComponent(vars['gradientto']) +
  '&background-image-url=' + encodeURI(vars['backgroundimageurl']) +
  '&background-color=' + encodeURIComponent(vars['backgroundcolor']) +
  '&video-texture=' + encodeURI(vars['videotexture']) +
  '&box-footer=' + encodeURIComponent(vars['boxfooter']);

  var urls = "http://landbot.io/sasscompiler/index.css.php" + urlPar;

  $.when($.get(urls))
  .done(function(response) {
      $('.bg-texture,video,#tempstyles').remove();
      $('<style id="tempstyles" />').text(response).appendTo($('body'));
      if (vars['backgroundtype'] == 'video'){
        var videoupload = vars['videoupload'];
        if (videoupload == 'false'){
          var videoname = vars['videoname'];
          var htmlcontent = '<div class="bg-texture"></div><video playsinline autoplay muted loop poster="files/'+videoname+'.jpg" id="bgvid"><source src="files/'+videoname+'.webm" type="video/webm"><source src="files/'+videoname+'.mp4" type="video/mp4"></video>';
        } else {
          var videourl = vars['videourl'];
          var htmlcontent = '<div class="bg-texture"></div><video playsinline autoplay muted loop poster="files/video.jpg" id="bgvid"><source src="' + videourl + '" type="video/mp4"></video>';
        }

        $('body').append(htmlcontent);
      }
  });
}

function jsfakeMessage(target){
  $(target).parent().parent().children('.container-inline').children('.two-rows').children('a').click(function(e){
    e.preventDefault();
    var textVar = $(this).text();
    fakeMessage(textVar, true);
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
  $('.js-flex').parent().parent().parent().parent().addClass('jsflex-hide');
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

function forabotTypingState( data ){
  helloumi.webchat.umichatcore.setTypingState(-22);
  setTimeout(function(){
    helloumi.webchat.umichatcore.setTypingState('');
  }, data.timeout);
}
function forabotPreviewBot( controller ){
  var __data = controller.getCurrentData();
  var __storage = __data.storage;
  if (__storage.crea_bot === true) {
    var __previewData = {};
    __previewData.name = 'preview';
    __previewData.init = 'welcome_1';
    __previewData.status = {};

    // welcome_1
    __previewData.status['welcome_1'] = {
      text: __storage.welcome_1,
      next: (__storage.welcome_2) ? 'welcome_2' : false
    };

    if (__storage.welcome_2) {
      // welcome_2
      __previewData.status['welcome_2'] = {
        text: __storage.welcome_2,
        next: (__storage.form === true || __storage.faqs === true) ? 'menu' : false
      };
    }

    // menu (static)
    if (__storage.form === true || __storage.faqs === true) {
      __previewData.status['menu'] = {
        text: '¿En qué puedo ayudarte?',
        buttons: []
      };
      if (__storage.form === true) {
        __previewData.status['menu'].buttons.push({
          caption: __storage.form_name,
          next: (__storage.form_user === true) ? 'form_user_1' : 'form_custom_1'
        })
      }
      if (__storage.faqs === true) {
        __previewData.status['menu'].buttons.push({
          caption: 'FAQS',
          next: 'faqs'
        })
      }
    }

    // form_user
    if (__storage.form_user === true) {
      var __index = 1;
      var __nextStatus = (__storage.form_custom === true) ? 'form_custom_1' : 'form_farewell';
      var __fields = __storage.form_user_fields.split(',');
      for (var i=0; i<__fields.length; i++) {
        var TEXTS = {
          name: '¿Cómo te llamas?',
          email: '¿Cuál es tu email?',
          phone: '¿Cuál es tu número de teléfono?',
          zip: '¿Puedes indicarme tu código postal?',
          address: '¿Cuál es tu dirección?',
          city: '¿Cuál es tu ciudad?',
          country: '¿Cuál es tu país?',
          company: '¿Cómo se llama tu empresa?',
          birthdate: '¿Cuál es tu fecha de nacimiento?'
        };
        var __text = TEXTS[ __fields[i] ] || '¿Puedes indicarme tu ' + __fields[i] + '?';
        var __next = (i == __fields.length-1) ? __nextStatus : 'form_user_'+(__index+1);
        __previewData.status['form_user_'+__index] = {
          text: __text,
          input: {
            next: __next
          }
        };
        __index += 1;
      }
    }

    // form_custom
    if (__storage.form_custom === true) {
      var __nextStatus = 'form_farewell';
      for (var i=1; i<100; i++) {
        var __type = __storage['form_custom_' + i + '_type'] ;
        var __text = __storage['form_custom_' + i + '_text'] ;
        var __answer = __storage['form_custom_' + i + '_answer'] ;
        var __nextType = __storage['form_custom_' + (i+1) + '_type'] ;
        var __next = (!__nextType) ? __nextStatus : 'form_custom_'+(i+1);
        if ( __type == 'option') {
          __previewData.status['form_custom_'+i] = {
            text: __text,
            buttons: []
          };
          var __answerArr = __answer.split(',');
          for (var j=0; j<__answerArr.length; j++) {
            __previewData.status['form_custom_'+i].buttons.push({
              caption: __answerArr[j],
              next: __next
            })
          }
        } else if ( __type == 'options') {
          __previewData.status['form_custom_'+i] = {
            "text": __text,
            "event": "checklist",
            "checklist": {
              "values": {},
              "min": 1,
              "caption": "Siguiente",
              "next": __next
            }
          };
          console.log(__previewData.status['form_custom_'+i]);
          var __answerArr = __answer.split(',');
          for (var j=0; j<__answerArr.length; j++) {
            __previewData.status['form_custom_'+i].checklist.values[ __answerArr[j] ] = __answerArr[j];
          }
        } else if ( __type == 'text') {
          __previewData.status['form_custom_'+i] = {
            text: __text,
            input: {
              next: __next
            }
          };
        }
        if (!__nextType) break;
      }
    }



    if (__storage.form === true) {
      // form_farewell
      __previewData.status['form_farewell'] = {
        text: __storage.form_farewell,
        next: 'another'
      };

      // Another question (static)
      __previewData.status['another'] = {
        text: '¿Tienes alguna otra consulta?',
        buttons: [
          { caption: 'Sí', next: 'menu' },
          { caption: 'No', next: 'end_form' }
        ]
      };

      // end form (static)
      __previewData.status['end_form'] = {
        text: 'Genial, ¡Hasta pronto! 👋',
        next: false
      };
    }

    // faqs
    if (__storage.faqs === true) {
      // faqs menu
      __previewData.status['faqs'] = {
        text: 'Por supuesto, selecciona un tema',
        buttons: []
      };
      for (var i=1; i<100; i++) {
        // New button
        var __name = __storage['faqs_' + i + '_name'] ;
        var __nextName = __storage['faqs_' + (i+1) + '_name'] ;
        __previewData.status['faqs'].buttons.push({
          caption: __name,
          next: 'faqs_'+ i + '_messages_1'
        })

        // New faqs
        for (var j=1; j<100; j++) {
          var __message = __storage['faqs_' + i + '_messages_' + j] ;
          var __nextMessage = __storage['faqs_' + i + '_messages_' + (j+1)] ;
          var __next = (!__nextMessage) ? 'another_faq' : 'faqs_'+i+'_messages_'+(j+1);
          __previewData.status['faqs_'+i+'_messages_'+j] = {
            text: __message,
            next: __next
          }
          if (!__nextMessage) break;
        }

        if (!__nextName) break;
      }
    }

    if (__storage.faqs === true) {
      // Another faq (static)
      __previewData.status['another_faq'] = {
        text: '¿Tienes alguna otra consulta?',
        buttons: [
          { caption: 'Sí', next: 'menu' },
          { caption: 'Terminar', next: 'end_faq' }
        ]
      };

      // end faq (static)
      __previewData.status['end_faq'] = {
        text: 'Gracias, espero haberte servido de ayuda. ¡Hasta pronto!',
        next: false
      };
    }

    __previewData.keywords = {
      'salir': {
        'next': false
      }
    }

    window.jsbot = new ForaBotController();
    window.jsbot.on('output', forabotMessageReceived);
    window.jsbot.on('input', forabotMessageSent);
    window.jsbot.on('waiting', forabotWaitingMessage);
    window.jsbot.on('typing', forabotTypingState);
    window.jsbot.on('custom.checklist', forabotCreateChecklist);
    window.jsbot.on('custom.clear start', function(){
      $('#hu-webchat-messages').empty();
    });
    window.jsbot.on('finish custom.end_preview', function(){
      loadStaticBot(__data, 'preview_end');
    });

    window.jsbot.load(
      new ForaBot(Date.now().toString(), __previewData )
    );
    helloumi.webchat.umichatcore.redirectMesssages( window.jsbot.send.bind(window.jsbot) );
    window.jsbot.start();
    document.getElementById('hu-webchat-loader').style.setProperty('display', 'none', 'important');

  } else {
    window.jsbot.go('preview_no_data');
  }

}

function forabotWaitingMessage( status ) {
  if (status.input) {
    $('#hu-container-widget').attr('data-textbox', 'show');
    $('#hu-composer-box').focus();
  }
}
function forabotCreateChecklist( controller ) {
  var __data = {};
  try {
    __data = controller.currentBot.status[ controller.currentStatus ].checklist;
  } catch(error) {
    console.log('Error creating checklist');
    throw error;
  }

  var $container = $('#hu-webchat-messages .hu-messenger-message:last-child .hu-message-content-buttons .hu-btn-group-vertical');
  var $clonedContainer = $container.clone();
  var $continueBtn = $('<div class="hu-btn hu-btn-sm hu-btn-block hu-btn-pink"><span data-click="' + __data.caption + '">' + __data.caption + '</span></div>')
  var __min = (typeof(__data.min) == 'number') ? __data.min : 0;

  //
  // Create check buttons
  //
  var $title = $('<p style="display: block; color: #ce4b81 !important; padding-bottom: 8px;">');
  $title.text('Selecciona al menos una opción:');
  $container.append($title);

  //
  // Create check buttons
  //
  $.each( __data.values, function( key, elem ){
    var $checkItem = $('<div class="hu-btn hu-btn-sm hu-btn-block hu-btn-pink hu-btn-unchecked"><span class="fi check"></span><span data-click="' + key + '">' + elem + '</span></div>')
    $checkItem.on('click', function(){
      $(this).toggleClass('hu-btn-unchecked hu-btn-checked');
      var $checks = $container.find('.hu-btn-pink:not(.hu-btn-unchecked)');
      if ($checks.length >= __min) {
        $continueBtn.removeClass('hu-btn-disabled');
      } else {
        $continueBtn.addClass('hu-btn-disabled');
      }
    })
    $container.append($checkItem)
  });

  //
  // SEND button
  //
  $continueBtn.on('click', function(){
    var $checks = $container.find('.hu-btn-pink:not(.hu-btn-unchecked)');
    var __value = $checks.map(function(index, elem){
      return $(elem).find('span:last-child').data('click');
    }).get().join(',');
    if ($checks.length >= __min) {
      fakeMessage(__value, true);
      $container.parent().empty();
    }
  });
  if (__min > 0) {
    $continueBtn.addClass('hu-btn-disabled');
  }
  $clonedContainer.append($continueBtn);

  $container.parent().append($clonedContainer)
}

function forabotMessageSent() {
  $('#hu-container-widget').attr('data-textbox', 'hidden');
}

function forabotMessageReceived( message ) {
  var __timestamp;
  var $lastMessage = $('#hu-webchat-messages .hu-messenger-message:last-child');
  if ($lastMessage.length != 0) {
    __timestamp = window.jsbotTimestamp = parseFloat(
      $('#hu-webchat-messages .hu-messenger-message:last-child').data('timestamp')
    ) + 0.0001;
  } else {
    __timestamp = window.jsbotTimestamp = (window.jsbotTimestamp) ? window.jsbotTimestamp + 0.000001 : 0.000001;
  }
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
  // getStaticBot('files/jsbots/test.json');
  getStaticBot('files/jsbots/bot-builder-content.json');
  // getStaticBot('files/jsbots/bot-example-traemebirra.json')
  hideLoader();
  return;

  // document.querySelector('.hu-messenger-body').addEventListener('scroll', function(e) {
  //   if (e.target.scrollTop <= 5) {
  //     document.getElementById('hu-experiment-header').className = '';
  //   } else {
  //     document.getElementById('hu-experiment-header').className = 'hu-scrolled';
  //   }
  // });

  if (helloumi.webchat.umichatcore.config.jsbot && helloumi.webchat.umichatcore.config.customerToken == null ) {
    window.jsbot = new ForaBotController();
    window.jsbot.on('output', forabotMessageReceived);
    window.jsbot.on('typing', forabotTypingState);
    window.jsbot.load(
      new ForaBot(Date.now().toString(), helloumi.webchat.umichatcore.config.jsbot )
    );
    window.jsbot.start();

    helloumi.webchat.umichatcore.on('messageSent', function( messageData ){
      trackEvent('firstMessage', 'Landbot Chat', 'Starts conversation');
      helloumi.webchat.umichatcore.off('messageSent');
    })

    document.getElementById('hu-webchat-loader').style.setProperty('display', 'none', 'important');
    trackEvent('start', 'Load Landbot');
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
  $('.two-rows,.la-flex').parent().parent().parent().parent().addClass('jsflex-hide');
  $('.two-rows,.la-flex').remove();
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
  if (!helloumi.utils.environment['formDataGet']) {
    formData.message = msg; // Hack for iOS/IE
  }
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
                      //console.log(item.name + ': ' + (score(item) * (1 + Math.min(item.score / 100, 1))));
                      return score(item) * (1 + Math.min(item.score / 100, 1));
                    };
                  } else {
                    return function(item) {
                      //console.log(item.name + ': ' + (1 + Math.min(item.score / 100, 1)));
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


function getStaticBot(path) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      loadStaticBot(xhr.responseText);
    }
  }
  xhr.open('GET', path, true);
  xhr.setRequestHeader("Accept","application/json");
  xhr.send(null);
}

function loadStaticBot( data, step ) {
  var __data;
  if (typeof(data) == 'object') {
    __data = data;
  } else if (typeof(data) == 'string') {
    try {
      __data = JSON.parse(data);
    } catch(err) {
      console.log('Error parsing jsbot data to JSON');
      throw err;
    }
  }
  window.jsbot = new ForaBotController();
  window.jsbot.on('output', forabotMessageReceived);
  window.jsbot.on('input', forabotMessageSent);
  window.jsbot.on('waiting', forabotWaitingMessage);
  window.jsbot.on('typing', forabotTypingState);
  window.jsbot.on('custom.checklist', forabotCreateChecklist);
  window.jsbot.on('custom.clear', function(){
    $('#hu-webchat-messages').empty();
  });
  window.jsbot.on('custom.preview', forabotPreviewBot);
  window.jsbot.on('finish', function(){
    helloumi.webchat.umichatcore.redirectMesssages( false );
    $('#hu-container-widget').attr('data-textbox', 'show');
    $('#hu-composer-box').focus();
  });
  window.jsbot.load(
    new ForaBot(Date.now().toString(), __data )
  );
  helloumi.webchat.umichatcore.redirectMesssages( window.jsbot.send.bind(window.jsbot) );
  window.jsbot.start(step);
  document.getElementById('hu-webchat-loader').style.setProperty('display', 'none', 'important');
}
