(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(15),c(2)),n=c(1),r=(c(16),c(17),c(18),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},d=c(10),j=c(8),m=c(6),b=c.n(m),v=c(9),u=c.n(v);function h(e){return fetch("".concat("https://www.omdbapi.com/?apikey=cab9dc95","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}c(21);var O=function(e){var t=e.setMovies,c=e.movies,i=Object(n.useState)(""),a=Object(s.a)(i,2),o=a[0],m=a[1],v=Object(n.useState)(null),O=Object(s.a)(v,2),p=O[0],x=O[1],f=Object(n.useState)(!1),N=Object(s.a)(f,2),g=N[0],y=N[1],w=Object(n.useState)(!1),I=Object(s.a)(w,2),S=I[0],k=I[1],F=function(){var e=Object(j.a)(b.a.mark((function e(t){var c,i,a,s,n,r,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y(!0),e.prev=2,e.next=5,h(o);case 5:"Error"in(c=e.sent)?k(!0):(i=c.Poster,a=c.Title,s=c.Plot,n=c.imdbID,"https://via.placeholder.com/360x270.png?text=no%20preview",r="N/A"!==i?i:"https://via.placeholder.com/360x270.png?text=no%20preview",l="https://www.imdb.com/title/".concat(n),x({title:a,description:s,imgUrl:r,imdbUrl:l,imdbId:n})),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),new Error("Unexpected error".concat(e.t0));case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:F,children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:o,onChange:function(e){return t=e.target.value,m(t),void k(!1);var t}})}),S&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:u()("button","is-light",{"is-loading":g}),disabled:!o,children:p?"Search again":"Find a movie"})}),p&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){var e=c.every((function(e){return e.imdbId!==(null===p||void 0===p?void 0:p.imdbId)}));p&&e&&t([].concat(Object(d.a)(c),[p])),m(""),x(null)},children:"Add to the list"})})]})]}),p&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:p})]})]})},p=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(O,{setMovies:i,movies:c})})]})};a.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.807b9185.chunk.js.map