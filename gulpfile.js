const gulp = require('gulp'),
    babel = require('gulp-babel'),
    path = require('path'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify');


gulp.task('build', function() {
  return gulp.src('./src/index.js')
    .pipe(jshint())
    .pipe(notify(function (file) {
      if (file.jshint.success) {
        return false;
      }

      var errors = file.jshint.results.map(function (data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function(callback) {
    gulp.watch('src/index.js', ['build']);
});
