/**
 * build (建造) 把gulp 脚本任务串联 sequence(顺序)
 */

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));
