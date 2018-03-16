var gulp = require('gulp');
var sass = require('gulp-sass');
var auto_prefixer = require('gulp-autoprefixer');
var clean_css = require('gulp-clean-css');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var handlebars = require('gulp-handlebars');
var declare = require('gulp-declare');
var wrap = require('gulp-wrap');
var order = require('gulp-order');

const files_vendor = [
    'vendor/jquery.event.gevent-master/jquery.event.gevent.js',
    'vendor/jquery.event.ue-master/jquery.event.ue.js',
    'vendor/taffydb-master/taffy.js',
    'vendor/visionmedia-page/page.js',
    'vendor/handlebars-runtime-3/handlebars.js'
];

const files_js = [
    'js/**/*.js',
    'js/*.js',
    'features/**/*.js'
];

const files_js_order = [
    'js/spa.js',
    'js/spa.template.js',
    'js/spa.util.js',
    'js/spa.util_b.js',
    'js/spa.router.js',
    'js/spa.shell.js',
    'js/*.js',
    'features/**/*.js'
];

gulp.task('build', ['html', 'templates', 'css', 'vendor', 'build_js', 'feedback', 'images', 'sass', 'mario'], function () {

});

gulp.task('html', function () {
    gulp.src(['index.html'])
        .pipe(gulp.dest('dist/'))
        .pipe(livereload());
});

gulp.task('css', function () {
    return gulp.src('./css/*.css')
        .pipe(clean_css({compatibility: 'ie9'}))
        .pipe(auto_prefixer('last 2 version', 'safari 5', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

gulp.task('vendor', function(){
    return gulp.src(files_vendor)
        .pipe(order([
            'vendor/**/*.js'
        ], { base: './' }))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js', function () {
    return gulp.src(files_js)
        .pipe(order(files_js_order, { base: './' }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build_js', function () {
    return gulp.src(files_js)
        .pipe(order(files_js_order, { base: './' }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('feedback', function (){
    gulp.src(['./js/feedback_widget/*.js'])
        .pipe(concat('feedback_widget.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('images', function () {
    gulp.src(['resources/*', 'resources/**/*'])
        .pipe(gulp.dest('dist/images'));
});

gulp.task('templates', function(){
    gulp.src(['features/**/*.hbs'])
    // Compile each Handlebars template source file to a template function
        .pipe(handlebars())
        // Wrap each template function in a call to Handlebars.template
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        // Declare template functions as properties and sub-properties of MyApp.templates
        .pipe(declare({
            namespace: 'spa_templates.templates',
            noRedeclare: true, // Avoid duplicate declarations
            processName: function(filePath) {
                // Allow nesting based on path using gulp-declare's processNameByPath()
                // You can remove this option completely if you aren't using nested folders
                // Drop the client/templates/ folder from the namespace path by removing it from the filePath
                return declare.processNameByPath(filePath.replace('client/templates/', ''));
            }
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});

gulp.task('watch', function () {
        gulp.watch(['features/**/*.hbs'], ['templates', 'js']);
        gulp.watch(['index.html'], ['html']);
        gulp.watch(['images/*', 'images/**/*'], ['images']);
        gulp.watch(['css/*.css', 'features/**/*.css'], ['css']);
        gulp.watch(['js/*.js', 'features/**/*.js'], ['templates','js']);
});

gulp.task('mario', function () {
    gulp.src(['mario/**/*.*'])
        .pipe(gulp.dest('dist/mario_game'));
});

gulp.task('default', ['templates']);