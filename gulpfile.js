var gulp          = require('gulp'),
    watch         = require('gulp-watch'),
    concat        = require('gulp-concat'),
    connect       = require('gulp-connect'),
    compass       = require('gulp-compass'),
    uglify        = require('gulp-uglify'),
    del           = require('del');



// Config
var build_dir         = 'build',
    assets            = 'source/assets',
    css_dir           = build_dir +'/assets',
    images_dir        = assets +'/images',
    sass_dir          = assets +'/sass',
    scss_files        = sass_dir +'/**/*.scss',
    js_dir            = assets +'/js';


// HTML
gulp.task('html', function() {
  gulp.src(['source/**/*.html']).pipe(gulp.dest(build_dir));
});


// Images
gulp.task('images', function() {
  gulp.src(images_dir +'/*.*').pipe(gulp.dest(build_dir +'/assets'));
});


// Fonts
gulp.task('fonts', function() {
  gulp.src(assets +'/fonts/*.*').pipe(gulp.dest(build_dir +'/assets'));
});


// CSS
gulp.task('styles', function () {
  gulp.src(sass_dir +'/application.scss')
    .pipe(compass({ config_file: 'source/config/compass.rb', sass: sass_dir, css: css_dir }));
});


//  Javascript
gulp.task('scripts', function () {
  gulp.src([
    js_dir +'/lib/jquery.min.js',
    js_dir +'/lib/angular.min.js',
    js_dir +'/lib/angular-route.min.js',
    js_dir +'/lib/bootstrap.min.js',
    js_dir +'/lib/instafeed.js',
    js_dir +'/app.js',
    js_dir +'/controllers/*.js',

    js_dir +'/ui/instafeed.js',
    js_dir +'/ui/modal.js',
    js_dir +'/ui/loading.js',
    js_dir +'/ui/polaroids.js'
  ])
    .pipe(concat('application.js'))
    //.pipe(uglify({ mangle: false }))
    .pipe(gulp.dest(build_dir+ '/assets'));

  // Sourcempas
  gulp.src(js_dir +'/lib/*.js.map').pipe(gulp.dest(build_dir+ '/assets'));
});


// Watch
gulp.task('watch', function () {
  gulp.watch( scss_files, ['styles'] );
  gulp.watch( images_dir +'/*.*', ['images'] );
  gulp.watch( js_dir +'/**/*.*', ['scripts'] );
  gulp.watch( 'source/*.html', ['html'] );
  gulp.watch( 'source/views/*.html', ['html'] );
});


// Server
gulp.task('connect', function () {
  connect.server({ root: 'build', port: 3000 });
});


// Clean
gulp.task('clean', function() { del(['build']) });


// Build
gulp.task('build', ['clean', 'html', 'styles', 'scripts', 'images', 'fonts']);


// Default
gulp.task('default', ['build', 'connect', 'watch']);