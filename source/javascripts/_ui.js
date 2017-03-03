import $ from 'jquery';

var $cols = $('.wrap .col'),
  event = (document.ontouchstart === null) ? 'touchend' : 'click';

$cols.each(function( i, v ) {
  var $col = $(v);
  $col.on(event, function(){
    if($col.hasClass('open')) {
      $col.removeClass('open').addClass('close');
      $cols.removeClass('close');
    } else {
      $cols.removeClass('open').addClass('close');
      $col.addClass('open');
    }
  });
});
