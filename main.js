
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
  window.HULiveChat.ifrWindow.document.querySelector('head').innerHTML += '<link rel="stylesheet" href="styles/botchat.css" type="text/css"/>';
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

function loadM(data) {
  var umichatMessageService = (typeof(helloumi) != 'undefined')
                  ? helloumi.webchat.umimessageservice
                  : HULiveChat.ifrWindow.helloumi.webchat.umimessageservice;
  umichatMessageService.pushBotsMessage(data);
  // umichatMessageService.activeBotsMessage();
}
function newMessage(select) {
  var msg_normal = {extra_data: {delaytime: "0.001", hidetextbox: true}, key: "k1", message: "Hi, there! 👋", timestamp: 1494841657.109146, samurai: -22, type: "text"};

  var msg_large = {extra_data: {delaytime: "0", hidetextbox: true}, key: "k2", message: "My name is Landbot and I can help you out *turning your website into a chatbot* 🤖", timestamp: 1494841657.125494, samurai: -22, type: "text"};

  var msg_image = {extra_data: {delaytime: "1.5", hidetextbox: true}, key: "k3", message: "", timestamp: 1494841657.150021, samurai: -22, type: "image", url: "https://storage.googleapis.com/media.yexir.com/ronin/1494601075.503923.gif"};

  var msg_buttons = {extra_data: {delaytime: "2", hidetextbox: true}, key: "k4", message: "Do you want to sign up to get early access?", timestamp: 1494841657.182302, samurai: -22, title: "Do you want to sign up to get early access?", type: "dialog", buttons: ["Yes", "Tell me more"], payloads: ["Yes", "Tell me more"]}

  switch (select) {
    case "normal":
      loadM(msg_normal);
      break;
    case "large":
      loadM(msg_large);
      break;
    case "image":
      loadM(msg_image);
      break;
    case "buttons":
      loadM(msg_buttons);
      break;
    case "all":
      loadM(msg_normal);
      loadM(msg_large);
      loadM(msg_image);
      loadM(msg_buttons);
    default:
      loadM(msg_normal);
  }

}
