{
  "5": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 213,
    "id": "5",
    "next": {
      "failed": "6",
      "success": "6"
    },
    "delaytime": "0",
    "left": 818,
    "hidetextbox": true
  },
  "27": {
    "function": "__send_message__",
    "id": "27",
    "name": "Send Image",
    "top": 983,
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494946761.106267.gif",
        "order": 0
      }
    ],
    "next": {
      "success": "40"
    },
    "delaytime": 2,
    "left": 876,
    "hidetextbox": true
  },
  "4": {
    "function": "__send_message__",
    "id": "4",
    "name": "How's everything?",
    "top": 183,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Awesome!",
          "Great",
          "Good"
        ],
        "order": 0,
        "text": "How's everything? 🤙\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_4','Discorbot Chat','How is everything?');\"/>{/html}",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "5"
    },
    "delaytime": 1,
    "left": 496
  },
  "9": {
    "function": "__send_message__",
    "id": "9",
    "name": "Interesting! Now, wh",
    "top": 366,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Get leads",
          "Explain my service",
          "Others"
        ],
        "order": 0,
        "text": "Interesting! Now, what’s the *most important thing you want to accomplish* thanks to this technology?\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.identifyUser('discorbot_9a',{web: '@web'});window.parent.trackEvent('discorbot_9b','Discorbot Chat','Give What');\"/>{/html}",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "36"
    },
    "delaytime": 0,
    "left": 834
  },
  "8": {
    "function": "__text__",
    "id": "8",
    "name": "Pick @web",
    "top": 344,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "9"
    },
    "keyword": true,
    "delaytime": 0,
    "left": 526,
    "custom_field": "web"
  },
  "30": {
    "function": "__send_message__",
    "id": "30",
    "name": "Now, they’re giving",
    "top": 1119,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Now, they’re giving *early access for people to try their newest product* (that gets 3X conversion rate than anything you've seen before), and you might be one of those! 🙌🏽"
      }
    ],
    "next": {
      "success": "21"
    },
    "delaytime": 2,
    "left": 621,
    "hidetextbox": true
  },
  "24": {
    "function": "__send_message__",
    "id": "24",
    "name": "Send Image",
    "top": 900,
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494946730.53877.gif",
        "order": 0
      }
    ],
    "next": {
      "success": "25"
    },
    "delaytime": 2,
    "left": 343,
    "hidetextbox": true
  },
  "19": {
    "function": "__send_message__",
    "id": "19",
    "name": "That was clever, tha",
    "top": 667,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "That was clever, thank you!"
      }
    ],
    "next": {
      "success": "20"
    },
    "delaytime": "2",
    "left": 186
  },
  "6": {
    "function": "__send_message__",
    "id": "6",
    "name": "I assume you’ve rece",
    "top": 268,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "I assume you’ve received my invitation, so let’s start rocking!"
      }
    ],
    "next": {
      "success": "7"
    },
    "delaytime": "0,5",
    "left": 477
  },
  "20": {
    "function": "__send_message__",
    "id": "20",
    "name": "Send Image",
    "top": 746,
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494946694.430742.gif",
        "order": 0
      }
    ],
    "next": {
      "success": "21"
    },
    "delaytime": "2",
    "left": 209
  },
  "43": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 644,
    "id": "43",
    "next": {
      "add": "44",
      "continue": "21",
      "more": "44"
    },
    "delaytime": "0",
    "left": 1295,
    "hidetextbox": true
  },
  "33": {
    "function": "__send_message__",
    "id": "33",
    "name": "Sure! Please, tell s",
    "top": 504,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Sure! Please, tell share your thoughts and I’ll get some humans to review it:\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_33','Discorbot Chat','Give Feedback');\"/>{/html}"
      }
    ],
    "next": {
      "success": "18"
    },
    "delaytime": 1,
    "left": 187
  },
  "22": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 831,
    "id": "22",
    "next": {
      "finish": "31",
      "next": "23",
      "behind": "26"
    },
    "delaytime": "0",
    "left": 841,
    "hidetextbox": true
  },
  "36": {
    "field": "custom",
    "hidetextbox": true,
    "overwrite": true,
    "delaytime": "0",
    "next": {
      "success": "11"
    },
    "custom_field": "what",
    "function": "__text__",
    "name": "Pick @what",
    "top": 428,
    "id": "36",
    "keyword": true,
    "left": 515
  },
  "7": {
    "function": "__send_message__",
    "id": "7",
    "name": "First, I’d like to k",
    "top": 282,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "First, I’d like to know on which *website you want LandBot to work* (i.e. _www.tesla.com/pricing_), go ahead!\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_7','Discorbot Chat','Give Web');\"/>{/html}"
      }
    ],
    "next": {
      "success": "8"
    },
    "delaytime": 2,
    "left": 833
  },
  "44": {
    "function": "__send_message__",
    "id": "44",
    "name": "OK, please, go ahead",
    "top": 756,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "OK, please, go ahead:\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_44','Discorbot Chat','Give more info');\"/>{/html}"
      }
    ],
    "next": {
      "success": "45"
    },
    "delaytime": 1,
    "left": 1291
  },
  "25": {
    "function": "__send_message__",
    "id": "25",
    "name": "(_Maybe not that fut",
    "top": 977,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "*If not, you’ll still get Early Access* to the technology, so don’t worry about that!"
      }
    ],
    "next": {
      "success": "21"
    },
    "delaytime": 2,
    "left": 312,
    "hidetextbox": true
  },
  "42": {
    "function": "__send_message__",
    "id": "42",
    "name": "That was crystal cle",
    "top": 638,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Add more",
          "Continue"
        ],
        "order": 0,
        "text": "That was crystal clear, thanks!! 🙌🏽 Do you want to add more information?\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_42','Discorbot Chat','Ask if wants to add more info');\"/>{/html}",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "43"
    },
    "delaytime": 1,
    "left": 1054,
    "hidetextbox": true
  },
  "18": {
    "function": "__text__",
    "id": "18",
    "name": "Pick @feedback",
    "top": 584,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "19"
    },
    "delaytime": "2",
    "left": 196,
    "custom_field": "feedback"
  },
  "21": {
    "function": "__send_message__",
    "id": "21",
    "name": "Now please tell me,",
    "top": 738,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "What's next",
          "Who's behind",
          "Finish"
        ],
        "order": 0,
        "text": "Now please tell me, what do you want to do now:\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_21','Discorbot Chat','Menu');\"/>{/html}",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "22"
    },
    "delaytime": 1,
    "left": 846,
    "hidetextbox": true
  },
  "14": {
    "function": "__send_message__",
    "id": "14",
    "name": "Awesome, that’s all",
    "top": 607,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Awesome, that’s all I need by now.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_14','Discorbot Chat','End welcome');\"/>{/html}"
      }
    ],
    "next": {
      "success": "34"
    },
    "delaytime": 1,
    "left": 486
  },
  "12": {
    "function": "__send_message__",
    "id": "12",
    "name": "*When* do you want t",
    "top": 521,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "NOW!",
          "Within a month",
          "I don't know"
        ],
        "order": 0,
        "text": "*When* do you want to have your LandBot up and running?\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_12','Discorbot Chat','Give When');\"/>{/html}",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "37"
    },
    "delaytime": 2,
    "left": 470
  },
  "1": {
    "function": "__email__",
    "id": "1",
    "name": "Pick @email",
    "top": 53,
    "field": "email",
    "overwrite": true,
    "next": {
      "success": "2"
    },
    "delaytime": 0,
    "left": 698
  },
  "46": {
    "function": "__send_message__",
    "id": "46",
    "name": "(e.g. _Right now I h",
    "top": 476,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "( _e.g. Right now I have a form that captures leads and I want it to be conversational or I want my pricing page to become a conversation_ )"
      }
    ],
    "next": {
      "success": "41"
    },
    "delaytime": 0,
    "left": 1084
  },
  "31": {
    "function": "__send_message__",
    "id": "31",
    "name": "Great, then, Remembe",
    "top": 876,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Great, then, Remember to *check your inbox* in the next 24 hours, you’ll hear from us with exciting news to share! 🚀\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_31','Discorbot Chat','Finish');\"/>{/html}"
      }
    ],
    "next": {
      "success": "32"
    },
    "delaytime": 1,
    "left": 1064,
    "hidetextbox": true
  },
  "3": {
    "function": "__send_message__",
    "id": "3",
    "name": "Send Image",
    "top": 137,
    "responses": [
      {
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1494946612.593556.gif",
        "order": 0
      }
    ],
    "next": {
      "success": "4"
    },
    "delaytime": "2",
    "left": 849
  },
  "34": {
    "function": "__send_message__",
    "id": "34",
    "name": "Before explaining yo",
    "top": 637,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Before explaining you a bit more on what’s going to happen, please *tell me how are you doing now what you want me to do*: 🤓\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_34','Discorbot Chat','Give How');\"/>{/html}"
      }
    ],
    "next": {
      "success": "46"
    },
    "delaytime": 2,
    "left": 840
  },
  "23": {
    "function": "__send_message__",
    "id": "23",
    "name": "Now, we’ll put to wo",
    "top": 824,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Now, we’ll put to work some algorithms to validate your answers and *will reach you within 24 hours by email* to tell you if you’ve been selected to participate in our closed Beta.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_23','Discorbot Chat','What is Next');\"/>{/html}"
      }
    ],
    "next": {
      "success": "24"
    },
    "delaytime": 1,
    "left": 326,
    "hidetextbox": true
  },
  "29": {
    "function": "__choice__",
    "name": "Pick selected option",
    "top": 1130,
    "id": "29",
    "next": {
      "failed": "30"
    },
    "delaytime": 0,
    "left": 861
  },
  "26": {
    "function": "__send_message__",
    "id": "26",
    "name": "The biggest mystery",
    "top": 914,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "The biggest mystery of all… LandBot is nothing but a *top secret experiment ran by Helloumi’s team*, somewhere in the Mediterranean Coast.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_26','Discorbot Chat','Who is behind');\"/>{/html}"
      }
    ],
    "next": {
      "success": "27"
    },
    "delaytime": 1,
    "left": 857,
    "hidetextbox": true
  },
  "41": {
    "function": "__text__",
    "id": "41",
    "name": "Pick @how",
    "top": 566,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "42"
    },
    "keyword": true,
    "delaytime": "0",
    "left": 1082,
    "custom_field": "how"
  },
  "40": {
    "function": "__send_message__",
    "id": "40",
    "name": "They started out toy",
    "top": 977,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "They started out toying with flight search chatbots more than a year ago."
      }
    ],
    "next": {
      "success": "28"
    },
    "delaytime": 2,
    "left": 1044,
    "hidetextbox": true
  },
  "11": {
    "function": "__send_message__",
    "id": "11",
    "name": "Super! As my idol, S",
    "top": 456,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Super! As my godfather Steve would say… *One more thing*! ☝️"
      }
    ],
    "next": {
      "success": "12"
    },
    "delaytime": "0,5",
    "left": 831
  },
  "2": {
    "function": "__send_message__",
    "id": "2",
    "name": "Hiya! It’s so good t",
    "top": 111,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Hiya! It’s so good to see you around again! 🤗\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.identifyUser('discorbot_2a',{email: '@email'});window.parent.trackEvent('discorbot_2b','Discorbot Start Chat');\"/>{/html}"
      }
    ],
    "next": {
      "success": "3"
    },
    "delaytime": 0,
    "left": 491
  },
  "37": {
    "field": "custom",
    "hidetextbox": true,
    "overwrite": true,
    "delaytime": "0",
    "next": {
      "success": "14"
    },
    "custom_field": "when",
    "function": "__text__",
    "name": "Pick @when",
    "top": 542,
    "id": "37",
    "keyword": true,
    "left": 836
  },
  "45": {
    "function": "__text__",
    "id": "45",
    "name": "Pick @how_2",
    "top": 829,
    "field": "custom",
    "overwrite": true,
    "next": {
      "success": "21"
    },
    "keyword": true,
    "delaytime": "0",
    "left": 1314,
    "custom_field": "how_2"
  },
  "32": {
    "function": "__send_message__",
    "id": "32",
    "name": "Take care in the mea",
    "top": 932,
    "responses": [
      {
        "entity": "text",
        "order": 0,
        "text": "Take care in the meantime! 😘\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_32','Discorbot Chat','End');\"/>{/html}"
      }
    ],
    "hidetextbox": true,
    "delaytime": 2,
    "left": 1268
  },
  "28": {
    "function": "__send_message__",
    "id": "28",
    "name": "They started out toy",
    "top": 1076,
    "responses": [
      {
        "entity": "button",
        "buttons": [
          "Awesome!",
          "Flight chatbots?"
        ],
        "order": 0,
        "text": "Lately discovered that *great approaches have more to do with UX* rather than high-end technology.\n{html}<img src=\"x\" style=\"display: none;\" onerror=\"window.parent.trackEvent('discorbot_28','Discorbot Chat','Flight chatbots?');\"/>{/html}",
        "choice_text": "*Type the number of the option you are interested in"
      }
    ],
    "next": {
      "success": "29"
    },
    "delaytime": 2,
    "left": 1051,
    "hidetextbox": true
  }
}
