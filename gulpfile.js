var gulp = require('gulp'),
    watch = require('gulp-watch'),
    minHTML = require('gulp-minify-html'),
    imageMin = require('gulp-imagemin'),
	prettify = require('gulp-html-prettify'),
	mincss = require('gulp-csso');
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
gulp.task('min-css',function(){
	gulp.src('dist/css/*.css')
        .pipe(mincss())
        .pipe(gulp.dest('dist/out'))
});
gulp.task('html-pretty',function(){
	gulp.src('src/*.html')
	.pipe(prettify({indent_char: ' ', indent_size: 2}))
	.pipe(gulp.dest('dist'));
});
gulp.task('fonts',function(){
	gulp.src('src/fonts/*.otf')
	.pipe(gulp.dest('dist/fonts'));
});
gulp.task('min-jpg', function(){
    gulp.src('src/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/img'));
});
