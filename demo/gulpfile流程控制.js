const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const del =require('del')

gulp.task('clean',function(callback){
  del('./dist')
  .then(()=>{
    // 当then指定的回调函数执行才意味着删除成功了
    callback()
    })
  })
gulp.task('copyjs',['clean'], () => {
  return gulp.src('./src/**/*.js', { base: 'src' })
    .pipe(gulp.dest('./dist'))
})
