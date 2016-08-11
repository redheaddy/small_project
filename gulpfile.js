var gulp = require('gulp'),
    watch = require('gulp-watch'),
    minHTML = require('gulp-minify-html'),
    imageMin = require('gulp-imagemin');
    //pngMin = reqire('gulp-tinypng');

gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('src/*.html')
    .pipe(minHTML(opts))
    .pipe(gulp.dest('dist'));
});
gulp.task('min-jpg', function(){
    gulp.src('src/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/img'));
});
