import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import del from 'del';
import browser from 'browser-sync';
import terser from 'gulp-terser';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML

const html = () => {
  return gulp.src('source/*.html')
  .pipe(gulp.dest('build'));
  }

// Scripts

const scripts = () => {
return gulp.src('source/js/script.js')
.pipe(terser())
.pipe(rename("script.min.js"))
.pipe(gulp.dest('build/js'))
.pipe(browser.stream());
}

// Images

const optimizeImages = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'))
}

const copyImages = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(gulp.dest('build/img'))
}

const copySprite = () => {
  return gulp.src('source/img/sprite.svg')
    .pipe(gulp.dest('build/img'))
}

// WebP

const createWebp = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(squoosh({
      webp: {}
    }))
    .pipe (gulp.dest('build/img'))
}

// SVG

const svg = () => {
  return gulp.src('source/img/icons/*.svg')
    .pipe(svgo())
    .pipe (gulp.dest('build/img/icons'));
}

const sprites = () => {
  return gulp.src(['source/img/icons/*.svg', '!source/img/sprite.svg'])
    .pipe(svgo())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprites.svg'))
    .pipe (gulp.dest('build/img'));
}

// Copy

const copy = (done) => {
  gulp.src([
  "source/fonts/*.{woff2,woff}",
  'source/*.ico',
  ], {
  base: 'source'
  })
  .pipe(gulp.dest('build'))
  done();
}

// Clean

const clean = () => {
  return del("build");
};

// Server

const server = (done) => {
  browser.init({
  server: {
  baseDir: 'build'
  },
  cors: true,
  notify: false,
  ui: false,
  });
  done();
  }

// Reload

const reload = (done) => {
  browser.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/js/script.js', gulp.series(scripts));
  gulp.watch('source/*.html', gulp.series(html, reload));
}

//Build

export const build = gulp.series(
  clean,
  copy,
  copySprite,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    sprites,
    createWebp
  ),
  gulp.series(
    server,
    watcher
));

//Default

export default gulp.series(
  clean,
  copy,
  copyImages,
  copySprite,
  gulp.parallel(
    styles,
    html,
    svg,
    sprites,
    scripts,
    createWebp
  ),
  gulp.series(
    server,
    watcher
));
