"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=u(function(h,n){
var c=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function f(r,e,i,a,x){return r<=0?0:r*e+c(r,i,a,x)}n.exports=f
});var v=u(function(k,p){
var y=require('@stdlib/strided-base-stride2offset/dist'),w=s();function j(r,e,i,a){return w(r,e,i,a,y(r,a))}p.exports=j
});var o=u(function(z,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=s();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),t,m=E(_(__dirname,"./native.js"));O(m)?t=b:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
