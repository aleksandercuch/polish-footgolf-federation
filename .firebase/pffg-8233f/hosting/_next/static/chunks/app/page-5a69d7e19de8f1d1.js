(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{75991:function(a,e,t){"use strict";t.d(e,{Z:function(){return g}});var i=t(46750),n=t(40431),s=t(86006),l=t(63831),o=t(64933),r=t(23343),c=t(95457),j=a=>((a<1?5.11916*a**2:4.5*Math.log(a+1)+2)/100).toFixed(2),p=t(18006),m=t(4221),d=t(9078);function u(a){return(0,d.ZP)("MuiPaper",a)}(0,m.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=t(9268);let h=["className","component","elevation","square","variant"],b=a=>{let{square:e,elevation:t,variant:i,classes:n}=a,s={root:["root",i,!e&&"rounded","elevation"===i&&`elevation${t}`]};return(0,o.Z)(s,u,n)},x=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(a,e)=>{let{ownerState:t}=a;return[e.root,e[t.variant],!t.square&&e.rounded,"elevation"===t.variant&&e[`elevation${t.elevation}`]]}})(({theme:a,ownerState:e})=>{var t;return(0,n.Z)({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow")},!e.square&&{borderRadius:a.shape.borderRadius},"outlined"===e.variant&&{border:`1px solid ${(a.vars||a).palette.divider}`},"elevation"===e.variant&&(0,n.Z)({boxShadow:(a.vars||a).shadows[e.elevation]},!a.vars&&"dark"===a.palette.mode&&{backgroundImage:`linear-gradient(${(0,r.Fq)("#fff",j(e.elevation))}, ${(0,r.Fq)("#fff",j(e.elevation))})`},a.vars&&{backgroundImage:null==(t=a.vars.overlays)?void 0:t[e.elevation]}))}),y=s.forwardRef(function(a,e){let t=(0,p.Z)({props:a,name:"MuiPaper"}),{className:s,component:o="div",elevation:r=1,square:c=!1,variant:j="elevation"}=t,m=(0,i.Z)(t,h),d=(0,n.Z)({},t,{component:o,elevation:r,square:c,variant:j}),u=b(d);return(0,f.jsx)(x,(0,n.Z)({as:o,ownerState:d,className:(0,l.Z)(u.root,s),ref:e},m))});var g=y},14240:function(a,e,t){"use strict";t.d(e,{Z:function(){return z}});var i=t(46750),n=t(40431),s=t(86006),l=t(63831),o=t(86601),r=t(64933),c=t(95457),j=t(18006),p=t(78473),m=t(4221),d=t(9078);function u(a){return(0,d.ZP)("MuiTypography",a)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=t(9268);let h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=a=>{let{align:e,gutterBottom:t,noWrap:i,paragraph:n,variant:s,classes:l}=a,o={root:["root",s,"inherit"!==a.align&&`align${(0,p.Z)(e)}`,t&&"gutterBottom",i&&"noWrap",n&&"paragraph"]};return(0,r.Z)(o,u,l)},x=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,e)=>{let{ownerState:t}=a;return[e.root,t.variant&&e[t.variant],"inherit"!==t.align&&e[`align${(0,p.Z)(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})(({theme:a,ownerState:e})=>(0,n.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&a.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=a=>g[a]||a,v=s.forwardRef(function(a,e){let t=(0,j.Z)({props:a,name:"MuiTypography"}),s=k(t.color),r=(0,o.Z)((0,n.Z)({},t,{color:s})),{align:c="inherit",className:p,component:m,gutterBottom:d=!1,noWrap:u=!1,paragraph:g=!1,variant:v="body1",variantMapping:z=y}=r,T=(0,i.Z)(r,h),Z=(0,n.Z)({},r,{align:c,color:s,className:p,component:m,gutterBottom:d,noWrap:u,paragraph:g,variant:v,variantMapping:z}),w=m||(g?"p":z[v]||y[v])||"span",P=b(Z);return(0,f.jsx)(x,(0,n.Z)({as:w,ref:e,ownerState:Z,className:(0,l.Z)(P.root,p)},T))});var z=v},44074:function(a,e,t){Promise.resolve().then(t.bind(t,90511))},90511:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var i=t(9268),n=t(86006),s=t(64066),l=t(14240),o=t(75991);t(77875);let r=()=>(0,i.jsx)("div",{className:"main-fader",children:(0,i.jsx)("div",{className:"loader",children:(0,i.jsx)("svg",{viewBox:"0 0 866 866",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsxs)("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 164.83 151.5",children:[(0,i.jsx)("path",{className:"path-0",d:"M117.24,69.24A8,8,0,0,0,115.67,67c-4.88-4-9.8-7.89-14.86-11.62A4.93,4.93,0,0,0,96.93,55c-5.76,1.89-11.4,4.17-17.18,6a4.36,4.36,0,0,0-3.42,4.12c-1,6.89-2.1,13.76-3,20.66a4,4,0,0,0,1,3.07c5.12,4.36,10.39,8.61,15.68,12.76a3.62,3.62,0,0,0,2.92.75c6.29-2.66,12.52-5.47,18.71-8.36a3.49,3.49,0,0,0,1.68-2.19c1.34-7.25,2.54-14.55,3.9-22.58Z",fill:"#7ac53c"}),(0,i.jsx)("path",{className:"path-1",d:"M97.55,38.68A43.76,43.76,0,0,1,98,33.44c.41-2.36-.5-3.57-2.57-4.64C91.1,26.59,87,24,82.66,21.82a6.18,6.18,0,0,0-4-.71C73.45,22.55,68.32,24.25,63.22,26c-3.63,1.21-6.08,3.35-5.76,7.69a26.67,26.67,0,0,1-.6,4.92c-1.08,8.06-1.08,8.08,5.86,11.92,3.95,2.19,7.82,5.75,11.94,6.08s8.76-2.41,13.12-3.93c9.33-3.29,9.33-3.3,9.78-14Z",fill:"#7ac53c"}),(0,i.jsx)("path",{className:"path-2",d:"M66.11,126.56c5.91-.91,11.37-1.7,16.81-2.71a3.3,3.3,0,0,0,1.87-2.17c1-4.06,1.73-8.19,2.84-12.24.54-2-.11-3-1.55-4.15-5-4-9.9-8.12-15-12a6.19,6.19,0,0,0-4.15-1.1c-5.35.66-10.7,1.54-16,2.54A4,4,0,0,0,48.34,97a109.13,109.13,0,0,0-3,12.19,4.47,4.47,0,0,0,1.34,3.6c5.54,4.36,11.23,8.53,16.91,12.69a10.84,10.84,0,0,0,2.57,1.11Z",fill:"#7ac53c"}),(0,i.jsx)("path",{className:"path-3",d:"M127.42,104.12c4.1-2.1,8-3.93,11.72-6a6,6,0,0,0,2.27-3,58.22,58.22,0,0,0,3.18-29.92c-.26-1.7-8-7.28-9.71-6.85A5,5,0,0,0,133,59.65c-2.81,2.49-5.71,4.88-8.33,7.56a9.46,9.46,0,0,0-2.47,4.4c-1.29,6.49-2.38,13-3.35,19.55a5.73,5.73,0,0,0,.83,3.91c2.31,3.08,5,5.88,7.7,9Z",fill:"#7ac53c"}),(0,i.jsx)("path",{className:"path-4",d:"M52.58,29.89c-2.15-.36-3.78-.54-5.39-.9-2.83-.64-4.92.1-7,2.32A64.1,64.1,0,0,0,26.09,54.64c-2.64,7.92-2.62,7.84,5.15,10.87,1.76.69,2.73.45,3.93-1C39.79,59,44.54,53.65,49.22,48.2a4.2,4.2,0,0,0,1.13-2c.8-5.32,1.49-10.68,2.24-16.34Z",fill:"#7ac53c"}),(0,i.jsx)("path",{className:"path-5",fill:"#7ac53c",d:"M23,68.13c0,2.51,0,4.7,0,6.87a60.49,60.49,0,0,0,9.75,32.15c1.37,2.13,6.4,3,7,1.2,1.55-5,2.68-10.2,3.82-15.34.13-.58-.58-1.38-.94-2.06-2.51-4.77-5.47-9.38-7.45-14.37C32.94,71,28.22,69.84,23,68.13Z"}),(0,i.jsx)("path",{className:"path-6",fill:"#7ac53c",d:"M83.91,12.86c-.32.36-.66.71-1,1.07.9,1.13,1.57,2.62,2.73,3.33,4.71,2.84,9.56,5.48,14.39,8.1a9.29,9.29,0,0,0,3.13.83c5.45.69,10.89,1.38,16.35,1.94a10.41,10.41,0,0,0,3.07-.71c-11.48-9.9-24.26-14.61-38.71-14.56Z"}),(0,i.jsx)("path",{className:"path-7",fill:"#7ac53c",d:"M66.28,132.51c13.36,3.78,25.62,3.5,38-.9C91.68,129.59,79.36,128,66.28,132.51Z"}),(0,i.jsx)("path",{className:"path-8",fill:"#7ac53c",d:"M127.2,30.66l-1.27.37a18.58,18.58,0,0,0,1,3.08c3,5.52,6.21,10.89,8.89,16.54,1.34,2.83,3.41,3.82,6.49,4.9a60.38,60.38,0,0,0-15.12-24.9Z"}),(0,i.jsx)("path",{className:"bb-9",fill:"#7ac53c",d:"M117.35,125c5.58-2.32,16.9-13.84,18.1-19.2-2.41,1.46-5.18,2.36-6.78,4.23-4.21,5-7.89,10.37-11.32,15Z"})]})})})}),c=()=>{let a=[{id:"1",title:"Tomasz lub jeść placki i jest fajny",text:"Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"2",title:"Tomasz lub jeść placki i jest fajny",text:"Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"3",title:"Tomasz lub jeść placki i jest fajny",text:"Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"4",title:"Tomasz lub jeść placki i jest fajny",text:"Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"5",title:"Tomasz lub jeść placki i jest fajny",text:"Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"6",title:"Tomasz lub jeść placki i jest fajny",text:"Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date},{id:"7",title:"Tomasz lub jeść placki i jest fajny",text:"Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",image:"https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",date:new Date}],[e,t]=(0,n.useState)(a);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.ZP,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.jsx)(s.ZP,{item:!0,sx:{textAlign:"center",background:"linear-gradient(90deg, rgba(255,255,255,1) 0%, #005A9C 50%, rgba(255,255,255,1) 100%)",color:"#FFFFFF"},xs:8,mt:6,children:(0,i.jsx)(l.Z,{variant:"h3",component:"h2",mt:3,mb:3,children:"Aktualności"})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(s.ZP,{container:!0,direction:"row",alignItems:"flex-start",justifyContent:"center",sx:{rowGap:{xs:1,sm:0}},children:e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,sm:3,sx:{padding:{xs:"0",sm:"10px 10px 10px 0"}},children:(0,i.jsx)(o.Z,{children:(0,i.jsxs)(s.ZP,{container:!0,direction:"column",alignItems:"flex-start",justifyContent:"center",children:[(0,i.jsx)(s.ZP,{item:!0,xs:4,children:(0,i.jsx)("img",{src:e[0].image,alt:"post image",style:{height:"auto",width:"100%"}})}),(0,i.jsx)(s.ZP,{item:!0,xs:8,sx:{padding:"10px"},children:(0,i.jsxs)(s.ZP,{container:!0,direction:"column",alignItems:"fles-start",justifyContent:"flex-start",mt:5,gap:3,children:[(0,i.jsx)(s.ZP,{item:!0,children:(0,i.jsxs)(s.ZP,{container:!0,direction:"column",gap:2,children:[(0,i.jsx)(s.ZP,{item:!0,children:(0,i.jsx)(l.Z,{variant:"h4",component:"h3",children:e[0].title})}),(0,i.jsx)(s.ZP,{item:!0,children:(0,i.jsx)(l.Z,{variant:"caption",children:"22.10.2991"})})]})}),(0,i.jsx)(s.ZP,{item:!0,children:(0,i.jsx)(l.Z,{variant:"subtitle1",children:e[0].text.substring(0,100)+"..."})})]})})]})})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,sm:5,sx:{display:"flex",flexDirection:"column"},children:(0,i.jsx)(s.ZP,{container:!0,direction:"row",alignItems:"flex-start",justifyContent:"space-between",xs:12,children:e.slice(1).map(a=>(0,i.jsx)(s.ZP,{item:!0,xs:6,sm:4,sx:{padding:{xs:"0",sm:"10px"}},children:(0,i.jsx)(o.Z,{children:(0,i.jsxs)(s.ZP,{container:!0,direction:"column",alignItems:"flex-start",justifyContent:"center",sx:{padding:"10px"},children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)("img",{src:a.image,alt:"post image",style:{height:"auto",width:"100%"}})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(l.Z,{variant:"h6",component:"h4",children:a.title})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(l.Z,{variant:"caption",children:"22.10.2991"})})]})})},a.id))})})]}):(0,i.jsx)(s.ZP,{item:!0,children:(0,i.jsx)(r,{})})})})]})})};function j(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.ZP,{container:!0,direction:"row",alignItems:"center",children:(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(c,{})})})})}},77875:function(){}},function(a){a.O(0,[746,253,961,744],function(){return a(a.s=44074)}),_N_E=a.O()}]);