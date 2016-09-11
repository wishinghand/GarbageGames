var gulp = require('gulp'),
    inject = require('gulp-inject'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uncss = require('gulp-uncss'),
    runSequence = require('run-sequence'),
    clean = require('gulp-clean');

var jsSources = ['frontend/js/**/*.js'],
    cssSources = ['frontend/css/**/*.scss', 'frontend/css/**/*.css'],
    htmlSources = ['frontend/**/*.html', 'frontend/*.html'];

gulp.task('clean', function(){
    return gulp.src('./build/*.*', {read: false})
    .pipe(clean());
});

/**JS gulp tasks******************************************************/
gulp.task('concatJs', function(){
    return gulp.src([ 'node_modules/angular/angular.js', 'node_modules/angular-ui-router/release/angular-ui-router.js', './frontend/js/**/*.module.js', './frontend/js/**/*.js'])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./build/'));
});

/**CSS gulp tasks*******************************************************/
gulp.task('compileSass', function(){
    return gulp.src([ 'node_modules/font-awesome/css/font-awesome.css', 'node_modules/bulma/css/bulma.css', './frontend/css/*.scss', './frontend/css/*.css', 'node_modules/animate.css/animate.min.css'])
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    //and concatenates them
    .pipe(concat('build.css'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('inject', function(){
    var sources = gulp.src(['./build/*.css', './build/*.js'], {read: false});
    return gulp.src('./frontend/index.html')
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./frontend'));
});

gulp.task('connect', function(){
    return connect.server({
        root: './',
        livereload: true,
        port: 8889
    });
});

gulp.task('copyFonts', function() {
    return gulp.src(['node_modules/font-awesome/fonts/*'])
            .pipe(gulp.dest('./fonts'));
});

//checks js/html/css on change...
gulp.task('watch', function() {
    gulp.watch(jsSources, ['concatJs', 'js']);
    gulp.watch(cssSources, ['compileSass', 'css']);
    gulp.watch(htmlSources, ['html']);
});

//...and reloads
gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload());
});

gulp.task('uncss', function() {
    return gulp.src('./build/build.css')
    .pipe(uncss({
        html: ['app/index.html', 'app/**/*.html']
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('serve', function(done) {
    runSequence('clean', 'concatJs', 'compileSass', 'copyFonts', 'inject', 'connect', 'watch', function() {
        done();
    });
});