const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

return gulp.src('./static/js/*.js')
    .pipe(concat('builded.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../static/public'))
