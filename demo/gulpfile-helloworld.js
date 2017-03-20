var gulp = require('gulp');
// 添加gulp 任务
gulp.task('hello', function () {
  console.log('hello gulp')
})

gulp.task('bb',function(){
  console.log('bbbb')
  })
// 将如想执行多个任务 就 gulp hello bb 任务间用空格空开
// 默认任务 执行时不用跟任务名 直接gulp即可
// gulp.task('default',function(){
//   console.log('我是默认任务')
//   })
// 在默认任务中 会先执行[]中的依赖
gulp.task('default',['hello','bb'],function(){
  console.log('我是默认任务')
  })
