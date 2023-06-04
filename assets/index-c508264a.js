(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function k(){}function I(t){return t()}function S(){return Object.create(null)}function E(t){t.forEach(I)}function q(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function a(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function C(){return g(" ")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function K(t){return function(e){return e.preventDefault(),t.call(this,e)}}function D(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t){return Array.from(t.childNodes)}function W(t,e){e=""+e,t.data!==e&&(t.data=e)}function j(t,e){t.value=e??""}let L;function $(t){L=t}const _=[],M=[];let y=[];const B=[],z=Promise.resolve();let w=!1;function J(){w||(w=!0,z.then(F))}function O(t){y.push(t)}const x=new Set;let m=0;function F(){if(m!==0)return;const t=L;do{try{for(;m<_.length;){const e=_[m];m++,$(e),Q(e.$$)}}catch(e){throw _.length=0,m=0,e}for($(null),_.length=0,m=0;M.length;)M.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];x.has(n)||(x.add(n),n())}y.length=0}while(_.length);for(;B.length;)B.pop()();w=!1,x.clear(),$(t)}function Q(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function R(t){const e=[],n=[];y.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),y=e}const U=new Set;function V(t,e){t&&t.i&&(U.delete(t),t.i(e))}function X(t,e,n,o){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),o||O(()=>{const u=t.$$.on_mount.map(I).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...u):E(u),t.$$.on_mount=[]}),l.forEach(O)}function Y(t,e){const n=t.$$;n.fragment!==null&&(R(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){t.$$.dirty[0]===-1&&(_.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(t,e,n,o,r,l,u,c=[-1]){const f=L;$(t);const i=t.$$={fragment:null,ctx:[],props:l,update:k,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:S(),dirty:c,skip_bound:!1,root:e.target||f.$$.root};u&&u(i.root);let s=!1;if(i.ctx=n?n(t,e.props||{},(d,N,...A)=>{const P=A.length?A[0]:N;return i.ctx&&r(i.ctx[d],i.ctx[d]=P)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](P),s&&Z(t,d)),N}):[],i.update(),s=!0,E(i.before_update),i.fragment=o?o(i.ctx):!1,e.target){if(e.hydrate){const d=T(e.target);i.fragment&&i.fragment.l(d),d.forEach(h)}else i.fragment&&i.fragment.c();e.intro&&V(t.$$.fragment),X(t,e.target,e.anchor,e.customElement),F()}$(f)}class et{$destroy(){Y(this,1),this.$destroy=k}$on(e,n){if(!q(n))return k;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!H(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function nt(t){let e,n,o,r,l,u,c,f;return{c(){e=p("form"),n=p("label"),o=g(`What is your name?
        `),r=p("input"),l=C(),u=p("button"),u.textContent="Submit",D(u,"type","submit")},m(i,s){b(i,e,s),a(e,n),a(n,o),a(n,r),j(r,t[0]),a(e,l),a(e,u),c||(f=[v(r,"input",t[3]),v(e,"submit",K(t[4]))],c=!0)},p(i,s){s&1&&r.value!==i[0]&&j(r,i[0])},d(i){i&&h(e),c=!1,E(f)}}}function rt(t){let e,n,o,r,l,u,c,f;return{c(){e=p("p"),n=g("Hello, "),o=g(t[0]),r=g("!"),l=C(),u=p("button"),u.textContent="Change name",D(u,"type","button")},m(i,s){b(i,e,s),a(e,n),a(e,o),a(e,r),b(i,l,s),b(i,u,s),c||(f=v(u,"click",t[2]),c=!0)},p(i,s){s&1&&W(o,i[0])},d(i){i&&h(e),i&&h(l),i&&h(u),c=!1,f()}}}function ot(t){let e,n,o;function r(c,f){return c[1]&&c[0]?rt:nt}let l=r(t),u=l(t);return{c(){e=p("main"),n=p("h1"),n.textContent="My Game",o=C(),u.c()},m(c,f){b(c,e,f),a(e,n),a(e,o),u.m(e,null)},p(c,[f]){l===(l=r(c))&&u?u.p(c,f):(u.d(1),u=l(c),u&&(u.c(),u.m(e,null)))},i:k,o:k,d(c){c&&h(e),u.d()}}}function ut(t,e,n){let o=null,r=!1;const l=()=>n(1,r=!1);function u(){o=this.value,n(0,o)}return[o,r,l,u,()=>n(1,r=!0)]}class it extends et{constructor(e){super(),tt(this,e,ut,ot,G,{})}}new it({target:document.getElementById("app")});
