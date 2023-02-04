
const { task, parallel, series } = require('gulp');
const {default: config} = require('./gulp/config.js');

const cleanTask = require('./gulp/tasks/clean.js');
const sassTask = require('./gulp/tasks/sass.js');
const spriteTask = require('./gulp/tasks/sprite-svg/sprite-svg.js');

console.log({config})

// define tasks
task('clear', cleanTask.default.build);
task('sass', sassTask.default.build);
task('sprite:svg', spriteTask.default.build);

task('sass:watch', sassTask.default.watch);
task('sprite:svg:watch', spriteTask.default.watch);

// build + watch commands
task('build', series([
  'clear',
  parallel('sprite:svg','sass'),
]));

task(
  'watch',
  parallel(
    'sass:watch',
    'sprite:svg:watch',
  )
);

task('default', series(['build', 'watch']));

