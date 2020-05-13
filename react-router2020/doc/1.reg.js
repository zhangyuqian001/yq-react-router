//这是一个把路径转正则的库

let pathToRegExp = require('path-to-regexp');
let regxp = pathToRegExp('/home',[],{end:true});
console.log(regxp);//   /^\/home\/?$/i
console.log(regxp.test('/home'));
console.log(regxp.test('/home/2'));