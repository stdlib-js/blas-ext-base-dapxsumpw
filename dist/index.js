"use strict";var E=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var R=E(function(T,I){
var b=require('@stdlib/math-base-special-floor/dist'),g=128;function O(n,r,e,u,B){var v,i,s,m,c,y,w,j,t,C,f,q,o;if(n<=0)return 0;if(n===1||u===0)return r+e[B];if(v=B,n<8){for(f=0,o=0;o<n;o++)f+=r+e[v],v+=u;return f}if(n<=g){for(i=r+e[v],s=r+e[v+u],m=r+e[v+2*u],c=r+e[v+3*u],y=r+e[v+4*u],w=r+e[v+5*u],j=r+e[v+6*u],t=r+e[v+7*u],v+=8*u,C=n%8,o=8;o<n-C;o+=8)i+=r+e[v],s+=r+e[v+u],m+=r+e[v+2*u],c+=r+e[v+3*u],y+=r+e[v+4*u],w+=r+e[v+5*u],j+=r+e[v+6*u],t+=r+e[v+7*u],v+=8*u;for(f=i+s+(m+c)+(y+w+(j+t)),o;o<n;o++)f+=r+e[v],v+=u;return f}return q=b(n/2),q-=q%8,O(q,r,e,u,v)+O(n-q,r,e,u,v+q*u)}I.exports=O
});var L=E(function(U,K){
var k=require('@stdlib/strided-base-stride2offset/dist'),z=R();function A(n,r,e,u){return z(n,r,e,u,k(n,u))}K.exports=A
});var Z=E(function(V,S){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=L(),F=R();D(M,"ndarray",F);S.exports=M
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),P=Z(),_,a=H(G(__dirname,"./native.js"));J(a)?_=P:_=a;module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
