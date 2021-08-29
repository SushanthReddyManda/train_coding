// Automatically generated file.  Do not edit!


window.CLOSURE_NO_DEPS = true;

(function() {
  var srcs = [
      "third-party/base.js",
      "third-party/soyutils.js",
      "index/generated/en/soy.js",
      "third-party/blockly/core/utils/math.js",
      "js/lib-games.js",
      "index/js/index.js"
  ];
  function loadScript() {
    var src = srcs.shift();
    if (src) {
      var script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.onload = loadScript;
      document.head.appendChild(script);
    }
  }
  loadScript();
})();
