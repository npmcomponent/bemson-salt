/* Flow v0.X + genData v1.1 | github.com/bemson | (c) 2011, MIT */
function genData(a){var b=arguments,c=b.callee,d,e,f,g,h,i=[],j=[],k={},l,m,n,o=c,p;if(!(this instanceof c)){b[1]&&(i=typeof b[1]=="function"?[b[1]]:b[1]),f=i.length,b[2]&&(o=b[2]);function q(a,b){this.name=a,this.value=b}q.prototype=o.prototype,q.prototype.constructor=o,l=[["",a]];while(l.length){n=l.shift(),p=new q(n[0],n[1]),e=0,d={parent:0,omit:0,scan:1,exit:0},b=[p.name,p.value,n[2],j,d,k];while(e<f&&!d.exit)i[e++].apply(p,b);d.omit?p._OMIT=!0:j.push(p);if(d.exit)l=[];else{m=[];if(d.scan&&typeof p.value=="object"){h=d.parent&&(d.parent instanceof o||d.parent instanceof c)?d.parent:p;for(g in p.value)p.value.hasOwnProperty(g)&&m.push([g,p.value[g],h])}l=m.concat(l)}}return j}if(a){~{}.toString.call(b[1]).indexOf("y")&&(o=a,b=b[1]),i=i.concat([].slice.call(b));function r(a,b,d){var e=~{}.toString.call(b).indexOf("y");if(!(this instanceof r))return c(a,i.concat(b||[]),d?d:r);if(a)return new c(e?a:r,i.concat(e?b:[].slice.call(arguments)));return this}r.prototype=new o,r.prototype.constructor=o;return r}return this}
!function(a,b,c,d){function m(){}function n(){}function o(a){function b(b){var c=b&&b.toString(f);return typeof c=="object"&&(c.pkgs.filter(function(b){return b.name===a})[0]||{}).pkg||!1}function c(){}function d(){}return b.prototype=new n,b.init=b.dataKey=b.invalidKey=b.onBegin=b.onEnd=b.onTraverse=0,c.prototype=new m,m=c,b.proxy=c.prototype,b.state=d.prototype,h[a]=g.push({name:a,pkg:b,model:c,state:d})-1,b}function p(a){var b=j(a);return b[0].parentIndex=b[0].childIndex=0,b.unshift(j()[0]),b[0].children.push(1),b[0].name="_flow",b[0].index=0,b[0].depth=0,b[0].path="..//",b[0].firstChildIndex=b[0].lastChildIndex=1,b}function q(a,b,c){var d=this;typeof c!="object"&&(c={}),d.prgm=a,d.states=p(a),d.shared={id:++e,currentIndex:0,targetIndex:-1,go:function(a){var b=d.states[a];return b&&(d.target=b,d.shared.targetIndex=b.index),d.stop=0,d.go()},stop:function(){return d.stop=1,d.loop},post:function(a){switch(typeof a){case"function":return d.posts.push(a)-1;case"number":if(d.posts[a])return d.posts[a]=null,!0}return!1}},d.posts=[],d.current=d.states[0],d.target=d.loop=0,d.pkgs=g.map(function(a){function f(){}var e={name:a.name};return f.prototype=new a.pkg,e.pkg=new f,e.pkg.states=k(d.states,[],a.state),typeof a.pkg.init=="function"&&a.pkg.init.call(e.pkg,c),e.pkg.tank=d.shared,e.pkg.proxy=b,e})}function r(a,b){function h(a){return a===f?e:Object.prototype.toString.apply(this,arguments)}function i(){function a(){this.pkgs=c,this.toString=h}return a.prototype=new m,a}if(this instanceof arguments.callee){var c={},d=new(i()),e=new q(a instanceof m?a.toString(f).prgm:a,d,typeof b=="object"?b:{});return g.forEach(function(a){var b=i();b.prototype=new a.model,c[a.name]=new b}),d}throw new Error('Requires "new"')}var e=0,f={},g=[],h={},i=function(a,b,c){return b.length&&g.some(function(d){var e=d.pkg[a];switch(typeof e){case"function":return e(b,c);case"object":if(e instanceof RegExp)return e.test(b)}return!1})},j=new c(function(a,b,c,e,f){var g=this,h=i("invalidKey",a,b),j=i("dataKey",a,b);h||j?(f.omit=1,f.scan=0,j&&!h&&(c.data[a]=b)):(g.inContext=g.parentIndex=g.previousIndex=g.nextIndex=g.firstChildIndex=d,g.index=e.length+1,g.depth=c?c.depth+1:1,g.name=c?a:"_root",g.data={},g.path=c?c.path+a+"/":"//",g.children=[],c&&(g.parentIndex=c.index,c.children.length||(c.firstChildIndex=g.index),g.childIndex=c.children.push(g.index)-1,c.lastChildIndex=g.index,g.childIndex&&(g.previousIndex=c.children[g.childIndex-1],e[g.previousIndex-1].nextIndex=g.index)))}),k=new c(function(a,b,c,d,e){var f=this,g;if(!c)e.omit=1;else{e.scan=0;for(g in b)b.hasOwnProperty(g)&&g!=="inContext"&&(f[g]=b[g])}}),l=b.prototype;l.some||(l.some=function(a,b){for(var c=0,d=this.length;c<d;c++)if(a.call(b,this[c],c,this))return!0;return!1}),l.filter||(l.filter=function(a,b){var c=[],d=0,e=this.length,f;for(;d<e;d++)f=this[d],a.call(b,f,d,this)&&c.push(f);return c}),l.forEach||(l.forEach=function(a,b){for(var c=0,d=this.length;c<d;c++)a.call(b,this[c],c,this)}),l.map||(l.map=function(a,c){var d=0,e=this.length,f=new b(e);for(;d<e;d++)f[d]=a.call(c,this[d],d,this);return f}),m.prototype.constructor=r,n.prototype.inState=function(a){return a<this.states.length?!0:!1},q.prototype={go:function(){var a=this,b=a.states,c=a.shared,d,e=0,f=a.current,g=0,h=0,i;if(a.loop)return!!a.target;a.posts=[],a.loop=1,a.fire("Begin");while(a.loop)a.target&&!a.stop?(i=0,d=a.target.index-f.index,d?d>0&&f.index<2||!a.target.path.indexOf(f.path)?f.inContext?(g=0,h=f.firstChildIndex):(g=1,h=1,f.inContext=1):f.inContext?(g=1,h=2,f.inContext=0):(a.target.path.indexOf(b[f.parentIndex].path)&&(d=-1),h=d<0?4:3,f.lastEvent===2||f.lastEvent===h?(g=0,h=d>0?f.nextIndex:f.previousIndex||f.parentIndex):g=1):(g=1,h=f.inContext?0:1,f.inContext&&(a.target=0,c.targetIndex=-1),f.inContext=1),g?(f.lastEvent=h,e++,a.fire("Traverse",[h])):(f.lastEvent=0,f=a.current=b[h],c.currentIndex=h)):!i&&(a.stop||!a.target)?(i=1,a.fire("End")):a.loop=0;return a.posts.forEach(function(a){typeof a=="function"&&a()}),e},fire:function(a,b){b=b||[],b.unshift(a.toLowerCase()),a="on"+a,this.pkgs.forEach(function(c){var d=g[h[c.name]].pkg[a];typeof d=="function"&&d.apply(c.pkg,b)})}},r.pkg=function(a){return arguments.length?typeof a=="string"&&/\w/.test(a)?(h.hasOwnProperty(a)||o(a),g[h[a]].pkg):!1:g.map(function(a){return a.name})},a.Flow=r}(this,Array,genData);