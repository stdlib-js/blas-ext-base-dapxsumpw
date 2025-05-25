"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(h,n){
var c=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function y(e,r,i,a,x){return e*r+c(e,i,a,x)}n.exports=y
});var v=u(function(k,p){
var f=require('@stdlib/strided-base-stride2offset/dist'),w=s();function j(e,r,i,a){return w(e,r,i,a,f(e,a))}p.exports=j
});var o=u(function(z,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=s();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),t,m=E(_(__dirname,"./native.js"));O(m)?t=b:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
