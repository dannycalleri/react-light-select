/**
 * Created by danny on 18/03/2016.
 */

// ====================================================
// Modules

var gulp        = require("gulp");
var sass        = require("gulp-ruby-sass");

// for applying pipes conditionally
var gulpIf      = require("gulp-if");
var uglify      = require("gulp-uglify");
var useref      = require("gulp-useref");
var gulpUtil    = require("gulp-util");
var browserSync = require("browser-sync").create();
var browserify  = require("browserify");
var babelify    = require("babelify");
var source      = require("vinyl-source-stream");
var rename      = require("gulp-rename");
var globalShim  = require("browserify-global-shim");
var babel       = require("gulp-babel");

// http://stackoverflow.com/questions/24992980/how-to-uglify-output-with-browserify-in-gulp
var buffer      = require("vinyl-buffer");

var reload      = browserSync.reload;

// aws config object
var aws = {
    bucket: '',
    maxAge: 60,
    complete: false
};

var runSequence = require('run-sequence');
var shell = require('gulp-shell');

var building = false;

var paths = {
    app: "./examples",
    debugBuild: "./.debug",
    distBuild: "./dist"
};

// cleans up debug and dist directories
gulp.task('clean', require('del').bind(null, [paths.debugBuild, paths.distBuild]));
gulp.task('startBuilding', function(){ building = true; });
gulp.task('default', ['clean'], function () { gulp.start('build'); });

gulp.task('build', ['startBuilding', 'build-js'], function(){});

// Static Server + files watcher
gulp.task('serve', ['js', 'html'], function() {

    // Serve files from both ./.debug and ./app.
    // In this way I can serve all images from ./app without copying them
    // and all the bundled JS and compiled CSS from /.debug
    browserSync.init({
        port: 1337,
        server: {
            baseDir: [paths.debugBuild, paths.app]
        }
    });

    gulp.watch("./src/**/*.jsx", ['js']);
    gulp.watch(paths.app+"/**/*.html", ['html']);
});

gulp.task('build-js', function(){
    return gulp.src(building ? './src/react-light-select.jsx' : './src/main.jsx')
		.pipe(babel({
			presets: ["es2015", "react"]
		}))
        .pipe(rename('react-light-select.js'))
        // .pipe(source('react-light-select.js'))
        // .pipe(buffer())
        .pipe(gulp.dest(building ? paths.distBuild : paths.debugBuild))
        .pipe(gulpIf(building, uglify().on('error', gulpUtil.log)))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(building ? paths.distBuild : paths.debugBuild))
        .pipe(reload({stream: true}));

    // Setting debug to "true" will automatically generate source maps,
    // this way it's possible to debug individual .jsx files
        // .transform(babelify, {presets: ["es2015", "react"]})
        // .bundle()
        // .pipe(source('react-light-select.js'))
        // .pipe(buffer())
        // .pipe(gulp.dest(building ? paths.distBuild : paths.debugBuild))
        // .pipe(gulpIf(building, uglify().on('error', gulpUtil.log)))
        // .pipe(rename({ extname: '.min.js' }))
        // .pipe(gulp.dest(building ? paths.distBuild : paths.debugBuild))
        // .pipe(reload({stream: true}));
});

gulp.task('js', function(){
    // Setting debug to "true" will automatically generate source maps,
    // this way it's possible to debug individual .jsx files
    browserify(building ? './src/react-light-select.jsx' : './src/main.jsx', building ? { bundleExternal: false } : { debug: true })
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('react-light-select.js'))
        .pipe(buffer())
        .pipe(gulp.dest(building ? paths.distBuild : paths.debugBuild))
        .pipe(gulpIf(building, uglify().on('error', gulpUtil.log)))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(building ? paths.distBuild : paths.debugBuild))
        .pipe(reload({stream: true}));
});

gulp.task('html', function() {
    return gulp.src('examples/*.html')
            .pipe(useref())
            .pipe(gulpIf('*.js', uglify().on('error', gulpUtil.log)))
            //.pipe(gulpIf('*.css', minifyCss()))
            .pipe(gulp.dest(paths.debugBuild))
            .pipe(reload({stream: true}));
});
