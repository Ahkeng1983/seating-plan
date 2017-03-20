const gulp = require('gulp')

/*gulp.task(name[, deps], fn)
name 任务名称
deps 可选参数， 用来声明该任务的依赖项， 就是执行该任务的时候， 先执行指定的依赖任务
fn 当前任务的执行函数*/

// a 任务函数如果有了 callback 参数，表示依赖于 a 任务的任务，必须等待 a 中的 callback 调用执行结束才会继续执行
// 注意：如果加了 callback 一定要记得调用，否则如果有任务依赖这个 a ，则该任务永远执行不到
// gulp.task('a', (callback) => {
//   setTimeout(function () {
//     console.log('aaa')
//     callback()
//   }, 1000)
// })

// gulp.task('b', ['a'], () => {
//   console.log('bbb')
// })

// ========================
gulp.task('copy', () => {
  gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./dist'))
})
gulp.task('copy1', () => {
    // 指定要保留的路径
    gulp.src('./src/js/**/*.js', { base: 'src' })
      .pipe(gulp.dest('./dist'))
  })
  // ===========================
  // 监视CSS目录中CSS文件的变动,一旦变动，将该文件重新写入dist中
  // 在gulp中的流任务中，如果想要确保后续任务一定会在他之后
  // 则代码中一定要retrun
gulp.task('css', function () {
  const stream = gulp.src('./src/css/**/*.css', {
      base: 'src'
    })
    .pipe(gulp.dest('./dist'))
  return stream
})
// 任务流控制 执行watch-css前先执行css
gulp.task('watch-css',['css'],function(){
  gulp.watch('./src/css/**/*.css',['css'])
  })
