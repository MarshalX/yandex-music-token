(this["webpackJsonpyandex-music-token"]=this["webpackJsonpyandex-music-token"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(25),r=c.n(s),i=c(9),j=c(13),o=c(10),l=c(11),h=c(49),b=c(47),d=c(27),x=c(50),u=c(48),O=c(51),p=c(16),m=c(7),f=c(54),_=c(52),y=c(22),k=c(21),v=c.n(k),w=c(26),g=function e(){var t=this;Object(i.a)(this,e),this.oauth_url="https://oauth.yandex.com",this.client_id="23cabbbdc6cd418abb4b39c32c41195d",this.client_secret="53bc75238f0c4d08a118e51fe9203300",this.generate_token_by_username_and_password=function(){var e=Object(w.a)(v.a.mark((function e(c,a,n,s){var r,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t.oauth_url,"/token"),i={grant_type:"password",client_id:t.client_id,client_secret:t.client_secret,username:c,password:a},n&&s&&(i=Object(m.a)(Object(m.a)({},i),{},{x_captcha_answer:n,x_captcha_key:s})),e.next=5,t.post(r,i).then((function(e){return e.json()})).then((function(e){return e.access_token}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,c,a,n){return e.apply(this,arguments)}}(),this.serialize=function(e){var t=[];for(var c in e)e.hasOwnProperty(c)&&t.push(encodeURIComponent(c)+"="+encodeURIComponent(e[c]));return t.join("&")},this.handleCaptcha=function(e,t){throw e.includes("Wrong")?new N(t):new C(t)},this.post=function(e,c){return fetch(e,{method:"POST",body:t.serialize(c)}).then((function(e){return e.ok?e:e.json().then((function(e){var c=e.error_description||"Unknown HTTP Error";if(c.includes("CAPTCHA"))return t.handleCaptcha(c,e);throw new Error(c)}))}))}},C=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this)).body=e,a}return c}(Object(y.a)(Error)),N=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this)).body=e,a}return c}(Object(y.a)(Error)),T=c(1),S=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this,e)).api=new g,a.handleChange=function(e){var t,c=e.target,n=c.name,s=c.value;a.setState(Object(m.a)(Object(m.a)({},a.state),{},(t={},Object(p.a)(t,n,s),Object(p.a)(t,"error",null),t)))},a.handleSubmit=function(e){e.preventDefault(),a.setState(Object(m.a)(Object(m.a)({},a.state),{},{x_captcha_url:void 0,x_captcha_key:void 0}));var t=a.state,c=t.username,n=t.password,s=t.x_captcha_answer,r=t.x_captcha_key;a.api.generate_token_by_username_and_password(c,n,s,r).then((function(e){window.location.href="tg://resolve?domain=music_yandex_bot&start=".concat(e),a.setState(Object(m.a)(Object(m.a)({},a.state),{},{token:e}))})).catch((function(e){if(e instanceof C||e instanceof N){var t=e.body,c=t.x_captcha_url,n=t.x_captcha_key,s=t.error_description;a.setState(Object(m.a)(Object(m.a)({},a.state),{},{x_captcha_url:c,x_captcha_key:n,error:s}))}else a.setState(Object(m.a)(Object(m.a)({},a.state),{},{error:e}))}))},a.state={username:"",password:"",error:null,token:null},a}return Object(j.a)(c,[{key:"render",value:function(){var e=this.state,t=e.x_captcha_url,c=e.error,a=e.token;return a?Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("a",{href:"https://t.me/music_yandex_bot?start=".concat(a),children:Object(T.jsx)(f.a,{variant:"primary",block:!0,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0431\u043e\u0442\u0430"})})}):Object(T.jsxs)(_.a,{children:[Object(T.jsxs)(_.a.Group,{controlId:"formBasicEmail",children:[Object(T.jsx)(_.a.Label,{column:!1,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d, \u043f\u043e\u0447\u0442\u0443 \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d:"}),Object(T.jsx)(_.a.Control,{name:"username",onChange:this.handleChange,type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d, \u043f\u043e\u0447\u0442\u0443 \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"})]}),Object(T.jsxs)(_.a.Group,{controlId:"formBasicPassword",children:[Object(T.jsx)(_.a.Label,{column:!1,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(T.jsx)(_.a.Control,{name:"password",onChange:this.handleChange,type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),t&&Object(T.jsxs)(_.a.Group,{controlId:"formBasicCaptcha",children:[Object(T.jsxs)(b.a,{className:"mb-2",children:[Object(T.jsx)(d.a,{children:Object(T.jsx)(u.a,{fluid:!0,src:t})}),Object(T.jsx)(d.a,{className:"align-self-center",children:Object(T.jsx)(f.a,{className:"btn-block",type:"submit",onClick:this.handleSubmit,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})})]}),Object(T.jsx)(b.a,{children:Object(T.jsx)(d.a,{children:Object(T.jsx)(_.a.Control,{name:"x_captcha_answer",onChange:this.handleChange,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"})})})]}),Object(T.jsx)(f.a,{variant:"primary",type:"submit",block:!0,onClick:this.handleSubmit,children:"\u0412\u043e\u0439\u0442\u0438"}),c&&Object(T.jsx)("p",{className:"mt-1 text-danger",children:"".concat(c)})]})}}]),c}(n.a.Component),B=c(53),P=c(28),E=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(T.jsxs)(B.a,{className:"mb-4",children:[Object(T.jsx)(B.a.Header,{className:"text-center",children:Object(T.jsx)(P.a,{size:this.props.size,icon:this.props.icon})}),Object(T.jsxs)(B.a.Body,{children:[Object(T.jsx)(B.a.Title,{children:this.props.title}),Object(T.jsx)(B.a.Text,{children:this.props.text})]})]})}}]),c}(n.a.Component);E.defaultProps={size:"7x"};var I=E,z=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(T.jsxs)(h.a,{children:[Object(T.jsxs)(b.a,{className:"mt-5",children:[Object(T.jsx)(d.a,{className:"d-none d-xl-block col-md-3"}),Object(T.jsxs)(d.a,{children:[Object(T.jsx)(b.a,{children:Object(T.jsx)(h.a,{children:Object(T.jsxs)("h4",{children:["\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0443\u0437\u044b\u043a\u0430 - Telegram ",Object(T.jsx)(x.a,{variant:"primary",children:"Bot"})]})})}),Object(T.jsx)(b.a,{children:Object(T.jsx)(h.a,{children:Object(T.jsx)(u.a,{src:"logo.png",width:"100%",roundedCircle:!0})})}),Object(T.jsx)(b.a,{children:Object(T.jsxs)(h.a,{children:[Object(T.jsx)("p",{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043e\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0441\u043b\u0443\u0448\u0438\u0432\u0430\u0442\u044c \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442 \u0434\u043d\u044f \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0443\u043c\u043d\u044b\u0435 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b, \u0412\u0430\u0448\u0438 \u043b\u0438\u0447\u043d\u044b\u0435 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b, \u0430 \u0442\u0430\u043a \u0436\u0435 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u0442\u0440\u0435\u043a\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0430\u0439\u043a\u0430\u0442\u044c \u0438 \u0434\u0438\u0437\u043b\u0430\u0439\u043a\u0430\u0442\u044c \u0442\u0440\u0435\u043a\u0438, \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u043f\u0435\u0441\u0435\u043d, \u0438\u0441\u043a\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f, \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0438\u043c\u0438 \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0438 \u0441\u043b\u0443\u0448\u0430\u0442\u044c \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u043c\u0443\u0437\u044b\u043a\u0443 \u0432 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u0435 Telegram."}),Object(T.jsxs)("p",{children:["Trello \u0434\u043b\u044f \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439:",Object(T.jsx)("a",{href:"https://trello.com/b/D5f3kRxF",children:" Yandex.Music Telegram Bot"})]}),Object(T.jsxs)("p",{children:["\u041a\u0430\u043d\u0430\u043b \u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438 \u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c\u0438:",Object(T.jsx)("a",{href:"https://t.me/music_yandex_channel",children:" @music_yandex_channel"})]})]})})]}),Object(T.jsx)(d.a,{className:"d-none d-xl-block col-md-3"})]}),Object(T.jsxs)(b.a,{children:[Object(T.jsx)(d.a,{className:"d-none d-xl-block col-md-3"}),Object(T.jsx)(d.a,{children:Object(T.jsx)(S,{})}),Object(T.jsx)(d.a,{className:"d-none d-xl-block col-md-3"})]}),Object(T.jsx)(b.a,{className:"mt-5",children:Object(T.jsxs)(h.a,{className:"justify-content-center ",children:[Object(T.jsx)("h2",{className:"text-center mb-3",children:"\u041f\u0440\u0438\u0447\u0438\u043d\u044b, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043d\u0430\u043c \u0441\u0442\u043e\u0438\u0442 \u0434\u043e\u0432\u0435\u0440\u044f\u0442\u044c"}),Object(T.jsxs)(b.a,{children:[Object(T.jsxs)(O.a,{children:[Object(T.jsx)(I,{icon:["fab","yandex"],title:"\u041d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432 \u042f\u043d\u0434\u0435\u043a\u0441!",text:"\u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u0412\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u042f\u043d\u0434\u0435\u043a\u0441\u0430 \u0431\u0435\u0437 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u043f\u043e\u0441\u0440\u0435\u0434\u043d\u0438\u043a\u043e\u0432."}),Object(T.jsx)(I,{icon:["fab","expeditedssl"],title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435!",text:"\u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b HTTPS."}),Object(T.jsx)(I,{icon:"key",title:"\u041d\u0435 \u0445\u0440\u0430\u043d\u0438\u043c \u0432\u0430\u0448\u0438 \u043f\u0430\u0440\u043e\u043b\u0438!",text:"\u041d\u0430 \u043d\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0412\u0430\u0448 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438."})]}),Object(T.jsxs)(O.a,{children:[Object(T.jsx)(I,{icon:"code",title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434!",text:"\u0412\u0435\u0441\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 GitHub \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430."}),Object(T.jsx)(I,{icon:"shield-alt",title:"\u0422\u043e\u043b\u044c\u043a\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435!",text:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 OAuth \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u042f\u043d\u0434\u0435\u043a\u0441\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0435 \u0432 \u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u0445."}),Object(T.jsx)(I,{icon:"spinner",title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435!",text:"\u0412\u0435\u0441\u044c \u043a\u043e\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u0412\u0430\u0448\u0435\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0431\u0435\u0437 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0441 \u0447\u044c\u0435\u0439-\u043b\u0438\u0431\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b."})]})]})]})}),Object(T.jsx)("hr",{}),Object(T.jsx)(b.a,{className:"mb-3",children:Object(T.jsx)(h.a,{children:Object(T.jsxs)(b.a,{className:"d-flex justify-content-between",children:[Object(T.jsx)(d.a,{children:Object(T.jsxs)("span",{children:["\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434: ",Object(T.jsx)("a",{href:"https://github.com/MarshalX/yandex-music-token",children:"yandex-music-token"})]})}),Object(T.jsx)(d.a,{className:"text-right",children:Object(T.jsxs)("span",{children:[" \u0410\u0432\u0442\u043e\u0440: ",Object(T.jsx)("a",{href:"https://t.me/MarshalX",children:"@MarshalX"})]})})]})})})]})}}]),c}(a.Component),H=(c(44),c(45),c(12)),G=c(29),M=c(30),A=c(31);H.b.add(G.a,M.a,A.a),r.a.render(Object(T.jsx)(z,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4d67382b.chunk.js.map