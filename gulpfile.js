var gulp        = require('gulp');
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');
var run         = require('gulp-run');
var electron    = require('electron-connect').server.create();
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');

gulp.task("sass", function(){
   gulp.src("./src/sass/**/*.scss")
       .pipe(plumber())
       .pipe(sass())
       .pipe(gulp.dest("./dist/stylesheets"));
});

gulp.task('browserify', function() {
    browserify("./src/js/app.jsx", { debug: true})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .on("error", function(err) { console.log("Error : " + err.message); })
        .pipe(source('index.js'))
        .pipe(gulp.dest('./dist/javascripts'))
});

gulp.task("html", function(){
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"));
});

gulp.task('watch', function(){
    // sassのビルド
    gulp.watch("./src/sass/**/*.scss", ["sass"]);
 
    // jsxのtransform
    gulp.watch("./src/js/**/*.jsx", ['browserify']);

    // htmlの移動
    gulp.watch("./src/**/*.html", ["html"]);

    // live reload
    gulp.watch(["./dist/stylesheets/**/*.css", "./dist/javascripts/index.js", "./dist/**/*.html"], electron.reload);
});

gulp.task('run', function(){
    electron.start();
});

gulp.task("default", ['watch', 'run', 'html', 'browserify', 'sass']);
