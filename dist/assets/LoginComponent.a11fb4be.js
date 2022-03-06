import{d as U,by as j,bz as B,bA as P,bB as M,bC as W,l as f,u as x,s as V,y as $,b as q,r as a,o as y,c as G,w as t,i as L,k as e,H as N,a as o,$ as D,a0 as T,G as p}from"./vendor.66b1fd00.js";import{a as E,u as R,p as H,l as O,D as F,b as J}from"./index.d6148720.js";import{u as K}from"./useAppInfo.6235379b.js";var Q="/assets/img_login_bg.88e461d1.png",I=U({name:"Login",components:{PhoneIcon:j,PasswordIcon:B,LogoGithub:P,LogoAlipay:M,LogoWechat:W},setup(){const{version:s}=K(),n=f("admin"),h=f("123456"),b=f(!0),u=f(!1),w=x(),r=V(),_=E(),m=$(),v=R();return{isMobileScreen:q(()=>v.state.device===F.MOBILE),username:n,password:h,autoLogin:b,loading:u,onLogin:()=>{u.value=!0,H({url:O,data:{username:n.value,password:h.value}}).then(({data:d})=>{_.saveUser(d).then(()=>{w.replace({path:r.query.redirect?r.query.redirect:"/"}).then(()=>{u.value=!1})})}).catch(d=>{u.value=!1,m.error(d.message)})},ImageBg1:Q,version:s}}});const l=s=>(D("data-v-ff4c5eca"),s=s(),T(),s),X={key:0,class:"flex login-container"},Y={class:"left"},Z=["src"],ee={class:"content-wrapper"},oe=l(()=>e("div",{class:"logo-wrapper"},[e("img",{src:J})],-1)),se=l(()=>e("div",{class:"title"},"Admin Work",-1)),te=l(()=>e("div",{class:"sub-title"},"Vue3 + Vite2 + Typescript + Naive UI",-1)),ne=l(()=>e("div",{class:"flex-1 flex justify-center items-center ttppii"}," \u751F\u6D3B\uFF0C\u5E94\u8BE5\u8FD8\u6709\u8BD7\u548C\u8FDC\u65B9 ",-1)),ae={class:"bottom-wrapper"},ie={class:"right"},ce={class:"form-wrapper"},le=l(()=>e("div",{class:"form-title"},"\u8D26\u53F7\u767B\u5F55",-1)),re={class:"item-wrapper"},de={class:"mt-4 item-wrapper"},pe={class:"mt-6"},ue=p(" \u767B\u5F55 "),_e={class:"mt-6 my-width flex-sub"},me={class:"flex justify-between"},ve=p("\u81EA\u52A8\u767B\u5F55"),fe=l(()=>e("a",{underline:!1,type:"primary"},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F",-1)),he={class:"third-login"},ge=p("\u7B2C\u4E09\u65B9\u767B\u5F55"),ye={key:1,class:"m-login-container"},be=l(()=>e("div",{class:"header"},[e("div",{class:"the-p"}," P "),e("div",{class:"mt-4 text-lg font-bold text-white"}," Admin Work ")],-1)),we={class:"content"},ke=p(" \u767B\u5F55 "),Le={class:"flex justify-between mt-4"},Ie=p("\u81EA\u52A8\u767B\u5F55"),Se=l(()=>e("a",{class:"text-white",type:"primary"},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F",-1)),ze={class:"footer"},Ae=p("\u7B2C\u4E09\u65B9\u767B\u5F55"),Ce={class:"flex justify-evenly"};function Ue(s,n,h,b,u,w){const r=a("n-input"),_=a("n-button"),m=a("n-checkbox"),v=a("n-divider"),g=a("LogoAlipay"),c=a("n-icon"),d=a("LogoGithub"),k=a("LogoWechat"),S=a("n-space"),z=a("PhoneIcon"),A=a("PasswordIcon"),C=a("n-el");return y(),G(C,null,{default:t(()=>[s.isMobileScreen?(y(),L("div",ye,[be,e("div",we,[o(r,{round:"",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D/\u624B\u673A\u53F7",size:"large",value:s.username,"onUpdate:value":n[3]||(n[3]=i=>s.username=i)},{prefix:t(()=>[o(c,null,{default:t(()=>[o(z)]),_:1})]),_:1},8,["value"]),o(r,{class:"mt-10",round:"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",size:"large",value:s.password,"onUpdate:value":n[4]||(n[4]=i=>s.password=i),type:"password","show-password-toggle":"",maxlength:8},{prefix:t(()=>[o(c,null,{default:t(()=>[o(A)]),_:1})]),_:1},8,["value"]),o(_,{class:"mt-20",round:"",type:"primary",block:"",loading:s.loading,onClick:s.onLogin},{default:t(()=>[ke]),_:1},8,["loading","onClick"]),e("div",Le,[o(m,{checked:s.autoLogin,"onUpdate:checked":n[5]||(n[5]=i=>s.autoLogin=i),color:"#fff"},{default:t(()=>[Ie]),_:1},8,["checked"]),Se])]),e("div",ze,[o(v,null,{default:t(()=>[Ae]),_:1}),e("div",Ce,[o(c,{color:"#c3c3c3",size:"30"},{default:t(()=>[o(g)]),_:1}),o(c,{color:"#c3c3c3",size:"30"},{default:t(()=>[o(d)]),_:1}),o(c,{color:"#c3c3c3",size:"30"},{default:t(()=>[o(k)]),_:1})])])])):(y(),L("div",X,[e("div",Y,[e("img",{src:s.ImageBg1},null,8,Z),e("div",ee,[oe,se,te,ne,e("div",ae,"Admin Work "+N(s.version)+" \xB7 Made by qingqingxuan",1)])]),e("div",ie,[e("div",ce,[le,e("div",re,[o(r,{value:s.username,"onUpdate:value":n[0]||(n[0]=i=>s.username=i),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D/\u624B\u673A\u53F7","prefix-icon":"el-icon-user",clearable:""},null,8,["value"])]),e("div",de,[o(r,{value:s.password,"onUpdate:value":n[1]||(n[1]=i=>s.password=i),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password",clearable:"","prefix-icon":"el-icon-lock"},null,8,["value"])]),e("div",pe,[o(_,{type:"primary",class:"login",loading:s.loading,onClick:s.onLogin},{default:t(()=>[ue]),_:1},8,["loading","onClick"])]),e("div",_e,[e("div",me,[o(m,{checked:s.autoLogin,"onUpdate:checked":n[2]||(n[2]=i=>s.autoLogin=i)},{default:t(()=>[ve]),_:1},8,["checked"]),fe])])]),e("div",he,[o(v,{dashed:""},{default:t(()=>[ge]),_:1}),o(S,{justify:"center"},{default:t(()=>[o(c,{color:"var(--primary-color)",size:"20"},{default:t(()=>[o(g)]),_:1}),o(c,{color:"var(--primary-color)",size:"20"},{default:t(()=>[o(d)]),_:1}),o(c,{color:"var(--primary-color)",size:"20"},{default:t(()=>[o(k)]),_:1})]),_:1})])])]))]),_:1})}I.render=Ue;I.__scopeId="data-v-ff4c5eca";export{I as default};
