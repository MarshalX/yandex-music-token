(this["webpackJsonpyandex-music-token"]=this["webpackJsonpyandex-music-token"]||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(25),s=a.n(r),i=a(9),o=a(12),l=a(10),j=a(11),h=a(49),b=a(47),d=a(27),u=a(48),x=a(50),p=a(16),O=a(7),m=a(53),f=a(51),y=a(22),_=a(21),k=a.n(_),v=a(26),g=function e(){var t=this;Object(i.a)(this,e),this.oauth_url="https://oauth.yandex.com",this.client_id="23cabbbdc6cd418abb4b39c32c41195d",this.client_secret="53bc75238f0c4d08a118e51fe9203300",this.generate_token_by_username_and_password=function(){var e=Object(v.a)(k.a.mark((function e(a,c,n,r){var s,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="".concat(t.oauth_url,"/token"),i={grant_type:"password",client_id:t.client_id,client_secret:t.client_secret,username:a,password:c},n&&r&&(i=Object(O.a)(Object(O.a)({},i),{},{x_captcha_answer:n,x_captcha_key:r})),e.next=5,t.post(s,i).then((function(e){return e.json()})).then((function(e){return e.access_token}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a,c,n){return e.apply(this,arguments)}}(),this.serialize=function(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")},this.handleCaptcha=function(e,t){throw e.includes("Wrong")?new C(t):new w(t)},this.post=function(e,a){return fetch(e,{method:"POST",body:t.serialize(a)}).then((function(e){return e.ok?e:e.json().then((function(e){var a=e.error_description||"Unknown HTTP Error";if(a.includes("CAPTCHA"))return t.handleCaptcha(a,e);throw new Error(a)}))}))}},w=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this)).body=e,c}return a}(Object(y.a)(Error)),C=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this)).body=e,c}return a}(Object(y.a)(Error)),N=a(1),S=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).api=new g,c.handleChange=function(e){var t,a=e.target,n=a.name,r=a.value;c.setState(Object(O.a)(Object(O.a)({},c.state),{},(t={},Object(p.a)(t,n,r),Object(p.a)(t,"error",null),t)))},c.handleCopyClick=function(e){e.preventDefault(),navigator.clipboard&&navigator.clipboard.writeText(c.state.token)},c.handleSubmit=function(e){e.preventDefault(),c.setState(Object(O.a)(Object(O.a)({},c.state),{},{x_captcha_url:void 0,x_captcha_key:void 0}));var t=c.state,a=t.username,n=t.password,r=t.x_captcha_answer,s=t.x_captcha_key;c.api.generate_token_by_username_and_password(a,n,r,s).then((function(e){window.location.href="tg://resolve?domain=music_yandex_bot&start=".concat(e),c.setState(Object(O.a)(Object(O.a)({},c.state),{},{token:e}))})).catch((function(e){if(e instanceof w||e instanceof C){var t=e.body,a=t.x_captcha_url,n=t.x_captcha_key,r=t.error_description;c.setState(Object(O.a)(Object(O.a)({},c.state),{},{x_captcha_url:a,x_captcha_key:n,error:r}))}else c.setState(Object(O.a)(Object(O.a)({},c.state),{},{error:e}))}))},c.state={username:"",password:"",error:null,token:null},c}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.Link,t=this.state,a=t.x_captcha_url,c=t.error,n=t.token;return n?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("a",{href:"https://t.me/music_yandex_bot?start=".concat(n),children:Object(N.jsx)(m.a,{variant:"primary",block:!0,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0431\u043e\u0442\u0430"})}),Object(N.jsx)("a",{href:"/#",onClick:this.handleCopyClick,children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043a\u0435\u043d"})]}):Object(N.jsxs)(f.a,{children:[Object(N.jsx)(f.a.Group,{controlId:"formBasicEmail",children:Object(N.jsx)(f.a.Control,{name:"username",onChange:this.handleChange,type:"email",placeholder:"\u041b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 email"})}),Object(N.jsxs)(f.a.Group,{controlId:"formBasicPassword",children:[Object(N.jsx)(f.a.Control,{name:"password",onChange:this.handleChange,type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(N.jsx)(e,{url:"https://passport.yandex.ru/auth/restore/",text:"\u041d\u0435 \u043f\u043e\u043c\u043d\u044e"})]}),a&&Object(N.jsxs)(f.a.Group,{controlId:"formBasicCaptcha",children:[Object(N.jsxs)(b.a,{className:"mb-2",children:[Object(N.jsx)(d.a,{children:Object(N.jsx)(u.a,{fluid:!0,src:a})}),Object(N.jsx)(d.a,{className:"align-self-center",children:Object(N.jsx)(m.a,{className:"btn-block",type:"submit",onClick:this.handleSubmit,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})})]}),Object(N.jsx)(b.a,{children:Object(N.jsx)(d.a,{children:Object(N.jsx)(f.a.Control,{name:"x_captcha_answer",onChange:this.handleChange,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"})})})]}),c&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{className:"mt-1 text-danger",children:"".concat(c)}),Object(N.jsxs)("p",{className:"mt-1 text-info",children:["\u0415\u0441\u043b\u0438 \u0432\u044b \u0432\u0441\u0440\u0435\u0447\u0430\u0435\u0442\u0435\u0441\u044c \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439 \u043e \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u043c \u043f\u0430\u0440\u043e\u043b\u0435, \u043d\u043e \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0435\u0440\u043d\u044b\u0439, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0440\u0443\u0433\u0438\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c:",Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://github.com/MarshalX/yandex-music-token/releases",children:"Android \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://chrome.google.com/webstore/detail/yandex-music-token/lcbjeookjibfhjjopieifgjnhlegmkib",children:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Google Chrome"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://addons.mozilla.org/en-US/firefox/addon/yandex-music-token/",children:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Mozilla Firefox"})})]})]})]}),Object(N.jsx)(m.a,{variant:"primary",type:"submit",block:!0,onClick:this.handleSubmit,className:"mb-1",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(N.jsx)(e,{url:"https://passport.yandex.ru/registration",children:Object(N.jsx)(m.a,{variant:"outline-primary",block:!0,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c ID"})})]})}}]),a}(n.a.Component),T=a(52),z=a(28),I=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(N.jsxs)(T.a,{className:"mb-4",children:[Object(N.jsx)(T.a.Header,{className:"text-center",children:Object(N.jsx)(z.a,{size:this.props.size,icon:this.props.icon})}),Object(N.jsxs)(T.a.Body,{children:[Object(N.jsx)("div",{className:"card-title text-center h5",style:{fontSize:"1.15rem"},children:this.props.title}),Object(N.jsx)(T.a.Text,{className:"text-center",children:this.props.text})]})]})}}]),a}(n.a.Component);I.defaultProps={size:"7x"};var P=I,E=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.text;return a||(a=t),Object(N.jsx)("a",{href:this.props.url,target:"_blank",rel:"noreferrer",children:a})}}]),a}(c.Component),B=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(N.jsxs)(h.a,{children:[Object(N.jsxs)(b.a,{className:"mt-5",children:[Object(N.jsx)(d.a,{className:"d-none d-xl-block col-md-4"}),Object(N.jsxs)(d.a,{children:[Object(N.jsx)(b.a,{className:"d-flex justify-content-center",children:Object(N.jsx)(u.a,{src:"logo.png",width:"30%",roundedCircle:!0})}),Object(N.jsx)(b.a,{className:"d-flex justify-content-center px-5 text-center",children:Object(N.jsx)("p",{children:"\u041f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0443\u0437\u044b\u043a\u0430 \u0432 Telegram!"})}),Object(N.jsx)(S,{Link:E})]}),Object(N.jsx)(d.a,{className:"d-none d-xl-block col-md-4"})]}),Object(N.jsx)(b.a,{className:"mt-5",children:Object(N.jsxs)(h.a,{className:"justify-content-center ",children:[Object(N.jsx)("h2",{className:"text-center mb-3",children:"\u042d\u0442\u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043c\u044b"}),Object(N.jsx)(b.a,{children:Object(N.jsxs)(x.a,{className:"mx-0",children:[Object(N.jsx)(P,{icon:["fab","yandex"],title:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e",text:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u042f\u043d\u0434\u0435\u043a\u0441 \u0431\u0435\u0437 \u043f\u043e\u0441\u0440\u0435\u0434\u043d\u0438\u043a\u043e\u0432"}),Object(N.jsx)(P,{icon:["fab","expeditedssl"],title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c HTTPS",text:"\u0412\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435"}),Object(N.jsx)(P,{icon:"key",title:"\u041d\u0435 \u0445\u0440\u0430\u043d\u0438\u043c \u043f\u0430\u0440\u043e\u043b\u0438",text:"\u041d\u0430 \u043d\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d"}),Object(N.jsx)(P,{icon:"code",title:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043a\u043e\u0434",text:"\u0412\u0435\u0441\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 GitHub"})]})})]})}),Object(N.jsx)("hr",{}),Object(N.jsx)(b.a,{className:"mb-3",children:Object(N.jsx)(h.a,{children:Object(N.jsxs)(b.a,{className:"d-flex justify-content-between",children:[Object(N.jsx)(d.a,{xs:{span:"auto"},children:Object(N.jsxs)("span",{children:["\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434: ",Object(N.jsx)(E,{text:"yandex-music-token",url:"https://github.com/MarshalX/yandex-music-token"})]})}),Object(N.jsx)(d.a,{xs:{span:"auto"},className:"text-right",children:Object(N.jsxs)("span",{children:["\u0410\u0432\u0442\u043e\u0440: ",Object(N.jsx)(E,{text:"@MarshalX",url:"https://github.com/MarshalX/"})]})})]})})})]})}}]),a}(c.Component),G=(a(44),a(45),a(13)),H=a(29),M=a(30),U=a(31);G.b.add(H.a,M.a,U.a),s.a.render(Object(N.jsx)(B,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a5e02e5f.chunk.js.map