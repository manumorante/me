/**
 * Instafeed
 */
polaroids_feed = new Instafeed({
  target: 'polaroids',      // ID element in html
  get: 'tagged',         // get:  user | tagged
  tagName: 'nexdoormodel',
  userId: 2421015,          // id user register on instafeedjs.com
  clientId: '63ed1aa8d96145a5b4e0c0919967aa7c',
  accessToken: '2421015.467ede5.e755965e4bdc46de9e68c033c062974e',
  limit: 60,
  sortBy: 'most-liked',
  resolution: 'standard_resolution',
  template: '<div class="polaroid"><a class="close" href="#">Close</a><div class="caption"><p>{{caption}}</p></div><div class="image"><img src="{{image}}" /></div></div>',

  after: function () {
    // Pagination: disable button if no more results to load
    if (!this.hasNext()) {
      loadButton.setAttribute('disabled', 'disabled');
    }
  },

  before: function () {
    onBefore();
  },
  success: function (data) {
    onSuccess(data);
  }
});

// Polaroid click
$(document).on('click', '#polaroids .image', function () {
  $('#polaroids .polaroid').removeClass('active');
  $(this).closest('.polaroid').addClass('active');
  watching(true);
});

// Close button
$(document).on('click', '#polaroids .close', function () {
  watching(false);
});

// Close using modal
$(document).on('click', '#modal', function () {
  watching(false);
});