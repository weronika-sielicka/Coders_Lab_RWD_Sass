var gulp = require('gulp');
var sass = require('gulp-sass');

/**
* Kompilacja SASS -> css
*/

gulp.task('sass', function(){
  return gulp.src('scss/main.scss')
  .pipe(sass({errLogToConsole: true}))
  .pipe(gulp.dest('assets/css'));
});

/**
* Obserwator plików
*/

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
});
