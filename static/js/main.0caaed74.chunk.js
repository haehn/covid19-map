(this["webpackJsonpcovid19-map"]=this["webpackJsonpcovid19-map"]||[]).push([[0],{32:function(e,t,a){e.exports=a(51)},37:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),s=a.n(l),o=(a(37),a(38),a(39),a(7)),c=a(21),i=a(22),m=a(30),d=a(23),h=a(31),u=a(6),f=a(12),p=a.n(f),v=a(8),E=a(24),y=a.n(E),b=[],g=[],k=[],_=0,w=0,S=0,j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={setTooltipContent:e.setTooltipContent,setTotConf:e.setTotConf,setTotRec:e.setTotRec,setTotDead:e.setTotDead,chart:"pie",factor:20,width:2,jhmode:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.parse("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv",{download:!0,complete:function(t){e.confirmed=[];var a=!0,n=67786,r=!0,l=!1,s=void 0;try{for(var o,c=t.data[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var i=o.value;if(a)a=!1;else{for(var m="",d=i.length-1;""===m&&d>0;)m=i[d],d-=1;""===m&&(m=0),(m=Number(m))>n&&(n=m);var h={markerOffset:0,name:(i[0]?i[0]+", "+i[1]:i[1])?i[0]?i[0]+", "+i[1]:i[1]:"",coordinates:[i[3],i[2]],size:m,val:m};_+=m,b.push(h)}}}catch(f){l=!0,s=f}finally{try{r||null==c.return||c.return()}finally{if(l)throw s}}e.state.setTotConf(_),console.log(n);for(var u=0;u<b.length;u++)b[u].size=(b[u].size-0)/(n-0);e.setState({})}}),p.a.parse("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv",{download:!0,complete:function(t){e.recovered=[];var a=!0,n=67786,r=!0,l=!1,s=void 0;try{for(var o,c=t.data[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var i=o.value;if(a)a=!1;else{for(var m="",d=i.length-1;""===m&&d>0;)m=i[d],d-=1;""===m&&(m=0),(m=Number(m))>n&&(n=m);var h={markerOffset:0,name:i[0]?i[0]+", "+i[1]:i[1],coordinates:[i[3],i[2]],size:m,val:m};w+=m,g.push(h)}}}catch(f){l=!0,s=f}finally{try{r||null==c.return||c.return()}finally{if(l)throw s}}e.state.setTotRec(w);for(var u=0;u<g.length;u++)g[u].size=(g[u].size-0)/(n-0);e.setState({})}}),p.a.parse("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv",{download:!0,complete:function(t){e.deaths=[];var a=!0,n=67786,r=!0,l=!1,s=void 0;try{for(var o,c=t.data[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var i=o.value;if(a)a=!1;else{for(var m="",d=i.length-1;""===m&&d>0;)m=i[d],d-=1;""===m&&(m=0),(m=Number(m))>n&&(n=m);var h={markerOffset:0,name:i[0]?i[0]+", "+i[1]:i[1],coordinates:[i[3],i[2]],size:m,val:m};S+=m,k.push(h)}}}catch(f){l=!0,s=f}finally{try{r||null==c.return||c.return()}finally{if(l)throw s}}e.state.setTotDead(S);for(var u=0;u<k.length;u++)k[u].size=(k[u].size-0)/(n-0);e.setState({})}})}},{key:"render",value:function(){var e=this,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement("div",{className:"ml-3 small controls"},r.a.createElement(v.a.Check,{inline:!0,className:"small",checked:"pie"===t.state.chart,label:"Circles",type:"radio",name:"a",id:"inline-radio-1",onClick:function(){t.setState({chart:"pie"})}}),r.a.createElement(v.a.Check,{inline:!0,className:"small",checked:"bar"===t.state.chart,label:"Bars",type:"radio",name:"a",id:"inline-radio-2",onClick:function(){t.setState({chart:"bar"})}}))),r.a.createElement("div",{className:"small controls2"},r.a.createElement(y.a,{value:this.state.factor,change:function(t){e.setState({factor:t.target.value,width:t.target.value/10})},step:1,max:100,min:1}),r.a.createElement(v.a.Check,{inline:!0,className:"small",checked:t.state.jhmode,label:"Johns Hopkins Mode",type:"checkbox",name:"a",id:"inline-checkbox-2",onClick:function(){t.setState({jhmode:!t.state.jhmode})}})),t.state.jhmode&&r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n          .container-fluid { background: black }\n        "}}),r.a.createElement(u.ComposableMap,{projection:"geoMercator",projectionConfig:{scale:200},height:window.innerWidth,width:window.innerHeight-50,style:{width:"100%",height:"100%"}},r.a.createElement(u.ZoomableGroup,{maxZoom:1e3},r.a.createElement(u.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-10m.json"},(function(a){return a.geographies.map((function(a){return r.a.createElement(u.Geography,{key:a.rsmKey,geography:a,onMouseEnter:function(){var t,n=a.properties,r=n.NAME,l=n.POP_EST;"Antarctica"!==r&&e.state.setTooltipContent("".concat(r," \u2014 ").concat((t=l)>1e9?Math.round(t/1e8)/10+"Bn":t>1e6?Math.round(t/1e5)/10+"M":Math.round(t/100)/10+"K"))},onMouseLeave:function(){e.state.setTooltipContent("")},style:{default:{fill:t.state.jhmode?"#333":"#ddd",outline:"none"},hover:{fill:t.state.jhmode?"#666":"#999",outline:"none"},pressed:{fill:t.state.jhmode?"#333":"#ddd",outline:"none"}}})}))})),b.map((function(e){var a=e.name,n=e.coordinates,l=e.markerOffset,s=e.size,o=e.val;return t.state.jhmode&&(s=Math.log(1e5*s)/25),r.a.createElement(u.Marker,{coordinates:n},r.a.createElement("rect",{style:"bar"===t.state.chart?{display:"block",hover:{fill:"#F00"}}:{display:"none",hover:{fill:"#F00"}},x:0*t.state.width-1.5*t.state.width,y:-s*t.state.factor,width:t.state.width,height:s*t.state.factor,fill:"#F008"}),r.a.createElement("circle",{style:"pie"===t.state.chart?{display:"block",hover:{fill:"#F00"}}:{display:"none",hover:{fill:"#F00"}},r:Math.sqrt(s)*t.state.factor,fill:"#F008"}),r.a.createElement("title",null,a+" - "+o+" confirmed"),r.a.createElement("text",{textAnchor:"middle",y:l,style:{fontSize:a.endsWith(", US")?"0.005em":"2px",fontFamily:"Arial",fill:"#5D5A6D33",pointerEvents:"none"}},a))})),!t.state.jhmode&&g.map((function(e){var a=e.name,n=e.coordinates,l=e.markerOffset,s=e.size,o=e.val;return t.state.jhmode&&(s=Math.log(1e5*s)/25),r.a.createElement(u.Marker,{coordinates:n},r.a.createElement("rect",{style:"bar"===t.state.chart?{display:"block",hover:{fill:"#0F0"}}:{display:"none",hover:{fill:"#0F0"}},x:1*t.state.width-1.5*t.state.width,y:-s*t.state.factor,width:t.state.width,height:s*t.state.factor,fill:"#0F08"}),r.a.createElement("circle",{style:"pie"===t.state.chart?{display:"block",hover:{fill:"#0F0"}}:{display:"none",hover:{fill:"#0F0"}},r:Math.sqrt(s)*t.state.factor,fill:"#0F08"}),r.a.createElement("title",null,a+" - "+o+" recovered"),r.a.createElement("text",{textAnchor:"middle",y:l,style:{fontSize:"1px",fontFamily:"system-ui",fill:"#5D5A6D",pointerEvents:"none"}}))})),!t.state.jhmode&&k.map((function(e){var a=e.name,n=e.coordinates,l=e.markerOffset,s=e.size,o=e.val;return t.state.jhmode&&(s=Math.log(1e5*s)/25),r.a.createElement(u.Marker,{coordinates:n},r.a.createElement("rect",{style:"bar"===t.state.chart?{display:"block",hover:{fill:"#000"}}:{display:"none",hover:{fill:"#000"}},x:2*t.state.width-1.5*t.state.width,y:-s*t.state.factor,width:t.state.width,height:s*t.state.factor,fill:"#0008"}),r.a.createElement("circle",{style:"pie"===t.state.chart?{display:"block",hover:{fill:"#000"}}:{display:"none",hover:{fill:"#000"}},r:Math.sqrt(s)*t.state.factor,fill:"#0008"}),r.a.createElement("title",null,a+" - "+o+" deceased"),r.a.createElement("text",{textAnchor:"middle",y:l,style:{fontSize:"1px",fontFamily:"system-ui",fill:"#5D5A6D33",pointerEvents:"none"}}))})))))}}]),t}(r.a.Component),x=Object(n.memo)(j),C=a(26),O=a(28),M=a(29),D=a(10),T=a(18),N=a(13),z=a(17),F=a(27),I=new Date,A=function(e){return e>1e9?Math.round(e/1e8)/10+"Bn":e>1e6?Math.round(e/1e5)/10+"M":Math.round(e/100)/10+"K"};var G=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(!1),c=Object(o.a)(s,2),i=c[0],m=c[1],d=Object(n.useState)(0),h=Object(o.a)(d,2),u=h[0],f=h[1],p=Object(n.useState)(0),v=Object(o.a)(p,2),E=v[0],y=v[1],b=Object(n.useState)(0),g=Object(o.a)(b,2),k=g[0],_=g[1];return[r.a.createElement(T.a,{bg:"light",fixed:"top",className:"p-0 pl-2",expand:"xs"},r.a.createElement(T.a.Brand,null,r.a.createElement("span",{className:"small"},"C",r.a.createElement(N.a,{icon:F.a}),"VID19 ")),r.a.createElement("span",null,r.a.createElement("span",{className:"small text-muted mr-3"},"Total:"),r.a.createElement("span",{className:"small text-danger mr-3"},A(u)),r.a.createElement("span",{className:"small text-success mr-3"},A(E)),r.a.createElement("span",{className:"small text-dark mr-3"},A(k)))),r.a.createElement(O.a,{fluid:!0,className:"w-100 h-100 p-0"},r.a.createElement(M.a,{noGutters:"true",className:"h-100"},r.a.createElement(D.a,{className:"h-100"},r.a.createElement(x,{setTooltipContent:l,style:{marginTop:"50px"},setTotConf:f,setTotRec:y,setTotDead:_}),r.a.createElement(C.a,null,a)))),r.a.createElement("div",{className:"info small text-muted",style:i?{display:"none"}:{display:"block"},onClick:function(){m(!0)}},r.a.createElement("span",{class:"text-danger"},"Red: confirmed"),r.a.createElement("br",null),r.a.createElement("span",{class:"text-success"},"Green: recovered"),r.a.createElement("br",null),r.a.createElement("span",{class:"text-dark"},"Black: deceased"),r.a.createElement("br",null),r.a.createElement("sub",null,"Using live data from ",r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series"},r.a.createElement(N.a,{icon:z.b})," Johns Hopkins repository"),r.a.createElement("br",null),"Last synchronized on ",I.toLocaleDateString()," at ",I.toLocaleTimeString(),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:"https://github.com/daniel-karl/covid19-map"},r.a.createElement(N.a,{icon:z.a})," Who made this?")),r.a.createElement("br",null),r.a.createElement("span",{className:"small text-danger"},"Hold <CTRL> key to zoom"))]};s.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0caaed74.chunk.js.map