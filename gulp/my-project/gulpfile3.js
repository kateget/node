const fs = require('fs');
var gulp = require('gulp');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const minifyCSS = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');
const less = require('gulp-less');
const sass = require('gulp-ruby-sass')

async function asyncAwaitTask() {
    const {
        version
    } = fs.readFileSync('package.json');
    console.log(version);
    await Promise.resolve('some result');
}

// 压缩js
gulp.task('js', async() => {
    await gulp.src('js/i18n/js/*.js')
        // 压缩
        .pipe(uglify())
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(gulp.dest('dest/js'))
})

// 压缩css
gulp.task('css', async() => {
    await gulp.src('js/i18n/css/*.css')
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(minifyCSS())
        .pipe(gulp.dest('dest/css'))
})

// 压缩图片
gulp.task('image', async() => {
    await gulp.src(['js/i18n/images/*.jpg', 'js/i18n/images/*.png'])
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dest/image'))
})

// 编译less文件
gulp.task('less', async() => {
    gulp.src('js/i18n/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('dest/css'))
})

// 编译sass文件 sass压缩包存在问题，此处暂时不测试
gulp.task('sass', async() => {
    // await gulp.src('js/i18n/css/sass') sass语法需要改成下面
    //     .pipe(sass())
    //     .pipe(gulp.dest('dest/css'))
    return sass('js/i18n/css/*.sass')
        .on('error', sass.logError)
        .pipe(gulp.dest('dest/css'))
})


// 设置监听任务，监听文件修改
gulp.task('auto', async() => {
    // 监听文件修改，当文件被修改时执行文件
    await gulp.watch(['js/i18n/js/*.js', 'js/i18n/css/*.css', 'js/i18n/images/*.jpg', 'js/i18n/images/*.png'], gulp.series(['js', 'css', 'image']));
    // await gulp.watch(['js/i18n/js/*.js', 'js/i18n/css/*.css', 'js/i18n/images/*.jpg'], gulp.series(['js', 'css', 'image']));
})

// 让命令行输出的文字带颜色

// exports.default = asyncAwaitTask;
gulp.task('default', gulp.series(['js', 'css', 'image', 'less', 'sass', 'auto']));

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