var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var browserSync = require("browser-sync");
var plumber = require("gulp-plumber");

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            // baseDir: "portfolio",
            index: "index.html"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// gulp.task("js", function() {
//     gulp.src(["js/**/*.js","!js/min/**/*.js"])
//         .pipe(uglify())
//         .pipe(gulp.dest("./js/min"))
//         .pipe(browserSync.reload({stream:true}))
// });

gulp.task("sass", function() {
    gulp.src("sass/**/*scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task("default",['browser-sync'], function() {
    gulp.watch("**/*.html", ['bs-reload']);
    // gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch("sass/**/*.scss",["sass"]);
});
