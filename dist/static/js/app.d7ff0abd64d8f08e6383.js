webpackJsonp([1],{"1kCr":function(e,t){},"5KUf":function(e,t){},"91VP":function(e,t){},CbyA:function(e,t){},FX6C:function(e,t){},GOQM:function(e,t){},HwrN:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),s=r("mvHQ"),a=r.n(s),i=r("woOf"),o=r.n(i),l={name:"App",created:function(){var e=this;sessionStorage.getItem("store")&&this.$store.replaceState(o()({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",function(){sessionStorage.setItem("store",a()(e.$store.state))})}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"fillcontain",attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var u=r("VU/8")(l,c,!1,function(e){r("QFuJ")},null,null).exports,d=r("/ocq"),p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"manage_page fillcontain"},[r("el-row",{staticClass:"fillheight"},[r("el-col",{staticClass:"menuCol",attrs:{span:4}},[r("el-menu",{staticClass:"menuCss",attrs:{"default-active":e.defaultActive,"background-color":"#324057","text-color":"#fff","active-text-color":"#ffd04b",router:""}},[r("el-menu-item",{attrs:{index:"/manger"}},[r("i",{staticClass:"el-icon-menu"}),e._v("首页")]),e._v(" "),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-document"}),e._v("数据管理")]),e._v(" "),r("el-menu-item",{attrs:{index:"userList"}},[e._v("用户管理")]),e._v(" "),r("el-menu-item",{attrs:{index:"orgTree"}},[e._v("组织管理")])],2)],1)],1),e._v(" "),r("el-col",{staticClass:"fillheight",attrs:{span:20}},[r("keep-alive",[r("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var h=r("VU/8")({computed:{defaultActive:function(){return this.$route.path.replace("/","")}}},p,!1,function(e){r("GOQM")},"data-v-d5d76962",null).exports,f=r("Xxa5"),m=r.n(f),g=r("exGp"),v=r.n(g),b=r("Dd8w"),w=r.n(b),x=r("//Fk"),y=r.n(x),_=r("mtWM"),k=r.n(_),$=r("zL8q"),I=r.n($),S=r("9rMa");n.default.use(S.a);var C={getUserData:function(e){var t=this,r=e.commit;return v()(m.a.mark(function e(){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getSignUser();case 2:if("0"===(n=e.sent).state){e.next=5;break}return e.abrupt("return");case 5:r("setUserInfo",n.data);case 6:case"end":return e.stop()}},e,t)}))()}},O=new S.a.Store({state:{userInfo:{name:"",avatar:"default.jpg"}},actions:C,mutations:{setUserInfo:function(e,t){e.userInfo=t}},getters:{getUserInfo:function(e,t,r){return e.userInfo}}});k.a.defaults.timeout=5e3,k.a.interceptors.request.use(function(e){return O.state.token&&(e.headers.Authorization="token "+O.state.token),e},function(e){return y.a.reject(e)}),k.a.interceptors.response.use(function(e){var t=e.data;return"0"!==t.state&&Object($.Message)({message:t.message,type:"error",duration:5e3}),e},function(e){if(e.response)switch(e.response.status){case 401:O.commit("setUserInfo",{}),window.sessionStorage.removeItem("userInfo"),Te.replace({path:"login",query:{redirect:Te.currentRoute.fullPath}}),Object($.Message)({message:"用户未登录或session已失效，请重新登录",type:"error",duration:5e3});break;default:Object($.Message)({message:"系统错误，请稍后再试，或联系系统管理员",type:"error",duration:5e3})}return y.a.reject(e.response.data)});var F,N,T,D,z,L,P,q=k.a,U=r("mw3O"),E=r.n(U),R=this,H=function(e){if(!e)return"";e.pageIndex||(e.pageIndex=""),e.pageSize||(e.pageSize=""),e.userName||(e.userName=""),e.orgId||(e.orgId="")},j={paging:(P=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return H(t),e.next=3,q.get("/api/users?pageIndex="+t.pageIndex+"&pageSize="+t.pageSize+"&userName="+t.userName+"&orgId="+t.orgId+"&isHasSub="+t.isHasSub);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,R)})),function(e){return P.apply(this,arguments)}),create:(L=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return H(t),e.next=3,q.post("/api/users",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,R)})),function(e){return L.apply(this,arguments)}),modify:(z=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return H(t),e.next=3,q.put("/api/users/"+t.id,t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,R)})),function(e){return z.apply(this,arguments)}),remove:(D=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.delete("/api/users/"+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,R)})),function(e){return D.apply(this,arguments)}),signIn:(T=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.post("/api/users/actions/sign",E.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,R)})),function(e){return T.apply(this,arguments)}),signOut:(N=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.delete("/api/users/actions/sign");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,R)})),function(e){return N.apply(this,arguments)}),getSignUser:(F=v()(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("/api/users/actions/sign");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,R)})),function(){return F.apply(this,arguments)})},B=void 0;B="//elm.cangdu.org/img/";var V={data:function(){return{baseImgPath:B}},created:function(){},computed:w()({},Object(S.c)(["userInfo"])),methods:w()({},Object(S.b)(["setUserInfo"]),{handleCommand:function(e){var t=this;return v()(m.a.mark(function r(){var n;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("home"!==e){r.next=4;break}t.$router.push("/manger"),r.next=9;break;case 4:if("singout"!==e){r.next=9;break}return r.next=7,j.signOut();case 7:"0"===(n=r.sent).state?(t.setUserInfo({}),window.sessionStorage.clear(),t.$message({type:"success",message:"退出成功"}),t.$router.push("/login")):t.$message({type:"error",message:n.message});case 9:case"end":return r.stop()}},r,t)}))()}})},A={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header_container"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/manger"}}},[e._v("首页")]),e._v(" "),e._l(e.$route.meta,function(t,n){return r("el-breadcrumb-item",{key:n},[e._v(e._s(t))])})],2),e._v(" "),r("el-dropdown",{attrs:{"menu-align":"start"},on:{command:e.handleCommand}},[r("div",{staticClass:"frofile"},[r("img",{staticClass:"avator",attrs:{src:"static/img/default.jpg"}}),e._v("\n    "+e._s(e.userInfo.name)+"\n      "),r("i",{staticClass:"el-icon-caret-bottom"})]),e._v(" "),r("el-dropdown-menu",{staticStyle:{width:"90px"},attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"home"}},[e._v("首页")]),e._v(" "),r("el-dropdown-item",{attrs:{command:"singout"}},[e._v("退出")])],1)],1)],1)},staticRenderFns:[]};var M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",{staticClass:"main-footer"},[this._v("\n  Copyright © 2016-2018 "),t("a",{attrs:{href:"http://www.primeton.com"}},[this._v("Primeton")]),this._v(". All rights reserved.\n")])}]};var W={components:{impHeader:r("VU/8")(V,A,!1,function(e){r("1kCr")},null,null).exports,impFooter:r("VU/8")({},M,!1,function(e){r("FX6C")},null,null).exports}},Q={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("imp-header"),this._v(" "),t("router-view",{key:this.$route.path+this.$route.query.t}),this._v(" "),t("imp-footer")],1)},staticRenderFns:[]};var G=r("VU/8")(W,Q,!1,function(e){r("c8nt")},null,null).exports,J={name:"ImpPanel",props:{widthBorder:{type:Boolean},title:{type:String},footer:{type:String}}},K={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[e.title||e.$slots.header?r("div",{staticClass:"box-header",class:{"with-border":e.widthBorder}},[e._t("header",[e.title?r("h3",{staticClass:"box-title",domProps:{textContent:e._s(e.title)}}):e._e()])],2):e._e(),e._v(" "),r("div",{staticClass:"box-body"},[e.$slots.body?e._t("body",[e._v("\n      暂无内容显示\n    ")]):e._t("default")],2),e._v(" "),e.footer?r("div",{staticClass:"box-footer",domProps:{textContent:e._s(e.footer)}}):e._e()])},staticRenderFns:[]};var X=r("VU/8")(J,K,!1,function(e){r("91VP")},"data-v-4cc05fc7",null).exports,Y=r("ufP2"),Z=r("mGyo"),ee={name:"ElSelectDropdown",componentName:"ElSelectDropdown",mixins:[r("lpOu").a],props:{placement:{default:"bottom-start"},boundariesPadding:{default:0},popperOptions:{default:function(){return{gpuAcceleration:!1}}},visibleArrow:{default:!0},appendToBody:{type:Boolean,default:!0}},data:function(){return{minWidth:""}},computed:{popperClass:function(){return this.$parent.popperClass}},watch:{"$parent.inputWidth":function(){this.minWidth=this.$parent.$el.getBoundingClientRect().width+"px"}},mounted:function(){var e=this;this.referenceElm=this.$parent.$refs.reference.$el,this.$parent.popperElm=this.popperElm=this.$el,this.$on("updatePopper",function(){e.$parent.visible&&e.updatePopper()}),this.$on("destroyPopper",this.destroyPopper)}},te={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"el-select-dropdown el-popper",class:[{"is-multiple":this.$parent.multiple},this.popperClass],style:{minWidth:this.minWidth}},[this._t("default")],2)},staticRenderFns:[]},re=r("VU/8")(ee,te,!1,null,null,null).exports,ne=r("rdhm"),se=r("oXIA"),ae=r("1ecG"),ie=r("oM3y"),oe={methods:{findFromTree:function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"children";if(!t||null==t||t.length<=0)return null;for(var a=0;a<t.length;a++){if(t[a][n]===r)return t[a];var i=e(t[a][s],r,n,s);if(null!=i)return i}return null},appendTreeNode:function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"parentId",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"children";if(!(null==t||t.length<=0)){if(!r[s]||null==r[s]){var i=t.findIndex(function(e){return e.sort>r.sort});return-1===i&&(i=t.length),void t.splice(i,0,r)}for(var o=0;o<t.length;o++){var l=t[o];if(r[s]===l[n])if(l[a]&&l[a].length>0){var c=l[a].findIndex(function(e){return e.sort>r.sort});-1===c&&(c=l[a].length),l[a].splice(c,0,r)}else l[a]=[],l[a].push(r);else e(l[a],r,n,s,a)}}},deleteFromTree:function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"children";if(!t||null==t||t.length<=0)return!0;for(var a=0;a<t.length;a++){if(t[a][n]===r)return t.splice(a,1),!0;var i=e(t[a][s],r,n,s);if(i)return i}return!1},updateTreeNode:function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"children";if(!t||null==t||t.length<=0)return!1;for(var a=0;a<t.length;a++){if(t[a][n]===r[n])return console.log(t[a][n],r[n]),t.splice(a,1,r),!0;var i=e(t[a][s],r,n,s);if(i)return i}return!1},batchDeleteFromTree:function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"children";if(t&&null!=t&&!(t.length<=0)&&r&&null!=r&&!(r.length<=0))for(var a=0;a<t.length;a++)r.findIndex(function(e){return e===t[a][n]})>-1?(t.splice(a,1),a--):e(t[a][s],r,n,s)}}},le={large:42,small:30,mini:22},ce={mixins:[Y.a,Z.a,oe],name:"ElSelectTree",componentName:"ElSelectTree",computed:{iconClass:function(){return this.visible?"el-icon-arrow-up":"el-icon-arrow-down"},emptyText:function(){return this.loading?this.loadingText||this.t("el.select.loading"):0===this.treeData.length?this.noDataText||this.t("el.select.noData"):null}},components:{ElSelectMenu:re},directives:{Clickoutside:ne.a},props:{name:String,value:{},treeData:Array,size:String,disabled:Boolean,clearable:Boolean,loading:Boolean,popperClass:String,loadingText:String,noDataText:String,multiple:Boolean,expandKey:Array,propNames:{type:Object,default:function(){return{children:"children",label:"label",id:"id"}}},multipleLimit:{type:Number,default:0},placeholder:{type:String,default:function(){return Object(ie.a)("el.select.placeholder")}}},data:function(){return{selected:this.multiple?[]:{},inputLength:20,inputWidth:0,currentPlaceholder:"请选择",dropdownUl:null,visible:!1,selectedLabel:"",bottomOverflow:0,topOverflow:0,inputHovering:!1,styleObject:{zIndex:3e3}}},watch:{value:function(e){this.handleResize(),this.currentPlaceholder=e?"":this.placeholder,this.setSelected(e),this.$emit("change",e),this.dispatch("ElFormItem","el.form.change",e)},visible:function(e){e?(this.handleIconShow(),this.broadcast("ElSelectDropdown","updatePopper"),this.setTreezIndex()):(this.$refs.reference.$el.querySelector("input").blur(),this.handleIconHide(),this.broadcast("ElSelectDropdown","destroyPopper"),this.multiple||(this.inputLength=20,this.getOverflows())),this.$emit("visible-change",e)}},methods:{handleIconHide:function(){var e=this.$el.querySelector(".el-input__icon");e&&Object(se.e)(e,"is-reverse")},handleIconShow:function(){var e=this.$el.querySelector(".el-input__icon");e&&!Object(se.c)(e,"el-icon-circle-close")&&Object(se.a)(e,"is-reverse")},handleMenuEnter:function(){this.dropdownUl||(this.dropdownUl=this.$refs.popper.$el.querySelector(".el-select-dropdown__wrap"),this.getOverflows()),!this.multiple&&this.dropdownUl&&this.resetMenuScroll()},getOverflows:function(){if(this.dropdownUl&&this.selected&&this.selected.$el){var e=this.selected.$el.getBoundingClientRect(),t=this.$refs.popper.$el.getBoundingClientRect();this.bottomOverflow=e.bottom-t.bottom,this.topOverflow=e.top-t.top}},resetMenuScroll:function(){this.bottomOverflow>0?this.dropdownUl.scrollTop+=this.bottomOverflow:this.topOverflow<0&&(this.dropdownUl.scrollTop+=this.topOverflow)},setSelected:function(e){e?this.multiple?(this.$refs.tree.setCheckedKeys(e),this.selected=this.$refs.tree.getCheckedNodes()):(this.selected=this.findFromTree(this.treeData,e,this.propNames.id,this.propNames.children),this.selectedLabel=this.selected?this.selected[this.propNames.label]:""):(this.selected=this.multiple?[]:{},this.selectedLabel="")},handleIconClick:function(e){this.toggleMenu()},doDestroy:function(){this.$refs.popper&&this.$refs.popper.doDestroy()},handleClose:function(){this.visible=!1},managePlaceholder:function(){""!==this.currentPlaceholder&&(this.currentPlaceholder=this.$refs.input.value?"":this.cachedPlaceHolder)},resetInputState:function(e){8!==e.keyCode&&this.toggleLastOptionHitState(!1),this.inputLength=15*this.$refs.input.value.length+20,this.resetInputHeight()},resetInputHeight:function(){var e=this;this.$nextTick(function(){if(e.$refs.reference){var t=e.$refs.reference.$el.childNodes;[].filter.call(t,function(e){return"INPUT"===e.tagName})[0].style.height=Math.max(e.$refs.tags.clientHeight+6,le[e.size]||36)+"px",e.visible&&!1!==e.emptyText&&e.broadcast("ElSelectDropdown","updatePopper")}})},handleTreeNodeClick:function(e){this.multiple||(this.$emit("input",e[this.propNames.id]),this.visible=!1,this.selectedLabel=e[this.propNames.label],this.selected=e,this.handleResize())},handleCheckChange:function(e,t,r){if(this.multiple){this.selected=this.$refs.tree.getCheckedNodes();var n=[];this.selected&&this.selected.forEach(function(e,t){n.push(e.id)}),this.$emit("input",n),this.handleResize()}},toggleMenu:function(){this.disabled||(this.visible=!this.visible,this.setTreezIndex())},setTreezIndex:function(){var e=this;if(this.visible&&this.$refs.popper.$el.style.zIndex<3e3)var t=setTimeout(function(){e.styleObject.zIndex++,clearTimeout(t),e.setTreezIndex()},100)},resetScrollTop:function(){var e=this.options[this.hoverIndex].$el.getBoundingClientRect().bottom-this.$refs.popper.$el.getBoundingClientRect().bottom,t=this.options[this.hoverIndex].$el.getBoundingClientRect().top-this.$refs.popper.$el.getBoundingClientRect().top;e>0&&(this.dropdownUl.scrollTop+=e),t<0&&(this.dropdownUl.scrollTop+=t)},deleteSelected:function(e){e.stopPropagation(),this.$emit("input",""),this.selected={},this.selectedLabel="",this.visible=!1},deleteTag:function(e,t){var r=this.selected.indexOf(t);r>-1&&!this.disabled&&(this.value.splice(r,1),this.selected.splice(r,1),this.$emit("remove-tag",t)),e.stopPropagation()},resetInputWidth:function(){this.inputWidth=this.$refs.reference.$el.getBoundingClientRect().width},handleResize:function(){this.resetInputWidth(),this.multiple?this.resetInputHeight():this.inputLength=20}},created:function(){this.cachedPlaceHolder=this.currentPlaceholder=this.placeholder,this.multiple&&!Array.isArray(this.value)&&this.$emit("input",[]),!this.multiple&&Array.isArray(this.value)&&this.$emit("input",""),this.setSelected(this.value),this.$on("setSelected",this.setSelected)},mounted:function(){var e=this;Object(ae.a)(this.$el,this.handleResize),this.$nextTick(function(){e.$refs.reference&&e.$refs.reference.$el&&(e.inputWidth=e.$refs.reference.$el.getBoundingClientRect().width)})},beforeDestroy:function(){this.$el&&this.handleResize&&Object(ae.b)(this.$el,this.handleResize)}},ue={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.handleClose,expression:"handleClose"}],staticClass:"el-select"},[r("el-input",{ref:"reference",attrs:{type:"text",placeholder:e.currentPlaceholder,name:e.name,size:e.size,disabled:e.disabled,readonly:!0},nativeOn:{click:function(t){return e.handleIconClick(t)},mouseenter:function(t){e.inputHovering=!0},mouseleave:function(t){e.inputHovering=!1}},model:{value:e.selectedLabel,callback:function(t){e.selectedLabel=t},expression:"selectedLabel"}},[r("i",{staticClass:"el-input__icon",class:e.iconClass,attrs:{slot:"suffix"},nativeOn:{click:function(t){return e.handleIconClick(t)}},slot:"suffix"})]),e._v(" "),r("transition",{attrs:{name:"el-zoom-in-top"},on:{"after-leave":e.doDestroy,"after-enter":e.handleMenuEnter}},[r("el-select-menu",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],ref:"popper",style:e.styleObject},[r("el-scrollbar",{directives:[{name:"show",rawName:"v-show",value:e.treeData&&!e.loading,expression:"treeData && !loading"}],staticClass:"is-empty",attrs:{tag:"div","wrap-class":"el-select-dropdown__wrap","view-class":"el-select-dropdown__list"}},[r("el-tree",{ref:"tree",attrs:{data:e.treeData,"show-checkbox":e.multiple,"node-key":"id","highlight-current":"",props:e.propNames,"default-expand-all":""},on:{"check-change":e.handleCheckChange,"node-click":e.handleTreeNodeClick}})],1)],1)],1)],1)},staticRenderFns:[]},de=r("VU/8")(ce,ue,!1,null,null,null).exports,pe=this,he=function(e){if(!e)return"";e.pageIndex||(e.pageIndex=""),e.pageSize||(e.pageSize=""),e.orgName||(e.orgName=""),e.parentId||(e.parentId=""),e.orgLevels||(e.orgLevels="")},fe={paging:function(){var e=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return he(t),e.next=3,q.get("/api/orgs?pageIndex="+t.pageIndex+"&pageSize="+t.pageSize+"&orgName="+t.orgName+"&parentId="+t.parentId);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,pe)}));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return he(t),e.next=3,q.post("/api/orgs",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,pe)}));return function(t){return e.apply(this,arguments)}}(),modify:function(){var e=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return he(t),e.next=3,q.put("/api/orgs/"+t.orgId,t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,pe)}));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.delete("/api/orgs/"+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,pe)}));return function(t){return e.apply(this,arguments)}}(),getOrg:function(){var e=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("/api/orgs/"+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,pe)}));return function(t){return e.apply(this,arguments)}}(),getOrgDetail:function(){var e=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("/api/orgs/"+t+"/detail");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,pe)}));return function(t){return e.apply(this,arguments)}}(),getOrgSubs:function(){var e=v()(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("/api/orgs/"+t+"/subs");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,pe)}));return function(t){return e.apply(this,arguments)}}()},me={props:{visible:{type:Boolean,default:!1},userForm:{type:Object},type:{},rootOrg:{default:"root"}},data:function(){return{rules:{name:[{required:!0,trigger:"change",message:"请输入姓名!"}],password:[{required:!0,trigger:"change",message:"请输入密码!"}]},isShow:!1,orgTree:{},defaultProps:{children:"children",label:"orgName",id:"orgId",value:"orgId"},selectedOptions:[]}},mounted:function(){this.isShow=this.visible,this.loadOrgTree()},components:{elSelectTree:de},computed:{title:function(){return"add"===this.type?"新增用户":"修改用户"}},watch:{isShow:function(e){e||this.$emit("update:visible",!1)},visible:function(e){e&&(this.isShow=this.visible,this.getOrgLevelName())}},methods:{save:function(){var e,t=this;this.$refs.form.validate((e=v()(m.a.mark(function e(r){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:if(t.selectedOptions.length>0&&(t.userForm.orgId=t.selectedOptions[t.selectedOptions.length-1]),n=void 0,"add"!==t.type){e.next=10;break}return e.next=7,j.create(t.userForm);case 7:n=e.sent,e.next=13;break;case 10:return e.next=12,j.modify(t.userForm);case 12:n=e.sent;case 13:if("0"===n.state){e.next=15;break}return e.abrupt("return");case 15:t.isShow=!1,t.$emit("success"),t.$message({message:"保存成功",type:"success"});case 18:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},loadOrgTree:function(){var e=this;return v()(m.a.mark(function t(){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe.getOrgSubs(e.rootOrg);case 2:"0"===(r=t.sent).state&&(e.orgTree=r.data);case 4:case"end":return t.stop()}},t,e)}))()},getOrgLevelName:function(){var e=this;return v()(m.a.mark(function t(){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe.getOrg(e.userForm.orgId);case 2:"0"===(r=t.sent).state&&(r.data&&r.data.orgLevels?(e.selectedOptions=r.data.orgLevels.split("-"),e.selectedOptions.push(r.data.orgId)):e.$set(e,"selectedOptions",[]));case 4:case"end":return t.stop()}},t,e)}))()}}},ge={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{visible:e.isShow,title:e.title,width:"600px"},on:{"update:visible":function(t){e.isShow=t}}},[r("div",[r("el-form",{ref:"form",attrs:{"label-width":"100px",model:e.userForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"姓名",prop:"name"}},[r("el-input",{model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"昵称",prop:"nick"}},[r("el-input",{model:{value:e.userForm.nick,callback:function(t){e.$set(e.userForm,"nick",t)},expression:"userForm.nick"}})],1),e._v(" "),"add"==e.type?r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}})],1):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"单位",prop:"orgId"}},[r("el-cascader",{attrs:{options:e.orgTree,"show-all-levels":!1,props:e.defaultProps,"change-on-select":""},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}}),e._v(" "),r("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){e.selectedOptions=[]}}})],1)],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)])},staticRenderFns:[]};var ve=r("VU/8")(me,ge,!1,function(e){r("zHL2")},"data-v-0c934228",null).exports,be={props:{orgId:{default:""},isView:{type:Boolean,default:!1},viewTitle:{type:String,default:""}},data:function(){return{visible:!1,tableData:[],query:{userName:"",orgId:"",pageIndex:1,pageSize:5,total:0,isHasSub:!0},listLoading:!1,user:{},editType:"add",isHasSub:!0}},components:{"imp-panel":X,userForm:ve},mounted:function(){this.query.orgId=this.orgId,this.loadData()},watch:{orgId:function(e){this.query.orgId=e,this.loadData()},isHasSub:function(e){this.query.isHasSub=this.isHasSub,this.loadData()}},methods:{loadData:function(){var e=this;return v()(m.a.mark(function t(){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.paging(e.query);case 2:r=t.sent,e.tableData=r.data.list,e.query.total=r.data.total;case 5:case"end":return t.stop()}},t,e)}))()},handleCurrentChange:function(e){this.query.pageIndex=e,this.loadData()},handleSizeChange:function(e){this.query.pageSize=e,this.loadData()},search:function(){this.loadData()},remove:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(v()(m.a.mark(function r(){return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.remove(e);case 2:if("0"===r.sent.state){r.next=5;break}return r.abrupt("return");case 5:t.$message({message:"删除成功!",type:"success"}),t.loadData();case 7:case"end":return r.stop()}},r,t)}))).catch(function(){})},openDialog:function(e,t){this.visible=!0,e||(e={}),this.user=e,this.editType=t}}},we={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("imp-panel",[r("h3",{staticClass:"box-title",staticStyle:{width:"100%"},attrs:{slot:"header"},slot:"header"},[r("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},[e.isView?r("el-form-item",{attrs:{label:e.viewTitle}}):r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.openDialog("","add")}}},[e._v("新增")])],1),e._v(" "),r("el-form-item",{staticStyle:{float:"right"}},[r("el-input",{attrs:{placeholder:"输入用户名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.search(t)}},model:{value:e.query.userName,callback:function(t){e.$set(e.query,"userName",t)},expression:"query.userName"}},[r("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:function(t){e.search(t)}},slot:"suffix"})])],1)],1)],1),e._v(" "),r("div",{attrs:{slot:"body"},slot:"body"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{border:"",data:e.tableData}},[r("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"nick",label:"昵称"}}),e._v(" "),e.isView?r("el-table-column",{attrs:{prop:"orgName"},scopedSlots:e._u([{key:"header",fn:function(t){return[r("span",[e._v("单位")]),e._v(" "),r("el-checkbox",{staticStyle:{float:"right"},model:{value:e.isHasSub,callback:function(t){e.isHasSub=t},expression:"isHasSub"}},[e._v("包含下级")])]}}])}):r("el-table-column",{attrs:{prop:"orgName",label:"单位"}}),e._v(" "),e.isView?e._e():r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:function(r){e.openDialog(t.row,"edit")}}},[e._v("编辑\n          ")]),e._v(" "),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(r){e.remove(t.row.id)}}},[e._v("删除\n          ")])]}}])})],1),e._v(" "),r("div",[r("el-pagination",{attrs:{"current-page":e.query.pageIndex,"page-sizes":[5,10,20],"page-size":e.query.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.query.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),r("user-form",{attrs:{visible:e.visible,userForm:e.user,type:e.editType},on:{"update:visible":function(t){e.visible=t},success:e.loadData}})],1)])},staticRenderFns:[]};var xe=r("VU/8")(be,we,!1,function(e){r("CbyA")},"data-v-5c62fa46",null).exports,ye={props:{visible:{type:Boolean,default:!1},orgForm:{type:Object},type:{},rootOrg:{default:"root"}},data:function(){return{rules:{orgName:[{required:!0,trigger:"change",message:"请输入组织名称!"}]},isShow:!1,defaultProps:{children:"children",label:"orgName",id:"orgId",value:"orgId"},orgTree:{},selectedOptions:[]}},components:{},computed:{title:function(){return"add"===this.type?"新增组织":"addSub"===this.type?"添加下级组织":"修改组织"},disabled:function(){return"addSub"===this.type}},mounted:function(){this.loadOrgTree()},watch:{isShow:function(e){e||this.$emit("update:visible",!1)},visible:function(e){e&&(this.isShow=this.visible,this.loadOrgTree())}},methods:{save:function(){var e,t=this;this.$refs.form.validate((e=v()(m.a.mark(function e(r){var n,s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:if(!(t.selectedOptions.length>0)){e.next=9;break}if(-1===(n=t.selectedOptions.join("-")).indexOf(t.orgForm.orgId)||"edit"!==t.type){e.next=7;break}return t.$message({message:"父组织不能调整为其下级组织或当前组织",type:"error"}),e.abrupt("return");case 7:t.orgForm.parentId=t.selectedOptions[t.selectedOptions.length-1],t.orgForm.orgLevels=n;case 9:if(s=void 0,"edit"===t.type){e.next=16;break}return e.next=13,fe.create(t.orgForm);case 13:s=e.sent,e.next=19;break;case 16:return e.next=18,fe.modify(t.orgForm);case 18:s=e.sent;case 19:if("0"===s.state){e.next=21;break}return e.abrupt("return");case 21:t.$message({message:"保存成功",type:"success"}),"addSub"===t.type?(t.$emit("addSub",s.data),t.isShow=!1):t.$router.push({path:"/orgTree",query:{t:Date.now()}});case 23:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},loadOrgTree:function(){var e=this;return v()(m.a.mark(function t(){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe.getOrgSubs(e.rootOrg);case 2:if("0"===(r=t.sent).state){t.next=5;break}return t.abrupt("return");case 5:e.isShow=e.visible,e.orgTree=r.data,e.orgForm.orgLevels?e.selectedOptions=e.orgForm.orgLevels.split("-"):e.$set(e,"selectedOptions",[]);case 8:case"end":return t.stop()}},t,e)}))()}}},_e={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{visible:e.isShow,title:e.title,width:"600px"},on:{"update:visible":function(t){e.isShow=t}}},[r("div",[r("el-form",{ref:"form",attrs:{"label-width":"100px",model:e.orgForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"组织名称",prop:"orgName"}},[r("el-input",{model:{value:e.orgForm.orgName,callback:function(t){e.$set(e.orgForm,"orgName",t)},expression:"orgForm.orgName"}})],1),e._v(" "),"root"!=e.orgForm.parentId||"edit"!=e.type?r("el-form-item",{attrs:{label:"父级组织",prop:"parentId"}},[r("el-cascader",{attrs:{options:e.orgTree,"show-all-levels":!1,props:e.defaultProps,"change-on-select":"",disabled:e.disabled},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}}),e._v(" "),r("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){e.selectedOptions=[]}}})],1):e._e()],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)])},staticRenderFns:[]};var ke={data:function(){return{orgTree:[],props:{label:"orgName",id:"orgId"},query:{pageIndex:1,pageSize:0,orgName:"",parentId:"root",orgId:"root"},org:{},editType:"add",visible:!1}},components:{"imp-panel":X,userList:xe,orgForm:r("VU/8")(ye,_e,!1,function(e){r("gcQO")},"data-v-8e856030",null).exports},methods:{handleNodeClick:function(e){e&&(this.query.orgId=e.orgId)},loadNode:function(e,t){var r=this;return v()(m.a.mark(function n(){var s;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.level>0&&(r.query.parentId=e.data.orgId),n.next=3,fe.paging(r.query);case 3:s=n.sent,t(s.data.list);case 5:case"end":return n.stop()}},n,r)}))()},openDialog:function(e,t,r){if(e&&e.stopPropagation(),t||((t={}).parentId="root",t.orgLevels=""),"addSub"===r){var n={};n.parentId=t.orgId,t.orgLevels?n.orgLevels=t.orgLevels+"-"+t.orgId:n.orgLevels=t.orgId,t=n}this.org=t,this.editType=r,this.visible=!0},addSub:function(e){e.parentId&&this.$refs.orgTree.append(e,this.$refs.orgTree.getNode(e.parentId))},remove:function(e,t,r){var n=this;e&&e.stopPropagation(),this.$confirm("此操作将永久删除该单位, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(v()(m.a.mark(function e(){var s,a,i;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.remove(r.orgId);case 2:if("0"===e.sent.state){e.next=5;break}return e.abrupt("return");case 5:s=t.parent,a=s.childNodes,i=a.findIndex(function(e){return e.data.orgId===r.orgId}),a.splice(i,1),n.$message({message:"删除成功!",type:"success"}),n.loadData();case 11:case"end":return e.stop()}},e,n)}))).catch(function(){})},renderContent:function(e,t){var r=this,n=t.node,s=t.data;t.store;return e("span",[e("span",[e("span",[n.label])]),e("span",{class:"render-content"},[e("i",{class:"fa el-icon-plus",on:{click:function(e){return r.openDialog(e,s,"addSub")}}}),e("i",{class:"fa el-icon-edit-outline",on:{click:function(e){return r.openDialog(e,s,"edit")}}}),e("i",{class:"fa el-icon-delete",on:{click:function(e){return r.remove(e,n,s)}}})])])}},mounted:function(){}},$e={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("imp-panel",[r("h3",{staticClass:"box-title",staticStyle:{width:"100%"},attrs:{slot:"header"},slot:"header"},[r("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.openDialog(t,"","add")}}},[e._v("新增")])],1)],1)],1),e._v(" "),r("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{slot:"body",gutter:24},slot:"body"},[r("el-col",{staticStyle:{"margin-bottom":"20px",overflow:"auto"},attrs:{span:8,xs:24,sm:24,md:8,lg:8}},[r("el-card",{staticClass:"box-card"},[e.orgTree?r("el-tree",{ref:"orgTree",attrs:{load:e.loadNode,props:e.props,lazy:"","highlight-current":"","node-key":"orgId","expand-on-click-node":!1,"render-content":e.renderContent},on:{"node-click":e.handleNodeClick}}):e._e()],1)],1),e._v(" "),r("el-col",{attrs:{span:16,xs:24,sm:24,md:16,lg:16}},[r("user-list",{attrs:{orgId:e.query.orgId,isView:!0,viewTitle:"人员列表"}})],1),e._v(" "),r("org-form",{attrs:{visible:e.visible,orgForm:e.org,type:e.editType},on:{"update:visible":function(t){e.visible=t},addSub:e.addSub}})],1)],1)},staticRenderFns:[]};var Ie=r("VU/8")(ke,$e,!1,function(e){r("5KUf")},null,null).exports,Se={data:function(){return{loginForm:{userName:"",password:""},rules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},showLogin:!1}},mounted:function(){this.showLogin=!0},computed:w()({},Object(S.c)(["userInfo"])),methods:{submitForm:function(e){var t,r=this;this.$refs[e].validate((t=v()(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return e.next=3,j.signIn(r.loginForm);case 3:if("0"===e.sent.state){e.next=6;break}return e.abrupt("return");case 6:r.$message({type:"success",message:"登录成功"}),r.$store.dispatch("getUserData"),window.sessionStorage.setItem("userInfo",a()(r.userInfo)),r.$router.push("/manger");case 10:case"end":return e.stop()}},e,r)})),function(e){return t.apply(this,arguments)}))}}},Ce={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login_page fillcontain"},[r("transition",{attrs:{name:"form-fade",mode:"in-out"}},[r("section",{directives:[{name:"show",rawName:"v-show",value:e.showLogin,expression:"showLogin"}],staticClass:"form_contianer"},[r("div",{staticClass:"manage_tip"},[r("p",[e._v("用户管理系统")])]),e._v(" "),r("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.rules}},[r("el-form-item",{attrs:{prop:"userName"}},[r("el-input",{attrs:{placeholder:"用户名"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("loginForm")}}},[e._v("登陆")])],1)],1)],1)])],1)},staticRenderFns:[]};var Oe=r("VU/8")(Se,Ce,!1,function(e){r("HwrN")},"data-v-0deb5ea8",null).exports,Fe=function(){var e=JSON.parse(window.sessionStorage.getItem("userInfo"));return e&&e.id};n.default.use(d.a);var Ne=new d.a({routes:[{path:"/login",component:Oe},{path:"/manger",component:h,name:"",children:[{path:"",component:G,meta:[],children:[{path:"/userList",component:xe,meta:["数据管理","用户管理"]},{path:"/orgTree",component:Ie,meta:["数据管理","组织管理"]}]}]}]});Ne.beforeEach(function(e,t,r){"/login"===e.path||Fe()?r():r({path:"/login",query:{redirect:e.fullPath}})});var Te=Ne;r("tvR6");n.default.prototype.$axios=q,n.default.axios=q,n.default.http=q,n.default.config.productionTip=!1,n.default.use(I.a),new n.default({el:"#app",router:Te,store:O,components:{App:u},template:"<App/>"})},QFuJ:function(e,t){},c8nt:function(e,t){},gcQO:function(e,t){},tvR6:function(e,t){},zHL2:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d7ff0abd64d8f08e6383.js.map