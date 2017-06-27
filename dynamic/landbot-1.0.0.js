/**
 * Landbot constructor
 * @param       {Object} config Given config
 * @constructor
 */
function Landbot(config) {
  this.DEFAULTS = {
    'title': 'Landbot | Convert a Landing Page into a Chatbot',
    'description': 'Landbot.io is a tool to create conversational interfaces in substitution of forms. No coding required!',
    'url': document.location.origin,
    'livechatVersion': '1.0.1',
    'staticUrl': null,
    'serverUrl': null,
    'channelToken': null,
    'brandID': null,
    'brandName': null,
    'apiKey': null,
    'authDomain': null,
    'databaseURL': null,
    'storageBucket': null,
    'open': true,
    'platform': 'landbot',
    'tagline': 'Get more leads using chatbots 🤖',
    'logo': 'http://bueninvento.es/umiexp2.png',
    // 'btn01Title': 'Features',
    // 'btn01Message': 'features',
    // 'btn02Title': 'Early Access',
    // 'btn02Message': 'signup',
    'background-video': false,
    'videoname': 'video',
    'onInit': 'landbot',
    'onEmail': 'discorbot',
    'welcome': {},
    // custom content MUST be JSON parseable
    'custom': {
      "containertype": "fullscreen",
      "white": "white",
      "black": "black",
      "pink": "#F61152",
      "pink-0": "#da548b",
      "pink-1": "#ce2d6f",
      "orange": "#ffad59",
      "orange-light": "#ffe199",
      "violet": "#4a50a8",
      "violet-0": "#6369be",
      "violet-light": "#b2b5de",
      "externalfonturl": '',
      "embfonts": true,
      "blue-light": "#7db9e8",
      "light-gray": "#f1f1f1",
      // Relative colors
      "accent": "@pink",
      "accent-0": "lighten(@accent,3%)",
      "accent-1": "darken(saturate(@accent,20%),11%)",
      "light": "@white",
      "contrast": "white",
      "contrast-0": "lighten(@contrast,10%)",
      "contrast-light": "lighten(@contrast,30%)",
      // Fonts
      "embfonts": true,
      "dark": "@black",
      "font": "\"Gotham Rounded\"",
      "font-type": "sans-serif",
      "font-size": "14px",
      "font-url": "\"https://guidango.com/fonts/gotham\"",
      "font-regular-slash": "\"gotham-rounded-book\"",
      "font-medium-slash": "\"gotham-rounded-medium\"",
      "font-bold-slash": "\"gotham-rounded-bold\"",
      "id-regular": "\"#gotham_roundedbook\"",
      "id-medium": "\"#GothamRoundedMedium\"",
      "id-bold": "\"#gotham_roundedbold\"",
      "eot": true,
      "woff": true,
      "ttf": true,
      "svg": true,
      // Background
      "background-type": "\"gradient\"", // gradient | image | color | video
      "gradient-from": "@orange",
      "gradient-to": "@orange-light",
      "background-image-url": "\"https://storage.googleapis.com/media.yexir.com/channels_back/31.png\"",
      "background-color": "white",
      "video-texture": "\"gradient\"", // gradient | image | color
      "box-footer": "@accent",
      "header-background":"transparent",

      // "url": window.LandbotConfig.url ? window.LandbotConfig.url : document.location.origin,
      "staticUrl": window.LandbotConfig.staticUrl ? window.LandbotConfig.staticUrl : "\"https://storage.googleapis.com/static-yexir-helloumi/\"",
      //
      // Avatar
      "logo": window.LandbotConfig.logo ? "\""+window.LandbotConfig.logo+"\"" : "\"http://bueninvento.es/umiexp2.png\"",
    }
  };

  this.config = this.extend( config );
  this.config.custom.font = this.config.custom.font.replace(/\+/g,' ');
}

/**
 * Extends config
 * @param  {Object} def Default config
 * @param  {Object} options Given config
 * @return {Object} Resulting config
 */
