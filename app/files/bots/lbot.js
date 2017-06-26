{
  "38": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "about": "39",
      "how": "47",
      "start": "47"
    },
    "left": 688,
    "top": 1291,
    "id": "38"
  },
  "17": {
    "name": "*Explain a product o",
    "responses": [
      {
        "text": "*Explain a product or service*\n\nGive information to your visitors on your latest product in a personalized, conversational way.",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "left": 1314,
    "top": 411,
    "id": "17"
  },
  "5": {
    "name": "2️⃣  I'm fully custo",
    "responses": [
      {
        "text": "2️⃣  *I'm fully customizable in minutes with no coding*",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "6"
    },
    "left": 939,
    "top": 193,
    "id": "5"
  },
  "21": {
    "name": "Send Image",
    "responses": [
      {
        "order": 0,
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1498225485.569621.png"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "23"
    },
    "left": 947,
    "top": 776,
    "id": "21"
  },
  "9": {
    "name": "Sounds familiar? 😏",
    "responses": [
      {
        "text": "Sounds familiar? 😏",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "Product Hunt's!",
          "Kind of..."
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none"
        ],
        "dual_buttons": true,
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "includes": [
          "none",
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "10"
    },
    "left": 933,
    "top": 338,
    "id": "9"
  },
  "51": {
    "name": "Great!",
    "responses": [
      {
        "text": "Great!",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "52"
    },
    "left": 1114,
    "top": 1476,
    "id": "51"
  },
  "64": {
    "name": "👤 *GET AND MANAGE L",
    "responses": [
      {
        "text": "👤 *GET AND MANAGE LEADS* 👤\n\nDecide where do you want the information gathered by Landbot (email, Docs...), and what to do with it",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "37"
    },
    "left": 919,
    "top": 1223,
    "id": "64"
  },
  "14": {
    "name": "They say I'm the kin",
    "responses": [
      {
        "text": "They say I'm king in *getting information* out of visitors, they almost not notice!",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "So what can you do?"
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none"
        ],
        "dual_buttons": false,
        "images": [
          ""
        ],
        "pile_up": false,
        "includes": [
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "15"
    },
    "left": 720,
    "top": 481,
    "id": "14"
  },
  "50": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "try": "47",
      "start": "47",
      "share": "51"
    },
    "left": 800,
    "top": 1496,
    "id": "50"
  },
  "32": {
    "name": "👚 *CUSTOMIZE* 👕\nLo",
    "responses": [
      {
        "text": "👚 *CUSTOMIZE* 👕\n\nLook and feel and content in minutes for your Launchbot. We'll sign you up and give you access to the platform and the Chatbot Builder.",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "left": 1550,
    "top": 924,
    "id": "32"
  },
  "60": {
    "name": "*Allow human takeove",
    "responses": [
      {
        "text": "{html}<span class=\"text-big\">Takeover</span>{/html}\n🙋🏻  As a human when necessary",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "And that's it?"
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none"
        ],
        "dual_buttons": false,
        "images": [
          ""
        ],
        "pile_up": false,
        "includes": [
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "35"
    },
    "left": 516,
    "top": 620,
    "id": "60"
  },
  "53": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "failed": "54"
    },
    "left": 1186,
    "top": 1297,
    "id": "53"
  },
  "48": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "failed": "49"
    },
    "left": 613,
    "top": 1363,
    "id": "48"
  },
  "23": {
    "name": "😂",
    "responses": [
      {
        "text": "😂",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "I like Messina's bot! 😅",
          "You said it 👻"
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none"
        ],
        "dual_buttons": true,
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "includes": [
          "none",
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "24"
    },
    "left": 756,
    "top": 774,
    "id": "23"
  },
  "7": {
    "name": "Oh, and I'm not into",
    "responses": [
      {
        "text": "Oh, and I'm not into NLP or ML but *User Experience*, just like some other products out there",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "8"
    },
    "left": 728,
    "top": 267,
    "id": "7"
  },
  "44": {
    "name": "_Rewinding..._",
    "responses": [
      {
        "text": "_Rewinding..._",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "45"
    },
    "left": 356,
    "top": 297,
    "id": "44"
  },
  "52": {
    "name": "Please, *click here*",
    "responses": [
      {
        "text": "Please, *click here* and leave your comment on our Launch post, we'll get back to you ASAP\n\nWWW.URLDELPOST.COM\n\nReally appreciate it! ❤️",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "Done!"
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none"
        ],
        "dual_buttons": false,
        "images": [
          ""
        ],
        "pile_up": false,
        "includes": [
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "53"
    },
    "left": 1206,
    "top": 1369,
    "id": "52"
  },
  "55": {
    "name": "Shall you *create yo",
    "responses": [
      {
        "text": "Shall you *create yours now* or *finish* the conversation?",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "Create",
          "Finish"
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none"
        ],
        "dual_buttons": true,
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "includes": [
          "none",
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "56"
    },
    "left": 1218,
    "top": 1152,
    "id": "55"
  },
  "18": {
    "name": "*Capture leads like",
    "responses": [
      {
        "text": "*Capture leads like a PRO* \n\nAsk anything: email, name, phone, feedback... you name it! Choose free text, single/multiple choice…",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "left": 1308,
    "top": 476,
    "id": "18"
  },
  "6": {
    "name": "3️⃣ I get on really",
    "responses": [
      {
        "text": "3️⃣  *I get on really well with +750 apps thanks to Zapier*",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "7"
    },
    "left": 737,
    "top": 192,
    "id": "6"
  },
  "46": {
    "name": "I'll first explain y",
    "responses": [
      {
        "text": "I'll first explain you why I'm different from a regular chatbot... 🤖",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "4"
    },
    "left": 508,
    "top": 127,
    "id": "46"
  },
  "30": {
    "name": "test",
    "responses": [
      {
        "text": "Let's go then!",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "61"
    },
    "left": 964,
    "top": 1072,
    "id": "30"
  },
  "54": {
    "name": "Thank you very much",
    "responses": [
      {
        "text": "Thank you very much for experiencing *Landbot* first hand, hope you liked me! 👏🏼 🤖 😌",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "55"
    },
    "left": 1198,
    "top": 1228,
    "id": "54"
  },
  "47": {
    "name": "That's the easiest t",
    "responses": [
      {
        "text": "That's the easiest thing! 😍",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "41"
    },
    "left": 820,
    "top": 1375,
    "id": "47"
  },
  "26": {
    "name": "Let's draw a thick v",
    "responses": [
      {
        "text": "Let's draw a thick veil over 😁",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "27"
    },
    "left": 693,
    "top": 928,
    "id": "26"
  },
  "24": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "said": "26",
      "like": "25"
    },
    "left": 916,
    "top": 849,
    "id": "24"
  },
  "41": {
    "name": "Click here:\n\n\nYou'll",
    "responses": [
      {
        "text": "Click here:\n\nWWW.URLDEBUILDBOT.COM\n\nYou'll start building *your own Landbot* and will have your account ready before you can say Jack Robinbot",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "42"
    },
    "left": 478,
    "top": 1092,
    "id": "41"
  },
  "10": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "product": "11",
      "failed": "12"
    },
    "left": 726,
    "top": 339,
    "id": "10"
  },
  "49": {
    "name": "so what now",
    "responses": [
      {
        "text": "So what now, do you feel like *trying Landbot out* or maybe *share some feedback* on Product Hunt?",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "Try it meow!",
          "Share feedback"
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none"
        ],
        "dual_buttons": true,
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "includes": [
          "none",
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "50"
    },
    "left": 626,
    "top": 1492,
    "id": "49"
  },
  "36": {
    "name": "We've got a *Bonus T",
    "responses": [
      {
        "text": "We've got a *Bonus Track*!",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "20"
    },
    "left": 714,
    "top": 699,
    "id": "36"
  },
  "59": {
    "name": "*Capture leads like",
    "responses": [
      {
        "text": "{html}<span class=\"text-big\">Capture</span>{/html}\n🎯  Leads like a PRO",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "60"
    },
    "left": 720,
    "top": 619,
    "id": "59"
  },
  "56": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "finish": "57",
      "create": "29"
    },
    "left": 1215,
    "top": 1076,
    "id": "56"
  },
  "27": {
    "name": "Well, now I'll expla",
    "responses": [
      {
        "text": "Well, now I'll explain you how the *whole process* works in 4 simple steps, or maybe you want to experience it by yourself?",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "Show me",
          "I want a Landbot NOW"
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none"
        ],
        "dual_buttons": true,
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "includes": [
          "none",
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "28"
    },
    "left": 926,
    "top": 999,
    "id": "27"
  },
  "40": {
    "name": "We've got a *special",
    "responses": [
      {
        "text": "Then, we've got a *special deal* for you Hunters and we're offering a 🕺 *50% off our Professional Plan* 💃 \n which allows you to have unlimited Landbots with unlimited interactions for just *$25/month*!",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "Sounds good!",
          "All right..."
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none"
        ],
        "dual_buttons": true,
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "includes": [
          "none",
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "48"
    },
    "left": 407,
    "top": 1362,
    "id": "40"
  },
  "25": {
    "name": "Me too! Just kidding",
    "responses": [
      {
        "text": "Me too! Just kidding 🤖 ❤️",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "27"
    },
    "left": 918,
    "top": 928,
    "id": "25"
  },
  "43": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "failed": "44"
    },
    "left": 473,
    "top": 850,
    "id": "43"
  },
  "28": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "landbot": "29",
      "failed": "30"
    },
    "left": 701,
    "top": 1002,
    "id": "28"
  },
  "35": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "failed": "36"
    },
    "left": 507,
    "top": 694,
    "id": "35"
  },
  "29": {
    "name": "🚀 😻  *WOOHOOO* 😻",
    "responses": [
      {
        "text": "🚀 😻  *WOOHOOO* 😻 🚀",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "41"
    },
    "left": 694,
    "top": 1084,
    "id": "29"
  },
  "8": {
    "name": "Send Image",
    "responses": [
      {
        "order": 0,
        "entity": "image",
        "path": "https://storage.googleapis.com/media.yexir.com/ronin/1498154252.123383.gif"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "9"
    },
    "left": 952,
    "top": 267,
    "id": "8"
  },
  "39": {
    "name": "You can *try Landbot",
    "responses": [
      {
        "text": "You can *try Landbot.io for free* for up to 100 interactions of your Conversational Web 😌",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "40"
    },
    "left": 412,
    "top": 1287,
    "id": "39"
  },
  "4": {
    "name": "1️⃣ I live in an URL",
    "responses": [
      {
        "text": "1️⃣  *I live in an URL*",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "5"
    },
    "left": 936,
    "top": 119,
    "id": "4"
  },
  "13": {
    "name": "Which that way help",
    "responses": [
      {
        "text": "Which makes them standout from the crowd and get better user attention",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "14"
    },
    "left": 926,
    "top": 480,
    "id": "13"
  },
  "15": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "failed": "16"
    },
    "left": 716,
    "top": 556,
    "id": "15"
  },
  "45": {
    "name": "🎉 Hello again! 👋🏽",
    "responses": [
      {
        "text": "🎉  Hello again! 🎉",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "46"
    },
    "left": 398,
    "top": 217,
    "id": "45"
  },
  "57": {
    "name": "OK, see you soon, hu",
    "responses": [
      {
        "text": "OK, see you soon, hunter! 🤗",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "function": "__send_message__",
    "next": {
      "success": "42"
    },
    "left": 1256,
    "top": 965,
    "id": "57"
  },
  "16": {
    "name": "Well, there are 3 th",
    "responses": [
      {
        "text": "Well, there are 3 things I'm really good at, and they're all paired:",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "58"
    },
    "left": 922,
    "top": 550,
    "id": "16"
  },
  "62": {
    "name": "👚 *CUSTOMIZE* 👕",
    "responses": [
      {
        "text": "👚 *CUSTOMIZE* 👕\n\nSelect your content, questions you want to make, GIFs you want to share, colors, fonts, background, logo...",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "63"
    },
    "left": 699,
    "top": 1154,
    "id": "62"
  },
  "42": {
    "name": "You can always start",
    "responses": [
      {
        "text": "You can always start over by clicking here:",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "Start again!"
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none"
        ],
        "dual_buttons": false,
        "images": [
          ""
        ],
        "pile_up": false,
        "includes": [
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "43"
    },
    "left": 471,
    "top": 1001,
    "id": "42"
  },
  "37": {
    "name": "Makes sense?",
    "responses": [
      {
        "text": "Makes sense, uh?",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "How can I start?",
          "What about pricing?"
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none"
        ],
        "dual_buttons": true,
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "includes": [
          "none",
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "38"
    },
    "left": 939,
    "top": 1293,
    "id": "37"
  },
  "19": {
    "name": "*Allow human takeove",
    "responses": [
      {
        "text": "*Allow human takeover*\n\nScoring your visitors and found a gem? Get notified, enter the app and join the chat! You put the NLP and I do the rest 😎",
        "entity": "button",
        "choice_text": "*Type the number of the option you are interested in",
        "order": 0,
        "buttons": [
          "And that's it?"
        ]
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none"
        ],
        "dual_buttons": false,
        "images": [
          ""
        ],
        "pile_up": false,
        "includes": [
          "none"
        ],
        "multi": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "left": 1298,
    "top": 543,
    "id": "19"
  },
  "31": {
    "name": "💬 *TALK TO ME* 💬\nY",
    "responses": [
      {
        "text": "💬 *TALK TO ME* 💬\n\nYou set up a Landbot within a conversation when clicking on \"Create your own\" (top right)",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "left": 1560,
    "top": 853,
    "id": "31"
  },
  "12": {
    "name": "It's important to sa",
    "responses": [
      {
        "text": "It's important to say that I'm not here to replace websites, but to help you create *Conversational Experiences* within them 🤖 ❤️ 💻",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "13"
    },
    "left": 929,
    "top": 406,
    "id": "12"
  },
  "33": {
    "name": "⚙️ *IMPLEMENT* ⚙️\nAc",
    "responses": [
      {
        "text": "⚙️ *IMPLEMENT* ⚙️\n\nAccess your account (I've created it for you), give Landbot some final touches in the Chatbot Builder and start sharing/linking the URL of your Landbot.",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "left": 1551,
    "top": 1001,
    "id": "33"
  },
  "63": {
    "name": "⚙️ *IMPLEMENT* ⚙️",
    "responses": [
      {
        "text": "⚙️ *IMPLEMENT* ⚙️\n\nUse one of my subdomains or upload the Landbot to yours like you'd do with a regular Live Chat",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "64"
    },
    "left": 705,
    "top": 1226,
    "id": "63"
  },
  "11": {
    "name": "You got it! 🤗",
    "responses": [
      {
        "text": "You guessed it! 🤗",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "12"
    },
    "left": 742,
    "top": 411,
    "id": "11"
  },
  "2": {
    "name": "Thank you!",
    "responses": [
      {
        "text": "Thank you!",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "3"
    },
    "left": 749,
    "top": 137,
    "id": "2"
  },
  "1": {
    "name": "pick selected option",
    "features": {
      "hide_textbox": false
    },
    "function": "__choice__",
    "next": {
      "nah": "2",
      "like": "2",
      "failed": "3"
    },
    "left": 732,
    "top": 53,
    "id": "1"
  },
  "61": {
    "name": "💬 *TALK TO ME* 💬",
    "responses": [
      {
        "text": "💬 *TALK TO ME* 💬\n\nYou build your first Landbot chatting with me (or with a version of me you'll find clicking on that button at the top)",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "62"
    },
    "left": 926,
    "top": 1154,
    "id": "61"
  },
  "34": {
    "name": "👤 *GET AND MANAGE L",
    "responses": [
      {
        "text": "👤 *GET AND MANAGE LEADS* 👤\n\nIt will automatically start getting information from your visitors and sending it straight to your email, a Google Sheet, ... Now you've got precious data to manage and grow your business!",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "left": 1563,
    "top": 1075,
    "id": "34"
  },
  "20": {
    "name": "_*BONUS TRACK*_\n\nYou",
    "responses": [
      {
        "text": "You can also transform your old-fashioned personal website into a conversation your followers will be mad about! 😹",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "21"
    },
    "left": 921,
    "top": 696,
    "id": "20"
  },
  "58": {
    "name": "*Explain a product o",
    "responses": [
      {
        "text": "{html}<span class=\"text-big\">Explain</span>{/html}\n💬  Your product or service",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "59"
    },
    "left": 919,
    "top": 623,
    "id": "58"
  },
  "3": {
    "name": "Well, I've got some",
    "responses": [
      {
        "text": "Well, I've got some points that differentiate me quite a lot from a regular chatbot, namely:",
        "order": 0,
        "entity": "text"
      }
    ],
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "function": "__send_message__",
    "next": {
      "success": "4"
    },
    "left": 931,
    "top": 52,
    "id": "3"
  }
}
