import{a as e,aR as o,u as t,i,o as s,j as r,k as a,w as n}from"./index.683ee02b.js";import"./xlsx.a48e520c.js";import"./Trigger.4a1012cb.js";import"./omit.2a33c03e.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.8bc64622.js";import{T as c}from"./index.e933223f.js";import"./index.9b3871aa.js";import"./CloseOutlined.05cd9c0c.js";import"./FullscreenOutlined.0c714ec6.js";import{L as l}from"./LockOutlined.bde70386.js";import"./RightOutlined.689336d5.js";import"./useTimeout.776a81ea.js";import"./tsxHelper.128c957b.js";import"./index.54e6c75c.js";import"./animation.ba961409.js";import"./useScrollTo.a28219ed.js";import"./useAttrs.694bc2f2.js";import{a as m}from"./index.46f31187.js";import"./useWindowSizeFn.da2edc3d.js";var p=e({name:"FullScreen",components:{LockOutlined:l,Tooltip:c,LockAction:o((()=>import("./LockModal.4cad3102.js")))},setup(){const{t:e}=t(),[o,{openModal:i}]=m();return{t:e,register:o,handleLock:function(){i(!0)}}}});p.render=function(e,o,t,c,l,m){const p=i("LockOutlined"),d=i("Tooltip"),u=i("LockAction");return s(),r("span",{onClick:o[1]||(o[1]=(...o)=>e.handleLock&&e.handleLock(...o))},[a(d,{title:e.t("layout.header.tooltipLock"),placement:"bottom",mouseEnterDelay:.5},{default:n((()=>[a(p)])),_:1},8,["title","mouseEnterDelay"]),a(u,{onRegister:e.register},null,8,["onRegister"])])};export default p;