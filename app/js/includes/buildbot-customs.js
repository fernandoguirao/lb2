// ===========================
// BUILDBOT COMPILAR VARIABLES
// ===========================

var lessVars = {};
var videourl = "";

changeStyles = function(obj){

  console.log(obj);

  if(obj['type'] == "template") {

    if(obj['templatename'] !== '@template') {

        if(obj['templatename'] === 'Kashmir') {
        $('body').addClass('js-novideo');
        lessVars["font"] = "Lato";
        lessVars["font-url"] = "https://fonts.googleapis.com/css?family=";
        lessVars["embfonts"] = false;
        lessVars["background-type"] = "\'gradient\'";
        lessVars["accent"] = "#de4561";
        lessVars["contrast"] = "#00b2a9";
        lessVars["gradientto"] = "#55e2ba";
        lessVars["gradientfrom"] = "#00b2a9";
        lessVars["fontsize"] = "16px";
      }
      if(obj['templatename'] === 'Reflektor') {
        $('body').addClass('js-novideo');
        lessVars["font"] = "Raleway";
        lessVars["font-url"] = "https://fonts.googleapis.com/css?family=";
        lessVars["embfonts"] = false;
        lessVars["background-type"] = "\'gradient\'";
        lessVars["accent"] = "#F11952";
        lessVars["contrast"] = "#F11952";
        lessVars["gradientto"] = "#F11952";
        lessVars["gradientfrom"] = "#FF575B";
        lessVars["fontsize"] = "16px";
      }
      if(obj['templatename'] === 'Starman') {
        $('body').addClass('js-novideo');
        lessVars["font"] = "Montserrat";
        lessVars["font-url"] = "https://fonts.googleapis.com/css?family=";
        lessVars["embfonts"] = false;
        lessVars["background-type"] = "\'gradient\'";
        lessVars["accent"] = "#d35f8f";
        lessVars["contrast"] = "#464fac";
        lessVars["gradientto"] = "#ffe199";
        lessVars["gradientfrom"] = "#ffad59";
        lessVars["fontsize"] = "14px";
      }
      if(obj['templatename'] === 'Caribou') {
        lessVars["background-type"] = "\'gradient\'";
        $('body').addClass('js-novideo');
        lessVars["font"] = "Open+Sans";
        lessVars["font-url"] = "https://fonts.googleapis.com/css?family=";
        lessVars["embfonts"] = false;
        lessVars["accent"] = "#f72b65";
        lessVars["contrast"] = "#f72b65";
        lessVars["fontsize"] = "16px";
      }
      if(obj['templatename'] === 'Grace') {
        lessVars["background-type"] = "\'video\'";
        lessVars["light"] = "white";
        lessVars["dark"] = "black";
        lessVars["accent"] = "#f72b65";
        $('body').removeClass('js-novideo');
        lessVars["video-texture"] = 'color';
        lessVars["background-color"] = "rgba(0,0,0,.3)";
        videourl = "https://storage.googleapis.com/static.yexir.com/landbot/video/video_1";
        var videobg = $('video');
        videobg.html('<source src="'+videourl+'.mp4" type="video/mp4"></source><source src="'+videourl+'.webm" type="video/webm"></source>' );
        videobg.attr('poster',videourl+'.jpg');
        videobg[0].load();
        videobg[0].play();
      }

    }

  }
  if(obj['type'] == 'logo') {

    if(obj['logo'] !== '@logo') {
      $('body').addClass('js-logo');
      $('.brand-logo').attr('src',obj['logo']);
      $('body').append('<style>.js-logo #hu-container-widget[data-platform="landbot"] .hu-js-open .hu-messenger-body .hu-messenger-message.hu-messenger-message-brand[data-samurai^="-"] .hu-avatar:before { background-image: url('+obj['logo']+')!important; }</style>');
    }
    if(obj['tagline'] !== '@tagline') {
      // lessVars["tagline"] = obj['tagline'];
      $('.more-leads').html(obj['tagline']);
    }
    if(obj['brandName'] !== '@brandname') {
      // lessVars["brandName"] = obj['brandName'];
      $('.brand-name').html(obj['brandName']);
    }

  }
  if(obj['type'] == 'colours') {

    if(obj['light'] !== '@light') {
      lessVars["light"] = obj['light'];
    }
    if(obj['accent'] !== '@accent') {
      lessVars["accent"] = obj['accent'];
    }
    if(obj['dark'] !== '@dark') {
      lessVars["dark"] = obj['dark'];
    }
    if(obj['contrast'] !== '@contrast') {
      lessVars["contrast"] = obj['contrast'];
    }

  }

  if(obj['type'] == 'background') {

    if(obj['backgroundtype'] !== '@backgroundtype') {

      lessVars["background-type"] = "\'" + obj['backgroundtype'] + "\'";

      // GRAD / OK
      if(obj['backgroundtype'] === 'gradient') {
        $('body').addClass('js-novideo');
        lessVars["gradient-from"] = obj['gradientfrom'];
        lessVars["gradient-to"] = obj['gradientto'];
      }

      // VIDEO OK
      if(obj['backgroundtype'] === 'video') {
        if(obj['videotemplate'] !== '@videotemplate') {
          $('body').removeClass('js-novideo');
          lessVars["video-texture"] = '\'color\'';
          lessVars["background-color"] = "rgba(0,0,0,.4)";
          videourl = "https://storage.googleapis.com/static.yexir.com/landbot/video/"+obj['videotemplate'];
          var videobg = $('video');
          videobg.html('<source src="'+videourl+'.mp4" type="video/mp4"></source><source src="'+videourl+'.webm" type="video/webm"></source>' );
          videobg.attr('poster',videourl+'.jpg');
          videobg[0].load();
          videobg[0].play();
        }
      }

      // IMG / PROGRESS
      if(obj['backgroundtype'] === 'image') {
        $('body').addClass('js-novideo');
        if(obj['backgroundimageurl'] !== '@backgroundimageurl') {
          lessVars["background-image-url"] = "\'" + obj['backgroundimageurl'] + "\'";
          lessVars["background-color"] = "rgba(0,0,0,.4)";
        }
      }

      // COLOR / OK
      if(obj['backgroundtype'] === 'color') {
        $('body').addClass('js-novideo');
        if(obj['backgroundcolor'] !== '@backgroundcolor') {
          lessVars["background-color"] = obj['backgroundcolor'];
          lessVars["backgroundcolor"] = obj['backgroundcolor'];
          console.log(obj['backgroundcolor']);
        }
      }

    }

  }

  if(obj['type'] == 'font') {


    if(obj['font'] !== '@font') {
      lessVars["font"] = "\'" + obj['font'] + "\'";
      lessVars["externalfonturl"] = "\'" + "https://fonts.googleapis.com/css?family="+ obj['font']+"\'";
      lessVars["embfonts"] = "false";
    }

    // SIZE OK
    if(obj['fontsize'] !== '@fontsize') {
      if(obj['fontsize'] === 'XS') {
        lessVars["font-size"] = "11px";
      }
      if(obj['fontsize'] === 'S') {
        lessVars["font-size"] = "12px";
      }
      if(obj['fontsize'] === 'M') {
        lessVars["font-size"] = "14px";
      }
      if(obj['fontsize'] === 'L') {
        lessVars["font-size"] = "16px";
      }
      if(obj['fontsize'] === 'XL') {
        lessVars["font-size"] = "19px";
      }
    }

  }

  console.log('less');
  console.log("less.modifyVars(" + JSON.stringify(lessVars) + ")");
  less.modifyVars(lessVars);

}


