export default function(t,i,n){var o;return void 0===i&&(i=250),void 0===n&&(n=!1),function(){for(var e=this,r=[],u=arguments.length;u--;)r[u]=arguments[u];var a=n&&!o;clearTimeout(o),o=setTimeout(function(){o=null,!n&&t.apply(e,r)},i),a&&t.apply(this,r)}}
//# sourceMappingURL=debounce.es.js.map
