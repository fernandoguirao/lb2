// ===========================
// BUILDBOT COMPILAR VARIABLES
// ===========================

var lessVars = {};
var videourl = "";

changeStyles = function(obj){

  console.log(obj);

  // OK
  if(obj['type'] == "template") {

    if(obj['templatename'] !== '') {

      // OK
      if(obj['templatename'] === 'Kashmir') {
        $('body').addClass('js-novideo');
        $('body').addClass('js-template');
        $('body').removeClass('js-template2');
        lessVars["font"] = "Lato";
        lessVars["externalfonturl"] = "\'" + "https://fonts.googleapis.com/css?family="+ lessVars['font']+"\'";
        lessVars["embfonts"] = false;
        lessVars["background-type"] = "\'gradient\'";
        lessVars["accent"] = "#de4561";
        lessVars["contrast"] = "#00b2a9";
        lessVars["gradient-to"] = "#55e2ba";
        lessVars["gradient-from"] = "#00b2a9";
        lessVars["font-size"] = "16px";
      }
      // OK
      if(obj['templatename'] === 'Reflektor') {
        $('body').addClass('js-novideo');
        $('body').addClass('js-template');
        $('body').removeClass('js-template2');
        lessVars["font"] = "Lato";
        lessVars["externalfonturl"] = "\'" + "https://fonts.googleapis.com/css?family="+ lessVars['font']+"\'";
        lessVars["embfonts"] = false;
        lessVars["background-type"] = "\'gradient\'";
        lessVars["accent"] = "#F11952";
        lessVars["dark"] = "#34495e";
        lessVars["contrast"] = "white";
        lessVars["gradient-to"] = "#F11952";
        lessVars["gradient-from"] = "#FF575B";
        lessVars["font-size"] = "16px";
      }
      // OK
      if(obj['templatename'] === 'Starman') {
        $('body').addClass('js-novideo');
        $('body').removeClass('js-template');
        $('body').addClass('js-template2');
        lessVars["font"] = "Montserrat";
        lessVars["externalfonturl"] = "\'" + "https://fonts.googleapis.com/css?family="+ lessVars['font']+"\'";
        lessVars["embfonts"] = false;
        lessVars["background-type"] = "\'gradient\'";
        lessVars["accent"] = "#d35f8f";
        lessVars["contrast"] = "#464fac";
        lessVars["gradient-to"] = "#ffe199";
        lessVars["gradient-from"] = "#ffad59";
        lessVars["font-size"] = "14px";
      }
      // OK
      if(obj['templatename'] === 'Caribou') {
        $('body').addClass('js-novideo');
        $('body').addClass('js-template');
        $('body').removeClass('js-template2');
        lessVars["background-type"] = "\'color\'";
        lessVars["background-color"] = "#34495e";
        lessVars["font"] = "Inconsolata";
        lessVars["externalfonturl"] = "\'" + "https://fonts.googleapis.com/css?family="+ "Inconsolata"+"\'";
        lessVars["embfonts"] = false;
        lessVars["light"] = "#ecf0f1";
        lessVars["accent"] = "#213446";
        lessVars["contrast"] = "#ecf0f1";
        lessVars["font-size"] = "16px";
        lessVars["dark"] = "#213446";
      }
      // OK
      if(obj['templatename'] === 'Grace') {
        $('body').removeClass('js-template2');
        $('body').removeClass('js-template');
        $('body').removeClass('js-novideo');
        lessVars["embfonts"] = true;
        lessVars["font"] = "Gotham Rounded";
        lessVars["font-size"] = "15px";
        lessVars["background-type"] = "\'video\'";
        lessVars["light"] = "white";
        lessVars["dark"] = "black";
        lessVars["accent"] = "#f72b65";
        lessVars["contrast"] = "white";
        lessVars["video-texture"] = '\'color\'';
        lessVars["background-color"] = "rgba(0,0,0,.4)";
        videourl = "https://storage.googleapis.com/static.yexir.com/landbot/video/video_1";
        var videobg = $('video');
        videobg.html('<source src="'+videourl+'.mp4" type="video/mp4"></source><source src="'+videourl+'.webm" type="video/webm"></source>' );
        videobg.attr('poster',videourl+'.jpg');
        videobg[0].load();
        videobg[0].play();
      }

    }

  }

  // LOGO OK
  if(obj['type'] == 'logo') {

    // Logo img OK
    if(obj['logo'] !== '') {
      $('body').addClass('js-logo');
      $('.bracd-logo').attr('src',obj['logo']);
      $('body').append('<style>.js-logo #hu-container-widget[data-platform="landbot"] .hu-js-open .hu-messenger-body .hu-messenger-message.hu-messenger-message-brand[data-samurai^="-"] .hu-avatar:before { background-image: url('+obj['logo']+')!important; }</style>');
    }

    // Tagline OK
    if(obj['tagline'] !== '') {
      $('.more-leads').html(obj['tagline']);
    }

    // Brandname OK
    if(obj['brandName'] !== '') {
      $('.brand-name').html(obj['brandName']);
    }

  }

  // COLOURS OK
  if(obj['type'] == 'colours') {

    if(obj['light'] !== '') {
      lessVars["white"] = obj['light'];
    }
    if(obj['accent'] !== '') {
      lessVars["accent"] = obj['accent'];
    }
    if(obj['dark'] !== '') {
      lessVars["dark"] = obj['dark'];
    }
    if(obj['contrast'] !== '') {
      lessVars["contrast"] = obj['contrast'];
    }

  }

  // BG OK
  if(obj['type'] == 'background') {

    if(obj['backgroundtype'] !== '') {

      lessVars["background-type"] = "\'" + obj['backgroundtype'] + "\'";

      // GRAD / OK
      if(obj['backgroundtype'] === 'gradient') {
        $('body').addClass('js-novideo');
        $('body').removeClass('js-image');
        lessVars["gradient-from"] = obj['gradientfrom'];
        lessVars["gradient-to"] = obj['gradientto'];
      }

      // VIDEO OK
      if(obj['backgroundtype'] === 'video') {
        $('body').removeClass('js-novideo');
        $('body').removeClass('js-image');
        lessVars["video-texture"] = '\'color\'';
        lessVars["background-color"] = "rgba(0,0,0,.4)";
        videourl = "https://storage.googleapis.com/static.yexir.com/landbot/video/"+obj['videotemplate'];
        var videobg = $('video');
        videobg.html('<source src="'+videourl+'.mp4" type="video/mp4"></source><source src="'+videourl+'.webm" type="video/webm"></source>' );
        videobg.attr('poster',videourl+'.jpg');
        videobg[0].load();
        videobg[0].play();
      }

      // IMG / OK
      if(obj['backgroundtype'] === 'image') {
        $('body').addClass('js-novideo');
        $('body').addClass('js-image');
        lessVars["background-image-url"] = "\'" + obj['backgroundimageurl'] + "\'";
        lessVars["background-color"] = "rgba(0,0,0,.4)";
      }

      // COLOR / OK
      if(obj['backgroundtype'] === 'color') {
        $('body').addClass('js-novideo');
        $('body').removeClass('js-image');
        lessVars["background-color"] = obj['backgroundcolor'];
        lessVars["backgroundcolor"] = obj['backgroundcolor'];
        lessVars["contrast"] = "white";
      }

    }

  }

  // FOnT OK
  if(obj['type'] == 'font') {

    // FAMILY OK
    if(obj['font'] !== '') {
      lessVars["font"] = "\'" + obj['font'].replace(/\+/g,' ') + "\'";
      lessVars["externalfonturl"] = "\'" + "https://fonts.googleapis.com/css?family="+ obj['font']+"\'";
      lessVars["embfonts"] = "false";
    }

    // SIZE OK
    if(obj['fontsize'] !== '') {
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


// BT UPLOAD
function showBtnUpload() {
  $('.hu-composer-file-button').addClass('btn-upload');
}

function hideBtnUpload() {
  $('.btn-upload').removeClass('btn-upload');
}
