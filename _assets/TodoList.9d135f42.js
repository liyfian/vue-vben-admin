let t=document.createElement("style");t.innerHTML=".todo-list[data-v-352db18b]{position:relative}.todo-list__total[data-v-352db18b]{display:inline-block;width:20px;height:20px;font-size:12px;line-height:20px;color:#fff;text-align:center;background:rgba(255,0,0,.7);border-radius:50%}.todo-list__all[data-v-352db18b]{position:absolute;top:0;right:10px;height:56px;font-size:24px;line-height:56px;text-align:center;cursor:pointer}.todo-list__item[data-v-352db18b]{padding:8px}.todo-list__item-title[data-v-352db18b]{font-size:14px;font-weight:400;line-height:22px;color:#1c1d21}.todo-list__item-memo[data-v-352db18b]{font-size:12px;font-weight:400;line-height:22px;color:#7c8087}.todo-list__item-desc[data-v-352db18b]{font-size:12px;line-height:22px;color:#7c8087}",document.head.appendChild(t);import{k as e,v as i,cB as o,a as s,c$ as a,d0 as l,i as n,o as r,j as d,ad as p,aH as m,n as c,p as f,aS as b}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import"./index.74a2ce06.js";import"./Trigger.7f13f611.js";import"./omit.1a2731ea.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.fe7e1d24.js";import"./CheckOutlined.0d8b90fc.js";import"./colors.85a0501b.js";import"./RightOutlined.efab7f95.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.efb78f34.js";import{T as u}from"./index.cf20d4ea.js";import"./LeftOutlined.61f5ba5e.js";import{T as _}from"./index.1ed6e71f.js";import"./index.da5dce07.js";import"./zh_CN.0242bd16.js";import{L as j}from"./index.5edeab46.js";import{a as x}from"./index.1ec384e7.js";import"./RightOutlined.c78ef51e.js";import"./useTimeout.92483bb5.js";import"./tsxHelper.32d36f09.js";import"./index.a793eec0.js";import"./domUtils.dd108ce8.js";import"./index.f02911a0.js";import"./animation.0e442f99.js";import"./useScrollTo.28ed3853.js";import{t as g}from"./data.edc06832.js";var h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O=function(t,s){var a=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),o.forEach((function(e){v(t,e,i[e])}))}return t}({},t,s.attrs);return e(o,i(a,{icon:h}),null)};O.displayName="EllipsisOutlined",O.inheritAttrs=!1;var y=s({name:"TodoList",components:{CollapseContainer:x,List:j,ListItem:j.Item,ListItemMeta:j.Item.Meta,Tag:_,Tooltip:u,EllipsisOutlined:O},setup:()=>({todoList:g})});const T=b("data-v-352db18b");a("data-v-352db18b");const L=e("span",null,[f(" 待办事项 "),e("span",{class:"todo-list__total"},"30")],-1),w={class:"todo-list__item-title"},z={class:"todo-list__item-memo"},k={class:"todo-list__item-desc"},C=e("br",null,null,-1),I=f("待审批"),E={class:"todo-list__all"},M=f("查看更多");l();const S=T(((t,i,o,s,a,l)=>{const b=n("ListItemMeta"),u=n("Tag"),_=n("a-button"),j=n("ListItem"),x=n("List"),g=n("EllipsisOutlined"),h=n("Tooltip"),v=n("CollapseContainer");return r(),d(v,{class:"todo-list",title:"待办事项",canExpan:!1},{title:T((()=>[L])),default:T((()=>[e(x,null,{default:T((()=>[(r(!0),d(p,null,m(t.todoList,(t=>(r(),d(j,{key:t.id,class:"todo-list__item"},{default:T((()=>[e(b,null,{title:T((()=>[e("div",null,[e("span",w,c(t.title),1),e("span",z,c(t.memo),1)])])),description:T((()=>[e("div",k,[f(" 提交人："+c(t.sbmter)+" ",1),C,f(" 提交时间："+c(t.sbmtTime),1)])])),_:2},1024),e(_,{type:"link"},{default:T((()=>[e(u,{color:"blue"},{default:T((()=>[I])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),e("div",E,[e(h,{placement:"topRight"},{title:T((()=>[M])),default:T((()=>[e(g)])),_:1})])])),_:1})}));y.render=S,y.__scopeId="data-v-352db18b";export default y;