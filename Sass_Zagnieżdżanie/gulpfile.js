var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

/**
 * Kompilacja SASS -> css
 */

gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'));
});

/**
 * Obserwator plików
 */

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});
