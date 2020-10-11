var gulp = require('gulp');

// 浏览器自动刷新 

var connect = require('gulp-connect');
gulp.task('connect', function() {
    connect.server({
        livereload: true

    });

});

// 编译html

var htmlmin = require('gulp-htmlmin');

var fileinclude = require('gulp-file-include');

var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS

};
gulp.task('html', function() {

    return gulp.src('./src/html/**/*.html') //生产路径
        .pipe(htmlmin(options)) //压缩html
        .pipe(fileinclude({ //模板复用
            prefix: '@@',
            basepath: '@file'

        }))
        .pipe(gulp.dest('dist/html')) //打包路径
        .pipe(connect.reload());

});

// 编译css

var cssmin = require('gulp-minify-css');

var autoprefixer = require('gulp-autoprefixer'); //自动增加前缀

var sass = require('gulp-sass');
gulp.task('css', function() {

    return gulp.src('src/css/**/*.scss') //生成路径
        .pipe(autoprefixer({
            browsers: ['last versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(deg);
            //        transform: rotate(deg);
            remove: true //是否去掉不必要的前缀 默认：true 

        }))
        .pipe(sass())
        .pipe(cssmin({
            advanced: false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: '*', //保留ie以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie：IE容模式，'ie：IE容模式，'*'：IE兼容模式]
            keepBreaks: true, //类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
                //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀

        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());

});

// 编译js

var uglify = require('gulp-uglify');
gulp.task('js', function() {

    return gulp.src('src/js/**/*.js') //生产路径
        .pipe(uglify({
            mangle: {
                except: ['require', 'exports', 'module', '$']
            },
            compress: true, //类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释

        }))
        .pipe(gulp.dest('dist/js')) //打包路径
        .pipe(connect.reload());

});

// 编译 images

var imagemin = require('gulp-imagemin');

var cache = require('gulp-cache');
gulp.task('image', function() {

    return gulp.src('src/images/*.{png,jpg,gif,ico}') //生成路径
        .pipe(cache(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化

        })))
        .pipe(gulp.dest('dist/images')); //打包路径

});

// 编译 copy

var concat = require('gulp-concat');
gulp.task('copy', function() { //静态资源

    return gulp.src('src/lib/*.js')
        .pipe(concat('all.js')) //打包成all.js
        .pipe(gulp.dest('dist/lib'))

});

//编译 iconfont
gulp.task('iconFont', function() {

    return gulp.src('src/iconfont/*')
        .pipe(gulp.dest('dist/iconfont'))

});

//实时监听
gulp.task('watch', function() {

    gulp.watch(['./src/html/**/*.html'], ['html']);

    gulp.watch(['./src/css/**/*.scss'], ['css']);

    gulp.watch(['./src/js/**/*.js'], ['js']);


});

gulp.task('default', ['connect', 'watch', 'html', 'css', 'js', 'image', 'copy', 'iconFont']);