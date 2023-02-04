const notify = require('gulp-notify');

exports.default = function () {
  var args = Array.prototype.slice.call(arguments);
  notify
    .onError({
      title: 'Compile Error',
      message: '<%= error.message %>',
      sound: 'Submarine',
    })
    .apply(this, args);
  this.emit('end');
};