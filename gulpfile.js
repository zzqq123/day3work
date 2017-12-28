const gulp = require('gulp');
const concat = require('gulp-concat');
const minifycss = require('gulp-minify-css');
const server = require('gulp-webserver');

    gulp.task('minifycss',function(){
    gulp.src('./content/css/style.css')
    .pipe(concat('main.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('./content/css'));
    })

gulp.task('server',function(){
        gulp.src('.')
        .pipe(server({
                host:'localhost',
                port:8088,
                livereload:true,
                open:true,
                fallback:'index.html'
            }))
    })
gulp.task('default',['server','minifycss'])