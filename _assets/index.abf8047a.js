let e=document.createElement("style");e.innerHTML=".vben-layout-footer[data-v-6da14420]{color:rgba(0,0,0,.45);text-align:center}.vben-layout-footer__links[data-v-6da14420]{margin-bottom:8px}.vben-layout-footer__links a[data-v-6da14420]{color:rgba(0,0,0,.45)}.vben-layout-footer__links a[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}.vben-layout-footer__github[data-v-6da14420]{margin:0 30px}.vben-layout-footer__github[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}",document.head.appendChild(e);import{a as o,u as t,ap as i,au as a,s as r,ax as s,f as d,aA as n,c$ as p,d0 as m,i as l,o as f,j,k as c,n as b,m as x,aS as u}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import"./index.e0fe3925.js";import"./index.74a2ce06.js";import"./Trigger.7f13f611.js";import"./omit.1a2731ea.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.fe7e1d24.js";import"./CheckOutlined.0d8b90fc.js";import"./index.68bab8b7.js";import"./index.26f77126.js";import"./index.b8714956.js";import"./colors.85a0501b.js";import"./index.90460355.js";import"./RightOutlined.efab7f95.js";import{L as _}from"./index.b8122992.js";import"./index.c7bfccf1.js";import"./types.fdd51616.js";import"./index.ba7eec26.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.efb78f34.js";import"./_baseFor.f4e5f03f.js";import"./index.fb7b7fcf.js";import"./index.a172b251.js";import"./index.cf20d4ea.js";import"./index.121aaab0.js";import"./index.14fa0811.js";import"./UpOutlined.a902a507.js";import"./LeftOutlined.61f5ba5e.js";import"./index.207bd9d1.js";import"./index.42445ede.js";import"./index.1ed6e71f.js";import"./index.857a7cfa.js";import"./index.da5dce07.js";import"./zh_CN.0242bd16.js";import"./index.5edeab46.js";import"./index.9300ac5a.js";import"./index.7fc4f363.js";import"./index.82e6b05e.js";import"./CaretDownFilled.dbfbf103.js";import"./FileOutlined.9ed34eef.js";import"./index.f9310d17.js";import"./index.0dff3ac5.js";import"./index.1ec384e7.js";import{G as v}from"./GithubFilled.760e441f.js";import"./RightOutlined.c78ef51e.js";import"./index.73a4e103.js";import"./index.c215c08f.js";import"./useTimeout.92483bb5.js";import"./tsxHelper.32d36f09.js";import"./index.a793eec0.js";import"./domUtils.dd108ce8.js";import"./index.f02911a0.js";import"./animation.0e442f99.js";import"./useScrollTo.28ed3853.js";import"./index.7b7aac10.js";import"./index.445b644a.js";import"./useWindowSizeFn.fea544b1.js";import"./index.5a3a193b.js";import"./useHeaderSetting.6e8de748.js";import"./index.4399e437.js";import{D as g,G as h,S as y}from"./siteSetting.99cfbd47.js";var F=o({name:"LayoutFooter",components:{Footer:_.Footer,GithubFilled:v},setup(){const{t:e}=t(),{getShowFooter:o}=n(),{currentRoute:p}=i(),{prefixCls:m}=a("layout-footer");return{getShowLayoutFooter:r((()=>{var e;return d(o)&&!(null==(e=d(p).meta)?void 0:e.hiddenFooter)})),prefixCls:m,t:e,DOC_URL:g,GITHUB_URL:h,SITE_URL:y,openWindow:s}}});const C=u("data-v-6da14420");p("data-v-6da14420");const L=c("div",null,"Copyright ©2020 Vben Admin",-1);m();const S=C(((e,o,t,i,a,r)=>{const s=l("GithubFilled"),d=l("Footer");return e.getShowLayoutFooter?(f(),j(d,{key:0,class:e.prefixCls},{default:C((()=>[c("div",{class:`${e.prefixCls}__links`},[c("a",{onClick:o[1]||(o[1]=o=>e.openWindow(e.SITE_URL))},b(e.t("layout.footer.onlinePreview")),1),c(s,{onClick:o[2]||(o[2]=o=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),c("a",{onClick:o[3]||(o[3]=o=>e.openWindow(e.DOC_URL))},b(e.t("layout.footer.onlineDocument")),1)],2),L])),_:1},8,["class"])):x("v-if",!0)}));F.render=S,F.__scopeId="data-v-6da14420";export default F;