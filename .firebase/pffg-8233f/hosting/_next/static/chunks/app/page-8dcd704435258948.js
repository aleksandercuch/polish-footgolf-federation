(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{75991:function(e,t,i){"use strict";i.d(t,{Z:function(){return b}});var a=i(46750),o=i(40431),n=i(86006),r=i(63831),s=i(64933),l=i(23343),c=i(95457),d=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),u=i(18006),m=i(4221),p=i(9078);function h(e){return(0,p.ZP)("MuiPaper",e)}(0,m.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var x=i(9268);let g=["className","component","elevation","square","variant"],v=e=>{let{square:t,elevation:i,variant:a,classes:o}=e,n={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${i}`]};return(0,s.Z)(n,h,o)},f=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[i.variant],!i.square&&t.rounded,"elevation"===i.variant&&t[`elevation${i.elevation}`]]}})(({theme:e,ownerState:t})=>{var i;return(0,o.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,o.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.Fq)("#fff",d(t.elevation))}, ${(0,l.Fq)("#fff",d(t.elevation))})`},e.vars&&{backgroundImage:null==(i=e.vars.overlays)?void 0:i[t.elevation]}))}),j=n.forwardRef(function(e,t){let i=(0,u.Z)({props:e,name:"MuiPaper"}),{className:n,component:s="div",elevation:l=1,square:c=!1,variant:d="elevation"}=i,m=(0,a.Z)(i,g),p=(0,o.Z)({},i,{component:s,elevation:l,square:c,variant:d}),h=v(p);return(0,x.jsx)(f,(0,o.Z)({as:s,ownerState:p,className:(0,r.Z)(h.root,n),ref:t},m))});var b=j},14240:function(e,t,i){"use strict";i.d(t,{Z:function(){return w}});var a=i(46750),o=i(40431),n=i(86006),r=i(63831),s=i(86601),l=i(64933),c=i(95457),d=i(18006),u=i(78473),m=i(4221),p=i(9078);function h(e){return(0,p.ZP)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var x=i(9268);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=e=>{let{align:t,gutterBottom:i,noWrap:a,paragraph:o,variant:n,classes:r}=e,s={root:["root",n,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,i&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,l.Z)(s,h,r)},f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.variant&&t[i.variant],"inherit"!==i.align&&t[`align${(0,u.Z)(i.align)}`],i.noWrap&&t.noWrap,i.gutterBottom&&t.gutterBottom,i.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),j={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=e=>b[e]||e,y=n.forwardRef(function(e,t){let i=(0,d.Z)({props:e,name:"MuiTypography"}),n=Z(i.color),l=(0,s.Z)((0,o.Z)({},i,{color:n})),{align:c="inherit",className:u,component:m,gutterBottom:p=!1,noWrap:h=!1,paragraph:b=!1,variant:y="body1",variantMapping:w=j}=l,q=(0,a.Z)(l,g),P=(0,o.Z)({},l,{align:c,color:n,className:u,component:m,gutterBottom:p,noWrap:h,paragraph:b,variant:y,variantMapping:w}),k=m||(b?"p":w[y]||j[y])||"span",M=v(P);return(0,x.jsx)(f,(0,o.Z)({as:k,ref:t,ownerState:P,className:(0,r.Z)(M.root,u)},q))});var w=y},44074:function(e,t,i){Promise.resolve().then(i.bind(i,90511))},90511:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var a=i(9268),o=i(86006),n=i(64066),r=i(14240),s=i(75991);i(77875);let l=()=>(0,a.jsx)("div",{className:"main-fader",children:(0,a.jsx)("div",{className:"loader",children:(0,a.jsx)("svg",{viewBox:"0 0 866 866",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsxs)("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 164.83 151.5",children:[(0,a.jsx)("path",{className:"path-0",d:"M117.24,69.24A8,8,0,0,0,115.67,67c-4.88-4-9.8-7.89-14.86-11.62A4.93,4.93,0,0,0,96.93,55c-5.76,1.89-11.4,4.17-17.18,6a4.36,4.36,0,0,0-3.42,4.12c-1,6.89-2.1,13.76-3,20.66a4,4,0,0,0,1,3.07c5.12,4.36,10.39,8.61,15.68,12.76a3.62,3.62,0,0,0,2.92.75c6.29-2.66,12.52-5.47,18.71-8.36a3.49,3.49,0,0,0,1.68-2.19c1.34-7.25,2.54-14.55,3.9-22.58Z",fill:"#7ac53c"}),(0,a.jsx)("path",{className:"path-1",d:"M97.55,38.68A43.76,43.76,0,0,1,98,33.44c.41-2.36-.5-3.57-2.57-4.64C91.1,26.59,87,24,82.66,21.82a6.18,6.18,0,0,0-4-.71C73.45,22.55,68.32,24.25,63.22,26c-3.63,1.21-6.08,3.35-5.76,7.69a26.67,26.67,0,0,1-.6,4.92c-1.08,8.06-1.08,8.08,5.86,11.92,3.95,2.19,7.82,5.75,11.94,6.08s8.76-2.41,13.12-3.93c9.33-3.29,9.33-3.3,9.78-14Z",fill:"#7ac53c"}),(0,a.jsx)("path",{className:"path-2",d:"M66.11,126.56c5.91-.91,11.37-1.7,16.81-2.71a3.3,3.3,0,0,0,1.87-2.17c1-4.06,1.73-8.19,2.84-12.24.54-2-.11-3-1.55-4.15-5-4-9.9-8.12-15-12a6.19,6.19,0,0,0-4.15-1.1c-5.35.66-10.7,1.54-16,2.54A4,4,0,0,0,48.34,97a109.13,109.13,0,0,0-3,12.19,4.47,4.47,0,0,0,1.34,3.6c5.54,4.36,11.23,8.53,16.91,12.69a10.84,10.84,0,0,0,2.57,1.11Z",fill:"#7ac53c"}),(0,a.jsx)("path",{className:"path-3",d:"M127.42,104.12c4.1-2.1,8-3.93,11.72-6a6,6,0,0,0,2.27-3,58.22,58.22,0,0,0,3.18-29.92c-.26-1.7-8-7.28-9.71-6.85A5,5,0,0,0,133,59.65c-2.81,2.49-5.71,4.88-8.33,7.56a9.46,9.46,0,0,0-2.47,4.4c-1.29,6.49-2.38,13-3.35,19.55a5.73,5.73,0,0,0,.83,3.91c2.31,3.08,5,5.88,7.7,9Z",fill:"#7ac53c"}),(0,a.jsx)("path",{className:"path-4",d:"M52.58,29.89c-2.15-.36-3.78-.54-5.39-.9-2.83-.64-4.92.1-7,2.32A64.1,64.1,0,0,0,26.09,54.64c-2.64,7.92-2.62,7.84,5.15,10.87,1.76.69,2.73.45,3.93-1C39.79,59,44.54,53.65,49.22,48.2a4.2,4.2,0,0,0,1.13-2c.8-5.32,1.49-10.68,2.24-16.34Z",fill:"#7ac53c"}),(0,a.jsx)("path",{className:"path-5",fill:"#7ac53c",d:"M23,68.13c0,2.51,0,4.7,0,6.87a60.49,60.49,0,0,0,9.75,32.15c1.37,2.13,6.4,3,7,1.2,1.55-5,2.68-10.2,3.82-15.34.13-.58-.58-1.38-.94-2.06-2.51-4.77-5.47-9.38-7.45-14.37C32.94,71,28.22,69.84,23,68.13Z"}),(0,a.jsx)("path",{className:"path-6",fill:"#7ac53c",d:"M83.91,12.86c-.32.36-.66.71-1,1.07.9,1.13,1.57,2.62,2.73,3.33,4.71,2.84,9.56,5.48,14.39,8.1a9.29,9.29,0,0,0,3.13.83c5.45.69,10.89,1.38,16.35,1.94a10.41,10.41,0,0,0,3.07-.71c-11.48-9.9-24.26-14.61-38.71-14.56Z"}),(0,a.jsx)("path",{className:"path-7",fill:"#7ac53c",d:"M66.28,132.51c13.36,3.78,25.62,3.5,38-.9C91.68,129.59,79.36,128,66.28,132.51Z"}),(0,a.jsx)("path",{className:"path-8",fill:"#7ac53c",d:"M127.2,30.66l-1.27.37a18.58,18.58,0,0,0,1,3.08c3,5.52,6.21,10.89,8.89,16.54,1.34,2.83,3.41,3.82,6.49,4.9a60.38,60.38,0,0,0-15.12-24.9Z"}),(0,a.jsx)("path",{className:"bb-9",fill:"#7ac53c",d:"M117.35,125c5.58-2.32,16.9-13.84,18.1-19.2-2.41,1.46-5.18,2.36-6.78,4.23-4.21,5-7.89,10.37-11.32,15Z"})]})})})}),c=()=>{let e=[{id:"1",title:"Tytuł przykładowego posta",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"2",title:"Tytuł przykładowego posta",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"3",title:"Tytuł przykładowego posta",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"4",title:"Tytuł przykładowego posta",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"5",title:"Tytuł przykładowego posta",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"6",title:"Tytuł przykładowego posta",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"7",title:"Tytuł przykładowego posta",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date}],[t,i]=(0,o.useState)(e);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(n.ZP,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",children:[(0,a.jsx)(n.ZP,{item:!0,sx:{textAlign:"center",background:"linear-gradient(90deg, rgba(255,255,255,1) 0%, #005A9C 50%, rgba(255,255,255,1) 100%)",color:"#FFFFFF"},xs:8,mt:6,children:(0,a.jsx)(r.Z,{variant:"h3",component:"h2",mt:3,mb:3,children:"Aktualności"})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,children:(0,a.jsx)(n.ZP,{container:!0,direction:"row",alignItems:"flex-start",justifyContent:"center",sx:{rowGap:{xs:1,sm:0}},children:t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.ZP,{item:!0,xs:12,sm:3,sx:{padding:{xs:"0",sm:"10px 10px 10px 0"}},children:(0,a.jsx)(s.Z,{children:(0,a.jsxs)(n.ZP,{container:!0,direction:"column",alignItems:"flex-start",justifyContent:"center",children:[(0,a.jsx)(n.ZP,{item:!0,xs:4,children:(0,a.jsx)("img",{src:t[0].image,alt:"post image",style:{height:"auto",width:"100%"}})}),(0,a.jsx)(n.ZP,{item:!0,xs:8,sx:{padding:"10px"},children:(0,a.jsxs)(n.ZP,{container:!0,direction:"column",alignItems:"fles-start",justifyContent:"flex-start",mt:5,gap:3,children:[(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsxs)(n.ZP,{container:!0,direction:"column",gap:2,children:[(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(r.Z,{variant:"h4",component:"h3",children:t[0].title})}),(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(r.Z,{variant:"caption",children:"22.10.2991"})})]})}),(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(r.Z,{variant:"subtitle1",children:t[0].text.substring(0,100)+"..."})})]})})]})})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,sm:5,sx:{display:"flex",flexDirection:"column"},children:(0,a.jsx)(n.ZP,{container:!0,direction:"row",alignItems:"flex-start",justifyContent:"space-between",xs:12,children:t.slice(1).map(e=>(0,a.jsx)(n.ZP,{item:!0,xs:6,sm:4,sx:{padding:{xs:"0",sm:"10px"}},children:(0,a.jsx)(s.Z,{children:(0,a.jsxs)(n.ZP,{container:!0,direction:"column",alignItems:"flex-start",justifyContent:"center",sx:{padding:"10px"},children:[(0,a.jsx)(n.ZP,{item:!0,xs:12,children:(0,a.jsx)("img",{src:e.image,alt:"post image",style:{height:"auto",width:"100%"}})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,children:(0,a.jsx)(r.Z,{variant:"h6",component:"h4",children:e.title})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,children:(0,a.jsx)(r.Z,{variant:"caption",children:"22.10.2991"})})]})})},e.id))})})]}):(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(l,{})})})})]})})};function d(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.ZP,{container:!0,direction:"row",alignItems:"center",children:(0,a.jsx)(n.ZP,{item:!0,xs:12,children:(0,a.jsx)(c,{})})})})}},77875:function(){}},function(e){e.O(0,[746,253,961,744],function(){return e(e.s=44074)}),_N_E=e.O()}]);