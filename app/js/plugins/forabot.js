// MIT License
//
// Copyright (c) 2017 Osama Nehme (onehdev@gmail.com)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/**
 * ForaBotJs - Represents a bot
 *
 * @constructor
 * @param {String} id Bot ID
 * @param {Object} data Bot data
 */
function ForaBot( id, data ) {
  var __idValidator = new RegExp('^[0-9a-zA-Z_-]+$','g');
  if ( typeof(id) === 'string' && __idValidator.test(id) ) {
    this.id = id;
    this.init = undefined;
    this.status = {};
    this.keywords = {};
    this.storage = {};
    if ( typeof(data) === 'object' ) {
      this.name = data.name || undefined;
      this.init = data.init || undefined;
      this.autotypingTimeout = (typeof(data.autotypingTimeout) == 'number') ? data.autotypingTimeout : 0;
      if ( typeof(data.status) === 'object' ) {
        for ( var __key in data.status ) {
          this.status[__key] = new ForaBotStatus( __key, data.status[__key], this);
        }
      }
      if ( typeof(data.keywords) === 'object' ) {
        for ( var __key in data.keywords ) {
          this.keywords[__key] = new ForaBotKeyword( __key, data.keywords[__key], this);
        }
      }
      if ( typeof(data.storage) === 'object' ) {
        for ( var __key in data.storage ) {
          this.storage[__key] = data.storage[__key];
        }
      }
    } else {
      this.name = undefined;
      this.init = undefined;
      this.autotypingTimeout = 0;
    }
  } else {
    throw new ForaBotError('ForaBot : Bot ID must be a valid string')
  }
}

/**
 * ForaBotJs - Main controller
 *
 * @constructor
 */
function ForaBotController() {
  this.botStatus = 0;
  this.timeout = null;
  this.timeoutOverwrite = 0;
  this.currentStatus = null;
  this.listeners = {};
  this.currentBot = null;
  this.storage = new ForaBotStorage();
  console.info(this.getTime() + 'ForaBotController : Instance created');
}

/**
 * Attach an event handler function for one event
 * @param {String} eventType - Event type (can be multiple events separated by spaces)
 * @param {Function} callbackFn - Callback
 */
ForaBotController.prototype.on = function on(eventType, callbackFn) {
  var self = this;
  var __setListener = function(eventType, callbackFn) {
    var listeners = self.listeners[ eventType ];
    if ( typeof(listeners) != 'undefined' ){
      if ( listeners.indexOf(callbackFn) == -1 ) {
        listeners.push( callbackFn );
      }
    } else {
      self.listeners[ eventType ] = [ callbackFn ];
    }
  }
  if ( typeof(eventType) == 'string' ) {
    var __splited = eventType.split(' ');
    if (__splited.length === 1) {
      __setListener(eventType, callbackFn);
    } else {
      for (var i=0; i<__splited.length; i++) {
        __setListener(__splited[i], callbackFn);
      }
    }
  }
};

/**
 * Dettach an event handler function for one event type
 * If no callbackFn specified will dettach all event's handlers
 * @param {String} eventType - Event type (can be multiple events separated by spaces)
 * @param {Function} callbackFn - Callback (optional)
 */
ForaBotController.prototype.off = function off(eventType, callbackFn) {
  var self = this;
  var __clearListener = function(eventType, callbackFn) {
    var listeners = self.listeners[ eventType ];
  	if ( typeof(listeners) != 'undefined' ){
      if (callbackFn) {
        var index = listeners.indexOf(callbackFn);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      } else {
        delete self.listeners[ eventType ];
      }
    }
  }
  if ( typeof(eventType) == 'string' ) {
    var __splited = eventType.split(' ');
    if (__splited.length === 1) {
      __clearListener(eventType, callbackFn);
    } else {
      for (var i=0; i<__splited.length; i++) {
        __clearListener(__splited[i], callbackFn);
      }
    }
  }
};

/**
 * Execute all handlers attached to an eventType
 * @param {String} eventType - Event type
 * @param {Object} data - Event data
 */
ForaBotController.prototype.trigger = function trigger(eventType, data) {
  var listeners = this.listeners[ eventType ];
  if ( typeof(listeners) != 'undefined' ){
    for (var i=0; i<listeners.length; i++) {
      if ( typeof(listeners[i]) == "function" ) listeners[i]( data );
    }
  }
};

