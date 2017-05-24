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
  $(target).parent().parent().children('.la-flex').children().click(function(){
    var textVar = $(this).text();
    fakeMessage(textVar, true);
  });
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

function helloumiLivechatLoaded() {
  // document.querySelector('.hu-messenger-body').addEventListener('scroll', function(e) {
  //   if (e.target.scrollTop <= 5) {
  //     document.getElementById('hu-experiment-header').className = '';
  //   } else {
  //     document.getElementById('hu-experiment-header').className = 'hu-scrolled';
  //   }
  // });
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
      timestamp: Date.now(),
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
