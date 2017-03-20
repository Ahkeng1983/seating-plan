const gulp = require('gulp')
const less = require('gulp-less')
const cssnano =require('gulp-cssnano')
const gulpif = require('gulp-if')
const argv = require('yargs').argv

gulp.task('less',()=>{
  gulp.src('./src/less/**/*.less')
  // 编译
  .pipe(less())
  .pipe(gulpif(argv.deploy,cssnano()))// 只有发布的时候才会压缩
  // 写入指定目录
  .pipe(gulp.dest('./dist/css'))
  })
// 时时监视less文件的变动
gulp.task('watch-less',()=>{
  gulp.watch('./src/less/**/*.less',['less'])
  })
