/* INIT */
var fs = require('fs');
var easyconvert = require('./index.js');
/* INIT */

// change with your file :
var IN = "test.html";
var OUT = "result.json";

var html = require('fs').readFileSync(IN);
var json = easyconvert.parse(html);
var result = JSON.stringify(json);
fs.writeFile(OUT, result, function(){});
