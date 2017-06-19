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
  $('.js-flexparent:not(:last-child) .js-flex').remove();
  //$('.js-flex').remove();
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
  // getStaticBot('files/jsbots/test.json');
  //getStaticBot('files/jsbots/bot-builder-content.json');
  // getStaticBot('files/jsbots/bot-example-traemebirra.json')
  // hideLoader();
  // return;

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
function loadContentBuilder(elem){
  getStaticBot('files/jsbots/bot-builder-content.json');
  $(elem).remove();
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
  window.jsbot.on('custom.publish', forabotSaveBot.bind(this, window.jsbot));
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
