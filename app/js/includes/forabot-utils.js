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
    window.sendMessageBackup = window.sendMessageBackup || helloumi.webchat.umichatcore.sendMessage;
    helloumi.webchat.umichatcore.sendMessage = function( formData ) {
      window.jsbot.send(formData.get('message'));
    };
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

function forabotMessageSent( message ) {
  $('#hu-container-widget').attr('data-textbox', 'hidden');
  var __timestamp = message.timestamp || Date.now() / 1000;
  var __datetime = new Date(__timestamp);
  var __message = {
    key: 'jsbot-' + __timestamp,
    message: message.text,
    title: message.text,
    timestamp: __timestamp,
    time: helloumi.utils.date.hhmm( __datetime ),
    day: helloumi.utils.date.yyyymmdd( __datetime ),
    readClass: 'hu-js-readed',
    authorClass: 'hu-messenger-message-user',
    type: 'text',
    incoming: true
  }
  helloumi.webchat.umichatcore.loadMessage(__message);
}

function forabotMessageReceived( message ) {
  var __datetime = new Date(__timestamp);
  var __timestamp = message.timestamp || Date.now() / 1000;
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
    type: (message.image) ? 'image' : (message.buttons && message.buttons.length > 0) ? 'dialog' : 'text',
    buttons: $.map(message.buttons, function(elem,index) {
      return elem.caption;
    }),
    payloads: $.map(message.buttons, function(elem,index) {
      return elem.caption;
    }),
    incoming: true,
    features: {
      hide_textbox: true
    },
  }
  helloumi.webchat.umichatcore.loadMessage(__message);
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
    helloumi.webchat.umichatcore.sendMessage = window.sendMessageBackup;
    window.sendMessageBackup = false;
    $('#hu-container-widget').attr('data-textbox', 'show');
    $('#hu-composer-box').focus();
  });
  window.jsbot.load(
    new ForaBot(Date.now().toString(), __data )
  );
  window.sendMessageBackup = window.sendMessageBackup || helloumi.webchat.umichatcore.sendMessage;
  helloumi.webchat.umichatcore.sendMessage = function( formData ) {
    window.jsbot.send(formData.get('message'));
  };
  $('#hu-container-widget').attr('data-textbox', 'hidden');
  window.jsbot.start(step);
  document.getElementById('hu-webchat-loader').style.setProperty('display', 'none', 'important');
}

function loadContentBuilder(elem){
  getStaticBot('files/jsbots/bot-builder-content.json');
  $(elem).parent().remove();
}
