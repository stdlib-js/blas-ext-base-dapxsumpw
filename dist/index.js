"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=u(function(h,n){
var c=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function f(e,r,a,i,x){return e<=0?0:e*r+c(e,a,i,x)}n.exports=f
});var v=u(function(k,p){
var y=require('@stdlib/strided-base-stride2offset/dist'),w=s();function j(e,r,a,i){return w(e,r,a,i,y(e,i))}p.exports=j
});var o=u(function(z,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=s();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),t,m=E(_(__dirname,"./native.js"));O(m)?t=b:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