ForaBotController.prototype.load = function load( bot ) {
  if (bot instanceof ForaBot) {
    this.reset();
    this.currentBot = bot;
    if ( Object.keys(this.currentBot.storage).length > 0 ) {
      this.storage.load( this.currentBot.storage );
    }
    console.info(this.getTime() + 'ForaBotController[load] : Bot successfully loaded');
  } else {
    throw new ForaBotError('ForaBotController[load] : Cannot load received bot, must be a valid ForaBot instance')
  }
};

ForaBotController.prototype.reset = function reset() {
  this.storage = new ForaBotStorage();
}

ForaBotController.prototype.start = function start( status ) {
  if (this.botStatus === 0 && (status || this.currentBot.init) ) {
    console.info(this.getTime() + 'ForaBotController[start] : Starting bot...');
    if ( typeof(status) == 'string' ) {
      this.currentStatus = status;
    } else if ( typeof(this.currentBot.init) == 'string' ) {
      this.currentStatus = this.currentBot.init;
    } else if ( this.currentBot.init.length ) {
      var __random = Math.floor(Math.random() * (this.currentBot.init.length));
      this.currentStatus = this.currentBot.init[__random];
    } else {
      throw new ForaBotError('ForaBotController[start] : Bot\'s initial status error, must be String or String[]!')
    }
    this.botStatus = 1; // Running
    var __status = this.currentBot.status[ this.currentStatus ];
    if ( __status ) {
      var __timeout = 500;
      console.info(this.getTime() + 'ForaBotController[start] : Bot is typing (' + __timeout + ' ms)');
      this.trigger('typing', { timeout: __timeout } );
      this.timeout = setTimeout(this.checkCurrent.bind(this), __timeout);
    } else {
      throw new ForaBotError('ForaBotController[start] : Bot\'s initial status error, "' + this.currentStatus + '" doesn\'t exist!');
    }
  } else {
    console.info(this.getTime() + 'ForaBotController[start] : No initial status defined');
  }
};

ForaBotController.prototype.extend = function extend(defaults, overwrites){
  for(var __key in overwrites) {
    if( overwrites.hasOwnProperty(__key) ) {
      defaults[__key] = overwrites[__key];
    }
  }
  return defaults;
}

ForaBotController.prototype.checkCurrent = function checkCurrent() {
  if (this.currentStatus === false ) {
    console.info(this.getTime() + 'ForaBotController[checkCurrent] : Bot says goodbye!');
    this.trigger('finish');
  } else if (this.currentStatus) {
    var __status = this.currentBot.status[ this.currentStatus ];
    var __message = this.extend( { id: Date.now() }, this.currentBot.status[ this.currentStatus ] );
    // Check for counter attribute
    if (__status && __status.counter) {
      var __actual = this.storage.getItem(__status.counter);
      if ( parseFloat(__actual) > 0 ) {
        this.storage.setItem(__status.counter, __actual+1);
      } else {
        this.storage.setItem(__status.counter, 1);
      }
    }
    // Check for UNSTORE action
    if ( __status && __status.unstore ) {
      this.storage.removeItem(__status.unstore);
    }
    if (__message.text) {
      __message.text = this.storage.replace(__message.text); // Replace stored values
    }
    this.botStatus = 1; // Running
    console.info(this.getTime() + 'ForaBotController[checkCurrent] : Bot sends a message (' + this.currentStatus + ')');
    this.trigger('output',  __message ); // Throw OUTPUT event
    this.next(); // Points to next status
  }
};

ForaBotController.prototype.getTime = function getTime(){
  var __date = new Date();
  var __hours = (__date.getHours() < 10) ? '0' + __date.getHours() : __date.getHours();
  var __minutes = (__date.getMinutes() < 10) ? '0' + __date.getMinutes() : __date.getMinutes();
  var __seconds = (__date.getSeconds() < 10) ? '0' + __date.getSeconds() : __date.getSeconds();
  return '[' + __hours + ':' + __minutes + ':' + __seconds + '] ';
}

ForaBotController.prototype.stop = function stop() {
  console.info(this.getTime() + 'ForaBotController[stop] : Stopping bot...');
  if (this.timeout) clearTimeout( this.timeout );
  this.timeout = null;
  this.status = 9;
  this.timeoutOverwrite = 0;
};


