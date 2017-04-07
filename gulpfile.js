/**
 * Created by Donny on 17/3/20.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch([
        "*.html",
        "css/*.css",
        "js/**/*.js"])
        .on("change", browserSync.reload);
});

gulp.task('default', ['serve']);