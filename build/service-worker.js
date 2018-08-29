"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","a677c1f5f9cef1794add815fefa3a0d4"],["/static/css/main.4a8a8ba5.css","736c22e7d6a19cdd72ffcd89e8af711d"],["/static/js/main.74799425.js","9bf0127d8bc12f485c19833e6fdd13d9"],["/static/media/concourse-reg.a13dda0e.woff2","a13dda0e809e02cb04d56a4a57309bae"],["/static/media/equity-bold.b2b12a59.woff2","b2b12a599cb4e728e63fc4a0a3c67388"]]; var cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""); var ignoreUrlParametersMatching=[/^utm_/];

 var addDirectoryIndex=function(e,t){var n=new URL(e);

returnn.pathname.slice(-1)==="/"&&(n.pathname+=t),n.toString()};

 var cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);

return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})};

 var createCacheKey=function(e,t,n,r){var a=new URL(e);

return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()};

 var isPathWhitelisted=function(e,t){if(e.length===0)return!0;var n=new URL(t).pathname;

return e.some(function(e){return n.match(e)})};

 var stripIgnoredUrlParameters=function(e,t){var n=new URL(e);

return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()};

 var hashParamName="_sw-precache"; var urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0]; var n=e[1]; var r=new URL(t,self.location); var a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);

return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});

return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);

return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if(e.request.method==="GET"){var t; var n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&e.request.mode==="navigate"&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});