ForaBotController.prototype.send = function send( value ) {
  console.info(this.getTime() + 'ForaBotController[send] : Bot receives a message (' + value + ')');
  if (typeof(value) != 'string') {
    throw new ForaBotError('ForaBotController[send] : Received message isn\'t a valid String');
  }
  if (this.botStatus == 2) { // Waiting
    console.info(this.getTime() + 'ForaBotController[send] : Processing message...');
    this.timeoutOverwrite = 10;
    var __status = this.currentBot.status[ this.currentStatus ];
    //
    // KEYWORDS CHECK
    //
    var __keywordRegExp = new RegExp('^\#[0-9a-zA-Z_-]+');
    if ( __keywordRegExp.test(value) ) {
      console.info(this.getTime() + 'ForaBotController[send] : Checking keyword ('+ value +')');
      var __keyword = this.currentBot.keywords[ value.replace('#','') ];
      if ( __keyword instanceof ForaBotKeyword ) {
        console.info(this.getTime() + 'ForaBotController[send] : Found a valid keyword ('+ value + ')');
        var __newCurrentStatus;
        // Checking if next status is defined
        if ( typeof(__keyword.next) != 'undefined' ) {
          if ( __keyword.next === false || typeof(__keyword.next) == 'string' ) {
            // next keyword is a String
            __newCurrentStatus = __keyword.next;
          } else {
            // next keyword is an Array
            if ( __keyword.next.length === 1 ) {
              __newCurrentStatus = __keyword.next[0];
            } else {
              var __random = Math.floor(Math.random() * (__keyword.next.length));
              __newCurrentStatus = __keyword.next[__random];
            }
          }
        }
        // Checking if an event must be thrown
        if (__keyword.event) {
          this.trigger( 'custom.'+ __keyword.event, this);
        }
        // Setup next status
        this.next( __newCurrentStatus );
        return true;
      }
    }
    //
    // BUTTONS CHECK
    //
    if (__status.buttons.length > 0) {
      for (var i=0; i<__status.buttons.length; i++){
        var __regexp = new RegExp(value, 'gi');
        var __button = __status.buttons[i];
        if ( __button.caption == value || __button.value == value ) {
          this.timeoutOverwrite = 0;
          // Throw INPUT event
          this.trigger('input', {
            currentStatus: this.currentStatus,
            nextStatus:  __button.next,
            valueReceived: value
          });
          // Check for UNSTORE action
          if ( __button.unstore ) {
            this.storage.removeItem(__button.unstore);
          }
          // Check for DECREASE action
          if ( __button.decrease ) {
            var __counter = this.storage.getItem(__button.decrease);
            if (typeof(__counter) == "number") {
              this.storage.setItem(__button.decrease, __counter-1);
            }
          }
          // Check for STORE action
          if ( __button.store ) {
            if (typeof(__button.store) == 'string') {
              var __value = __button.value || __button.caption;
              this.storage.setItem(__button.store, __value);
            }
          }
          // Check for FLAG action
          if ( __button.flag && __button.flag.length ) {
            if (typeof(__button.flag) == 'string') {
              this.storage.setItem(__button.flag, true);
            } else {
              for (var j=0; j<__button.flag.length; j++) {
                this.storage.setItem(__button.flag[i], true);
              }
            }
          }
          // Check for UNFLAG action
          if ( __button.unflag && __button.unflag.length ) {
            if (typeof(__button.unflag) == 'string') {
              this.storage.setItem(__button.unflag, false);
            } else {
              for (var j=0; j<__button.unflag.length; j++) {
                this.storage.setItem(__button.unflag[i], false);
              }
            }
          }
          // Checking if an event must be thrown
          if ( typeof(__button.event) == 'string' ) {
            this.trigger( 'custom.'+ __button.event, this);
          }
          // Points next status
          this.next( __button.next );
          return true;
        }
      }
    }
    //
    // INPUT CHECK
    //
    if ( typeof(__status.input) == "object" ) {
      // TODO: Validation (email, name, phone, ...)
      this.trigger('input', {
        currentStatus: this.currentStatus,
        nextStatus: __status.input.next,
        valueReceived: value
      });
      if (__status.input.store) {
        this.storage.setItem(__status.input.store, value);
      }
      this.next( __status.input.next );
      return true;
    }
    console.info(this.getTime() + 'ForaBotController[send] : Received message doesn\'t match any path');
    return false;
  } else {
    console.info(this.getTime() + 'ForaBotController[send] : Bot isn\'t waiting for a message (status=' + this.botStatus + ')');
    return false;
  }
};

