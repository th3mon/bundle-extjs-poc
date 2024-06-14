const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("default", () => {
  console.log("default task");

  return true;
});

gulp.task("js", () => {
  return gulp
    .src("src/**/*.js")
    .pipe(concat("app-bundle.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});
