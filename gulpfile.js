const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

gulp.task("scss", function () {
  return gulp
    .src("./scss/**/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
    server: "./",
  });

  gulp.watch("./scss/**/**/*.scss", gulp.series("scss"));
  gulp.watch("./*.html").on("change", browserSync.reload);
});

// gulp.task("watch", function () {
//   gulp.watch("scss/**/*.scss", gulp.series("scss"));
// });
