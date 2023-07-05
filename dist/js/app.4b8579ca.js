(function(){"use strict";var e={8335:function(e,s,a){var i=a(9242),t=a(3396),n=a(7139);function o(e,s,a,i,o,d){const r=(0,t.up)("header-item"),l=(0,t.up)("sidebar-item"),c=(0,t.up)("main-wrapper");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(r),(0,t.Wm)(l),(0,t._)("div",{class:(0,n.C_)({"page-blur":o.isSidebarOpen})},[(0,t.Wm)(c)],2)],64)}var d=a.p+"img/logo.9492abac.svg",r=a.p+"img/logo-mob.bcc57a5b.svg";const l={class:"header__burger-wrap"},c=(0,t._)("span",null,null,-1),_=(0,t._)("span",null,null,-1),p=(0,t._)("span",null,null,-1),h=[c,_,p],u=(0,t._)("a",{href:"https://coinfuze.com/"},[(0,t._)("img",{class:"header__logo header__logo--desktop",src:d,alt:"logo"}),(0,t._)("img",{class:"header__logo header__logo--mob",src:r,alt:"logo"})],-1),b=(0,t._)("span",{class:"header__icon-wallet icon-wallet"},null,-1),v=(0,t._)("span",{class:"header__icon-arrow icon-arrow_drop_down"},null,-1),w=[b,v],m={key:0,class:"header__balance-window",ref:"balanceWindow"},f=(0,t._)("p",{class:"header__balance-text"},[(0,t.Uk)("Баланс аккаунта: "),(0,t._)("span",null,"470 USDT")],-1),g=(0,t._)("p",{class:"header__balance-text"},[(0,t.Uk)("Баланс активных средств: "),(0,t._)("span",null,"1700 USDT")],-1),y=(0,t._)("span",{class:"header__icon-close icon-close"},null,-1),W=[f,g,y],k={class:"header__items"},x=(0,t._)("div",{class:"header__balance"},[(0,t._)("p",{class:"header__balance-text"},[(0,t.Uk)("Баланс аккаунта:"),(0,t._)("span",null,"470 USDT")]),(0,t._)("p",{class:"header__balance-text"},[(0,t.Uk)("Баланс активных средств:"),(0,t._)("span",null,"1700 USDT")])],-1),P=(0,t._)("span",{class:"header__icon-alarm icon-alarm"},null,-1),S=(0,t._)("div",{class:"header__added"},[(0,t._)("span",{class:"header__icon-notice icon-notice"})],-1),O=[P,S],C={key:0,class:"header__bell-window",ref:"bellWindow"},D=(0,t.uE)('<span class="header__icon-close icon-close"></span><div class="header__bell-items"><p class="header__bell-time">09:23</p><span class="header__bell-icon icon-clipboard"></span><div class="header__bell-content"><div class="header__bell-title">Поздравляем!</div><div class="header__bell-text">Активация торгового плана прошла успешно</div></div></div><div class="header__bell-items"><p class="header__bell-time">05:23</p><span class="header__bell-icon icon-info"></span><div class="header__bell-content"><div class="header__bell-title">Регистрация</div><div class="header__bell-text">Вы зарегистрировалить в личном кабинете успешно</div></div></div>',3),I=[D],B={class:"header__personal"},U=(0,t._)("span",{class:"icon-user1 header__icon"},null,-1),H=[U],z=(0,t._)("div",{class:"header__name"},"Дмитрий",-1),T={key:0,class:"header__personal-window",ref:"personalWindow"},E=(0,t.uE)('<span class="header__icon-close icon-close"></span><div class="header__personal-circle"> D </div><h3 class="header__personal-name">Дмитрий Поташев</h3><p class="header__personal-text">id 2543378</p><p class="header__personal-text">(555) 555-1234</p><p class="header__personal-text header__personal-text--special">dmitry1984@gmail.com</p>',6),L=(0,t._)("div",{class:"header__personal-content header__personal-content--special"},[(0,t._)("p",{class:"header__personal-text"},[(0,t._)("span",{class:"icon-wallet"}),(0,t.Uk)("Баланс аккаунта")]),(0,t._)("p",{class:"header__finance-text"},"470 USDT")],-1),M={class:"header__personal-content"},Z=(0,t._)("p",{class:"header__personal-text"},[(0,t._)("span",{class:"icon-user-plus"}),(0,t.Uk)("Пригласить друзей")],-1),q=(0,t._)("a",{class:"btn header__logout-btn",href:"https://coinfuze.com/authorization"},"Выход",-1);function $(e,s,a,i,o,d){const r=(0,t.up)("sidebar-item"),c=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",{class:"header",onClick:s[5]||(s[5]=(...e)=>d.closeSidebar&&d.closeSidebar(...e))},[(0,t._)("div",l,[(0,t._)("div",{class:(0,n.C_)(["header__burger",{open:o.isSidebarOpen}]),onClick:s[0]||(s[0]=(...e)=>d.toggleSidebar&&d.toggleSidebar(...e)),onCloseBurger:s[1]||(s[1]=(...e)=>d.closeBurger&&d.closeBurger(...e))},h,34),(0,t.Wm)(r,{class:(0,n.C_)({"sidebar--open":o.isSidebarOpen}),ref:"menuSidebar"},null,8,["class"]),u]),(0,t._)("div",{class:"header__wallet",onClick:s[2]||(s[2]=(...e)=>d.toggleBalanceWindow&&d.toggleBalanceWindow(...e))},w),o.isBalanceWindowOpen?((0,t.wg)(),(0,t.iD)("div",m,W,512)):(0,t.kq)("",!0),(0,t._)("div",k,[x,(0,t._)("div",{class:"header__bell",onClick:s[3]||(s[3]=(...e)=>d.toggleBellWindow&&d.toggleBellWindow(...e))},O),o.isBellWindowOpen?((0,t.wg)(),(0,t.iD)("div",C,I,512)):(0,t.kq)("",!0),(0,t._)("div",B,[(0,t._)("div",{class:"header__icon-wrap",onClick:s[4]||(s[4]=(...e)=>d.togglePersonallWindow&&d.togglePersonallWindow(...e))},H),z,o.isPersonallWindowOpen?((0,t.wg)(),(0,t.iD)("div",T,[E,(0,t.Wm)(c,{to:"/profile",class:"header__personal-btn btn"},{default:(0,t.w5)((()=>[(0,t.Uk)("Личная информация")])),_:1}),L,(0,t._)("div",M,[Z,(0,t.Wm)(c,{class:"btn header__add-btn",to:"/partnership"},{default:(0,t.w5)((()=>[(0,t.Uk)("Добавить")])),_:1})]),q],512)):(0,t.kq)("",!0)])])])}const j={class:"sidebar__nav"},R=(0,t._)("span",{class:"icon-link sidebar__icon"},null,-1),A=(0,t._)("span",{class:"icon-in sidebar__icon"},null,-1),F=(0,t._)("span",{class:"icon-settings sidebar__icon"},null,-1),G=(0,t._)("span",{class:"icon-clipboard sidebar__icon"},null,-1),J=(0,t._)("span",{class:"icon-out sidebar__icon"},null,-1),K=(0,t._)("span",{class:"icon-user sidebar__icon"},null,-1),N=(0,t._)("li",null,[(0,t._)("a",{class:"sidebar__link",href:"https://faq.coinfuze.com/",target:"_blank"},[(0,t._)("span",{class:"icon-question-circle-o sidebar__icon"}),(0,t.Uk)("FAQ")])],-1),Y=(0,t._)("span",{class:"icon-megaphone sidebar__icon"},null,-1),Q=(0,t._)("a",{class:"btn sidebar__btn",href:"https://coinfuze.com/authorization"},"Выйти с аккаунта",-1);function V(e,s,a,i,o,d){const r=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("aside",{class:(0,n.C_)(["sidebar",{"sidebar--open":o.isSidebarOpen}]),ref:"menuSidebar"},[(0,t._)("nav",j,[(0,t._)("ul",null,[(0,t._)("li",{class:(0,n.C_)({active:d.isCurrentRoute("/")})},[(0,t.Wm)(r,{onClick:[d.closeSidebar,s[0]||(s[0]=e=>d.activateMenu("/"))],class:"sidebar__link",to:"/"},{default:(0,t.w5)((()=>[R,(0,t.Uk)("Панель управления")])),_:1},8,["onClick"])],2),(0,t._)("li",{class:(0,n.C_)({active:d.isCurrentRoute("/deposit")})},[(0,t.Wm)(r,{onClick:[d.closeSidebar,s[1]||(s[1]=e=>d.activateMenu("/deposit"))],class:"sidebar__link",to:"/deposit"},{default:(0,t.w5)((()=>[A,(0,t.Uk)("Депозит")])),_:1},8,["onClick"])],2),(0,t._)("li",{class:(0,n.C_)({active:d.isCurrentRoute("/plans")})},[(0,t.Wm)(r,{onClick:[d.closeSidebar,s[2]||(s[2]=e=>d.activateMenu("/plans"))],class:"sidebar__link",to:"/plans"},{default:(0,t.w5)((()=>[F,(0,t.Uk)("Управление планами")])),_:1},8,["onClick"])],2),(0,t._)("li",{class:(0,n.C_)({active:d.isCurrentRoute("/partnership")})},[(0,t.Wm)(r,{onClick:[d.closeSidebar,s[3]||(s[3]=e=>d.activateMenu("/partnership"))],class:"sidebar__link",to:"/partnership"},{default:(0,t.w5)((()=>[G,(0,t.Uk)("Партнерская программа")])),_:1},8,["onClick"])],2),(0,t._)("li",{class:(0,n.C_)({active:d.isCurrentRoute("/withdrawal")})},[(0,t.Wm)(r,{onClick:[d.closeSidebar,s[4]||(s[4]=e=>d.activateMenu("/withdrawal"))],class:"sidebar__link",to:"/withdrawal"},{default:(0,t.w5)((()=>[J,(0,t.Uk)("Вывод средств")])),_:1},8,["onClick"])],2),(0,t._)("li",{class:(0,n.C_)({active:d.isCurrentRoute("/profile")})},[(0,t.Wm)(r,{onClick:[d.closeSidebar,s[5]||(s[5]=e=>d.activateMenu("/profile"))],class:"sidebar__link",to:"/profile"},{default:(0,t.w5)((()=>[K,(0,t.Uk)("Личная информация")])),_:1},8,["onClick"])],2),N,(0,t._)("li",{class:(0,n.C_)({active:d.isCurrentRoute("/news")})},[(0,t.Wm)(r,{onClick:[d.closeSidebar,s[6]||(s[6]=e=>d.activateMenu("/news"))],class:"sidebar__link",to:"/news"},{default:(0,t.w5)((()=>[Y,(0,t.Uk)("Новости")])),_:1},8,["onClick"])],2)])]),Q],2)}var X={beforeRouteLeave(e,s,a){this.isSidebarOpen=!1,a()},name:"SidebarItem",data(){return{isSidebarOpen:!1}},methods:{isCurrentRoute(e){return this.$route.path===e},activateMenu(e){const s=document.querySelectorAll("nav ul li");s.forEach((e=>{e.classList.remove("active")}));const a=document.querySelector(`nav ul li a[href='${e}']`).parentNode;a.classList.add("active")},closeSidebar(){this.$refs.menuSidebar.classList.remove("sidebar--open"),this.isSidebarOpen=!1}}},ee=a(89);const se=(0,ee.Z)(X,[["render",V]]);var ae=se,ie={name:"HeaderItem",components:{SidebarItem:ae},data(){return{isSidebarOpen:!1,isBalanceWindowOpen:!1,isBellWindowOpen:!1,isPersonallWindowOpen:!1}},methods:{toggleSidebar(e){e.stopPropagation(),this.isSidebarOpen=!this.isSidebarOpen,this.isBalanceWindowOpen=!1,this.isBellWindowOpen=!1,this.isPersonallWindowOpen=!1,this.applyBlurEffect(),this.applyOverflowHidden()},applyOverflowHidden(){this.isSidebarOpen?document.body.classList.add("hidden"):document.body.classList.remove("hidden")},applyBlurEffect(){const e=document.querySelector(".blur");e&&e.classList.toggle("header__blur",this.isSidebarOpen)},closeSidebar(e){const s=e.target,a=this.$refs.menuSidebar,i=a?a.$el:null,t=this.$refs.balanceWindow,n=this.$refs.bellWindow,o=this.$refs.personalWindow,d=this.$el;(!d.contains(s)||i&&!i.contains(s)||t&&!t.contains(s)||n&&!n.contains(s)||o&&!o.contains(s))&&(this.isSidebarOpen=!1,this.isBalanceWindowOpen=!1,this.isBellWindowOpen=!1,this.isPersonallWindowOpen=!1,this.applyBlurEffect(),this.applyOverflowHidden())},toggleBalanceWindow(e){e.stopPropagation(),this.isBalanceWindowOpen=!this.isBalanceWindowOpen,this.isBellWindowOpen=!1,this.isPersonallWindowOpen=!1,this.isSidebarOpen=!1,this.applyBlurEffect(),this.applyOverflowHidden()},toggleBellWindow(e){e.stopPropagation(),this.isBellWindowOpen=!this.isBellWindowOpen,this.isBalanceWindowOpen=!1,this.isPersonallWindowOpen=!1,this.isSidebarOpen=!1,this.applyBlurEffect(),this.applyOverflowHidden();const s=document.querySelector(".header__added");s&&(s.style.display="none")},togglePersonallWindow(e){e.stopPropagation(),this.isPersonallWindowOpen=!this.isPersonallWindowOpen,this.isBalanceWindowOpen=!1,this.isBellWindowOpen=!1,this.isSidebarOpen=!1,this.applyBlurEffect(),this.applyOverflowHidden()},closeBurger(){this.isSidebarOpen=!1;const e=document.querySelector(".header__burger");e&&e.classList.remove("open")}},mounted(){document.body.addEventListener("click",this.closeSidebar)},beforeUnmount(){document.body.removeEventListener("click",this.closeSidebar)}};const te=(0,ee.Z)(ie,[["render",$]]);var ne=te;function oe(e,s,a,i,n,o){const d=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)(d)}var de={name:"MainWrapper",mounted(){this.appHeight(),window.addEventListener("resize",this.appHeight)},beforeUnmount(){window.removeEventListener("resize",this.appHeight)},methods:{appHeight(){const e=document.documentElement;e.style.setProperty("--app-height",`${window.innerHeight}px`)}}};const re=(0,ee.Z)(de,[["render",oe]]);var le=re,ce={name:"App",components:{HeaderItem:ne,SidebarItem:ae,MainWrapper:le},data(){return{isSidebarOpen:!1}}};const _e=(0,ee.Z)(ce,[["render",o]]);var pe=_e,he=a(2483);const ue={class:""};function be(e,s){return(0,t.wg)(),(0,t.iD)("div",ue)}const ve={},we=(0,ee.Z)(ve,[["render",be]]);var me=we,fe=a.p+"img/tether.8fdd98e1.png";const ge={class:"dashboard blur"},ye={class:"dashboard__wrapper wrapper"},We=(0,t._)("div",{class:"dashboard__header"},[(0,t._)("h2",{class:"dashboard__title"},"Панель управления")],-1),ke={key:0,class:"dashboard__info"},xe=(0,t.uE)('<div class="dashboard__info-content"><span class="icon-info dashboard__icon-info"></span><div class="dashboard__info-wrap"><h3 class="dashboard__info-title">Ваша регистрация почти завершена</h3><p class="dashboard__info-text">Перед инвестированием необходимо завершить процесс регистрации, заполнив свои личные данные.</p></div></div>',1),Pe={class:"dashboard__items"},Se=(0,t.uE)('<div class="dashboard__item"><h3 class="dashboard__subtitle dashboard__text">Всего средств</h3><div class="dashboard__finance-total dashboard__text"><div class="dashboard__finance-item"><p class="dashboard__finance-text dashboard__finance-text--special">2240 USTD</p><div class="dashboard__finance-wrap"><img class="dashboard__finance-img" src="'+fe+'" alt="ustd"></div></div></div><div class="dashboard__finance-free dashboard__text"><div class="dashboard__finance-item"><p class="dashboard__finance-text">470 USTD</p><div class="dashboard__finance-wrap"><img class="dashboard__finance-img" src="'+fe+'" alt="ustd"></div></div><p class="dashboard__finance-status">Свободных средств</p></div><div class="dashboard__finance-active dashboard__text"><div class="dashboard__finance-item"><p class="dashboard__finance-text">1700 USTD</p><div class="dashboard__finance-wrap"><img class="dashboard__finance-img" src="'+fe+'" alt="ustd"></div></div><p class="dashboard__finance-status">Активных средств</p></div></div><div class="dashboard__item"><h3 class="dashboard__subtitle dashboard__text">Общая прибыль</h3><div class="dashboard__finance-total dashboard__text"><div class="dashboard__finance-item"><p class="dashboard__finance-text dashboard__finance-text--special">330 USTD</p><div class="dashboard__finance-wrap"><img class="dashboard__finance-img" src="'+fe+'" alt="ustd"></div></div></div><div class="dashboard__text--special"><p>Инвестиционные планы</p><p>1</p></div><div class="dashboard__text--special"><p>Активные инвестиции</p><p>247,45</p></div><div class="dashboard__text--special"><p>Участник с</p><p>03.08.2022</p></div><div class="dashboard__text--special"><p>Выведенные средства</p><p>0.00</p></div></div><div class="dashboard__item"><h3 class="dashboard__subtitle dashboard__text">Инвестированные средства</h3><div class="dashboard__finance-total dashboard__text"><div class="dashboard__finance-item"><p class="dashboard__finance-text dashboard__finance-text--special">1770 USTD</p><div class="dashboard__finance-wrap"><img class="dashboard__finance-img" src="'+fe+'" alt="ustd"></div></div></div><div class="dashboard__text--special"><p>Общая прибыль планов</p><p>230</p></div><div class="dashboard__text--special"><p>Активных планов</p><p>1</p></div><div class="dashboard__text--special"><p>Закрытых планов</p><p>3</p></div><div class="dashboard__text--special"><p>Планов на реинвестициях</p><p>1</p></div></div><div class="dashboard__item"><h3 class="dashboard__subtitle dashboard__text">Партнерская программа</h3><div class="dashboard__finance-total dashboard__text"><div class="dashboard__finance-item"><p class="dashboard__finance-text dashboard__finance-text--special">17,45 USTD</p><div class="dashboard__finance-wrap"><img class="dashboard__finance-img" src="'+fe+'" alt="ustd"></div></div></div><div class="dashboard__text--special"><p>К-ство партнеров</p><p>17</p></div><div class="dashboard__text--special"><p>Партнеров 1-й линии</p><p>3</p></div><div class="dashboard__text--special"><p>Партнеров 2-й линии</p><p>6</p></div><div class="dashboard__text--special"><p>Партнеров 3-й линии</p><p>8</p></div></div><div class="dashboard__item"><h3 class="dashboard__subtitle dashboard__text">Уведомления</h3><div class="dashboard__notification-text"><p class="dashboard__notification-time">08:01</p><p class="dashboard__notification-active">Регистрация</p><p>Вы зарегистрировалить в личном кабинете успешно</p></div><div class="dashboard__notification-text"><p class="dashboard__notification-time">09:23</p><p class="dashboard__notification-active">Пополнение депозита</p><p>Транзакция по пополнению счета прошла успешно</p></div><div class="dashboard__notification-text"><p class="dashboard__notification-time">10:45</p><p class="dashboard__notification-inactive">Активация</p><p>Вам нужно активировать ваш аккаунт, чтобы продолжить работу</p></div></div>',5),Oe={class:"dashboard__item"},Ce=(0,t._)("h3",{class:"dashboard__subtitle dashboard__text"},"Новости",-1),De={class:"dashboard__news"},Ie=(0,t._)("p",{class:"dashboard__news-time"},"18 Февраль 2022",-1),Be=(0,t._)("p",{class:"dashboard__news-title"},"Stripe в сотрудничестве с Twitter вновь займется развитием криптоплатежей",-1),Ue=(0,t._)("p",{class:"dashboard__news-text"},"Платежный сервис Stripe в сотрудничестве с Twitter вновь займется развитием криптовалютных платежей. Один из самых дорогих стартапов в мире позволит пользователям Twitter получать за свой...",-1),He={class:"dashboard__item dashboard__item--special"},ze=(0,t._)("h3",{class:"dashboard__subtitle dashboard__text"},"График алгоритма, %",-1),Te={class:"dashboard__chart"};function Ee(e,s,a,i,n,o){const d=(0,t.up)("router-link"),r=(0,t.up)("line-chart"),l=(0,t.up)("footer-item");return(0,t.wg)(),(0,t.iD)("article",ge,[(0,t._)("div",ye,[We,n.showInfo?((0,t.wg)(),(0,t.iD)("div",ke,[xe,(0,t._)("button",{class:"btn dashboard__info-btn",onClick:s[0]||(s[0]=(...e)=>o.hideInfo&&o.hideInfo(...e))},"Завершить регистрацию")])):(0,t.kq)("",!0),(0,t._)("div",Pe,[Se,(0,t._)("div",Oe,[Ce,(0,t._)("div",De,[Ie,Be,Ue,(0,t.Wm)(d,{class:"btn dashboard__btn",to:"/news"},{default:(0,t.w5)((()=>[(0,t.Uk)("Читать все новости")])),_:1})])]),(0,t._)("div",He,[ze,(0,t._)("div",Te,[(0,t.Wm)(r)])])])]),(0,t.Wm)(l)])}const Le={class:"footer"},Me=(0,t.uE)('<div class="footer__item"><p class="footer__text">© 2023 CoinFuze. Все права защищены.</p></div><div class="footer__item"><a class="footer__link" href="#">Условия использования</a><a class="footer__link" href="#">Политика конфиденциальности</a><a class="footer__link" href="#">Партнерская программа</a></div>',2),Ze=[Me];function qe(e,s,a,i,n,o){return(0,t.wg)(),(0,t.iD)("div",Le,Ze)}var $e={name:"FooterItem"};const je=(0,ee.Z)($e,[["render",qe]]);var Re=je;const Ae=(0,t._)("defs",null,[(0,t._)("linearGradient",{id:"grad",gradientTransform:"rotate(90)"},[(0,t._)("stop",{offset:"0%","stop-color":"green","stop-opacity":"1"}),(0,t._)("stop",{offset:"100%","stop-color":"rgb(7 194 129)","stop-opacity":"0.5"})])],-1);function Fe(e,s,a,i,n,o){const d=(0,t.up)("Grid"),r=(0,t.up)("Area"),l=(0,t.up)("Line"),c=(0,t.up)("Tooltip"),_=(0,t.up)("Chart");return(0,t.wg)(),(0,t.j4)(_,{size:{width:e.chartWidth,height:300},data:e.data,margin:e.margin,class:"chart"},{layers:(0,t.w5)((()=>[(0,t.Wm)(d,{strokeDasharray:"2,2"}),(0,t.Wm)(r,{dataKeys:["name","pl"],type:"monotone",areaStyle:{fill:"url(#grad)"}},null,8,["areaStyle"]),(0,t.Wm)(l,{dataKeys:["name","pl"],type:"monotone",lineStyle:{stroke:"rgb(7 194 129)"}},null,8,["lineStyle"]),Ae])),widgets:(0,t.w5)((()=>[(0,t.Wm)(c,{borderColor:"#48CAE4",config:{pl:{color:"#9f7aea"},avg:{hide:!0},inc:{hide:!0}}})])),_:1},8,["size","data","margin"])}var Ge=a(4870),Je=a(1160);const Ke=[{name:"Jan",pl:200,avg:500,inc:300},{name:"Feb",pl:400,avg:900,inc:400},{name:"Apr",pl:600,avg:400,inc:500},{name:"Mar",pl:500,avg:1300,inc:700},{name:"May",pl:400,avg:100,inc:200},{name:"Jun",pl:600,avg:400,inc:300},{name:"Jul",pl:700,avg:90,inc:600},{name:"Aug",pl:900,avg:90,inc:400},{name:"Sep",pl:1e3,avg:90,inc:500},{name:"Oct",pl:900,avg:90,inc:300},{name:"Nov",pl:800,avg:90,inc:200},{name:"Dec",pl:700,avg:90,inc:500}];var Ne=(0,t.aZ)({name:"LineChart",components:{Chart:Je.kL,Grid:Je.rj,Line:Je.x1,Area:Je.uN,Tooltip:Je.u},setup(){const e=(0,Ge.iH)(Ke),s=(0,Ge.iH)({left:0,top:20,right:20,bottom:0});let a;window.innerWidth>=1800?a=(0,Ge.iH)((window.innerWidth-400)/2-70):window.innerWidth<1800&&window.innerWidth>1450?a=(0,Ge.iH)((window.innerWidth-310)/2-70):window.innerWidth<=1450&&window.innerWidth>1270?a=(0,Ge.iH)((window.innerWidth-280)/2-70):window.innerWidth<=1270&&window.innerWidth>1024?a=(0,Ge.iH)(window.innerWidth/2-70):window.innerWidth<=1024&&window.innerWidth>1023?a=(0,Ge.iH)(910):window.innerWidth<=1023&&window.innerWidth>550?a=(0,Ge.iH)(window.innerWidth-90):window.innerWidth<=550&&(a=(0,Ge.iH)(500));const i=()=>{window.innerWidth>=1800?a.value=(window.innerWidth-370)/2-70:window.innerWidth<1800&&window.innerWidth>1450?a.value=(window.innerWidth-310)/2-70:window.innerWidth<=1450&&window.innerWidth>1270?a.value=(window.innerWidth-280)/2-70:window.innerWidth<=1270&&window.innerWidth>1024?a.value=window.innerWidth/2-70:window.innerWidth<=1024&&window.innerWidth>1023?a.value=910:window.innerWidth<=1023&&window.innerWidth>550?a.value=window.innerWidth-90:window.innerWidth<=550&&(a.value=500)};return window.addEventListener("resize",i),(0,t.YP)(a,(()=>{window.removeEventListener("resize",i)}),{immediate:!0,flush:"post"}),{data:e,margin:s,chartWidth:a}}});const Ye=(0,ee.Z)(Ne,[["render",Fe]]);var Qe=Ye,Ve={name:"DashboardPage",data(){return{showInfo:!0}},components:{FooterItem:Re,LineChart:Qe},methods:{hideInfo(){this.showInfo=!1}}};const Xe=(0,ee.Z)(Ve,[["render",Ee]]);var es=Xe;const ss={class:"deposit blur"},as={class:"deposit__wrapper wrapper"},is=(0,t._)("div",{class:"deposit__item"},null,-1),ts=(0,t._)("div",{class:"deposit__item"},null,-1);function ns(e,s,a,i,n,o){const d=(0,t.up)("deposit-history"),r=(0,t.up)("footer-item");return(0,t.wg)(),(0,t.iD)("article",ss,[(0,t._)("div",as,[is,ts,(0,t.Wm)(d)]),(0,t.Wm)(r)])}const os={class:"deposit-history"},ds=(0,t.uE)('<h3 class="deposit-history__subtitle">История</h3><div class="deposit-history__item-title"><p class="deposit-history__text deposit-history__col">Дата депозита</p><p class="deposit-history__text deposit-history__col">Способ оплаты</p><p class="deposit-history__text deposit-history__col">Сумма депозита</p><p class="deposit-history__text deposit-history__col">Статус транзакции</p><p class="deposit-history__text deposit-history__col">ID транзакции</p></div>',2),rs={class:"deposit-history__text deposit-history__col"},ls=(0,t._)("p",{class:"deposit-history__text deposit-history__col"},[(0,t._)("img",{class:"deposit-history__finance-img",src:fe,alt:"ustd"}),(0,t.Uk)("Tether")],-1),cs={class:"deposit-history__text deposit-history__col"},_s={class:"deposit-history__text deposit-history__col"},ps={class:"deposit-history__text deposit-history__col"},hs={class:"deposit-history__item-footer"},us={class:"deposit-history__dropdown-wrap"},bs={class:"deposit-history__dropdown"},vs={class:"deposit-history__dropbtn"},ws=(0,t._)("span",{class:"icon-arrow_drop_down1"},null,-1),ms={class:"deposit-history__dropdown-content"},fs={key:0},gs={class:"deposit-history__page-btns"},ys=["disabled"],Ws=(0,t._)("span",{class:"deposit-history__arrow icon-keyboard_arrow_left"},null,-1),ks=[Ws],xs=["disabled"],Ps=(0,t._)("span",{class:"deposit-history__arrow icon-keyboard_arrow_right"},null,-1),Ss=[Ps];function Os(e,s,a,i,o,d){return(0,t.wg)(),(0,t.iD)("div",os,[ds,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.displayedItems,((e,s)=>((0,t.wg)(),(0,t.iD)("div",{class:"deposit-history__item",key:s},[(0,t._)("p",rs,(0,n.zw)(e.date),1),ls,(0,t._)("p",cs,(0,n.zw)(e.money),1),(0,t._)("p",_s,[(0,t.Uk)((0,n.zw)(e.status),1),(0,t._)("span",{class:(0,n.C_)([d.getStatusClass(e.status),"deposit-history__status"])},null,2)]),(0,t._)("p",ps,(0,n.zw)(e.id),1)])))),128)),(0,t._)("div",hs,[(0,t._)("div",us,[(0,t._)("div",bs,[(0,t._)("button",vs,[(0,t.Uk)((0,n.zw)(o.itemsPerPage)+" ",1),ws]),(0,t._)("div",ms,[(0,t._)("a",{onClick:s[0]||(s[0]=e=>d.updateItemsPerPage(5))},"5"),(0,t._)("a",{onClick:s[1]||(s[1]=e=>d.updateItemsPerPage(10))},"10"),(0,t._)("a",{onClick:s[2]||(s[2]=e=>d.updateItemsPerPage(15))},"15")])]),o.displayedItems.length>0?((0,t.wg)(),(0,t.iD)("div",fs,"Показано "+(0,n.zw)(d.endItemIndex)+" из "+(0,n.zw)(o.items.length),1)):(0,t.kq)("",!0)]),(0,t._)("div",gs,[(0,t._)("button",{class:"deposit-history__page-btn",onClick:s[3]||(s[3]=(...e)=>d.previousPage&&d.previousPage(...e)),disabled:1===o.currentPage},ks,8,ys),(0,t._)("button",{class:(0,n.C_)(["deposit-history__page-btn",{active:!0}]),onClick:s[4]||(s[4]=e=>d.goToPage(o.currentPage))},(0,n.zw)(o.currentPage),1),(0,t._)("button",{class:"deposit-history__page-btn",onClick:s[5]||(s[5]=(...e)=>d.nextPage&&d.nextPage(...e)),disabled:o.currentPage===d.totalPages},Ss,8,xs)])])])}var Cs={data(){return{items:[{id:13343434,date:"2023.05.28",money:300,status:"Завершен"},{id:13343434,date:"2023.05.27",money:200,status:"В обработке"},{id:13343434,date:"2023.05.26",money:400,status:"Отклонено"},{id:13343434,date:"2023.05.25",money:400,status:"В обработке"},{id:13343434,date:"2023.05.23",money:400,status:"Завершен"},{id:13343434,date:"2023.05.23",money:600,status:"Завершен"},{id:13343434,date:"2023.05.23",money:400,status:"В обработке"},{id:13343434,date:"2023.05.23",money:700,status:"Завершен"},{id:13343434,date:"2023.05.19",money:200,status:"Завершен"},{id:13343434,date:"2023.05.18",money:400,status:"В обработке"},{id:13343434,date:"2023.05.17",money:300,status:"Отклонено"},{id:13343434,date:"2023.05.15",money:800,status:"Завершен"},{id:13343434,date:"2023.05.13",money:900,status:"Отклонено"},{id:13343434,date:"2023.05.11",money:400,status:"Завершен"},{id:13343434,date:"2023.05.10",money:400,status:"Завершен"}],displayedItems:[],itemsPerPage:5,currentPage:1}},computed:{totalPages(){return Math.ceil(this.items.length/this.itemsPerPage)},startItemIndex(){return(this.currentPage-1)*this.itemsPerPage+1},endItemIndex(){return Math.min(this.currentPage*this.itemsPerPage,this.items.length)}},mounted(){this.showItems()},methods:{showItems(e){e&&(this.itemsPerPage=e);const s=(this.currentPage-1)*this.itemsPerPage,a=s+this.itemsPerPage;this.displayedItems=this.items.slice(s,a)},updateItemsPerPage(e){this.itemsPerPage=e,this.showItems()},previousPage(){this.currentPage>1&&(this.currentPage--,this.showItems())},nextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.showItems())},goToPage(e){this.currentPage=e,this.showItems()},getStatusClass(e){return"Завершен"===e?"deposit-history__status-green":"В обработке"===e?"deposit-history__status-orange":"Отклонено"===e?"deposit-history__status-red":""}}};const Ds=(0,ee.Z)(Cs,[["render",Os]]);var Is=Ds,Bs={name:"DashboardPage",data(){return{showInfo:!0}},components:{DepositHistory:Is,FooterItem:Re}};const Us=(0,ee.Z)(Bs,[["render",ns]]);var Hs=Us;const zs={class:""};function Ts(e,s){return(0,t.wg)(),(0,t.iD)("div",zs)}const Es={},Ls=(0,ee.Z)(Es,[["render",Ts]]);var Ms=Ls;const Zs={class:""};function qs(e,s){return(0,t.wg)(),(0,t.iD)("div",Zs)}const $s={},js=(0,ee.Z)($s,[["render",qs]]);var Rs=js;const As={class:""};function Fs(e,s){return(0,t.wg)(),(0,t.iD)("div",As)}const Gs={},Js=(0,ee.Z)(Gs,[["render",Fs]]);var Ks=Js;const Ns={class:""};function Ys(e,s){return(0,t.wg)(),(0,t.iD)("div",Ns)}const Qs={},Vs=(0,ee.Z)(Qs,[["render",Ys]]);var Xs=Vs;const ea=(0,he.p7)({history:(0,he.PO)(),scrollBehavior(){return{left:0,top:0}},routes:[{path:"/partnership",name:"partnership",component:me},{path:"/",name:"dashboard",component:es},{path:"/deposit",name:"deposit",component:Hs},{path:"/news",name:"news",component:Ms},{path:"/profile",name:"profile",component:Rs},{path:"/plans",name:"plans",component:Ks},{path:"/withdrawal",name:"withdrawal",component:Xs}]});var sa=ea;const aa=(0,i.ri)({});aa.use(ea);var ia=a(65);const ta=(0,ia.MT)({state:{},mutations:{},actions:{},getters:{}}),na=(0,i.ri)({});na.use(ta);var oa=ta;const da=(0,i.ri)(pe);da.use(oa),da.use(sa),da.mount("#app")}},s={};function a(i){var t=s[i];if(void 0!==t)return t.exports;var n=s[i]={exports:{}};return e[i](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(s,i,t,n){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],t=e[c][1],n=e[c][2];for(var d=!0,r=0;r<i.length;r++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](i[r])}))?i.splice(r--,1):(d=!1,n<o&&(o=n));if(d){e.splice(c--,1);var l=t();void 0!==l&&(s=l)}}return s}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,t,n]}}(),function(){a.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(s,{a:s}),s}}(),function(){a.d=function(e,s){for(var i in s)a.o(s,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(s){return 0===e[s]};var s=function(s,i){var t,n,o=i[0],d=i[1],r=i[2],l=0;if(o.some((function(s){return 0!==e[s]}))){for(t in d)a.o(d,t)&&(a.m[t]=d[t]);if(r)var c=r(a)}for(s&&s(i);l<o.length;l++)n=o[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},i=self["webpackChunkcoinfuze"]=self["webpackChunkcoinfuze"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(8335)}));i=a.O(i)})();
//# sourceMappingURL=app.4b8579ca.js.map