(this["webpackJsonpyandex-music-token"]=this["webpackJsonpyandex-music-token"]||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),s=a.n(r),i=a(10),o=a(14),l=a(11),j=a(12),b=a(49),d=a(47),h=a(27),u=a(50),p=a(48),x=a(51),O=a(18),m=a(8),_=a(54),f=a(52),k=a(23),w=a(9),y=a.n(w),v=a(16),g="23cabbbdc6cd418abb4b39c32c41195d",C="53bc75238f0c4d08a118e51fe9203300",N=function e(){var t=this;Object(i.a)(this,e),this.passport_url="https://mobileproxy.passport.yandex.net",this.auth_sdk_params="app_id=ru.yandex.mobile.music&app_version_name=5.18&app_platform=iPad",this.generate_token_by_login_and_password=function(){var e=Object(v.a)(y.a.mark((function e(a,n,c,r){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=4;break}return e.next=3,t.start_authentication(a);case 3:c=e.sent;case 4:return e.prev=4,e.next=7,t.send_authentication_password(c,n,r);case 7:s=e.sent,e.next=17;break;case 10:if(e.prev=10,e.t0=e.catch(4),e.t0.captcha_image_url){e.next=16;break}throw e.t0;case 16:throw new S({captcha_image_url:e.t0.captcha_image_url,track_id:c});case 17:return e.next=19,t.generate_yandex_music_token_by_x_token(s);case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t,a,n,c){return e.apply(this,arguments)}}(),this.start_authentication=function(){var e=Object(v.a)(y.a.mark((function e(a){var n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t.passport_url,"/2/bundle/mobile/start"),c={client_id:g,client_secret:C,login:a,x_token_client_id:"c0ebe342af7d48fbbbfcf2d2eedb8f9e",x_token_client_secret:"ad0a908f0aa341a182a37ecd75bc319e",display_language:"ru"},e.next=4,t.post(n,c);case 4:if((r=e.sent).status&&"error"!==r.status){e.next=7;break}throw new T(r.errors.join("\n"));case 7:return e.abrupt("return",r.track_id);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.send_authentication_password=function(){var e=Object(v.a)(y.a.mark((function e(a,n,c){var r,s,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t.passport_url,"/1/bundle/mobile/auth/password"),s={track_id:a,password:n},c&&(s.captcha_answer=c),e.next=5,t.post(r,s);case 5:if(i=e.sent,"ok"!==(i.status||"error")){e.next=9;break}return e.abrupt("return",i.x_token);case 9:if(!i.errors.includes("password.not_matched")){e.next=13;break}throw new T("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c");case 13:if(!i.errors.includes("captcha.required")){e.next=17;break}throw new S({captcha_image_url:i.captcha_image_url,track_id:a});case 17:if(!i.errors.includes("captcha.not_shown")){e.next=21;break}throw new T("\u041a\u0430\u043f\u0447\u0430 \u043d\u0435 \u0431\u044b\u043b\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0430");case 21:throw new T(i.errors.join("\n"));case 22:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.generate_yandex_music_token_by_x_token=function(){var e=Object(v.a)(y.a.mark((function e(a){var n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t.passport_url,"/1/token/?").concat(t.auth_sdk_params),c={access_token:a,client_id:g,client_secret:C,grant_type:"x-token"},e.next=4,t.post(n,c);case 4:if(!(r=e.sent).access_token){e.next=7;break}return e.abrupt("return",r.access_token);case 7:throw new T(r.errors.join("\n"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.serialize=function(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push("".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(e[a])));return t.join("&")},this.post=function(){var e=Object(v.a)(y.a.mark((function e(a,n){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:t.serialize(n)});case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},S=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).body=e,n}return a}(Object(k.a)(Error)),T=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).body=e,n}return a}(Object(k.a)(Error)),B=a(1),I=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).api=new N,n.mirror="https://t.me/",n.handleChange=function(e){var t,a=e.target,c=a.name,r=a.value;n.setState(Object(m.a)(Object(m.a)({},n.state),{},(t={},Object(O.a)(t,c,r),Object(O.a)(t,"error",null),t)))},n.handleSubmit=function(e){e.preventDefault(),n.setState(Object(m.a)(Object(m.a)({},n.state),{},{captcha_image:void 0}));var t=n.state,a=t.track_id,c=t.login,r=t.password,s=t.captcha_answer;if(!c||!r)return n.setState(Object(m.a)(Object(m.a)({},n.state),{},{error:"\u0412\u044b \u0437\u0430\u0431\u044b\u043b\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}));n.api.generate_token_by_login_and_password(c,r,a,s).then((function(e){window.location.href="tg://resolve?domain=music_yandex_bot&start=".concat(e),n.setState(Object(m.a)(Object(m.a)({},n.state),{},{token:e}))})).catch((function(e){if(e instanceof S){var t=e.body,a=t.captcha_image_url,c=t.track_id;n.setState(Object(m.a)(Object(m.a)({},n.state),{},{captcha_image_url:a,track_id:c,error:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u043a\u0430\u043f\u0447\u0443"}))}else n.setState(Object(m.a)(Object(m.a)({},n.state),{},{error:e.body}))}))},n.state={track_id:null,login:"",password:"",error:null,token:null},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.captcha_image_url,a=e.error,n=e.token;return n?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("a",{href:"tg://resolve?domain=music_yandex_bot&start=".concat(n),children:Object(B.jsx)(_.a,{variant:"primary",block:!0,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0431\u043e\u0442\u0430"})}),Object(B.jsxs)("small",{className:"text-muted ",children:["\u0415\u0441\u043b\u0438 \u043a\u043d\u043e\u043f\u043a\u0430 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 -",Object(B.jsx)("a",{href:"".concat(this.mirror,"music_yandex_bot?start=").concat(n),children:" \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435"})]})]}):Object(B.jsxs)(f.a,{children:[Object(B.jsxs)(f.a.Group,{controlId:"formBasicEmail",children:[Object(B.jsx)(f.a.Label,{column:!1,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d, \u043f\u043e\u0447\u0442\u0443 \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d:"}),Object(B.jsx)(f.a.Control,{name:"login",onChange:this.handleChange,type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d, \u043f\u043e\u0447\u0442\u0443 \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"})]}),Object(B.jsxs)(f.a.Group,{controlId:"formBasicPassword",children:[Object(B.jsx)(f.a.Label,{column:!1,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(B.jsx)(f.a.Control,{name:"password",onChange:this.handleChange,type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),t&&Object(B.jsxs)(f.a.Group,{controlId:"formBasicCaptcha",children:[Object(B.jsxs)(d.a,{className:"mb-2",children:[Object(B.jsx)(h.a,{children:Object(B.jsx)(p.a,{fluid:!0,src:t})}),Object(B.jsx)(h.a,{className:"align-self-center",children:Object(B.jsx)(_.a,{className:"btn-block",type:"submit",onClick:this.handleSubmit,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})})]}),Object(B.jsx)(d.a,{children:Object(B.jsx)(h.a,{children:Object(B.jsx)(f.a.Control,{name:"captcha_answer",onChange:this.handleChange,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"})})})]}),Object(B.jsx)(_.a,{variant:"primary",type:"submit",block:!0,onClick:this.handleSubmit,children:"\u0412\u043e\u0439\u0442\u0438"}),a&&Object(B.jsx)("p",{className:"mt-1 text-danger",children:"".concat(a)})]})}}]),a}(c.a.Component),P=a(53),z=a(28),E=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(B.jsxs)(P.a,{className:"mb-4",children:[Object(B.jsx)(P.a.Header,{className:"text-center",children:Object(B.jsx)(z.a,{size:this.props.size,icon:this.props.icon})}),Object(B.jsxs)(P.a.Body,{children:[Object(B.jsx)(P.a.Title,{children:this.props.title}),Object(B.jsx)(P.a.Text,{children:this.props.text})]})]})}}]),a}(c.a.Component);E.defaultProps={size:"7x"};var G=E,M=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(B.jsxs)(b.a,{children:[Object(B.jsxs)(d.a,{className:"mt-5",children:[Object(B.jsx)(h.a,{className:"d-none d-xl-block col-md-3"}),Object(B.jsxs)(h.a,{children:[Object(B.jsx)(d.a,{children:Object(B.jsx)(b.a,{children:Object(B.jsxs)("h4",{children:["\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0443\u0437\u044b\u043a\u0430 - Telegram ",Object(B.jsx)(u.a,{variant:"primary",children:"Bot"})]})})}),Object(B.jsx)(d.a,{children:Object(B.jsx)(b.a,{children:Object(B.jsx)(p.a,{src:"logo.png",width:"100%",roundedCircle:!0})})}),Object(B.jsx)(d.a,{children:Object(B.jsxs)(b.a,{children:[Object(B.jsx)("p",{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043e\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0441\u043b\u0443\u0448\u0438\u0432\u0430\u0442\u044c \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442 \u0434\u043d\u044f \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0443\u043c\u043d\u044b\u0435 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b, \u0412\u0430\u0448\u0438 \u043b\u0438\u0447\u043d\u044b\u0435 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b, \u0430 \u0442\u0430\u043a \u0436\u0435 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u0442\u0440\u0435\u043a\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0430\u0439\u043a\u0430\u0442\u044c \u0438 \u0434\u0438\u0437\u043b\u0430\u0439\u043a\u0430\u0442\u044c \u0442\u0440\u0435\u043a\u0438, \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u043f\u0435\u0441\u0435\u043d, \u0438\u0441\u043a\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f, \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0438\u043c\u0438 \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0438 \u0441\u043b\u0443\u0448\u0430\u0442\u044c \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u043c\u0443\u0437\u044b\u043a\u0443 \u0432 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u0435 Telegram."}),Object(B.jsxs)("p",{children:["Trello \u0434\u043b\u044f \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439:",Object(B.jsx)("a",{href:"https://trello.com/b/D5f3kRxF",children:" Yandex.Music Telegram Bot"})]}),Object(B.jsxs)("p",{children:["\u041a\u0430\u043d\u0430\u043b \u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438 \u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c\u0438:",Object(B.jsx)("a",{href:"tg://resolve?domain=music_yandex_channel",children:" @music_yandex_channel"})]})]})})]}),Object(B.jsx)(h.a,{className:"d-none d-xl-block col-md-3"})]}),Object(B.jsxs)(d.a,{children:[Object(B.jsx)(h.a,{className:"d-none d-xl-block col-md-3"}),Object(B.jsx)(h.a,{children:Object(B.jsx)(I,{})}),Object(B.jsx)(h.a,{className:"d-none d-xl-block col-md-3"})]}),Object(B.jsx)(d.a,{className:"mt-5",children:Object(B.jsxs)(b.a,{className:"justify-content-center ",children:[Object(B.jsx)("h2",{className:"text-center mb-3",children:"\u041f\u0440\u0438\u0447\u0438\u043d\u044b, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043d\u0430\u043c \u0441\u0442\u043e\u0438\u0442 \u0434\u043e\u0432\u0435\u0440\u044f\u0442\u044c"}),Object(B.jsxs)(d.a,{children:[Object(B.jsxs)(x.a,{children:[Object(B.jsx)(G,{icon:["fab","yandex"],title:"\u041d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432 \u042f\u043d\u0434\u0435\u043a\u0441!",text:"\u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u0412\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u042f\u043d\u0434\u0435\u043a\u0441\u0430 \u0431\u0435\u0437 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u043f\u043e\u0441\u0440\u0435\u0434\u043d\u0438\u043a\u043e\u0432."}),Object(B.jsx)(G,{icon:["fab","expeditedssl"],title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435!",text:"\u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b HTTPS."}),Object(B.jsx)(G,{icon:"key",title:"\u041d\u0435 \u0445\u0440\u0430\u043d\u0438\u043c \u0432\u0430\u0448\u0438 \u043f\u0430\u0440\u043e\u043b\u0438!",text:"\u041d\u0430 \u043d\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0412\u0430\u0448 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438."})]}),Object(B.jsxs)(x.a,{children:[Object(B.jsx)(G,{icon:"code",title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434!",text:"\u0412\u0435\u0441\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 GitHub \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430."}),Object(B.jsx)(G,{icon:"shield-alt",title:"\u0422\u043e\u043b\u044c\u043a\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435!",text:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 OAuth \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u042f\u043d\u0434\u0435\u043a\u0441\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0435 \u0432 \u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u0445."}),Object(B.jsx)(G,{icon:"spinner",title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435!",text:"\u0412\u0435\u0441\u044c \u043a\u043e\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u0412\u0430\u0448\u0435\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0431\u0435\u0437 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0441 \u0447\u044c\u0435\u0439-\u043b\u0438\u0431\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b."})]})]})]})}),Object(B.jsx)("hr",{}),Object(B.jsx)(d.a,{className:"mb-3",children:Object(B.jsx)(b.a,{children:Object(B.jsxs)(d.a,{className:"d-flex justify-content-between",children:[Object(B.jsx)(h.a,{children:Object(B.jsxs)("span",{children:["\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434: ",Object(B.jsx)("a",{href:"https://github.com/MarshalX/yandex-music-token",children:"yandex-music-token"})]})}),Object(B.jsx)(h.a,{className:"text-right",children:Object(B.jsxs)("span",{children:[" \u0410\u0432\u0442\u043e\u0440: ",Object(B.jsx)("a",{href:"tg://resolve?domain=MarshalX",children:"@MarshalX"})]})})]})})})]})}}]),a}(n.Component),H=(a(44),a(45),a(13)),R=a(29),X=a(30),A=a(31);H.b.add(R.a,X.a,A.a),s.a.render(Object(B.jsx)(M,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.99403659.chunk.js.map