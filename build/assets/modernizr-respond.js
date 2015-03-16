!function(window,document,undefined){function is(obj,type){return typeof obj===type}function testRunner(){var featureNames,feature,aliasIdx,result,nameIdx,featureName,featureNameSplit;for(var featureIdx in tests){if(featureNames=[],feature=tests[featureIdx],feature.name&&(featureNames.push(feature.name.toLowerCase()),feature.options&&feature.options.aliases&&feature.options.aliases.length))for(aliasIdx=0;aliasIdx<feature.options.aliases.length;aliasIdx++)featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());for(result=is(feature.fn,"function")?feature.fn():feature.fn,nameIdx=0;nameIdx<featureNames.length;nameIdx++)featureName=featureNames[nameIdx],featureNameSplit=featureName.split("."),1===featureNameSplit.length?Modernizr[featureNameSplit[0]]=result:2===featureNameSplit.length&&(Modernizr[featureNameSplit[0]][featureNameSplit[1]]=result),classes.push((result?"":"no-")+featureNameSplit.join("-"))}}function setClasses(classes){var className=docElement.className,classPrefix=Modernizr._config.classPrefix||"",reJS=new RegExp("(^|\\s)"+classPrefix+"no-js(\\s|$)");className=className.replace(reJS,"$1"+classPrefix+"js$2"),Modernizr._config.enableClasses&&(className+=" "+classPrefix+classes.join(" "+classPrefix),docElement.className=className)}function addTest(feature,test){if("object"==typeof feature)for(var key in feature)hasOwnProp(feature,key)&&addTest(key,feature[key]);else{feature=feature.toLowerCase();var featureSplit=feature.split("."),last=Modernizr[featureSplit[0]];if(2==featureSplit.length&&(last=last[featureSplit[1]]),"undefined"!=typeof last)return Modernizr;test="function"==typeof test?test():test,1==featureSplit.length?Modernizr[featureSplit[0]]=test:2==featureSplit.length&&(Modernizr[featureSplit[0]][featureSplit[1]]=test),setClasses([(test?"":"no-")+featureSplit.join("-")]),Modernizr._trigger(feature,test)}return Modernizr}function contains(str,substr){return!!~(""+str).indexOf(substr)}function getBody(){var body=document.body;return body||(body=createElement("body"),body.fake=!0),body}function injectElementWithStyles(rule,callback,nodes,testnames){var style,ret,node,docOverflow,mod="modernizr",div=createElement("div"),body=getBody();if(parseInt(nodes,10))for(;nodes--;)node=createElement("div"),node.id=testnames?testnames[nodes]:mod+(nodes+1),div.appendChild(node);return style=["&#173;",'<style id="s',mod,'">',rule,"</style>"].join(""),div.id=mod,(body.fake?body:div).innerHTML+=style,body.appendChild(div),body.fake&&(body.style.background="",body.style.overflow="hidden",docOverflow=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(body)),ret=callback(div,rule),body.fake?(body.parentNode.removeChild(body),docElement.style.overflow=docOverflow,docElement.offsetHeight):div.parentNode.removeChild(div),!!ret}function domToHyphenated(name){return name.replace(/([A-Z])/g,function(str,m1){return"-"+m1.toLowerCase()}).replace(/^ms-/,"-ms-")}function nativeTestProps(props,value){var i=props.length;if("CSS"in window&&"supports"in window.CSS){for(;i--;)if(window.CSS.supports(domToHyphenated(props[i]),value))return!0;return!1}if("CSSSupportsRule"in window){for(var conditionText=[];i--;)conditionText.push("("+domToHyphenated(props[i])+":"+value+")");return conditionText=conditionText.join(" or "),injectElementWithStyles("@supports ("+conditionText+") { #modernizr { position: absolute; } }",function(node){return"absolute"==(window.getComputedStyle?getComputedStyle(node,null):node.currentStyle).position})}return undefined}function testProps(props,prefixed,value,skipValueTest){function cleanElems(){afterInit&&(delete mStyle.style,delete mStyle.modElem)}if(skipValueTest=is(skipValueTest,"undefined")?!1:skipValueTest,!is(value,"undefined")){var result=nativeTestProps(props,value);if(!is(result,"undefined"))return result}var afterInit,i,prop,before;mStyle.style||(afterInit=!0,mStyle.modElem=createElement("modernizr"),mStyle.style=mStyle.modElem.style);for(i in props)if(prop=props[i],before=mStyle.style[prop],!contains(prop,"-")&&mStyle.style[prop]!==undefined){if(skipValueTest||is(value,"undefined"))return cleanElems(),"pfx"==prefixed?prop:!0;try{mStyle.style[prop]=value}catch(e){}if(mStyle.style[prop]!=before)return cleanElems(),"pfx"==prefixed?prop:!0}return cleanElems(),!1}var tests=[],ModernizrProto={_version:"v3.0.0pre",_config:{classPrefix:"",enableClasses:!0},_q:[],on:function(test,cb){setTimeout(function(){cb(this[test])},0)},addTest:function(name,fn,options){tests.push({name:name,fn:fn,options:options})},addAsyncTest:function(fn){tests.push({name:null,fn:fn})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var hasOwnProp,classes=[],docElement=document.documentElement;!function(){var _hasOwnProperty={}.hasOwnProperty;hasOwnProp=is(_hasOwnProperty,"undefined")||is(_hasOwnProperty.call,"undefined")?function(object,property){return property in object&&is(object.constructor.prototype[property],"undefined")}:function(object,property){return _hasOwnProperty.call(object,property)}}(),ModernizrProto._l={},ModernizrProto.on=function(test,cb){this._l[test]||(this._l[test]=[]),this._l[test].push(cb),Modernizr.hasOwnProperty(test)&&setTimeout(function(){Modernizr._trigger(test,Modernizr[test])},0)},ModernizrProto._trigger=function(test,res){if(this._l[test]){var cbs=this._l[test];setTimeout(function(){var i,cb;for(i=0;i<cbs.length;i++)(cb=cbs[i])(res)},0),delete this._l[test]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest});var html5;!function(window,document){function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement("p"),parent=ownerDocument.getElementsByTagName("head")[0]||ownerDocument.documentElement;return p.innerHTML="x<style>"+cssText+"</style>",parent.insertBefore(p.lastChild,parent.firstChild)}function getElements(){var elements=html5.elements;return"string"==typeof elements?elements.split(" "):elements}function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];return data||(data={},expanID++,ownerDocument[expando]=expanID,expandoData[expanID]=data),data}function createElement(nodeName,ownerDocument,data){if(ownerDocument||(ownerDocument=document),supportsUnknownElements)return ownerDocument.createElement(nodeName);data||(data=getExpandoData(ownerDocument));var node;return node=data.cache[nodeName]?data.cache[nodeName].cloneNode():saveClones.test(nodeName)?(data.cache[nodeName]=data.createElem(nodeName)).cloneNode():data.createElem(nodeName),node.canHaveChildren&&!reSkip.test(nodeName)?data.frag.appendChild(node):node}function createDocumentFragment(ownerDocument,data){if(ownerDocument||(ownerDocument=document),supportsUnknownElements)return ownerDocument.createDocumentFragment();data=data||getExpandoData(ownerDocument);for(var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;l>i;i++)clone.createElement(elems[i]);return clone}function shivMethods(ownerDocument,data){data.cache||(data.cache={},data.createElem=ownerDocument.createElement,data.createFrag=ownerDocument.createDocumentFragment,data.frag=data.createFrag()),ownerDocument.createElement=function(nodeName){return html5.shivMethods?createElement(nodeName,ownerDocument,data):data.createElem(nodeName)},ownerDocument.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+getElements().join().replace(/\w+/g,function(nodeName){return data.createElem(nodeName),data.frag.createElement(nodeName),'c("'+nodeName+'")'})+");return n}")(html5,data.frag)}function shivDocument(ownerDocument){ownerDocument||(ownerDocument=document);var data=getExpandoData(ownerDocument);return!html5.shivCSS||supportsHtml5Styles||data.hasCSS||(data.hasCSS=!!addStyleSheet(ownerDocument,"article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}")),supportsUnknownElements||shivMethods(ownerDocument,data),ownerDocument}function addWrappers(ownerDocument){for(var node,nodes=ownerDocument.getElementsByTagName("*"),index=nodes.length,reElements=RegExp("^(?:"+getElements().join("|")+")$","i"),result=[];index--;)node=nodes[index],reElements.test(node.nodeName)&&result.push(node.applyElement(createWrapper(node)));return result}function createWrapper(element){for(var node,nodes=element.attributes,index=nodes.length,wrapper=element.ownerDocument.createElement(shivNamespace+":"+element.nodeName);index--;)node=nodes[index],node.specified&&wrapper.setAttribute(node.nodeName,node.nodeValue);return wrapper.style.cssText=element.style.cssText,wrapper}function shivCssText(cssText){for(var pair,parts=cssText.split("{"),index=parts.length,reElements=RegExp("(^|[\\s,>+~])("+getElements().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),replacement="$1"+shivNamespace+"\\:$2";index--;)pair=parts[index]=parts[index].split("}"),pair[pair.length-1]=pair[pair.length-1].replace(reElements,replacement),parts[index]=pair.join("}");return parts.join("{")}function removeWrappers(wrappers){for(var index=wrappers.length;index--;)wrappers[index].removeNode()}function shivPrint(ownerDocument){function removeSheet(){clearTimeout(data._removeSheetTimer),shivedSheet&&shivedSheet.removeNode(!0),shivedSheet=null}var shivedSheet,wrappers,data=getExpandoData(ownerDocument),namespaces=ownerDocument.namespaces,ownerWindow=ownerDocument.parentWindow;return!supportsShivableSheets||ownerDocument.printShived?ownerDocument:("undefined"==typeof namespaces[shivNamespace]&&namespaces.add(shivNamespace),ownerWindow.attachEvent("onbeforeprint",function(){removeSheet();for(var imports,length,sheet,collection=ownerDocument.styleSheets,cssText=[],index=collection.length,sheets=Array(index);index--;)sheets[index]=collection[index];for(;sheet=sheets.pop();)if(!sheet.disabled&&reMedia.test(sheet.media)){try{imports=sheet.imports,length=imports.length}catch(er){length=0}for(index=0;length>index;index++)sheets.push(imports[index]);try{cssText.push(sheet.cssText)}catch(er){}}cssText=shivCssText(cssText.reverse().join("")),wrappers=addWrappers(ownerDocument),shivedSheet=addStyleSheet(ownerDocument,cssText)}),ownerWindow.attachEvent("onafterprint",function(){removeWrappers(wrappers),clearTimeout(data._removeSheetTimer),data._removeSheetTimer=setTimeout(removeSheet,500)}),ownerDocument.printShived=!0,ownerDocument)}var supportsHtml5Styles,supportsUnknownElements,version="3.6.2",options=window.html5||{},reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,expando="_html5shiv",expanID=0,expandoData={};!function(){try{var a=document.createElement("a");a.innerHTML="<xyz></xyz>",supportsHtml5Styles="hidden"in a,supportsUnknownElements=1==a.childNodes.length||function(){document.createElement("a");var frag=document.createDocumentFragment();return"undefined"==typeof frag.cloneNode||"undefined"==typeof frag.createDocumentFragment||"undefined"==typeof frag.createElement}()}catch(e){supportsHtml5Styles=!0,supportsUnknownElements=!0}}(),html5={elements:options.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:version,shivCSS:options.shivCSS!==!1,supportsUnknownElements:supportsUnknownElements,shivMethods:options.shivMethods!==!1,type:"default",shivDocument:shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment},window.html5=html5,shivDocument(document);var reMedia=/^$|\b(?:all|print)\b/,shivNamespace="html5shiv",supportsShivableSheets=!supportsUnknownElements&&function(){var docEl=document.documentElement;return!("undefined"==typeof document.namespaces||"undefined"==typeof document.parentWindow||"undefined"==typeof docEl.applyElement||"undefined"==typeof docEl.removeNode||"undefined"==typeof window.attachEvent)}();html5.type+=" print",html5.shivPrint=shivPrint,shivPrint(document)}(this,document);var createElement=function(){return document.createElement.apply(document,arguments)},modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style});var slice=(ModernizrProto.testProp=function(prop,value,useValue){return testProps([prop],undefined,value,useValue)},classes.slice);Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if("function"!=typeof target)throw new TypeError;var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F,result=target.apply(self,args.concat(slice.call(arguments)));return Object(result)===result?result:self}return target.apply(that,args.concat(slice.call(arguments)))};return bound}),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(this,document),!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),void(i=a.setTimeout(v,q));h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);