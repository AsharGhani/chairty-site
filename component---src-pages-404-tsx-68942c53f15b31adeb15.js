(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(e,t,n){"use strict";n.r(t);var a=n(12),i=(n(0),n(168)),r=n(172),c=n(169),o=n(175);t.default=function(){return Object(a.d)(o.a,null,Object(a.d)(r.a,null,Object(a.d)(c.a,null,Object(a.d)("h1",null,"404: Page not found."),Object(a.d)("p",null,"You've hit the void. ",Object(a.d)(i.a,{to:"/"},"Go back.")))))}},166:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"f",function(){return i}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"g",function(){return o}),n.d(t,"c",function(){return d}),n.d(t,"e",function(){return l});var a={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",lightGrayWarm:"#fafaf0",slateBlue:"#335fc6",slateGreen:"#00be78",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000",orange:{bright:"#f15d00",light:"#ffd7bf",medium:"#ffa773"},blue:{soft:"#0094f1",light:"#bfe7ff"}},i={background1:a.white,background2:a.lightGrayWarm,headerBackground1:a.slateBlue,headerBackground2:a.slateGreen,headerText:a.white,navBarText:a.gray.dark,navBarHover:a.orange.medium,navBarItem:a.orange.light,navBarSubItem:a.gray.calm,activeItem:a.slateGreen},r={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},c={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},d={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},l={header:60}},168:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(12),i=n(0),r=n.n(i),c=n(5),o=n.n(c),d=n(43),l=n.n(d);n.d(t,"a",function(){return l.a});n(171);var s=r.a.createContext({});function M(e){var t=e.staticQueryData,n=e.data,i=e.query,c=e.render,o=n?n.data:t[i]&&t[i].data;return Object(a.d)(r.a.Fragment,null,o&&c(o),!o&&Object(a.d)("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,n=e.query,i=e.render,r=e.children;return Object(a.d)(s.Consumer,null,function(e){return Object(a.d)(M,{data:t,query:n,render:i||r,staticQueryData:e})})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},169:function(e,t,n){"use strict";var a=n(167),i=n(12),r=(n(0),n(166)),c=n(170),o=Object(a.a)("div",{target:"ezmy15q0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(c.a)(r.g.lg),"em;");t.a=function(e){var t=e.children,n=e.className;return Object(i.d)(o,{className:n},t)}},170:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(166),i=function(e){return e/a.c.fontSize.regular}},171:function(e,t,n){var a;e.exports=(a=n(174))&&a.default||a},172:function(e,t,n){"use strict";var a=n(167),i=n(12),r=(n(0),n(166)),c=Object(a.a)("div",{target:"e1oidec60"})("display:block;flex:1;position:relative;padding:",r.c.containerPadding,"rem;margin-bottom:3rem;");t.a=function(e){var t=e.children,n=e.className;return Object(i.d)(c,{className:n},t)}},173:function(e){e.exports={data:{site:{siteMetadata:{title:"IBAD UR RAHMAN",description:"Serving humanity by giving back to life",keywords:"charity, humanity, clean, water, poverty, alleviation, da'wah, daawah, daawa, dawa, health care"}}}}},174:function(e,t,n){"use strict";n.r(t);n(67);var a=n(0),i=n.n(a),r=n(5),c=n.n(r),o=n(68),d=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},175:function(e,t,n){"use strict";var a=n(12),i=n(173),r=n(0),c=n(176),o=n.n(c),d=n(168),l=(n(177),n(166)),s=n(170),M="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+l.c.fontSize.regular+"px !important;\n    line-height: "+l.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+l.d.sansSerif+";\n    color: "+l.b.black+";\n    background-color: "+l.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+l.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+l.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+l.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+l.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+l.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+l.b.black+";\n    font-weight: 600;\n    line-height: "+l.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+l.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+l.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+l.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+l.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+l.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+l.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+l.b.ui.light+";\n    color: "+l.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(s.a)(l.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",u=n(167),j=n(178),g=n(169);var b=l.f,y=Object(u.a)("div",{target:"ewzxbiy0"})("line-height:",l.e.header,";box-shadow:0 0 20px 5px ",b.background1,";border-radius:50px;width:",l.e.header+20,"px;height:",l.e.header+20,"px;background:",b.background1,";margin-right:20px;transition:0.3s;&:hover,&:focus{box-shadow:0 0 20px 10px ",b.background2,";}"),L=Object(u.a)("div",{target:"ewzxbiy1"})({name:"19gpgmc",styles:"display:flex;flex-direction:row;align-items:center;justify-content:center;height:100%;width:100%;transition:0.3s;&:hover,&:focus{opacity:0.8;}"}),h={name:"1sugwtq",styles:"padding-left:5px;"},N=function(){return Object(a.d)(y,null,Object(a.d)(L,null,Object(a.d)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ4Ni41NzJweCIgaGVpZ2h0PSI0ODYuNTcycHgiIHZpZXdCb3g9IjAgMCA0ODYuNTcyIDQ4Ni41NzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4Ni41NzIgNDg2LjU3MjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9Imljb25zXzE5XyI+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iIzMzNWZjNiIgZmlsdGVyPSJ1cmwoI2Ryb3BzaGFkb3cpOyIgZD0iTTM5MS42MDYsMzcwLjI5OGMtMjIuMjAxLDIxLjUxOS0xMDQuNjg5LDQzLjUyNy0xNjEuMTg1LDQyLjEwMWMtOS4yOTktMC4yMzMtMTIuMTc1LTE0LjM4NiwwLjcwMS0xNC42MTENCgkJCQljMjYuNDYyLTAuNDY0LDMwLjcxMSwyLjA1Nyw4Ni4wNzQtMTAuMTA2YzE0LjU3My0zLjIsMjcuODA3LTUuNTY5LDM1LjkwMS0xMS45MTdjMTIuNTM1LTkuODI2LDEwLjUyNy0zMy4zOC0xMS44NTctMzcuOTQ3DQoJCQkJYy0yNi42Ny01LjQ0Mi02Ni4wNjUsMC41NS05MC40NjIsMC41NWMtMjQuMzk1LDAtMzMuNzc0LTE3LjEtNjguOTM2LTE0Ljc2MmMtNTIuMDIxLDMuNDU4LTYyLjc2OSw4LjcwOS04NS4zLDEzLjA3N3YtMi4xMzcNCgkJCQljMC0xMC42NTMtOC4yNDgtMTkuMjkyLTE4LjQyLTE5LjI5Mkg1NS43ODhjLTEwLjE3NCwwLTE4LjQyLDguNjM5LTE4LjQyLDE5LjI5MnYxMDYuODIxYzAsMTAuNjUyLDguMjQ2LDE5LjI5LDE4LjQyLDE5LjI5DQoJCQkJaDIyLjMzN2MxMC4xNzIsMCwxOC40Mi04LjYzOCwxOC40Mi0xOS4yOXYtMS45MDhjMTcuOCwxMS40MDYsODAuNDQ0LDQ3Ljg2MiwxNTIuODc1LDQ3LjEwMw0KCQkJCWM4NS44MzctMC45MDQsMTk2LjkzOC03My4yOCwxOTkuNjQ4LTEwMy4wOTlDNDUxLjc3OCwzNTMuNjQ0LDQxMy44MDYsMzQ4Ljc3NywzOTEuNjA2LDM3MC4yOTh6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjMDBiZTc4IiBmaWx0ZXI9InVybCgjZHJvcHNoYWRvdyk7IiBkPSJNNDMwLjc4NCwyNS45MTVoLTIyLjMzN2MtMTAuMTczLDAtMTguNDIsOC42MzgtMTguNDIsMTkuMjl2MS45MDhDMzcyLjIyNywzNS43MDcsMzA5LjU4My0wLjc1MSwyMzcuMTUyLDAuMDEyDQoJCQkJQzE1MS4zMTUsMC45MTYsNDAuMjE2LDczLjI5MiwzNy41MDQsMTAzLjEwOWMtMi43MSwyOS44MTYsMzUuMjYzLDM0LjY4Myw1Ny40NjMsMTMuMTY1DQoJCQkJYzIyLjIwMS0yMS41MTksMTA0LjY4OC00My41MjcsMTYxLjE4Mi00Mi4xMDNjOS4zLDAuMjM0LDEyLjE3NiwxNC4zODUtMC42OTksMTQuNjEyYy0yNi40NjMsMC40NjYtMzAuNzEyLTIuMDU1LTg2LjA3NSwxMC4xMDgNCgkJCQljLTE0LjU3MywzLjItMjcuODA3LDUuNTY5LTM1LjkwMiwxMS45MTZjLTEyLjUzNyw5LjgyNS0xMC41MjcsMzMuMzc5LDExLjg1OCwzNy45NDhjMjYuNjcsNS40NDIsNjYuMDY2LTAuNTQ5LDkwLjQ2Mi0wLjU0OQ0KCQkJCWMyNC4zOTUsMCwzMy43NzQsMTcuMDk4LDY4LjkzNywxNC43NmM1Mi4wMjEtMy40NTksNjIuNzY5LTguNzA5LDg1LjMtMTMuMDc3djIuMTM3YzAsMTAuNjU0LDguMjQ3LDE5LjI5MiwxOC40MiwxOS4yOTJoMjIuMzM3DQoJCQkJYzEwLjE3NCwwLDE4LjQyLTguNjM4LDE4LjQyLTE5LjI5MlY0NS4yMDVDNDQ5LjIwNCwzNC41NTMsNDQwLjk1OCwyNS45MTUsNDMwLjc4NCwyNS45MTV6Ii8+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDogbWFyb29uIiBkPSJNMjgzLjQxNSwxNzYuOTI1Yy0xMi45MzgsMC0yNC42NjQsNS4xNjMtMzMuMjU0LDEzLjUzMWMtOC41OS04LjM2OC0yMC4zMTYtMTMuNTMxLTMzLjI1NC0xMy41MzENCgkJCQljLTI2LjMzMiwwLTQ3LjY3OCwyMS4zNDUtNDcuNjc4LDQ3LjY3N2MwLDEwLjIyMSwzLjIyOCwxOS42ODMsOC43MDQsMjcuNDQ0YzIuMTgxLDMuNDEyLDQuODAyLDYuNTE1LDcuNzg3LDkuMjI2bDQ5LjQ1Nyw0OS41MzINCgkJCQljNC45NTIsNC45NTMsOS45MDYsOS45MDYsMTQuODU5LDkuOTA2YzAuMDQxLDAsMC4wODMtMC4wMDcsMC4xMjQtMC4wMDdzMC4wODMsMC4wMDcsMC4xMjQsMC4wMDcNCgkJCQljNC45NTMsMCw5LjkwNi00Ljk1MywxNC44NTgtOS45MDZsNDkuNDU3LTQ5LjUzMmMyLjk4NS0yLjcxMSw1LjYwNi01LjgxMiw3Ljc4Ny05LjIyNmM1LjQ3OC03Ljc2Myw4LjcwNC0xNy4yMjQsOC43MDQtMjcuNDQ0DQoJCQkJQzMzMS4wOTMsMTk4LjI2OSwzMDkuNzQ3LDE3Ni45MjUsMjgzLjQxNSwxNzYuOTI1eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=",alt:"header image",height:.8*l.e.header,css:h}),";"))},m=l.f,w=Object(u.a)("nav",{target:"eexha3i0"})({name:"176acni",styles:"margin:0px;padding:0px;box-shadow:0 3px 6px rgba(0,0,0,0.2);width:100%;"}),O=Object(u.a)("ul",{target:"eexha3i1"})({name:"kts4i2",styles:"display:flex;flex-direction:row;justify-content:space-between;margin:0px;padding:0px;"}),f=Object(u.a)("li",{target:"eexha3i2"})({name:"1m2zdgs",styles:"display:block;list-style-type:none;text-transform:none;flex:1 0 auto;"}),D=Object(u.a)("ul",{target:"eexha3i3"})("z-index:5;display:none;position:absolute;box-shadow:0 2px 5px rgba(0,0,0,0.4);padding:0px;background:",m.background2,";&:hover{display:flex;}nav ul li:hover > &{display:block;}"),x=Object(u.a)("li",{target:"eexha3i4"})("list-style-type:none;color:",m.navBarText,";background:",m.background2,";&:hover{display:flex;}"),z=Object(u.a)(d.a,{target:"eexha3i5"})("width:100%;display:block;text-align:center;text-decoration:none;background:",m.background1,";color:",m.navBarText,';padding:1rem;&:hover{text-decoration:none;}&:after{content:"";display:block;width:100%;transform:scaleX(0);height:0.125rem;left:0.0625rem;background-color:',m.activeItem,";transform-origin:100% 50%;transition:transform 0.4s cubic-bezier(0.23,1,0.32,1);}&:focus:after,&:hover:after{transform:scaleX(1);transform-origin:0 50%;}& a{width:100%;}"),T=function(){return Object(a.d)(w,null,Object(a.d)(O,null,Object(a.d)(f,null,Object(a.d)(z,{to:"/About"},"About")),Object(a.d)(f,null,Object(a.d)(z,{to:"/Projects/"},"All Projects"),Object(a.d)(D,null,Object(a.d)(x,null,Object(a.d)(z,{to:"/Projects/Dawah"},"Da'wah")),Object(a.d)(x,null,Object(a.d)(z,{to:"/Projects/Dawah"},"Health Care")),Object(a.d)(x,null,Object(a.d)(z,{to:"/Projects/Water"},"Access to Water")),Object(a.d)(x,null,Object(a.d)(z,{to:"/Projects/PovertyAlleviation"},"Poverty Alleviation")),Object(a.d)(x,null,Object(a.d)(z,{to:"/Projects/Marriage"},"Marriage")),Object(a.d)(x,null,Object(a.d)(z,{to:"/Projects/Education"},"Education")),Object(a.d)(x,null,Object(a.d)(z,{to:"/Projects/MealISB"},"Meal ISB")))),Object(a.d)(f,null,Object(a.d)(z,{to:"/Current-Projects"},"Current Projects")),Object(a.d)(f,null,Object(a.d)(z,{to:"/Highlights"},"Highlights"))))},C=l.f,p=Object(u.a)("header",{target:"e1owcr2k0"})("height:",l.e.header,"px;padding:0 ",l.c.containerPadding,"rem;background-image:linear-gradient(45deg,",C.headerBackground1," 0%,",C.headerBackground2," 100%);color:",Object(j.a)(.5,l.b.white),";"),k=Object(u.a)(g.a,{target:"e1owcr2k1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),I=Object(u.a)(d.a,{target:"e1owcr2k2"})("color:",C.headerText,";font-size:1.5rem;font-weight:600;display:flex;flex-direction:row;align-items:center;&:hover,&:focus{text-decoration:none;}"),Q=Object(u.a)(g.a,{target:"e1owcr2k3"})("padding:0 ",l.c.containerPadding,"rem;display:flex;flex-direction:row;justify-content:center;"),v=Object(u.a)("div",{target:"e1owcr2k4"})("font-style:italic;font-size:",l.c.headingSizes.h3,";padding-left:1rem;"),S=function(e){var t=e.title,n=e.secondaryTitle;return Object(a.d)(r.Fragment,null,Object(a.d)(p,null,Object(a.d)(k,null,Object(a.d)(I,{to:"/"},Object(a.d)(N,null),t),Object(a.d)(v,null,n))),Object(a.d)(Q,null,Object(a.d)(T,null)))},E=Object(u.a)("div",{target:"e1aznzl80"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),Y=function(e){var t=e.children,n=e.className;return Object(a.d)(r.Fragment,null,Object(a.d)(a.a,{styles:function(){return Object(a.c)(M)}}),Object(a.d)(E,{className:n},t))},A=Object(u.a)("main",{target:"e1704rrp0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),J=function(e){var t=e.children,n=e.className;return Object(a.d)(A,{className:n},t)};t.a=function(e){var t=e.children;return Object(a.d)(d.b,{query:"3113665618",render:function(e){return Object(a.d)(Y,null,Object(a.d)(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),Object(a.d)(S,{title:e.site.siteMetadata.title,secondaryTitle:e.site.siteMetadata.description}),Object(a.d)(J,null,t))},data:i})}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-68942c53f15b31adeb15.js.map