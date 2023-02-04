const del = require('del');
const {default: config} = require('../config.js');

const build = () => {
  return del([
    config.dest.root + '/**/*'
  ]);
};

exports.default = { build }