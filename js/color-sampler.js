(function(global){
  var ColorSampler = {
    VERSION: "0.0.1"
  };

  // Utilities

  function extend (destintation, source) {
    for (key in source) {
      if (source.hasOwnProperty(key)) {
        destintation[key] = source[key];
      }
    }
    return destintation;
  };

  function copy(obj) {
    return extend({}, obj);
  };

  // Private Methods

  function getImage (image, callBack) {
    var img = new Image();
    img.onload = function () {
      return callBack(img);
    };
    img.src = image;
  };

  function resizeSVG (svg, width, height) {
    var styles = {
      width: width,
      height: height
    };
    extend(svg.style, styles);
    return svg;
  };

  function positionSVG (svg) {
    var styles = {
      position: 'fixed',
      left: 0,
      top: 0
    };
    extend(svg.style, styles);
    return svg;
  };

  function walkNodes (node, fn) {
    for (var node = node.firstChild; node; node = node.nextSibling) {
      fn(node);
      walkNodes(node, fn);
    }
  };

  function isNodeColored (node) {
    if (node.style || node.attributes) {
      return !!node.attributes.fill || !!node.style.fill
    } else {
      return false
    }
  };

  function colorNode (img, node) {
    var data;
    var rect = node.getBoundingClientRect();
    var srcX = rect.left,
        srcY = rect.top,
        srcW = rect.width,
        srcH = rect.height;

    if (srcX <= -(srcW) || srcY <= -(srcH)) return;

    if (srcY <= 0) {
      srcH = srcH - srcY;
      srcY = 0;
    }

    if (srcX <= 0) {
      srcW = srcW - srcX;
      srcX = 0;
    }

    var context = document.createElement('canvas').getContext('2d');

    context.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, 1, 1);
    data = Array.prototype.slice.call(context.getImageData(0, 0, 1, 1).data, 0);

    extend(node.style, {
      fill: 'rgba(' + data.join(', ') + ')',
      stroke: 'rgba(' + data.join(', ') + ')'
    });
  };

  function colorNodes (img, svg) {
    walkNodes(svg, function(node) {
      if (isNodeColored(node)) {
        colorNode(img, node);
      }
    });
  };

  // Public Methods

  function trace (image, svg, cb) {
    getImage(image.src, function (img) {
      var oldStyle = copy(svg.style);
      oldStyle.position = oldStyle.position || "";

      resizeSVG(svg, img.width, img.height);
      positionSVG(svg);
      colorNodes(img, svg);

      extend(svg.style, oldStyle);
      cb();
    });
  };

  // Initialize

  function _init_ () {
    return extend(ColorSampler, {
      trace: trace
    });
  };

  if (global.ColorSampler) {
    throw new Error('ColorSampler has already been defined');
  } else {
    global.ColorSampler = _init_();
  };
})(typeof window === 'undefined' ? this : window);
