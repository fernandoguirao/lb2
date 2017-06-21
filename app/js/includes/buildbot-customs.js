var lessVars = {};
var videourl = "";

changeStyles = function(obj){
  console.log(obj);

  if(obj['type'] == "template") {

  }
  if(obj['type'] == 'logo') {

    if(obj['props']['logo'] !== '@logo') {
      // lessVars["logo"] = obj['props']['logo'];
      $('body').addClass('js-logo');
      $('.brand-logo').attr('src',obj['props']['logo']);
      $('body').append('<style>.js-logo #hu-container-widget[data-platform="landbot"] .hu-js-open .hu-messenger-body .hu-messenger-message.hu-messenger-message-brand[data-samurai^="-"] .hu-avatar:before { background-image: url('+obj['props']['logo']+')!important; }</style>');
    }
    if(obj['props']['tagline'] !== '@tagline') {
      // lessVars["tagline"] = obj['props']['tagline'];
      $('.more-leads').html(obj['props']['tagline']);
    }
    if(obj['props']['brandName'] !== '@brandname') {
      // lessVars["brandName"] = obj['props']['brandName'];
      $('.brand-name').html(obj['props']['brandName']);
    }

  }
  if(obj['type'] == 'colours') {

    if(obj['props']['light'] !== '@light') {
      lessVars["light"] = obj['props']['light'];
    }
    if(obj['props']['accent'] !== '@accent') {
      lessVars["accent"] = obj['props']['accent'];
    }
    if(obj['props']['dark'] !== '@dark') {
      lessVars["dark"] = obj['props']['dark'];
    }
    if(obj['props']['contrast'] !== '@contrast') {
      lessVars["contrast"] = obj['props']['contrast'];
    }

  }

  if(obj['type'] == 'background') {

    if(obj['props']['type'] !== '@backgroundtype') {

      lessVars["background-type"] = obj['props']['backgroundtype'];

      if(obj['props']['type'] === 'gradient') {
        $('body').addClass('js-novideo');
        lessVars["gradient-from"] = obj['props']['gradientfrom'];
        lessVars["gradient-to"] = obj['props']['gradientto'];
      }

      if(obj['props']['type'] === 'video') {

        $('body').removeClass('js-novideo');
        lessVars["video-texture"] = 'color';
        lessVars["background-color"] = "rgba(0,0,0,.3)";

        if(obj['props']['videotemplate'] === 'video_1') {
          videourl = "https://storage.googleapis.com/static.yexir.com/landbot/video/video";
        }
        if(obj['props']['videotemplate'] === 'video_2') {
          videourl = "https://storage.googleapis.com/static.yexir.com/landbot/video/video02";
        }
        if(obj['props']['videotemplate'] === 'video_3') {
          videourl = "https://storage.googleapis.com/static.yexir.com/landbot/video/video03";
        }

        var videobg = $('video');
        videobg.html('<source src="'+videourl+'.mp4" type="video/mp4"></source><source src="'+videourl+'.webm" type="video/webm"></source>' );
        videobg.attr('poster',videourl+'.jpg');
        videobg[0].load();
        videobg[0].play();
      }

      if(obj['props']['type'] === 'image') {
        $('body').addClass('js-novideo');
        lessVars["background-image-url"] = obj['props']['backgroundimageurl'];
        lessVars["background-color"] = "rgba(0,0,0,.3)";
      }

      if(obj['props']['type'] === 'color') {
        $('body').addClass('js-novideo');
        lessVars["background-color"] = obj['props']['backgroundcolor'];
      }

    }

  }
  if(obj['type'] == 'font') {

    if(obj['props']['font'] !== '@font') {
      lessVars["font"] = obj['props']['font'];
      lessVars["font-url"] = "https://fonts.googleapis.com/css?family=";
      lessVars["embfonts"] = false;
      // console.log(lessVars);
    }
    if(obj['props']['fontsize'] !== '@fontsize') {
      if(obj['props']['fontsize'] === 'XS') {
        lessVars["font-size"] = "11px";
      }
      if(obj['props']['fontsize'] === 'S') {
        lessVars["font-size"] = "12px";
      }
      if(obj['props']['fontsize'] === 'M') {
        lessVars["font-size"] = "14px";
      }
      if(obj['props']['fontsize'] === 'L') {
        lessVars["font-size"] = "16px";
      }
      if(obj['props']['fontsize'] === 'XL') {
        lessVars["font-size"] = "19px";
      }
    }

  }

  less.modifyVars(lessVars);

}

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

var fadeBtn = function(){
  $('body').addClass('fade-btn');
}

var fadeOutBtn = function(){
  $('body').removeClass('fade-btn');
}

var hideFooter = function(){
  $('body').removeClass('show-footer');
}
