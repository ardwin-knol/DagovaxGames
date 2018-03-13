var gulp = require('gulp');
var sass = require('gulp-sass');
var auto_prefixer = require('gulp-autoprefixer');
var clean_css = require('gulp-clean-css');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var handlebars = require('gulp-handlebars');

const files_vendor = [
    'vendor/jquery.event.gevent-master/jquery.event.gevent.js',
    'vendor/jquery.event.ue-master/jquery.event.ue.js',
    'vendor/taffydb-master/taffy.js',
    'vendor/visionmedia-page/page.js',
    'vendor/handlebars-runtime-3/handlebars.js'
];

gulp.task('html', function () {
    gulp.src(['index.html'])
        .pipe(gulp.dest('dist/'))
        .pipe(livereload());
});

gulp.task('resources', function () {
    gulp.src(['resources/*', 'resources/**/*'])
        .pipe(gulp.dest('dist/resources'));
});

gulp.task('build', ['html', 'css', 'js', 'resources', 'templates', 'sass', 'vendor'], function () {

});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
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

gulp.task('default', function () {
    console.log('running default task')
});

gulp.task('vendor', function(){
        return gulp.src(files_vendor)
            .pipe(order([
                'vendor/**/*.js'
            ], { base: './' }))
            .pipe(concat('vendor.js'))
            .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
        gulp.watch(['features/**/*.hbs'], ['templates', 'js']);
        gulp.watch(['index.html'], ['html']);
        gulp.watch(['images/*', 'images/**/*'], ['images']);
        gulp.watch(['css/*.css', 'features/**/*.css'], ['css']);
        gulp.watch(['js/*.js', 'features/**/*.js'], ['templates','js']);
});

gulp.task('js', function (){
    gulp.src(['./js/**/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
    return gulp.src('./css/*.css')
        .pipe(clean_css({compatibility: 'ie9'}))
        .pipe(auto_prefixer('last 2 version', 'safari 5', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});
