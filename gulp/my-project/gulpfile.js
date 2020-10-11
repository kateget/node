// 练习gulp基础操作
const fs = require('fs');
const {
    series,
    parallel,
    dest,
    src,
    watch
} = require('gulp');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const minifyCSS = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');
const less = require('gulp-less');
const sass = require('gulp-ruby-sass')
    // 监控路径
var watchPath = require('gulp-watch-path')

// 浏览器自动刷新
var connect = require('gulp-connect')
gulp.task('connect', function() {
    connect.server({
        livereload: true
    })
})

async function asyncAwaitTask() {
    const {
        version
    } = fs.readFileSync('package.json');
    console.log(version);
    await Promise.resolve('some result');
}

// 压缩js
async function js() {
    await src('js/i18n/js/*.js')
        // 压缩
        .pipe(uglify())
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(dest('dest/js'))
}

// 压缩css
async function css() {
    await src('js/i18n/css/*.css')
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(minifyCSS())
        .pipe(dest('dest/css'))
}

// 压缩图片
async function image() {
    await src(['js/i18n/images/*.jpg', 'js/i18n/images/*.png'])
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(dest('dest/image'))
}

// 编译less文件
async function lessF() {
    await src('js/i18n/css/*.less')
        .pipe(less())
        .pipe(dest('dest/css'))
}

// 编译sass文件 sass压缩包存在问题，此处暂时不测试
async function sassF() {
    // await src('js/i18n/css/sass') sass语法需要改成下面
    //     .pipe(sass())
    //     .pipe(dest('dest/css'))
    return sass('js/i18n/css/*.sass')
        .on('error', sass.logError)
        .pipe(dest('dest/css'))
}


// 设置监听任务，监听文件修改
async function auto() {
    // 监听文件修改，当文件被修改时执行文件
    await watch(['js/i18n/js/*.js', 'js/i18n/css/*.css', 'js/i18n/images/*.jpg', 'js/i18n/images/*.png'], series(['js', 'css', 'image']));
    // await watch(['js/i18n/js/*.js', 'js/i18n/css/*.css', 'js/i18n/images/*.jpg'], series(['js', 'css', 'image']));
}

// var watcher = watch(['js/i18n/js/*.js', 'js/i18n/css/*.css', 'js/i18n/images/*.jpg', 'js/i18n/images/*.png'])
// watcher.on('change', series([js, css, image]))


// 让命令行输出的文字带颜色
async function changeCmdColor() {
    gutil.log('message')
    gutil.log(gutil.colors.red('error'))
    gutil.log(gutil.colors.green('message:') + "some")
}

// watchjs
async function watchjs() {
    watch('js/**/*.js', async function(event) {
        var paths = watchPath(event, 'js/', 'dist/')
        console.log(event)
            /*
            paths
                { srcPath: 'src/js/log.js',
                  srcDir: 'src/js/',
                  distPath: 'dist/js/log.js',
                  distDir: 'dist/js/',
                  srcFilename: 'log.js',
                  distFilename: 'log.js' }
            */
            // gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
            // gutil.log('Dist ' + paths.distPath)

        // await gulp.src(paths.srcPath)
        //     .pipe(uglify())
        //     .pipe(gulp.dest(paths.distDir))
    })
}

// exports.default = asyncAwaitTask;
// task('default', series(['js', 'css', 'image', 'less', 'sass', 'auto']));
exports.default = series(changeCmdColor, parallel([watchjs, js, css, image, lessF, sassF]))

// npm install gulp-imagemin --save-dev 报错
// Error: Command failed: C:\Windows\system32\cmd.exe /s /c "autoreconf -ivf
// 解决：npm install -g cnpm --registry=https://registry.npm.taobao.org （用淘宝镜像下载）
// cnpm install gulp-imagemin --save-dev
// rm -rf node_modules/  移除目录下node包
// npm install

// 项目流程搭建
// 1.npm init
// 2.npm i gulp --save-dev
// 3.安装模块：npm install gulp-uglify gulp-watch-path stream-combiner2 gulp-sourcemaps gulp-minify-css gulp-autoprefixer gulp-less gulp-ruby-sass gulp-imagemin gulp-util --save-dev
// 4.设计目录：
// --src 源码
// --dist 编译压缩后的版本