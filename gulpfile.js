/**
 * Dependencies
 */
var gulp          = require('gulp'),
    watch         = require('gulp-watch'),
    concat        = require('gulp-concat'),
    connect       = require('gulp-connect'),
    compass       = require('gulp-compass'),
    uglify        = require('gulp-uglify'),
    del           = require('del'),
    runSequence   = require('run-sequence');



/**
 * CONFIG
 * Configuration vars
 */
var build_dir         = 'build',
    assets            = 'source/assets',
    css_dir           = build_dir +'/assets',
    images_dir        = assets +'/images',
    sass_dir          = assets +'/sass',
    scss_files        = sass_dir +'/**/*.scss',
    js_dir            = assets +'/js';


/**
 * HTML files
 */
gulp.task('html', function() {
  gulp.src(['source/*.html'])
    .pipe(gulp.dest(build_dir));

  gulp.src(['source/views/*.html'])
    .pipe(gulp.dest(build_dir +'/views'));
});


/**
 * Images
 */
gulp.task('images', function() {
  gulp.src([images_dir +'/*.jpg', images_dir +'/*.png'])
    .pipe(gulp.dest(build_dir +'/assets'));
});


/**
 * Fonts
 */
gulp.task('fonts', function() {
  gulp.src([assets +'/fonts/*.*'])
    .pipe(gulp.dest(build_dir +'/assets'));
});


/**
 * CSS
 * - Compile and compress global styles using Compass.
 * - Copy result 'global.css' file within each folder slide.
 */
gulp.task('styles', function () {
  gulp.src(sass_dir +'/application.scss')
    .pipe(compass({ config_file: 'source/config/compass.rb', sass: sass_dir, css: css_dir }));

  gulp.src(['node_modules/font-awesome/css/font-awesome.css.map'])
    .pipe(gulp.dest(build_dir +'/assets'));
});


/**
* Javascripts
* - Concat JS files in specific order.
* - Copy result 'global.js' file within each folder slide.
* - Define SLIDES_TOTAL counting slides.
*/
gulp.task('scripts', function () {
  gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/angular/angular.min.js',
    'node_modules/angular-route/angular-route.min.js',
    js_dir +'/lib/bootstrap.min.js',
    js_dir +'/lib/instafeed.js',
    js_dir +'/ui/app.js',
    js_dir +'/controllers/*.js',

    js_dir +'/ui/instafeed.js',
    js_dir +'/ui/modal.js',
    js_dir +'/ui/loading.js',
    js_dir +'/ui/polaroids.js'
  ])
    .pipe(concat('application.js'))
    //.pipe(uglify({ mangle: false }))
    .pipe(gulp.dest(build_dir+ '/assets'));



  // Modernizr & RespondJS
  gulp.src([
    'node_modules/gulp-modernizr/build/modernizr-custom.js',
    'node_modules/respond.js/dest/respond.min.js'
  ])
    .pipe(concat('modernizr-respond.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest(build_dir+ '/assets'));



  // Sourcempas
  gulp.src([
    'node_modules/angular-route/angular-route.min.js.map'
  ])
    .pipe(gulp.dest(build_dir+ '/assets'));
});


/**
 * Watch
 */
gulp.task('watch', function () {
  gulp.watch( scss_files, ['styles'] );
  gulp.watch( images_dir +'/*.*', ['images'] );
  gulp.watch( js_dir +'/**/*.*', ['scripts'] );
  gulp.watch( 'source/*.html', ['html'] );
  gulp.watch( 'source/views/*.html', ['html'] );
});


/**
 * Server
 * You can show the project on 'http://localhost:3000'.
 */
gulp.task('connect', function () {
  connect.server({
    root: 'build', port: 3000
  });
});


/**
 * Clean
 */
gulp.task('clean', function() {
  del(['build'])
});


/**
 * Build
 */
gulp.task('build', ['clean'], function (cb) {
  runSequence([
    'html',
    'styles',
    'scripts',
    'images',
    'fonts'
  ], cb);
});



/**
 * Default
 */
gulp.task('default', ['build', 'connect', 'watch']);