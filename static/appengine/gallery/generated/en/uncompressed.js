// Automatically generated file.  Do not edit!


window.CLOSURE_NO_DEPS = true;

(function() {
  var srcs = [
      "third-party/base.js",
      "third-party/blockly/core/utils/math.js",
      "js/lib-games.js",
      "third-party/soyutils.js",
      "generated/en/soy.js",
      "gallery/generated/en/soy.js",
      "js/lib-storage.js",
      "gallery/js/gallery.js"
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
