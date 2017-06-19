/**
 * @license
 * HULivechat.js
 * http://helloumi.com/
 *
 * Copyright 2016 HELLOUMI S.L. LLC ("HELLOUMI S.L")
 * Released under the GPL-3.0 license
 */

function UmichatUtil(){}
// IDEA: Mejor cambiar el nombre de clase ya que Util puede ser comun
/**
 * Create global namespace. This namespace is available how goblal variable on window object.
 * If parents of base namespace not exists, it's created.
 * @param  {String} nameSpaceString full namespace
 */
UmichatUtil.prototype.createNameSpace = function createNameSpace(nameSpaceString) {
	var names = nameSpaceString.split("."),
    	parent = window,
    	imax = names.length,
    	i;
	//if any nameSpace level doesn't exist, create it
	for (i = 0; i < imax; i++) {
		if (!parent[names[i]]) {
			parent[names[i]] = {};
		}
		parent = parent[names[i]];
	}
};

/**
 * Extend similar to jQuery
 * @param  {object} obj1 defaults values
 * @param  {object} obj2 new options
 * @return {object}      result
 */
UmichatUtil.prototype.extend = function extend (obj1, obj2) {
  var result = obj1, val;
  for (val in obj2) {
    if (obj2.hasOwnProperty(val)) {
      result[val] = obj2[val];
    }
  }
  return result;
}

UmichatUtil.prototype.singleton = function singleton(Library) {
	var instance;
	function createInstance(){
		var object = new Library();
		return object;
	}
	return {getInstance: function(){
		if(!instance){
			instance = createInstance();
		}
		return instance;
	}};
}

/**
* Function to replace string to anchor tags
* @param {Object} elem - HTML object to be processed
* @return {Object} HTML object with replacement done
*/
UmichatUtil.prototype.linkify = function linkify(elem) {
	  if ($(elem).find('p')[0]) {
	    $(elem).find('p').html(function() {
	      return $(this)[0].innerHTML.linkify();
	    });
	  }
	  return elem;
};

UmichatUtil.prototype.playNotification = function playNotification(audio) {
	if (!document.hasFocus()) {
    audio.play();
  }
};

UmichatUtil.prototype.isTouchDevice = function isTouchDevice() {
	return 'ontouchstart' in window || navigator.maxTouchPoints;
};

UmichatUtil.prototype.addClass = function addClass( elem, value) {
  if (elem.classList) {
    elem.classList.add(value);
  } else {
    elem.className = elem.className + ' ' + value;
  }
};

UmichatUtil.prototype.removeClass = function removeClass( elem, value ) {
  if (elem.classList) {
    elem.classList.remove(value);
  } else {
    var sourceClasses = elem.className;
    if (typeof(sourceClasses) == "string") {
      var sourceClassList = sourceClasses.split(/\s+/);
      var targetClassList = [];
      for (var i = 0; i < sourceClassList.length; i++) {
        if (sourceClassList[i] != value) {
          targetClassList.push(sourceClassList[i]);
        }
      }
      elem.className = targetClassList.join(' ');
    }
  }
};

UmichatUtil.prototype.getCustomerInfo = function getCustomerInfo() {
	var customerInfo = {};
	var navigatorInfo = {};
	var screenInfo = {};
	var locationInfo = {};
	var osInfo = {};
	if (typeof(navigator.languages) !== 'undefined') navigatorInfo['languages'] = navigator.languages;
	if (typeof(navigator.language) !== 'undefined') navigatorInfo['language'] = navigator.language;
	if (typeof(navigator.plugins) !== 'undefined') navigatorInfo['plugins'] = navigator.plugins;

	if (typeof(screen.colorDepth) !== 'undefined') screenInfo['colorDepth'] = screen.colorDepth;
	if (typeof(screen.height) !== 'undefined' && typeof(screen.width) !== 'undefined') screenInfo['size'] = {'height':screen.height,'width':screen.width}
	if (typeof(screen.orientation) !== 'undefined') screenInfo['angle'] = screen.orientation.angle;
	screenInfo['touchdevice'] = this.isTouchDevice();

	locationInfo['timezoneoffset'] = new Date().getTimezoneOffset() / 60;
	customerInfo['navigator'] = navigatorInfo;
	customerInfo['screen'] = screenInfo;
	customerInfo['location'] = locationInfo;
	customerInfo['os'] = osInfo;
	return customerInfo;
};

UmichatUtil.prototype.isMobileDevice = function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


function UmichatDateUtils(){}

UmichatDateUtils.prototype.yyyymmdd = function yyyymmdd(date) {
	var d = date.getDate();
	if(d < 10) d = "0" + d;
	var m = date.getMonth()+1;
	if(m < 10) m = "0" + m;
	return date.getFullYear().toString()+m.toString()+d.toString();
};

UmichatDateUtils.prototype.hhmm = function hhmm(date) {
	var h = date.getHours();
	var m = date.getMinutes();
	if(h < 10 ) h = "0" + h;
	if(m < 10 ) m = "0" + m;
	return h+":"+m;
};

UmichatDateUtils.prototype.getStartDate = function getStartDate(date) {
	return date.setHours(0,0,0,0) / 1000;
};

/**
 * Converts timestamp to a short formatted date
 * @param  {Number} ref - Timestamp
 * @return {String} Today, Yesterday or 'MMM Do'
 */
UmichatDateUtils.prototype.getShortDate = function getShortDate(ref) {
	var REFERENCE = new Date(ref);
	var TODAY = new Date(Date.now()).setHours(0,0,0,0);
	var YESTERDAY = new Date(TODAY - 86400000).setHours(0,0,0,0);
	var months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

	if (REFERENCE < YESTERDAY) {
		return '' + months[REFERENCE.getMonth()] + ' ' + REFERENCE.getDate();
	} else if (REFERENCE < TODAY) {
		return 'Yesterday';
	} else {
		return 'Today';
	}
};


(function(){
  var tempUtil = new UmichatUtil();
  var testform = new FormData();
  tempUtil.createNameSpace('helloumi.utils.core');
  tempUtil.createNameSpace('helloumi.utils.date');
  tempUtil.createNameSpace('helloumi.utils.environment');
  helloumi.utils.core = tempUtil;
  helloumi.utils.date = new UmichatDateUtils();
  helloumi.utils.environment = {};
  helloumi.utils.environment['ie10'] = (navigator.userAgent.match(/MSIE 10/i)) ? true: false;
  helloumi.utils.environment['ie11'] = (navigator.userAgent.match(/Trident\/7/i))? true: false;
  helloumi.utils.environment['edge'] = (navigator.userAgent.match(/Edge/i)) !== null ? true: false;
  helloumi.utils.environment['formDataGet'] = ( typeof(testform.get) != 'undefined' );
  helloumi.utils.environment['isMobile'] = helloumi.utils.core.isMobileDevice();
})()

// TODO: error callback parameter
function UmichatRequirements(success, error){
  this.requirements = [
    {
      name: 'firebase',
      getVersion: 'SDK_VERSION',
      version: '3.9.0',
      url: 'https://www.gstatic.com/firebasejs/3.9.0/firebase.js',
      getInstance: function(){
        return window.firebase;
      },
    },
    {
      name: 'jsrender',
      getVersion: 'jsrender',
      version: 'v0.9.83',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/jsrender/0.9.83/jsrender.min.js',
      getInstance: function(){
        if (typeof(window.jsrender) === 'undefined' ) {
          if(typeof($) !== 'undefined'  && $.fn.render){
            return $.fn.render;
          } else {
            return undefined;
          }
        } else {
          return window.jsrender;
        }
      },
    }
  ];
  this.success = success;
  this.error = error;
  this.index = 0;
  this.loadNext();
}

UmichatRequirements.prototype.requirementLoaded = function requirementLoaded() {
  this.index += 1;
  if (this.index >= this.requirements.length) {
    console.log("Requirements loaded");
    if (this.success) this.success();
  } else {
    this.loadNext();
  }
}

