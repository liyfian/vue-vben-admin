import{P as t,k as e,a as o,ac as i,E as r,C as n,I as s,ad as l,G as a,ae as f,af as p,ag as u,ah as c,F as g,J as b,ai as d}from"./index.a4c995c9.js";import{T as h}from"./Trigger.a445e86a.js";var v={adjustX:1,adjustY:1},m=[0,0],y={left:{points:["cr","cl"],overflow:v,offset:[-4,0],targetOffset:m},right:{points:["cl","cr"],overflow:v,offset:[4,0],targetOffset:m},top:{points:["bc","tc"],overflow:v,offset:[0,-4],targetOffset:m},bottom:{points:["tc","bc"],overflow:v,offset:[0,4],targetOffset:m},topLeft:{points:["bl","tl"],overflow:v,offset:[0,-4],targetOffset:m},leftTop:{points:["tr","tl"],overflow:v,offset:[-4,0],targetOffset:m},topRight:{points:["br","tr"],overflow:v,offset:[0,-4],targetOffset:m},rightTop:{points:["tl","tr"],overflow:v,offset:[4,0],targetOffset:m},bottomRight:{points:["tr","br"],overflow:v,offset:[0,4],targetOffset:m},rightBottom:{points:["bl","br"],overflow:v,offset:[4,0],targetOffset:m},bottomLeft:{points:["tl","bl"],overflow:v,offset:[0,4],targetOffset:m},leftBottom:{points:["br","bl"],overflow:v,offset:[-4,0],targetOffset:m}},O={name:"Content",props:{prefixCls:t.string,overlay:t.any,trigger:t.any},updated:function(){var t=this.trigger;t&&t.forcePopupAlign()},render:function(){var t=this.overlay,o=this.prefixCls;return e("div",{class:"".concat(o,"-inner"),role:"tooltip"},["function"==typeof t?t():t])}};function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t}).apply(this,arguments)}function P(){}var w=o({name:"Tooltip",inheritAttrs:!1,props:{trigger:t.any.def(["hover"]),defaultVisible:t.looseBool,visible:t.looseBool,placement:t.string.def("right"),transitionName:t.oneOfType([t.string,t.object]),animation:t.any,afterVisibleChange:t.func.def((function(){})),overlay:t.any,overlayStyle:t.object,overlayClassName:t.string,prefixCls:t.string.def("rc-tooltip"),mouseEnterDelay:t.number.def(0),mouseLeaveDelay:t.number.def(.1),getTooltipContainer:t.func,destroyTooltipOnHide:t.looseBool.def(!1),align:t.object.def((function(){return{}})),arrowContent:t.any.def(null),tipId:t.string,builtinPlacements:t.object},methods:{getPopupElement:function(){var t=this.$props,o=t.prefixCls,r=t.tipId;return[e("div",{class:"".concat(o,"-arrow"),key:"arrow"},[i(this,"arrowContent")]),e(O,{key:"content",trigger:this.$refs.trigger,prefixCls:o,id:r,overlay:i(this,"overlay")},null)]},getPopupDomNode:function(){return this.$refs.trigger.getPopupDomNode()}},render:function(t){var o=this,i=r(this),l=i.overlayClassName,a=i.trigger,f=i.mouseEnterDelay,p=i.mouseLeaveDelay,u=i.overlayStyle,c=i.prefixCls,g=i.afterVisibleChange,b=i.transitionName,d=i.animation,v=i.placement,m=i.align,O=i.destroyTooltipOnHide,w=i.defaultVisible,j=i.getTooltipContainer,T=C({},function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(o[i[r]]=t[i[r]])}return o}(i,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer"]));n(this,"visible")&&(T.popupVisible=this.$props.visible);var x=this.$attrs,A=C(C(C({popupClassName:l,prefixCls:c,action:a,builtinPlacements:y,popupPlacement:v,popupAlign:m,getPopupContainer:j,afterPopupVisibleChange:g,popupTransitionName:b,popupAnimation:d,defaultPopupVisible:w,destroyPopupOnHide:O,mouseLeaveDelay:p,popupStyle:u,mouseEnterDelay:f},T),x),{onPopupVisibleChange:x.onVisibleChange||P,onPopupAlign:x.onPopupAlign||P,ref:"trigger",popup:this.getPopupElement()});return e(h,A,{default:function(){return[s(o)[0]]}})}});function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t}).apply(this,arguments)}var T={adjustX:1,adjustY:1},x={adjustX:0,adjustY:0},A=[0,0];function N(t){return"boolean"==typeof t?t?T:x:j(j({},x),t)}var V=t.oneOf(l("hover","focus","click","contextmenu")),B=function(){return{trigger:t.oneOfType([V,t.arrayOf(V)]).def("hover"),visible:t.looseBool,defaultVisible:t.looseBool,placement:t.oneOf(l("top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom")).def("top"),transitionName:t.string.def("zoom-big-fast"),overlayStyle:t.object.def((function(){return{}})),overlayClassName:t.string,openClassName:t.string,prefixCls:t.string,mouseEnterDelay:t.number.def(.1),mouseLeaveDelay:t.number.def(.1),getPopupContainer:t.func,arrowPointAtCenter:t.looseBool.def(!1),autoAdjustOverflow:t.oneOfType([t.looseBool,t.object]).def(!0),destroyTooltipOnHide:t.looseBool.def(!1),align:t.object.def((function(){return{}})),builtinPlacements:t.object,children:t.array,onVisibleChange:t.func,"onUpdate:visible":t.func}};function S(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function $(){return($=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t}).apply(this,arguments)}var E=d(o({name:"ATooltip",inheritAttrs:!1,props:$($({},B()),{title:t.VNodeChild}),emits:["update:visible","visibleChange"],setup:function(){return{configProvider:a("configProvider",b)}},data:function(){return{sVisible:!!this.$props.visible||!!this.$props.defaultVisible}},watch:{visible:function(t){this.sVisible=t}},methods:{handleVisibleChange:function(t){n(this,"visible")||(this.sVisible=!this.isNoTitle()&&t),this.isNoTitle()||(this.$emit("update:visible",t),this.$emit("visibleChange",t))},getPopupDomNode:function(){return this.$refs.tooltip.getPopupDomNode()},getPlacements:function(){var t=this.$props,e=t.builtinPlacements,o=t.arrowPointAtCenter,i=t.autoAdjustOverflow;return e||function(t){var e=t.arrowWidth,o=void 0===e?5:e,i=t.horizontalArrowShift,r=void 0===i?16:i,n=t.verticalArrowShift,s=void 0===n?12:n,l=t.autoAdjustOverflow,a=void 0===l||l,f={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(r+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(s+o)]},topRight:{points:["br","tc"],offset:[r+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(s+o)]},bottomRight:{points:["tr","bc"],offset:[r+o,4]},rightBottom:{points:["bl","cr"],offset:[4,s+o]},bottomLeft:{points:["tl","bc"],offset:[-(r+o),4]},leftBottom:{points:["br","cl"],offset:[-4,s+o]}};return Object.keys(f).forEach((function(e){f[e]=t.arrowPointAtCenter?j(j({},f[e]),{overflow:N(a),targetOffset:A}):j(j({},y[e]),{overflow:N(a)}),f[e].ignoreShake=!0})),f}({arrowPointAtCenter:o,verticalArrowShift:8,autoAdjustOverflow:i})},getDisabledCompatibleChildren:function(t){if(("object"===D(t.type)&&(!0===t.type.__ANT_BUTTON||!0===t.type.__ANT_SWITCH||!0===t.type.__ANT_CHECKBOX)||"button"===t.type)&&t.props&&(t.props.disabled||""===t.props.disabled)){var o=function(t,e){var o={},i=$({},t);return e.forEach((function(e){t&&e in t&&(o[e]=t[e],delete i[e])})),{picked:o,omitted:i}}(f(t),["position","left","right","top","bottom","float","display","zIndex"]),i=o.picked,r=o.omitted,n=$($({display:"inline-block"},i),{cursor:"not-allowed",width:t.props&&t.props.block?"100%":null}),s=$($({},r),{pointerEvents:"none"}),l=p(t,{style:s},!0);return e("span",{style:n},[l])}return t},isNoTitle:function(){var t=i(this,"title");return!t&&0!==t},getOverlay:function(){var t=i(this,"title");return 0===t?t:t||""},onPopupAlign:function(t,e){var o=this.getPlacements(),i=Object.keys(o).filter((function(t){return o[t].points[0]===e.points[0]&&o[t].points[1]===e.points[1]}))[0];if(i){var r=t.getBoundingClientRect(),n={top:"50%",left:"50%"};i.indexOf("top")>=0||i.indexOf("Bottom")>=0?n.top="".concat(r.height-e.offset[1],"px"):(i.indexOf("Top")>=0||i.indexOf("bottom")>=0)&&(n.top="".concat(-e.offset[1],"px")),i.indexOf("left")>=0||i.indexOf("Right")>=0?n.left="".concat(r.width-e.offset[0],"px"):(i.indexOf("right")>=0||i.indexOf("Left")>=0)&&(n.left="".concat(-e.offset[0],"px")),t.style.transformOrigin="".concat(n.left," ").concat(n.top)}}},render:function(){var t,o=this.$props,i=this.$data,r=this.$attrs,l=o.prefixCls,a=o.openClassName,f=o.getPopupContainer,b=this.configProvider.getPopupContainer,d=(0,this.configProvider.getPrefixCls)("tooltip",l),h=this.children||u(s(this));h=1===h.length?h[0]:h;var v=i.sVisible;if(!n(this,"visible")&&this.isNoTitle()&&(v=!1),!h)return null;var m=this.getDisabledCompatibleChildren(c(h)?h:e("span",null,[h])),y=g((S(t={},a||"".concat(d,"-open"),v),S(t,m.props&&m.props.class,m.props&&m.props.class),t)),O=$($($({},r),o),{prefixCls:d,getTooltipContainer:f||b,builtinPlacements:this.getPlacements(),overlay:this.getOverlay(),visible:v,ref:"tooltip",onVisibleChange:this.handleVisibleChange,onPopupAlign:this.onPopupAlign});return e(w,O,{default:function(){return[v?p(m,{class:y}):m]}})}}));export{E as T,B as a};