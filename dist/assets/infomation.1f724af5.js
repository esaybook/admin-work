import{u as A}from"./index.d6148720.js";import{u as O}from"./useAppInfo.6235379b.js";import{d as V,l as z,q as x,e as L,r as o,o as d,c as p,w as e,a as s,k as r,G as a,H as _,U as c,i as h,O as k,F as w,ad as N,_ as S}from"./vendor.66b1fd00.js";var q="/assets/qrcode.0a69adee.jpg";const I={class:"text-lg"},U=a("\u83B7\u53D6\u6E90\u7801"),$=r("div",{class:"flex flex-col items-center justify-center"},[r("img",{src:q}),r("div",null,[a("\u5173\u6CE8\u516C\u4F17\u53F7\uFF1A"),r("strong",null,"\u77E5\u7801\u524D\u7AEF"),a("\u83B7\u53D6\u6E90\u7801")])],-1);var J=V({setup(G){const{version:C,dependencies:f,devDependencies:m}=O(),i=z(!1),j=A().state,b=x([]),v=x([]);return L(()=>{const y=Object.values(f);Object.keys(f).map((u,l)=>{b.push({label:u,value:y[l]})});const n=Object.values(m);Object.keys(m).map((u,l)=>{v.push({label:u,value:n[l]})})}),(y,n)=>{const u=o("n-button"),l=o("n-card"),D=o("n-descriptions-item"),F=o("n-descriptions"),g=o("n-icon"),B=o("n-modal"),E=o("n-space");return d(),p(E,{vertical:""},{default:e(()=>[s(l,null,{default:e(()=>[r("div",I,[a(" \u5F53\u524D\u7248\u672C\u53F7\uFF1A"+_(c(C))+" ",1),s(u,{class:"ml-4",type:"primary",onClick:n[0]||(n[0]=t=>i.value=!0)},{default:e(()=>[U]),_:1})])]),_:1}),s(l,{title:"\u4F9D\u8D56"},{default:e(()=>[s(F,{"label-placement":"top",bordered:"",column:4,"label-style":{"font-weight":"bold","font-size":"16px"}},{default:e(()=>[(d(!0),h(w,null,k(c(b),t=>(d(),p(D,{label:t.label,key:t.label},{default:e(()=>[a(_(t.value),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),s(l,{title:"\u5F00\u53D1\u4F9D\u8D56"},{default:e(()=>[s(F,{"label-placement":"top",bordered:"",column:4,"label-style":{"font-weight":"bold","font-size":"16px"}},{default:e(()=>[(d(!0),h(w,null,k(c(v),t=>(d(),p(D,{label:t.label,key:t.label},{default:e(()=>[a(_(t.value),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),s(B,{show:i.value,"onUpdate:show":n[2]||(n[2]=t=>i.value=t),"display-directive":"show",style:S({width:c(j).device==="mobile"?"80%":"40%"})},{default:e(()=>[s(l,{title:"\u83B7\u53D6\u6E90\u7801",bordered:!1,preset:"card"},{"header-extra":e(()=>[s(g,{size:"20"},{default:e(()=>[s(c(N),{onClick:n[1]||(n[1]=t=>i.value=!1)})]),_:1})]),default:e(()=>[$]),_:1})]),_:1},8,["show","style"])]),_:1})}}});export{J as default};
