var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task( 'default', function() {
  return browserify( './src/react_app.js' )
    //.transform(babelify)
    .bundle()
    .pipe( source( 'build.js' ))
    .pipe( gulp.dest( './dist/build/' ));
});