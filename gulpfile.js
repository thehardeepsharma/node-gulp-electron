'use strict';

const gulp = require('gulp');
var elconnect = require('electron-connect').server.create();

gulp.task('move-file', function () {
	return gulp.src('source/**/*').pipe(gulp.dest('destination'));
});

gulp.task('copy', ['move-file']);

gulp.task('watch', ['copy'], function () {
	elconnect.start();
	gulp.watch('source/**/*', ['copy'], elconnect.restart);
});

gulp.task('default', ['watch'], () => {
	console.log('Transposing Sass...');
});