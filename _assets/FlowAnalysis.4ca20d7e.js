let s=document.createElement("style");s.innerHTML=".flow-analysis{width:100%;background:#fff}.flow-analysis__left{padding:10px 20px!important;border-right:1px solid rgba(0,0,0,.06);border-radius:0}.flow-analysis__score{margin-top:20px;font-size:30px;line-height:38px;color:rgba(0,0,0,.85)}.flow-analysis__score span{font-size:20px;line-height:28px;color:rgba(0,0,0,.85)}.flow-analysis__rank{margin:16px 0;font-size:12px;line-height:20px;color:#7c8087}.flow-analysis__rank span{display:inline-block;margin-left:10px;color:#1c1d21}.flow-analysis__rs li{display:flex;line-height:28px;justify-content:space-between}.flow-analysis__rs li span:nth-child(1){font-size:14px;color:#1c1d21}.flow-analysis__rs li span:nth-child(2){font-size:16px;color:#1c1d21}",document.head.appendChild(s);import{a,ay as l,b_ as i,aM as n,b$ as e}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.71c323b3.js";import"./CheckOutlined.04ceadd9.js";import"./RightOutlined.5a1d395b.js";import"./types.e671a8d1.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import{T as t}from"./index.eff90745.js";import"./UpOutlined.10a785f5.js";import"./LeftOutlined.3c8aea2a.js";import{D as o}from"./index.02c7a5b0.js";import{P as r}from"./index.e828a213.js";import{a as p}from"./index.a5990709.js";import"./RightOutlined.b735e334.js";import"./useTimeout.261f68e1.js";import"./useECharts.37edcc22.js";import"./props.c31746e0.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";import d from"./TrendLine.20a6cb81.js";const c="flow-analysis";var m=a({name:"AnalysisFLow",setup(){const s=()=>l(i,null,(()=>l(n,null,l(e,{md:24,lg:8},(()=>l(p,{title:"整体流量评分",canExpan:!1,class:`${c}__left`},(()=>l("div",null,l("div",{class:`${c}__score`},"86.2",l("span",null,"分")),l("div",{class:`${c}__rank`},"排名",l("span",null,"前20%")),l(r,{percent:70,showInfo:!1,status:"active"}),l(o,null),l("ul",{class:`${c}__rs`},l("li",null,l("span",null,"平均分"),l("span",null,"77.5")),l("li",null,l("span",null,"最高分"),l("span",null,"99.5")),l("li",null,l("span",null,"最低分"),l("span",null,"56.5")))))))),l(e,{md:24,lg:16},(()=>l(p,{title:"整体流量趋势",canExpan:!1},(()=>l(d,null))))))));return()=>l(t,{class:c,"default-active-key":"1"},(()=>[l(t.TabPane,{key:"1",tab:"产品一"},(()=>s())),l(t.TabPane,{key:"2",tab:"产品二"},(()=>s())),l(t.TabPane,{key:"3",tab:"产品三"},(()=>s()))]))}});export default m;