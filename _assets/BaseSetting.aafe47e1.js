let e=document.createElement("style");e.innerHTML=".change-avatar img[data-v-c0c2b920]{display:block;margin-bottom:15px;border-radius:50%}",document.head.appendChild(e);import{de as t,a as s,F as a,X as i,h as o,d0 as r,d1 as d,i as n,o as c,j as m,bi as p,k as l,p as u}from"./index.683ee02b.js";import"./xlsx.a48e520c.js";import"./index.654b393d.js";import"./Trigger.4a1012cb.js";import"./omit.2a33c03e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.3c6fc756.js";import"./CheckOutlined.067219d5.js";import{s as j}from"./index.b29cbd78.js";import"./colors.8524fb6a.js";import"./RightOutlined.d099b71b.js";import"./types.673b61b5.js";import{U as b}from"./index.d6355455.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.8bc64622.js";import"./_baseFor.f4e5f03f.js";import"./index.21384945.js";import"./index.a172b251.js";import"./index.e933223f.js";import"./index.dc57452d.js";import"./UpOutlined.58b411ed.js";import"./index.22c58738.js";import"./index.c919bcdb.js";import"./index.84aedb45.js";import"./index.30ca2de4.js";import"./index.6bba7ac2.js";import"./index.84128ec6.js";import"./FileOutlined.4b527edf.js";import{a as f}from"./index.9b3871aa.js";import"./CloseOutlined.05cd9c0c.js";import"./FullscreenOutlined.0c714ec6.js";import"./LoadingOutlined.9fecd770.js";import"./RightOutlined.689336d5.js";import"./useTimeout.776a81ea.js";import"./tsxHelper.128c957b.js";import"./index.54e6c75c.js";import"./animation.ba961409.js";import"./useScrollTo.a28219ed.js";import{_ as x}from"./header.0299ae16.js";import"./useAttrs.694bc2f2.js";import{s as g}from"./index.6f3ebae1.js";import"./index.46f31187.js";import"./useWindowSizeFn.da2edc3d.js";import{u as h}from"./useForm.c75537b1.js";import{b as _}from"./data.8adaf682.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var O=s({components:{BasicForm:j,CollapseContainer:f,Button:a,Upload:b,Icon:g},setup(){const{createMessage:e}=o(),[s,{setFieldsValue:a}]=h({labelWidth:120,schemas:_,showActionButtonGroup:!1});return i((async()=>{const e=await t.request({url:C.ACCOUNT_INFO,method:"GET"});a(e)})),{headerImg:x,register:s,handleSubmit:()=>{e.success("更新成功！")}}}});const F=p("data-v-c0c2b920");r("data-v-c0c2b920");const v={class:"change-avatar"},y=l("div",{class:"mb-2"},"头像",-1),I=u("更换头像 "),T=u("更新基本信息");d();const U=F(((e,t,s,a,i,o)=>{const r=n("BasicForm"),d=n("a-col"),p=n("Icon"),u=n("Button"),j=n("Upload"),b=n("a-row"),f=n("CollapseContainer");return c(),m(f,{title:"基本设置",canExpan:!1},{default:F((()=>[l(b,{gutter:24},{default:F((()=>[l(d,{span:14},{default:F((()=>[l(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:F((()=>[l("div",v,[y,l("img",{width:"140",src:e.headerImg},null,8,["src"]),l(j,{showUploadList:!1},{default:F((()=>[l(u,{type:"ghost",class:"ml-5"},{default:F((()=>[l(p,{icon:"feather:upload"}),I])),_:1})])),_:1})])])),_:1})])),_:1}),l(u,{type:"primary",onClick:e.handleSubmit},{default:F((()=>[T])),_:1},8,["onClick"])])),_:1})}));O.render=U,O.__scopeId="data-v-c0c2b920";export default O;