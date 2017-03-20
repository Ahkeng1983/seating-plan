// 引包
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
// 添加任务 实现合并和压缩
gulp.task('buildjs',()=>{
  // 1. 读取你要压缩和合并的文件
  // 2. 先把所有的js文件合并在一起 gulp-concat插件
  // 3. 讲合并之后的文件压缩处理 gulp-uglify插件
  // 4.讲压缩之后的文件写入到指定的目录
  gulp.src('./src/js/*.js')// 读取src目录下所有.js的文件
    .pipe(concat('bundle.js'))// 通过pipe把读取到文件传入concat进行合并成一个
    // .pipe(gulp.dest('./dist'))// 将上一步合并的文件传入 然后输出到指定目录
    .pipe(uglify())//通过 pipe 收到上一步合并之后的数据，然后做压缩处理
    .pipe(gulp.dest('./dist'))//通过gulp.dest指令把 压缩完的代码输出到指定目录
  })
  
  // 启用监视
  
  gulp.task('watchjs',()=>{
    // js目录下的所有js文件 一旦更改 就自动执行buildjs任务
    gulp.watch('./src/js/*.js',['bulidjs'])
  })
