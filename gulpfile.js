var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('default', shell.task([
  'echo PUMP UP THE VOLUME!!',
  'curl -s https://klangfiles.s3-eu-west-1.amazonaws.com/uploads/klang/8781_0516bce713e6a15bc216200fe02cd15a_aw_howl.mp3 > /tmp/x.mp3 && afplay /tmp/x.mp3'
]))
