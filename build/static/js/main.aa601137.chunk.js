(this.webpackJsonpserumania=this.webpackJsonpserumania||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),m=a(4),s=a(14),u=a.n(s),i=a(15),o=a.n(i),d=function(e){var t=e.methods,a=e.setMethod;return l.a.createElement("div",null,t.map((function(e){return l.a.createElement("span",{key:e.name},l.a.createElement("button",{onClick:function(){return a(e)}},e.name)," ")})))},E=a(16),p=function(e){for(var t=[],a=new RegExp(" (d|dup)","i"),n=e[0].mass,l=1;e[l].mass!==n;)l++;for(var r=l,c=0;c<e.length;c+=r){for(var m=[],s=[],u=0;u<r;u++)m.push(e[c+u].concentration),s.push(e[c+u].units);if(t.length>1&&e[c].sample_name.match(a))t[t.length-1].dupValues=m;else{var i={id:e[c].sample_name,values:m,dupValues:null,units:s};t.push(i)}}return t},f=function(e,t){var a=0,n=e;if(e>10)for(;n>10;)n/=10,a+=1;else{if(e<1e-4&&e>0)return"0.00";if(e<10)for(;n<1&&n>0;)n<0&&(n*=-1),n*=10,a+=1}return e>10?(n=e/Math.pow(10,a),n*=Math.pow(10,t-1),n=Math.round(n),n=(n/=Math.pow(10,t-a-1)).toPrecision(t)):e<0?(n=e*Math.pow(10,t+1),n=Math.round(n),(n/=Math.pow(10,t+1)).toPrecision(t)):e<1?(n=e*Math.pow(10,a),n*=Math.pow(10,t-1),n=Math.round(n),n=(n/=Math.pow(10,t+a-1)).toPrecision(t)):n=e.toPrecision(t),n},h=function(e){var t=e.data,a=e.method,n=e.blank;return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("table",{className:"blankTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"firstCol"},"Sample Type"),a.elements.map((function(e,t){return l.a.createElement("th",{key:e},e+" ("+a.units[t]+")")})))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"firstCol"},t.id),t.values.map((function(e){return l.a.createElement("td",{key:e},f(e,a.sigFigs))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"firstCol"},"Below LOQ"),t.values.map((function(e,t){var a=n.LOQs[t],r=e<n.LOQs[t];return l.a.createElement("td",{key:e,className:a?r?"samplePass":"sampleFail":"sampleNeutral"},a?r?"Pass":"Check":"- - -")}))))))},_=function(e){var t=e.data,a=e.sigFigs,n=e.coloured;return l.a.createElement("table",{className:"sampleTable"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:n?"colouredRow":""},l.a.createElement("td",{className:"firstCol"},t.id),t.values.map((function(e,n){return l.a.createElement("td",{key:t.id+t.values[n]},f(e,a))})))))},y=function(e){var t=e.data,a=e.method,n=a.blanks[0].LOQs,r=a.sigFigs;return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("table",{className:"RMTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"firstCol"},"Sample ID"),a.elements.map((function(e,t){return l.a.createElement("th",{key:e},e+" ("+a.units[t]+")")})))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"firstCol"},t.id),t.values.map((function(e){return l.a.createElement("td",{key:e},f(e,r))}))),l.a.createElement("tr",{className:"thickBottomBorder"},l.a.createElement("td",{className:"firstCol"},t.id," DUP"),t.dupValues.map((function(e){return l.a.createElement("td",{key:e},f(e,r))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"firstCol"},"Average"),t.values.map((function(e,a){return l.a.createElement("td",{key:e},f((e+t.dupValues[a])/2,r))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"firstCol"},"RPD (%)"),t.values.map((function(e,r){var c=(e+t.dupValues[r])/2,m=(Math.abs(e-t.dupValues[r])/c*100).toFixed(1),s=e>n[r]&&n[r];return l.a.createElement("td",{className:s?m<a.duplicateTolerance?"samplePass":"sampleFail":"sampleNeutral",key:e+r},m)}))))),l.a.createElement("br",null))},b=function(e){var t=e.data,a=(e.elements,e.method);return l.a.createElement("div",null,l.a.createElement("h1",null,"Calibration Data"),l.a.createElement("table",{className:"calTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"firstCol"},"Concentration"),a.elements.map((function(e,t){return l.a.createElement("th",{key:e},e," (",a.units[t],")")})))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:e.id+t},l.a.createElement("td",{className:"firstCol"},e.id),e.values.map((function(e,t){return l.a.createElement("td",{key:e+t},f(e,a.sigFigs))})))})))),l.a.createElement("br",null),l.a.createElement("h1",null,"Sample Data"))},g=function(e){var t=e.elements,a=e.units;return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("table",{className:"sampleTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"firstCol"},"Sample ID"),t.map((function(e,t){return l.a.createElement("th",{key:e},e+" ("+a[t]+")")}))))))},v=function(e){var t=e.method;return l.a.createElement("div",null,l.a.createElement("h1",null,"Sequence Information - ",t.name),l.a.createElement("div",{className:"headerItem"},"Analyst: _________________________"),l.a.createElement("div",{className:"headerItem"},"Analysis Date: _________________________"),l.a.createElement("div",{className:"headerItem"},"Sequence ID: ______________________________________"),l.a.createElement("div",{className:"headerItem"},"Software Version: MassHunter v4.6"),l.a.createElement("div",{className:"headerItem"},"Autosampler Info: ESI prepFAST SC4"))},k=function(e){var t=e.data,a=e.checkStd,n=e.method,r=a.expectedValues,c=a.tolerance,m=n.sigFigs;return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("table",{className:"RMTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"firstCol"},"Sample Type"),n.elements.map((function(e,t){return l.a.createElement("th",{key:e},e," (ppb)")})))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"firstCol"},t.id),t.values.map((function(e,t){return e<1&&(e*=1e3),l.a.createElement("td",{key:e+t},f(e,m))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"firstCol"},"Within Range"),t.values.map((function(e,t){e<1&&(e*=1e3);var a=r[t]-r[t]*c,n=r[t]+r[t]*c,m=e>a&&e<n;return l.a.createElement("td",{className:m?"samplePass":"sampleFail",key:e+t}," ",m?"Yes":"No")}))))),l.a.createElement("br",null))},N=function(e){var t=e.data,a=e.material,n=e.method,r=a.rangesLow,c=a.rangesHigh;return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("table",{className:"RMTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"firstCol"},"Sample Type"),n.elements.map((function(e,t){return l.a.createElement("th",{key:e},e+" ("+n.units[t]+")")})))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"firstCol"},t.id),t.values.map((function(e,t){return l.a.createElement("td",{key:e+t},parseFloat(f(e,n.sigFigs)))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"firstCol"},"Within Range"),t.values.map((function(e,t){var n=a.rangesHigh[t],m=e>r[t]&&e<c[t];return l.a.createElement("td",{className:m?"samplePass":n?"sampleFail":"sampleNeutral",key:e+t}," ",m?"Yes":n?"No":"- - -")}))))),l.a.createElement("br",null))},C=function(e){var t=e.data,a=e.method,n=new RegExp("[0-9]{2}-[0-9]{6}-[0-9]{4}");return l.a.createElement("div",{className:"container"},l.a.createElement(E.a,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Agilent 7900 Reporting Application")),l.a.createElement(v,{method:a}),t[0].id&&t.map((function(e,r){var c=a.blanks.find((function(t){return t.name===e.id})),m=a.checkStds.find((function(t){return t.name===e.id})),s=a.referenceMaterials.find((function(t){return t.name===e.id})),u=e.id.match(n)&&e.dupValues,i=e.id.match(n);if("Cal Blank"===e.id){var o=t.slice(r,r+a.calStandards.length);return l.a.createElement(b,{data:o,key:r,method:a})}if(c)return l.a.createElement(h,{data:e,key:r,blank:c,method:a});if(m)return l.a.createElement(k,{data:e,key:r,checkStd:m,method:a});if(s)return l.a.createElement(N,{data:e,key:r,method:a,material:s});if(u)return l.a.createElement(y,{data:e,key:r,method:a});if(i){var d=t[r-1],E=t[r-1].id.match(n),p=t[r-1].dupValues;return!d||E&&!p?l.a.createElement(_,{data:e,key:r,sigFigs:a.sigFigs,coloured:r%2===1}):l.a.createElement("div",{key:e.id+r},l.a.createElement(g,{elements:a.elements,data:e,key:Date.now(),units:a.units}),l.a.createElement(_,{data:e,key:r,sigFigs:a.sigFigs,coloured:r%2===1}))}return null})))},S=function(e){var t=e.method;return t&&t.name?l.a.createElement("div",null,l.a.createElement("h2",null,t.name),l.a.createElement("h3",null,t.description),l.a.createElement("h4",null,"Percent RPD for duplicates: ",t.duplicateTolerance,l.a.createElement("br",null),"Number of significant figures on report: ",t.sigFigs),l.a.createElement("p",null,"Calibration Standard concentrations: ",t.calStandards.join(", ")),l.a.createElement("table",{style:{margin:"auto",minWidth:t.elements.length>5?"600px":"300px",borderCollapse:"collapse",textAlign:"center"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Elements"),t.elements.map((function(e){return l.a.createElement("th",{key:e},e)})))),l.a.createElement("tbody",null,l.a.createElement("tr",{style:{borderTop:"1px solid grey"}},l.a.createElement("td",null,"Units"),t.units.map((function(e,t){return l.a.createElement("td",{key:e+t},e)}))),t.blanks.map((function(e,t){return l.a.createElement("tr",{key:e.name+t,style:0===t?{borderTop:"1px solid grey"}:null},l.a.createElement("td",null,e.name," LOQs"),e.LOQs.map((function(e,t){return l.a.createElement("td",{key:t},e)})))})),t.checkStds.map((function(e,t){return l.a.createElement("tr",{key:e.name+t,style:0===t?{borderTop:"1px solid grey"}:null},l.a.createElement("td",null,e.name," expected"),e.expectedValues.map((function(e,t){return l.a.createElement("td",{key:t},e)})))}))),t.referenceMaterials.map((function(e,t){return l.a.createElement("tbody",{key:e.name},l.a.createElement("tr",{key:e.name+t,style:{borderTop:"1px solid grey"}},l.a.createElement("td",null,e.name," Low"),e.rangesLow.map((function(e,t){return l.a.createElement("td",{key:t},e)}))),l.a.createElement("tr",{style:{borderBottom:"1px solid grey"}},l.a.createElement("td",null,e.name," High"),e.rangesHigh.map((function(e,t){return l.a.createElement("td",{key:t},e)}))))})))):null},w=function e(){var t=Object(n.useState)(),a=Object(m.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)({}),i=Object(m.a)(s,2),E=i[0],f=i[1],h=Object(n.useState)(),_=Object(m.a)(h,2),y=_[0],b=_[1];Object(n.useEffect)((function(){o.a.get("".concat("http://localhost:3001","/api/methods")).then((function(e){return b(e.data)}))}),[]);var g=function(t){return c(p(t)),l.a.createElement(e,null)},v={header:!0,dynamicTyping:!0,skipEmptyLines:!0,transformHeader:function(e){return e.toLowerCase().replace(/\W/g,"_")}},k=function(){return l.a.createElement("div",{style:{textAlign:"center",paddingTop:"40px",fontWeight:"bold"}},l.a.createElement(u.a,{cssClass:"react-csv-input",label:"Select a method using buttons above, then choose your file.",onFileLoaded:g,parserOptions:v,inputStyle:{disabled:"true"}}))};return y?r?l.a.createElement(C,{data:r,method:E}):l.a.createElement("div",{className:"container"},l.a.createElement(d,{methods:y,setMethod:f}),l.a.createElement(k,null),E.name&&l.a.createElement("hr",null),l.a.createElement(S,{method:E})):l.a.createElement("div",null,"Loading..")};a(44);c.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.aa601137.chunk.js.map