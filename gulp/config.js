const colors = require('ansi-colors');
const errorHandler = require('./util/errors.js');

const destPath = 'dist';

const config = {
  src: {
    root: 'src',
    sass: 'src/sass',
    sassGen: 'src/sass/generated',
    icons: 'src/icons',
    iconsSvgMono: 'src/icons/svg-mono',
    iconsSvgColor: 'src/icons/svg-colors',

  },
  dest: {
    root: destPath,
    css: destPath + '/css',
    img: destPath + '/img',
  },

  errorHandler: errorHandler,
};

exports.default = config;