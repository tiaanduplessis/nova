module.exports=function(t,o,i){var n;return void 0===o&&(o=250),void 0===i&&(i=!1),function(){for(var e=this,r=[],u=arguments.length;u--;)r[u]=arguments[u];var l=i&&!n;clearTimeout(n),n=setTimeout(function(){n=null,!i&&t.apply(e,r)},o),l&&t.apply(this,r)}};
//# sourceMappingURL=debounce.js.map
