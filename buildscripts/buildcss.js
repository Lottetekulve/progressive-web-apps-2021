const gulp = require('gulp')
const concat = require('gulp-concat')
const minify = require('gulp-clean-css')
 
gulp.src('./static/public/css/styles.css')
    .pipe(concat('builded.css'))
    .pipe(minify())
    .pipe(gulp.dest('static/public'))