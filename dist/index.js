"use strict";var R=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=R(function(T,I){
var g=require('@stdlib/math-base-special-floor/dist'),k=128;function _(e,r,n,v,o){var u,i,c,s,w,y,j,E,O,C,q,m,f;if(e<=0)return 0;if(e===1||v===0)return r+n[o];if(u=o,e<8){for(q=0,f=0;f<e;f++)q+=r+n[u],u+=v;return q}if(e<=k){for(i=r+n[u],c=r+n[u+v],s=r+n[u+2*v],w=r+n[u+3*v],y=r+n[u+4*v],j=r+n[u+5*v],E=r+n[u+6*v],O=r+n[u+7*v],u+=8*v,C=e%8,f=8;f<e-C;f+=8)i+=r+n[u],c+=r+n[u+v],s+=r+n[u+2*v],w+=r+n[u+3*v],y+=r+n[u+4*v],j+=r+n[u+5*v],E+=r+n[u+6*v],O+=r+n[u+7*v],u+=8*v;for(q=i+c+(s+w)+(y+j+(E+O)),f;f<e;f++)q+=r+n[u],u+=v;return q}return m=g(e/2),m-=m%8,_(m,r,n,v,u)+_(e-m,r,n,v,u+m*v)}I.exports=_
});var L=R(function(U,K){
var z=t();function A(e,r,n,v){var o,u,i;if(e<=0)return 0;if(e===1||v===0)return r+n[0];if(v<0?o=(1-e)*v:o=0,e<8){for(u=0,i=0;i<e;i++)u+=r+n[o],o+=v;return u}return z(e,r,n,v,o)}K.exports=A
});var Z=R(function(V,S){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=L(),F=t();D(M,"ndarray",F);S.exports=M
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),P=Z(),B,b=H(G(__dirname,"./native.js"));J(b)?B=P:B=b;module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
