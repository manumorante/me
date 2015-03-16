/**
 * Watching
 * @param state
 */
var watching = function(state){
  if(state) {
    $body.addClass('watching');
    modal(true);
  } else {
    $body.removeClass('watching');
    modal(false);
    $('.polaroid', $polaroids).removeClass('active');
  }
};


/**
 * Before
 */
var onBefore = function(){
  loading(true);
};

/**
 * Success
 * @param data
 */
var onSuccess = function(data){
  loading(false);
};