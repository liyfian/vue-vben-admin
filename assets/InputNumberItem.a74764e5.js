import{d as e,a9 as t,h as s,o as n,i as a,j as i,l as r,a0 as o,aL as d}from"./index.ab86ea0e.js";import"./_stringToArray.c6e9c157.js";import"./domUtils.77ddbe1d.js";import{I as p}from"./index.09b61073.js";import"./index.6b7fc4eb.js";import"./index.d81018f6.js";import"./RightOutlined.a9c21d9a.js";import"./SettingOutlined.3a48cdd9.js";import"./useTimeout.5e8ddc88.js";import"./index.326fea2a.js";import"./animation.55bc8f11.js";import"./useScrollTo.f3400ee7.js";import"./useAttrs.6c248db9.js";import"./useHeaderSetting.9772060d.js";import{b as m}from"./index.a9d459f3.js";var u=e({name:"InputNumberItem",components:{InputNumber:p},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:s}=t("setting-input-number-item");return{prefixCls:s,handleChange:function(t){e.event&&m(e.event,t)}}}});const l=d("data-v-c7d8b828")(((e,t,d,p,m,u)=>{const l=s("InputNumber");return n(),a("div",{class:e.prefixCls},[i("span",null,r(e.title),1),i(l,o(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));u.render=l,u.__scopeId="data-v-c7d8b828";export default u;