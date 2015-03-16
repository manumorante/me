/**
 * Loading
 * @param state
 */
var loading = function(state){
    if(state){
    $body.addClass('loading');
    modal(true);

  } else {
    $body.removeClass('loading');
    modal(false);
  }
};