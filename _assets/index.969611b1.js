let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}",document.head.appendChild(e);import{a as t,i as a,o as n,j as o,k as i,w as s}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import"./DownOutlined.afd9afdf.js";import{A as r}from"./index.149c1c14.js";import"./RightOutlined.0310d066.js";import"./index.aeb0c844.js";import"./UpOutlined.060f27ef.js";import"./LeftOutlined.fa221124.js";import"./index.136541ed.js";import{S as d}from"./index.509e567c.js";import{L as l}from"./index.617c50b6.js";import m from"./TargetContent.6a82734a.js";var p=t({components:{LazyContainer:l,TargetContent:m,Skeleton:d,Alert:r},setup:()=>({})});const c={class:"p-4 lazy-base-demo"},f={class:"lazy-base-demo-wrap"},x=i("h1",null,"向下滚动",-1),u={class:"lazy-base-demo-box"};p.render=function(e,t,r,d,l,m){const p=a("Alert"),h=a("TargetContent"),j=a("Skeleton"),g=a("LazyContainer");return n(),o("div",c,[i(p,{message:"基础示例",description:"向下滚动到可见区域才会加载组件",type:"info","show-icon":""}),i("div",f,[x,i("div",u,[i(g,null,{skeleton:s((()=>[i(j,{rows:10})])),default:s((()=>[i(h)])),_:1})])])])};export default p;