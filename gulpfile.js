var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('default', shell.task([
  'echo PUMP UP THE VOLUME!!',
  'curl -s https://klangfiles.s3-eu-west-1.amazonaws.com/uploads/klang/8780_fc4fc43d80d68c4d8f33799966d94873_aw_theme.mp3 > /tmp/x.mp3 && afplay /tmp/x.mp3'
]))
