import{a as e,i as s,o as t,j as o,w as i,k as r,J as a,p as l}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./omit.e94ccb8d.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import"./index.a5990709.js";import"./CloseOutlined.7bc225a7.js";import"./FullscreenOutlined.cb05ecf3.js";import"./RightOutlined.b735e334.js";import"./useTimeout.261f68e1.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";import"./useAttrs.ffe3ac1b.js";import{s as p,b as d}from"./index.c53a78c4.js";import"./useWindowSizeFn.0112e3aa.js";var c=e({components:{BasicModal:p},setup(){const[e,{closeModal:s,setModalProps:t}]=d();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const n=l("从内部关闭弹窗"),m=l("从内部修改title");c.render=function(e,l,p,d,c,j){const u=s("a-button"),f=s("BasicModal");return t(),o(f,a(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[r(u,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:i((()=>[n])),_:1},8,["onClick"]),r(u,{type:"primary",onClick:e.setModalProps},{default:i((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;