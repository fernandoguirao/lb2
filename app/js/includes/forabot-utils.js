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
          postal_code: '¿Puedes indicarme tu código postal?',
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
function forabotSaveBot( controller ){
  helloumi.webchat.umichatcore.setTypingState(-22);

  var __data = controller.getCurrentData();
  var __storage = __data.storage;
  var __left = 200;
  var __top = 200;
  if (__storage.crea_bot === true) {
    var __roninStatus = {};

    // welcome_1
    __roninStatus['welcome_1'] = {
      name: 'Welcome',
      function: '__send_message__',
      responses: [{
        order: 0,
        entity: 'text',
        text: __storage.welcome_1
      }],
      next: {
        success: (__storage.welcome_2) ? 'welcome_2' : null
      },
      hidetextbox: true,
      left: __left,
      top: __top
    };
    __top += 100;

    if (__storage.welcome_2) {
      // welcome_2
      __roninStatus['welcome_2'] = {
        name: 'Purpose',
        function: '__send_message__',
        responses: [{
          order: 0,
          entity: 'text',
          text: __storage.welcome_2
        }],
        next: {
          success: (__storage.form === true || __storage.faqs === true) ? 'menu' : null
        },
        hidetextbox: true,
        left: __left,
        top: __top
      };
      __top += 100;
    }

    // menu (static)
    if (__storage.form === true || __storage.faqs === true) {
      __roninStatus['menu'] = {
        name: 'Menu',
        function: '__send_message__',
        responses: [{
          "order": 0,
          "entity": "button",
          "text": "¿En qué puedo ayudarte?",
          "buttons": [],
          "choice_text": "*Type the number of the option you are interested in"
        }],
        next: {
          success: 'menu_pick'
        },
        hidetextbox: true,
        left: __left + 400,
        top: __top
      };
      __top += 100;

      __roninStatus['menu_pick'] = {
        name: 'Pick selected option',
        function: '__choice__',
        next: {},
        hidetextbox: true,
        left: __left + 200,
        top: __top
      };
      __top += 100;

      if (__storage.form === true) {
        __roninStatus['menu'].responses[0].buttons.push(__storage.form_name);
        var __keywords = __storage.form_name.split(' ');
        for (var i=0; i<__keywords.length; i++) {
          var __key = __keywords[i].toLowerCase().replace(/[^a-z0-9_]/g,'');
          __roninStatus['menu_pick'].next[__key] = (__storage.form_user === true) ? 'form_user_1' : 'form_custom_1';
        }
      }
      if (__storage.faqs === true) {
        __roninStatus['menu'].responses[0].buttons.push('FAQS');
        __roninStatus['menu_pick'].next['faqs'] = 'faqs';
      }
    }

    var __topAux = __top;
    var __formFields = {};

    // form_user
    if (__storage.form_user === true) {
      var __index = 1;
      var __nextStatus = (__storage.form_custom === true) ? 'form_custom_1' : 'form_farewell';
      var __fields = __storage.form_user_fields.split(',');
      var FIELDS = {
        name: {
          text: '¿Cómo te llamas?'
        },
        email: {
          text: '¿Cuál es tu email?',
          error: 'Eso no parece un email válido'
        },
        phone: {
          text: '¿Cuál es tu número de teléfono?',
          error: 'Eso no parece un número de teléfono válido'
        },
        postal_code: {
          text: '¿Puedes indicarme tu código postal?'
        },
        address: {
          text: '¿Cuál es tu dirección?'
        },
        city: {
          text: '¿Cuál es tu ciudad?',
          custom: true
        },
        country: {
          text: '¿Cuál es tu país?',
          custom: true
        },
        company: {
          text: '¿Cómo se llama tu empresa?',
          custom: true
        },
        birthdate: {
          text: '¿Cuál es tu fecha de nacimiento?'
        },
      }
      for (var i=0; i<__fields.length; i++) {
        var __text = (FIELDS[ __fields[i] ]) ? FIELDS[ __fields[i] ].text : '¿Puedes indicarme tu ' + __fields[i] + '?';
        var __next = (i == __fields.length-1) ? __nextStatus : 'form_user_'+(__index+1);
        __roninStatus['form_user_'+__index] = {
          name: __text.substr(0,20),
          function: '__send_message__',
          responses: [{
            order: 0,
            entity: 'text',
            text: __text
          }],
          next: {
            success: 'form_user_'+__index + '_pick'
          },
          hidetextbox: false,
          left: __left,
          top: __top
        };

        __roninStatus['form_user_'+__index + '_pick'] = {
          name: 'Pick @'+ __fields[i],
          function: '__text__',
          field: __fields[i],
          overwrite: true,
          next: {
            success: __next
          },
          left: __left,
          top: __top + 75
        };

        if ( FIELDS[ __fields[i] ] && FIELDS[ __fields[i] ].error ) {
          __roninStatus['form_user_'+__index + '_pick'].next.failed = 'form_user_'+__index + '_error';
          __roninStatus['form_user_'+__index + '_error'] = {
            name: 'Error @'+ __fields[i],
            function: '__send_message__',
            responses: [{
              order: 0,
              entity: 'text',
              text: FIELDS[ __fields[i] ].error
            }],
            next: {
              success: 'form_user_'+__index
            },
            hidetextbox: true,
            left: 10,
            top: __top + 75
          };
        }

        if ( FIELDS[ __fields[i] ] && FIELDS[ __fields[i] ].custom ) {
          __roninStatus['form_user_'+__index + '_pick'].field = 'custom';
          __roninStatus['form_user_'+__index + '_pick'].custom_field = __fields[i];
        }

        __formFields[__fields[i]] = '@' + __fields[i];

        __index += 1;
        __top += 150;
      }
    }

    // form_custom
    if (__storage.form_custom === true) {
      __left += 200;
      __top = __topAux
      var __nextStatus = 'form_farewell';
      for (var i=1; i<100; i++) {
        var __type = __storage['form_custom_' + i + '_type'] ;
        var __text = __storage['form_custom_' + i + '_text'] ;
        var __answer = __storage['form_custom_' + i + '_answer'] ;
        var __nextType = __storage['form_custom_' + (i+1) + '_type'] ;
        var __next = (!__nextType) ? __nextStatus : 'form_custom_'+(i+1);
        if ( __type == 'option') {
          __roninStatus['form_custom_'+i] = {
            name: __text.substr(0,20),
            function: '__send_message__',
            responses: [{
              order: 0,
              entity: 'button',
              text: __text,
              buttons: [],
              choice_text: '*Type the number of the option you are interested in'
            }],
            next: {
              success: 'form_custom_'+i+'_pick'
            },
            hidetextbox: true,
            left: __left,
            top: __top
          };


          var __answerArr = __answer.split(',');
          for (var j=0; j<__answerArr.length; j++) {
            __roninStatus['form_custom_'+i].responses[0].buttons.push(__answerArr[j]);
            // var __keyword = __answerArr[j].split(' ')[0].replace(/[^a-z0-9_]/gi,'');
            // __roninStatus['form_custom_'+i].next[__keyword] = __next;
          }
        } else if ( __type == 'options') {
          __roninStatus['form_custom_'+i] = {
            name: __text.substr(0,20),
            function: '__send_message__',
            responses: [{
              order: 0,
              entity: 'button',
              text: __text,
              buttons: [],
              choice_text: '*Type the number of the option you are interested in'
            }],
            next: {
              success: 'form_custom_'+i+'_pick'
            },
            hidetextbox: true,
            left: __left,
            top: __top
          };
          var __answerArr = __answer.split(',');
          for (var j=0; j<__answerArr.length; j++) {
            __roninStatus['form_custom_'+i].responses[0].buttons.push(__answerArr[j]);
          }
        } else { // if ( __type == 'text') {
          __roninStatus['form_custom_'+i] = {
            name: __text.substr(0,20),
            function: '__send_message__',
            responses: [{
              order: 0,
              entity: 'text',
              text: __text
            }],
            next: {
              success: 'form_custom_'+i+'_pick'
            },
            hidetextbox: false,
            left: __left,
            top: __top
          };
        }
        __top += 100;

        __roninStatus['form_custom_'+i+'_pick'] = {
          name: 'Pick response' ,
          function: '__text__',
          field: 'custom',
          custom_field: 'question'+i,
          overwrite: true,
          next: {
            success: __next
          },
          left: __left,
          top: __top
        };
        __top += 100;

        __formFields['question' + i] = '@' + 'question' + i;

        if (!__nextType) break;
      }
    }

    if (__storage.form === true) {
      // form_farewell
      __roninStatus['form_farewell'] = {
        name: 'Farewell',
        function: '__send_message__',
        responses: [{
          order: 0,
          entity: 'text',
          text: __storage.form_farewell
        }],
        next: {
          success: (__storage.form_send_api) ? 'form_send_api' :
                   (__storage.form_send_email) ? 'form_send_email' : 'another'
        },
        hidetextbox: true,
        left: __left,
        top: __top
      };
      __top += 100;

      if (__storage.form_send_api ) {
        __roninStatus['form_send_api'] = {
          name: 'API Request',
          function: '__send_request__',
          headers: {
            'Content-Type': 'application/json'
          },
          delaytime: 0,
          method: 'POST',
          url: __storage.form_send_api,
          next: {
            success: 'another',
            // TODO: Controlar error en API request
          },
          data: __formFields,
          left: __left,
          top: __top
        };
        __top += 100;
      }

      if (__storage.form_send_email ) {
        __roninStatus['form_send_email'] = {
          name: 'Send email',
          function: '__send_request__',
          headers: {
            'Content-Type': 'application/json'
          },
          delaytime: 0,
          method: 'POST',
          url: __storage.form_send_email,
          next: {
            success: 'another',
            // TODO: Controlar error en envio de email?
          },
          data: __formFields,
          left: __left,
          top: __top
        };
        __top += 100;
      }

      // Another question (static)
      __roninStatus['another'] = {
        name: 'Another question',
        function: '__send_message__',
        responses: [{
          order: 0,
          entity: 'button',
          text: '¿Tienes alguna otra consulta?',
          buttons: ['Sí', 'No'],
          choice_text: '*Type the number of the option you are interested in'
        }],
        next: {
          success: 'another_pick'
        },
        hidetextbox: true,
        left: __left,
        top: __top
      };
      __top += 100;

      __roninStatus['another_pick'] = {
        name: 'Pick selected option',
        function: '__choice__',
        next: {
          'si': 'menu',
          'no': 'end_form'
        },
        hidetextbox: true,
        left: __left + 100,
        top: __top
      };
      __top += 100;

      // end form (static)
      __roninStatus['end_form'] = {
        name: 'Form Farewell',
        function: '__send_message__',
        responses: [{
          order: 0,
          entity: 'text',
          text: 'Genial, ¡Hasta pronto! 👋'
        }],
        next: {},
        hidetextbox: false,
        left: __left,
        top: __top
      };
      __top += 100;
    }

    // faqs
    if (__storage.faqs === true) {
      __top = __topAux;
      __left += 200;
      // faqs menu
      __roninStatus['faqs'] = {
        name: 'FAQS',
        function: '__send_message__',
        responses: [{
          order: 0,
          entity: 'button',
          text: 'Por supuesto, selecciona un tema',
          buttons: [],
          choice_text: '*Type the number of the option you are interested in'
        }],
        next: {
          success: 'faqs_pick'
        },
        hidetextbox: true,
        left: __left,
        top: __top
      };
      __top += 100;

      __roninStatus['faqs_pick'] = {
        name: 'Pick selected option',
        function: '__choice__',
        next: {},
        hidetextbox: true,
        left: __left,
        top: __top
      };

      for (var i=1; i<100; i++) {
        // New button
        var __name = __storage['faqs_' + i + '_name'] ;
        var __nextName = __storage['faqs_' + (i+1) + '_name'] ;
        __roninStatus['faqs'].responses[0].buttons.push(__name);

        var __keywords = __name.split(' ');
        for (var j=0; j<__keywords.length; j++) {
          var __key = __keywords[j].toLowerCase().replace(/[^a-z0-9_]/g,'');
          __roninStatus['faqs_pick'].next[__key] = 'faqs_'+ i + '_messages_1';
        }

        // New faqs
        for (var j=1; j<100; j++) {
          var __message = __storage['faqs_' + i + '_messages_' + j] ;
          var __nextMessage = __storage['faqs_' + i + '_messages_' + (j+1)] ;
          var __next = (!__nextMessage) ? 'another_faq' : 'faqs_'+i+'_messages_'+(j+1);
          __roninStatus['faqs_'+i+'_messages_'+j] = {
            name: 'FAQ '+ __name +  ' ' + j,
            function: '__send_message__',
            responses: [{
              order: 0,
              entity: 'text',
              text: __message
            }],
            next: {
              success: __next
            },
            hidetextbox: false,
            left: __left + (200 * i),
            top: __top + (100 * j)
          }
          if (!__nextMessage) break;
        }

        if (!__nextName) break;
      }

      // Another faq (static)
      __roninStatus['another_faq'] = {
        name: 'Another question',
        function: '__send_message__',
        responses: [{
          order: 0,
          entity: 'button',
          text: '¿Tienes alguna otra consulta?',
          buttons: [ 'Sí', 'Terminar' ],
          choice_text: '*Type the number of the option you are interested in'
        }],
        next: {
          success: 'another_faq_pick'
        },
        hidetextbox: true,
        left: __left + 100,
        top: __top + 500
      };

      __roninStatus['another_faq_pick'] = {
        name: 'Pick selected option',
        function: '__choice__',
        next: {
          'si': 'menu',
          'terminar': 'end_faq'
        },
        hidetextbox: true,
        left: __left + 200,
        top: __top + 600
      };

      // end faq (static)
      __roninStatus['end_faq'] = {
        name: 'FAQS Farewell',
        function: '__send_message__',
        responses: [{
          order: 0,
          entity: 'text',
          text: 'Gracias, espero haberte servido de ayuda. ¡Hasta pronto!',
        }],
        next: {},
        hidetextbox: false,
        left: __left + 100,
        top: __top + 700
      };
    }


    // transform status IDs
    var __statusArray = [];
    for (var __key in __roninStatus) {
      __statusArray.push( __key );
    }
    for (var __key in __roninStatus) {
      if ( __roninStatus[__key].next) {
        for (var __nextKey in __roninStatus[__key].next) {
          var __newId = __statusArray.indexOf( __roninStatus[__key].next[__nextKey] );
          if (__newId >= 0) {
            __roninStatus[__key].next[__nextKey] = (__newId + 1).toString();
          }
        }
      }
    }
    for (var i=0; i<__statusArray.length; i++) {
      var __newId = ( i+1 ).toString();
      __roninStatus[__newId] = $.extend({}, __roninStatus[ __statusArray[i] ]);
      delete __roninStatus[ __statusArray[i] ];
    }

    console.log(__roninStatus);

    // TODO: POST to backend

    setTimeout(function(){
      helloumi.webchat.umichatcore.setTypingState('');
      window.jsbot.go('finish_0')
    },2000)
  } else {
    return undefined;
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
  $title.text('Selecciona al menos una opción');
  $container.parent().prepend($title);

  //
  // Create check buttons
  //
  $.each( __data.values, function( key, elem ){
    var $checkItem = $('<div class="hu-btn hu-btn-sm hu-btn-block hu-btn-pink hu-btn-checkbox"><span class="fi check"></span><span data-click="' + key + '">' + elem + '</span></div>')
    $checkItem.on('click', function(){
      $(this).toggleClass('hu-btn-checked');
      var $checks = $container.find('.hu-btn-checkbox.hu-btn-checked');
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
    var $checks = $container.find('.hu-btn-checkbox.hu-btn-checked');
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
  // $('#hu-container-widget').attr('data-textbox', 'hidden');
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
    type: (message.image) ? 'image' : (message.buttons && message.buttons.length > 0) || (message.checklist) ? 'dialog' : 'text',
    extra_data: message.extra_data,
  }
  if (message.buttons && message.buttons.length > 0) {
    __message.buttons = $.map(message.buttons, function(elem,index) {
      return elem.caption;
    });
    __message.payloads = $.map(message.buttons, function(elem,index) {
      return elem.caption;
    });
  }
  helloumi.webchat.umichatcore.loadMessage(__message);
}
