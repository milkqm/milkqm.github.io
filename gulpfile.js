var gulp = require('gulp'); 
var nunjucksRender = require('gulp-nunjucks-render');
gulp.task('nunjucks', function() {
    return gulp.src(
        'pages/**/*.+(html|nunjucks|njk)'
    ).pipe(nunjucksRender({
        path: ['templates']
    })).pipe(gulp.dest(''))
});