ForaBotController.prototype.wait = function wait() {
  this.botStatus = 2; // Waiting
  console.info(this.getTime() + 'ForaBotController[wait] : Bot is waiting for a message (status=' + this.botStatus + ')');
  var __currentStatus = this.currentBot.status[ this.currentStatus ];
  if (__currentStatus.input) {
    this.trigger('waiting', __currentStatus );
  }
}

ForaBotController.prototype.next = function next( value ) {
  if ( typeof(value) != 'undefined' ) { // Received a new status
    var __status = this.currentBot.status[ this.currentStatus ];
    var __timeout = (__status) ? __status.getReadTime() : 500;
    console.info(this.getTime() + 'ForaBotController[next] : Bot is typing (' + __timeout + ' ms)');
    this.trigger('typing', { timeout: __timeout } );
    this.currentStatus = value;
    this.timeout = setTimeout(this.checkCurrent.bind(this), __timeout);
  } else if (this.currentStatus) {
    var __status = this.currentBot.status[ this.currentStatus ];
    if ( __status instanceof ForaBotStatus) {
      if ( __status.next == null || typeof(__status.next) == 'undefined' ) {
        this.wait();
      } else if ( __status.next === false ) {
        // next keyword is a False (END-OF-BOT)
        this.currentStatus = __status.next;
      } else if ( __status.next.length ) {
        if ( typeof(__status.next) == 'string' ) {
          // next keyword is a String
          this.currentStatus = __status.next;
        } else {
          // next keyword is an Array
          if ( __status.next.length === 1 ) {
            this.currentStatus = __status.next[0];
          } else {
            var __random = Math.floor(Math.random() * (__status.next.length));
            this.currentStatus = __status.next[__random];
          }
        }
        // Typing delay
        var __timeout = (__status) ? __status.getReadTime() : 500;
        console.info(this.getTime() + 'ForaBotController[next] : Bot is typing (' + __timeout + ' ms)');
        this.trigger('typing', { timeout: __timeout } );
        this.timeout = setTimeout(this.checkCurrent.bind(this), __timeout);
      } else {
        this.wait();
      }
    } else {
      throw new ForaBotError('ForaBotController[next] : Incorrect status keyword (' + this.currentStatus + ')');
    }
  } else {
    console.info(this.getTime() + 'ForaBotController[next] : Bot says goodbye!');
    this.trigger('finish');
  }
};

/**
 * ForaBotJs - Custom error class
 *
 * @constructor
 * @param {String} message - Error essage
 */
function ForaBotError( message ) {
  this.name = 'ForaBotError';
  this.message = message || "An error occurred :(";
}

ForaBotError.prototype = new Error();
ForaBotError.prototype.constructor = ForaBotError;

/**
 * ForaBotJs - Represents a bot keyword
 *
 * @constructor
 * @param {String} id - Status ID
 * @param {Object} data - Status data
 * @param {ForaBot} bot - Super reference
 */
function ForaBotKeyword( id, data, bot ) {
  var __idValidator = new RegExp('^[0-9a-zA-Z_-]+$','g');
  if ( typeof(id) === 'string' && __idValidator.test(id) ) {
    this.id = id;
    this.super = bot;
    if ( typeof(data) === 'object' ) {
      for(var __key in data) {
        this[__key] = data[__key];
      }
      this.event = data.event || null;
      this.next = (data.next || data.next === false) ? data.next : null;
    } else {
      this.event = null;
      this.next = null;
    }
  } else {
    throw new ForaBotError('ForaBotKeyword : Keyword ID must be a valid string')
  }
}

/**
 * ForaBotJs - Represents a bot status
 *
 * @constructor
 * @param {String} id - Status ID
 * @param {Object} data - Status data
 * @param {ForaBot} bot - Super reference
 */
