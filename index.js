var through = require('through2');
var ESDoc = require('esdoc').default;
var gutil = require('gulp-util');

var fs = require('fs'),
    path = require('path');

const PLUGIN_NAME = 'gulp-esdoc';

function gulpESDoc(config) {
  if (!config) {
    var cfgPath = path.join(process.cwd(), 'esdoc.json'),
        data;

    if (fs.existsSync(cfgPath)) {
      data = fs.readFileSync(cfgPath, { encoding: 'utf8' });
      config = !data ? {} : JSON.parse(data);
    } else {
      config  = {};
    }
  }

  var transform = function(file, encode, callback) {

    if (!config.destination) {
      this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Must specify config.destination'));
      return callback();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
      return callback();
    }

    config.source = config.source || file.path;

    callback();
  };

  var flush = function(callback) {
    ESDoc.generate(config);
    callback();
  };

  return through.obj(transform, flush);

}

// Export
module.exports = gulpESDoc;
