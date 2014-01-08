var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', function() {
  gulp.src(['client/css/**/*.less', '!client/css/includes/*.less'])
    .pipe(less().on('error', console.log))
    .pipe(gulp.dest('dist/css'));
});
