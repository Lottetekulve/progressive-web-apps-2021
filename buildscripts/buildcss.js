const gulp = require('gulp')
const concat = require('gulp-clean-css')
const uglify = require('gulp-minify')

return gulp.src('./static/styles/*.css')
    .pipe(concat('builded.css'))
    .pipe(uglify())
    .pipe(gulp.dest('../static/public'))