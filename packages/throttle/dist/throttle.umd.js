!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):o.novaThrottle=t()}(this,function(){return function(o,t){if(void 0===t&&(t=250),"function"!=typeof o)throw new Error("function must be provided for trottle");var e=!1;return function(){for(var n=[],f=arguments.length;f--;)n[f]=arguments[f];e||(o.apply(void 0,n),e=!0,setTimeout(function(){e=!1},t))}}});
//# sourceMappingURL=throttle.umd.js.map