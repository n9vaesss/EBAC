const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

// Tarefa para compilar SASS
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Tarefa para comprimir imagens
gulp.task('imagemin', async function() {
    const imagemin = await import('gulp-imagemin');
    return gulp.src('src/images/*')
        .pipe(imagemin.default())
        .pipe(gulp.dest('dist/images'));
});

// Tarefa para comprimir código JavaScript
gulp.task('uglify', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão que executa todas as tarefas
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));
