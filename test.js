var testrunner = require('qunit');

testrunner.options.log.summary = true;
testrunner.options.log.tests = false;
testrunner.options.log.assertions = false;

testrunner.run({
    deps: "./test/fixtures/test_script.js",
    code: "./dist/fabric.js",
    tests: [
      './test/unit/rect.js',
      './test/unit/ellipse.js',
      './test/unit/color.js',
      './test/unit/circle.js',
      './test/unit/line.js',
      './test/unit/polyline.js',
      './test/unit/polygon.js',
      './test/unit/path.js',
      './test/unit/path_group.js',
      './test/unit/observable.js',
      './test/unit/object.js',
      './test/unit/text.js',
      './test/unit/util.js',
      './test/unit/image.js',
      './test/unit/image_filters.js',
      './test/unit/group.js',
      './test/unit/parser.js',
      './test/unit/canvas.js',
      './test/unit/canvas_static.js',
      './test/unit/gradient.js',
      './test/unit/pattern.js',
      './test/unit/shadow.js',
      './test/unit/object_interactivity.js',
      './test/unit/itext.js'
    ]
}, function(err, report) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  if(report.failed > 0){
    process.on('exit', function() {
      process.exit(1);
    });
  }
});
