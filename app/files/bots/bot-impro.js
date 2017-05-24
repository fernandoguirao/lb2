{
  "5": {
    "function": "__send_message__",
    "id": "5",
    "name": "Thanks for the info!",
    "top": 253,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Thanks for the info! Now please *leave your email* so we can contact you later 📩\n{html}<img class=\"js-hidden\" src=\"x\" onerror=\"removeFlex();\">{/html}"
      }
    ],
    "next": {
      "success": "6"
    },
    "delaytime": 0,
    "left": 621
  },
  "27": {
    "function": "__send_message__",
    "id": "27",
    "name": "Thanks for trusting",
    "top": 248,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Finish",
          "Leave a message"
        ],
        "order": 0,
        "text": "Thanks for trusting *ImproDrone*, hope to see you around soon! 👋🏻",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "40"
    },
    "delaytime": 0,
    "left": 1123,
    "hidetextbox": true
  },
  "13": {
    "function": "__send_message__",
    "id": "13",
    "name": "We both know that wa",
    "top": 398,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Continue anyway",
          "Edit email"
        ],
        "order": 0,
        "text": "We both know that was not an email and I won't be able to help you out... 😣",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "47"
    },
    "delaytime": 0,
    "left": 502,
    "hidetextbox": true
  },
  "47": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 455,
    "id": "47",
    "next": {
      "edit": "49",
      "continue": "14",
      "anyway": "14",
      "email": "49",
      "failed": "48"
    },
    "delaytime": 0,
    "left": 306,
    "hidetextbox": true
  },
  "24": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 28,
    "id": "24",
    "next": {
      "no": "25",
      "yes": "26"
    },
    "delaytime": 0,
    "left": 900,
    "hidetextbox": true
  },
  "19": {
    "function": "__text__",
    "id": "19",
    "name": "Pick @name",
    "top": 332,
    "field": "name",
    "overwrite": true,
    "next": {
      "failed": "20",
      "success": "21"
    },
    "keyword": true,
    "delaytime": 0,
    "left": 921
  },
  "6": {
    "function": "__email__",
    "id": "6",
    "name": "Pick @email",
    "top": 326,
    "field": "email",
    "overwrite": true,
    "next": {
      "success": "12",
      "failed": "13"
    },
    "delaytime": 0,
    "left": 642
  },
  "45": {
    "function": "__send_message__",
    "id": "45",
    "name": "Now tell me, what do",
    "top": 544,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Finish",
          "Leave a message"
        ],
        "order": 0,
        "text": "Now tell me, what do you want to do?",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "40"
    },
    "delaytime": 0,
    "left": 1536,
    "hidetextbox": true
  },
  "43": {
    "function": "__text__",
    "id": "43",
    "name": "Pick @message",
    "top": 615,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "44"
    },
    "keyword": true,
    "delaytime": 0,
    "left": 1120,
    "custom_field": "message"
  },
  "20": {
    "function": "__send_message__",
    "id": "20",
    "name": "Error message",
    "top": 333,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "I'm sorry, I didn't understand. Could you try again?"
      }
    ],
    "next": {
      "success": "19"
    },
    "delaytime": 0,
    "left": 1076,
    "hidetextbox": true
  },
  "42": {
    "function": "__send_message__",
    "id": "42",
    "name": "OK, you can *leave u",
    "top": 531,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "OK, you can *leave us a message* below and we'll take it into consideration:"
      }
    ],
    "next": {
      "success": "43"
    },
    "delaytime": 0,
    "left": 1108
  },
  "22": {
    "function": "__send_message__",
    "id": "22",
    "name": "*IMPORTANT* In order",
    "top": 181,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "*IMPORTANT* In order to get you in contact with the perfect drone pilot, we will need to distribute your information to select few drone pilots/companies."
      }
    ],
    "next": {
      "success": "23"
    },
    "delaytime": 0,
    "left": 892,
    "hidetextbox": true
  },
  "36": {
    "function": "__send_message__",
    "id": "36",
    "name": "Create your own",
    "top": 273,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "{html}<img src=\"x\" onerror=\"jsReferral(this)\">\n<div class=\"la-flex referral\">\n    <a target=\"_blank\" class=\"la-choices\" href=\"http://landbot.io/?utm_source=referral&utm_medium=customers&utm_campaign=improdrone\">\n        <span class=\"fi heart\"></span>\n        <span>Create your own Landbot</span>\n    </a>\n</div>{/html}"
      }
    ],
    "hidetextbox": true,
    "delaytime": 0,
    "left": 1299
  },
  "15": {
    "function": "__text__",
    "id": "15",
    "name": "Pick @cellphone",
    "top": 584,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "16"
    },
    "delaytime": 0,
    "left": 610,
    "custom_field": "cellphone"
  },
  "17": {
    "function": "__text__",
    "id": "17",
    "name": "Pick @zip",
    "top": 483,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "18"
    },
    "delaytime": 0,
    "left": 925,
    "custom_field": "zip"
  },
  "25": {
    "function": "__send_message__",
    "id": "25",
    "name": "Oh, I'm sorry to hea",
    "top": 21,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Oh, I'm sorry to hear that. I won't be able to find a Drone Pilot for you then... \n\nHope to see you around soon, you can always come back! ✌️"
      }
    ],
    "next": {
      "success": "36"
    },
    "delaytime": 0,
    "left": 1162,
    "hidetextbox": true
  },
  "50": {
    "function": "__send_message__",
    "id": "50",
    "name": "This experience",
    "top": 372,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "This experience was created by *Landbot* 🤖\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"jsaddClass(this,'pre-referral');\">{/html}"
      }
    ],
    "next": {
      "success": "36"
    },
    "delaytime": 0,
    "left": 1310,
    "hidetextbox": true
  },
  "18": {
    "function": "__send_message__",
    "id": "18",
    "name": "Awesome, thanks! My",
    "top": 406,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Awesome, thanks! My name is *CJ* by the way, what's yours?"
      }
    ],
    "next": {
      "success": "19"
    },
    "delaytime": 0,
    "left": 896
  },
  "21": {
    "function": "__send_message__",
    "id": "21",
    "name": "OK, @name, nice to m",
    "top": 254,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "OK, @name, nice to meet you. 🙌🏽"
      }
    ],
    "next": {
      "success": "22"
    },
    "delaytime": 0,
    "left": 894,
    "hidetextbox": true
  },
  "14": {
    "function": "__send_message__",
    "id": "14",
    "name": "OK, a *phone number*",
    "top": 500,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "OK, a *phone number* is all I need to continue. It's private and will only be used by Drone Pilots or ourselves!"
      }
    ],
    "next": {
      "success": "15"
    },
    "delaytime": 0,
    "left": 596
  },
  "12": {
    "function": "__send_message__",
    "id": "12",
    "name": "Thank you!",
    "top": 408,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Thank you!"
      }
    ],
    "next": {
      "success": "14"
    },
    "delaytime": 0,
    "left": 775,
    "hidetextbox": true
  },
  "49": {
    "function": "__send_message__",
    "id": "49",
    "name": "Ok, try typing again",
    "top": 326,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Ok, try typing again your email, please."
      }
    ],
    "next": {
      "success": "6"
    },
    "delaytime": 0,
    "left": 356
  },
  "46": {
    "function": "__send_message__",
    "id": "46",
    "name": "{html}\n<div class=\"l",
    "top": 108,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "{html}<img src=\"x\" onerror=\"jsFlex(this);\">\n<div class=\"la-flex\">\n<div class=\"la-choices\">\n    <span class=\"fi heart\"></span>\n    <span>Wedding</span>\n</div>\n<div class=\"la-choices\">\n    <span class=\"fi home\"></span>\n    <span>Real State</span>\n</div>\n<div class=\"la-choices\">\n    <span class=\"fi crop-tool\"></span>\n    <span>Construction</span>\n</div>\n<div class=\"la-choices\">\n    <span class=\"fi calendar\"></span>\n    <span>Event</span>\n</div>\n</div>{/html}"
      }
    ],
    "next": {
      "success": "3"
    },
    "delaytime": 0,
    "left": 392,
    "hidetextbox": true
  },
  "41": {
    "function": "__send_message__",
    "id": "41",
    "name": "OK, you'll hear from",
    "top": 498,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "OK, you'll hear from us! ☎️"
      }
    ],
    "next": {
      "success": "50"
    },
    "delaytime": 0,
    "left": 1333,
    "hidetextbox": true
  },
  "3": {
    "function": "__text__",
    "id": "3",
    "name": "Pick @why",
    "top": 174,
    "field": "custom",
    "overwrite": true,
    "next": {
      "failed": "4",
      "success": "5"
    },
    "delaytime": 0,
    "left": 646,
    "custom_field": "why",
    "hidetextbox": true
  },
  "23": {
    "function": "__send_message__",
    "id": "23",
    "name": "Do you agree to such",
    "top": 107,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Yes 🤗",
          "No 😕"
        ],
        "order": 0,
        "text": "Do you *agree* to such a distribution of your information?",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "24"
    },
    "delaytime": 0,
    "left": 893,
    "hidetextbox": true
  },
  "26": {
    "function": "__send_message__",
    "id": "26",
    "name": "Perfect, thanks! We'",
    "top": 164,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Perfect, thanks! We're done. *We'll contact you* through email/phone whenever we find something that matches your needs."
      }
    ],
    "next": {
      "success": "27"
    },
    "delaytime": 0,
    "left": 1123,
    "hidetextbox": true
  },
  "44": {
    "function": "__send_message__",
    "id": "44",
    "name": "Great, thank you!",
    "top": 595,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Great, thank you!"
      }
    ],
    "next": {
      "success": "45"
    },
    "delaytime": 0,
    "left": 1343,
    "hidetextbox": true
  },
  "16": {
    "function": "__send_message__",
    "id": "16",
    "name": "Great! We're almost",
    "top": 573,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Great! We're almost over, share your *ZIP code* so I can check the availability of Drone Pilots in your area, please go ahead:"
      }
    ],
    "next": {
      "success": "17"
    },
    "delaytime": 0,
    "left": 894
  },
  "35": {
    "function": "__send_message__",
    "id": "35",
    "name": "Hello!",
    "top": 20,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "This is *ImproDrone* and I'll help you find a Drone Pilot 🚀"
      }
    ],
    "next": {
      "success": "2"
    },
    "delaytime": 0,
    "left": 658,
    "hidetextbox": true
  },
  "40": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 412,
    "id": "40",
    "next": {
      "message": "42",
      "finish": "41",
      "leave": "42"
    },
    "delaytime": 0,
    "left": 1091,
    "hidetextbox": true
  },
  "4": {
    "function": "__send_message__",
    "id": "4",
    "name": "Error message",
    "top": 185,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "I'm sorry, I didn't understand. Could you try again?"
      }
    ],
    "next": {
      "success": "3"
    },
    "delaytime": 0,
    "left": 400
  },
  "1": {
    "function": "__send_message__",
    "id": "1",
    "name": "Hello!\n\nThis is *Imp",
    "top": 12,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Hello!"
      }
    ],
    "next": {
      "success": "35"
    },
    "delaytime": 0,
    "left": 445,
    "hidetextbox": true
  },
  "48": {
    "function": "__send_message__",
    "id": "48",
    "name": "Error message",
    "top": 556,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "I'm sorry, I didn't understand. Could you try again?"
      }
    ],
    "next": {
      "success": "47"
    },
    "delaytime": 0,
    "left": 354
  },
  "2": {
    "function": "__send_message__",
    "id": "2",
    "name": "First, please tell m",
    "top": 98,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "First, please tell me *why* do you need a Drone Pilot?"
      }
    ],
    "next": {
      "success": "46"
    },
    "delaytime": 0,
    "left": 625,
    "hidetextbox": true
  }
}
