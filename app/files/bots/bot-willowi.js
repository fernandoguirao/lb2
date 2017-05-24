{
  "5": {
    "function": "__send_message__",
    "id": "5",
    "name": "¿Y tus *apellidos*?",
    "top": 337,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "¿Y tus *apellidos*? No es que nos encanten los formalismos, pero necesitamos saberlo 🤓\n*_Escribe tus apellidos debajo_*"
      }
    ],
    "next": {
      "success": "6"
    },
    "delaytime": 0,
    "left": 94
  },
  "10": {
    "function": "__send_message__",
    "id": "10",
    "name": "Error message",
    "top": 653,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "¿Seguro que eso era un email? *Inténtalo de nuevo*, por favor\n*_Escribe de nuevo tu email_*"
      }
    ],
    "next": {
      "success": "9"
    },
    "delaytime": 0,
    "left": 320
  },
  "13": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 317,
    "id": "13",
    "next": {
      "dejar": "17",
      "productos": "20",
      "mensaje": "17",
      "ver": "20",
      "comentario": "17",
      "terminar": "28"
    },
    "delaytime": 0,
    "left": 293,
    "hidetextbox": true
  },
  "9": {
    "function": "__email__",
    "id": "9",
    "name": "Pick @email",
    "top": 647,
    "field": "email",
    "overwrite": true,
    "next": {
      "failed": "10",
      "success": "14"
    },
    "delaytime": 0,
    "left": 103
  },
  "30": {
    "function": "__send_message__",
    "id": "30",
    "name": "Crea landbot",
    "top": 213,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "{html}<img src=\"x\" onerror=\"jsReferral(this)\">\n<div class=\"la-flex referral\">\n    <a class=\"la-choices\" href=\"http://landbot.io/?utm_source=referral&utm_medium=customers&utm_campaign=willowi\">\n        <span class=\"fi heart\"></span>\n        <span>Crea tu propio Landbot</span>\n    </a>\n</div>{/html}"
      }
    ],
    "hidetextbox": true,
    "delaytime": 0,
    "left": 916
  },
  "31": {
    "function": "__send_message__",
    "id": "31",
    "name": "{html}<img src=\"x\" o",
    "top": 551,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "{html}<img src=\"x\" onerror=\"jsFlex(this);\">\n<div class=\"la-flex\">\n<div class=\"la-choices\">\n    <span class=\"fi speech-balloon\"></span>\n    <span>Dejar un mensaje</span>\n</div>\n<div class=\"la-choices\">\n    <span class=\"fi home\"></span>\n    <span>Ver productos</span>\n</div>\n<div class=\"la-choices\">\n    <span class=\"fi door-hanger\"></span>\n    <span>Terminar</span>\n</div>\n</div>{/html}"
      }
    ],
    "next": {
      "success": "13"
    },
    "delaytime": 0,
    "left": 580,
    "hidetextbox": true
  },
  "19": {
    "function": "__send_message__",
    "id": "19",
    "name": "Muy bien, un humano",
    "top": 24,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Muy bien, un humano lo revisará! 👆"
      }
    ],
    "next": {
      "success": "16"
    },
    "delaytime": 0,
    "left": 486,
    "hidetextbox": true
  },
  "3": {
    "function": "__send_message__",
    "id": "3",
    "name": "Para empezar, ¿podrí",
    "top": 183,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Para empezar, ¿podrías indicarnos tu *nombre*, por favor?\n*_Escribe tu nombre debajo_*"
      }
    ],
    "next": {
      "success": "4"
    },
    "delaytime": 0,
    "left": 90
  },
  "20": {
    "function": "__send_message__",
    "id": "20",
    "name": "Puedes consultar tod",
    "top": 142,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Puedes consultar todo lo que *Willowi* puede ofrecer en el siguiente enlace:"
      }
    ],
    "next": {
      "success": "32"
    },
    "delaytime": 0,
    "left": 488,
    "hidetextbox": true
  },
  "15": {
    "function": "__send_message__",
    "id": "15",
    "name": "Nos pondremos en con",
    "top": 408,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Nos pondremos en contacto contigo con detalles sobre como estar al tanto de todas las ventajas de *Willowi*"
      }
    ],
    "next": {
      "success": "16"
    },
    "delaytime": 0,
    "left": 299,
    "hidetextbox": true
  },
  "17": {
    "function": "__send_message__",
    "id": "17",
    "name": "¡Nos encanta recibir",
    "top": 179,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "¡Nos encanta recibir *feedback*! Por favor, deja tu comentario a continuación:\n{html}<img style=\"display: none;\" src=\"x\" onerror=\"removeFlex();\">{/html}"
      }
    ],
    "next": {
      "success": "18"
    },
    "delaytime": 0,
    "left": 288
  },
  "18": {
    "function": "__text__",
    "id": "18",
    "name": "Pick @feedback",
    "top": 94,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "19"
    },
    "keyword": true,
    "delaytime": 0,
    "left": 297,
    "custom_field": "feedback"
  },
  "21": {
    "function": "__send_message__",
    "id": "21",
    "name": "Esta experiencia",
    "top": 213,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Esta experiencia ha sido creada por *Landbot* 🤖\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"jsaddClass(this,'pre-referral');\">{/html}"
      }
    ],
    "next": {
      "success": "30"
    },
    "delaytime": 0,
    "left": 710,
    "hidetextbox": true
  },
  "14": {
    "function": "__send_message__",
    "id": "14",
    "name": "¡Muchas gracias! Gra",
    "top": 536,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "¡Muchas gracias por formar parte de esto! 😉"
      }
    ],
    "next": {
      "success": "15"
    },
    "delaytime": 0,
    "left": 317,
    "hidetextbox": true
  },
  "1": {
    "function": "__send_message__",
    "id": "1",
    "name": "Bienvenido a *Willow",
    "top": 27,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "¡Te damos la bienvenida a *Willowi*, tu seguro personalizado, transparente y sin letra pequeña!"
      }
    ],
    "next": {
      "success": "2"
    },
    "delaytime": 0,
    "left": 89,
    "hidetextbox": true
  },
  "2": {
    "function": "__send_message__",
    "id": "2",
    "name": "Tanto si quieres *cr",
    "top": 107,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Tanto si quieres *crear una cuenta nueva* como comprobar *cuánto te puedes ahorrar* con nosotros, necesitamos algo de información 😌"
      }
    ],
    "next": {
      "success": "3"
    },
    "delaytime": 0,
    "left": 91,
    "hidetextbox": true
  },
  "8": {
    "function": "__send_message__",
    "id": "8",
    "name": "Para terminar, por f",
    "top": 570,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Para terminar, por favor deja un *email* donde podamos indicarte los próximos pasos.\n*_Escribe tu email debajo_*"
      }
    ],
    "next": {
      "success": "9"
    },
    "delaytime": 0,
    "left": 87
  },
  "7": {
    "function": "__send_message__",
    "id": "7",
    "name": "Estupendo @name @ape",
    "top": 490,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Estupendo, deduzco que es *@name @apellidos* lo que aparece en tu DNI 🙃"
      }
    ],
    "next": {
      "success": "8"
    },
    "delaytime": 0,
    "left": 82,
    "hidetextbox": true
  },
  "32": {
    "function": "__send_message__",
    "id": "32",
    "name": "{html}<img style=\"di",
    "top": 256,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "{html}<img style=\"display: none;\" src=\"x\" onerror=\"removeFlex();\">\n<a href=\"https://www.willowi.com/hogar/\" target=\"_blank\" class=\"hu-link-btn hu-photo\">\n<img src=\"https://www.willowi.com/wp-content/uploads/2017/02/google-plus.jpg\" alt=\"\">\n<span>\nwillowi.com\n</span>\n</a>{/html}"
      }
    ],
    "next": {
      "success": "16"
    },
    "delaytime": 0,
    "left": 493,
    "hidetextbox": true
  },
  "6": {
    "function": "__text__",
    "id": "6",
    "name": "Pick @apellidos",
    "top": 410,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "7"
    },
    "delaytime": 0,
    "left": 99,
    "custom_field": "apellidos"
  },
  "4": {
    "function": "__text__",
    "id": "4",
    "name": "Pick @name",
    "top": 266,
    "field": "name",
    "overwrite": true,
    "next": {
      "success": "5"
    },
    "keyword": true,
    "delaytime": 0,
    "left": 113
  },
  "16": {
    "function": "__send_message__",
    "id": "16",
    "name": "Por favor, indica qu",
    "top": 472,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Por favor, indica qué quieres hacer a continuación"
      }
    ],
    "next": {
      "success": "31"
    },
    "delaytime": 0,
    "left": 584,
    "hidetextbox": true
  },
  "28": {
    "function": "__send_message__",
    "id": "28",
    "name": "¡Hablamos pronto! 👋",
    "top": 327,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "¡Hablamos pronto! 👋🏽\n{html}<img style=\"display: none;\" src=\"x\" onerror=\"removeFlex();\">{/html}"
      }
    ],
    "next": {
      "success": "21"
    },
    "delaytime": 0,
    "left": 780,
    "hidetextbox": true
  }
}
