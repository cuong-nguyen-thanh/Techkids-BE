var gulp = require("gulp");
var browserSync = require("browser-sync");
var nodemon = require("gulp-nodemon");
var jade = require("gulp-jade");
var sass = require("gulp-sass");

gulp.task("serve", ["liveload"], function(){

});

gulp.task("liveload", ["compile-jade", "compile-sass", "run"], function(){
	browserSync.init({
		proxy: "localhost:3000",
		files: ["./client/**/*.*"],
		browser: ["google chrome", "firefox"],
		port: "7000"
	});

	gulp.watch('./src/jade/*.jade', ['compile-jade']);
	gulp.watch('./src/sass/*.scss', ['compile-sass']);
});

gulp.task("run", [], function(cb){
	var started = false;
	return nodemon({
		script: 'server.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task('compile-jade', function() {
  gulp.src('./src/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./client/templates/'))
});

gulp.task('compile-sass', function () {
   return gulp.src('./src/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./client/css/'))
});


// var gulp = require('gulp');
// var browserSync = require('browser-sync');
// var nodemon = require('gulp-nodemon');
//
// gulp.task('serve', ['browser-sync'], function () {
// });
//
// gulp.task('browser-sync', ['nodemon', 'jade', 'sass'], function() {
// 	browserSync.init({
// 		proxy: "http://localhost:3000",
//         files: ["client/**/*.*"],
//         browser: "google chrome",
//         port: 7000,
// 	});
//    gulp.watch('./jade-src/*.jade', ['jade']);
//    gulp.watch('./sass-src/*.scss', ['sass']);
// });
//
// gulp.task('nodemon', function (cb) {
// 	var started = false;
// 	return nodemon({
// 		script: 'server.js'
// 	}).on('start', function () {
// 		// to avoid nodemon being started multiple times
// 		if (!started) {
// 			cb();
// 			started = true;
// 		}
// 	});
// });
//
// var jade = require('gulp-jade');
// gulp.task('jade', function() {
//   gulp.src('./jade-src/*.jade')
//     .pipe(jade())
//     .pipe(gulp.dest('./client/templates/'))
// });
//
//
// var sass = require('gulp-sass');
// gulp.task('sass', function () {
//     return gulp.src('./sass-src/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./client/css/'))
// });
