{
  "5": {
    "function": "__text__",
    "id": "5",
    "name": "Pick @name",
    "top": 576,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "6",
      "failed": "72"
    },
    "delaytime": 0,
    "left": 1171,
    "custom_field": "username"
  },
  "64": {
    "function": "__send_message__",
    "id": "64",
    "name": "🛎 Sending you a Slack (or push) notifications when needed.",
    "top": 2369,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "🛎  Sending you a Slack (or push) notification when needed."
      }
    ],
    "next": {
      "success": "65"
    },
    "delaytime": 2,
    "left": 1259,
    "hidetextbox": true
  },
  "9": {
    "function": "__send_message__",
    "id": "9",
    "name": "Great! I'll need",
    "top": 443,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Great! 👏🏻\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.identifyUser('flag15a',{name: '@username'}); window.parent.trackEvent('flag15b','Landbot Chat', 'Wants signup');\"/>{/html}"
      }
    ],
    "next": {
      "success": "73"
    },
    "delaytime": 0.6,
    "left": 393,
    "hidetextbox": true
  },
  "61": {
    "function": "__send_message__",
    "id": "61",
    "name": "In essence, they're tools that allow you to link another one like myself with the most common apps a",
    "top": 2095,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "In essence, they're tools that allow you to link a bot like me with the most common apps and webs around."
      }
    ],
    "next": {
      "success": "60"
    },
    "delaytime": 0.6,
    "left": 1454,
    "hidetextbox": true
  },
  "47": {
    "function": "__send_message__",
    "id": "47",
    "name": "Many times it's important for co-founders to personally attend certain leads you can directly chat w",
    "top": 1927,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Many times it's important for co-founders to personally attend certain leads: you can directly chat with anyone at any time using my interface.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag13','Landbot Chat', 'Talk hybrid');\"/>{/html}"
      }
    ],
    "next": {
      "success": "68"
    },
    "delaytime": 0.6,
    "left": 1877,
    "hidetextbox": true
  },
  "72": {
    "function": "__send_message__",
    "id": "72",
    "name": "Pleased to meet you",
    "top": 652,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Pleased to meet you 🙂\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag3','Landbot Chat', 'Answer name error');removeClass();\"/>{/html}"
      }
    ],
    "next": {
      "success": "10"
    },
    "delaytime": 0.4,
    "left": 1019,
    "hidetextbox": true
  },
  "24": {
    "function": "__send_message__",
    "id": "24",
    "name": "Still *not a valid one",
    "top": 1857,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Still *not a valid one* 😓"
      }
    ],
    "delaytime": 0,
    "left": 124
  },
  "40": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 1529,
    "id": "40",
    "next": {
      "up": "9",
      "more": "41",
      "signup": "9",
      "need": "41",
      "features": "41",
      "info": "41",
      "sign": "9",
      "i": "41",
      "me": "9"
    },
    "delaytime": 0,
    "left": 1385,
    "hidetextbox": true
  },
  "6": {
    "function": "__send_message__",
    "id": "6",
    "name": "Pleased to meet you",
    "top": 661,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Pleased to meet you, @username 🙂\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.identifyUser('flag4a',{name: '@username'}); window.parent.trackEvent('flag4b','Landbot Chat', 'Answer name');removeClass();\"/>{/html}"
      }
    ],
    "next": {
      "success": "10"
    },
    "delaytime": 0.4,
    "left": 1272,
    "hidetextbox": true
  },
  "63": {
    "function": "__send_message__",
    "id": "63",
    "name": "📊 Saving chat data in your *CRM* or as an *Excel doc*.",
    "top": 2296,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "📊  Saving chat data in your *CRM* or as an *Excel doc*."
      }
    ],
    "next": {
      "success": "64"
    },
    "delaytime": 1.2,
    "left": 1258,
    "hidetextbox": true
  },
  "43": {
    "function": "__send_message__",
    "id": "43",
    "name": "Easy stuff...",
    "top": 1921,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Easy stuff...\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag8','Landbot Chat', 'Capture data');\"/>{/html}"
      }
    ],
    "next": {
      "success": "49"
    },
    "delaytime": 0.6,
    "left": 726,
    "hidetextbox": true
  },
  "75": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 1292,
    "id": "75",
    "next": {
      "features": "41",
      "failed": "76",
      "signup": "9"
    },
    "delaytime": 0,
    "left": 339
  },
  "22": {
    "function": "__send_message__",
    "id": "22",
    "name": "See you soon @name",
    "top": 1203,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "See you soon! It's been a pleasure chatting with you! 🙂\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag18','Landbot Chat', 'Its done');removeClass();\"/>{/html}"
      }
    ],
    "next": {
      "success": "75"
    },
    "delaytime": 0.6,
    "left": 335
  },
  "36": {
    "function": "__send_message__",
    "id": "36",
    "name": "👉🏻 and go out for a drink while *I take care of your customers*.",
    "top": 1188,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "👉🏻 and go out for a drink while *I take care of your customers*. 🍻"
      }
    ],
    "next": {
      "success": "37"
    },
    "delaytime": 1.2,
    "left": 1398,
    "hidetextbox": true
  },
  "33": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 1449,
    "id": "33",
    "next": {
      "yes": "9",
      "work": "34",
      "signup": "9",
      "how": "34",
      "you": "34",
      "features": "41",
      "do": "34"
    },
    "delaytime": 0,
    "left": 1009,
    "hidetextbox": true
  },
  "7": {
    "function": "__send_message__",
    "id": "7",
    "name": "Do you want to sign up...",
    "top": 280,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Yes",
          "Tell me more"
        ],
        "order": 0,
        "text": "Do you want to sign up to get early access?",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "8"
    },
    "delaytime": 2,
    "left": 734,
    "hidetextbox": true
  },
  "71": {
    "function": "__send_message__",
    "id": "71",
    "name": "Imagen",
    "top": 206,
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494935124.953778.gif",
        "order": 0
      }
    ],
    "next": {
      "success": "7"
    },
    "delaytime": 2.6,
    "left": 774,
    "hidetextbox": true
  },
  "54": {
    "function": "__send_message__",
    "id": "54",
    "name": "That way, we can get to know that I've reached right now:",
    "top": 2099,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "That way, we can get to know my humble benchmarks:"
      }
    ],
    "next": {
      "success": "55"
    },
    "delaytime": 4,
    "left": 1027,
    "hidetextbox": true
  },
  "57": {
    "function": "__send_message__",
    "id": "57",
    "name": "👉🏻 An average of 5 messages per lead.",
    "top": 2342,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "⚡️ An average of 5 messages per lead."
      }
    ],
    "next": {
      "success": "58"
    },
    "delaytime": 1.6,
    "left": 1028,
    "hidetextbox": true
  },
  "42": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 1764,
    "id": "42",
    "next": {
      "data": "43",
      "up": "46",
      "customer": "47",
      "integrations": "45",
      "features": "41",
      "metrics": "44",
      "analytics": "44",
      "pricing": "48",
      "capturing": "43",
      "a": "47",
      "signup": "9",
      "talk": "47",
      "&": "44",
      "setting": "46",
      "to": "47"
    },
    "delaytime": 0,
    "left": 1388,
    "hidetextbox": true
  },
  "18": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 1050,
    "id": "18",
    "next": {
      "message": "19",
      "it's": "22",
      "us": "19",
      "more": "41",
      "done": "22",
      "a": "19",
      "leave": "19",
      "features": "41",
      "signup": "9",
      "information": "41"
    },
    "delaytime": "0.01",
    "left": 245,
    "hidetextbox": true
  },
  "52": {
    "function": "__send_message__",
    "id": "52",
    "name": "You could even use that data in the",
    "top": 2276,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "You could even use that data in the conversation you're having, *@username*."
      }
    ],
    "next": {
      "success": "77"
    },
    "delaytime": 0,
    "left": 722,
    "hidetextbox": true
  },
  "46": {
    "function": "__send_message__",
    "id": "46",
    "name": "Setting up a landbot is quite easy: with just a bunch of clicks you'll get your first bot up and run",
    "top": 1930,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Setting up a landbot is quite easy: with just a bunch of clicks you'll get your first bot up and running! 🤓\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag12','Landbot Chat', 'How Setup');\"/>{/html}"
      }
    ],
    "next": {
      "success": "66"
    },
    "delaytime": 0.6,
    "left": 1614,
    "hidetextbox": true
  },
  "14": {
    "function": "__send_message__",
    "id": "14",
    "name": "I promise we don't send Spam",
    "top": 1612,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "_I promise we won't Spam_ 😇"
      }
    ],
    "next": {
      "success": "15"
    },
    "delaytime": 0,
    "left": 109
  },
  "12": {
    "function": "__send_message__",
    "id": "12",
    "name": "Gotcha!! 🎉",
    "top": 719,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Gotcha!! 🎉\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.identifyUser('flag16a',{email: '@email'}); window.parent.trackEvent('flag16b','Landbot Chat', 'Give email');removeClass();\"/>{/html}"
      }
    ],
    "next": {
      "success": "74"
    },
    "delaytime": 0.6,
    "left": 273,
    "hidetextbox": true
  },
  "1": {
    "function": "__send_message__",
    "id": "1",
    "name": "Hi, there!",
    "top": 32,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Hi, there! 👋\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.identifyUser('flag1a',{name: 'Anonimo'}); window.parent.trackEvent('flag1b','Landbot Start Chat');\"/>{/html}"
      }
    ],
    "next": {
      "success": "2"
    },
    "delaytime": 0.8,
    "left": 766,
    "hidetextbox": true
  },
  "2": {
    "function": "__send_message__",
    "id": "2",
    "name": "My name is Landbot",
    "top": 124,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "My name is Landbot and I can help you out *turning your website into a chatbot* 🤖"
      }
    ],
    "next": {
      "success": "71"
    },
    "delaytime": 0.4,
    "left": 736,
    "hidetextbox": true
  },
  "76": {
    "function": "__send_message__",
    "id": "76",
    "name": "Error message",
    "top": 1394,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "If you want something more write it here and I will send it to our support team as soon as possible 😉"
      }
    ],
    "next": {
      "success": "21"
    },
    "delaytime": 0.6,
    "left": 353
  },
  "34": {
    "function": "__send_message__",
    "id": "34",
    "name": "In short, this is how I work:",
    "top": 965,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "In short, this is how I work:\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag6','Landbot Chat', 'How it works');\"/>{/html}"
      }
    ],
    "next": {
      "success": "35"
    },
    "delaytime": 0.8,
    "left": 1397,
    "hidetextbox": true
  },
  "23": {
    "function": "__email__",
    "id": "23",
    "name": "Pick @email",
    "top": 1773,
    "field": "email",
    "overwrite": true,
    "next": {
      "failed": "24"
    },
    "delaytime": 0,
    "left": 154
  },
  "66": {
    "function": "__send_message__",
    "id": "66",
    "name": "I can proudly say that I'm the _'Wordpress of chatbots'_: you don't need to be a skilled technician",
    "top": 2016,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "I can proudly say that I'm the *Wordpress of chatbots*: you don't need to be a skilled technician to build me up."
      }
    ],
    "next": {
      "success": "39"
    },
    "delaytime": 3.6,
    "left": 1616,
    "hidetextbox": true
  },
  "26": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 1002,
    "id": "26",
    "next": {
      "explain": "3",
      "yes": "3",
      "want": "9",
      "signup": "9",
      "features": "41",
      "to": "9",
      "i": "9",
      "me": "3"
    },
    "delaytime": "0.01",
    "left": 504,
    "hidetextbox": true
  },
  "41": {
    "function": "__send_message__",
    "id": "41",
    "name": "Fine. Which specific topic do you want me to delve into?",
    "top": 1677,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Data Capturing",
          "Metrics & Analytics",
          "Integrations",
          "Setting up",
          "Talk to a customer",
          "Pricing"
        ],
        "order": 0,
        "text": "Fine. Which specific topic do you want me to delve into?\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag7','Landbot Chat', 'More info 02');\"/>{/html}",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "42"
    },
    "delaytime": 1,
    "left": 1387,
    "hidetextbox": true
  },
  "39": {
    "function": "__send_message__",
    "id": "39",
    "name": "How does that sound?",
    "top": 1443,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Sign me up",
          "I need more info"
        ],
        "order": 0,
        "text": "How does that sound?",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "40"
    },
    "delaytime": 3,
    "left": 1418,
    "hidetextbox": true
  },
  "51": {
    "function": "__send_message__",
    "id": "51",
    "name": "imagen",
    "top": 2184,
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494935552.232631.png",
        "order": 0
      }
    ],
    "next": {
      "success": "52"
    },
    "delaytime": 0.6,
    "left": 757,
    "hidetextbox": true
  },
  "38": {
    "function": "__send_message__",
    "id": "38",
    "name": "👉🏻 You can even use my own chat to give a first-hand reply to the most interesting queries.",
    "top": 1356,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "👉🏻 You can even use my own chat to *give a first-hand reply to the most interesting queries*."
      }
    ],
    "next": {
      "success": "39"
    },
    "delaytime": 2.8,
    "left": 1400,
    "hidetextbox": true
  },
  "11": {
    "function": "__email__",
    "id": "11",
    "name": "Pick @email",
    "top": 628,
    "field": "email",
    "overwrite": true,
    "next": {
      "success": "12",
      "failed": "13"
    },
    "delaytime": 0,
    "left": 380
  },
  "53": {
    "function": "__send_message__",
    "id": "53",
    "name": "You can set up events on Google Analytics, Mixpanel or any other similar tool to measure the convers",
    "top": 2019,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "You can set up events on Google Analytics, Mixpanel or any other similar tool to measure the conversion rate within the chat."
      }
    ],
    "next": {
      "success": "54"
    },
    "delaytime": 2.6,
    "left": 1031,
    "hidetextbox": true
  },
  "16": {
    "function": "__send_message__",
    "id": "16",
    "name": "We'll be giving",
    "top": 877,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "We'll be giving you access in just a few days: *you'll get an e-mail* with all the information."
      }
    ],
    "next": {
      "success": "17"
    },
    "delaytime": 0,
    "left": 261,
    "hidetextbox": true
  },
  "25": {
    "function": "__send_message__",
    "id": "25",
    "name": "Do you want me to",
    "top": 798,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Yes, explain me",
          "I want to sign up"
        ],
        "order": 0,
        "text": "Do you want me to explain you how I work, instead?",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "26"
    },
    "delaytime": 4,
    "left": 549,
    "hidetextbox": true
  },
  "27": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 844,
    "id": "27",
    "next": {
      "bots": "28",
      "do": "34",
      "how": "34",
      "vs": "28",
      "forms": "28",
      "features": "41",
      "signup": "9",
      "you": "34",
      "work": "34"
    },
    "delaytime": 0,
    "left": 1158,
    "hidetextbox": true
  },
  "10": {
    "function": "__send_message__",
    "id": "10",
    "name": "I'd never dare to bore",
    "top": 752,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "How do you work?",
          "Bots vs Forms"
        ],
        "order": 0,
        "text": "I'd never dare to bore you, so what exactly do you want me to talk about?",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "27"
    },
    "delaytime": 0.6,
    "left": 1156,
    "hidetextbox": true
  },
  "65": {
    "function": "__send_message__",
    "id": "65",
    "name": "And even more!",
    "top": 2454,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "And even more! 💪🏻"
      }
    ],
    "next": {
      "success": "39"
    },
    "delaytime": 2,
    "left": 1280,
    "hidetextbox": true
  },
  "13": {
    "function": "__send_message__",
    "id": "13",
    "name": "Hmmm... I'd swear *that's n",
    "top": 703,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Hmmm... I'd swear *that's not a valid e-mail address*. I won't be able to sign up your landingbot account if you don't provide a real email. 😟\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag17','Landbot Chat', 'Email error');removeClass();\"/>{/html}"
      }
    ],
    "next": {
      "success": "25"
    },
    "delaytime": 0.6,
    "left": 542,
    "hidetextbox": true
  },
  "56": {
    "function": "__send_message__",
    "id": "56",
    "name": "👉🏻 A 0.5s average first-response time.",
    "top": 2262,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "⚡️ A 0.5s average first-response time."
      }
    ],
    "next": {
      "success": "57"
    },
    "delaytime": 1.6,
    "left": 1028,
    "hidetextbox": true
  },
  "73": {
    "function": "__send_message__",
    "id": "73",
    "name": "_I'll need your e-ma",
    "top": 543,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "_I'll need your e-mail address to sign you up. *Type your email below, please*_\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"addClass();\"/>{/html}"
      }
    ],
    "next": {
      "success": "11"
    },
    "delaytime": 0.6,
    "left": 358
  },
  "55": {
    "function": "__send_message__",
    "id": "55",
    "name": "👉🏻 50% chat-to-lead conversion rate",
    "top": 2183,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "⚡️ 50% chat-to-lead conversion rate"
      }
    ],
    "next": {
      "success": "56"
    },
    "delaytime": 2,
    "left": 1030,
    "hidetextbox": true
  },
  "35": {
    "function": "__send_message__",
    "id": "35",
    "name": "👉🏻 You set me up *in about seven minutes*...",
    "top": 1103,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "👉🏻 You set me up *in about seven minutes*..."
      }
    ],
    "next": {
      "success": "36"
    },
    "delaytime": 1.2,
    "left": 1396,
    "hidetextbox": true
  },
  "31": {
    "function": "__send_message__",
    "id": "31",
    "name": "Meaning that people are far *more r",
    "top": 1269,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Meaning that people are far *more receptive to engage in a conversation* than filling up a form. Stands to reason, doesn't it?"
      }
    ],
    "next": {
      "success": "32"
    },
    "delaytime": 0,
    "left": 1006,
    "hidetextbox": true
  },
  "19": {
    "function": "__send_message__",
    "id": "19",
    "name": "Tell me about it",
    "top": 1199,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Tell me about it and *our support team will e-mail you* in no time.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag19','Landbot Chat', 'Leave message');\"/>{/html}"
      }
    ],
    "next": {
      "success": "20"
    },
    "delaytime": 0.6,
    "left": 106,
    "hidetextbox": true
  },
  "30": {
    "function": "__send_message__",
    "id": "30",
    "name": "imagen",
    "top": 1182,
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494930146.615037.png",
        "order": 0
      }
    ],
    "next": {
      "success": "31"
    },
    "delaytime": 3,
    "left": 1042,
    "hidetextbox": true
  },
  "62": {
    "function": "__send_message__",
    "id": "62",
    "name": "✉️  *Sending e-mails* to chat users.",
    "top": 2216,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "✉️  *Sending e-mails* to chat users.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag11','Landbot Chat', 'Integrations 02');\"/>{/html}"
      }
    ],
    "next": {
      "success": "63"
    },
    "delaytime": 2,
    "left": 1259,
    "hidetextbox": true
  },
  "20": {
    "function": "__send_message__",
    "id": "20",
    "name": "They're taking some beers right n",
    "top": 1294,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "- They're taking some beers right now, you know?, leaving me in charge of all the heavy lifting. Humans... 😎\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"addClass();\"/>{/html}"
      }
    ],
    "next": {
      "success": "21"
    },
    "delaytime": 2.2,
    "left": 91
  },
  "50": {
    "function": "__send_message__",
    "id": "50",
    "name": "Just like this, see?",
    "top": 2097,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Just like this, see?"
      }
    ],
    "next": {
      "success": "51"
    },
    "delaytime": 2.4,
    "left": 723,
    "hidetextbox": true
  },
  "59": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 2010,
    "id": "59",
    "next": {
      "features": "41",
      "yes": "60",
      "sure": "60",
      "no": "61",
      "signup": "9"
    },
    "delaytime": 0,
    "left": 1349,
    "hidetextbox": true
  },
  "15": {
    "function": "__send_message__",
    "id": "15",
    "name": "Please, write your e-mail again.",
    "top": 1692,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Please, write your e-mail again."
      }
    ],
    "next": {
      "success": "23"
    },
    "delaytime": 0,
    "left": 109
  },
  "44": {
    "function": "__send_message__",
    "id": "44",
    "name": "In many senses, *I behave just like a website*. And that brings along some nifty advantages.🤓",
    "top": 1928,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "In many senses, *I behave just like a website*. And that brings along some nifty advantages.🤓\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag9','Landbot Chat', 'Metrics');\"/>{/html}"
      }
    ],
    "next": {
      "success": "53"
    },
    "delaytime": 0.6,
    "left": 1029,
    "hidetextbox": true
  },
  "77": {
    "function": "__send_message__",
    "id": "77",
    "name": "Calling your custome",
    "top": 2360,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Calling your customer by his/her name, for instance, the way I just did. 🤓"
      }
    ],
    "next": {
      "success": "39"
    },
    "delaytime": 4,
    "left": 723
  },
  "74": {
    "function": "__send_message__",
    "id": "74",
    "name": "Enviar imagen",
    "top": 795,
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494937363.958855.gif",
        "order": 0
      }
    ],
    "next": {
      "success": "16"
    },
    "delaytime": 0.6,
    "left": 264,
    "hidetextbox": true
  },
  "58": {
    "function": "__send_message__",
    "id": "58",
    "name": "imagen",
    "top": 2424,
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494521661.283529.png",
        "order": 0
      }
    ],
    "next": {
      "success": "39"
    },
    "delaytime": 0,
    "left": 1063,
    "hidetextbox": true
  },
  "60": {
    "function": "__send_message__",
    "id": "60",
    "name": "I'm fully integrated with such services. Thanks to that, *I've got available superpowers* like:",
    "top": 2092,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "I'm fully integrated with such services. Thanks to that, *I've got some superpowers available* like:"
      }
    ],
    "next": {
      "success": "62"
    },
    "delaytime": 0.6,
    "left": 1217,
    "hidetextbox": true
  },
  "21": {
    "function": "__text__",
    "id": "21",
    "name": "Pick @duda",
    "top": 1377,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "22"
    },
    "keyword": true,
    "delaytime": 0,
    "left": 119,
    "custom_field": "duda"
  },
  "29": {
    "function": "__send_message__",
    "id": "29",
    "name": "They set up a competition",
    "top": 1104,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "They set up *a competition between a typical form and myself*, and guess who crushed his adversary to a pulp...😜"
      }
    ],
    "next": {
      "success": "30"
    },
    "delaytime": 2.2,
    "left": 1006,
    "hidetextbox": true
  },
  "37": {
    "function": "__send_message__",
    "id": "37",
    "name": "👉🏻 When you feel like coming back, I'll",
    "top": 1273,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "👉🏻 When you feel like coming back, I'll provide you with *a full report on everything I did*."
      }
    ],
    "next": {
      "success": "38"
    },
    "delaytime": 2,
    "left": 1396,
    "hidetextbox": true
  },
  "45": {
    "function": "__send_message__",
    "id": "45",
    "name": "Have you ever heard about *Zapier or IFTTT*?",
    "top": 1928,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Sure",
          "No"
        ],
        "order": 0,
        "text": "Have you ever heard about Zapier or IFTTT?\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag10','Landbot Chat', 'Integrations');\"/>{/html}",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "59"
    },
    "delaytime": 0.6,
    "left": 1320,
    "hidetextbox": true
  },
  "8": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 371,
    "id": "8",
    "next": {
      "tell": "3",
      "yes": "9",
      "more": "3",
      "signup": "9",
      "features": "41",
      "me": "3"
    },
    "delaytime": 0,
    "left": 737,
    "hidetextbox": true
  },
  "3": {
    "function": "__send_message__",
    "id": "3",
    "name": "No kidding: everything you used t",
    "top": 404,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "No kidding: *I can do everything you used to with a form* and a landing page by *setting up a conversation with any visitor on your website*\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.identifyUser('flag2a',{name: '@username'}); window.parent.trackEvent('flag2b','Landbot Chat', 'Tell me more 01');\"/>{/html}"
      }
    ],
    "next": {
      "success": "4"
    },
    "delaytime": 0,
    "left": 1144,
    "hidetextbox": true
  },
  "48": {
    "function": "__send_message__",
    "id": "48",
    "name": "Landbot is *completely free* in this open Beta💃🏻",
    "top": 1926,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Landbot is *completely free* in this closed Beta💃🏻\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag14','Landbot Chat', 'Price');\"/>{/html}"
      }
    ],
    "next": {
      "success": "39"
    },
    "delaytime": 0.6,
    "left": 2148,
    "hidetextbox": true
  },
  "17": {
    "function": "__send_message__",
    "id": "17",
    "name": "Anything else I could help you with?",
    "top": 963,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Leave us a message",
          "It's done",
          "More information"
        ],
        "order": 0,
        "text": "Anything else I could help you with?",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "18"
    },
    "delaytime": 4,
    "left": 242,
    "hidetextbox": true
  },
  "69": {
    "function": "__send_message__",
    "id": "69",
    "name": "That way, your customer won't have to switch channels to talk to you. That's what I call a perk! 🙂",
    "top": 2111,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "That way, your customer won't have to switch channels to talk to you. That's what I call a perk! 🙂"
      }
    ],
    "next": {
      "success": "70"
    },
    "delaytime": 4,
    "left": 1880,
    "hidetextbox": true
  },
  "28": {
    "function": "__send_message__",
    "id": "28",
    "name": "The guys doing all the programming",
    "top": 1016,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Good question! The guys doing all the programming are totally data-obsessed, you know?\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('flag5','Landbot Chat', 'Forms vs bots');\"/>{/html}"
      }
    ],
    "next": {
      "success": "29"
    },
    "delaytime": 1,
    "left": 1007,
    "hidetextbox": true
  },
  "4": {
    "function": "__send_message__",
    "id": "4",
    "name": "What's your name?",
    "top": 482,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "_What's your name? *Type your name below please*_\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"addClass();\"/>{/html}"
      }
    ],
    "next": {
      "success": "5"
    },
    "delaytime": 4,
    "left": 1151
  },
  "68": {
    "function": "__send_message__",
    "id": "68",
    "name": "The bot (_that's me_) will cease conducting the chatting and grant you full control over any convers",
    "top": 2020,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "The bot (_that's me_) will cease conducting the chatting and grant you full control over any conversation."
      }
    ],
    "next": {
      "success": "69"
    },
    "delaytime": 4,
    "left": 1880,
    "hidetextbox": true
  },
  "49": {
    "function": "__send_message__",
    "id": "49",
    "name": "Everytime I ask a question, I can keep track of the results in my database.",
    "top": 2014,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Everytime I ask a question, I can *keep track of the answers in my database*."
      }
    ],
    "next": {
      "success": "50"
    },
    "delaytime": 0.4,
    "left": 721,
    "hidetextbox": true
  },
  "32": {
    "function": "__send_message__",
    "id": "32",
    "name": "And that's precisely what I'm here",
    "top": 1361,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Yes",
          "How do you work?"
        ],
        "order": 0,
        "text": "And that's precisely what I'm here for... Do you feel like setting up your own landbot to check it out?",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "33"
    },
    "delaytime": 4,
    "left": 1008,
    "hidetextbox": true
  },
  "70": {
    "function": "__send_message__",
    "id": "70",
    "name": "imagen",
    "top": 2190,
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494937254.29464.png",
        "order": 0
      }
    ],
    "next": {
      "success": "39"
    },
    "delaytime": 3.2,
    "left": 1911,
    "hidetextbox": true
  }
}