UmichatRequirements.prototype.loadNext = function loadNext() {
  var self = this;
  var r = self.requirements[self.index];
  var ref = r.getInstance();
  // Check if already loaded
  if ( typeof(ref) !== 'undefined' ) {
    // DEBUG // console.log(r.name + " Already loaded");
    // Checks version
    var version = ref[r.getVersion];
    if (typeof version == "undefined" || version != r.version) {
      console.log("WARNING: "+ r.name + " version loaded ("
        + version + ") differs from requirement version (" + r.version + ")");
    }
    self.requirementLoaded();
  } else {
    // DEBUG // console.log(r.name + " Not loaded");
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = r.url;
    script.type = 'text/javascript';
    script.onload = self.requirementLoaded.bind(self)
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}

function TemplateUtils(){
		if (typeof(window.jsrender) === 'undefined' ) {
			if(typeof($) !== 'undefined'  && $.fn.render){
				this.renderEngine = {};
				this.renderEngine['templates'] = $.templates;
			}
			else if (typeof(jQuery) !== 'undefined'  && jQuery.fn.render){
				this.renderEngine = {};
				this.renderEngine['templates'] = jQuery.templates;
			}
			else{
				console.log("Error: JSRENDER isn't imported. Please add JSRender CDN to head section");
				return;
			}
		}
		else{
			this.renderEngine = window.jsrender;
		}

		helloumi.utils.core.createNameSpace('helloumi.utils.templates');
		helloumi.utils.templates = this;
}

/**
 * Replaces node with node content (Removes parent)
 * @param  {Object} element - node to be replaced by its content
 */
TemplateUtils.prototype.unwrapTemplate = function unwrapTemplate( element ) {
	var fragment = document.createDocumentFragment();
	while( element.firstChild ) {
	  fragment.appendChild( element.firstChild );
	}
	element.parentNode.replaceChild( fragment, element );
}

TemplateUtils.prototype.getTemplateRendered = function getTemplateRendered( containerTemplates, selector, context ) {
	var tmplContainer = document.createElement( 'div' );
  // tempcontainer.innerHTML =  helloumi.templates.webchat['widget.html']; // TODO
  tmplContainer.innerHTML = containerTemplates;

  var stringtemplate = tmplContainer.querySelector( selector ).innerHTML;
  var $templ = this.renderEngine.templates( stringtemplate );
  return $templ.render( context );
};

// (function(){
// 	var templates = new TemplateUtils();
// })()

// =============================================== //
// CAPITALIZE FIRST LETTER
// =============================================== //

// Extends String to setup capitalizeFirstLetter function
if(!String.capitalizeFirstLetter) {
  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
}

// =============================================== //
// LINKIFY
// =============================================== //

// Extends String to setup linkify function
if(!String.linkify) {
  String.prototype.linkify = function() {

    // http://, https://, ftp://
    var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;

    // www. sans http:// or https://
    var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

    // Email addresses
    var emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;

    return this
      .replace(urlPattern, '<a class="hu-link" href="$&" target="_blank">$&</a>')
      .replace(pseudoUrlPattern, '$1<a class="hu-link" href="http://$2" target="_blank">$2</a>')
      .replace(emailAddressPattern, '<a class="hu-link" href="mailto:$&" target="_blank">$&</a>');
  };
}

//HEAD
window["helloumi-umichat-templates"] = {};

window["helloumi-umichat-templates"]["widget.html"] = "<script class=\"js-webchat-init-content\" type=\"text/x-jsrender\"><div class=\"hu-js-closed\" id=\"hu-container-messenger\"><div class=\"hu-chatlist-header hu-js-hide\" style=\"background-color: {{:config.accentColor}};\"><div class=\"hu-header-state hu-header-chat\"><div class=\"hu-header-title hu-header-btn\">{{if config.logoShape}}<div class=\"hu-header-title-avatar hu-avatar {{:config.logoShape}}\" style=\"background-image: url('{{:config.logo}}');\"> </div>{{else}}<div class=\"hu-header-title-avatar hu-avatar\"><img src=\"{{:config.logo}}\"/></div>{{/if}}<p><b>{{:config.brandName}}</b></p></div><div class=\"hu-header-cross hu-header-btn\"><img src=\"{{:config.staticUrl}}webchat/img/cross.png\" alt=\"\"/></div></div></div><div class=\"hu-messenger-header js-initial\" style=\"background-color: {{:config.accentColor}};\"><div class=\"hu-header-state hu-header-chat\"><div class=\"hu-header-title hu-header-btn\" style=\"color: {{:config.primaryTextColor}};\">{{if config.logoShape}}<div class=\"hu-header-title-avatar hu-avatar {{:config.logoShape}}\" style=\"background-image:url('{{:config.logo}}');\"></div>{{else}}<div class=\"hu-header-title-avatar hu-avatar\"><img src=\"{{:config.logo}}\"/></div>{{/if}}<p style=\"color: {{:config.primaryTextColor}};\"><b>{{:config.brandName}}</b><span class=\"hu-brand-status\"></span></p></div><div class=\"hu-header-cross hu-header-btn\"><img src=\"{{:config.staticUrl}}webchat/img/cross.png\" alt=\"\"/></div></div><div class=\"hu-header-state hu-header-initial\"><div class=\"hu-header-title hu-header-btn\" style=\"color: {{:config.primaryTextColor}};\">{{if config.logoShape}}<div class=\"hu-header-title-avatar hu-avatar {{:config.logoShape}}\" style=\"background-image:url('{{:config.logo}}');\"></div>{{else}}<div class=\"hu-header-title-avatar hu-avatar\"><img src=\"{{:config.logo}}\"/></div>{{/if}}<p class=\"hu-header-title-brand\" style=\"color: {{:config.primaryTextColor}};\"><b>{{:config.brandName}} </b><span class=\"hu-brand-status\"></span></p><p class=\"hu-header-title-description\" style=\"color: {{:config.primaryTextColor}};\">{{:config.brandDescription}}</p></div><div class=\"hu-header-cross hu-header-btn\"><img src=\"{{:config.staticUrl}}webchat/img/cross.png\" alt=\"\"/></div></div></div><div class=\"hu-chatlist-body hu-js-hide\"><div class=\"hu-chatlist-container\"></div></div><div class=\"hu-messenger-body\" style=\"background: {{:config.background}} center / cover;\"><div class=\"hu-loader\" id=\"hu-webchat-loader\"><div class=\"hu-loader-1\" style=\"background-color: {{:config.accentColor}};\"></div><div class=\"hu-loader-2\" style=\"background-color: {{:config.accentColor}};\"></div><div class=\"hu-loader-3\" style=\"background-color: {{:config.accentColor}};\"></div></div><div class=\"hu-messenger-body-state\"><div class=\"hu-messenger-messages\" id=\"hu-webchat-messages\"></div><div class=\"hu-messenger-messages\" id=\"hu-webchat-ghosts\"></div></div><div class=\"hu-powered {{:config.customized}}\" style=\"color: {{:config.whiteText}};\">Powered by<a href=\"https://www.helloumi.com/?utm_source={{:config.brandID}}&amp;utm_medium=web-widget&amp;utm_campaign=widget-referral\" target=\"_blank\"><img class=\"brand\" src=\"{{:config.staticUrl}}webchat/img/{{:config.poweredImage}}\" alt=\"\"/><img class=\"robot\" src=\"{{:config.staticUrl}}webchat/img/{{:config.robotImage}}\" alt=\"\"/></a></div></div><div class=\"hu-chatlist-footer hu-js-hide\"><div class=\"hu-btn hu-btn-block hu-btn-pink hu-btn-lg\"><img class=\"hu-icon-left\" src=\"{{:config.staticUrl}}webchat/img/bubble.png\"/><span>{{:config.newconversationtext}}</span></div></div><div class=\"hu-messenger-footer\"><div class=\"hu-footer-state js-empty\"><div class=\"hu-composer\"><div class=\"hu-composer-text\"><textarea id=\"hu-composer-box\" placeholder=\"Type here ...\" rows=\"1\" form=\"id_hu_message_form\" name=\"message\"></textarea><textarea id=\"hu-composer-aux-box\" rows=\"1\"></textarea></div><div class=\"hu-composer-files hu-js-hide\"></div><div class=\"hu-composer-buttons\"><div class=\"hu-composer-emoji-button hu-composer-btn\"><img src=\"{{:config.staticUrl}}webchat/img/emoticons.png\" alt=\"\"/></div><div class=\"hu-composer-send-button hu-composer-btn hu-js-hide\"><svg id=\"hu-send\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" x=\"3650\" y=\"3688\"><path fill=\"{{:config.accentColor}}\" d=\"M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z\"></path></svg></div><div class=\"hu-composer-file-button hu-composer-btn\"><img src=\"{{:config.staticUrl}}webchat/img/file.png\" alt=\"\"/></div></div><form class=\"hu-js-hide\" id=\"id_hu_message_form\" enctype=\"multipart/form-data\"><input id=\"id_hu_file_flags\" name=\"file_flags\" type=\"hidden\"/><input id=\"id_hu_images\" name=\"images\" accept=\"image/*\" multiple=\"multiple\" type=\"file\"/></form></div></div></div></div><div class=\"hu-js-closed\" id=\"hu-container-proactive\"><div class=\"hu-chatlist-body\"><div class=\"hu-chatlist-container\"></div></div><div class=\"hu-proactive-footer\"><div class=\"hu-footer-state js-empty\"><div class=\"hu-composer\"><div class=\"hu-composer-text\"><textarea placeholder=\"Type a reply...\" rows=\"1\" name=\"message\"></textarea></div><div class=\"hu-composer-files hu-js-hide\"></div><div class=\"hu-composer-buttons\"><div class=\"hu-composer-emoji-button hu-composer-btn\"><img src=\"{{:config.staticUrl}}webchat/img/emoticons.png\" alt=\"\"/></div><div class=\"hu-composer-send-button hu-composer-btn hu-js-hide\"><img src=\"{{:config.staticUrl}}webchat/img/send.png\" alt=\"\"/></div><div class=\"hu-composer-file-button hu-composer-btn\"><img src=\"{{:config.staticUrl}}webchat/img/file.png\" alt=\"\"/></div></div></div></div></div></div><div id=\"hu-container-launcher\"><div class=\"hu-js-closed\" id=\"hu-launcher-message\"></div><div class=\"hu-js-closed\" id=\"hu-launcher-state\"><div class=\"hu-launcher-icon hu-launcher-open-icon\" id=\"hu-widget-icon\" style=\"background-color: {{:config.accentColor}}; border-color: {{:config.accentColor}};\"><div class=\"hu-launcher-notification hu-js-hide\"><span class=\"hu-unread-number\"></span></div><img src=\"{{:config.staticUrl}}webchat/img/bubble.png\" alt=\"\"/></div><div class=\"hu-launcher-icon hu-launcher-alt hu-js-hide\" style=\"background-color: {{:config.accentColor}}; border-color: {{:config.accentColor}};\"><div class=\"hu-launcher-notification hu-js-hide\"><span class=\"hu-unread-number\"></span></div><img src=\"{{:config.staticUrl}}webchat/img/bubble.png\" alt=\"\"/><span class=\"hu-launcher-text\">{{:config.customlaunchertext}}</span></div><div class=\"hu-launcher-icon hu-launcher-avatar hu-js-hide\" style=\"background-color: {{:config.accentColor}}; border-color: {{:config.accentColor}};\"><div class=\"hu-launcher-notification hu-js-hide\"><span class=\"hu-unread-number\"></span></div><div class=\"hu-avatar\" style=\"background-image:url('https://media.helloumi.com/avatars/246-1485340477.001625.jpg');\"></div></div></div></div></script>";

window["helloumi-umichat-templates"]["templates.html"] = "<script class=\"js-webchat-message\" type=\"text/x-jsrender\"><div class=\"hu-messenger-message {{:authorClass}}\" data-day=\"{{:day}}\" data-timestamp=\"{{:timestamp}}\" data-key=\"{{:key}}\"><div class=\"hu-message-container\"><div class=\"hu-message-content-wrapper\"><div class=\"hu-message-avatar\"><div class=\"hu-avatar {{:avatarClass}}\" style=\"background-image:url('{{:avatar}}');\" title=\"{{:avatarTitle}}\"></div></div><div class=\"hu-message-content-group\"></div></div><div class=\"hu-message-info\"><div class=\"hu-message-info-date\"><span style=\"color: {{:config.accentColor}};\">{{:time}}</span></div><div class=\"hu-message-info-checks {{:readClass}}\" style=\"background-image:url({{:config.staticUrl}}webchat/img/blue-check.png);\"></div></div></div></div></script><script class=\"js-webchat-message-text\" type=\"text/x-jsrender\"><div class=\"hu-message-content hu-message-content-text\" data-timestamp=\"{{:timestamp}}\" data-key=\"{{:key}}\" style=\"background-color: {{:accentColor}}; color: {{:primaryTextColor}};\"><p>{{:message}}</p></div></script><script class=\"js-webchat-message-image\" type=\"text/x-jsrender\"><div class=\"hu-message-content hu-message-content-image\" data-timestamp=\"{{:timestamp}}\" data-key=\"{{:key}}\" style=\"background-color: {{:accentColor}}; color: {{:primaryTextColor}};\"><a href=\"{{:url}}\" target=\"_blank\"><img src=\"{{:url}}\" alt=\"\" WIDTH=\"300\"/></a></div></script><script class=\"js-webchat-message-video\" type=\"text/x-jsrender\"><div class=\"hu-message-content hu-message-content-video\" data-timestamp=\"{{:timestamp}}\" data-key=\"{{:key}}\" style=\"background-color: {{:accentColor}}; color: {{:primaryTextColor}};\"><video src=\"{{:url}}\" controls=\"controls\"></video></div></script><script class=\"js-webchat-message-document\" type=\"text/x-jsrender\"><div class=\"hu-message-content hu-message-content-document\" data-timestamp=\"{{:timestamp}}\" data-key=\"{{:key}}\" style=\"background-color: {{:accentColor}}; color: {{:primaryTextColor}};\"><a class=\"wz-file\" href=\"{{:url}}\" download=\"download\"><span class=\"wz-filename\">{{:file_name}}</span><span class=\"wz-bites\">{{:size}}</span></a></div></script><script class=\"js-webchat-message-location\" type=\"text/x-jsrender\"><div class=\"hu-message-content hu-message-content-location\" data-timestamp=\"{{:timestamp}}\" data-key=\"{{:key}}\" style=\"background-color: {{:accentColor}}; color: {{:primaryTextColor}};\"><p><a href=\"http://maps.google.com/?q={{:latitude}},{{:longitude}}\" target=\"_blank\"><img class=\"js-chat-image\" src=\"https://maps.googleapis.com/maps/api/staticmap?center={{:latitude}},{{:longitude}}&amp;zoom=16&amp;size=300x300&amp;markers=color:red|{{:latitude}},{{:longitude}}\" alt=\"\" WIDTH=\"300\"/></a></p><p>{{:address}}</p></div></script><script class=\"js-webchat-brand-message-buttons\" type=\"text/x-jsrender\"><div class=\"hu-message-content\" data-timestamp=\"{{:timestamp}}\" data-key=\"{{:key}}\" style=\"background-color: {{:accentColor}}; color: {{:primaryTextColor}};\"><p>{{:title}}</p></div><div class=\"hu-message-content hu-message-content-buttons\" data-timestamp=\"{{:timestamp}}\" data-key=\"{{:key}}\" style=\"background-color: {{:accentColor}}; ;\"><div class=\"hu-btn-group-vertical\">{{for buttons}}<div class=\"hu-btn hu-btn-sm hu-btn-block hu-btn-pink\"><span data-click=\"{{:payload}}\">{{>caption}}</span></div>{{/for}}</div></div></script><script class=\"js-webchat-message-typing\" type=\"text/x-jsrender\"><div class=\"hu-message-content hu-message-content-text hu-message-content-typing\" data-timestamp=\"{{:timestamp}}\" data-key=\"{{:key}}\"><div class=\"dotwrapper\"><div class=\"dotcontainer\"><div class=\"dot dotone\" style=\"background-color: {{:config.accentColor}}; opacity: 0.6;\"></div><div class=\"dot dottwo\" style=\"background-color: {{:config.accentColor}}; opacity: 0.8;\"></div><div class=\"dot dotthree\" style=\"background-color: {{:config.accentColor}}; opacity: 1;\"></div></div></div></div></script><script class=\"js-webchat-date\" type=\"text/x-jsrender\"><div class=\"hu-messenger-date hu-js-date hu-text-center {{:dayClass}} {{:customized}}\" data-timestamp=\"{{:timestamp}}\"><p>{{:time}}</p></div></script><script class=\"js-webchat-chatlist-item\" type=\"text/x-jsrender\"><div class=\"hu-chatlist-item\"><div class=\"hu-chatlist-avatar\"><div class=\"hu-avatar\" style=\"background-image:url('{{:avatar}}');\"></div></div><div class=\"hu-chatlist-info\"><div class=\"hu-chatlist-info-name\"><span>{{:samurai}}</span></div><div class=\"hu-chatlist-info-text\"><span>{{:message}}</span></div></div><div class=\"hu-chatlist-info-date\"><span>{{:time}}</span></div></div></script><script class=\"js-webchat-image-preview\" type=\"text/x-jsrender\"><div class=\"hu-composer-file\"><div class=\"hu-composer-thumbnail\" style=\"background-image: url('{{:url}}');\"></div><p class=\"hu-composer-filename\">{{:name}}</p><span class=\"hu-composer-fileclose\" data-index=\"{{:index}}\"><img src=\"{{:staticUrl}}webchat/img/cross.png\" alt=\"\"/></span></div></script><script class=\"js-webchat-proactive-message\" type=\"text/x-jsrender\"><div class=\"hu-launcher-message-content\" style=\"background-color: {{:config.accentColor}};\"><p>{{:config.proactivemessage}}</p></div></script>";
// END
var HuEmoji=function(e,a,n,l){if(this.DEFAULTS={pages:["People","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],search:!1,preview:!1,width:"325px",height:"200px",positionY:"top",positionX:"right",offsetY:0,offsetX:0,spritesUrl:""},this.options=this.extendDefaults(this.DEFAULTS,l),"object"!=typeof e)throw new TypeError("input must be an object, type "+typeof e+" was given instead.");if("object"!=typeof a)throw new TypeError("trigger must be an object, type "+typeof a+" was given instead.");if("object"!=typeof n)throw new TypeError("attach must be an object, type "+typeof n+" was given instead.");if("object"!=typeof l)throw new TypeError("options must be an object, type "+typeof l+" was given instead.");if(this.options.pages.map(function(e,a){if(HuEmoji.emojiPages.indexOf(e)<0)throw new TypeError('options.page "'+this.options.pages[a]+"\" doesn't exist. Try these: "+HuEmoji.emojiPages)}),"boolean"!=typeof this.options.search)throw new TypeError("options.search must be a boolean, type "+typeof this.options.search+" was given instead.");if("boolean"!=typeof this.options.preview)throw new TypeError("options.preview must be a boolean, type "+typeof this.options.preview+" was given instead.");if(HuEmoji.positionYValues.indexOf(this.options.positionY)<0)throw new TypeError('options.positionY value "'+this.options.positionY+'" not available, try these: '+HuEmoji.positionYValues);if(HuEmoji.positionXValues.indexOf(this.options.positionX)<0)throw new TypeError('options.positionX value "'+this.options.positionX+'" not available, try these: '+HuEmoji.positionXValues);if("number"!=typeof this.options.offsetY||"number"!=typeof this.options.offsetX)throw new TypeError("options.offset must be a number");if("string"!=typeof this.options.spritesUrl)throw new TypeError("options.spritesUrl must be a string, type "+typeof l+" was given instead.");this.input=e,this.trigger=a,this.attach=n,this.container=null,this.tabs=null,this.search=null,this.pagesScroll=null,this.checkScroll=!0,this.preview=null,this.init()};HuEmoji.VERSION="1.0.1",HuEmoji.positionYValues=["top","bottom"],HuEmoji.positionXValues=["left","center","right"],HuEmoji.emojiPages=["People","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],HuEmoji.contamination=15,HuEmoji.prototype.extendDefaults=function(e,a){for(var n in a)a.hasOwnProperty(n)&&e.hasOwnProperty(n)&&(e[n]=a[n]);return e},HuEmoji.prototype.toggle=function(e){if(!this.container.contains(e.target)){var a="block"===this.container.style.display;a===!0?this.hide():this.show()}},HuEmoji.prototype.show=function(){this.container.style.display="block",this.options.search&&this.search.focus(),null==this.pagesScroll&&(this.pagesScroll=this.getAllPagesPosition())},HuEmoji.prototype.hide=function(){this.container.style.display="none",this.search&&this.cancelSearch()},HuEmoji.prototype.globalHide=function(e){this.container.contains(e.target)||this.trigger.contains(e.target)||"block"==this.container.style.display&&this.hide()},HuEmoji.prototype.setContainerPosition=function(){var e="top"==this.options.positionY,a="bottom"==this.options.positionY,n="left"==this.options.positionX,l="center"==this.options.positionX,m="right"==this.options.positionX;e?this.container.style.bottom=this.options.offsetY+"px":a&&(this.container.style.top=this.options.offsetY+"px"),n?this.container.style.right=this.options.offsetX+"px":l?(this.container.style.left=0,this.container.style.right=0,this.container.style.margin="0 auto"):m&&(this.container.style.left=this.options.offsetX+"px")},HuEmoji.prototype.updateContainerPosition=function(e,a){var n="top"==this.options.positionY,l="bottom"==this.options.positionY,m="left"==this.options.positionX,u="right"==this.options.positionX;n?this.container.style.bottom=this.options.offsetY+e+"px":l&&(this.container.style.top=this.options.offsetY+e+"px"),m?this.container.style.right=this.options.offsetX+a+"px":u&&(this.container.style.left=this.options.offsetX+a+"px")},HuEmoji.prototype.selectPage=function(e){this.search&&this.cancelSearch();var a=e.target?e.target.parentNode.getAttribute("data-tab")||e.target.getAttribute("data-tab"):e;this.pageClassHandler(a),this.checkScroll=!1,this.container.querySelector("section").scrollTop=this.getPagePosition(a)},HuEmoji.prototype.pageClassHandler=function(e){for(var a=this.tabs.querySelectorAll("li.hu-active"),n=0;n<a.length;n++)a[n].className=a[n].className.replace(" hu-active","");var l=this.tabs.querySelector('[data-tab="'+e+'"]');l.className+=" hu-active"},HuEmoji.prototype.scrollListener=function(e){if(this.checkScroll){this.checkScroll=!1;var a=e.target.scrollTop,n=this.getPageFromScroll(a);this.pageClassHandler(n)}setTimeout(function(){this.checkScroll=!0},200)},HuEmoji.prototype.getAllPagesPosition=function(){var e=this.options.pages,a=[];for(page in e)position=this.container.querySelector("#page_"+e[page]).offsetTop,this.options.search===!0?position-=91:position-=49,a.push(position);return a},HuEmoji.prototype.getPagePosition=function(e){var a=this.container.querySelector("#page_"+e).offsetTop;return a-=this.options.search===!0?91:49,a+1},HuEmoji.prototype.getPageFromScroll=function(e){for(var a=this.options.pages,n=null,l=a.length-1;l>-1;l--)if(e>this.pagesScroll[l]){n=a[l];break}return null!==n?n:a[0]},HuEmoji.prototype.searchListener=function(e){var a=e.target.value.toLowerCase(),n=[];if(""!=a){var n=this.getObjectsFromJSON(HuEmoji.EMOJIS,a);this.showSearchPage(),this.fillSearchPage(n)}else this.hideSearchPage()},HuEmoji.prototype.showSearchPage=function(){for(var e=0;e<this.options.pages.length;e++){var a=this.container.querySelector("#page_"+this.options.pages[e]);a.className.indexOf("hu-hidden")==-1&&(a.className+=" hu-hidden")}var n=this.container.querySelector("#page_Search");n.className.indexOf("hu-hidden")!=-1&&(n.className=n.className.replace(" hu-hidden",""))},HuEmoji.prototype.hideSearchPage=function(){for(var e=0;e<this.options.pages.length;e++){var a=this.container.querySelector("#page_"+this.options.pages[e]);a.className.indexOf("hu-hidden")>-1&&(a.className=a.className.replace(" hu-hidden",""))}var n=this.container.querySelector("#page_Search");n.className.indexOf("hu-hidden")>-1||(n.className+=" hu-hidden")},HuEmoji.prototype.fillSearchPage=function(e){var a=this.container.querySelector("#page_Search .hu-emoji-list-items");a.innerHTML="";for(var n in e){var l=document.createElement("span");l.className="hu-emoji",l.textContent=e[n].value,l.setAttribute("data-name",e[n].name),l.setAttribute("data-value",e[n].value),l.addEventListener("click",this.pickEmoji.bind(this)),l.addEventListener("mouseenter",this.previewOn.bind(this)),l.addEventListener("mouseleave",this.previewOff.bind(this));var m=document.createElement("div");m.className="hu-emoji-item",m.appendChild(l),a.appendChild(m)}this.alignmentTrick(a,HuEmoji.contamination)},HuEmoji.prototype.cancelSearch=function(){this.search.value="";var e=document.createEvent("HTMLEvents");e.initEvent("keyup",!1,!0),this.search.dispatchEvent(e)},HuEmoji.prototype.alignmentTrick=function(e,a){for(var n=0;n<a;n++){var l=document.createElement("div");l.className="hu-emoji-item",e.appendChild(l)}},HuEmoji.prototype.getObjectsFromJSON=function(e,a){var n=[];for(var l in e)e.hasOwnProperty(l)&&("object"==typeof e[l]?n=n.concat(this.getObjectsFromJSON(e[l],a)):e[l].indexOf(a)>-1&&n.push(e));return n},HuEmoji.prototype.pickEmoji=function(e){var a=e.target.getAttribute("data-value");this.insertEmoji(a,this.input),this.input.focus()},HuEmoji.prototype.insertEmoji=function(e,a){var n,l,m=e.length;if(document.selection){a.focus();var u=document.selection.createRange();u.text=e}else if(a.selectionStart||"0"==a.selectionStart){var n=a.selectionStart,l=a.selectionEnd;a.value=a.value.substring(0,n)+e+a.value.substring(l,a.value.length),a.focus(),a.setSelectionRange(n+m,l+m)}else a.value+=e},HuEmoji.prototype.previewOn=function(e){var a=this.preview.querySelector(".hu-emoji-preview-image"),n=this.preview.querySelector(".hu-emoji-preview-title"),l=this.preview.querySelector(".hu-emoji-preview-name"),m=e.target||e,u=m.getAttribute("data-name"),t=u.slice(1,u.length-1);a.innerHTML=m.outerHTML,n.textContent=t,l.textContent=u},HuEmoji.prototype.previewOff=function(){var e=this.preview.querySelector(".hu-emoji-preview-image"),a=this.preview.querySelector(".hu-emoji-preview-title"),n=this.preview.querySelector(".hu-emoji-preview-name");e.innerHTML="",a.innerHTML="",n.innerHTML=""},HuEmoji.prototype.init=function(){var e,a,n,l,m,u,t;if(this.container=document.createElement("div"),this.container.className="hu-emoji-container",this.container.style.display="none",this.options.width&&(this.container.style.width=this.options.width),this.options.height&&(this.container.style.height=this.options.height),this.setContainerPosition(),e=document.createElement("div"),e.className="hu-emoji-wrapper",a=document.createElement("header"),n=document.createElement("div"),n.className="hu-emoji-types",this.tabs=n,n.appendChild(this.getEmojiTopbar()),a.appendChild(n),this.options.search===!0){l=document.createElement("div"),l.className="hu-emoji-search";var v=document.createElement("input");v.setAttribute("placeholder","Search emojis"),v.addEventListener("keyup",this.searchListener.bind(this)),v.addEventListener("paste",this.searchListener.bind(this)),l.appendChild(v),this.search=v,a.appendChild(l)}m=document.createElement("section"),m.addEventListener("scroll",this.scrollListener.bind(this));var i=document.createElement("div");i.className="hu-emoji-list",m.appendChild(i);for(var o in this.options.pages)i.appendChild(this.getEmojiPage(this.options.pages[o]));if(this.options.search===!0&&i.appendChild(this.getSearchPage()),u=document.createElement("footer"),this.options.preview===!0){t=document.createElement("div"),t.className="hu-emoji-preview";var r=document.createElement("div");r.className="hu-emoji-preview-image";var s=document.createElement("div");s.className="hu-emoji-preview-info";var c=document.createElement("h4");c.className="hu-emoji-preview-title";var _=document.createElement("p");_.className="hu-emoji-preview-name",s.appendChild(c),s.appendChild(_),t.appendChild(r),t.appendChild(s),this.preview=t,u.appendChild(t)}e.appendChild(a),e.appendChild(m),e.appendChild(u),this.container.appendChild(e),this.attach.appendChild(this.container),this.selectPage(this.options.pages[0]),this.trigger.addEventListener("click",this.toggle.bind(this)),document.addEventListener("click",this.globalHide.bind(this))},HuEmoji.prototype.getEmojiPage=function(e){var a=document.createElement("div");a.className="hu-emoji-list-page",a.id="page_"+e;var n=document.createElement("h3");n.className="hu-emoji-list-type",n.textContent=e,a.appendChild(n);var l=document.createElement("div");l.className="hu-emoji-list-items";for(var m in HuEmoji.EMOJIS[e]){var u=document.createElement("span");u.className="hu-emoji",u.textContent=HuEmoji.EMOJIS[e][m].value,u.setAttribute("data-name",HuEmoji.EMOJIS[e][m].name),u.setAttribute("data-value",HuEmoji.EMOJIS[e][m].value),u.addEventListener("click",this.pickEmoji.bind(this)),u.addEventListener("mouseenter",this.previewOn.bind(this)),u.addEventListener("mouseleave",this.previewOff.bind(this));var t=document.createElement("div");t.className="hu-emoji-item",t.appendChild(u),l.appendChild(t)}return this.alignmentTrick(l,HuEmoji.contamination),a.appendChild(l),a},HuEmoji.prototype.getSearchPage=function(){var e=document.createElement("div");e.className="hu-emoji-list-page hu-hidden",e.id="page_Search";var a=document.createElement("h3");a.className="hu-emoji-list-type",a.textContent="Search results",e.appendChild(a);var n=document.createElement("div");return n.className="hu-emoji-list-items",e.appendChild(n),e},HuEmoji.prototype.getEmojiTopbar=function(){var e=document.createElement("ul");for(var a in this.options.pages){var n=document.createElement("li");n.setAttribute("data-tab",this.options.pages[a]),n.addEventListener("click",this.selectPage.bind(this));var l=document.createElement("div");l.className="icon hu-tab-"+this.options.pages[a],l.style.backgroundImage="url("+this.options.spritesUrl+")",n.appendChild(l),e.appendChild(n)}return e},HuEmoji.EMOJIS={People:[{name:":grinning:",value:"😀"},{name:":grin:",value:"😁"},{name:":joy:",value:"😂"},{name:":smiley:",value:"😃"},{name:":smile:",value:"😄"},{name:":sweat_smile:",value:"😅"},{name:":laughing:",value:"😆"},{name:":innocent:",value:"😇"},{name:":smiling_imp:",value:"😈"},{name:":wink:",value:"😉"},{name:":blush:",value:"😊"},{name:":yum:",value:"😋"},{name:":relieved:",value:"😌"},{name:":heart_eyes:",value:"😍"},{name:":sunglasses:",value:"😎"},{name:":smirk:",value:"😏"},{name:":neutral_face:",value:"😐"},{name:":expressionless:",value:"😑"},{name:":unamused:",value:"😒"},{name:":sweat:",value:"😓"},{name:":pensive:",value:"😔"},{name:":confused:",value:"😕"},{name:":confounded:",value:"😖"},{name:":kissing:",value:"😗"},{name:":kissing_heart:",value:"😘"},{name:":kissing_smiling_eyes:",value:"😙"},{name:":kissing_closed_eyes:",value:"😚"},{name:":stuck_out_tongue:",value:"😛"},{name:":stuck_out_tongue_winking_eye:",value:"😜"},{name:":stuck_out_tongue_closed_eyes:",value:"😝"},{name:":disappointed:",value:"😞"},{name:":worried:",value:"😟"},{name:":angry:",value:"😠"},{name:":rage:",value:"😡"},{name:":cry:",value:"😢"},{name:":persevere:",value:"😣"},{name:":triumph:",value:"😤"},{name:":disappointed_relieved:",value:"😥"},{name:":frowning:",value:"😦"},{name:":anguished:",value:"😧"},{name:":fearful:",value:"😨"},{name:":weary:",value:"😩"},{name:":sleepy:",value:"😪"},{name:":tired_face:",value:"😫"},{name:":grimacing:",value:"😬"},{name:":sob:",value:"😭"},{name:":open_mouth:",value:"😮"},{name:":hushed:",value:"😯"},{name:":cold_sweat:",value:"😰"},{name:":scream:",value:"😱"},{name:":astonished:",value:"😲"},{name:":flushed:",value:"😳"},{name:":sleeping:",value:"😴"},{name:":dizzy_face:",value:"😵"},{name:":no_mouth:",value:"😶"},{name:":mask:",value:"😷"},{name:":smile_cat:",value:"😸"},{name:":joy_cat:",value:"😹"},{name:":smiley_cat:",value:"😺"},{name:":heart_eyes_cat:",value:"😻"},{name:":smirk_cat:",value:"😼"},{name:":kissing_cat:",value:"😽"},{name:":pouting_cat:",value:"😾"},{name:":crying_cat_face:",value:"😿"},{name:":scream_cat:",value:"🙀"},{name:":slightly_frowning_face:",value:"🙁"},{name:":slightly_smiling_face:",value:"🙂"},{name:":upside_down_face:",value:"🙃"},{name:":face_with_rolling_eyes:",value:"🙄"},{name:":no_good:",value:"🙅"},{name:":ok_woman:",value:"🙆"},{name:":bow:",value:"🙇"},{name:":see_no_evil:",value:"🙈"},{name:":hear_no_evil:",value:"🙉"},{name:":speak_no_evil:",value:"🙊"},{name:":raising_hand:",value:"🙋"},{name:":raised_hands:",value:"🙌"},{name:":person_frowning:",value:"🙍"},{name:":person_with_pouting_face:",value:"🙎"},{name:":pray:",value:"🙏"},{name:":rowboat:",value:"🚣"},{name:":bicyclist:",value:"🚴"},{name:":mountain_bicyclist:",value:"🚵"},{name:":walking:",value:"🚶"},{name:":shopping_bags:",value:"🛍"},{name:":zipper_mouth_face:",value:"🤐"},{name:":money_mouth_face:",value:"🤑"},{name:":face_with_thermometer:",value:"🤒"},{name:":nerd_face:",value:"🤓"},{name:":thinking_face:",value:"🤔"},{name:":face_with_head_bandage:",value:"🤕"},{name:":robot_face:",value:"🤖"},{name:":hugging_face:",value:"🤗"},{name:":the_horns:",value:"🤘"},{name:":man-man-boy:",value:"👨‍👨‍👦"},{name:":man-man-boy-boy:",value:"👨‍👨‍👦‍👦"},{name:":man-man-girl:",value:"👨‍👨‍👧"},{name:":man-man-girl-boy:",value:"👨‍👨‍👧‍👦"},{name:":man-man-girl-girl:",value:"👨‍👨‍👧‍👧"},{name:":man-woman-boy-boy:",value:"👨‍👩‍👦‍👦"},{name:":man-woman-girl:",value:"👨‍👩‍👧"},{name:":man-woman-girl-boy:",value:"👨‍👩‍👧‍👦"},{name:":man-woman-girl-girl:",value:"👨‍👩‍👧‍👧"},{name:":man-heart-man:",value:"👨‍❤️‍👨"},{name:":man-kiss-man:",value:"👨‍❤️‍💋‍👨"},{name:":woman-woman-boy:",value:"👩‍👩‍👦"},{name:":woman-woman-boy-boy:",value:"👩‍👩‍👦‍👦"},{name:":woman-woman-girl:",value:"👩‍👩‍👧"},{name:":woman-woman-girl-boy:",value:"👩‍👩‍👧‍👦"},{name:":woman-woman-girl-girl:",value:"👩‍👩‍👧‍👧"},{name:":woman-heart-woman:",value:"👩‍❤️‍👩"},{name:":woman-kiss-woman:",value:"👩‍❤️‍💋‍👩"},{name:":umbrella:",value:"☂"},{name:":umbrella_with_rain_drops:",value:"☔"},{name:":point_up:",value:"☝"},{name:":skull_and_crossbones:",value:"☠"},{name:":white_frowning_face:",value:"☹"},{name:":relaxed:",value:"☺"},{name:":spades:",value:"♠"},{name:":clubs:",value:"♣"},{name:":hearts:",value:"♥"},{name:":diamonds:",value:"♦"},{name:":helmet_with_white_cross:",value:"⛑"},{name:":umbrella_on_ground:",value:"⛱"},{name:":skier:",value:"⛷"},{name:":person_with_ball:",value:"⛹"},{name:":fist:",value:"✊"},{name:":hand:",value:"✋"},{name:":v:",value:"✌"},{name:":writing_hand:",value:"✍"},{name:":sparkles:",value:"✨"},{name:":mahjong:",value:"🀄"},{name:":black_joker:",value:"🃏"},{name:":cyclone:",value:"🌀"},{name:":closed_umbrella:",value:"🌂"},{name:":stars:",value:"🌠"},{name:":thermometer:",value:"🌡"},{name:":jack_o_lantern:",value:"🎃"},{name:":christmas_tree:",value:"🎄"},{name:":santa:",value:"🎅"},{name:":fireworks:",value:"🎆"},{name:":sparkler:",value:"🎇"},{name:":school_satchel:",value:"🎒"},{name:":mortar_board:",value:"🎓"},{name:":art:",value:"🎨"},{name:":tophat:",value:"🎩"},{name:":circus_tent:",value:"🎪"},{name:":performing_arts:",value:"🎭"},{name:":slot_machine:",value:"🎰"},{name:":flower_playing_cards:",value:"🎴"},{name:":snowboarder:",value:"🏂"},{name:":runner:",value:"🏃"},{name:":surfer:",value:"🏄"},{name:":horse_racing:",value:"🏇"},{name:":swimmer:",value:"🏊"},{name:":weight_lifter:",value:"🏋"},{name:":golfer:",value:"🏌"},{name:":racing_motorcycle:",value:"🏍"},{name:":racing_car:",value:"🏎"},{name:":amphora:",value:"🏺"},{name:":skin-tone-2:",value:"🏻"},{name:":skin-tone-3:",value:"🏼"},{name:":skin-tone-4:",value:"🏽"},{name:":skin-tone-5:",value:"🏾"},{name:":skin-tone-6:",value:"🏿"},{name:":eyes:",value:"👀"},{name:":eye:",value:"👁"},{name:":ear:",value:"👂"},{name:":nose:",value:"👃"},{name:":lips:",value:"👄"},{name:":tongue:",value:"👅"},{name:":point_up_2:",value:"👆"},{name:":point_down:",value:"👇"},{name:":point_left:",value:"👈"},{name:":point_right:",value:"👉"},{name:":facepunch:",value:"👊"},{name:":wave:",value:"👋"},{name:":ok_hand:",value:"👌"},{name:":+1:",value:"👍"},{name:":-1:",value:"👎"},{name:":clap:",value:"👏"},{name:":open_hands:",value:"👐"},{name:":crown:",value:"👑"},{name:":womans_hat:",value:"👒"},{name:":eyeglasses:",value:"👓"},{name:":necktie:",value:"👔"},{name:":shirt:",value:"👕"},{name:":jeans:",value:"👖"},{name:":dress:",value:"👗"},{name:":kimono:",value:"👘"},{name:":bikini:",value:"👙"},{name:":womans_clothes:",value:"👚"},{name:":purse:",value:"👛"},{name:":handbag:",value:"👜"},{name:":pouch:",value:"👝"},{name:":mans_shoe:",value:"👞"},{name:":athletic_shoe:",value:"👟"},{name:":high_heel:",value:"👠"},{name:":sandal:",value:"👡"},{name:":boot:",value:"👢"},{name:":footprints:",value:"👣"},{name:":bust_in_silhouette:",value:"👤"},{name:":busts_in_silhouette:",value:"👥"},{name:":boy:",value:"👦"},{name:":girl:",value:"👧"},{name:":man:",value:"👨"},{name:":woman:",value:"👩"},{name:":family:",value:"👪"},{name:":couple:",value:"👫"},{name:":two_men_holding_hands:",value:"👬"},{name:":two_women_holding_hands:",value:"👭"},{name:":cop:",value:"👮"},{name:":dancers:",value:"👯"},{name:":bride_with_veil:",value:"👰"},{name:":person_with_blond_hair:",value:"👱"},{name:":man_with_gua_pi_mao:",value:"👲"},{name:":man_with_turban:",value:"👳"},{name:":older_man:",value:"👴"},{name:":older_woman:",value:"👵"},{name:":baby:",value:"👶"},{name:":construction_worker:",value:"👷"},{name:":princess:",value:"👸"},{name:":japanese_ogre:",value:"👹"},{name:":japanese_goblin:",value:"👺"},{name:":ghost:",value:"👻"},{name:":angel:",value:"👼"},{name:":alien:",value:"👽"},{name:":space_invader:",value:"👾"},{name:":imp:",value:"👿"},{name:":skull:",value:"💀"},{name:":information_desk_person:",value:"💁"},{name:":guardsman:",value:"💂"},{name:":dancer:",value:"💃"},{name:":lipstick:",value:"💄"},{name:":nail_care:",value:"💅"},{name:":massage:",value:"💆"},{name:":haircut:",value:"💇"},{name:":barber:",value:"💈"},{name:":kiss:",value:"💋"},{name:":love_letter:",value:"💌"},{name:":ring:",value:"💍"},{name:":gem:",value:"💎"},{name:":couplekiss:",value:"💏"},{name:":couple_with_heart:",value:"💑"},{name:":anger:",value:"💢"},{name:":bomb:",value:"💣"},{name:":zzz:",value:"💤"},{name:":boom:",value:"💥"},{name:":sweat_drops:",value:"💦"},{name:":dash:",value:"💨"},{name:":hankey:",value:"💩"},{name:":muscle:",value:"💪"},{name:":dizzy:",value:"💫"},{name:":currency_exchange:",value:"💱"},{name:":heavy_dollar_sign:",value:"💲"},{name:":chart:",value:"💹"},{name:":prayer_beads:",value:"📿"},{name:":hole:",value:"🕳"},{name:":man_in_business_suit_levitating:",value:"🕴"},{name:":sleuth_or_spy:",value:"🕵"},{name:":dark_sunglasses:",value:"🕶"},{name:":raised_hand_with_fingers_splayed:",value:"🖐"},{name:":middle_finger:",value:"🖕"},{name:":spock-hand:",value:"🖖"},{name:":frame_with_picture:",value:"🖼"},{name:":speaking_head_in_silhouette:",value:"🗣"}],Nature:[{name:":sunny:",value:"☀"},{name:":cloud:",value:"☁"},{name:":snowman:",value:"☃"},{name:":comet:",value:"☄"},{name:":shamrock:",value:"☘"},{name:":zap:",value:"⚡"},{name:":snowman_without_snow:",value:"⛄"},{name:":partly_sunny:",value:"⛅"},{name:":thunder_cloud_and_rain:",value:"⛈"},{name:":snowflake:",value:"❄"},{name:":star:",value:"⭐"},{name:":rainbow:",value:"🌈"},{name:":ocean:",value:"🌊"},{name:":earth_africa:",value:"🌍"},{name:":earth_americas:",value:"🌎"},{name:":earth_asia:",value:"🌏"},{name:":new_moon:",value:"🌑"},{name:":waxing_crescent_moon:",value:"🌒"},{name:":first_quarter_moon:",value:"🌓"},{name:":moon:",value:"🌔"},{name:":full_moon:",value:"🌕"},{name:":waning_gibbous_moon:",value:"🌖"},{name:":last_quarter_moon:",value:"🌗"},{name:":waning_crescent_moon:",value:"🌘"},{name:":crescent_moon:",value:"🌙"},{name:":new_moon_with_face:",value:"🌚"},{name:":first_quarter_moon_with_face:",value:"🌛"},{name:":last_quarter_moon_with_face:",value:"🌜"},{name:":full_moon_with_face:",value:"🌝"},{name:":sun_with_face:",value:"🌞"},{name:":star2:",value:"🌟"},{name:":mostly_sunny:",value:"🌤"},{name:":barely_sunny:",value:"🌥"},{name:":partly_sunny_rain:",value:"🌦"},{name:":rain_cloud:",value:"🌧"},{name:":snow_cloud:",value:"🌨"},{name:":lightning:",value:"🌩"},{name:":tornado:",value:"🌪"},{name:":fog:",value:"🌫"},{name:":wind_blowing_face:",value:"🌬"},{name:":seedling:",value:"🌱"},{name:":evergreen_tree:",value:"🌲"},{name:":deciduous_tree:",value:"🌳"},{name:":palm_tree:",value:"🌴"},{name:":cactus:",value:"🌵"},{name:":tulip:",value:"🌷"},{name:":cherry_blossom:",value:"🌸"},{name:":rose:",value:"🌹"},{name:":hibiscus:",value:"🌺"},{name:":sunflower:",value:"🌻"},{name:":blossom:",value:"🌼"},{name:":ear_of_rice:",value:"🌾"},{name:":herb:",value:"🌿"},{name:":four_leaf_clover:",value:"🍀"},{name:":maple_leaf:",value:"🍁"},{name:":fallen_leaf:",value:"🍂"},{name:":leaves:",value:"🍃"},{name:":rosette:",value:"🏵"},{name:":rat:",value:"🐀"},{name:":mouse2:",value:"🐁"},{name:":ox:",value:"🐂"},{name:":water_buffalo:",value:"🐃"},{name:":cow2:",value:"🐄"},{name:":tiger2:",value:"🐅"},{name:":leopard:",value:"🐆"},{name:":rabbit2:",value:"🐇"},{name:":cat2:",value:"🐈"},{name:":dragon:",value:"🐉"},{name:":crocodile:",value:"🐊"},{name:":whale2:",value:"🐋"},{name:":snail:",value:"🐌"},{name:":snake:",value:"🐍"},{name:":racehorse:",value:"🐎"},{name:":ram:",value:"🐏"},{name:":goat:",value:"🐐"},{name:":sheep:",value:"🐑"},{name:":monkey:",value:"🐒"},{name:":rooster:",value:"🐓"},{name:":chicken:",value:"🐔"},{name:":dog2:",value:"🐕"},{name:":pig2:",value:"🐖"},{name:":boar:",value:"🐗"},{name:":elephant:",value:"🐘"},{name:":octopus:",value:"🐙"},{name:":shell:",value:"🐚"},{name:":bug:",value:"🐛"},{name:":ant:",value:"🐜"},{name:":bee:",value:"🐝"},{name:":beetle:",value:"🐞"},{name:":fish:",value:"🐟"},{name:":tropical_fish:",value:"🐠"},{name:":blowfish:",value:"🐡"},{name:":turtle:",value:"🐢"},{name:":hatching_chick:",value:"🐣"},{name:":baby_chick:",value:"🐤"},{name:":hatched_chick:",value:"🐥"},{name:":bird:",value:"🐦"},{name:":penguin:",value:"🐧"},{name:":koala:",value:"🐨"},{name:":poodle:",value:"🐩"},{name:":dromedary_camel:",value:"🐪"},{name:":camel:",value:"🐫"},{name:":dolphin:",value:"🐬"},{name:":mouse:",value:"🐭"},{name:":cow:",value:"🐮"},{name:":tiger:",value:"🐯"},{name:":rabbit:",value:"🐰"},{name:":cat:",value:"🐱"},{name:":dragon_face:",value:"🐲"},{name:":whale:",value:"🐳"},{name:":horse:",value:"🐴"},{name:":monkey_face:",value:"🐵"},{name:":dog:",value:"🐶"},{name:":pig:",value:"🐷"},{name:":frog:",value:"🐸"},{name:":hamster:",value:"🐹"},{name:":wolf:",value:"🐺"},{name:":bear:",value:"🐻"},{name:":panda_face:",value:"🐼"},{name:":pig_nose:",value:"🐽"},{name:":feet:",value:"🐾"},{name:":chipmunk:",value:"🐿"},{name:":bouquet:",value:"💐"},{name:":droplet:",value:"💧"},{name:":white_flower:",value:"💮"},{name:":fire:",value:"🔥"},{name:":dove_of_peace:",value:"🕊"},{name:":spider:",value:"🕷"},{name:":spider_web:",value:"🕸"},{name:":crab:",value:"🦀"},{name:":lion_face:",value:"🦁"},{name:":scorpion:",value:"🦂"},{name:":turkey:",value:"🦃"},{name:":unicorn_face:",value:"🦄"}],Food:[{name:":coffee:",value:"☕"},{name:":hotdog:",value:"🌭"},{name:":taco:",value:"🌮"},{name:":burrito:",value:"🌯"},{name:":chestnut:",value:"🌰"},{name:":hot_pepper:",value:"🌶"},{name:":corn:",value:"🌽"},{name:":mushroom:",value:"🍄"},{name:":tomato:",value:"🍅"},{name:":eggplant:",value:"🍆"},{name:":grapes:",value:"🍇"},{name:":melon:",value:"🍈"},{name:":watermelon:",value:"🍉"},{name:":tangerine:",value:"🍊"},{name:":lemon:",value:"🍋"},{name:":banana:",value:"🍌"},{name:":pineapple:",value:"🍍"},{name:":apple:",value:"🍎"},{name:":green_apple:",value:"🍏"},{name:":pear:",value:"🍐"},{name:":peach:",value:"🍑"},{name:":cherries:",value:"🍒"},{name:":strawberry:",value:"🍓"},{name:":hamburger:",value:"🍔"},{name:":pizza:",value:"🍕"},{name:":meat_on_bone:",value:"🍖"},{name:":poultry_leg:",value:"🍗"},{name:":rice_cracker:",value:"🍘"},{name:":rice_ball:",value:"🍙"},{name:":rice:",value:"🍚"},{name:":curry:",value:"🍛"},{name:":ramen:",value:"🍜"},{name:":spaghetti:",value:"🍝"},{name:":bread:",value:"🍞"},{name:":fries:",value:"🍟"},{name:":sweet_potato:",value:"🍠"},{name:":dango:",value:"🍡"},{name:":oden:",value:"🍢"},{name:":sushi:",value:"🍣"},{name:":fried_shrimp:",value:"🍤"},{name:":fish_cake:",value:"🍥"},{name:":icecream:",value:"🍦"},{name:":shaved_ice:",value:"🍧"},{name:":ice_cream:",value:"🍨"},{name:":doughnut:",value:"🍩"},{name:":cookie:",value:"🍪"},{name:":chocolate_bar:",value:"🍫"},{name:":candy:",value:"🍬"},{name:":lollipop:",value:"🍭"},{name:":custard:",value:"🍮"},{name:":honey_pot:",value:"🍯"},{name:":cake:",value:"🍰"},{name:":bento:",value:"🍱"},{name:":stew:",value:"🍲"},{name:":egg:",value:"🍳"},{name:":fork_and_knife:",value:"🍴"},{name:":tea:",value:"🍵"},{name:":sake:",value:"🍶"},{name:":wine_glass:",value:"🍷"},{name:":cocktail:",value:"🍸"},{name:":tropical_drink:",value:"🍹"},{name:":beer:",value:"🍺"},{name:":beers:",value:"🍻"},{name:":baby_bottle:",value:"🍼"},{name:":knife_fork_plate:",value:"🍽"},{name:":champagne:",value:"🍾"},{name:":popcorn:",value:"🍿"},{name:":birthday:",value:"🎂"},{name:":hocho:",value:"🔪"},{name:":cheese_wedge:",value:"🧀"}],Activity:[{name:":soccer:",value:"⚽"},{name:":baseball:",value:"⚾"},{name:":golf:",value:"⛳"},{name:":ice_skate:",value:"⛸"},{name:":medal:",value:"🎖"},{name:":fishing_pole_and_fish:",value:"🎣"},{name:":video_game:",value:"🎮"},{name:":dart:",value:"🎯"},{name:":8ball:",value:"🎱"},{name:":game_die:",value:"🎲"},{name:":bowling:",value:"🎳"},{name:":running_shirt_with_sash:",value:"🎽"},{name:":tennis:",value:"🎾"},{name:":ski:",value:"🎿"},{name:":basketball:",value:"🏀"},{name:":sports_medal:",value:"🏅"},{name:":trophy:",value:"🏆"},{name:":football:",value:"🏈"},{name:":rugby_football:",value:"🏉"},{name:":cricket_bat_and_ball:",value:"🏏"},{name:":volleyball:",value:"🏐"},{name:":field_hockey_stick_and_ball:",value:"🏑"},{name:":ice_hockey_stick_and_puck:",value:"🏒"},{name:":table_tennis_paddle_and_ball:",value:"🏓"},{name:":badminton_racquet_and_shuttlecock:",value:"🏸"},{name:":joystick:",value:"🕹"}],Travel:[{name:":hotsprings:",value:"♨"},{name:":anchor:",value:"⚓"},{name:":shinto_shrine:",value:"⛩"},{name:":church:",value:"⛪"},{name:":mountain:",value:"⛰"},{name:":fountain:",value:"⛲"},{name:":ferry:",value:"⛴"},{name:":boat:",value:"⛵"},{name:":tent:",value:"⛺"},{name:":fuelpump:",value:"⛽"},{name:":airplane:",value:"✈"},{name:":foggy:",value:"🌁"},{name:":night_with_stars:",value:"🌃"},{name:":sunrise_over_mountains:",value:"🌄"},{name:":sunrise:",value:"🌅"},{name:":city_sunset:",value:"🌆"},{name:":city_sunrise:",value:"🌇"},{name:":bridge_at_night:",value:"🌉"},{name:":volcano:",value:"🌋"},{name:":milky_way:",value:"🌌"},{name:":globe_with_meridians:",value:"🌐"},{name:":carousel_horse:",value:"🎠"},{name:":ferris_wheel:",value:"🎡"},{name:":roller_coaster:",value:"🎢"},{name:":snow_capped_mountain:",value:"🏔"},{name:":camping:",value:"🏕"},{name:":beach_with_umbrella:",value:"🏖"},{name:":building_construction:",value:"🏗"},{name:":house_buildings:",value:"🏘"},{name:":cityscape:",value:"🏙"},{name:":derelict_house_building:",value:"🏚"},{name:":classical_building:",value:"🏛"},{name:":desert:",value:"🏜"},{name:":desert_island:",value:"🏝"},{name:":national_park:",value:"🏞"},{name:":stadium:",value:"🏟"},{name:":house:",value:"🏠"},{name:":house_with_garden:",value:"🏡"},{name:":office:",value:"🏢"},{name:":post_office:",value:"🏣"},{name:":european_post_office:",value:"🏤"},{name:":hospital:",value:"🏥"},{name:":bank:",value:"🏦"},{name:":hotel:",value:"🏨"},{name:":love_hotel:",value:"🏩"},{name:":convenience_store:",value:"🏪"},{name:":school:",value:"🏫"},{name:":department_store:",value:"🏬"},{name:":factory:",value:"🏭"},{name:":japanese_castle:",value:"🏯"},{name:":european_castle:",value:"🏰"},{name:":wedding:",value:"💒"},{name:":seat:",value:"💺"},{name:":kaaba:",value:"🕋"},{name:":mosque:",value:"🕌"},{name:":synagogue:",value:"🕍"},{name:":world_map:",value:"🗺"},{name:":mount_fuji:",value:"🗻"},{name:":tokyo_tower:",value:"🗼"},{name:":statue_of_liberty:",value:"🗽"},{name:":japan:",value:"🗾"},{name:":rocket:",value:"🚀"},{name:":helicopter:",value:"🚁"},{name:":steam_locomotive:",value:"🚂"},{name:":railway_car:",value:"🚃"},{name:":bullettrain_side:",value:"🚄"},{name:":bullettrain_front:",value:"🚅"},{name:":train2:",value:"🚆"},{name:":metro:",value:"🚇"},{name:":light_rail:",value:"🚈"},{name:":station:",value:"🚉"},{name:":tram:",value:"🚊"},{name:":train:",value:"🚋"},{name:":bus:",value:"🚌"},{name:":oncoming_bus:",value:"🚍"},{name:":trolleybus:",value:"🚎"},{name:":busstop:",value:"🚏"},{name:":minibus:",value:"🚐"},{name:":ambulance:",value:"🚑"},{name:":fire_engine:",value:"🚒"},{name:":police_car:",value:"🚓"},{name:":oncoming_police_car:",value:"🚔"},{name:":taxi:",value:"🚕"},{name:":oncoming_taxi:",value:"🚖"},{name:":car:",value:"🚗"},{name:":oncoming_automobile:",value:"🚘"},{name:":blue_car:",value:"🚙"},{name:":truck:",value:"🚚"},{name:":articulated_lorry:",value:"🚛"},{name:":tractor:",value:"🚜"},{name:":monorail:",value:"🚝"},{name:":mountain_railway:",value:"🚞"},{name:":suspension_railway:",value:"🚟"},{name:":mountain_cableway:",value:"🚠"},{name:":aerial_tramway:",value:"🚡"},{name:":ship:",value:"🚢"},{name:":speedboat:",value:"🚤"},{name:":traffic_light:",value:"🚥"},{name:":vertical_traffic_light:",value:"🚦"},{name:":construction:",value:"🚧"},{name:":rotating_light:",value:"🚨"},{name:":bike:",value:"🚲"},{name:":motorway:",value:"🛣"},{name:":railway_track:",value:"🛤"},{name:":motor_boat:",
value:"🛥"},{name:":small_airplane:",value:"🛩"},{name:":airplane_departure:",value:"🛫"},{name:":airplane_arriving:",value:"🛬"},{name:":satellite:",value:"🛰"},{name:":passenger_ship:",value:"🛳"}],Objects:[{name:":watch:",value:"⌚"},{name:":hourglass:",value:"⌛"},{name:":keyboard:",value:"⌨"},{name:":alarm_clock:",value:"⏰"},{name:":stopwatch:",value:"⏱"},{name:":timer_clock:",value:"⏲"},{name:":hourglass_flowing_sand:",value:"⏳"},{name:":phone:",value:"☎"},{name:":hammer_and_pick:",value:"⚒"},{name:":crossed_swords:",value:"⚔"},{name:":scales:",value:"⚖"},{name:":alembic:",value:"⚗"},{name:":gear:",value:"⚙"},{name:":coffin:",value:"⚰"},{name:":funeral_urn:",value:"⚱"},{name:":pick:",value:"⛏"},{name:":chains:",value:"⛓"},{name:":scissors:",value:"✂"},{name:":email:",value:"✉"},{name:":pencil2:",value:"✏"},{name:":black_nib:",value:"✒"},{name:":ribbon:",value:"🎀"},{name:":gift:",value:"🎁"},{name:":balloon:",value:"🎈"},{name:":tada:",value:"🎉"},{name:":confetti_ball:",value:"🎊"},{name:":tanabata_tree:",value:"🎋"},{name:":bamboo:",value:"🎍"},{name:":dolls:",value:"🎎"},{name:":flags:",value:"🎏"},{name:":wind_chime:",value:"🎐"},{name:":rice_scene:",value:"🎑"},{name:":reminder_ribbon:",value:"🎗"},{name:":studio_microphone:",value:"🎙"},{name:":level_slider:",value:"🎚"},{name:":control_knobs:",value:"🎛"},{name:":film_frames:",value:"🎞"},{name:":admission_tickets:",value:"🎟"},{name:":microphone:",value:"🎤"},{name:":movie_camera:",value:"🎥"},{name:":headphones:",value:"🎧"},{name:":ticket:",value:"🎫"},{name:":clapper:",value:"🎬"},{name:":musical_note:",value:"🎵"},{name:":notes:",value:"🎶"},{name:":saxophone:",value:"🎷"},{name:":guitar:",value:"🎸"},{name:":musical_keyboard:",value:"🎹"},{name:":trumpet:",value:"🎺"},{name:":violin:",value:"🎻"},{name:":musical_score:",value:"🎼"},{name:":izakaya_lantern:",value:"🏮"},{name:":label:",value:"🏷"},{name:":bow_and_arrow:",value:"🏹"},{name:":syringe:",value:"💉"},{name:":pill:",value:"💊"},{name:":bulb:",value:"💡"},{name:":moneybag:",value:"💰"},{name:":credit_card:",value:"💳"},{name:":yen:",value:"💴"},{name:":dollar:",value:"💵"},{name:":euro:",value:"💶"},{name:":pound:",value:"💷"},{name:":money_with_wings:",value:"💸"},{name:":computer:",value:"💻"},{name:":briefcase:",value:"💼"},{name:":minidisc:",value:"💽"},{name:":floppy_disk:",value:"💾"},{name:":cd:",value:"💿"},{name:":dvd:",value:"📀"},{name:":file_folder:",value:"📁"},{name:":open_file_folder:",value:"📂"},{name:":page_with_curl:",value:"📃"},{name:":page_facing_up:",value:"📄"},{name:":date:",value:"📅"},{name:":calendar:",value:"📆"},{name:":card_index:",value:"📇"},{name:":chart_with_upwards_trend:",value:"📈"},{name:":chart_with_downwards_trend:",value:"📉"},{name:":bar_chart:",value:"📊"},{name:":clipboard:",value:"📋"},{name:":pushpin:",value:"📌"},{name:":round_pushpin:",value:"📍"},{name:":paperclip:",value:"📎"},{name:":straight_ruler:",value:"📏"},{name:":triangular_ruler:",value:"📐"},{name:":bookmark_tabs:",value:"📑"},{name:":ledger:",value:"📒"},{name:":notebook:",value:"📓"},{name:":notebook_with_decorative_cover:",value:"📔"},{name:":closed_book:",value:"📕"},{name:":book:",value:"📖"},{name:":green_book:",value:"📗"},{name:":blue_book:",value:"📘"},{name:":orange_book:",value:"📙"},{name:":books:",value:"📚"},{name:":scroll:",value:"📜"},{name:":memo:",value:"📝"},{name:":telephone_receiver:",value:"📞"},{name:":pager:",value:"📟"},{name:":fax:",value:"📠"},{name:":satellite_antenna:",value:"📡"},{name:":outbox_tray:",value:"📤"},{name:":inbox_tray:",value:"📥"},{name:":package:",value:"📦"},{name:":e-mail:",value:"📧"},{name:":incoming_envelope:",value:"📨"},{name:":envelope_with_arrow:",value:"📩"},{name:":mailbox_closed:",value:"📪"},{name:":mailbox:",value:"📫"},{name:":mailbox_with_mail:",value:"📬"},{name:":mailbox_with_no_mail:",value:"📭"},{name:":postbox:",value:"📮"},{name:":newspaper:",value:"📰"},{name:":iphone:",value:"📱"},{name:":calling:",value:"📲"},{name:":camera:",value:"📷"},{name:":camera_with_flash:",value:"📸"},{name:":video_camera:",value:"📹"},{name:":tv:",value:"📺"},{name:":radio:",value:"📻"},{name:":vhs:",value:"📼"},{name:":film_projector:",value:"📽"},{name:":battery:",value:"🔋"},{name:":electric_plug:",value:"🔌"},{name:":mag:",value:"🔍"},{name:":mag_right:",value:"🔎"},{name:":lock_with_ink_pen:",value:"🔏"},{name:":closed_lock_with_key:",value:"🔐"},{name:":key:",value:"🔑"},{name:":lock:",value:"🔒"},{name:":unlock:",value:"🔓"},{name:":bookmark:",value:"🔖"},{name:":link:",value:"🔗"},{name:":flashlight:",value:"🔦"},{name:":wrench:",value:"🔧"},{name:":hammer:",value:"🔨"},{name:":nut_and_bolt:",value:"🔩"},{name:":gun:",value:"🔫"},{name:":microscope:",value:"🔬"},{name:":telescope:",value:"🔭"},{name:":crystal_ball:",value:"🔮"},{name:":candle:",value:"🕯"},{name:":mantelpiece_clock:",value:"🕰"},{name:":linked_paperclips:",value:"🖇"},{name:":lower_left_ballpoint_pen:",value:"🖊"},{name:":lower_left_fountain_pen:",value:"🖋"},{name:":lower_left_paintbrush:",value:"🖌"},{name:":lower_left_crayon:",value:"🖍"},{name:":desktop_computer:",value:"🖥"},{name:":printer:",value:"🖨"},{name:":three_button_mouse:",value:"🖱"},{name:":trackball:",value:"🖲"},{name:":card_index_dividers:",value:"🗂"},{name:":card_file_box:",value:"🗃"},{name:":file_cabinet:",value:"🗄"},{name:":wastebasket:",value:"🗑"},{name:":spiral_note_pad:",value:"🗒"},{name:":spiral_calendar_pad:",value:"🗓"},{name:":compression:",value:"🗜"},{name:":old_key:",value:"🗝"},{name:":rolled_up_newspaper:",value:"🗞"},{name:":dagger_knife:",value:"🗡"},{name:":ballot_box_with_ballot:",value:"🗳"},{name:":moyai:",value:"🗿"},{name:":door:",value:"🚪"},{name:":smoking:",value:"🚬"},{name:":toilet:",value:"🚽"},{name:":shower:",value:"🚿"},{name:":bath:",value:"🛀"},{name:":bathtub:",value:"🛁"},{name:":couch_and_lamp:",value:"🛋"},{name:":sleeping_accommodation:",value:"🛌"},{name:":bellhop_bell:",value:"🛎"},{name:":bed:",value:"🛏"},{name:":hammer_and_wrench:",value:"🛠"},{name:":shield:",value:"🛡"},{name:":oil_drum:",value:"🛢"}],Symbols:[{name:":copyright:",value:"©"},{name:":registered:",value:"®"},{name:":bangbang:",value:"‼"},{name:":interrobang:",value:"⁉"},{name:":tm:",value:"™"},{name:":information_source:",value:"ℹ"},{name:":left_right_arrow:",value:"↔"},{name:":arrow_up_down:",value:"↕"},{name:":arrow_upper_left:",value:"↖"},{name:":arrow_upper_right:",value:"↗"},{name:":arrow_lower_right:",value:"↘"},{name:":arrow_lower_left:",value:"↙"},{name:":leftwards_arrow_with_hook:",value:"↩"},{name:":arrow_right_hook:",value:"↪"},{name:":eject:",value:"⏏"},{name:":fast_forward:",value:"⏩"},{name:":rewind:",value:"⏪"},{name:":arrow_double_up:",value:"⏫"},{name:":arrow_double_down:",value:"⏬"},{name:":black_right_pointing_double_triangle_with_vertical_bar:",value:"⏭"},{name:":black_left_pointing_double_triangle_with_vertical_bar:",value:"⏮"},{name:":black_right_pointing_triangle_with_double_vertical_bar:",value:"⏯"},{name:":double_vertical_bar:",value:"⏸"},{name:":black_square_for_stop:",value:"⏹"},{name:":black_circle_for_record:",value:"⏺"},{name:":m:",value:"Ⓜ"},{name:":black_small_square:",value:"▪"},{name:":white_small_square:",value:"▫"},{name:":arrow_forward:",value:"▶"},{name:":arrow_backward:",value:"◀"},{name:":white_medium_square:",value:"◻"},{name:":black_medium_square:",value:"◼"},{name:":white_medium_small_square:",value:"◽"},{name:":black_medium_small_square:",value:"◾"},{name:":ballot_box_with_check:",value:"☑"},{name:":radioactive_sign:",value:"☢"},{name:":biohazard_sign:",value:"☣"},{name:":orthodox_cross:",value:"☦"},{name:":star_and_crescent:",value:"☪"},{name:":peace_symbol:",value:"☮"},{name:":yin_yang:",value:"☯"},{name:":wheel_of_dharma:",value:"☸"},{name:":aries:",value:"♈"},{name:":taurus:",value:"♉"},{name:":gemini:",value:"♊"},{name:":cancer:",value:"♋"},{name:":leo:",value:"♌"},{name:":virgo:",value:"♍"},{name:":libra:",value:"♎"},{name:":scorpius:",value:"♏"},{name:":sagittarius:",value:"♐"},{name:":capricorn:",value:"♑"},{name:":aquarius:",value:"♒"},{name:":pisces:",value:"♓"},{name:":recycle:",value:"♻"},{name:":wheelchair:",value:"♿"},{name:":atom_symbol:",value:"⚛"},{name:":fleur_de_lis:",value:"⚜"},{name:":warning:",value:"⚠"},{name:":white_circle:",value:"⚪"},{name:":black_circle:",value:"⚫"},{name:":ophiuchus:",value:"⛎"},{name:":no_entry:",value:"⛔"},{name:":white_check_mark:",value:"✅"},{name:":heavy_check_mark:",value:"✔"},{name:":heavy_multiplication_x:",value:"✖"},{name:":latin_cross:",value:"✝"},{name:":star_of_david:",value:"✡"},{name:":eight_spoked_asterisk:",value:"✳"},{name:":eight_pointed_black_star:",value:"✴"},{name:":sparkle:",value:"❇"},{name:":x:",value:"❌"},{name:":negative_squared_cross_mark:",value:"❎"},{name:":question:",value:"❓"},{name:":grey_question:",value:"❔"},{name:":grey_exclamation:",value:"❕"},{name:":exclamation:",value:"❗"},{name:":heavy_heart_exclamation_mark_ornament:",value:"❣"},{name:":heart:",value:"❤"},{name:":heavy_plus_sign:",value:"➕"},{name:":heavy_minus_sign:",value:"➖"},{name:":heavy_division_sign:",value:"➗"},{name:":arrow_right:",value:"➡"},{name:":curly_loop:",value:"➰"},{name:":loop:",value:"➿"},{name:":arrow_heading_up:",value:"⤴"},{name:":arrow_heading_down:",value:"⤵"},{name:":arrow_left:",value:"⬅"},{name:":arrow_up:",value:"⬆"},{name:":arrow_down:",value:"⬇"},{name:":black_large_square:",value:"⬛"},{name:":white_large_square:",value:"⬜"},{name:":o:",value:"⭕"},{name:":wavy_dash:",value:"〰"},{name:":part_alternation_mark:",value:"〽"},{name:":congratulations:",value:"㊗"},{name:":secret:",value:"㊙"},{name:":a:",value:"🅰"},{name:":b:",value:"🅱"},{name:":o2:",value:"🅾"},{name:":parking:",value:"🅿"},{name:":ab:",value:"🆎"},{name:":cl:",value:"🆑"},{name:":cool:",value:"🆒"},{name:":free:",value:"🆓"},{name:":id:",value:"🆔"},{name:":new:",value:"🆕"},{name:":ng:",value:"🆖"},{name:":ok:",value:"🆗"},{name:":sos:",value:"🆘"},{name:":up:",value:"🆙"},{name:":vs:",value:"🆚"},{name:":koko:",value:"🈁"},{name:":sa:",value:"🈂"},{name:":u7121:",value:"🈚"},{name:":u6307:",value:"🈯"},{name:":u7981:",value:"🈲"},{name:":u7a7a:",value:"🈳"},{name:":u5408:",value:"🈴"},{name:":u6e80:",value:"🈵"},{name:":u6709:",value:"🈶"},{name:":u6708:",value:"🈷"},{name:":u7533:",value:"🈸"},{name:":u5272:",value:"🈹"},{name:":u55b6:",value:"🈺"},{name:":ideograph_advantage:",value:"🉐"},{name:":accept:",value:"🉑"},{name:":crossed_flags:",value:"🎌"},{name:":cinema:",value:"🎦"},{name:":checkered_flag:",value:"🏁"},{name:":atm:",value:"🏧"},{name:":waving_white_flag:",value:"🏳"},{name:":waving_black_flag:",value:"🏴"},{name:":heartbeat:",value:"💓"},{name:":broken_heart:",value:"💔"},{name:":two_hearts:",value:"💕"},{name:":sparkling_heart:",value:"💖"},{name:":heartpulse:",value:"💗"},{name:":cupid:",value:"💘"},{name:":blue_heart:",value:"💙"},{name:":green_heart:",value:"💚"},{name:":yellow_heart:",value:"💛"},{name:":purple_heart:",value:"💜"},{name:":gift_heart:",value:"💝"},{name:":revolving_hearts:",value:"💞"},{name:":heart_decoration:",value:"💟"},{name:":diamond_shape_with_a_dot_inside:",value:"💠"},{name:":speech_balloon:",value:"💬"},{name:":thought_balloon:",value:"💭"},{name:":100:",value:"💯"},{name:":name_badge:",value:"📛"},{name:":loudspeaker:",value:"📢"},{name:":mega:",value:"📣"},{name:":postal_horn:",value:"📯"},{name:":vibration_mode:",value:"📳"},{name:":mobile_phone_off:",value:"📴"},{name:":no_mobile_phones:",value:"📵"},{name:":signal_strength:",value:"📶"},{name:":twisted_rightwards_arrows:",value:"🔀"},{name:":repeat:",value:"🔁"},{name:":repeat_one:",value:"🔂"},{name:":arrows_clockwise:",value:"🔃"},{name:":arrows_counterclockwise:",value:"🔄"},{name:":low_brightness:",value:"🔅"},{name:":high_brightness:",value:"🔆"},{name:":mute:",value:"🔇"},{name:":speaker:",value:"🔈"},{name:":sound:",value:"🔉"},{name:":loud_sound:",value:"🔊"},{name:":bell:",value:"🔔"},{name:":no_bell:",value:"🔕"},{name:":radio_button:",value:"🔘"},{name:":back:",value:"🔙"},{name:":end:",value:"🔚"},{name:":on:",value:"🔛"},{name:":soon:",value:"🔜"},{name:":top:",value:"🔝"},{name:":underage:",value:"🔞"},{name:":keycap_ten:",value:"🔟"},{name:":capital_abcd:",value:"🔠"},{name:":abcd:",value:"🔡"},{name:":1234:",value:"🔢"},{name:":symbols:",value:"🔣"},{name:":abc:",value:"🔤"},{name:":six_pointed_star:",value:"🔯"},{name:":beginner:",value:"🔰"},{name:":trident:",value:"🔱"},{name:":black_square_button:",value:"🔲"},{name:":white_square_button:",value:"🔳"},{name:":red_circle:",value:"🔴"},{name:":large_blue_circle:",value:"🔵"},{name:":large_orange_diamond:",value:"🔶"},{name:":large_blue_diamond:",value:"🔷"},{name:":small_orange_diamond:",value:"🔸"},{name:":small_blue_diamond:",value:"🔹"},{name:":small_red_triangle:",value:"🔺"},{name:":small_red_triangle_down:",value:"🔻"},{name:":arrow_up_small:",value:"🔼"},{name:":arrow_down_small:",value:"🔽"},{name:":om_symbol:",value:"🕉"},{name:":menorah_with_nine_branches:",value:"🕎"},{name:":clock1:",value:"🕐"},{name:":clock2:",value:"🕑"},{name:":clock3:",value:"🕒"},{name:":clock4:",value:"🕓"},{name:":clock5:",value:"🕔"},{name:":clock6:",value:"🕕"},{name:":clock7:",value:"🕖"},{name:":clock8:",value:"🕗"},{name:":clock9:",value:"🕘"},{name:":clock10:",value:"🕙"},{name:":clock11:",value:"🕚"},{name:":clock12:",value:"🕛"},{name:":clock130:",value:"🕜"},{name:":clock230:",value:"🕝"},{name:":clock330:",value:"🕞"},{name:":clock430:",value:"🕟"},{name:":clock530:",value:"🕠"},{name:":clock630:",value:"🕡"},{name:":clock730:",value:"🕢"},{name:":clock830:",value:"🕣"},{name:":clock930:",value:"🕤"},{name:":clock1030:",value:"🕥"},{name:":clock1130:",value:"🕦"},{name:":clock1230:",value:"🕧"},{name:":left_speech_bubble:",value:"🗨"},{name:":right_anger_bubble:",value:"🗯"},{name:":triangular_flag_on_post:",value:"🚩"},{name:":no_entry_sign:",value:"🚫"},{name:":no_smoking:",value:"🚭"},{name:":put_litter_in_its_place:",value:"🚮"},{name:":do_not_litter:",value:"🚯"},{name:":potable_water:",value:"🚰"},{name:":non-potable_water:",value:"🚱"},{name:":no_bicycles:",value:"🚳"},{name:":no_pedestrians:",value:"🚷"},{name:":children_crossing:",value:"🚸"},{name:":mens:",value:"🚹"},{name:":womens:",value:"🚺"},{name:":restroom:",value:"🚻"},{name:":baby_symbol:",value:"🚼"},{name:":wc:",value:"🚾"},{name:":passport_control:",value:"🛂"},{name:":customs:",value:"🛃"},{name:":baggage_claim:",value:"🛄"},{name:":left_luggage:",value:"🛅"},{name:":place_of_worship:",value:"🛐"}],Flags:[{name:":flag-ac:",value:"🇦🇨"},{name:":flag-ad:",value:"🇦🇩"},{name:":flag-ae:",value:"🇦🇪"},{name:":flag-af:",value:"🇦🇫"},{name:":flag-ag:",value:"🇦🇬"},{name:":flag-ai:",value:"🇦🇮"},{name:":flag-al:",value:"🇦🇱"},{name:":flag-am:",value:"🇦🇲"},{name:":flag-ao:",value:"🇦🇴"},{name:":flag-aq:",value:"🇦🇶"},{name:":flag-ar:",value:"🇦🇷"},{name:":flag-as:",value:"🇦🇸"},{name:":flag-at:",value:"🇦🇹"},{name:":flag-au:",value:"🇦🇺"},{name:":flag-aw:",value:"🇦🇼"},{name:":flag-ax:",value:"🇦🇽"},{name:":flag-az:",value:"🇦🇿"},{name:":flag-ba:",value:"🇧🇦"},{name:":flag-bb:",value:"🇧🇧"},{name:":flag-bd:",value:"🇧🇩"},{name:":flag-be:",value:"🇧🇪"},{name:":flag-bf:",value:"🇧🇫"},{name:":flag-bg:",value:"🇧🇬"},{name:":flag-bh:",value:"🇧🇭"},{name:":flag-bi:",value:"🇧🇮"},{name:":flag-bj:",value:"🇧🇯"},{name:":flag-bl:",value:"🇧🇱"},{name:":flag-bm:",value:"🇧🇲"},{name:":flag-bn:",value:"🇧🇳"},{name:":flag-bo:",value:"🇧🇴"},{name:":flag-bq:",value:"🇧🇶"},{name:":flag-br:",value:"🇧🇷"},{name:":flag-bs:",value:"🇧🇸"},{name:":flag-bt:",value:"🇧🇹"},{name:":flag-bv:",value:"🇧🇻"},{name:":flag-bw:",value:"🇧🇼"},{name:":flag-by:",value:"🇧🇾"},{name:":flag-bz:",value:"🇧🇿"},{name:":flag-ca:",value:"🇨🇦"},{name:":flag-cc:",value:"🇨🇨"},{name:":flag-cd:",value:"🇨🇩"},{name:":flag-cf:",value:"🇨🇫"},{name:":flag-cg:",value:"🇨🇬"},{name:":flag-ch:",value:"🇨🇭"},{name:":flag-ci:",value:"🇨🇮"},{name:":flag-ck:",value:"🇨🇰"},{name:":flag-cl:",value:"🇨🇱"},{name:":flag-cm:",value:"🇨🇲"},{name:":flag-cn:",value:"🇨🇳"},{name:":flag-co:",value:"🇨🇴"},{name:":flag-cp:",value:"🇨🇵"},{name:":flag-cr:",value:"🇨🇷"},{name:":flag-cu:",value:"🇨🇺"},{name:":flag-cv:",value:"🇨🇻"},{name:":flag-cw:",value:"🇨🇼"},{name:":flag-cx:",value:"🇨🇽"},{name:":flag-cy:",value:"🇨🇾"},{name:":flag-cz:",value:"🇨🇿"},{name:":flag-de:",value:"🇩🇪"},{name:":flag-dg:",value:"🇩🇬"},{name:":flag-dj:",value:"🇩🇯"},{name:":flag-dk:",value:"🇩🇰"},{name:":flag-dm:",value:"🇩🇲"},{name:":flag-do:",value:"🇩🇴"},{name:":flag-dz:",value:"🇩🇿"},{name:":flag-ea:",value:"🇪🇦"},{name:":flag-ec:",value:"🇪🇨"},{name:":flag-ee:",value:"🇪🇪"},{name:":flag-eg:",value:"🇪🇬"},{name:":flag-eh:",value:"🇪🇭"},{name:":flag-er:",value:"🇪🇷"},{name:":flag-es:",value:"🇪🇸"},{name:":flag-et:",value:"🇪🇹"},{name:":flag-eu:",value:"🇪🇺"},{name:":flag-fi:",value:"🇫🇮"},{name:":flag-fj:",value:"🇫🇯"},{name:":flag-fk:",value:"🇫🇰"},{name:":flag-fm:",value:"🇫🇲"},{name:":flag-fo:",value:"🇫🇴"},{name:":flag-fr:",value:"🇫🇷"},{name:":flag-ga:",value:"🇬🇦"},{name:":flag-gb:",value:"🇬🇧"},{name:":flag-gd:",value:"🇬🇩"},{name:":flag-ge:",value:"🇬🇪"},{name:":flag-gf:",value:"🇬🇫"},{name:":flag-gg:",value:"🇬🇬"},{name:":flag-gh:",value:"🇬🇭"},{name:":flag-gi:",value:"🇬🇮"},{name:":flag-gl:",value:"🇬🇱"},{name:":flag-gm:",value:"🇬🇲"},{name:":flag-gn:",value:"🇬🇳"},{name:":flag-gp:",value:"🇬🇵"},{name:":flag-gq:",value:"🇬🇶"},{name:":flag-gr:",value:"🇬🇷"},{name:":flag-gs:",value:"🇬🇸"},{name:":flag-gt:",value:"🇬🇹"},{name:":flag-gu:",value:"🇬🇺"},{name:":flag-gw:",value:"🇬🇼"},{name:":flag-gy:",value:"🇬🇾"},{name:":flag-hk:",value:"🇭🇰"},{name:":flag-hm:",value:"🇭🇲"},{name:":flag-hn:",value:"🇭🇳"},{name:":flag-hr:",value:"🇭🇷"},{name:":flag-ht:",value:"🇭🇹"},{name:":flag-hu:",value:"🇭🇺"},{name:":flag-ic:",value:"🇮🇨"},{name:":flag-id:",value:"🇮🇩"},{name:":flag-ie:",value:"🇮🇪"},{name:":flag-il:",value:"🇮🇱"},{name:":flag-im:",value:"🇮🇲"},{name:":flag-in:",value:"🇮🇳"},{name:":flag-io:",value:"🇮🇴"},{name:":flag-iq:",value:"🇮🇶"},{name:":flag-ir:",value:"🇮🇷"},{name:":flag-is:",value:"🇮🇸"},{name:":flag-it:",value:"🇮🇹"},{name:":flag-je:",value:"🇯🇪"},{name:":flag-jm:",value:"🇯🇲"},{name:":flag-jo:",value:"🇯🇴"},{name:":flag-jp:",value:"🇯🇵"},{name:":flag-ke:",value:"🇰🇪"},{name:":flag-kg:",value:"🇰🇬"},{name:":flag-kh:",value:"🇰🇭"},{name:":flag-ki:",value:"🇰🇮"},{name:":flag-km:",value:"🇰🇲"},{name:":flag-kn:",value:"🇰🇳"},{name:":flag-kp:",value:"🇰🇵"},{name:":flag-kr:",value:"🇰🇷"},{name:":flag-kw:",value:"🇰🇼"},{name:":flag-ky:",value:"🇰🇾"},{name:":flag-kz:",value:"🇰🇿"},{name:":flag-la:",value:"🇱🇦"},{name:":flag-lb:",value:"🇱🇧"},{name:":flag-lc:",value:"🇱🇨"},{name:":flag-li:",value:"🇱🇮"},{name:":flag-lk:",value:"🇱🇰"},{name:":flag-lr:",value:"🇱🇷"},{name:":flag-ls:",value:"🇱🇸"},{name:":flag-lt:",value:"🇱🇹"},{name:":flag-lu:",value:"🇱🇺"},{name:":flag-lv:",value:"🇱🇻"},{name:":flag-ly:",value:"🇱🇾"},{name:":flag-ma:",value:"🇲🇦"},{name:":flag-mc:",value:"🇲🇨"},{name:":flag-md:",value:"🇲🇩"},{name:":flag-me:",value:"🇲🇪"},{name:":flag-mf:",value:"🇲🇫"},{name:":flag-mg:",value:"🇲🇬"},{name:":flag-mh:",value:"🇲🇭"},{name:":flag-mk:",value:"🇲🇰"},{name:":flag-ml:",value:"🇲🇱"},{name:":flag-mm:",value:"🇲🇲"},{name:":flag-mn:",value:"🇲🇳"},{name:":flag-mo:",value:"🇲🇴"},{name:":flag-mp:",value:"🇲🇵"},{name:":flag-mq:",value:"🇲🇶"},{name:":flag-mr:",value:"🇲🇷"},{name:":flag-ms:",value:"🇲🇸"},{name:":flag-mt:",value:"🇲🇹"},{name:":flag-mu:",value:"🇲🇺"},{name:":flag-mv:",value:"🇲🇻"},{name:":flag-mw:",value:"🇲🇼"},{name:":flag-mx:",value:"🇲🇽"},{name:":flag-my:",value:"🇲🇾"},{name:":flag-mz:",value:"🇲🇿"},{name:":flag-na:",value:"🇳🇦"},{name:":flag-nc:",value:"🇳🇨"},{name:":flag-ne:",value:"🇳🇪"},{name:":flag-nf:",value:"🇳🇫"},{name:":flag-ng:",value:"🇳🇬"},{name:":flag-ni:",value:"🇳🇮"},{name:":flag-nl:",value:"🇳🇱"},{name:":flag-no:",value:"🇳🇴"},{name:":flag-np:",value:"🇳🇵"},{name:":flag-nr:",value:"🇳🇷"},{name:":flag-nu:",value:"🇳🇺"},{name:":flag-nz:",value:"🇳🇿"},{name:":flag-om:",value:"🇴🇲"},{name:":flag-pa:",value:"🇵🇦"},{name:":flag-pe:",value:"🇵🇪"},{name:":flag-pf:",value:"🇵🇫"},{name:":flag-pg:",value:"🇵🇬"},{name:":flag-ph:",value:"🇵🇭"},{name:":flag-pk:",value:"🇵🇰"},{name:":flag-pl:",value:"🇵🇱"},{name:":flag-pm:",value:"🇵🇲"},{name:":flag-pn:",value:"🇵🇳"},{name:":flag-pr:",value:"🇵🇷"},{name:":flag-ps:",value:"🇵🇸"},{name:":flag-pt:",value:"🇵🇹"},{name:":flag-pw:",value:"🇵🇼"},{name:":flag-py:",value:"🇵🇾"},{name:":flag-qa:",value:"🇶🇦"},{name:":flag-re:",value:"🇷🇪"},{name:":flag-ro:",value:"🇷🇴"},{name:":flag-rs:",value:"🇷🇸"},{name:":flag-ru:",value:"🇷🇺"},{name:":flag-rw:",value:"🇷🇼"},{name:":flag-sa:",value:"🇸🇦"},{name:":flag-sb:",value:"🇸🇧"},{name:":flag-sc:",value:"🇸🇨"},{name:":flag-sd:",value:"🇸🇩"},{name:":flag-se:",value:"🇸🇪"},{name:":flag-sg:",value:"🇸🇬"},{name:":flag-sh:",value:"🇸🇭"},{name:":flag-si:",value:"🇸🇮"},{name:":flag-sj:",value:"🇸🇯"},{name:":flag-sk:",value:"🇸🇰"},{name:":flag-sl:",value:"🇸🇱"},{name:":flag-sm:",value:"🇸🇲"},{name:":flag-sn:",value:"🇸🇳"},{name:":flag-so:",value:"🇸🇴"},{name:":flag-sr:",value:"🇸🇷"},{name:":flag-ss:",value:"🇸🇸"},{name:":flag-st:",value:"🇸🇹"},{name:":flag-sv:",value:"🇸🇻"},{name:":flag-sx:",value:"🇸🇽"},{name:":flag-sy:",value:"🇸🇾"},{name:":flag-sz:",value:"🇸🇿"},{name:":flag-ta:",value:"🇹🇦"},{name:":flag-tc:",value:"🇹🇨"},{name:":flag-td:",value:"🇹🇩"},{name:":flag-tf:",value:"🇹🇫"},{name:":flag-tg:",value:"🇹🇬"},{name:":flag-th:",value:"🇹🇭"},{name:":flag-tj:",value:"🇹🇯"},{name:":flag-tk:",value:"🇹🇰"},{name:":flag-tl:",value:"🇹🇱"},{name:":flag-tm:",value:"🇹🇲"},{name:":flag-tn:",value:"🇹🇳"},{name:":flag-to:",value:"🇹🇴"},{name:":flag-tr:",value:"🇹🇷"},{name:":flag-tt:",value:"🇹🇹"},{name:":flag-tv:",value:"🇹🇻"},{name:":flag-tw:",value:"🇹🇼"},{name:":flag-tz:",value:"🇹🇿"},{name:":flag-ua:",value:"🇺🇦"},{name:":flag-ug:",value:"🇺🇬"},{name:":flag-um:",value:"🇺🇲"},{name:":flag-us:",value:"🇺🇸"},{name:":flag-uy:",value:"🇺🇾"},{name:":flag-uz:",value:"🇺🇿"},{name:":flag-va:",value:"🇻🇦"},{name:":flag-vc:",value:"🇻🇨"},{name:":flag-ve:",value:"🇻🇪"},{name:":flag-vg:",value:"🇻🇬"},{name:":flag-vi:",value:"🇻🇮"},{name:":flag-vn:",value:"🇻🇳"},{name:":flag-vu:",value:"🇻🇺"},{name:":flag-wf:",value:"🇼🇫"},{name:":flag-ws:",value:"🇼🇸"},{name:":flag-xk:",value:"🇽🇰"},{name:":flag-ye:",value:"🇾🇪"},{name:":flag-yt:",value:"🇾🇹"},{name:":flag-za:",value:"🇿🇦"},{name:":flag-zm:",value:"🇿🇲"},{name:":flag-zw:",value:"🇿🇼"}]};
//# sourceMappingURL=hu-emoji.min.js.map


/**************************************************************
  RICH TEXT CLASS
  - Description: App for string conversion to DOM
***************************************************************/
var RichTextApp = function(options) {

  this.DEFAULTS = {
    linkify: {
      enable: true,
      class: 'hu-link',
      class_big: 'hu-big',
    },
    symbols: {
      '*': {
        class: 'wz-bold'
      },
      '_': {
        class: 'wz-italic'
      }
    }
  };

  this.extendDefaults = function(defaults, options) {
    for (var key in options) {
      if (options.hasOwnProperty(key) && defaults.hasOwnProperty(key)) {
        defaults[key] = options[key];
      }
    }
    return defaults;
  };

  this.options = this.extendDefaults(this.DEFAULTS, options);
  this.symbols = Object.keys(this.options.symbols);

  this.format = function(input) {

    if (!input || input == '')
      return {
        raw: '',
        formatless: '',
        formatted: '',
      };

    var str = input, rawStr = '', self = this;

    str = str.replace(/(\{html\}[\s\S]*?{\/html})|(\{verbatim\}[\s\S]*?{\/verbatim})/g, '¡çÇ!$&¡çÇ!');

    str = str.split('¡çÇ!').map(function(vb) {
      // VERBATIM
      if (vb.match(/\{verbatim\}[\s\S]*?{\/verbatim}/g) != null) {
        // console.log('[verbatim]: '+vb);
        var res = vb.replace(/\{verbatim\}([\s\S]*?){\/verbatim}/g, '$1');
        return self.escapeSpecialChars(res);
      // HTML
      } else if (vb.match(/\{html\}[\s\S]*?{\/html}/g) != null) {
        // console.log('[html]: '+vb);
        return vb.replace(/\{html\}([\s\S]*?){\/html}/g, '$1');
      // SYMBOLS
      } else {
        // Cada línea es independiente
        return vb.split(/\r?\n/g).map(function(l) {
          // Aplicamos linkify
          if (self.options.linkify.enable === true)
            l = self.linkify(l);
          // No modificar los elementos del DOM <*>...</*>
          l = l.replace(/(<.*>.*<.*>)/g, '¡çÇ!$1¡çÇ!');
          return l.split('¡çÇ!').map(function(it) {
            // Aplicar conversión simbólica
            return self.symbolParse(it);
          }).join('');
        }).join('\n');
      }
    }).join('');

    var div = document.createElement('div');
    div.innerHTML = str;
    rawStr = div.textContent;

    return {
      raw: rawStr || '',
      formatless: self.escapeSpecialChars(rawStr) || '',
      formatted: str || '',
    };
  };

  this.symbolParse = function(str) {
    // No hacer nada si no hay string o dicho string ya es un elemento inmutable del DOM o un verbatim
    if (!str)
      return '';
    else if (str.match(/<.*>.*<.*>/g) != null)
      return str;

    // Obtener nodos de formato
    var formatNodes = this.getFormatNodes(str);
    // Una vez obtenidos los nodos de formato:
    // Limpiamos los nodos sin terminación.
    formatNodes = this.cleanFormatNodes(formatNodes.slice(0));
    // Dividir cadena en secciones
    var sections = this.getNodeSections(str, formatNodes);
    // Transformar en span cada sección, según símbolo.
    var result = this.nodeProcessor(sections, formatNodes).join('');

    return result;
  };

  /**
   * Get symbol nodes
   * @param  {String} str Processed string
   * @return {Array} Nodes
   */
  this.getFormatNodes = function(str) {
    // formatNodes guarda los nodos encontrados en la cadena
    var formatNodes = [], lastIndexWasSymbol = false;
    for (var i = 0; i < str.length; i++) {
      // Busco si existe alguna coincidencia del símbolo encontrado con nuestro diccionario de símbolos
      var discover = this.discoverSymbol(str.slice(i));
      if (discover.state == true) {
        // Comprobar si es un símbolo de cierre:
        var lastNode = formatNodes[formatNodes.length - 1];
        // - Comprobando si coincide con algún símbolo del último nodo
        var isClosingSymbol = (lastNode) ? (lastNode.symbols.indexOf( discover.symbol ) > -1) : false;
        if (isClosingSymbol == true) {
          // Si es símbolo de cierre, nuevo nodo con substracción
          formatNodes.push(
            this.createSubstractorNode(discover.symbol, i, lastNode)
          );
          lastIndexWasSymbol = true;
        } else {
          // Si no es de cierre, nuevo nodo con adición
          // Pero sólo si es comienzo de palabra, para evitar conversiones indeseadas de símbolos internos:
          // Es comienzo de palabra si:
          // - El índice anterior corresponde a un símbolo.
          // - El índice anterior es un espacio vacío o en blanco.

          var prevChar = str.charAt(i - 1);
          if (lastIndexWasSymbol || [ '', ' ' ].indexOf(prevChar) > -1) {
            formatNodes.push(
              this.createAdderNode(discover.symbol, i, lastNode)
            );
            lastIndexWasSymbol = true;
          }
        }
      } else {
        lastIndexWasSymbol = false;
      }
      // Salta tantas posiciones como longitud de símbolo;
      i += (discover.symbol) ? (discover.symbol.length - 1) : 0;
    }

    // Definición de primer nodo, aunque no tenga símbolo
    if (!formatNodes[0] || formatNodes[0].index != 0) {
      formatNodes.unshift(
        new RichTextApp.FormatNode({ index: 0, symbols: [] })
      );
    }

    return formatNodes;
  };

  /**
   * Búsqueda de símbolos.
   * - Dada una cadena '*' y unos símbolos {'*':{}}
   * - La función devuelve {state:true, symbol:'*'}
   * @param  {String} str
   * @return {Object}  Ejemplo: {state:Boolean, symbol:String}
   */
  this.discoverSymbol = function(str) {
    // Voy descartando hasta que queda un resultado
    var matches = this.symbols;
    var symbol;

    matches = matches.filter(function(el, i) {
      return el == str.slice(0, el.length);
    });
    // Selecciono la concordancia de mayor longitud
    symbol = matches.sort(function(a, b) {
      return b.length - a.length;
    })[0];

    return {
      state: symbol != undefined,
      symbol: symbol
    };
  };

  /*
   * - Cada nodo añade o quita un único símbolo.
   * - Un nodo substractor está formado por los símbolos anteriores menos el coincidente.
   * - Un nodo sumador está formado por los símbolos anteriores más el añadido.
   */
  this.createSubstractorNode = function(symbol, i, node) {
    return new RichTextApp.FormatNode({
      index: i,
      symbols: node.symbols.slice(0).filter(function(el, i) {
        return el != symbol;
      })
    })
  };

  this.createAdderNode = function(symbol, i, node) {
    return new RichTextApp.FormatNode({
      index: i,
      symbols: (node) ? (function() {
        var _node = node.symbols.slice(0);
        _node.push(symbol);
        return _node;
      })() : [symbol]
    });
  };

  /**
   * La limpieza de nodos se basa en los siguientes principios:
   * -
   */
  this.cleanFormatNodes = function(nodes) {
    var pointer = nodes.length - 1;
    if (!nodes[pointer])
      return nodes;
    if (nodes[pointer].symbols.length == 0)
      return nodes;

    var cleanNodes = nodes.slice(0);
    // Si el último nodo tiene símbolos, éstos no tienen terminación
    // Selección de símbolos del último nodo.
    var symbols = nodes[pointer].symbols;
    var done = symbols.map(function() { return false });

    while (pointer > -1) {
      for (var i = 0; i < symbols.length; i++) {
        // Elimina el/los símbolos afectados
        if (!cleanNodes[pointer].hasSymbol(symbols[i]))
          done[i] = true;
        if (!done[i])
          cleanNodes[pointer].removeSymbol(symbols[i]);
      }
      if (cleanNodes[pointer + 1]) {
        if (JSON.stringify(cleanNodes[pointer + 1].symbols) == JSON.stringify(cleanNodes[pointer].symbols)) {
          // Remove duplicated node
          cleanNodes.splice(pointer + 1, 1);
        }
      }
      pointer--;
    }
    return cleanNodes;
  };

  // Devuelve la cadena dividida en secciones
  // - Cada sección es la determinada por los índices de cada nodo
  this.getNodeSections = function(str, nodes) {
    var sections = [];
    for (var i = 0; i < nodes.length; i++) {
      var start = nodes[i].index;
      var end = (nodes[i + 1]) ? (nodes[i + 1].index) : (str.length);
      sections.push( str.slice(start, end) );
    }
    return sections;
  };

  /**
   *
   * @param  {[type]} sections [description]
   * @param  {[type]} nodes    [description]
   * @return {Array} ['<span>hola</span>', '']
   */
  this.nodeProcessor = function(sections, nodes) {
    var self = this;
    return sections.map(function(el, i) {
      var _symbols = (nodes[i - 1]) ? (nodes[i - 1].symbols) : false;
      return self.spanify(el, nodes[i].symbols, _symbols);
    });
  };

  /**
   * Conversión a span si el nodo es cerrado.
   * Un nodo es cerrado si un símbolo del nodo actual coincide con un símbolo del nodo anterior.
   * @param  {String} str       Contenido del span
   * @param  {Array} symArray  ['*', '_']
   * @param  {Array} _symArray ['*']
   * @return {String}
   */
  this.spanify = function(str, symArray, _symArray) {
    var self = this;
    // Eliminación de símbolos
    var pattern = symArray.map(function(el, i) {
      return self.escapeRegExp(el);
    });
    // Los símbolos del nodo anterior también deben ser borrados
    if (_symArray)
      pattern = pattern.concat(_symArray.map(function(el, i) {
        return self.escapeRegExp(el);
      }));
    pattern = pattern.join('|');
    var re = new RegExp('^(' + pattern + ')*', 'g');
    str = str.replace(re, '');

    // Span classes
    var classes = symArray.map(function(el) {
      return self.options.symbols[el].class;
    });

    if (classes.length > 0) {
      return '<span class="rich-text ' + classes.join(' ') + '">' + this.escapeSpecialChars(str) + '</span>';
    } else {
      return this.escapeSpecialChars(str);
    }
  };

  this.escapeRegExp = function(str) {
    if (!str)
      return '';
    var specials = ["-", "[", "]", "/", "{", "}", "(", ")", "*", "+", "?", ".", "\\", "^", "$", "|"];
    var regex = RegExp('[' + specials.join('\\') + ']', 'g');
    return str.replace(regex, "\\$&");
  };

  /**
   * Conversión de caracteres especiales html:
   * - '<span>' => '&lt;span&gt;'
   */
  this.escapeSpecialChars = function(str) {
    if (!str)
      return '';

    var entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    return String(str).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  };

  /**
   * Patrones URL reconocidos:
   * - www.
   * - http://
   * - https://
   * Patrones estilizados:
   * - www.[content]!!
   */
  this.linkify = function(str) {
    if (!str)
      return '';

    var self = this;

    var urlPattern = /\b((?:https?:\/\/|ftp:\/\/|www\.[\S])[a-z0-9-+&@#\/%?=~_|:,.;]*)(\[(?:.*)\])*(?:!!)*/gim;

    var result = [];

    var occ = str.match(urlPattern);
    if (occ !== null) {
      for (var i = 0; i < occ.length; i++) {
        var data = {
          index: str.indexOf(occ),
          match: occ[i],
          replacement: getReplacement(occ[i]),
        };
        result.push(data);
      }
    }

    // Final Replacements
    for (var n = 0; n < result.length; n++) {
      str = str.replace(result[n].match, result[n].replacement);
    }

    return str;

    function getReplacement(input) {
      var isTitle = input.slice(input.length-2, input.length) == '!!';
      var hasContent = input.match(/\[.*\]/g) != null;
      var startsWithWWW = input.slice(0, 4) == 'www.';

      // Classes
      var b = (isTitle) ? self.options.linkify.class + ' ' + self.options.linkify.class_big : self.options.linkify.class;

      // Content:
      // · http://www.helloumi.com[helloumi]!!
      var c = (isTitle) ? input.slice(0, input.length-2) : input;
      // · http://www.helloumi.com[helloumi]
      c = (hasContent) ? c.replace(/(^.*)\[(.*)\](.*)/g, '$2') : c;
      // · helloumi

      // Reference:
      // · www.helloumi.com[helloumi]!!
      var a = (isTitle) ? input.slice(0, input.length-2) : input;
      // · www.helloumi.com[helloumi]
      a = (hasContent) ? a.replace(/(^.*)\[(.*)\](.*)/g, "$1") : a;
      // · www.helloumi.com
      a = (startsWithWWW) ? 'http://'.concat(a) : a;
      // · http://www.helloumi.com

      return '<a href="' + a + '" class="rich-text ' + b + '" target="_blank">' + c + '</a>';
    }
  };
};

/**************************************************************
  FORMAT NODE CLASS
  - Description: Basic Unit that contains symbols info
***************************************************************/
RichTextApp.FormatNode = function(params) {
  this.index = (params.index > -1) ? params.index : -1;
  this.symbols = params.symbols || [];

  this.hasSymbol = function(sym) {
    return this.symbols.indexOf(sym) > -1;
  };

  this.removeSymbol = function(sym) {
    this.symbols = this.symbols.filter(function(el, i) {
      return el != sym;
    });
  };
};


RichTextApp.VERSION = '1.0.5';

/**
 * Helloumi's Live Chat - CORE
 *
 * @constructor
 * @param {Object} config - Umichat custom config (JSON)
 */
 function UmichatCore(config){
  // Config setup
  var defaultConfig = {
    // Firebase default config
    apiKey: "AIzaSyD4wTyIVAW_KXbgCFMUpbj-CwGpc3VRp5g",
    authDomain: "daisho-debug-5e803.firebaseapp.com",
    databaseURL: "https://daisho-debug-5e803.firebaseio.com",
    storageBucket: "daisho-debug-5e803.appspot.com",
    // Widget config
    staticUrl: null,
    serverUrl: null,
    channelToken : null,
    customerToken: (config.channelToken) ? localStorage.getItem('helloumi-webchat-customer-' + config.channelToken) : null,
    customerName: null,
    customData: {},
    metaDataInfo: null,
    enabledMetaData : true,
    version:'0.0.0',
    initialMessage: false,
  };
  this.config = helloumi.utils.core.extend(defaultConfig,config);
  // Umichat's core namespace
  helloumi.utils.core.createNameSpace('helloumi.webchat.umichatcore');
  helloumi.webchat.umichatcore = this;
  this.brandstatus = 0;
  this.typingState = false;
  this.redirecting = false;
  // Checks for URL's last slash
  if (this.config.serverUrl && this.config.serverUrl.substr(-1) !== '/') this.config.serverUrl = this.config.serverUrl + "/";
  if (this.config.staticUrl && this.config.staticUrl.substr(-1) !== '/')this.config.staticUrl = this.config.staticUrl + "/";

  // Initializes firebase and then UI
  this.initMessageServer( this.initGUI.bind(this) );
};

// Agents data, ie:
//   agentId : {
//    xhr: null,
//    name: null,
//    avatar: null,
//    avatarLoaded: false,
//   }
UmichatCore.prototype.agents = {};

// Stores unreaded message keys
UmichatCore.prototype.unreadMessages = [];



UmichatCore.prototype.redirectMesssages = function redirectMesssages( receiver ){
  if ( typeof(receiver) == 'function' ){
    this.redirecting = receiver;
  } else {
    this.redirecting = false;
  }
};

/**
 * Updates umichat config
 * @param  {object} config - Umichat custom config (JSON)
 */
UmichatCore.prototype.updateConfig = function updateConfig(config){
  this.config = helloumi.utils.core.extend(this.config,config);
  // Checks for URL's last slash
  if (this.config.serverUrl && this.config.serverUrl.substr(-1) !== '/') this.config.serverUrl = this.config.serverUrl + "/";
  if (this.config.staticUrl && this.config.staticUrl.substr(-1) !== '/')this.config.staticUrl = this.config.staticUrl + "/";
};

/**
 * Sends a message to helloumi servers
 * @param  {formData} formdata       all data info for sending to backend
 * @param  {function} [success=null] callback function if success on send
 * @param  {function} [error=null]   callback function if error on send
 */
UmichatCore.prototype.sendMessage = function sendMessage(formdata,success,error){
  if (this.redirecting) {
    if (helloumi.utils.environment['formDataGet']) {
      this.redirecting( formdata.get('message') );
    } else {
      this.redirecting( formdata.message ); // Hack for iOS/IE
    }
  } else {
    var request = new XMLHttpRequest();
    formdata.append('version',this.config.version);
    // Populate formData
    formdata.append('channel_token',this.config.channelToken);
    if (this.config.customerToken !== null) {
      formdata.append('customer_token',this.config.customerToken);
    } else {
      this.gui.showLoader();
      this.gui.disableTextarea();
    }
    formdata.append('custom_data',JSON.stringify(this.config.customData));
    if (this.config.customerName !== null) formdata.append('customer_name',this.config.customerName);
    formdata.append('metadata_info',JSON.stringify(this.config.metaDataInfo));
    this.config.metaDataInfo = null;
    request.open('POST',this.config.serverUrl + "webchat/send/");
    request.onload = function onloadsendMessage(oEvent){
        if (request.status == 200) {
          if(typeof(success) !== 'undefined') success(oEvent);
        }
        else {
          if(typeof(error) !== 'undefined') error(oEvent);
        }
    }
    request.send(formdata);
  }
};

/**
 * Callback when a message is sent from user
 * @param  {object} data - Data received from server (may contain a customer token)
 */
UmichatCore.prototype.messageSent = function messageSent(data){
  this.trigger('messageSent', data);
  // If user has no customer token we receive it in the POST response
  if ( !this.config.customerToken || (data.customer_token && (this.config.customerToken !== data.customer_token)) ){
    this.authMessageServer(data);
    this.gui.enableTextarea();
  }
};

/**
 * Initializes messaging service
 * @param  {object} data - Data received from server (should contain a customer token)
 */
UmichatCore.prototype.initGUI = function initGUI(){
  this.gui = new UmichatGUI(this.config);
  if (this.config.enabledMetaData) this.setCustomerInfo();
  this.lastMessageBrand = 0;
  this.render();
  if (this.config.initialMessage) this.sendHiddenMessage(this.config.initialMessage);
}

/**
 * Initializes messaging service
 * @param  {Function} callbackFn - Function to be executed on service up
 */
UmichatCore.prototype.initMessageServer = function initMessageServer( callbackFn ){
  var self = this;
  self.messageservice = new UmiMessageService(self.config);
  self.messageservice.init().then(
    function() {
      var configResult = self.messageservice.getConfig();
      if (configResult) {
        configResult.then( callbackFn );
      } else {
        callbackFn();
      }

    }
  );
}

/**
 * Authenticates user in messaging service
 * @param  {object} data - Data received from server (should contain a customer token)
 */
UmichatCore.prototype.authMessageServer = function authMessageServer(data){
  var self = this;
  var jData = JSON.parse(data.target.response);

  // Checks for customer token
  if ( jData.customer_token ) {
    if (!self.config.customerToken) self.config.customerToken = {};
    self.config.customerToken = jData.customer_token;
    localStorage.setItem("helloumi-webchat-customer-" + self.config.channelToken, self.config.customerToken);
  } else {
    // TODO: Error cuando no se recibe token en la respuesta y no hay ninguno guardado
  }

  // Starts messaging service
  self.messageservice.auth(jData).then(function(){
    self.messageservice.getAllMessages().then(function(){
      self.messageservice.setChatListeners();
      self.gui.hideLoader(); // Hides preloader
    });
  });
};

/**
 * Authenticates a customer with an existing token (stored in localStorage)
 * @param  {function} [success=null] callback function if success on send
 */
UmichatCore.prototype.customerAuth = function customerAuth(success){
  var self = this;
  var request = new XMLHttpRequest();
  var formdata = new FormData();
  request.open('POST',self.config.serverUrl + "webchat/get_firebase/");
  formdata.append('channel_token',self.config.channelToken);
  if (self.config.customerToken) {
    formdata.append('customer_token',self.config.customerToken);
  }
  request.onload = function onloadsendMessage(oEvent){
      if (request.status == 200) {
        // Launch success callback
        if(typeof(success) !== 'undefined') success(oEvent);
      }
      else {
        // Customer token error
        if (self.config.customerToken) {
          self.config.customerToken = null;
          localStorage.removeItem("helloumi-webchat-customer-" + self.config.channelToken);
          self.gui.hideLoader();
        }
      }
  }
  request.onerror = function(){
    // Customer token error
    if (self.config.customerToken) {
      self.config.customerToken = null;
      localStorage.removeItem("helloumi-webchat-customer-" + self.config.channelToken);
      self.gui.hideLoader();
    }
  }
  request.send(formdata);
};

/**
 * Process message info to show into widget
 * @param  {Object} messageData - All message info
 * @param  {Boolean} executeEvents - if true, trigger associated events
 */
UmichatCore.prototype.loadMessage = function loadMessage( messageData, executeEvents ) {
  // Clone messageData
  var data = helloumi.utils.core.extend( {}, messageData );
  var triggeredEvent;
  if(typeof(data.samurai) !== 'undefined'){
  	if(data.timestamp > this.lastMessageBrand){
  		this.lastMessageBrand = data.timestamp;

  		var status = data.type === 'dialog' || data.type === 'menu' ? 'pick-option':'pick-data';
  		var agent = 'ronin';
  		if(data.samurai > 0 ){
  			var agent = 'agent';
  			status = '';
  		}
  		this.gui.setAssigned(agent);
  		this.gui.setStatus(status);
  		var textboxstatus = 'hidden';
  		if(typeof(data.extra_data) !== 'undefined'){
        // hidetextbox
  			if(typeof(data.extra_data['hidetextbox']) !== 'undefined')
  				textboxstatus = data.extra_data['hidetextbox']?'hidden':'show';
  			else
  				textboxstatus = 'show';
        // event trigger
        // if (typeof(data.extra_data['event']) !== 'undefined' && executeEvents === true) {
        //   triggeredEvent = data.extra_data['event'];
        //   console.log('Event associated: '+triggeredEvent);
        // }
  		}
  		this.gui.setTextBoxStatus(textboxstatus);
  	}
  }
  if( this.messageIsValid( messageData ) ) {
    // Generates custom message attributes
    var datetime = new Date( data.timestamp * 1000 );
    data['time'] = helloumi.utils.date.hhmm( datetime );
    data['day'] = helloumi.utils.date.yyyymmdd( datetime );
    data['readClass'] = ( data.read ) ? 'hu-js-readed' : '';
    data['authorClass'] = ( data.samurai || data.samurai == 0 )
                        ? 'hu-messenger-message-brand' : 'hu-messenger-message-user';

    // If brand message
    if (data.samurai || data.samurai == 0 ) {
      // Check for agent data
      this.checkAgentData( data.samurai );
      // Check if unreaded
      this.checkUnreadMessage( data );
    }

    // Stores message
    this.messageservice.storeMessage( data, data.key );

    // Loads message in UI
    this.gui.loadMessage( data, false, executeEvents );
    // Removes message sent preloader (pending status)
    this.gui.deleteGhost( data );
  }
};

/**
 * Check unread messages
 * @param {Object} data - message data
 */
UmichatCore.prototype.checkUnreadMessage = function checkUnreadMessage( data ) {
  var _unreadMessages = this.unreadMessages.slice(0);
  if (this.gui.container.className != "hu-js-closed" && document.hasFocus()) {
    helloumi.webchat.umichatcore.refreshUnreadNotification([]);
  } else {
    if ( data.read === true ) {
      var index = _unreadMessages.indexOf( data.key);
      if (index !== -1) _unreadMessages.splice( index, 1 );
    } else {
      _unreadMessages.push( data.key );
    }
    if (_unreadMessages.length != this.unreadMessages.length )
      this.refreshUnreadNotification( _unreadMessages );
  }
};

/**
 * Refresh unread messages and updates UI notification
 * @param {Object} data - message data
 */
UmichatCore.prototype.refreshUnreadNotification = function refreshUnreadNotification( unreadMessages ) {
  this.unreadMessages = unreadMessages.slice(0);
  this.gui.refreshUnreadNotification();
};

/**
 * Check for updates in agents info
 * @param {String} id - Agent Id
 */
UmichatCore.prototype.checkAgentData = function checkAgentData( id ) {
  var self = this;
  var agentId = parseInt(id);
  if ( typeof agentId == "number"){
    var agent = self.agents[ agentId ];
    if ( !agent ) {
      var storedName = localStorage.getItem('helloumi-webchat-agent-default-name-' + this.config.channelToken);
      var storedAvatar = localStorage.getItem('helloumi-webchat-agent-default-avatar-' + this.config.channelToken);
      if (agentId == 0 && storedName && storedAvatar) {
        agent = self.agents[ agentId ] = {
          name: storedName,
          avatar: storedAvatar,
          xhr: null,
          avatarLoaded: true,
        }
        self.gui.updateAgentAvatar(agentId, agent);
      } else {
        agent = self.agents[ agentId ] = {
          name: null,
          avatar: self.config.brandIcon || this.config.staticUrl + "webchat/img/default-avatar.png",
          xhr: null,
          avatarLoaded: false,
        }
      }
    }
    if (!agent.avatarLoaded && (!agent.xhr || (agent.xhr.readyState == 4 && agent.xhr.status != 200) )) {// TODO: || agent.xhr.status KO
      agent.xhr = new XMLHttpRequest();
      if ( agentId == 0 ) {
        // Get random info from randomuser.me
        agent.xhr.open('GET', 'https://randomuser.me/api/?inc=picture,name&gender=female', true);
      } else {
        // Get agent info from helloumi
        agent.xhr.open('POST', self.config.serverUrl + "webchat/get_agent/", true);
      }

      agent.xhr.onreadystatechange = function () {
        if (agent.xhr.readyState == 4 && agent.xhr.status == 200) {
          var data, dataTmp = JSON.parse(agent.xhr.responseText);
          if ( agentId == 0 ) {
            data = {
              name: dataTmp.results[0].name.first.capitalizeFirstLetter() + ' ' + dataTmp.results[0].name.last.capitalizeFirstLetter(),
              avatar: dataTmp.results[0].picture.thumbnail,
            };
          } else {
            data = dataTmp;
          }
          self.agents[ agentId ] = helloumi.utils.core.extend(agent, data);
          self.gui.updateAgentAvatar(agentId, data);
        } else if (agent.xhr.readyState == 4) {
          if (self.config.brandIcon) {
            console.log("[Helloumi-Webchat] Error retrieving agent (" + agentId + ") info, using brand icon")
            self.agents[ agentId ].avatar = self.config.brandIcon;
          } else {
            console.log("[Helloumi-Webchat] Error retrieving agent (" + agentId + ") info, using default icon")
          }
          self.gui.updateAgentAvatar(agentId, self.agents[ agentId ]);
        }
        agent.avatarLoaded = true;
      }
      if ( agentId == 0 ) {
        agent.xhr.send();
      } else {
        agent.xhr.send(JSON.stringify({
          'agent_id': agentId,
          'channel_token': self.config.channelToken,
        }));
      }
    }
  }
};

/**
 * Delete message
 * @param  {Object} messageData All message data
 */
UmichatCore.prototype.deleteMessage = function deleteMessage( messageData ) {
  var index = this.unreadMessages.indexOf( messageData.key );
  if ( index !== -1) {
    refreshUnreadNotification( unreadMessages.slice(0).splice( index, 1) );
  }
  this.gui.deleteMessage( messageData );
};

/**
 * Delete message
 * @return {number} - Unread messages count
 */
UmichatCore.prototype.getUnreadCount = function getUnreadCount() {
  return this.unreadMessages.length;
};

/**
 * Set message as readed
 * @param {String} msgKey message key
 */
UmichatCore.prototype.setReaded = function setReaded( msgKey ) {
  this.gui.setReaded( msgKey );
};

/**
 * Checks if given message it's allowed to be printed to user
 * @param {Object} messageData - Message data
 * @return {Boolean}

 */
UmichatCore.prototype.messageIsValid = function messageIsValid(messageData) {
  var validTypes = ['text','image','video','document','location','dialog','menu'];
  return (validTypes.indexOf(messageData.type) >= 0);
};

/**
 * Checks if given message it's allowed to be printed to user
 */
UmichatCore.prototype.render = function render() {
  this.gui.render();
  this.trigger('render');
};

UmichatCore.prototype.setCustomerInfo = function setCustomerInfo() {
	this.config.metaDataInfo = helloumi.utils.core.getCustomerInfo();
};

/**
 * Set internal control variable and render brand status indicator
 * @param {Integer} status - 0:offline,1:online,2:busy
 */
UmichatCore.prototype.setBrandStatus = function setBrandStatus(status) {
	this.brandstatus = status;
	this.gui.setBrandStatus(status);
};

UmichatCore.prototype.getBrandStatus = function getBrandStatus() {
	return this.brandstatus;
}
/**
 * Will store defined listeners
 */
UmichatCore.prototype.listeners = {};

/**
 * Attach an event handler function for one event
 * @param {String} eventType - Event type
 * @param {Function} callbackFn - Callback
 */
UmichatCore.prototype.on = function on(eventType, callbackFn) {
  var listeners = this.listeners[ eventType ];
	if ( typeof(listeners) != 'undefined' ){
    if ( listeners.indexOf(callbackFn) == -1 ) {
      listeners.push( callbackFn );
    }
  } else {
    this.listeners[ eventType ] = [ callbackFn ];
  }
};

/**
 * Dettach an event handler function for one event type
 * If no callbackFn specified will dettach all event's handlers
 * @param {String} eventType - Event type
 * @param {Function} callbackFn - Callback (optional)
 */
UmichatCore.prototype.off = function off(eventType, callbackFn) {
  var listeners = this.listeners[ eventType ];
	if ( typeof(listeners) != 'undefined' ){
    if (callbackFn) {
      var index = listeners.indexOf(callbackFn);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    } else {
      delete this.listeners[ eventType ];
    }
  }
};

/**
 * Execute all handlers attached to an eventType
 * @param {String} eventType - Event type
 * @param {Object} data - Event data
 */
UmichatCore.prototype.trigger = function trigger(eventType, data) {
  var listeners = this.listeners[ eventType ];
  if ( typeof(listeners) != 'undefined' ){
    for (var i=0; i<listeners.length; i++) {
      if ( typeof(listeners[i]) == "function" ) listeners[i]( data );
    }
  }
};

/**
 * Set internal typing control variable and render/remove typing view
 * @param {String} id - Samurai id
 */
UmichatCore.prototype.setTypingState = function setTypingState(samuraiID) {
	this.typingState = samuraiID;
	if(samuraiID !== "" ) this.gui.setTypingMessage(samuraiID);
	else this.gui.removeTypingMessage();
};



UmichatCore.prototype.sendHiddenMessage = function sendHiddenMessage(text) {
	if(this.config.customerToken) return;
	var message = new FormData();
	message.append('message',text);
	message.append('extraclass','hu-hide');
  if (!helloumi.utils.environment['formDataGet']) {
    message.message = text; // Hack for iOS/IE
  }
	this.sendMessage(message,helloumi.webchat.umichatcore.messageSent.bind(helloumi.webchat.umichatcore));
};

helloumi.utils.core.createNameSpace('helloumi.templates.webchat');
helloumi.templates.webchat = window["helloumi-umichat-templates"];

/**
 * Helloumi's web-based chat - GUI
 * @constructor
 * @param {object} config - Umichat custom config (JSON)
 */
function UmichatGUI(config){
  var defaultConfig = {
    "soundUrl" : null,
    "brandName" : "Helloumi",
    "brandID" : null,
    "customerName" : null,
    "textBubble" : "Need Help?",
    "accentColor" : "#646bbc",
    "primaryTextColor" : "white",
    "brandIcon" : null,
    "brandDescription" : "We make it simple and seamless for businesses and people to talk to each other. Ask us anything!",
    "backgroundImage" : null,
    "backgroundColor" : "white",
    "proactivemessage": "Hay novedades",
    "customlaunchertext": "Need help?",
    "newconversationtext": "New conversation",
    "messageGroupTimer": 3 * 60,
    "poweredImage" : "helloumi.png",
    "poweredImageWhite" : "helloumi-white.png",
    "robotImage" : "robot.png",
  };
  this.config = helloumi.utils.core.extend(defaultConfig,config);
  if(typeof(this.config.backgroundImage) === "string"){
  	if(this.config.backgroundImage.substr(-1) === '/') this.config.backgroundImage = null;
  }
  this.config.customized = this.config.backgroundImage !== null || (this.config.backgroundColor !== 'white' && this.config.backgroundColor !== '#fff' && this.config.backgroundColor !== '#ffffff') ? "hu-with-custom" : "hu-without-custom";
  if(this.config.backgroundImage !== null){
  	this.config.customized += " hu-with-background";
  }
  this.renderEngine = null;

  this.containerId = "hu-container-widget";
  this.container = null;
  this.proactiveTimeout = {};
  this.messagesContainer = null;
  this.lastResize = {};
  this.lastScrollHeight = 0;
  this.widgetIconHover = false;

  this.richText = new RichTextApp({
    linkify: {
      enable: true,
      class: 'hu-link',
      class_big: 'hu-size-big'
    },
    symbols: {
      '*': { class: 'hu-bold' },
      '_': { class: 'hu-italic' },
      '%h1': { class: 'hu-size-big' },
      '%c1': { class: 'hu-color-accent' },
      '%c2': { class: 'hu-color-pink' },
    }
  });

  helloumi.utils.core.createNameSpace('helloumi.webchat.umichatgui');
  helloumi.webchat.umichatgui = this;
}

/**
 * Renders umichat widget
 */
UmichatGUI.prototype.render = function render(){
  this.container = document.getElementById( this.containerId );

  if (this.container) {
    var parent = this.container.parentNode;
    parent.removeChild( this.container );
  }

  this.container = document.createElement('div');
  this.container.id = this.containerId;
  this.container.className = 'hu-js-closed';
  this.container.dataset.assigned = '';
  this.container.dataset.status = '';
  this.container.dataset.brand = '';
  this.container.dataset.textbox = 'hidden';
  this.lastScrollHeight = 0;

  var data = this.config;

  // Customization
  data.logo = (data.brandIcon) ? data.brandIcon : this.config.staticUrl + 'webchat/img/umi.jpg';
  if (data.backgroundImage) {
    data.background = "url('" + data.backgroundImage + "')";
    data.whiteText = 'white';
    data.loaderImage = 'bold-gif-preloader-white.gif';
  } else {
    data.background = data.backgroundColor;
    data.loaderImage = 'bold-gif-preloader-light.gif';
  }
  if (data.customized.indexOf('with-custom') > 0 ){
  	data.poweredImage = data.poweredImageWhite;
  }

  this.container.innerHTML = helloumi.utils.templates.getTemplateRendered(helloumi.templates.webchat["widget.html"], ".js-webchat-init-content", {'config':data});
  document.getElementsByTagName('body')[0].appendChild( this.container );
  document.getElementById('hu-launcher-state').classList.remove('hu-js-closed')

  // Custom CSS
  var customCSSElem = document.getElementById('hu-custom-css');
  if (customCSSElem) {
    customCSSElem.parentElement.removeChild(customCSSElem);
  }
  if (this.config.style) {
    customCSSElem = document.createElement('style');
    customCSSElem.id = 'hu-custom-css';
    customCSSElem.innerText = this.config.style;
    this.container.appendChild( customCSSElem );
  }

  this.messagesContainer = this.container.querySelector('#hu-webchat-messages');
  if( this.config.open ) this.toggleWidget();

  this.setupListeners();
  this.triggerResize();
  this.hideLoader();
}

/**
 * Disables textarea
 */
UmichatGUI.prototype.disableTextarea = function disableTextarea() {
  document.getElementById('hu-composer-box').disabled = true;
};

/**
 * Enables textarea
 */
UmichatGUI.prototype.enableTextarea = function enableTextarea() {
  document.getElementById('hu-composer-box').disabled = false;
};

/**
 * Toggles umichat widget
 */
UmichatGUI.prototype.toggleWidget = function toggleWidget() {
  var isClosed = (this.container.className == "hu-js-closed" );
  this.container.className = (isClosed) ? "hu-js-open" : "hu-js-closed";
  document.getElementById('hu-container-messenger').className = (isClosed) ? "hu-js-open" : "hu-js-closed";
  // document.getElementById('hu-launcher-message').className = (isClosed) ? "hu-js-closed" : "hu-js-open";

  if (isClosed) { // Closed, now opened
    if ( helloumi.webchat.umichatcore.getUnreadCount() > 0) {
      helloumi.webchat.umichatcore.refreshUnreadNotification([]);
    }
    if ( this.config.customerToken && helloumi.webchat.umimessageservice.chatRef === null ){
      this.showLoader();
      helloumi.webchat.umichatcore.customerAuth(
        helloumi.webchat.umichatcore.authMessageServer.bind(helloumi.webchat.umichatcore)
      );
    }
    this.clearProactiveMessage();
  } else {
    this.triggerResize();
  }
}

UmichatGUI.prototype.triggerResize = function triggerResize ( resizeEvent ) {
  var isClosed = (this.container.className == "hu-js-closed" );
  var resizeRegExp = new RegExp('(hu-proactive-footer|hu-proactive-body|hu-messenger-body|hu-messenger-header|hu-messenger-footer)', 'gi');
  if ( typeof(resizeEvent) == "undefined" || resizeRegExp.test(resizeEvent.path[0].className) ) {
    var data = {};
    if (isClosed) {
      data = { status: "close", width: this.getLauncherWidth(), height: this.getLauncherHeight() };
    } else {
      data = { status: "open" }
    }
    if ( !(this.lastResize.status == data.status && this.lastResize.width == data.width && this.lastResize.height == data.height) ) {
      helloumi.webchat.umichatcore.trigger('resize', data);
      this.lastResize = data;
    }
    //console.log('Transition complete!  This is the callback, no library needed!');
  }
}

/**
 * Shows preloader
 */
UmichatGUI.prototype.showLoader = function showLoader(){
  document.getElementById('hu-webchat-loader').className = 'hu-loader';
  //this.container.querySelector('.hu-messenger-body-state').className = 'hu-js-hide';
}

/**
 * Hides preloader
 */
UmichatGUI.prototype.hideLoader = function hideLoader(){
  document.getElementById('hu-webchat-loader').className = 'hu-loader hu-js-hide';
  //this.container.querySelector('.hu-messenger-body-state').className = '';
}

/**
 * Scrolls to last message (bottom)
 */
UmichatGUI.prototype.scrollBottom = function scrollBottom(){
  var scrollable = this.container.querySelector('.hu-messenger-body');
  var totalHeight = 0;
  for (var i=0; i<scrollable.childNodes.length; i++) {
     totalHeight += scrollable.childNodes[i].offsetHeight;
   }
  // Android fix
  var totalHeight2 = document.getElementById('hu-webchat-ghosts').offsetHeight
                  + document.getElementById('hu-webchat-messages').offsetHeight;

  var __scrolltop = (totalHeight2 > totalHeight) ? totalHeight2 : totalHeight ;
  if (__scrolltop != this.lastScrollHeight) {
    scrollable.scrollTop = __scrolltop;
    this.lastScrollHeight = __scrolltop;
  }
  // Sets lastScrollTimestamp (fix)
  this.lastScrollTimestamp = Date.now();
}

UmichatGUI.prototype.widgetFocusHandler = function widgetFocusHandler(){
  if (this.container.className != "hu-js-closed" && helloumi.webchat.umichatcore.getUnreadCount() > 0 && document.hasFocus()) {
    helloumi.webchat.umichatcore.refreshUnreadNotification([]);
  }
}


/**
 * Sets GUI listeners
 */
UmichatGUI.prototype.setupListeners = function setupListeners() {
  var elems,
      i,
      self = this,
      textarea = this.container.querySelector('#hu-composer-box');

  // Widget icon click handler
  document.getElementById('hu-widget-icon').addEventListener('click', this.toggleWidget.bind(this));
  document.getElementById('hu-widget-icon').addEventListener('mouseover', function widgetIconMouseover(){
    self.widgetIconHover = true;
    self.triggerResize();
  });
  document.getElementById('hu-widget-icon').addEventListener('mouseout', function widgetIconMouseover(){
    self.widgetIconHover = false;
    self.triggerResize();
  });

  // Proactive messages
  document.getElementById('hu-container-proactive').addEventListener('click', this.toggleWidget.bind(this));

  // Cross icons click handler
  elems = this.container.getElementsByClassName('hu-header-cross');
  for ( i=0; i<elems.length; i++) elems[i].addEventListener('click', this.toggleWidget.bind(this));

  // On focus
  document.addEventListener('focusin', this.widgetFocusHandler.bind(this), true);

  // Send button
  this.container.getElementsByClassName('hu-composer-send-button')[0].addEventListener('click',this.sendButtonHandler.bind(this));

  // Textarea focus
  document.getElementsByClassName('hu-composer-text')[0].addEventListener('click',this.setTextAreaFocus.bind(this));

  // Messenger focus
  this.container.addEventListener('click', function(e) {
    // Focus messenger when any part of the widget is clicked (except footer)
    if ( self.container.querySelector('#hu-container-messenger .hu-composer').contains( e.target ) )
      return;
    self.messagesContainer.focus();
  });

  // Textarea keydown (enter)
  textarea.addEventListener('keydown',this.sendFormOnEnter.bind(this));
  if(!helloumi.utils.environment.ie10){
	  textarea.addEventListener('change',this.autoVisibilitySendButton.bind(this,textarea));
	  textarea.addEventListener('keyup',this.autoVisibilitySendButton.bind(this,textarea));
	  textarea.addEventListener('paste',this.autoVisibilitySendButton.bind(this,textarea));
	  // Images icon click handler
	  document.getElementsByClassName('hu-composer-file-button')[0].addEventListener('click',this.imagesIconHandler.bind(this));

	  // Images upload handler
	  document.getElementById('id_hu_images').addEventListener('change',this.imagesUploadHandler.bind(this));
  }
  else{
  	this.setVisibleSendButton(true);
  }



  // SCROLL LISTENERS
  var mHeader = this.container.querySelector('.hu-messenger-header');
  var mBody = this.container.querySelector('.hu-messenger-body');
  if(!helloumi.utils.environment.isMobile){
	  mBody.onscroll = function() {
	    var pos = mBody.scrollTop;
	    var timestampDiff = Date.now() - self.lastScrollTimestamp;
	    // SWITCH BANNER
	    if (pos == 0 && self.lastScroll > pos && timestampDiff > 750) {
	        // DEBUG // console.log("Up "+ timestampDiff)
	        // TODO: classList not compatible with <IE10
	        mHeader.classList.add('js-initial');
	        mHeader.classList.remove('hu-js-chat');
	        mBody.classList.add('js-initial');
	        self.lastScrollTimestamp = Date.now();
	    } else {
	      // DEBUG // console.log("Down "+ timestampDiff)
	      // TODO: classList not compatible with <IE10
	      mHeader.classList.remove('js-initial');
	      mHeader.classList.add('hu-js-chat');
	      mBody.classList.remove('js-initial');
	      // On first time sets lastScrollTimestamp
	      if (self.lastScrollTimestamp == 0) self.lastScrollTimestamp = Date.now();
	    }
	    self.lastScroll = pos;
	  };
  }
  else{
  	mHeader.classList.remove('js-initial');
	      mHeader.classList.add('hu-js-chat');
	      mBody.classList.remove('js-initial');
  }

  // Setup emojipicker
  this.emojipicker = new HuEmoji(
    textarea, // Input
    this.container.querySelector('#hu-container-messenger .hu-composer .hu-composer-emoji-button'), // Trigger
    this.container.querySelector('#hu-container-messenger .hu-composer'), // Attach
    {
      search: true,
      preview: true,
      width: '300px',
      height: '250px',
      positionX: 'center',
      positionY: 'top',
      // offsetX: 20,
      offsetY: 70,
      spritesUrl: this.config.staticUrl + 'daisho/img/sprite-icons.png',
    }
  );

}

/** Stores the last scroll's position (scroll animation bug prevention) */
UmichatGUI.prototype.lastScroll = 0;

/** Stores the last scroll's timestamp (scroll animation bug prevention) */
UmichatGUI.prototype.lastScrollTimestamp = 0;

UmichatGUI.prototype.setTextAreaFocus = function setTextAreaFocus() {
  this.container.querySelector('#hu-container-messenger #hu-composer-box').focus();
};

UmichatGUI.prototype.imagesIconHandler = function imagesIconHandler() {
  document.getElementById('id_hu_images').click();
};

/**
 * Handler for select images on input files. Initialize Multiflags array.
 */
UmichatGUI.prototype.imagesUploadHandler = function imagesUploadHandler() {
  var self = this;
  var index;

  self.cleanMultiFlags();
  var files = document.getElementById( 'id_hu_images' ).files;

  // Images upload limit -> 5
  if ( files.length > 5 ) {return ;} // TODO: Notificar que el máximo permitido es 5 imágenes
  	for( index = 0 ; index < files.length ; index++){
  		this.renderImageOnTextArea(index,files);
  	}
};

/**
 * Render preview image on input area. Append remove image handler
 * @param  {int} index - Array position to render image
 * @param  {array} files - Images array to render
 */
UmichatGUI.prototype.renderImageOnTextArea = function renderImageOnTextArea(index, files) {
	var self = this;
	var file = files[index];
  	var reader = new FileReader();
    reader.readAsDataURL( file );
	reader.onload = function( e ) {
	    // DEBUG // console.log(index);
	    var data = {
	      index: index,
	      name: file.name,
	      url: e.target.result,
	      staticUrl: helloumi.webchat.umichatgui.config.staticUrl,
	    };
	    // Render image preview
	    var div = document.createElement( 'div' );
	    div.innerHTML = helloumi.utils.templates.getTemplateRendered( helloumi.templates.webchat[ 'templates.html' ], ".js-webchat-image-preview", data );

	    // Inject html
	    self.container.querySelector( '.hu-composer-files' ).appendChild( div );
	    var imageElem = div.querySelector( '.hu-composer-file' );
	    helloumi.utils.templates.unwrapTemplate( div );
	    self.MULTI_IMAGE_FLAGS[ index ] = true;

	    // Set close button listener
	    imageElem.querySelector( '.hu-composer-fileclose' ).addEventListener( 'click', function() {
	      var delIndex = this.getAttribute( 'data-index' );
	      var elem = this.parentNode;
	      self.MULTI_IMAGE_FLAGS[ delIndex ] = false;
	      if (elem.parentNode.parentNode.getElementsByClassName( 'hu-composer-file').length == 1 ) {
	        // No images left, switch to text message
	        self.cleanInputs([ 'files' ]);
	        self.uiTextBox( 'text' );
	        self.setVisibleSendButton( false );
	      } else {
	        elem.parentNode.removeChild( elem );
	      }
	    } );
	  }
	  reader.onloadend = function() {
        self.uiTextBox( 'files' );
        self.setVisibleSendButton( true );
      }
};

/**
 * Send message on Intro is pressed
 * @param  {event} e
 */
UmichatGUI.prototype.sendFormOnEnter = function sendFormOnEnter(e) {
    if (this.container.querySelector('#hu-composer-box').value === "") return;
    var key = e.keyCode || e.which;
    if (key == 13) {
      if (!e.shiftKey) { // Default behavior when shift key is pressed
        e.preventDefault();
        this.sendButtonHandler();
      }
    }
};

/**
 * Limit to 3 lines visibility content of textarea
 * @param  {NodeElement}
 */
UmichatGUI.prototype.autoVisibilitySendButton = function autoVisibilitySendButton(textarea) {
    var auxtextarea = this.container.querySelector('#hu-composer-aux-box');
    var linesLimit = 3;
    // Textarea autoresize
    auxtextarea.value = textarea.value;
    auxtextarea.style.width = textarea.getBoundingClientRect().width;

    var lheight = parseInt(window.getComputedStyle(textarea,null).getPropertyValue('line-height'), 10);
    var lines = auxtextarea.scrollHeight / lheight;
    textarea.rows = (lines < linesLimit) ? lines : linesLimit ;

    // Update emojipicker position
    this.emojipicker.updateContainerPosition(
      ( ((parseInt(lines) < linesLimit) ? parseInt(lines) : linesLimit)  - 1) * lheight, 0
    );

    // Switch image button for send button when text input
    ( textarea.value === "" ) ? this.setVisibleSendButton(false):this.setVisibleSendButton(true);
};

/**
 * Handler for do all actions when user press Send button.
 *
 */
UmichatGUI.prototype.sendButtonHandler = function sendButtonHandler() {
  var messageTimestamp = Date.now()/1000;
  var formData = new FormData(this.container.querySelector('#id_hu_message_form'));
  var files = this.container.querySelectorAll('.hu-composer-thumbnail');
  if (files.length == 0) {
    var messageText = this.container.querySelector('#hu-composer-box').value;
    // Ghost text message
    this.createGhost({
      message: messageText,
      timestamp: messageTimestamp,
      type: "text",
    });
    if (!helloumi.utils.environment['formDataGet']) {
      formData.message = messageText; // Hack for iOS/IE
    }
  } else {
    for (var i=0; i<files.length; i++) {
      // Ghost image message
      this.createGhost({
        timestamp: messageTimestamp,
        type: "image",
        url: files[i].style.backgroundImage.replace(/^url\(\"/, '').replace(/\"$/, ''),
      });
    }
  }
  formData.append('image_flags',this.MULTI_IMAGE_FLAGS);
  formData.append('timestamp', messageTimestamp);
  if(helloumi.utils.environment['ie10'] || helloumi.utils.environment['ie11'] || helloumi.utils.environment['edge'] ) formData.append('message',this.container.querySelector('#hu-composer-box').value);
  helloumi.webchat.umichatcore.sendMessage(formData, helloumi.webchat.umichatcore.messageSent.bind(helloumi.webchat.umichatcore) );
  this.cleanInputs('all');
  if (!helloumi.utils.environment.ie10)this.setVisibleSendButton(false);
  this.uiTextBox('text');
};

/**
 * Message loader
 * @param  {Object}  messageData All message data
 * @param  {Boolean} isGhost True if it's a ghost message
 * @param  {Boolean} executeEvents If true, execute scripts
 */
UmichatGUI.prototype.loadMessage = function loadMessage( messageData, isGhost, executeEvents ) {
  var self = this;

  //-///////////////////////////////////////
  //- DATA INIT
  //-///////////////////////////////////////

  var isNewDay = this.messagesContainer.querySelectorAll( '[data-day="' + messageData.day +'"]' ).length == 0 ;
  var agentData = this.getAgentData( parseInt(messageData.samurai) );

  var buttons = (typeof(messageData.buttons) !== 'undefined') ? this.getButtonsReferenced(messageData.buttons,messageData.payloads) : [];
  var data = {
    // GLOBAL
    key: messageData.key,
    // message: messageData.message,
    message: (messageData.type !== 'typing') ? this.richText.format( messageData.message ).formatted : messageData.message,
    samurai: messageData.samurai,
    time: messageData.time,
    timestamp: messageData.timestamp,
    authorClass: (agentData) || messageData.type == "typing" ? 'hu-messenger-message-brand' : 'hu-messenger-message-user',
    day: messageData.day,
    readClass: messageData.readClass,
    avatarClass: (agentData && !agentData.avatarLoaded) ? 'hu-not-loaded' : '',
    avatarTitle: (agentData && agentData.avatarLoaded) ? agentData.name : '',
    type: messageData.type,
    // IMAGE, VIDEO, DOCUMENT
    url: messageData.url,
    // DOCUMENT
    file_name: messageData.file_name,
    size: messageData.size,
    // LOCATION
    latitude:  messageData.latitude,
    longitude:  messageData.longitude,
    address:  messageData.address,
    // Buttons
    buttons: buttons,
    title: (messageData.type !== 'typing') ? this.richText.format( messageData.title ).formatted : messageData.title,
    // CONFIG
    config: this.config,
    extraclass : messageData.extraclass,
    extraData : messageData.extra_data
  };

  if(data.extraclass == 'hu-hide') return;

  if ( agentData )
    data.avatar = agentData.avatar;
  else {
    data.accentColor = this.config.accentColor;
    data.primaryTextColor = this.config.primaryTextColor;
  }

  //-///////////////////////////////////////
  //- MESSAGE RENDERING
  //-///////////////////////////////////////

  var renderedMessage = this.getRenderedMessage( data );
  var div = document.createElement( 'div' );
  div.innerHTML = renderedMessage;
  var messageElem = div.querySelector( '.hu-messenger-message' );
  messageElem.setAttribute( 'data-samurai', messageData.samurai );

  // ONLOAD IMG
  var imgElem = div.querySelector( '.hu-message-content-image img' );
  if (imgElem) imgElem.addEventListener('load', this.scrollBottom.bind(this)); ;

  this.bindMessageDialogButtonsAction(div,data);

  if ( isGhost && helloumi.webchat.umichatcore.redirecting === false ) {
    div.querySelector( '.hu-message-info-checks' ).style.backgroundImage = 'url('
      + helloumi.webchat.umichatgui.config.staticUrl
      + "webchat/img/clock.png)";
    div.childNodes[0].id = "hu-ghost-" + messageData.timestamp;
    document.getElementById( 'hu-webchat-ghosts' ).appendChild( div );
  } else {
    // Message is hidden until it's published
    messageElem.classList.add( 'hu-js-hide' );
    this.messagesContainer.appendChild( div );

    // JAVASCRIPT INJECTION (ONLY TESTING-FER)
    if (executeEvents === true) {
      var scripts = div.getElementsByTagName('script');
      for (var i = 0; i < scripts.length; i++) {
        eval(scripts[i].textContent);
      }
    }
  }
  helloumi.utils.templates.unwrapTemplate( div );

  //-///////////////////////////////////////
  //- MESSAGE ORDERING
  //-///////////////////////////////////////

  this.sortMessage( messageElem );

  //-///////////////////////////////////////
  //- DATE MARKER RENDERING
  //-///////////////////////////////////////

  if ( isNewDay && !isGhost && data.type !== 'typing') {
    // Prepend date info
    var dateDiv = document.createElement('div');
    dateDiv.innerHTML = helloumi.utils.templates.getTemplateRendered(
      helloumi.templates.webchat['templates.html'],
      ".js-webchat-date", {
        time: helloumi.utils.date.getShortDate(
          messageData.timestamp * 1000
        ),
        timestamp: helloumi.utils.date.getStartDate(
          new Date(messageData.timestamp * 1000)
        ),
        dayClass: 'hu-js-day-' + messageData.day,
        customized: this.config.customized,
      }
    );
    // Insert html
    var firstDayMessage = this.messagesContainer.querySelectorAll( '[data-day="' + messageData.day + '"]' )[0];
    var parentNode = firstDayMessage.parentNode;
    parentNode.insertBefore( dateDiv, firstDayMessage );
    helloumi.utils.templates.unwrapTemplate( dateDiv );
  }

  //-///////////////////////////////////////
  //- MESSAGE GROUPING
  //-///////////////////////////////////////

  if ( !isGhost )
    this.groupMessage( messageElem );


  var whichAnimationEvent = function(){
    var t,
        el = document.createElement("fakeelement");

    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations){
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  }



  //-///////////////////////////////////////
  //- MESSAGE PUBLISH
  //-///////////////////////////////////////

  messageElem.classList.remove( 'hu-js-hide' );

  this.scrollBottom();
  var callback = function(){
    self.scrollBottom();
    // this.removeEventListener(animationEvent, callback);
  };
  var animationEvent = whichAnimationEvent();
  messageElem.addEventListener(animationEvent, callback);

  if (data.type !== 'typing' && executeEvents === true && agentData !== undefined)
    this.notify();

};

/**
 * Delete message handler
 * @param  {Object} messageData message data
 */
UmichatGUI.prototype.deleteMessage = function deleteMessage( messageData ) {
  var key = messageData.key;
  var messageElem = this.messagesContainer.querySelector( '.hu-messenger-message[data-key="' + key +'"]' );
  var day = messageElem.getAttribute( 'data-day' );
  this.stylizeGroup( messageElem, false );
  messageElem.parentNode.removeChild( messageElem );

  // Delete date marker if no messages left this day
  var messagesThisDay = this.messagesContainer.querySelectorAll( '[data-day="' + day +'"]' );
  if ( messagesThisDay.length == 0 ) {
    var dateMarker = this.messagesContainer.querySelector( '.hu-messenger-date.hu-js-day-' + day );
    dateMarker.parentNode.removeChild( dateMarker );
  }
};

/**
 * Delete ghost message
 * @param  {Object} data - message data
 */
UmichatGUI.prototype.deleteGhost = function deleteGhost( data ) {
  var ghostContainer = this.container.querySelector('#hu-webchat-ghosts');
  if (ghostContainer) {
    ghostContainer.innerText = "";
  }
};

/**
 * Create ghost message
 * @param  {Object} data Message data
 */
UmichatGUI.prototype.createGhost = function createGhost( data ) {
  var _data = helloumi.utils.core.extend( {}, data );
  if (_data.timestamp) {
    var datetime = new Date( _data.timestamp * 1000 );
    _data['time'] = helloumi.utils.date.hhmm( datetime );
  }
  this.loadMessage( _data, true );
}

/**
 * Sets message as readed
 * @param {Number} msgKey message key
 */
UmichatGUI.prototype.setReaded = function setReaded( msgKey ) {
  var message = this.messagesContainer.querySelector( 'hu-messenger-message[data-key="' + msgKey + '"]' );
  message.querySelector( '.hu-message-info-checks' ).className += " hu-js-readed";
};


/**
 * Message ordering based on the previous timestamp.
 * prevDate < currDate == 'prevDate is actually previous date'
 * @param  {Object} messageElem DOM message element to be sort
 */
UmichatGUI.prototype.sortMessage = function sortMessage( messageElem ) {
  if ( messageElem.previousSibling ) {
    var currDate = messageElem.getAttribute( 'data-timestamp' );
    var prevDate = messageElem.previousSibling.getAttribute( 'data-timestamp' );
    while ( prevDate != 'undefined' && parseFloat(prevDate) > parseFloat(currDate) ) {
      messageElem.parentNode.insertBefore(
        messageElem,
        messageElem.previousSibling
      );
      if ( messageElem.previousSibling )
        prevDate = messageElem.previousSibling.getAttribute( 'data-timestamp' );
      else
        break;
    }
  }
};


/**
 * Grouping messages handler
 * Readability: _* refers to previous, *_ refers to next.
 * Group criter: Author, timestamp.
 * .hu-js-grouper -> Group creator. ('agrupador')
 * .hu-js-grouped -> Just an element addition. ('agrupado')
 * @param  {Object} messageElem DOM message element to be grouped
 * @param {Object} noScanNext if true, ignore broken group
 */
UmichatGUI.prototype.groupMessage = function groupMessage( messageElem, noScanNext ) {
  if ( !messageElem )
    return;
  var messageGroupTimer = 3 * 60;
  var message = messageElem;
  var timestamp = message.getAttribute( 'data-timestamp' );
  var samurai = message.getAttribute( 'data-samurai' );
  var group = message.getAttribute( 'data-group' );
  var _message = message.previousSibling;
  var message_ = message.nextSibling;

  if ( _message ) {
    if ( _message.classList.contains( 'hu-messenger-date' ) ) {
      // El elemento anterior es una fecha
      setGrouper( message );
      createGroup( message );
    } else if ( _message.classList.contains( 'hu-messenger-message' ) ) {
      // El elemento anterior es un mensaje
      var _samurai = _message.getAttribute( 'data-samurai' );
      var _timestamp = _message.getAttribute( 'data-timestamp' );
      var _group = _message.getAttribute( 'data-group' );
      var authorMatch = ( _samurai == samurai );
      var timeMatch = ( timestamp - _group ) < messageGroupTimer;
      if ( !authorMatch ) {
        // Diferente autor
        setGrouper( message );
        createGroup( message );
        this.stylizeGroup( message, true );
      } else {
        // Mismo autor
        if ( samurai != 'undefined' ) {
          // Los mensajes de samurai siempre son agrupados
          setGrouped( message );
          joinGroup( message, _group );
          this.stylizeGroup( message, true );
        } else {
          // Es mensaje de usuario
          if ( timeMatch ) {
            // Cumple requisito temporal
            setGrouped( message );
            joinGroup( message, _group );
            this.stylizeGroup( message, true );
          } else {
            // No cumple requisito temporal
            setGrouper( message );
            createGroup( message );
            this.stylizeGroup( message, true );
          }
        }
      }
    } else {
      // El elemento anterior es desconocido
      setGrouper( message );
      createGroup( message );
      this.stylizeGroup( message, true );
    }
  } else {
    // No existe mensaje anterior
    setGrouper( message );
    createGroup( message );
    this.stylizeGroup( message, true );
  }

  if ( message_ && !noScanNext ) {
    if ( message_.classList.contains( 'hu-messenger-message' ) ) {
      // El siguiente elemento es un mensaje
      var group_ = message_.getAttribute( 'data-group' );
      var brokenGroup = ( !!group_ ) ? ( group_ < timestamp ) : false;
      if ( brokenGroup ) {
        // Se ha roto el grupo. Lo rehacemos
        var groupItems = message_.parentNode.querySelectorAll( '[data-group="' + group_ + '"]' );
        for (var i = 0; i < groupItems.length; i++) {
          this.groupMessage( groupItems[i], true );
        }
        for (var j = 0; j < groupItems.length; j++) {
          this.stylizeGroup( groupItems[j], true );
        }
      }
    }
  }

  function setGrouper( message ) {
    message.classList.remove( 'hu-js-grouped' );
    message.classList.add( 'hu-js-grouper' );
  }

  function setGrouped( message ) {
    message.classList.remove( 'hu-js-grouper' );
    message.classList.add( 'hu-js-grouped' );
  }

  function createGroup( message ) {
    var group = message.getAttribute( 'data-timestamp' );
    message.setAttribute( 'data-group', group );
  }

  function joinGroup( message, group ) {
    message.setAttribute( 'data-group', group );
  }
}


/**
 * Add/Remove styles in message groups. Center element is
 * passed as argument, but previous and next elements are
 * affected.
 * @param  {Object} elem DOM message element
 * @param  {Boolean} isAdded true -> Added, false -> Deleted
 */
UmichatGUI.prototype.stylizeGroup = function stylizeGroup( elem, isAdded ) {
  if ( !elem )
    return;
  var message = elem;
  var _message = message.previousSibling;
  var message_ = message.nextSibling;
  var group = message.getAttribute( 'data-group' );
  var listMessages = message.parentNode.querySelectorAll( '[data-group="' + group + '"]' );
  var groupItems = [];
  // Conversión NodeList a Array
  for ( var i = listMessages.length; i--; groupItems.unshift( listMessages[i] ) );
  // Ordenación por timestamp por si las moscas
  groupItems.sort(function(a,b) {
    return a.getAttribute( 'data-timestamp' ) - b.getAttribute( 'data-timestamp' );
  });
  var nItems = groupItems.length;

  function isFirst_( elem ) {
    return groupItems.indexOf( elem ) == 0;
  }
  function isLast_( elem ) {
    return groupItems.indexOf( elem ) == nItems - 1;
  }
  function isFromGroup( elem ) {
    return groupItems.indexOf( elem ) != -1;
  }
  function stylize( elem ) {
    // Si no pertenece al grupo, no tocarlo
    if ( !isFromGroup( elem ) )
      return;

    elem.classList.remove( 'first-not-last' );
    elem.classList.remove( 'not-first-not-last' );
    elem.classList.remove( 'not-first-last' );

    var isFirst = isFirst_( elem );
    var isLast = isLast_( elem );

    if ( isFirst && !isLast )
      elem.classList.add( 'first-not-last' );
    else if ( !isFirst && !isLast )
      elem.classList.add( 'not-first-not-last' );
    else if ( !isFirst && isLast )
      elem.classList.add( 'not-first-last' );
  }

  // CASE ADDITION
  if ( isAdded == true ) {
    stylize( message );
    if ( _message )
      if ( _message.classList.contains( 'hu-messenger-message' ) )
        stylize( _message );
    if ( message_ )
      if ( message_.classList.contains( 'hu-messenger-message' ) )
        stylize( message_ );
  }
  // CASE DELETION
  else {
    groupItems.splice( groupItems.indexOf( message ), 1 );
    nItems = groupItems.length;
    if ( _message )
      if ( _message.classList.contains( 'hu-messenger-message' ) )
        stylize( _message );
    if ( message_ )
      if ( message_.classList.contains( 'hu-messenger-message' ) )
        stylize( message_ );
  }
}


UmichatGUI.prototype.notify = function notify() {
  if (this.config.soundUrl)
    this.soundNotify(new Audio(this.config.soundUrl));
}

UmichatGUI.prototype.soundNotify = function soundNotify(audio) {
  if (this.container.className == "hu-js-closed")
    audio.volume = 1;
  else
    audio.volume = 0.6;
  audio.play(audio);
}

UmichatGUI.prototype.getRenderedMessage = function getRenderedMessage(data) {
  var messageWrapper = document.createElement('div');
  messageWrapper.innerHTML = helloumi.utils.templates.getTemplateRendered(helloumi.templates.webchat['templates.html'], ".js-webchat-message", data);
  var messageContent = messageWrapper.querySelector('.hu-message-content-group');
  switch (data.type) {
    case 'text':
      // data.message = data.message.linkify();
      data.message = data.message;
      messageContent.innerHTML = helloumi.utils.templates.getTemplateRendered(helloumi.templates.webchat['templates.html'],".js-webchat-message-text",data);
      break;
    case 'image':
      messageContent.innerHTML = helloumi.utils.templates.getTemplateRendered(helloumi.templates.webchat['templates.html'],".js-webchat-message-image",data);
      break;
    case 'video':
      messageContent.innerHTML = helloumi.utils.templates.getTemplateRendered(helloumi.templates.webchat['templates.html'],".js-webchat-message-video",data);
      break;
    case 'document':
      messageContent.innerHTML = helloumi.utils.templates.getTemplateRendered(helloumi.templates.webchat['templates.html'],".js-webchat-message-document",data);
      break;
    case 'location':
      messageContent.innerHTML = helloumi.utils.templates.getTemplateRendered(helloumi.templates.webchat['templates.html'],".js-webchat-message-location",data);
      break;
    case 'dialog':
    case 'menu':
      messageContent.innerHTML = helloumi.utils.templates.getTemplateRendered(helloumi.templates.webchat['templates.html'],".js-webchat-brand-message-buttons",data);
      break;
    case 'typing':
      messageContent.innerHTML = helloumi.utils.templates.getTemplateRendered(helloumi.templates.webchat['templates.html'],".js-webchat-message-typing",data);
      break
  }
  return messageWrapper.innerHTML;
};

UmichatGUI.prototype.updateAgentAvatar = function updateAgentAvatar( id,  data ) {
  var elems = this.container.querySelectorAll('.hu-messenger-message.hu-messenger-message-brand[data-samurai="' + id + '"] .hu-avatar');
  for (var i=0; i<elems.length; i++) {
    elems[i].title = data.name;
    elems[i].style.backgroundImage ='url(' + data.avatar + ')';
    elems[i].className = elems[i].className.replace('hu-not-loaded', ' ');
  }
  if (id == 0) {
    localStorage.setItem('helloumi-webchat-agent-default-name-' + this.config.channelToken, data.name);
    localStorage.setItem('helloumi-webchat-agent-default-avatar-' + this.config.channelToken, data.avatar);
  }
};

UmichatGUI.prototype.getAgentData = function getAgentData( id ) {
  return helloumi.webchat.umichatcore.agents[ id ];
};


UmichatGUI.prototype.showTextBubble = function showTextBubble() {
  return "";
};

UmichatGUI.prototype.cleanInputs = function cleanInputs(op) {
  var i;
  if (op == 'all' || op.indexOf('text') > -1) {
    // Clean textarea
    var elems = document.querySelectorAll('#hu-composer-box, #hu-composer-aux-box');
    for ( i = 0; i < elems.length ; i++) elems[i].value = "";
  }
  if (op == 'all' || op.indexOf('files') > -1) {
    // Clean files area
    document.getElementById("id_hu_images").value = "";
    var elems = document.querySelectorAll('.hu-composer-files');
    for (i = 0 ; i < elems.length ; i++) elems[i].innerHTML = "";
    // Clean Multi-image flags
    this.cleanMultiFlags();
  }
};

// Images upload limit -> 5
UmichatGUI.prototype.MULTI_IMAGE_FLAGS = [false, false, false, false, false];

UmichatGUI.prototype.cleanMultiFlags = function cleanMultiFlags() {
  this.MULTI_IMAGE_FLAGS = this.MULTI_IMAGE_FLAGS.map(function() {
    return false;
  });
}

UmichatGUI.prototype.setVisibleSendButton = function setVisibleSendButton(visible) {
  var i;
  var toShow = ".hu-composer-send-button";
  var toHide = ".hu-composer-file-button";
  if (!visible) {
    toShow = ".hu-composer-file-button";
    toHide = ".hu-composer-send-button"
  }
  this.showElements(toShow);
  this.hideElements(toHide);
};

UmichatGUI.prototype.uiTextBox = function uiTextBox(op) {
  this.hideElements('.hu-composer-text, .hu-composer-files');
  this.cleanInputs('text');
  this.showElements('.hu-composer-' + op);
};


UmichatGUI.prototype.showElements = function showElements(selector) {
    // Show Elements
    var elems = document.querySelectorAll(selector);
    for (i = 0; i < elems.length ; i++) elems[i].classList.remove('hu-js-hide');
};

UmichatGUI.prototype.hideElements = function hideElements(selector) {
    // Hide Elements
    var elems = document.querySelectorAll(selector);
    for (i = 0; i < elems.length ; i++) elems[i].classList.add('hu-js-hide');
};

UmichatGUI.prototype.clearProactiveTimeout = function clearProactiveTimeout( id ){
  if ( id ) {
    if (this.proactiveTimeout[ id ]) {
      clearTimeout( this.proactiveTimeout[ id ] );
      delete this.proactiveTimeout[ id ];
    }
  } else {
    for (var key in this.proactiveTimeout) {
      if (this.proactiveTimeout.hasOwnProperty(key)) {
        clearTimeout( this.proactiveTimeout[ key ] );
      }
    }
    this.proactiveTimeout = {};
  }
}

UmichatGUI.prototype.clearProactiveMessage = function clearProactiveMessage( id ){
  var proactiveContainer = document.getElementById('hu-container-proactive');
  var container = proactiveContainer.querySelector('.hu-chatlist-container');

  this.clearProactiveTimeout( id );

  if (id) {
    var message = proactiveContainer.querySelector('.hu-messenger-message[data-key="' + id + '"]')
    message.parentNode.parentNode.removeChild( message.parentNode );
    var proactives = proactiveContainer.querySelectorAll('.hu-messenger-message');
    this.triggerResize();
    if (proactives.length == 0) {
      proactiveContainer.className = "hu-js-closed";
      container.innerHTML = '';
    }
  } else {
    proactiveContainer.className = "hu-js-closed";
    container.innerHTML = '';
    var isClosed = (this.container.className == "hu-js-closed" );
    var status = (isClosed) ? "close" : "open";
    this.triggerResize();
  }
}

UmichatGUI.prototype.getLauncherHeight = function getLauncherHeight(){
  var proactiveContainer = document.getElementById('hu-container-proactive');
  var proactives = proactiveContainer.querySelectorAll('.hu-messenger-message');
  var launcherHeight = this.container.querySelector('#hu-launcher-state').offsetHeight + 25;
  if(this.widgetIconHover) {
    launcherHeight += this.container.querySelector('#hu-launcher-state').offsetHeight * 0.1;
  }
  if (proactives.length > 0) {
    launcherHeight = launcherHeight + proactiveContainer.offsetHeight + 5;
  }
  return launcherHeight;
}

UmichatGUI.prototype.getLauncherWidth = function getLauncherWidth(hover){
  var proactiveContainer = document.getElementById('hu-container-proactive');
  var proactives = proactiveContainer.querySelectorAll('.hu-messenger-message');
  var launcherWidth = this.container.querySelector('#hu-launcher-state').offsetWidth + 25;
  if(this.widgetIconHover) {
    launcherWidth += this.container.querySelector('#hu-launcher-state').offsetWidth * 0.1
  }
  if (proactives.length > 0 && proactiveContainer.offsetWidth > launcherWidth) {
    launcherWidth = proactiveContainer.offsetWidth + 5;
  }
  return launcherWidth;
}

UmichatGUI.prototype.renderProactiveMessage = function renderProactiveMessage( messageData, messageTimeout ) {
  // Check for agent data
  helloumi.webchat.umichatcore.checkAgentData( messageData.samurai );
  var proactiveContainer = document.getElementById('hu-container-proactive');
  proactiveContainer.className = "";

  var isNewDay = this.messagesContainer.querySelectorAll( '[data-day="' + messageData.day +'"]' ).length == 0 ;
  var agentData = this.getAgentData( parseInt(messageData.samurai) );
  var buttons = (typeof(messageData.buttons) !== 'undefined') ? this.getButtonsReferenced(messageData.buttons,messageData.payloads) : [];
  var data = {
    // GLOBAL
    key: messageData.key,
    // message: messageData.message,
    message: this.richText.format( messageData.message ).formatted,
    samurai: messageData.samurai,
    time: messageData.time,
    timestamp: messageData.timestamp,
    authorClass: (agentData) ? 'hu-messenger-message-brand' : 'hu-messenger-message-user',
    day: messageData.day,
    readClass: messageData.readClass,
    avatarClass: (agentData && !agentData.avatarLoaded) ? 'hu-not-loaded' : '',
    avatarTitle: (agentData && agentData.avatarLoaded) ? agentData.name : '',
    type: messageData.type,
    // IMAGE, VIDEO, DOCUMENT
    url: messageData.url,
    // DOCUMENT
    file_name: messageData.file_name,
    size: messageData.size,
    // LOCATION
    latitude:  messageData.latitude,
    longitude:  messageData.longitude,
    address:  messageData.address,
    // Buttons
    buttons: buttons,
    title: messageData.title,
    // CONFIG
    config: this.config,
  };

  if ( agentData )
    data.avatar = agentData.avatar;
  else {
    data.accentColor = this.config.accentColor;
    data.primaryTextColor = this.config.primaryTextColor;
  }

  var renderedMessage = this.getRenderedMessage( data );
  var div = document.createElement( 'div' );
  div.innerHTML = renderedMessage;
  var messageElem = div.querySelector( '.hu-messenger-message' );
  messageElem.setAttribute( 'data-samurai', messageData.samurai );

  // Append element
  var container = proactiveContainer.querySelector('.hu-chatlist-container');
  container.appendChild( div )

  this.triggerResize();

  // Set proactive message lifetime
  this.clearProactiveTimeout( data.key );
  if ( messageTimeout ) {
    var self = this;
    this.proactiveTimeout[ data.key ] = setTimeout( function clearProactiveMessageTimeout(){
      self.clearProactiveMessage( data.key );
    }, messageTimeout);
  }
};

UmichatGUI.prototype.lastUnreadCount = 0;

UmichatGUI.prototype.refreshUnreadNotification = function refreshUnreadNotification() {
  var unreads = helloumi.webchat.umichatcore.getUnreadCount();
  if (unreads == this.lastUnreadCount) return false;
  this.lastUnreadCount = unreads;
  var elems = this.container.querySelectorAll('.hu-unread-number');
  for (var i=0; i<elems.length; i++) {
    if (unreads > 0) {
      elems[i].parentNode.className = "hu-launcher-notification";
    } else {
      elems[i].parentNode.className = "hu-launcher-notification hu-js-hide";
    }
    elems[i].innerText = unreads;
  }
};


UmichatGUI.prototype.getButtonsReferenced = function(captions,payloads) {
	var i,
		result = [];
	for(i=0; i < captions.length; i++){
		result.push({'caption':captions[i],'payload':payloads[i]})
	}
	return result;
};
UmichatGUI.prototype.bindMessageDialogButtonsAction = function bindMessageDialogButtonsAction(nElement,data) {
    if (data.type !== "menu" && data.type !== "dialog") return;

    var listelements = nElement.querySelectorAll('span[data-click]');
    for (i = 0; i < listelements.length; i++) {
        listelements[i].parentElement.addEventListener('click', function() {
        	var textbox = document.querySelector("#hu-composer-box");
        	textbox.value = this.querySelector('span').dataset.click;
        	helloumi.webchat.umichatgui.sendButtonHandler();
          // Only for testing-fer ===================
          var messageElem = this.parentNode;
          if (messageElem) {
            while ( !messageElem.classList.contains( 'hu-messenger-message' ) ) {
              messageElem = messageElem.parentNode;
            }
          }
          messageElem.classList.add('hu-button-clicked');
          var __contentButtons = messageElem.querySelector('.hu-message-content-buttons');
          if (__contentButtons) __contentButtons.parentNode.removeChild(__contentButtons);
          // Only for testing-fer ===================
        });
    }
};

UmichatGUI.prototype.setBrandStatus = function setBrandStatus(status) {
	var statusDict = {0:"",1:"status-online",2:"status-busy"};
	var statusIcon = document.querySelectorAll('span.hu-brand-status');
	for(var i = 0; i < statusIcon.length; i++){
		statusIcon[i].classList = 'hu-brand-status ' + statusDict[status];
	}
};


UmichatGUI.prototype.setTypingMessage = function setTypingMessage(samuraiID) {
	var dateNow = new Date(Date.now())
	var x = {"key":"typing","type":"typing","day": helloumi.utils.date.yyyymmdd(dateNow) ,"timestamp": dateNow/ 1000,"samurai":samuraiID,"message":""};
	this.loadMessage(x,false);
};

UmichatGUI.prototype.removeTypingMessage = function removeTypingMessage() {
	var allTypingMessages = document.querySelectorAll("[data-key='typing']");
	for(var i=0;i<allTypingMessages.length;i++){
    this.stylizeGroup(allTypingMessages[i], false);
		allTypingMessages[i].parentNode.removeChild( allTypingMessages[i]);
	}
};


UmichatGUI.prototype.setAssigned = function setAssigned(agent) {
	this.container.dataset.assigned = agent;
};

UmichatGUI.prototype.setStatus = function setStatus(status) {
	this.container.dataset.status = status;
};

UmichatGUI.prototype.setBrandId = function setBrandId(id) {
	this.container.dataset.brand = id;
};

UmichatGUI.prototype.setTextBoxStatus = function setTextBoxStatus(status) {
	this.container.dataset.textbox = status;
};

/**
 * Helloumi's web-based chat - MESSAGING SERVICE
 * @constructor
 * @param {object} config - Umichat custom config (JSON)
 */
 function UmiMessageService(config){
  helloumi.utils.core.createNameSpace('helloumi.webchat.umimessageservice');
  helloumi.webchat.umimessageservice = this;
  this.config = helloumi.utils.core.extend({},config);
  this.firebaseApp = null;
  this.configRef = null;

  // Broadcast messages
  this.broadcastRef = null;
  this.lastBroadcast = 0;

  // Chat messages
  this.chatRef = null;

  this.lastTimestamp = 0;

  // Brand status
  this.statBrandRef = null;

  // Typing Ref
  this.typingRef = null;

  // Stack for ronin messages
  this.botsMessage = [];

  // Bots message handler
  this.botsMessageHandler
}

/**
 * Firebase authentication with custom token
 * @param {String} data - Values needed to init firebase
 * @return {Promise} - Async response
 */
UmiMessageService.prototype.init = function init(){
  var self = this;
  self.firebaseApp = firebase.initializeApp( self.config, "helloumi-webchat" );
  return self.firebaseApp.auth().signInAnonymously()
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage + '(' + errorCode + ')');
    })
    .then(function(user){
      if (self.config.brandID) {
        self.broadcastRef = self.firebaseApp.database().ref(self.config.brandID + '/public/messages/'+ self.config.channelToken );
        self.setBroadcastListeners();
      }
    });
}

UmiMessageService.prototype.auth = function auth( data ) {
  var self = this;
  var firebaseToken = data.firebase_token;
  var firebasePath = data.database_url.split('.com')[1];
  return self.firebaseApp.auth().signInWithCustomToken( firebaseToken )
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/invalid-custom-token') {
        console.log('The token you provided is not valid.');
      } else {
        console.log(error);
      }
    })
    .then(function(user) {
      if (user) {
        console.log('User is signed in.');

        var statRef = firebasePath.split('/')[0] + '/presence';
        var typingRefPath = firebasePath.substring(0,firebasePath.lastIndexOf("messages")) + "typing";

        self.statBrandRef = self.firebaseApp.database().ref(statRef);
        self.typingRef = self.firebaseApp.database().ref(typingRefPath);
        self.chatRef = self.firebaseApp.database().ref(firebasePath);
      }
    });
}

/**
 * Load all messages from firebase
 * @return {Promise} - Async response
 */
UmiMessageService.prototype.getAllMessages = function getAllMessages(){
  var self = this;
  // Return promise to control async chat extraction
  return self.chatRef.orderByChild("timestamp").limitToLast(20).once('value').then(function(messageSnapshot){
    messageSnapshot.forEach(function(message) {
     // TODO: da error helloumi.utils.core.extends
     //var data = helloumi.utils.core.extends({},message.val());
     var data = message.val();
     data['key'] = message.key;

     if(!localStorage['allView'] && data.samurai < 0){
     	self.pushBotsMessage(data);
    	self.activeBotsMessage();
     }
     else{
     	helloumi.webchat.umichatcore.loadMessage(data);
     }

     self.lastTimestamp = message.val().timestamp + 0.001;
    });
    localStorage.setItem('allView',true);
  });
}

/**
 * Sets Firebase Broadcast messages listeners (message added)
 */
UmiMessageService.prototype.setBroadcastListeners = function setBroadcastListeners(){
  var self = this;
  if (self.broadcastRef) {
    self.broadcastRef.orderByChild("timestamp").limitToLast(1).once('value')
      .catch(function(error) {
        console.log(error);
      })
      .then(function getLastBroadcastTimestamp(messageSnapshot){
        // Get lastBroadcast timestamp
        messageSnapshot.forEach(function(message) {
          self.lastBroadcast = message.val().timestamp + 0.001;
        });
        // Set listener to listen for new added messages (last timestamp +1)
        self.setBroadcastFirebaseListeners();
      })
  }
}
UmiMessageService.prototype.getConfig = function getConfig(){
  var self = this;
  if (self.config.brandID) {
    self.configRef = self.firebaseApp.database().ref(self.config.brandID + '/public/config/'+ self.config.channelToken );
    return self.configRef.once('value').then(
      function getFirebaseWidgetConfig(dataSnapshot){
        var configData = {};
        dataSnapshot.forEach(function(config) {
          configData[ config.key ] = config.val();
        });
        helloumi.webchat.umichatcore.updateConfig( configData );
      }
    );
  } else {
    return false;
  }
}

// Set listener to listen for new added messages (last timestamp +1)
UmiMessageService.prototype.setBroadcastFirebaseListeners = function setBroadcastFirebaseListeners(){
  this.broadcastRef.off('child_added');
  this.broadcastRef.orderByChild("timestamp").startAt(this.lastBroadcast).on('child_added', function(messageSnapshot){
    // TODO: da error helloumi.utils.core.extends
    // var data = helloumi.utils.core.extends({},messageSnapshot.val());
    var data = messageSnapshot.val()
    data['key'] = messageSnapshot.key;
    data['read'] = false;
    helloumi.webchat.umichatcore.loadMessage(data);

    // @raul | @osama -> Notification moved to GUI
    // Play notification
    // helloumi.webchat.umichatgui.notify();

    // TODO: cambiar por metodo
    var widgetIsOpen = (helloumi.webchat.umichatgui.container.className != "hu-js-closed");
    if (widgetIsOpen) {
      if ( document.hasFocus() ) {
        // TODO: marcar como leido en backend
        helloumi.webchat.umichatcore.refreshUnreadNotification([]);
      }
    } else {
      helloumi.webchat.umichatgui.renderProactiveMessage( data );
    }
  });
}

/**
 * Sets Firebase Chat messages listeners (message added/removed)
 */
UmiMessageService.prototype.setChatListeners = function setChatListeners() {
  var self = this;
  // Set listener to listen for new added messages (last timestamp +1)
  self.chatRef.orderByChild("timestamp").startAt(self.lastTimestamp).on('child_added', function(messageSnapshot){
    // TODO: da error helloumi.utils.core.extends
    // var data = helloumi.utils.core.extends({},messageSnapshot.val());
    var data = messageSnapshot.val()
    data['key'] = messageSnapshot.key;
    if(data.samurai < 0){
    	self.pushBotsMessage(data);
    	self.activeBotsMessage();
    }
    else{
    	helloumi.webchat.umichatcore.loadMessage(data, true);
    }

    // If not readed
    if ( data.read !== true ) {
      // @raul | @osama -> Notification moved to GUI
      // Play notification
      // helloumi.webchat.umichatgui.notify();
      // If widget is Closed

      // If no samurai
      if (!data.samurai && data.samurai != 0) {
        // Set listener to mark messages as readed
        messageSnapshot.ref.on("child_added", function(snapshot){
          if( snapshot.key == "readed_at" ){
            helloumi.webchat.umichatcore.setReaded( messageSnapshot.key );
            messageSnapshot.ref.off("child_added"); // Removes listener when readed
          }
        });
      } else {
        // TODO: cambiar por metodo
        var widgetIsOpen = (helloumi.webchat.umichatgui.container.className != "hu-js-closed");
        if (widgetIsOpen) {
          if ( document.hasFocus() ) {
            // TODO: marcar como leido en backend
            helloumi.webchat.umichatcore.refreshUnreadNotification([]);
          }
        } else {
          helloumi.webchat.umichatgui.renderProactiveMessage( data, 8000 );
        }
      }
    }
  });

  // Set listener to listen for removed messages
  self.chatRef.on('child_removed', function(messageSnapshot){
    console.log("Message removed");
    // TODO: da error helloumi.utils
    // var data = helloumi.utils.core.extends({},message.val());
    var data = messageSnapshot.val()
    data['key'] = messageSnapshot.key;
    helloumi.webchat.umichatcore.deleteMessage( data );
  });

  self.typingRef.on('child_changed',self.setTypingState.bind(self));
  self.typingRef.on('child_added',self.setTypingState.bind(self));

  // If last message timestamp is greater than last broadcast updates broadcast listeners
  if (self.lastBroadcast < self.lastTimestamp) {
    self.lastBroadcast = self.lastTimestamp;
    self.setBroadcastFirebaseListeners();
  }

  self.statBrandRef.on('child_added',self.newAgentStatus.bind(self));
  self.statBrandRef.on('child_changed',self.updateBrandStatus.bind(self));

};

UmiMessageService.prototype.setTypingState = function setTypingState(message) {
	if(message.key === "agent") helloumi.webchat.umichatcore.setTypingState(message.val());
};


UmiMessageService.prototype.newAgentStatus = function newAgentStatus(message) {
  	var agentstatus = message.val();
  	if( agentstatus === 1){
  		helloumi.webchat.umichatcore.setBrandStatus(1);
  	}
  	else if(agentstatus === 2 && helloumi.webchat.umichatcore.getBrandStatus() ===0 ){
  		helloumi.webchat.umichatcore.setBrandStatus(2);
  	}
};


UmiMessageService.prototype.updateBrandStatus = function updateBrandStatus(message) {
	var self = this;
	self.statBrandRef.once('value').then(function(messageSnapshot){
		var active = false;
		var busy = false;
	    messageSnapshot.forEach(function(message) {
	      var agentstatus = message.val();
	      if( agentstatus === 1) active = true;
	      else if(agentstatus === 2) busy = true;
	    });
	    if(active)helloumi.webchat.umichatcore.setBrandStatus(1);
	    else if(busy)helloumi.webchat.umichatcore.setBrandStatus(2);
	    else helloumi.webchat.umichatcore.setBrandStatus(0);
  });
};
UmiMessageService.prototype.storeMessage = function storeMessage(message,key) {

};


UmiMessageService.prototype.pushBotsMessage = function pushBotsMessage(message) {

	if(this.botsMessage.length === 0 || this.botsMessage[this.botsMessage.length -1 ].timestamp < message.timestamp) {
		this.botsMessage.push(message);
		return;
	}
	else{
		for(var i=0; i< this.botsMessage.length ; i++){
			if(this.botsMessage[i].timestamp > message.timestamp){
				this.botsMessage.splice(i,0,message);
				return;
			}
		}
	}
};

UmiMessageService.prototype.activeBotsMessage = function activeBotsMessage() {
	var self = this;
	if(this.botsMessageHandler) return;

	this.botsMessageHandler = true;

	// var message = self.consumerBotsMesssages();
  // var delayTime = self.getDelayTimeMessage(message);
	// setTimeout(self.loadBotMessage.bind(self,message),delayTime);

	setTimeout(function(){
		var message = self.consumerBotsMesssages();
		helloumi.webchat.umichatcore.setTypingState(message.samurai);
		var delayTime = self.getDelayTimeMessage(message);
		setTimeout(self.loadBotMessage.bind(self,message,1),delayTime);
	},1000);
};


UmiMessageService.prototype.loadBotMessage = function loadBotMessage(message,id) {
	var self = this;
	helloumi.webchat.umichatcore.loadMessage(message, true);
	helloumi.webchat.umichatcore.setTypingState("");

	message = this.consumerBotsMesssages();
	if(typeof(message) !== 'undefined' ) {
		var delayTime = this.getDelayTimeMessage(message);
		helloumi.webchat.umichatcore.setTypingState(message.samurai);
		setTimeout(self.loadBotMessage.bind(self,message,id+1),delayTime);
	}
	else{
		this.botsMessageHandler = false;
	}
};

UmiMessageService.prototype.consumerBotsMesssages = function consumerBotsMesssages() {
	return this.botsMessage.shift();
};


UmiMessageService.prototype.getDelayTimeMessage = function getDelayTimeMessage(message) {
	if (!message.hasOwnProperty('extra_data')){
		return 1000;
	}
	var delay = parseFloat(message.extra_data['delaytime']);
	if (delay === 0 ) return 1000
	return delay !== null? delay * 1000: 1000;
};
