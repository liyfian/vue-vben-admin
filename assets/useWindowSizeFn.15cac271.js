import{aJ as e,bg as n,bh as t}from"./index.ab86ea0e.js";function i(i,s=150,r){let a=()=>{i()};const[o,d]=e(a,s,r);a=o;const m=()=>{r&&r.immediate&&a(),window.addEventListener("resize",a)},w=()=>{window.removeEventListener("resize",a),d()};return n((()=>{m()})),t((()=>{w()})),[m,w]}export{i as u};