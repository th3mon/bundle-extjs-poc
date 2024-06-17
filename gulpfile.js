const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const { src, dest, parallel, series } = require("gulp");

function jsBundle(cb) {
  const jsFiles = ["src/**/*.js", "!src/boot.js"];

  src(jsFiles).pipe(concat("app-bundle.js")).pipe(uglify()).pipe(dest("dist"));

  cb();
}

function copyVendorFiles(cb) {
  src("vendors/**/*.*").pipe(dest("dist/vendors"));

  cb();
}

function copyCSSFiles(cb) {
  src("css/**/*.css").pipe(dest("dist/css"));

  cb();
}

function copyHTMLFiles(cb) {
  src("index.dist.html").pipe(rename("index.html")).pipe(dest("dist"));

  cb();
}

async function clean() {
  const del = await import("del");

  return del.deleteAsync(["dist/**", "!dist"], { force: true });
}

exports.default = series(
  clean,
  parallel(jsBundle, copyVendorFiles, copyCSSFiles, copyHTMLFiles),
);