// ==============
// MENÚ BACK NEXT
// ==============

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("back-btn").onclick = function(){
     fakeMessage('back');
   }
   document.getElementById("publish-btn").onclick = function(){
      fakeMessage('next');
    }
});

var showFooter = function(){
  $('body').addClass('show-footer');
}

var changeFooter = function(){
  $('.foot-container .description b').html("EDITING BOT");
  $('.foot-container .back-btn').remove();
  $('.foot-container .publish-btn').attr('id','publish-btn2');
  $('<div class="back-btn" style="margin-right: 7px;" id="preview-btn"><span style="margin-left: 0!important;">Preview</span></div>').insertBefore('.foot-container .publish-btn');
  document.getElementById("publish-btn2").onclick = function(){
     fakeMessage('#publish');
  }
  document.getElementById("preview-btn").onclick = function(){
    fakeMessage('#preview');
  }
}

var previewFooter = function(){
  $('.foot-container .description b').html("PREVIEWING BOT");
  $('<div class="back-btn" style="margin-right: 7px;" id="preview-btn2"><span style="margin-left: 0!important;">End Preview</span></div>').insertBefore('.foot-container .publish-btn');
  $('#preview-btn').hide();
  document.getElementById("preview-btn2").onclick = function(){
     fakeMessage('#finish');
  }
}

var endPreviewFooter = function(){
  $('.foot-container .description b').html("EDITING BOT");
  $('#preview-btn').show();
  $('#preview-btn2').remove();
}

var fadeBtn = function(){
  $('body').addClass('fade-btn');
}

var fadeOutBtn = function(){
  $('body').removeClass('fade-btn');
}

var hideFooter = function(){
  $('body').removeClass('show-footer');
}


// ============
// COLOR PICKER
// ============

var flagColor = 0;
function addColorPicker(){
  var colors = ['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#f1c40f','#e67e22','#e74c3c','#ecf0f1','#bdc3c7','#95a5a6'];
  if (flagColor < 1){
    var colorsHTML = "";
    $.each(colors, function(i){
      colorsHTML += '<li style="background-color:'+colors[i]+';" onclick="fakeMessage(\''+colors[i]+'\')"></li>';
    });
    var colorPicker = '<div class="color-picker"><ul>'+ colorsHTML +'</ul></div>';
    $('.hu-footer-state').prepend(colorPicker);
    flagColor = 1;
  }
}

function removeColorPicker(){
  $('.color-picker').remove();
  flagColor = 0;
}
