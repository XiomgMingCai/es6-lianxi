/**
 *当APP 目录发生变化 去触发任务
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser', (cb) => {
    if (!args.watch) return cb();
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.ejs', ['pages']);
    gulp.watch('app/**/*.css', ['css']);
});
