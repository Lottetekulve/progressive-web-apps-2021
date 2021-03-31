const gulp = require('gulp'); 


return gulp.src(['./static/public/sw.js', './static/public/manifest.json', './static/public/images/*.*'])

    .pipe(gulp.dest('static/public'))
