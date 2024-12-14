"use strict";var E=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var R=E(function(T,C){
var b=require('@stdlib/math-base-special-floor/dist'),g=128;function O(n,r,e,v,a){var u,i,s,m,c,y,t,w,j,B,f,q,o;if(n<=0)return 0;if(u=a,v===0)return n*(r+e[u]);if(n<8){for(f=0,o=0;o<n;o++)f+=r+e[u],u+=v;return f}if(n<=g){for(i=r+e[u],s=r+e[u+v],m=r+e[u+2*v],c=r+e[u+3*v],y=r+e[u+4*v],t=r+e[u+5*v],w=r+e[u+6*v],j=r+e[u+7*v],u+=8*v,B=n%8,o=8;o<n-B;o+=8)i+=r+e[u],s+=r+e[u+v],m+=r+e[u+2*v],c+=r+e[u+3*v],y+=r+e[u+4*v],t+=r+e[u+5*v],w+=r+e[u+6*v],j+=r+e[u+7*v],u+=8*v;for(f=i+s+(m+c)+(y+t+(w+j)),o;o<n;o++)f+=r+e[u],u+=v;return f}return q=b(n/2),q-=q%8,O(q,r,e,v,u)+O(n-q,r,e,v,u+q*v)}C.exports=O
});var K=E(function(U,I){
var k=require('@stdlib/strided-base-stride2offset/dist'),z=R();function A(n,r,e,v){return z(n,r,e,v,k(n,v))}I.exports=A
});var S=E(function(V,M){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=K(),F=R();D(L,"ndarray",F);M.exports=L
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),P=S(),_,Z=H(G(__dirname,"./native.js"));J(Z)?_=P:_=Z;module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