function ForaBotStatus( id, data, bot ) {
  var __idValidator = new RegExp('^[0-9a-zA-Z_-]+$','g');
  if ( typeof(id) === 'string' && __idValidator.test(id) ) {
    this.id = id;
    this.super = bot;
    if ( typeof(data) === 'object' ) {
      for(var __key in data) {
        this[__key] = data[__key];
      }
      this.text = data.text || null;
      this.next = (data.next || data.next === false) ? data.next : null;
      this.images = data.images || null;
      this.buttons = data.buttons || [];
      this.download = data.download || null;
      this.code = data.code || null;
      this.link = data.link || null;
    } else {
      this.text = null;
      this.next = null;
      this.images = null;
      this.buttons = [];
      this.download = null;
      this.code = null;
      this.link = null;
    }
  } else {
    throw new ForaBotError('ForaBotStatus : Status ID must be a valid string')
  }
}

ForaBotStatus.prototype.getReadTime = function getReadTime() {
  var __time = 0;
  if (this.super.autotypingTimeout) {
    var __lastTime = localStorage.getItem('ForaBotStatus-' + this.super.id + '-' + this.id);
    var __actualTime = Date.now();
    if (__lastTime && (__actualTime - __lastTime < this.super.autotypingTimeout) ) {
      __time = 50; // If message already loaded in last minute... no delay
    }
  }
  if (__time === 0) {
    if ( this.text ) {
      __time += (this.text.split(/[\s\.\,\;\:]/).length / 350) * 60000;
    }
    if ( this.image ) {
      if ( typeof(this.image) == 'string' ) {
        __time += 500;
      } else {
        __time += this.image.length * 500;
      }
    }
    if ( this.download ) {
      __time += 50;
    }
    if ( this.link ) {
      __time += 50;
    }
    if ( this.code ) {
      __time += (this.text.split(/[\s\.\,\;\:]/).length / 350 / 2) * 60000;
    }
    if ( this.buttons ) {
      __time += (this.buttons.length / 350) * 60000;
    }
  }
  if (this.super.autotypingTimeout) {
    localStorage.setItem('ForaBotStatus-' + this.super.id + '-' + this.id, Date.now());
  }
  return Math.floor(__time);
};

/**
 * ForaBotJs - Custom storage class
 *
 * @constructor
 * @param {String} message - Error essage
 */
function ForaBotStorage() {
  this.storage = {};
  this.insideRegExp = new RegExp('~([a-zA-Z0-9_\]+)~','g');
  this.outsideRegExp = new RegExp('\\$([a-zA-Z0-9_\~]+)','g');
}

ForaBotStorage.prototype.setItem = function setItem( key, value) {
  if (typeof(key) == "string") {
    this.storage[ this.replace(key, true) ] = value;
  } else {
    throw new ForaBotError('ForaBotStorage[setItem] : Storage key must be a valid String')
  }
}

ForaBotStorage.prototype.load = function load( data ) {
  if ( typeof(data) == 'object') {
    for (var key in data) {
      this.setItem(key, data[key]);
    }
  } else {
    throw new ForaBotError('ForaBotStorage[load] : Storage data must be a valid JSON')
  }
}

ForaBotStorage.prototype.getItem = function getItem( key ) {
  return this.storage[ this.replace(key, true) ];
}

ForaBotStorage.prototype.removeItem = function removeItem( key ) {
  if ( this.outsideRegExp.test(key) ) {
    if (typeof(this.storage[ this.replace(key, true) ]) != "undefined") {
      delete this.storage[ this.replace(key, true) ];
      return true;
    } else {
      return false;
    }
  } else {
    // RegExp
    var __customRegExp = new RegExp(this.replace(key, true), 'g');
    var __keysToDelete = [];
    for (var __key in this.storage) {
      if ( __customRegExp.test( __key ) ) {
        __keysToDelete.push(__key);
      }
    }
    if (__keysToDelete.length > 0) {
      for (var i=0; i<__keysToDelete.length; i++){
        delete this.storage[ __keysToDelete[i] ];
      }
      return true;
    } else {
      return false;
    }
  }
}

ForaBotStorage.prototype.replace = function replace( value, inside){
  var __regexp = (inside === true) ? this.insideRegExp : this.outsideRegExp
  if (typeof(value) == 'string') {
    var __matches = value.match(__regexp);
    if (__matches) {
      for (var i=0; i<__matches.length; i++){
        var __match = __matches[i].replace(__regexp, '$1');
        var __storedValue = this.getItem(__match) || '';
        value = value.replace(__matches[i], __storedValue, 'g');
      }
    }
  }
  return value;
}

//# sourceMappingURL=forabot.js.map
