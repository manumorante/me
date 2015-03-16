/**
 * Modal window
 * @param state
 */
var modal = function(state){
  if(state){
    $body.addClass('modal');

  } else {
    $body.removeClass('modal');
  }
};