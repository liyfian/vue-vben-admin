import{d as s,h as e,o as i,i as t,j as o,w as r,m as a}from"./index.ab86ea0e.js";import"./index.a7622831.js";import"./_stringToArray.c6e9c157.js";import"./domUtils.77ddbe1d.js";import"./index.1d647a6e.js";import"./index.09b61073.js";import{B as m}from"./index.6b7fc4eb.js";import"./CheckOutlined.04c29d08.js";import"./index.86c70840.js";import{_ as d,F as c}from"./index.c5ff829d.js";import"./FullscreenOutlined.e3f22a98.js";import"./RightOutlined.a9c21d9a.js";import"./SettingOutlined.3a48cdd9.js";import"./useTimeout.5e8ddc88.js";import"./index.326fea2a.js";import"./animation.55bc8f11.js";import"./useScrollTo.f3400ee7.js";import"./useAttrs.6c248db9.js";import"./useWindowSizeFn.15cac271.js";import"./index.8c6f99a8.js";import"./uuid.a6cec785.js";import"./download.b2f1bf52.js";import"./useForm.6db0bffb.js";import"./useSortable.25942234.js";import"./useExpose.34c51c0a.js";import{u as n}from"./useTable.fd923f8f.js";import{getCustomHeaderColumns as p}from"./tableData.7aa0192c.js";import{d as l}from"./table.a670c0e8.js";var j=s({components:{BasicTable:d,FormOutlined:c,BasicHelp:m},setup(){const[s]=n({title:"定高/头部自定义",api:l,columns:p(),canResize:!1,scroll:{y:100}});return{registerTable:s}}});const u={class:"p-4"},f=a(" 姓名 "),b=a(" 地址 ");j.render=function(s,a,m,d,c,n){const p=e("BasicHelp"),l=e("FormOutlined"),j=e("BasicTable");return i(),t("div",u,[o(j,{onRegister:s.registerTable},{customTitle:r((()=>[o("span",null,[f,o(p,{class:"ml-2",text:"姓名"})])])),customAddress:r((()=>[b,o(l,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default j;