import{a as e,i as o,o as i,j as s,k as r,w as t,p as a}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import"./index.74a2ce06.js";import"./Trigger.7f13f611.js";import"./omit.1a2731ea.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.fe7e1d24.js";import"./CheckOutlined.0d8b90fc.js";import"./index.43870d62.js";import{A as n}from"./index.68bab8b7.js";import"./colors.85a0501b.js";import"./RightOutlined.efab7f95.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.efb78f34.js";import"./index.fb7b7fcf.js";import"./index.a172b251.js";import"./index.121aaab0.js";import"./UpOutlined.a902a507.js";import"./index.207bd9d1.js";import"./index.1ed6e71f.js";import"./index.eb12d9aa.js";import"./index.82e6b05e.js";import"./index.1ec384e7.js";import"./CloseOutlined.5e877561.js";import"./FullscreenOutlined.5bf2d27d.js";import"./LoadingOutlined.fa8d08eb.js";import"./RightOutlined.c78ef51e.js";import"./useTimeout.92483bb5.js";import"./tsxHelper.32d36f09.js";import"./index.a793eec0.js";import"./domUtils.dd108ce8.js";import"./index.f02911a0.js";import"./animation.0e442f99.js";import"./useScrollTo.28ed3853.js";import"./useAttrs.24cb77cc.js";import"./index.7b7aac10.js";import"./index.445b644a.js";import"./useForm.8efc7ee5.js";import{a as d}from"./index.5422414d.js";import"./useWindowSizeFn.fea544b1.js";import l from"./Modal1.0448e33e.js";import p from"./Modal2.c8ce1af8.js";import m from"./Modal3.3b2eb7c2.js";import c from"./Modal4.a3904d45.js";var j=e({components:{Alert:n,Modal1:l,Modal2:p,Modal3:m,Modal4:c},setup(){const[e,{openModal:o,setModalProps:i}]=d(),[s,{openModal:r}]=d(),[t,{openModal:a}]=d(),[n,{openModal:l}]=d();return{register1:e,openModal1:o,register2:s,openModal2:r,register3:t,openModal3:a,register4:n,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const f={class:"px-10 py-4"},u=a("打开弹窗 默认可以拖动/全屏"),g=a("打开弹窗"),b=a("打开弹窗"),M=a("打开弹窗并传递数据");j.render=function(e,a,n,d,l,p){const m=o("Alert"),c=o("a-button"),j=o("Modal1"),x=o("Modal2"),y=o("Modal3"),R=o("Modal4");return i(),s("div",f,[r(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:t((()=>[u])),_:1},8,["onClick"]),r(m,{message:"内外同时同时显示隐藏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:t((()=>[g])),_:1},8,["onClick"]),r(m,{message:"自适应高度","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:t((()=>[b])),_:1},8,["onClick"]),r(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[M])),_:1},8,["onClick"]),r(j,{onRegister:e.register1},null,8,["onRegister"]),r(x,{onRegister:e.register2},null,8,["onRegister"]),r(y,{onRegister:e.register3},null,8,["onRegister"]),r(R,{onRegister:e.register4},null,8,["onRegister"])])};export default j;