var gulp = require('gulp');
/* 添加版本号 根据内容生成hash码 */
var rev = require('gulp-rev');
/* 修改页面index里文件的引用（添加hash） */
var revReplace = require('gulp-rev-replace');
/* 在HTML中通过注释进行某些设置 */
var useref = require('gulp-useref');

var filter = require('gulp-filter');
/* JS压缩 */
var uglify = require('gulp-uglify');
/* CSS压缩 */
var csso = require('gulp-csso');

gulp.task('default', function(){
    var jsFilter = filter('**/*.js', {restore: true});
    var cssFilter = filter('**/*.css', {restore: true});
    var indexHtmlFilter = filter(['**/*', '!**/index.html'], {restore: true});

    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));
})