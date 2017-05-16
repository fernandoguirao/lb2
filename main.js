
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
  document.querySelector('.hu-messenger-body').addEventListener('scroll', function(e) {
    if (e.target.scrollTop <= 5) {
      document.getElementById('hu-experiment-header').className = '';
    } else {
      document.getElementById('hu-experiment-header').className = 'hu-scrolled';
    }
  });
  hideLoader();
}

function helloumiLivechatIframeLoaded() {
  window.HULiveChat.ifrWindow.document.querySelector('head').innerHTML += '<link rel="stylesheet" href="styles/botchat.css" type="text/css"/>';
  window.HULiveChat.ifrWindow.document.querySelector('.hu-messenger-body').addEventListener('scroll', function(e) {
    if (e.target.scrollTop <= 5) {
      document.getElementById('hu-experiment-header').className = '';
    } else {
      document.getElementById('hu-experiment-header').className = 'hu-scrolled';
    }
  });
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
                  console.log(msg);
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
	d.className += " notclickable";
}

function removeClass(){
	var d = document.getElementById("rightheader");
	d.classList.remove("notclickable");
}

// ADD CLASS REMOVE CLASS
function showLoader(){
  // document.getElementById("hu-live-chat").style.opacity = "0";
	document.querySelector(".sk-folding-cube").style.opacity = "1";
}

function hideLoader(){
	document.querySelector(".sk-folding-cube").style.opacity = "0";
  // document.getElementById("hu-live-chat").style.opacity = "1";
}

// function bodyLoaded(){
//   document.querySelector('body').addEventListener('scroll', function(e){
//     console.log(e); e.preventDefault();
//   })
// }
