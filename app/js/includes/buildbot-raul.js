

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


// BTN UPLOAD
function showBtnUpload() {
  $('.hu-composer-file-button').addClass('btn-upload');
}

function hideBtnUpload() {
  $('.btn-upload').removeClass('btn-upload');
}
