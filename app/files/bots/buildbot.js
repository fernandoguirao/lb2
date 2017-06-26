{
  "207": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 1158,
    "next": {
      "video_1": "206",
      "back": "191",
      "next": "161",
      "video_2": "206",
      "video_3": "206"
    },
    "left": 6296,
    "function": "__choice__",
    "id": "207"
  },
  "190": {
    "name": "Pick @light",
    "next": {
      "success": "218"
    },
    "features": {
      "hide_textbox": false
    },
    "keyword": true,
    "custom_field": "light",
    "top": 1117,
    "field": "custom",
    "left": 4935,
    "function": "__text__",
    "id": "190",
    "overwrite": true
  },
  "192": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 815,
    "next": {
      "video": "196",
      "back": "172",
      "gradient": "193",
      "image": "194",
      "next": "161",
      "color": "195"
    },
    "left": 5728,
    "function": "__choice__",
    "id": "192"
  },
  "202": {
    "responses": [
      {
        "text": "Upload a background image:\n{html}<img src=\"x\" onerror=\"showBtnUpload();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Sube una imagen de f",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 1096,
    "next": {
      "success": "222"
    },
    "left": 5648,
    "function": "__send_message__",
    "id": "202"
  },
  "220": {
    "name": "Pick @tagline",
    "next": {
      "success": "174"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "tagline",
    "top": 1165,
    "field": "custom",
    "left": 3713,
    "function": "__text__",
    "id": "220",
    "overwrite": true
  },
  "152": {
    "responses": [
      {
        "text": "Dime tu email",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Dime tu email",
    "features": {
      "textarea": {
        "field": "email"
      },
      "hide_textbox": false
    },
    "top": 158,
    "next": {
      "success": "153"
    },
    "left": 216,
    "function": "__send_message__",
    "id": "152"
  },
  "198": {
    "name": "Pick @gradientfrom",
    "next": {
      "success": "199"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "gradientfrom",
    "top": 1141,
    "field": "custom",
    "left": 5203,
    "function": "__text__",
    "id": "198",
    "overwrite": true
  },
  "148": {
    "responses": [
      {
        "text": "Now I need your *company name*, please:",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Dime el nombre de tu",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 358,
    "next": {
      "success": "149"
    },
    "left": 198,
    "function": "__send_message__",
    "id": "148"
  },
  "186": {
    "responses": [
      {
        "text": "Pick a color or enter hexadecimal color code \n{html}<img src=\"x\" onerror=\"hideFooter();addColorPicker();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Escribe el color",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 1015,
    "next": {
      "success": "190"
    },
    "left": 4898,
    "function": "__send_message__",
    "id": "186"
  },
  "156": {
    "name": "API Request",
    "next": {
      "success": "155"
    },
    "url": "https://daisho.yexir.com/register/buildbot/",
    "method": "POST",
    "top": 792,
    "features": {
      "hide_textbox": false
    },
    "left": 220,
    "function": "__send_request__",
    "id": "156",
    "headers": {
      "Content-Type": "application/json"
    },
    "data": {
      "email": "@email",
      "customer_token": "@umichat_id",
      "token": "77HDVK45enAkzkmC",
      "brand_name": "@brand_name"
    }
  },
  "226": {
    "responses": [
      {
        "text": "Here comes the best part",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Now, let's configure",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 542,
    "next": {
      "success": "158"
    },
    "left": 2230,
    "function": "__send_message__",
    "id": "226"
  },
  "175": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 895,
    "next": {
      "nombre": "176",
      "icon": "178",
      "name": "176",
      "icono": "178",
      "back": "172",
      "next": "157",
      "tagline": "219"
    },
    "left": 3723,
    "function": "__choice__",
    "id": "175"
  },
  "165": {
    "responses": [
      {
        "text": "Do you like it?\n{html}<img src=\"x\" onerror='showFooter(); changeStyles({\ntype: \"template\",\ntemplatename: \"@template\"\n} ); '>{/html}",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "Yes",
          "No"
        ]
      }
    ],
    "name": "¿Te gusta?",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none"
        ],
        "includes": [
          "none",
          "none"
        ],
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "dual_buttons": true,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 926,
    "next": {
      "success": "169"
    },
    "left": 3019,
    "function": "__send_message__",
    "id": "165"
  },
  "168": {
    "keyword": true,
    "virtual": true,
    "field": "custom",
    "top": 791,
    "id": "168",
    "name": "Pick @template",
    "features": {
      "hide_textbox": false
    },
    "custom_field": "template",
    "function": "__text__",
    "next": {
      "success": "165"
    },
    "left": 2984,
    "overwrite": true
  },
  "171": {
    "name": "Pick @template",
    "next": {
      "success": "162"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "template",
    "virtual": true,
    "field": "custom",
    "left": 3166,
    "top": 1112,
    "id": "171",
    "overwrite": true,
    "function": "__text__"
  },
  "199": {
    "responses": [
      {
        "text": "Pick second gradient's color (bottom) or enter hexadecimal color code (#123ABC)",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Elige el segundo col",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 1226,
    "next": {
      "success": "200"
    },
    "left": 5198,
    "function": "__send_message__",
    "id": "199"
  },
  "197": {
    "responses": [
      {
        "text": "Pick first gradient's color (top) or enter hexadecimal color code (#123ABC)\n{html}<img src=\"x\" onerror=\"addColorPicker();hideFooter();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Elige el primer colo",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 1058,
    "next": {
      "success": "198"
    },
    "left": 5205,
    "function": "__send_message__",
    "id": "197"
  },
  "206": {
    "name": "Pick @videotemplate",
    "next": {
      "success": "201"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "videotemplate",
    "virtual": true,
    "field": "custom",
    "left": 6273,
    "top": 1326,
    "id": "206",
    "overwrite": true,
    "function": "__text__"
  },
  "161": {
    "responses": [
      {
        "text": "Perfect! 👏🏼\n{html}<img src=\"x\" onerror=\"hideFooter();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Perfecto",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 295,
    "next": {
      "success": "157"
    },
    "left": 4203,
    "function": "__send_message__",
    "id": "161"
  },
  "184": {
    "responses": [
      {
        "text": "Pick a color or enter hexadecimal color code \n{html}<img src=\"x\" onerror=\"hideFooter();addColorPicker();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Escribe el color",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 993,
    "next": {
      "success": "188"
    },
    "left": 4449,
    "function": "__send_message__",
    "id": "184"
  },
  "169": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 1008,
    "next": {
      "next": "161",
      "back": "162",
      "no": "171",
      "yes": "170"
    },
    "left": 2991,
    "function": "__choice__",
    "id": "169"
  },
  "177": {
    "name": "Pick @brandName",
    "next": {
      "success": "174"
    },
    "features": {
      "hide_textbox": false
    },
    "keyword": true,
    "custom_field": "brandname",
    "top": 1138,
    "field": "custom",
    "left": 3509,
    "function": "__text__",
    "id": "177",
    "overwrite": true
  },
  "204": {
    "name": "Pick @backgroundcolor",
    "next": {
      "success": "201"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "backgroundcolor",
    "top": 1218,
    "field": "custom",
    "left": 5941,
    "function": "__text__",
    "id": "204",
    "overwrite": true
  },
  "228": {
    "responses": [
      {
        "text": "Do you want to keep customizing the design?\n(Remember you can do it at any time once created)\n{html}<img src=\"x\" onerror=\"showFooter();\">{/html}",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "Customize",
          "Skip"
        ]
      }
    ],
    "name": "Do you want to keep",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "pencil",
          "right-arrow"
        ],
        "includes": [
          "icon",
          "icon"
        ],
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "dual_buttons": true,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 49,
    "next": {
      "success": "159"
    },
    "left": 3860,
    "function": "__send_message__",
    "id": "228"
  },
  "194": {
    "name": "Pick @backgroundtype",
    "next": {
      "success": "202"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "backgroundtype",
    "virtual": true,
    "field": "custom",
    "left": 5656,
    "top": 973,
    "id": "194",
    "overwrite": true,
    "function": "__text__"
  },
  "196": {
    "name": "Pick @backgroundtype",
    "next": {
      "success": "205"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "backgroundtype",
    "virtual": true,
    "field": "custom",
    "left": 6290,
    "top": 969,
    "id": "196",
    "overwrite": true,
    "function": "__text__"
  },
  "153": {
    "name": "Pick @email",
    "next": {
      "failed": "154",
      "success": "148"
    },
    "features": {
      "hide_textbox": false
    },
    "top": 257,
    "field": "email",
    "left": 220,
    "function": "__email__",
    "id": "153",
    "overwrite": true
  },
  "213": {
    "responses": [
      {
        "text": "Awesome!",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Perfecto",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 1440,
    "next": {
      "success": "208"
    },
    "left": 7239,
    "function": "__send_message__",
    "id": "213"
  },
  "188": {
    "name": "Pick @dark",
    "next": {
      "success": "218"
    },
    "features": {
      "hide_textbox": false
    },
    "keyword": true,
    "custom_field": "dark",
    "top": 1121,
    "field": "custom",
    "left": 4463,
    "function": "__text__",
    "id": "188",
    "overwrite": true
  },
  "174": {
    "responses": [
      {
        "text": "What do you want to change?\n{html}<img src=\"x\" onerror='hideBtnUpload(); showFooter(); changeStyles({\ntype: \"logo\",\nbrandName: \"@brandname\",\nlogo: \"@logo\",\ntagline: \"@tagline\"\n} ); '>{/html}",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "Name",
          "Icon",
          "Tagline"
        ]
      }
    ],
    "name": "Elige qué quieres ca",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none",
          "none"
        ],
        "includes": [
          "none",
          "none",
          "none"
        ],
        "images": [
          "",
          "",
          ""
        ],
        "pile_up": true,
        "dual_buttons": false,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 784,
    "next": {
      "success": "175"
    },
    "left": 3723,
    "function": "__send_message__",
    "id": "174"
  },
  "176": {
    "responses": [
      {
        "text": "Which name do you want on the top menu?\n{html}<img src=\"x\" onerror=\"hideFooter();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "¿Qué nombre quieres",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 1048,
    "next": {
      "success": "177"
    },
    "left": 3501,
    "function": "__send_message__",
    "id": "176"
  },
  "172": {
    "responses": [
      {
        "text": "Select what you want to customize. Whenever you're done click *PUBLISH*.",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "Logo",
          "Colors",
          "Background",
          "Typography"
        ]
      }
    ],
    "name": "Elige que quieres pe",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "star",
          "paint-brush",
          "picture",
          "document"
        ],
        "includes": [
          "icon",
          "icon",
          "icon",
          "icon"
        ],
        "images": [
          "",
          "",
          "",
          ""
        ],
        "pile_up": false,
        "dual_buttons": false,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 479,
    "next": {
      "success": "173"
    },
    "left": 5183,
    "function": "__send_message__",
    "id": "172"
  },
  "211": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 1090,
    "next": {
      "l": "212",
      "back": "208",
      "s": "212",
      "next": "161",
      "xs": "212",
      "xl": "212",
      "m": "212"
    },
    "left": 6846,
    "function": "__choice__",
    "id": "211"
  },
  "181": {
    "responses": [
      {
        "text": "Choose the color you want to change",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "Accent",
          "Light",
          "Contrast",
          "Dark"
        ]
      }
    ],
    "name": "Elige qué color quie",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none",
          "none",
          "none"
        ],
        "includes": [
          "none",
          "none",
          "none",
          "none"
        ],
        "images": [
          "",
          "",
          "",
          ""
        ],
        "pile_up": true,
        "dual_buttons": false,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 739,
    "next": {
      "success": "182"
    },
    "left": 4480,
    "function": "__send_message__",
    "id": "181"
  },
  "201": {
    "responses": [
      {
        "text": "Great!\n{html}<img src=\"x\" onerror=\"hideBtnUpload();removeColorPicker();\" style=\"display: none\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Perfecto",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 1503,
    "next": {
      "success": "191"
    },
    "left": 5785,
    "function": "__send_message__",
    "id": "201"
  },
  "158": {
    "responses": [
      {
        "text": "Do you want to *customize the design*?\n(You can do it at any time once created)\n{html}<img src=\"x\" onerror=\"showFooter();\">{/html}",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "Customize",
          "Skip"
        ]
      }
    ],
    "name": "¿Quieres personaliza",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "pencil",
          "right-arrow"
        ],
        "includes": [
          "icon",
          "icon"
        ],
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "dual_buttons": true,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 80,
    "next": {
      "success": "159"
    },
    "left": 4164,
    "function": "__send_message__",
    "id": "158"
  },
  "185": {
    "responses": [
      {
        "text": "Pick a color or enter hexadecimal color code \n{html}<img src=\"x\" onerror=\"hideFooter();addColorPicker();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Escribe el color",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 999,
    "next": {
      "success": "189"
    },
    "left": 4676,
    "function": "__send_message__",
    "id": "185"
  },
  "157": {
    "name": "API Request",
    "next": {
      "success": "101"
    },
    "url": "https://daisho.yexir.com/register/landbot/",
    "method": "POST",
    "top": 84,
    "features": {
      "hide_textbox": false
    },
    "left": 4758,
    "function": "__send_request__",
    "id": "157",
    "headers": {
      "Content-Type": "application/json"
    },
    "data": {
      "tagline": "@tagline",
      "background_image_url": "@backgroundimageurl",
      "image_url": "@logo",
      "template": "@template",
      "video_template": "@videotemplate",
      "contrast": "@contrast",
      "font_size": "@fontsize",
      "token": "77HDVK45enAkzkmC",
      "light": "@light",
      "presence_name": "@brandname",
      "background_type": "@backgroundtype",
      "accent_color": "@accent",
      "gradient_to": "@gradientto",
      "dark": "@dark",
      "gradient_from": "@gradientfrom",
      "font": "@font",
      "back_color": "@backgroundcolor",
      "customer_token": "@umichat_id"
    }
  },
  "173": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 598,
    "next": {
      "background": "191",
      "tipografia": "208",
      "colors": "181",
      "back": "160",
      "next": "161",
      "typography": "208",
      "logo": "174",
      "colours": "181"
    },
    "left": 5186,
    "function": "__choice__",
    "id": "173"
  },
  "219": {
    "responses": [
      {
        "text": "Type your tagline\n{html}<img src=\"x\" onerror=\"hideFooter();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Escribe el tagline",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 1050,
    "next": {
      "success": "220"
    },
    "left": 3705,
    "function": "__send_message__",
    "id": "219"
  },
  "215": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 1050,
    "next": {
      "next": "161",
      "roboto": "216",
      "oswald": "216",
      "slab": "216",
      "open": "216",
      "inconsolata": "216",
      "raleway": "216",
      "lato": "216",
      "droid": "216",
      "montserrat": "216",
      "back": "208"
    },
    "left": 7537,
    "function": "__choice__",
    "id": "215"
  },
  "159": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 184,
    "next": {
      "back": "147",
      "customize": "227",
      "skip": "161",
      "scratch": "227"
    },
    "left": 4166,
    "function": "__choice__",
    "id": "159"
  },
  "162": {
    "responses": [
      {
        "text": "Pick a template\n{html}<img src=\"x\" onerror='showFooter(); changeStyles({\ntype: \"template\",\ntemplatename: \"grace\"\n} ); '>{/html}",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "Kashmir",
          "Reflektor",
          "Starman",
          "Caribou",
          "Grace"
        ]
      }
    ],
    "name": "Elige la plantilla:",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none",
          "none",
          "none",
          "none"
        ],
        "includes": [
          "image",
          "image",
          "image",
          "image",
          "image"
        ],
        "images": [
          "files/tp-1.jpg",
          "files/tp-2.jpg",
          "files/tp-3.jpg",
          "files/tp-4.jpg",
          "files/tp-5.jpg"
        ],
        "pile_up": false,
        "dual_buttons": false,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 500,
    "next": {
      "success": "164"
    },
    "left": 3023,
    "function": "__send_message__",
    "id": "162"
  },
  "221": {
    "name": "Pick @logo:image",
    "next": {
      "failed": "180",
      "success": "174"
    },
    "overwrite": true,
    "custom_field": "logo",
    "top": 1154,
    "field": "custom",
    "left": 3868,
    "function": "__get_image__",
    "id": "221"
  },
  "183": {
    "responses": [
      {
        "text": "Pick a color or enter hexadecimal color code (#123ABC)\n{html}<img src=\"x\" onerror=\"hideFooter();addColorPicker();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Escribe el color",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 988,
    "next": {
      "success": "187"
    },
    "left": 4184,
    "function": "__send_message__",
    "id": "183"
  },
  "155": {
    "responses": [
      {
        "text": "Awesome! 🎉",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Ahora te explico que",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 906,
    "next": {
      "success": "226"
    },
    "left": 196,
    "function": "__send_message__",
    "id": "155"
  },
  "163": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 368,
    "next": {
      "back": "158",
      "template": "162",
      "scratch": "172",
      "next": "161",
      "cero": "172",
      "plantillas": "162"
    },
    "left": 5181,
    "function": "__choice__",
    "id": "163"
  },
  "224": {
    "name": "Pick @email",
    "next": {
      "failed": "225",
      "success": "148"
    },
    "features": {
      "hide_textbox": false
    },
    "top": 283,
    "field": "email",
    "left": 826,
    "function": "__email__",
    "id": "224",
    "overwrite": true
  },
  "214": {
    "responses": [
      {
        "text": "Pick a font",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "Droid+Serif",
          "Inconsolata",
          "Montserrat",
          "Open+Sans",
          "Oswald",
          "Raleway",
          "Roboto",
          "Roboto+Slab",
          "Lato"
        ]
      }
    ],
    "name": "Elige una opción",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none",
          "none",
          "none",
          "none",
          "none",
          "none",
          "none",
          "none"
        ],
        "includes": [
          "image",
          "image",
          "image",
          "image",
          "image",
          "image",
          "image",
          "image",
          "image"
        ],
        "images": [
          "http://landbot.io/customers/buildbot/files/botimg/ty-droidserif.png",
          "http://landbot.io/customers/buildbot/files/botimg/ty-inconsolata.png",
          "http://landbot.io/customers/buildbot/files/botimg/ty-montserrat.png",
          "http://landbot.io/customers/buildbot/files/botimg/ty-open.png",
          "http://landbot.io/customers/buildbot/files/botimg/ty-oswald.png",
          "http://landbot.io/customers/buildbot/files/botimg/ty-raleway.png",
          "http://landbot.io/customers/buildbot/files/botimg/ty-roboto.png",
          "http://landbot.io/customers/buildbot/files/botimg/ty-robotoslab.png",
          "http://landbot.io/customers/buildbot/files/botimg/ty-lato.png"
        ],
        "pile_up": false,
        "dual_buttons": false,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 950,
    "next": {
      "success": "216"
    },
    "left": 7539,
    "function": "__send_message__",
    "id": "214"
  },
  "150": {
    "responses": [
      {
        "text": "Interesting! Your *name* is all I need to continue 😌",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Dime tu nombre",
    "features": {
      "textarea": {
        "field": "name"
      },
      "hide_textbox": false
    },
    "top": 572,
    "next": {
      "success": "151"
    },
    "left": 208,
    "function": "__send_message__",
    "id": "150"
  },
  "209": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 840,
    "next": {
      "next": "161",
      "back": "172",
      "fonts": "214",
      "size": "210"
    },
    "left": 7186,
    "function": "__choice__",
    "id": "209"
  },
  "180": {
    "responses": [
      {
        "text": "I'm sorry, something went wrong. Could you try again?",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Error message",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 1240,
    "next": {
      "success": "221"
    },
    "left": 3888,
    "function": "__send_message__",
    "id": "180"
  },
  "149": {
    "name": "Pick @brand_name",
    "next": {
      "success": "150"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "brand_name",
    "top": 456,
    "field": "custom",
    "left": 198,
    "function": "__text__",
    "id": "149",
    "overwrite": true
  },
  "189": {
    "name": "Pick @contrast",
    "next": {
      "success": "218"
    },
    "features": {
      "hide_textbox": false
    },
    "keyword": true,
    "custom_field": "contrast",
    "top": 1118,
    "field": "custom",
    "left": 4673,
    "function": "__text__",
    "id": "189",
    "overwrite": true
  },
  "210": {
    "responses": [
      {
        "text": "Pick a size",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "name": "Elige una opción",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none",
          "none",
          "none",
          "none"
        ],
        "includes": [
          "none",
          "none",
          "none",
          "none",
          "none"
        ],
        "images": [
          "",
          "",
          "",
          "",
          ""
        ],
        "pile_up": true,
        "dual_buttons": false,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 954,
    "next": {
      "success": "211"
    },
    "left": 6864,
    "function": "__send_message__",
    "id": "210"
  },
  "193": {
    "name": "Pick @backgroundtype",
    "next": {
      "success": "197"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "backgroundtype",
    "virtual": true,
    "field": "custom",
    "left": 5199,
    "top": 968,
    "id": "193",
    "overwrite": true,
    "function": "__text__"
  },
  "225": {
    "responses": [
      {
        "text": "Well, I assume you don't want your own Landbot but might feel curious about the customization, I'll let you continue!",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Error message",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 383,
    "next": {
      "success": "148"
    },
    "left": 826,
    "function": "__send_message__",
    "id": "225"
  },
  "216": {
    "name": "Pick @font",
    "next": {
      "success": "213"
    },
    "features": {
      "hide_textbox": false
    },
    "keyword": true,
    "custom_field": "font",
    "top": 1313,
    "field": "custom",
    "left": 7588,
    "function": "__text__",
    "id": "216",
    "overwrite": true
  },
  "195": {
    "name": "Pick @backgroundtype",
    "next": {
      "success": "203"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "backgroundtype",
    "virtual": true,
    "field": "custom",
    "left": 5943,
    "top": 985,
    "id": "195",
    "overwrite": true,
    "function": "__text__"
  },
  "212": {
    "name": "Pick @fontsize",
    "next": {
      "success": "213"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "fontsize",
    "virtual": true,
    "field": "custom",
    "left": 6846,
    "top": 1266,
    "id": "212",
    "overwrite": true,
    "function": "__text__"
  },
  "170": {
    "responses": [
      {
        "text": "Great!",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Perfecto",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 1125,
    "next": {
      "success": "228"
    },
    "left": 2902,
    "function": "__send_message__",
    "id": "170"
  },
  "222": {
    "name": "Pick @backgroundimageurl:image",
    "next": {
      "success": "201"
    },
    "overwrite": true,
    "custom_field": "backgroundimageurl",
    "top": 1249,
    "field": "custom",
    "left": 5608,
    "function": "__get_image__",
    "id": "222"
  },
  "164": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 596,
    "next": {
      "caribou": "168",
      "back": "158",
      "kashmir": "168",
      "grace": "168",
      "starman": "168",
      "next": "161",
      "reflektor": "168"
    },
    "left": 2991,
    "function": "__choice__",
    "id": "164"
  },
  "223": {
    "responses": [
      {
        "text": "I'll send you the password to access the platform so I need a valid one! Try again, please:",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "I'll send you the pa",
    "features": {
      "textarea": {
        "field": "email"
      },
      "hide_textbox": false
    },
    "top": 257,
    "next": {
      "success": "224"
    },
    "left": 621,
    "function": "__send_message__",
    "id": "223"
  },
  "101": {
    "responses": [
      {
        "text": "Let's start with content 🤓\n{html}<img src=\"x\" style=\"display: none\" onerror=\"getStaticBot('files/jsbots/bot-builder-content.json');\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Add some content",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 84,
    "left": 4948,
    "function": "__send_message__",
    "id": "101"
  },
  "182": {
    "name": "Pick selected option",
    "features": {
      "hide_textbox": false
    },
    "top": 843,
    "next": {
      "back": "172",
      "light": "186",
      "accent": "183",
      "next": "161",
      "contrast": "185",
      "dark": "184"
    },
    "left": 4488,
    "function": "__choice__",
    "id": "182"
  },
  "191": {
    "responses": [
      {
        "text": "Choose a background style:\n{html}<img src=\"x\" onerror='showFooter();changeStyles({\ntype:\"background\",\nbackgroundtype:\"@backgroundtype\",\nbackgroundimageurl:\"@backgroundimageurl\",\nvideotemplate:\"@videotemplate\",\nbackgroundcolor:\"@backgroundcolor\",\ngradientfrom:\"@gradientfrom\",\ngradientto:\"@gradientto\"\n});'>{/html}",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "gradient",
          "image",
          "color",
          "video"
        ]
      }
    ],
    "name": "Elige un tipo de fon",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none",
          "none",
          "none"
        ],
        "includes": [
          "image",
          "image",
          "image",
          "image"
        ],
        "images": [
          "files/botimg/bg-gradient.jpg",
          "files/botimg/bg-picture.jpg",
          "files/botimg/bg-colour.jpg",
          "files/botimg/bg-video.jpg"
        ],
        "pile_up": false,
        "dual_buttons": false,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 712,
    "next": {
      "success": "192"
    },
    "left": 5729,
    "function": "__send_message__",
    "id": "191"
  },
  "200": {
    "name": "Pick @gradientto",
    "next": {
      "success": "201"
    },
    "features": {
      "hide_textbox": false
    },
    "custom_field": "gradientto",
    "top": 1304,
    "field": "custom",
    "left": 5208,
    "function": "__text__",
    "id": "200",
    "overwrite": true
  },
  "154": {
    "responses": [
      {
        "text": "Ops, that doesn't look like an email... 😓",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Error message",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 256,
    "next": {
      "success": "223"
    },
    "left": 418,
    "function": "__send_message__",
    "id": "154"
  },
  "160": {
    "responses": [
      {
        "text": "First, do you want to use a template or start from scratch?",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "Pick a template",
          "Start from scratch"
        ]
      }
    ],
    "name": "¿Quieres usar una de",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "picture",
          "paint-brush"
        ],
        "includes": [
          "icon",
          "icon"
        ],
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "dual_buttons": true,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 268,
    "next": {
      "success": "163"
    },
    "left": 5178,
    "function": "__send_message__",
    "id": "160"
  },
  "178": {
    "responses": [
      {
        "text": "Upload your icon\n{html}<img src=\"x\" onerror=\"showBtnUpload();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Sube tu icono",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 1068,
    "next": {
      "success": "221"
    },
    "left": 3893,
    "function": "__send_message__",
    "id": "178"
  },
  "187": {
    "name": "Pick @accent",
    "next": {
      "success": "218"
    },
    "features": {
      "hide_textbox": false
    },
    "keyword": true,
    "custom_field": "accent",
    "top": 1103,
    "field": "custom",
    "left": 4188,
    "function": "__text__",
    "id": "187",
    "overwrite": true
  },
  "151": {
    "name": "Pick @name",
    "next": {
      "success": "156"
    },
    "features": {
      "hide_textbox": false
    },
    "top": 684,
    "field": "name",
    "left": 220,
    "function": "__text__",
    "id": "151",
    "overwrite": true
  },
  "205": {
    "responses": [
      {
        "text": "Choose a video from the ones below",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "video_1",
          "video_2",
          "video_3",
          "video_4"
        ]
      }
    ],
    "name": "Elige un vídeo",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "none",
          "none",
          "none",
          "none"
        ],
        "includes": [
          "none",
          "none",
          "none",
          "none"
        ],
        "images": [
          "",
          "",
          "",
          ""
        ],
        "pile_up": true,
        "dual_buttons": false,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 1066,
    "next": {
      "success": "207"
    },
    "left": 6313,
    "function": "__send_message__",
    "id": "205"
  },
  "147": {
    "responses": [
      {
        "text": "Aquí te doy la bienvenida",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Aquí te doy la bienv",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 73,
    "next": {
      "success": "152"
    },
    "left": 200,
    "function": "__send_message__",
    "id": "147"
  },
  "218": {
    "responses": [
      {
        "text": "There you go!\n{html}<img src=\"@light\" onerror='removeColorPicker();showFooter(); changeStyles({\ntype: \"colours\",\nlight: \"@light\",\naccent: \"@accent\",\ndark: \"@dark\",\ncontrast: \"@contrast\"\n} )'>{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Ok",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 1258,
    "next": {
      "success": "181"
    },
    "left": 4533,
    "function": "__send_message__",
    "id": "218"
  },
  "227": {
    "responses": [
      {
        "text": "Let's release your inner artist 🎨",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Let's release your i",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": true
    },
    "top": 199,
    "next": {
      "success": "160"
    },
    "left": 5236,
    "function": "__send_message__",
    "id": "227"
  },
  "208": {
    "responses": [
      {
        "text": "Do you want to change the font or its size?\n{html}<img src=\"x\" onerror='\nchangeStyles({\ntype: \"font\",\nfont: \"@font\",\nfontsize: \"@fontsize\"\n} );\n'>{/html}",
        "entity": "button",
        "order": 0,
        "choice_text": "*Type the number of the option you are interested in",
        "buttons": [
          "Fonts",
          "Size"
        ]
      }
    ],
    "name": "Elige una opción",
    "features": {
      "textarea": {
        "field": false
      },
      "buttons": {
        "icons": [
          "document",
          "crop-tool"
        ],
        "includes": [
          "icon",
          "icon"
        ],
        "images": [
          "",
          ""
        ],
        "pile_up": false,
        "dual_buttons": true,
        "multi": false
      },
      "hide_textbox": true
    },
    "top": 693,
    "next": {
      "success": "209"
    },
    "left": 7188,
    "function": "__send_message__",
    "id": "208"
  },
  "203": {
    "responses": [
      {
        "text": "Pick a color or enter hexadecimal color code (#123ABC)\n{html}<img src=\"x\" onerror=\"addColorPicker();hideFooter();\">{/html}",
        "order": 0,
        "entity": "text"
      }
    ],
    "name": "Elige el color",
    "features": {
      "textarea": {
        "field": false
      },
      "hide_textbox": false
    },
    "top": 1103,
    "next": {
      "success": "204"
    },
    "left": 5971,
    "function": "__send_message__",
    "id": "203"
  }
}
