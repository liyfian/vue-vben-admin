import{d as t,u as e,h as s,o as i,i as o,w as r,j as a,a0 as n}from"./index.ab86ea0e.js";import"./_stringToArray.c6e9c157.js";import"./domUtils.77ddbe1d.js";import"./index.6b7fc4eb.js";import{_ as d}from"./index.86c70840.js";import"./FullscreenOutlined.e3f22a98.js";import"./RightOutlined.a9c21d9a.js";import"./useTimeout.5e8ddc88.js";import"./index.326fea2a.js";import"./animation.55bc8f11.js";import"./useScrollTo.f3400ee7.js";import"./useAttrs.6c248db9.js";import"./useWindowSizeFn.15cac271.js";import{D as c}from"./index.a9b9d966.js";import{u as m}from"./useDescription.d33cf1c1.js";import{getDescSchema as p}from"./data.a07d9ff8.js";var l=t({name:"ErrorLogDetailModal",components:{BasicModal:d,Description:c},props:{info:{type:Object,default:null}},setup(){const{t:t}=e(),[s]=m({column:2,schema:p()});return{register:s,useI18n:e,t:t}}});l.render=function(t,e,d,c,m,p){const l=s("Description"),u=s("BasicModal");return i(),o(u,n({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:r((()=>[a(l,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;