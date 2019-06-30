export default function r(n,t){return void 0===n&&(n=[]),void 0===t&&(t=!0),n.reduce(function(n,c){return t&&Array.isArray(c)?n.concat(r(c,t)):n.concat(c)},[])}
//# sourceMappingURL=flatten.es.js.map