Landbot.prototype.extend = function extend( options ) {
  var defaults = this.DEFAULTS;
  for (var key in options) {
    if (key === 'custom') {
      for (var prop in options.custom) {
        if (options.custom.hasOwnProperty(prop)) {
          defaults.custom[prop] = options.custom[prop];
        }
      }
    } else if (options.hasOwnProperty(key)) {
      defaults[key] = options[key];
    }
  }
  return defaults;
};

Landbot.prototype.createLandbot = function createLandbot() {
  this.showOverlay();
  this.generateDocument();
};

Landbot.prototype.showOverlay = function showOverlay() {
  var body = document.getElementsByTagName('BODY')[0];
  var bg, config = this.config;
  if (config.custom['background-type'] === '\"gradient\"')
    bg = 'linear-gradient(to bottom, '+ config.custom['gradient-from'] +' 0%, '+ config.custom['gradient-to'] +' 100%)';
  else if (config.custom['background-type'] === '\"image\"')
    bg = 'url('+ config.custom['background-image-url'] +')';
  else if (config.custom['background-type'] === '\"color\"')
    bg = config.custom['background-color'];
  else if (config.custom['background-type'] === '\"video\"')
    if (config.custom['video-texture'] === '\"gradient\"')
      bg = 'linear-gradient(to bottom, '+ config.custom['gradient-from'] +' 0%, '+ config.custom['gradient-to'] +' 100%)';
    else if (config.custom['video-texture'] === '\"image\"')
      bg = 'url('+ config.custom['background-image-url'] +')';
    else if (config.custom['video-texture'] === '\"color\"')
      bg = config.custom['background-color'];


  this.generateTag('div', body, {
    id: 'loading-overlay',
  }, {
    style: 'background: '+bg+'; z-index: 9999; width: 100%; height: 100%; position: absolute; left: 0; top: 0;'
  });
};

Landbot.prototype.hideOverlay = function hideOver() {
  var overlay = document.getElementById('loading-overlay');
  overlay.parentNode.removeChild(overlay);
};

