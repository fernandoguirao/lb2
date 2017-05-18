{
  "30": {
    "next": {
      "success": "21"
    },
    "delaytime": 2,
    "top": 1119,
    "left": 621,
    "name": "Now, they’re giving",
    "function": "__send_message__",
    "responses": [
      {
        "text": "Now, they’re giving *early access for people to try their newest product* (that gets 3X conversion rate than anything you've seen before), and you might be one of those! 🙌🏽",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "30"
  },
  "11": {
    "next": {
      "success": "12"
    },
    "delaytime": "0,5",
    "top": 456,
    "left": 831,
    "name": "Super! As my idol, S",
    "function": "__send_message__",
    "responses": [
      {
        "text": "Super! As my godfather Steve would say… *One more thing*! ☝️",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "11"
  },
  "20": {
    "next": {
      "success": "21"
    },
    "delaytime": "2",
    "top": 746,
    "left": 209,
    "name": "Send Image",
    "function": "__send_message__",
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494946694.430742.gif",
        "order": 0
      }
    ],
    "id": "20"
  },
  "33": {
    "next": {
      "success": "18"
    },
    "delaytime": 1,
    "top": 504,
    "left": 187,
    "name": "Sure! Please, tell s",
    "function": "__send_message__",
    "responses": [
      {
        "text": "Sure! Please, tell share your thoughts and I’ll get some humans to review it:\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_33','Discorbot Chat','Give Feedback');\"/>{/html}",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "33"
  },
  "9": {
    "next": {
      "success": "36"
    },
    "delaytime": 0,
    "top": 366,
    "left": 834,
    "name": "Interesting! Now, wh",
    "function": "__send_message__",
    "responses": [
      {
        "choice_text": "*Type the number of the option you are interested in",
        "text": "Interesting! Now, what’s the *most important thing you want to accomplish* thanks to this technology?\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.identifyUser('discorbot_9a',{web: '@web'});window.parent.trackEvent('discorbot_9b','Discorbot Chat','Give What');\"/>{/html}",
        "entity": "button",
        "buttons": [
          "Get leads",
          "Explain my service",
          "Others"
        ],
        "order": 0
      }
    ],
    "id": "9"
  },
  "32": {
    "delaytime": 2,
    "top": 932,
    "left": 1268,
    "name": "Take care in the mea",
    "function": "__send_message__",
    "responses": [
      {
        "text": "Take care in the meantime! 😘\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_32','Discorbot Chat','End');\"/>{/html}",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "32"
  },
  "22": {
    "next": {
      "next": "23",
      "finish": "31",
      "behind": "26"
    },
    "delaytime": "0",
    "top": 831,
    "left": 841,
    "name": "Pick selected option",
    "function": "__choice__",
    "id": "22",
    "hidetextbox": true
  },
  "41": {
    "field": "custom",
    "keyword": true,
    "delaytime": "0",
    "top": 566,
    "left": 1082,
    "next": {
      "success": "42"
    },
    "name": "Pick @how",
    "function": "__text__",
    "overwrite": true,
    "custom_field": "how",
    "id": "41"
  },
  "1": {
    "field": "email",
    "next": {
      "success": "2"
    },
    "delaytime": 0,
    "top": 53,
    "left": 698,
    "name": "Pick @email",
    "function": "__email__",
    "overwrite": true,
    "id": "1"
  },
  "26": {
    "next": {
      "success": "27"
    },
    "delaytime": 1,
    "top": 914,
    "left": 857,
    "name": "The biggest mystery",
    "function": "__send_message__",
    "responses": [
      {
        "text": "The biggest mystery of all… LandBot is nothing but a *top secret experiment ran by Helloumi’s team*, somewhere in the Mediterranean Coast.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_26','Discorbot Chat','Who is behind');\"/>{/html}",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "26",
    "hidetextbox": true
  },
  "36": {
    "next": {
      "success": "11"
    },
    "hidetextbox": true,
    "name": "Pick @what",
    "function": "__text__",
    "overwrite": true,
    "field": "custom",
    "custom_field": "what",
    "delaytime": "0",
    "top": 428,
    "left": 515,
    "keyword": true,
    "id": "36"
  },
  "12": {
    "next": {
      "success": "37"
    },
    "delaytime": 2,
    "top": 521,
    "left": 470,
    "name": "*When* do you want t",
    "function": "__send_message__",
    "responses": [
      {
        "choice_text": "*Type the number of the option you are interested in",
        "text": "*When* do you want to have your LandBot up and running?\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_12','Discorbot Chat','Give When');\"/>{/html}",
        "entity": "button",
        "buttons": [
          "NOW!",
          "Within a month",
          "I don't know"
        ],
        "order": 0
      }
    ],
    "id": "12"
  },
  "37": {
    "next": {
      "success": "14"
    },
    "hidetextbox": true,
    "name": "Pick @when",
    "function": "__text__",
    "overwrite": true,
    "field": "custom",
    "custom_field": "when",
    "delaytime": "0",
    "top": 542,
    "left": 836,
    "keyword": true,
    "id": "37"
  },
  "29": {
    "next": {
      "failed": "30"
    },
    "delaytime": 0,
    "top": 1130,
    "left": 861,
    "name": "Pick selected option",
    "function": "__choice__",
    "id": "29"
  },
  "27": {
    "next": {
      "success": "40"
    },
    "delaytime": 2,
    "top": 983,
    "left": 876,
    "name": "Send Image",
    "function": "__send_message__",
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494946761.106267.gif",
        "order": 0
      }
    ],
    "id": "27",
    "hidetextbox": true
  },
  "2": {
    "next": {
      "success": "3"
    },
    "delaytime": 0,
    "top": 111,
    "left": 491,
    "name": "Hiya! It’s so good t",
    "function": "__send_message__",
    "responses": [
      {
        "text": "Hiya! It’s so good to see you around again! 🤗\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.identifyUser('discorbot_2a',{email: '@email'});window.parent.trackEvent('discorbot_2b','Discorbot Start Chat');\"/>{/html}",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "2"
  },
  "14": {
    "next": {
      "success": "34"
    },
    "delaytime": 1,
    "top": 607,
    "left": 486,
    "name": "Awesome, that’s all",
    "function": "__send_message__",
    "responses": [
      {
        "text": "Awesome, that’s all I need by now.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_14','Discorbot Chat','End welcome');\"/>{/html}",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "14"
  },
  "34": {
    "next": {
      "success": "46"
    },
    "delaytime": 2,
    "top": 637,
    "left": 840,
    "name": "Before explaining yo",
    "function": "__send_message__",
    "responses": [
      {
        "text": "Before explaining you a bit more on what’s going to happen, please *tell me how are you doing now what you want me to do*: 🤓\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_34','Discorbot Chat','Give How');\"/>{/html}",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "34"
  },
  "42": {
    "next": {
      "success": "43"
    },
    "delaytime": 1,
    "top": 638,
    "left": 1054,
    "name": "That was crystal cle",
    "function": "__send_message__",
    "responses": [
      {
        "choice_text": "*Type the number of the option you are interested in",
        "text": "That was crystal clear, thanks!! 🙌🏽 Do you want to add more information?\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_42','Discorbot Chat','Ask if wants to add more info');\"/>{/html}",
        "entity": "button",
        "buttons": [
          "Add more",
          "Continue"
        ],
        "order": 0
      }
    ],
    "id": "42",
    "hidetextbox": true
  },
  "18": {
    "field": "custom",
    "next": {
      "success": "19"
    },
    "delaytime": "2",
    "top": 584,
    "left": 196,
    "name": "Pick @feedback",
    "function": "__text__",
    "overwrite": true,
    "custom_field": "feedback",
    "id": "18"
  },
  "44": {
    "next": {
      "success": "45"
    },
    "delaytime": 1,
    "top": 756,
    "left": 1291,
    "name": "OK, please, go ahead",
    "function": "__send_message__",
    "responses": [
      {
        "text": "OK, please, go ahead:\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_44','Discorbot Chat','Give more info');\"/>{/html}",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "44"
  },
  "46": {
    "next": {
      "success": "41"
    },
    "delaytime": 0,
    "top": 476,
    "left": 1084,
    "name": "(e.g. _Right now I h",
    "function": "__send_message__",
    "responses": [
      {
        "text": "(e.g. _Right now I have a form that captures leads and I want it to be conversational_ or _I want my pricing page to become a conversation_ )",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "46"
  },
  "4": {
    "next": {
      "success": "5"
    },
    "delaytime": 1,
    "top": 183,
    "left": 496,
    "name": "How's everything?",
    "function": "__send_message__",
    "responses": [
      {
        "choice_text": "*Type the number of the option you are interested in",
        "text": "How's everything? 🤙\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_4','Discorbot Chat','How is everything?');\"/>{/html}",
        "entity": "button",
        "buttons": [
          "Awesome!",
          "Great",
          "Good"
        ],
        "order": 0
      }
    ],
    "id": "4"
  },
  "23": {
    "next": {
      "success": "24"
    },
    "delaytime": 1,
    "top": 824,
    "left": 326,
    "name": "Now, we’ll put to wo",
    "function": "__send_message__",
    "responses": [
      {
        "text": "Now, we’ll put to work some algorithms to validate your answers and *will reach you within 24 hours by email* to tell you if you’ve been selected to participate in our closed Beta.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_23','Discorbot Chat','What is Next');\"/>{/html}",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "23"
  },
  "24": {
    "next": {
      "success": "25"
    },
    "delaytime": "2",
    "top": 900,
    "left": 343,
    "name": "Send Image",
    "function": "__send_message__",
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494946730.53877.gif",
        "order": 0
      }
    ],
    "id": "24"
  },
  "19": {
    "next": {
      "success": "20"
    },
    "delaytime": "2",
    "top": 667,
    "left": 186,
    "name": "That was clever, tha",
    "function": "__send_message__",
    "responses": [
      {
        "text": "That was clever, thank you!",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "19"
  },
  "31": {
    "next": {
      "success": "32"
    },
    "delaytime": 1,
    "top": 876,
    "left": 1064,
    "name": "Great, then, Remembe",
    "function": "__send_message__",
    "responses": [
      {
        "text": "Great, then, Remember to *check your inbox* in the next 24 hours, you’ll hear from us with exciting news to share! 🚀\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_31','Discorbot Chat','Finish');\"/>{/html}",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "31",
    "hidetextbox": true
  },
  "3": {
    "next": {
      "success": "4"
    },
    "delaytime": "2",
    "top": 137,
    "left": 849,
    "name": "Send Image",
    "function": "__send_message__",
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494946612.593556.gif",
        "order": 0
      }
    ],
    "id": "3"
  },
  "21": {
    "next": {
      "success": "22"
    },
    "delaytime": 1,
    "top": 738,
    "left": 846,
    "name": "Now please tell me,",
    "function": "__send_message__",
    "responses": [
      {
        "choice_text": "*Type the number of the option you are interested in",
        "text": "Now please tell me, what do you want to do now:\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_21','Discorbot Chat','Menu');\"/>{/html}",
        "entity": "button",
        "buttons": [
          "What's next",
          "Who's behind",
          "Finish"
        ],
        "order": 0
      }
    ],
    "id": "21",
    "hidetextbox": true
  },
  "45": {
    "field": "custom",
    "keyword": true,
    "delaytime": "0",
    "top": 829,
    "left": 1314,
    "next": {
      "success": "21"
    },
    "name": "Pick @how_2",
    "function": "__text__",
    "overwrite": true,
    "custom_field": "how_2",
    "id": "45"
  },
  "6": {
    "next": {
      "success": "7"
    },
    "delaytime": "0,5",
    "top": 268,
    "left": 477,
    "name": "I assume you’ve rece",
    "function": "__send_message__",
    "responses": [
      {
        "text": "I assume you’ve received my invitation, so let’s start rocking!",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "6"
  },
  "25": {
    "next": {
      "success": "21"
    },
    "delaytime": "2",
    "top": 977,
    "left": 312,
    "name": "(_Maybe not that fut",
    "function": "__send_message__",
    "responses": [
      {
        "text": "*If not, you’ll still get Early Access* to the technology, so don’t worry about that!",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "25"
  },
  "28": {
    "next": {
      "success": "29"
    },
    "delaytime": 2,
    "top": 1076,
    "left": 1051,
    "name": "They started out toy",
    "function": "__send_message__",
    "responses": [
      {
        "choice_text": "*Type the number of the option you are interested in",
        "text": "Lately discovered that *great approaches have more to do with UX* rather than high-end technology.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_28','Discorbot Chat','Flight chatbots?');\"/>{/html}",
        "entity": "button",
        "buttons": [
          "Awesome!",
          "Flight chatbots?"
        ],
        "order": 0
      }
    ],
    "id": "28",
    "hidetextbox": true
  },
  "8": {
    "field": "custom",
    "keyword": true,
    "delaytime": 0,
    "top": 344,
    "left": 526,
    "next": {
      "success": "9"
    },
    "name": "Pick @web",
    "function": "__text__",
    "overwrite": true,
    "custom_field": "web",
    "id": "8"
  },
  "5": {
    "next": {
      "success": "6",
      "failed": "6"
    },
    "delaytime": "0",
    "top": 213,
    "left": 818,
    "name": "Pick selected option",
    "function": "__choice__",
    "id": "5",
    "hidetextbox": true
  },
  "40": {
    "next": {
      "success": "28"
    },
    "delaytime": 2,
    "top": 977,
    "left": 1044,
    "name": "They started out toy",
    "function": "__send_message__",
    "responses": [
      {
        "text": "They started out toying with flight search chatbots more than a year ago.",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "40",
    "hidetextbox": true
  },
  "7": {
    "next": {
      "success": "8"
    },
    "delaytime": 2,
    "top": 282,
    "left": 833,
    "name": "First, I’d like to k",
    "function": "__send_message__",
    "responses": [
      {
        "text": "First, I’d like to know on which *website you want LandBot to work* (i.e. _www.tesla.com/pricing_), go ahead!\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_7','Discorbot Chat','Give Web');\"/>{/html}",
        "entity": "text",
        "order": 0
      }
    ],
    "id": "7"
  },
  "43": {
    "next": {
      "more": "44",
      "add": "44",
      "continue": "21"
    },
    "delaytime": "0",
    "top": 644,
    "left": 1295,
    "name": "Pick selected option",
    "function": "__choice__",
    "id": "43",
    "hidetextbox": true
  }
}
