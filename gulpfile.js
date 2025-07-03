var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

gulp.task("scss", function () {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("watch", function () {
  gulp.watch("scss/**/*.scss", gulp.series("scss"));
});
