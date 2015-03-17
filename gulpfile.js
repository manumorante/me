var _             = require('gulp'),
  watch           = require('gulp-watch'),
  concat          = require('gulp-concat'),
  connect         = require('gulp-connect'),
  compass         = require('gulp-compass'),
  uglify          = require('gulp-uglify'),
  del             = require('del'),
  include         = require('gulp-include'),

  c = {
    source: {
      dir:          'source',
      assets:       'source/assets',
      js:           'source/assets/js',
      sass:         'source/assets/sass',
      images:       'source/assets/images',
      fonts:        'source/assets/fonts'
    },
    build: {
      dir:          'build',
      assets:       'build/assets',
      js:           'build/assets/js',
      css:          'build/assets/css',
      images:       'build/assets/images',
      fonts:        'build/assets/fonts'
    }
  };

// HTML
_.task('html', function(){
  _.src(c.source.dir +'/**/*.html').pipe(_.dest(c.build.dir));
});


// Images
_.task('images', function(){
  _.src(c.source.images + '/*.*').pipe(_.dest(c.build.images));
});


// Fonts
_.task('fonts', function(){
  _.src(c.source.fonts +'/**/*.*').pipe(_.dest(c.build.fonts));
});


// CSS
_.task('styles', function(){
  _.src(c.source.sass +'/application.scss')
    .pipe(compass({config_file: c.source.dir +'/config/compass.rb', sass: c.source.sass, css: c.build.css}));
});


//  Javascript
_.task('scripts', function(){
  _.src(c.source.js + '/application.js')
    .pipe( include() )
    .pipe( uglify({ mangle: false }) )
    .pipe( _.dest(c.build.js) );

  // Sourcempas
  _.src(c.source.js +'/lib/*.js.map').pipe(_.dest(c.build.js));
});


// Watch
_.task('watch', function(){
  _.watch(c.source.sass     +'/**/*.scss',    ['styles']);
  _.watch(c.source.images   +'/*.*',          ['images']);
  _.watch(c.source.js       +'/**/*.*',       ['scripts']);
  _.watch(c.source.dir      +'/**/*.html',    ['html']);
});


// Server
_.task('connect', function(){
  connect.server({root: c.build.dir, port: 3000});
});


// Build w/ clean
_.task('build:clean', function(){
  del( c.build.dir, function(err){
    if(err){ throw err;
    } else {
      _.start('build');
    }
  })
});


// Build
_.task('build', ['html', 'styles', 'scripts', 'images', 'fonts']);


// Default
_.task('default', ['build:clean', 'connect', 'watch']);