Landbot.prototype.generateDocument = function generateDocument() {

  ///////////////// HEAD /////////////////

  var head = document.getElementsByTagName('head')[0];

  // Title
  if (this.config.title)
    document.title = this.config.title;
  // Description
  this.generateTag('meta', head, {
    name: 'description',
    content: this.config.description
  });
  // Viewport
  this.generateTag('meta', head, {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
  });
  // http-equiv
  this.generateTag('meta', head, {
    'http-equiv': 'Content-Type',
    content: 'text/html; charset=UTF-8'
  });
  // og:title
  this.generateTag('meta', head, {
    property: 'og:title',
    content: this.config.title
  });
  // og:description
  this.generateTag('meta', head, {
    property: 'og:type',
    content: 'website'
  });
  // og:image
  this.generateTag('meta', head, {
    property: 'og:image',
    content: this.config.staticUrl + 'landbot/files/ogimage.jpg'
  });
  // og:url
  this.generateTag('meta', head, {
    property: 'og:url',
    content: this.config.url
  });
  // og:description
  this.generateTag('meta', head, {
    property: 'og:description',
    content: this.config.description
  });
  // twitter:card
  this.generateTag('meta', head, {
    name: 'twitter:card',
    content: 'summary'
  });
  // twitter:url
  this.generateTag('meta', head, {
    name: 'twitter:url',
    content: this.config.url
  });
  // twitter:title
  this.generateTag('meta', head, {
    name: 'twitter:title',
    content: this.config.title
  });
  // twitter:description
  this.generateTag('meta', head, {
    name: 'twitter:description',
    content: this.config.description
  });
  // twitter:image
  this.generateTag('meta', head, {
    name: 'twitter:image',
    content: this.config.staticUrl + 'landbot/files/ogimage.jpg'
  });

  // favicon
  this.generateTag('link', head, {
    rel: 'icon',
    href: this.config.staticUrl + 'landbot/files/favicon.ico',
    type: 'image/x-icon'
  });

  // LESS

  window.less = {
    env: "development", // Values: development | production
    globalVars: this.config.custom
  };
  // this.generateTag('script', head, {
  //   src: 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js'
  // }, {
  //   onload: 'window.less.pageLoadFinished.then(function() { HULandbot.hideOverlay(); });'
  // });
  this.generateTag('script', head, {
    src: this.config.staticUrl + 'landbot/js/less.min.js'
  }, {
    onload: 'window.less.pageLoadFinished.then(function() { HULandbot.hideOverlay(); });'
  });
  // master.less
  this.generateTag('link', head, {
    rel: 'stylesheet/less',
    href: this.config.staticUrl + 'landbot/css/master.less',
    type: 'text/css'
  });
  // master.css
  // this.generateTag('link', head, {
  //   rel: 'stylesheet',
  //   href: this.config.staticUrl + 'landbot/css/master.css'
  // });

  // JQuery
  this.generateTag('script', head, {
    src: 'https://code.jquery.com/jquery-2.2.4.min.js',
    integrity: 'sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=',
    crossOrigin: 'anonymous'
  }, {
    onload: "HULandbot.generateJQueryUI()"
  });

  this.generateJQueryUI = function generateJQueryUI() {
    // JQuery UI
    this.generateTag('script', head, {
      src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js',
      integrity: 'sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=',
      crossOrigin: 'anonymous'
    });
  }

  // selectize.js
  this.generateTag('meta', head, {
    type: 'text/javascript',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/js/standalone/selectize.min.js',
    charset: 'UTF-8'
  });
  // selectize.css
  this.generateTag('link', head, {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/css/selectize.min.css',
    type: 'text/css'
  });

  // master.js
  this.generateTag('script', head, {
    type: 'text/javascript',
    src: this.config.staticUrl + 'landbot/js/master.js',
    charset: 'UTF-8'
  }, {
    onload: 'HULandbot.generateLivechatJS()'
  });


  ///////////////// SNIPPET /////////////////

  // Livechat css
  this.generateTag('link', head, {
    rel: 'stylesheet',
    href: this.config.staticUrl + 'webchat/css/main-' + this.config.livechatVersion + '.css'
  });

  window.chatbotConfigs = {
    "landbot": {
      "staticUrl": this.config.staticUrl,
      "serverUrl": this.config.serverUrl,
      "channelToken": this.config.channelToken,
      "brandID": this.config.brandID,
      "version": this.config.livechatVersion,
      "apiKey": this.config.apiKey,
      "authDomain": this.config.authDomain,
      "databaseURL": this.config.databaseURL,
      "storageBucket": this.config.storageBucket,
      "open": this.config.open,
      "platform": this.config.platform,
      "welcome": this.config.welcome
    },
    // "discorbot": {
    //   "staticUrl": "https://storage.googleapis.com/static-demo-helloumi/",
    //   "channelToken": "H-56-UPLZXWDID83F9F7Q",
    //   "brandID": "230",
    //   "version": "1.0.0.13",
    //   "apiKey": "AIzaSyDsVTr4OpOV45cfIXxcV1UvAEQ6JjnMbZU",
    //   "authDomain": "daisho-yexir.firebaseapp.com",
    //   "databaseURL": "https://daisho-yexir.firebaseio.com",
    //   "storageBucket": "daisho-yexir.appspot.com",
    //   "open": true,
    //   "platform": "landbot",
    //   "initialMessage": "No email",
    // }
  };

  this.generateLivechatJS = function generateLivechatJS() {
    // Livechat js
    this.generateTag('script', head, {
      src: this.config.staticUrl + 'webchat/js/main-' + this.config.livechatVersion + '.js',
      charset: 'UTF-8'
    }, {
      onload: 'renderHelloumiLiveChat()'
    });
  }


  ///////////////// ANALYTICS /////////////////

  /*
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
  analytics.load("sSnmeJKKUKWb3nCNyHTINdMkD7niGFwk");
  analytics.page();
  }}();

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-99032280-1', 'auto');
  ga('send', 'pageview');
  */


  ///////////////// BODY /////////////////

  var body = document.getElementsByTagName('BODY')[0];

  // #hu-experiment-header
  this.generateTag('div', body, {
    id: 'hu-experiment-header',
    innerHTML: '\
    <div class="hu-header-content">\
      <img class="brand-logo" src="' + this.config.logo + '" alt="">\
      <h1 class="brand-name">' + this.config.brandName + '</h1>\
      <span class="more-leads">' + this.config.tagline + '</span>\
      <a href="http://landbot.io/?utm_source=referral&utm_medium=customers&utm_campaign=' + this.config.brandName + '" target="_blank" class="btt" id="rightheader">\
      <span class="btt-content">Powered by <b class="hu-bold">Landbot.io</b></span>\
      <span class="btt-on-hover">Get your Landbot 🤖</span>\
      </a>\
    </div>'
  });
  // this.generateTag('div', body, {
  //   id: 'hu-experiment-header',
  //   innerHTML: '\
  //   <div class="hu-left-header">\
  //     <img src="' + this.config.logo + '" alt="">\
  //     <span class="more-leads">' + this.config.tagline + '</span>\
  //   </div>\
  //   <div class="hu-right-header" id="rightheader">\
  //   <a href="#" class="btt" onclick="event.preventDefault(); fakeMessage("' + this.config.btn01Message + '", true);">\
  //     ' + this.config.btn01Title + '\
  //   </a>\
  //   <a href="#" onclick="event.preventDefault(); fakeMessage("' + this.config.btn02Message + '", true);">\
  //     ' + this.config.btn02Title + '\
  //   </a>\
  //     <!-- <a href="http://landbot.io/?utm_source=referral&utm_medium=customers&utm_campaign=improdrone" target="_blank" class="btt">\
  //       Powered by Landbot.io\
  //     </a> -->\
  //   </div>'
  // });

  // Loader
  this.generateTag('div', body, {
    innerHTML: '\
    <div class="sk-folding-cube">\
      <div class="sk-cube1 sk-cube"></div>\
      <div class="sk-cube2 sk-cube"></div>\
      <div class="sk-cube4 sk-cube"></div>\
      <div class="sk-cube3 sk-cube"></div>\
    </div>\
    <div class="loader-referral">\
      <span>Powered by</span>\
      <a href="/">Landbot<i>.io</i> 🤖</a>\
    </div>'
  });

  // // Botchat css
  // this.generateTag('link', body, {
  //   rel: 'stylesheet',
  //   href: this.config.staticUrl + 'landbot/css/botchat.css',
  //   type: 'text/css'
  // });
  // Botchat less
  this.generateTag('link', body, {
    rel: 'stylesheet/less',
    href: this.config.staticUrl + 'landbot/css/botchat.less',
    type: 'text/css'
  });


  ///////////////// VIDEO /////////////////
  if (this.config['background-video'] === true)
    this.generateTag('div', body, {
      innerHTML: '\
      <div class="bg-texture"></div>\
      <video playsinline autoplay muted loop poster="' + this.config.staticUrl + 'landbot/video/' + this.config.videoname + '.jpg" id="bgvid">\
        <source src="' + this.config.staticUrl + 'landbot/video/' + this.config.videoname + '.webm" type="video/webm">\
        <source src="' + this.config.staticUrl + 'landbot/video/' + this.config.videoname + '.mp4" type="video/mp4">\
      </video>\
      <!--[if lt IE 9]>\
      <script>document.createElement("video");</script>\
      <![endif]-->'
    });

};

Landbot.prototype.generateTag = function generateTag(tag, appendTo, data, attrs) {
  var t = document.createElement( tag );
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      t.setAttribute(attr, attrs[attr]);
    }
  }
  for (var key in data) {
    if (data.hasOwnProperty(key) && t[key] !== undefined) {
      t[key] = data[key];
    }
  }
  appendTo.appendChild( t );
};
