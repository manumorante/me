/**
 * Modal window
 * @param state
 */
var modal = function(state){
  if(state){
    $body.addClass('modaling');

  } else {
    $body.removeClass('modaling');
  }
};