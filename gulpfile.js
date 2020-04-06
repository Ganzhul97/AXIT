var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), //Подключаем Sass пакет
	browserSync = require('browser-sync'), // Подключаем Browser Sync
	concat = require('gulp-concat'), // Подключаем Concat
	uglify = require('gulp-uglify'); // Подключаем Uglify
 
gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
	.pipe(concat('styles.css'))
	
	// .pipe(rename({
	// basename: "styles",
	// suffix: ".min",
	// extname: ".css"
	// }))
	
	.pipe(gulp.dest('css'))
	});
 
gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'app' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});
 
gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));