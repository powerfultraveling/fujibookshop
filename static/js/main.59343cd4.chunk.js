(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,c){e.exports={sta_section:"StationariesPage_sta_section__12MjP",product_card:"StationariesPage_product_card__ysVJW",product_card_image:"StationariesPage_product_card_image__22uHr",product_card_cover:"StationariesPage_product_card_cover__Zt5Ir",sta_title:"StationariesPage_sta_title__3hdxZ"}},16:function(e,t,c){e.exports={landing:"Homepage_landing__8giw1",landing_cover:"Homepage_landing_cover__3_ZCB",landing_info_box:"Homepage_landing_info_box__N-SZA",landing_title:"Homepage_landing_title__3njeZ",read_btn:"Homepage_read_btn__1FL7x","read-btn":"Homepage_read-btn__20tL7"}},2:function(e,t,c){e.exports={fl_hr:"cart_fl_hr__3YHlP",fl_hr_lf:"cart_fl_hr_lf__1JGZ6",center:"cart_center__30wKk",cart_procedure:"cart_cart_procedure__3rpOg",cart_title:"cart_cart_title__3Z6kx",dot_current:"cart_dot_current__3mM_Q",dot:"cart_dot__7s7i0",cart_title_current:"cart_cart_title_current__NgGHv",cart_title_after:"cart_cart_title_after__2zSlM",line:"cart_line__2piF9",main_sec:"cart_main_sec__2_Cb4",card:"cart_card__f_lKM",box_10:"cart_box_10__2Vloi",box_60:"cart_box_60__1kKaX",box_5:"cart_box_5__2mDEa",box_15:"cart_box_15__1EmFs",box_20:"cart_box_20__MyBhL",card_img:"cart_card_img__gqRoS",delete_btn:"cart_delete_btn__3Abh1",info_block:"cart_info_block__1o5Et",info_title:"cart_info_title__35GiM",info_block_price:"cart_info_block_price__vHhC-",price_box:"cart_price_box__1uNjw",pay_btn:"cart_pay_btn__2bzgB",payPage_main_sec:"cart_payPage_main_sec__3ZHbY",box:"cart_box__HFWJ6",payCard:"cart_payCard__1YwvR",payCard_img:"cart_payCard_img__cuXLR"}},49:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(25),i=c.n(s),r=c(3),j=c(10),l=c(4),o=Object(a.createContext)(),d=Object(a.createContext)(),b=(c(17),c(16)),u=c.n(b);c(33);function x(e){window.localStorage.setItem("token",e)}function O(){return window.localStorage.getItem("token")}function h(){window.localStorage.removeItem("token")}var m="http://localhost:3001/api";function p(e){if(console.log(e),e)return fetch("".concat(m,"/authorize"),{headers:{authorization:"Bearer ".concat(e)}}).then((function(e){return console.log("iam here"),e.json()})).catch((function(e){return e.toString()}))}function _(){return fetch("".concat(m,"/product")).then((function(e){return e.json()}))}function f(e){return fetch("".concat(m,"/product/").concat(e)).then((function(e){return console.log("Hallo"),e.json()}))}c(49);var v=c(0);function g(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),c=(t[0],t[1],Object(a.useContext)(o)),n=c.user,s=c.setUser;return Object(a.useEffect)((function(){var e=O();e?p(e).then((function(e){0!==e.ok?s(e.data):console.log("error")})):console.log("no token")}),[]),Object(v.jsx)("div",{className:"Top-nav",children:Object(v.jsx)("div",{className:"top-nav-block",children:Object(v.jsxs)("div",{className:"top-nav-user",children:[n&&Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{onClick:function(){s(null),h()},children:Object(v.jsx)("a",{className:" ft-TC ",href:"/logout",children:"Log Out"})}),Object(v.jsx)("a",{href:"/cart/".concat(n.id),children:Object(v.jsx)("img",{src:"https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/ffffff/external-cart-furniture-vitaliy-gorbachev-fill-vitaly-gorbachev-2.png",alt:"cart",style:{width:"20px",height:"auto"}})})]}),!n&&Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{style:{marginRight:"10px"},children:Object(v.jsx)("a",{className:" ft-TC",href:"/login",children:"\u767b\u5165"})}),Object(v.jsx)("span",{children:Object(v.jsx)("a",{className:" ft-TC",href:"/join",children:"\u8a3b\u518a"})})]})]})})})}c(51);var N=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),c=(t[0],t[1],Object(a.useContext)(o)),n=(c.user,c.setUser);return Object(a.useEffect)((function(){var e=O();e?p(e).then((function(e){0!==e.ok?n(e.data):console.log("error")})):console.log("no token")}),[]),Object(v.jsxs)("nav",{className:"nav",children:[Object(v.jsx)("div",{children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("img",{style:{width:"150px",marginTop:"50px",marginBottom:"80px"},alt:"title",src:"../../img/logo.png"})})}),Object(v.jsxs)("div",{className:"product-nav",children:[Object(v.jsx)("div",{children:Object(v.jsx)("span",{children:Object(v.jsx)("a",{className:"ftsz-24 ft-TC",href:"/",children:"\u9996\u9801"})})}),Object(v.jsx)("div",{children:Object(v.jsx)("span",{children:Object(v.jsx)("a",{className:"ftsz-24 ft-TC",href:"/books",children:"\u66f8\u7c4d"})})}),Object(v.jsx)("div",{children:Object(v.jsx)("span",{children:Object(v.jsx)("a",{className:"ftsz-24 ft-TC",href:"/stationaries",children:"\u6587\u5177"})})})]})]})};c(52);var y=function(){return Object(v.jsxs)("footer",{children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{style:{width:"100px",height:"auto"},src:"../../img/logo.png"})}),Object(v.jsxs)("div",{className:"footer-infos",children:[Object(v.jsx)("span",{children:"\u95dc\u65bc\u6211\u5011"}),Object(v.jsx)("span",{children:"\u653f\u7b56"}),Object(v.jsx)("span",{children:"\u81c9\u66f8"}),Object(v.jsx)("span",{children:"\u5176\u4ed6"})]})]})};var S=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{}),Object(v.jsx)(N,{}),Object(v.jsx)("section",{className:"".concat(u.a.landing),children:Object(v.jsx)("div",{className:"".concat(u.a.landing_cover),children:Object(v.jsxs)("div",{className:"".concat(u.a.landing_info_box),children:[Object(v.jsx)("div",{children:Object(v.jsx)("h1",{className:"".concat(u.a.landing_title)})}),Object(v.jsx)("div",{children:Object(v.jsx)("p",{})}),Object(v.jsx)("div",{})]})})}),Object(v.jsx)(y,{})]})};c(53);var C=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),c=(t[0],t[1],Object(a.useContext)(o)),n=(c.user,c.setUser),s=Object(a.useContext)(d);return s.cart,s.setCart,Object(a.useEffect)((function(){var e=O();e?p(e).then((function(e){0!==e.ok?n(e.data):console.log("error")})):console.log("no token")}),[]),Object(v.jsxs)("div",{className:"sm-nav-box",style:{display:"flex"},children:[Object(v.jsx)("div",{children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("img",{style:{width:"80px",marginRight:"30px"},alt:"title",src:"../../img/logo.png"})})}),Object(v.jsxs)("div",{className:"sm-product-nav",children:[Object(v.jsx)("div",{className:"nav-item",children:Object(v.jsx)("span",{children:Object(v.jsx)("a",{className:"ft-500",href:"/",children:"\u4e3b\u9801"})})}),Object(v.jsx)("div",{className:"nav-item",children:Object(v.jsx)("span",{children:Object(v.jsx)("a",{className:"ft-500",href:"/books",children:"\u66f8\u7c4d"})})}),Object(v.jsx)("div",{className:"nav-item",children:Object(v.jsx)("span",{children:Object(v.jsx)("a",{className:"ft-500",href:"/stationaries",children:"\u6587\u5177"})})})]})]})},k=c(9),P=c.n(k);function w(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),j=i[0],d=i[1],b=Object(a.useState)(""),u=Object(r.a)(b,2),O=u[0],h=(u[1],Object(a.useContext)(o).setUser),_=Object(l.f)();return Object(v.jsxs)("div",{children:[Object(v.jsx)(C,{}),Object(v.jsxs)("section",{className:P.a.main_sec,children:[Object(v.jsx)("div",{className:P.a.login_box,children:Object(v.jsxs)("form",{className:P.a.login_form,onSubmit:function(e){e.preventDefault(),function(e,t){return console.log("im login"),fetch("".concat(m,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()}))}(c,j).then((function(e){x(e.token),p(e.token).then((function(e){h(e)})),_.push("/")}))},children:[Object(v.jsx)("div",{children:Object(v.jsx)("h2",{className:P.a.title,children:"\u767b\u5165"})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:P.a.text_input,type:"text",placeholder:"email*",value:c,onChange:function(e){n(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:P.a.text_input,type:"password",placeholder:"Passowrd*",value:j,onChange:function(e){d(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:P.a.login_btn,type:"submit",value:"Sign In"})}),O&&Object(v.jsx)("span",{className:"error",children:O})]})}),Object(v.jsx)("div",{className:P.a.register_box,children:Object(v.jsxs)("span",{children:["\u9084\u6c92\u6709\u5e33\u865f\u55ce?"," ",Object(v.jsx)("a",{href:"#",style:{color:"blue"},children:"\u8a3b\u518a"})]})})]})]})}c(61);var I=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),j=i[0],o=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),u=b[0],O=b[1],h=Object(a.useState)(""),p=Object(r.a)(h,2),_=p[0],f=p[1],g=Object(a.useState)(""),N=Object(r.a)(g,2),S=N[0];return N[1],Object(l.f)(),Object(v.jsxs)("div",{children:[Object(v.jsx)(C,{}),Object(v.jsx)("section",{className:"form-section",children:Object(v.jsxs)("form",{className:"join-form",onSubmit:function(e){e.preventDefault(),function(e,t,c,a){return fetch("".concat(m,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({firstname:e,lastname:t,email:c,password:a,role:"user"})}).then((function(e){return e.json()}))}(c,j,u,_).then((function(e){console.log(e),x(e),n(""),o(""),f(""),O("")}))},children:[Object(v.jsx)("h2",{class:"title",children:"Join."}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"text",value:c,onChange:function(e){n(e.target.value)},placeholder:"firstname*",className:"input"})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"text",value:j,onChange:function(e){o(e.target.value)},placeholder:"lastname*",className:"input"})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"text",value:u,onChange:function(e){O(e.target.value)},placeholder:"email*",className:"input"})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"password",value:_,onChange:function(e){f(e.target.value)},placeholder:"Password*",className:"input"})}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"end"},children:Object(v.jsx)("input",{type:"submit",value:"submit",className:"submit-btn"})}),S&&Object(v.jsx)("span",{style:{color:"red"},children:S})]})}),Object(v.jsx)(y,{})]})};c(62);function E(e){var t=e.product;return Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("div",{className:"image-box",children:Object(v.jsx)("img",{className:"card-image",src:t.image,alt:"card"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:t.title}),Object(v.jsxs)("div",{children:["$",t.price]})]})]})}var H=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){_().then((function(e){n(e)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(N,{}),Object(v.jsx)("section",{children:c.map((function(e){return Object(v.jsx)(E,{product:e})}))}),Object(v.jsx)(y,{})]})},T=c(12),L=c.n(T);function D(e){var t=e.product;return Object(v.jsxs)("div",{className:L.a.product_card,children:[Object(v.jsx)("a",{href:"/stationary/".concat(t.id),children:Object(v.jsx)("img",{src:t.image,className:L.a.product_card_image})}),Object(v.jsx)("a",{href:"/stationary/".concat(t.id),children:Object(v.jsx)("div",{className:L.a.product_card_cover,children:Object(v.jsx)("h2",{className:L.a.sta_title,children:t.name})})})]})}var A=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("http://localhost:3001/api/stationaries").then((function(e){return e.json()})).then((function(e){console.log(e),n(e)})).catch((function(e){console.log(e)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(N,{}),Object(v.jsx)("section",{className:L.a.sta_section,children:c.map((function(e){return Object(v.jsx)(D,{product:e})}))}),Object(v.jsx)(y,{})]})};c(63);var J=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useContext)(d),i=(s.cart,s.setCart,Object(a.useContext)(o).user),j=Object(l.g)().id;return Object(a.useEffect)((function(){f(j).then((function(e){console.log(e),n(e)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{}),Object(v.jsx)(C,{}),Object(v.jsx)("section",{className:"product-sec",children:Object(v.jsxs)("div",{className:"product",children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:c.image,className:"productPage-image"})}),Object(v.jsxs)("div",{className:"product-info",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"productPage-name",children:c.name}),Object(v.jsxs)("span",{className:"productPage-price",children:["$",c.price]})]}),Object(v.jsx)("div",{children:Object(v.jsx)("p",{children:c.description})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:"addToCart-btn",onClick:function(){console.log(i);var e=i.id,t=c.id;fetch("http://localhost:3001/api/cart",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({userId:e,productId:t})})},children:"Add To Cart"})})]})]})}),Object(v.jsx)(y,{})]})},Z=c(28),z=c(2),B=c.n(z);function M(e){var t=e.data,c=(e.orderProducts,e.setOrderProducts),a=e.setSum;return Object(v.jsxs)("div",{className:B.a.card,children:[Object(v.jsx)("div",{className:"".concat(B.a.box_10," ").concat(B.a.center),children:Object(v.jsx)("button",{onClick:function(){c((function(e){return[].concat(Object(Z.a)(e),[t.Product])})),a((function(e){return e+t.Product.price}))}})}),Object(v.jsxs)("div",{className:"".concat(B.a.box_60," ").concat(B.a.fl_hr),children:[Object(v.jsx)("img",{className:B.a.card_img,src:t.Product.image}),Object(v.jsx)("span",{children:t.Product.name})]}),Object(v.jsx)("div",{className:B.a.box_10}),Object(v.jsx)("div",{className:"".concat(B.a.box_15),children:t.Product.price}),Object(v.jsx)("div",{className:"".concat(B.a.box_5," ").concat(B.a.center),children:Object(v.jsx)("button",{className:B.a.delete_btn,children:"x"})})]})}function U(e){var t=e.sum,c=e.setSum,a=e.orderProducts,n=e.setOrderProducts,s=e.cartItems,i=e.setPage;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:B.a.cart_procedure,children:[Object(v.jsx)("div",{children:Object(v.jsx)("h2",{className:B.a.cart_title,children:"\u8cfc\u7269\u8eca"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:B.a.dot_current,children:"1"}),Object(v.jsx)("span",{className:B.a.cart_title_current,children:"\u9078\u64c7\u5546\u54c1"})]}),Object(v.jsx)("div",{className:B.a.line}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:B.a.dot,children:"2"}),Object(v.jsx)("span",{className:B.a.cart_title_after,children:"\u586b\u5beb\u8cc7\u6599"})]})]}),Object(v.jsxs)("section",{className:B.a.main_sec,children:[Object(v.jsx)("div",{className:B.a.card_block,children:s.map((function(e){return Object(v.jsx)(M,{data:e,setSum:c,orderProducts:a,setOrderProducts:n})}))}),Object(v.jsxs)("div",{className:B.a.info_block,children:[Object(v.jsx)("div",{className:"".concat(B.a.info_title," ").concat(B.a.center),children:"\u8a02\u55ae\u6458\u8981"}),Object(v.jsxs)("div",{className:"".concat(B.a.info_block_price),children:["\u6d88\u8cbb\u7e3d\u984d: ",t]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{onClick:function(){i("payment")},className:"".concat(B.a.pay_btn),children:"\u7d50\u5e33"})})]})]})]})}function F(e){var t=e.item;return Object(v.jsxs)("div",{className:"".concat(B.a.payCard),children:[Object(v.jsxs)("div",{className:"".concat(B.a.box_60," ").concat(B.a.center),children:[Object(v.jsx)("img",{className:"".concat(B.a.payCard_img),src:t.image}),Object(v.jsx)("span",{children:t.name})]}),Object(v.jsx)("div",{className:"".concat(B.a.box_20," ").concat(B.a.center),children:t.amount}),Object(v.jsx)("div",{className:"".concat(B.a.box_20," ").concat(B.a.center),children:t.price})]})}function R(e){e.sum,e.setSum;var t=e.orderProducts,c=(e.setOrderProducts,e.cartItems,e.setPage);return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:B.a.cart_procedure,children:[Object(v.jsx)("div",{children:Object(v.jsx)("h2",{className:B.a.cart_title,children:"\u8cfc\u7269\u8eca"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:B.a.dot_current,children:"1"}),Object(v.jsx)("span",{className:B.a.cart_title_current,children:"\u9078\u64c7\u5546\u54c1"})]}),Object(v.jsx)("div",{className:B.a.line}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:B.a.dot_current,children:"2"}),Object(v.jsx)("span",{className:B.a.cart_title_current,children:"\u586b\u5beb\u8cc7\u6599"})]})]}),Object(v.jsxs)("section",{className:B.a.payPage_main_sec,children:[Object(v.jsx)("div",{className:"".concat(B.a.fl_hr_lf),children:Object(v.jsx)("span",{onClick:function(){c("cart")},children:"\u56de\u5230\u8cfc\u7269\u8eca"})}),Object(v.jsx)("div",{className:"".concat(B.a.box),children:t.map((function(e){return Object(v.jsx)(F,{item:e})}))}),Object(v.jsx)("div",{className:"".concat(B.a.box)}),Object(v.jsx)("div",{className:"".concat(B.a.box)}),Object(v.jsx)("div",{className:"".concat(B.a.box)})]})]})}var W=function(){var e=Object(a.useContext)(d),t=(e.cart,e.setCart,Object(a.useContext)(o)),c=(t.user,t.setUser,Object(a.useState)("cart")),n=Object(r.a)(c,2),s=n[0],i=n[1],j=Object(a.useState)([]),b=Object(r.a)(j,2),u=b[0],x=b[1],O=Object(a.useState)([]),h=Object(r.a)(O,2),m=h[0],p=h[1],_=Object(a.useState)(0),f=Object(r.a)(_,2),g=f[0],N=f[1],y=Object(l.g)().id;return Object(a.useEffect)((function(){fetch("http://localhost:3001/api/cart/".concat(y)).then((function(e){return e.json()})).then((function(e){x(e)})).catch((function(e){console.log(e)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(C,{}),"cart"===s&&Object(v.jsx)(U,{cartItems:u,setCartItems:x,orderProducts:m,setOrderProducts:p,sum:g,setSum:N,setPage:i}),"payment"===s&&Object(v.jsx)(R,{cartItems:u,setCartItems:x,orderProducts:m,setOrderProducts:p,sum:g,setSum:N,setPage:i})]})};function G(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(C,{}),Object(v.jsx)("h1",{children:"Admin Order"})]})}c(64);function X(){return Object(v.jsxs)("div",{className:"sideBar-div",children:[Object(v.jsxs)("div",{className:"small-block",children:[Object(v.jsx)("div",{className:"small-block-title",children:"\u7269\u6d41\u4e2d\u5fc3"}),Object(v.jsx)("div",{children:Object(v.jsx)("a",{children:"\u5f85\u51fa\u8ca8"})})]}),Object(v.jsxs)("div",{className:"small-block",children:[Object(v.jsx)("div",{className:"small-block-title",children:"\u5546\u54c1\u7ba1\u7406"}),Object(v.jsx)("div",{className:"small-block-item",children:Object(v.jsx)("a",{href:"/admin/product",children:"\u6211\u7684\u5546\u54c1"})}),Object(v.jsx)("div",{children:Object(v.jsx)("a",{href:"/admin/product/add",children:"\u65b0\u589e\u5546\u54c1"})})]}),Object(v.jsxs)("div",{className:"small-block",children:[Object(v.jsx)("div",{className:"small-block-title",children:"\u7269\u6d41\u4e2d\u5fc3"}),Object(v.jsx)("div",{children:Object(v.jsx)("a",{children:"\u5f85\u51fa\u8ca8"})})]})]})}c(65);function Y(){return Object(v.jsxs)("nav",{class:"admin-top-nav",children:[Object(v.jsx)("div",{children:Object(v.jsx)("h2",{children:"Admin Home"})}),Object(v.jsx)("div",{})]})}c(66);function K(e){var t=e.image,c=e.name,a=e.price,n=e.id,s=e.handleDelete;return Object(v.jsxs)("div",{className:"admin-product-card",children:[Object(v.jsx)("div",{className:"item-box1"}),Object(v.jsxs)("div",{className:"admin-product-info item-box2",children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{className:"admin-product-card-img",src:"http://localhost:3001"+t})}),Object(v.jsx)("div",{children:Object(v.jsx)("h2",{className:"admin-product-title",children:c})})]}),Object(v.jsxs)("div",{className:"admin-product-price item-box1",children:["$",a]}),Object(v.jsx)("div",{className:"item-box1",children:"1"}),Object(v.jsxs)("div",{className:"item-box1 admin-product-card-control",children:[Object(v.jsx)("button",{className:"admin-product-delete",onClick:function(){s(n)},children:"\u522a\u9664"}),Object(v.jsx)("a",{href:"/admin/product/edit/".concat(n),children:Object(v.jsx)("button",{class:"admin-product-edit",children:"\u7de8\u8f2f"})})]})]})}function $(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];function s(e){fetch("http://localhost:3001/api/delete/".concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){n(e)}))}return Object(a.useEffect)((function(){_().then((function(e){console.log(e),n(e)}))}),[]),Object(v.jsxs)("div",{class:"AdminProductAll",children:[Object(v.jsx)(Y,{}),Object(v.jsxs)("section",{className:"box",children:[Object(v.jsx)(X,{}),Object(v.jsx)("div",{className:"admin-product-main",children:Object(v.jsxs)("div",{className:"admin-product-main-box ",children:[Object(v.jsx)("div",{className:"search-box",children:Object(v.jsxs)("form",{children:[Object(v.jsx)("input",{className:"search-input",type:"text"}),Object(v.jsx)("input",{className:"submit-btn",type:"submit"})]})}),Object(v.jsx)("div",{className:"flex-box-hr",children:Object(v.jsx)("a",{className:"add-btn",href:"/admin/product/add",children:"new +"})}),Object(v.jsx)("div",{className:"flex-box-hor-lf",children:Object(v.jsxs)("span",{children:["\u5546\u54c1\u7e3d\u6578: ",c.length]})}),Object(v.jsxs)("div",{className:"admin-product-card-box",children:[Object(v.jsxs)("div",{className:"admin-product-card-labels",children:[Object(v.jsx)("div",{className:"item-box1",children:"\u9078\u53d6"}),Object(v.jsx)("div",{className:"item-box2",children:"\u5546\u54c1"}),Object(v.jsx)("div",{className:"item-box1",children:"\u50f9\u9322"}),Object(v.jsx)("div",{className:"item-box1",children:"\u6578\u91cf"}),Object(v.jsx)("div",{className:"item-box1",children:"\u64cd\u4f5c"})]}),c.map((function(e){return Object(v.jsx)(K,{image:e.image,price:e.price,name:e.name,id:e.id,handleDelete:s})}))]})]})})]}),Object(v.jsx)(y,{})]})}c(67);function Q(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),j=i[0],l=i[1],o=Object(a.useState)(""),d=Object(r.a)(o,2),b=d[0],u=d[1],x=Object(a.useState)(""),O=Object(r.a)(x,2),h=O[0],m=O[1],p=Object(a.useState)(""),_=Object(r.a)(p,2),f=_[0],g=_[1],N=Object(a.useState)(""),S=Object(r.a)(N,2),C=S[0],k=S[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(Y,{}),Object(v.jsx)("section",{className:"admin-product-sec",children:Object(v.jsxs)("div",{className:"admin-add-form-box",children:[Object(v.jsx)("div",{children:Object(v.jsx)("h2",{className:"add-page-title",children:"\u65b0\u589e\u5546\u54c1"})}),Object(v.jsxs)("form",{className:"admin-product-form",enctype:"multipart/form-data",onSubmit:function(e){var t;e.preventDefault(),t="book"===f?1:2;var a=new FormData;a.append("name",c),a.append("price",j),a.append("image",b),a.append("amount",h),a.append("category",t),a.append("description",C),fetch("http://localhost:3001/api/product/add",{method:"POST",body:a,headers:{Accept:"multipart/form-data"}}).then((function(e){return e.json()}))},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"* \u5546\u54c1\u540d\u7a31: "}),Object(v.jsx)("input",{className:"text-input",placeholder:"name",value:c,onChange:function(e){n(e.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"* \u50f9\u9322: "}),Object(v.jsx)("input",{className:"text-input",placeholder:"price",value:j,onChange:function(e){l(e.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"* \u6578\u91cf: "}),Object(v.jsx)("input",{className:"text-input",placeholder:"amount",value:h,onChange:function(e){m(e.target.value)}})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("select",{onChange:function(e){g(e.target.value)},children:[Object(v.jsx)("option",{children:"book"}),Object(v.jsx)("option",{children:"stationary"})]})}),Object(v.jsx)("div",{children:Object(v.jsx)("textarea",{className:"input-textarea",placeholder:"description",value:C,onChange:function(e){k(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];u(t)}})}),Object(v.jsx)("div",{className:"input-btn-box",children:Object(v.jsx)("input",{type:"submit",value:"submit",className:"input-btn"})})]})]})}),Object(v.jsx)(y,{})]})}c(68);function V(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),j=i[0],o=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),u=b[0],x=b[1],O=Object(a.useState)(""),h=Object(r.a)(O,2),m=h[0],p=h[1],_=Object(a.useState)(""),g=Object(r.a)(_,2),N=g[0],S=g[1],C=Object(a.useState)(""),k=Object(r.a)(C,2),P=k[0],w=k[1],I=Object(l.g)().id;return Object(a.useEffect)((function(){f(I).then((function(e){var t;console.log(e),t=2===e.categoriesId?"stationary":"book",n(e.name),o(e.price),w(e.description),p(e.amount),S(t)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(Y,{}),Object(v.jsx)("section",{className:"admin-product-sec",children:Object(v.jsxs)("div",{className:"admin-add-form-box",children:[Object(v.jsx)("div",{children:Object(v.jsx)("h2",{className:"add-page-title",children:"\u7de8\u8f2f\u5546\u54c1"})}),Object(v.jsxs)("form",{className:"admin-product-form",enctype:"multipart/form-data",onSubmit:function(e){var t;e.preventDefault(),t="book"===N?1:2;var a=new FormData;a.append("name",c),a.append("price",j),a.append("image",u),a.append("amount",m),a.append("category",t),a.append("description",P),fetch("http://localhost:3001/api/product/add",{method:"POST",body:a,headers:{Accept:"multipart/form-data"}}).then((function(e){return e.json()}))},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"* \u5546\u54c1\u540d\u7a31: "}),Object(v.jsx)("input",{className:"text-input",placeholder:"name",value:c,onChange:function(e){n(e.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"* \u50f9\u9322: "}),Object(v.jsx)("input",{className:"text-input",placeholder:"price",value:j,onChange:function(e){o(e.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"* \u6578\u91cf: "}),Object(v.jsx)("input",{className:"text-input",placeholder:"amount",value:m,onChange:function(e){p(e.target.value)}})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("select",{value:N,onChange:function(e){S(e.target.value)},children:[Object(v.jsx)("option",{children:"book"}),Object(v.jsx)("option",{children:"stationary"})]})}),Object(v.jsx)("div",{children:Object(v.jsx)("textarea",{className:"input-textarea",placeholder:"description",value:P,onChange:function(e){w(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];x(t)}})}),Object(v.jsxs)("div",{className:"input-btn-box",children:[Object(v.jsx)("input",{type:"submit",value:"submit",className:"input-btn"}),Object(v.jsx)("a",{href:"/admin/product",children:"\u53d6\u6d88\u7de8\u8f2f"})]})]})]})}),Object(v.jsx)(y,{})]})}var q=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),i=Object(r.a)(s,2),b=i[0],u=i[1];return Object(v.jsx)(d.Provider,{value:{cart:b,setCart:u},children:Object(v.jsx)(o.Provider,{value:{user:c,setUser:n},children:Object(v.jsx)(j.a,{children:Object(v.jsx)("div",{children:Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{path:"/admin/product/edit/:id",children:Object(v.jsx)(V,{})}),Object(v.jsx)(l.a,{path:"/admin/product/add",children:Object(v.jsx)(Q,{})}),Object(v.jsx)(l.a,{path:"/admin/product",children:Object(v.jsx)($,{})}),Object(v.jsx)(l.a,{path:"/admin",children:Object(v.jsx)(G,{})}),Object(v.jsx)(l.a,{path:"/cart/:id",children:Object(v.jsx)(W,{})}),Object(v.jsx)(l.a,{path:"/stationary/:id",children:Object(v.jsx)(J,{})}),Object(v.jsx)(l.a,{path:"/login",children:Object(v.jsx)(w,{})}),Object(v.jsx)(l.a,{path:"/join",children:Object(v.jsx)(I,{})}),Object(v.jsx)(l.a,{path:"/books",children:Object(v.jsx)(H,{})}),Object(v.jsx)(l.a,{path:"/stationaries",children:Object(v.jsx)(A,{})}),Object(v.jsx)(l.a,{path:"/",children:Object(v.jsx)(S,{})})]})})})})})};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(q,{})}),document.getElementById("root"))},9:function(e,t,c){e.exports={main_sec:"LogIn_main_sec__2aHjD",login_box:"LogIn_login_box__2-fzk",register_box:"LogIn_register_box__6ZuYW",login_form:"LogIn_login_form__iibW1",text_input:"LogIn_text_input__1HkQB",title:"LogIn_title__1tX8i",login_btn:"LogIn_login_btn__3MGW_",error:"LogIn_error__13jUX"}}},[[69,1,2]]]);
//# sourceMappingURL=main.59343cd4.chunk.js.map