var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('docs', function () {
    return gulp.src("./docs/**/*")
    .pipe(deploy());
});