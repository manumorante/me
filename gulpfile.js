/**
 * Dependencies
 */
var gulp          = require('gulp'),
    watch         = require('gulp-watch'),
    concat        = require('gulp-concat'),
    connect       = require('gulp-connect'),
    compass       = require('gulp-compass'),
    uglify        = require('gulp-uglify'),
    deploy        = require('gulp-gh-pages'),
    del           = require('del');


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
 * CSS
 * - Compile and compress global styles using Compass.
 * - Copy result 'global.css' file within each folder slide.
 */
gulp.task('styles', function () {
  return gulp.src(sass_dir +'/application.scss')
    .pipe(compass({ config_file: 'source/config/compass.rb', sass: sass_dir, css: css_dir }));
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
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    js_dir +'/application.js'
  ])
    .pipe(concat('application.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest(build_dir+ '/assets'));

  // Modernizr & RespondJS
  gulp.src([
    'node_modules/gulp-modernizr/build/modernizr-custom.js',
    'node_modules/respond.js/dest/respond.min.js'
  ])
    .pipe(concat('modernizr-respond.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest(build_dir+ '/assets'));
});


/**
 * Watch
 */
gulp.task('watch', function () {
  gulp.watch( scss_files, ['styles'] );
  gulp.watch( images_dir +'/*.*', ['images'] );
  gulp.watch( js_dir +'/*.*', ['scripts'] );
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
  del([ 'build'])
});


/**
 * Build
 */
gulp.task('build', [ 'html', 'styles', 'scripts', 'images' ]);


/**
 * Deploy
 */
gulp.task('deploy', ['build'], function () {
  return gulp.src('./build/**/*')
    .pipe(deploy());
});


/**
 * Default
 */
gulp.task('default', [ 'build', 'connect', 'watch' ]);