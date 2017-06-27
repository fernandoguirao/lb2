// GLOBAL JS
function changeCaption(data){
  var $container = $('#hu-webchat-messages .hu-messenger-message:last-child');
  if ($container.length > 0) {
    var $buttons = $container.find('.hu-btn-group-vertical .hu-btn span');
    $buttons.each(function(index, btn){
      var __key = $(btn).text().toLowerCase();
      if ( data[__key] ) {
        $(btn).text( data[__key] );
      }
    })
  }
}
