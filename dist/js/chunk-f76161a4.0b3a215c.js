(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f76161a4"],{"0266":function(t,s,i){},"0418":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"top"},[i("div",{staticClass:"h3"},[t._v(t._s(t.name))]),i("div",{staticClass:"users-info"},[t._m(0),t._m(1),i("div",{staticClass:"user-name"},[t._v("\n\t\t\t"+t._s(t.user.nickName)),i("i",{staticClass:"iconfont icon-icon_down-arrow"}),t._m(2)])])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"user-msg msg"},[i("i",{staticClass:"iconfont icon-lingdang"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"user-img"},[i("img",{attrs:{src:"img/u94.svg"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"user-status"},[i("div",{staticClass:"user-status-item active"},[i("i",{staticClass:"iconfont icon-dian"}),t._v("在线")]),i("div",{staticClass:"user-status-item"},[i("i",{staticClass:"iconfont icon-dian"}),t._v("离线")])])}],n={props:["name"],name:"GHeader",data:function(){return{user:{}}},created:function(){var t=localStorage.getItem("user");this.user=JSON.parse(t)}},l=n,c=(i("8baf"),i("2877")),r=Object(c["a"])(l,a,e,!1,null,null,null);s["a"]=r.exports},"063f":function(t,s,i){},2333:function(t,s,i){"use strict";var a=i("3819"),e=i.n(a);e.a},"284c":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"workOrder"},[i("dl",[i("dt",[t._v("通用设置")]),t._l(t.items1,function(s,a){return i("dd",{class:t.activeClass1==a?"active":"",on:{click:function(s){return t.IsActive1(a)}}},[i("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),i("dl",[i("dt",[t._v("团队设置")]),t._l(t.items2,function(s,a){return i("dd",{class:t.activeClass2==a?"active":"",on:{click:function(s){return t.IsActive2(a)}}},[i("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),i("dl",[i("dt",[t._v("客服设置")]),t._l(t.items3,function(s,a){return i("dd",{class:t.activeClass3==a?"active":"",on:{click:function(s){return t.IsActive3(a)}}},[i("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),i("dl",[i("dt",[t._v("工单设置")]),t._l(t.items4,function(s,a){return i("dd",{class:t.activeClass4==a?"active":"",on:{click:function(s){return t.IsActive4(a)}}},[i("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),i("dl",[i("dt",[t._v("全局设置")]),t._l(t.items5,function(s,a){return i("dd",{class:t.activeClass5==a?"active":"",on:{click:function(s){return t.IsActive5(a)}}},[i("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2)])},e=[],n={name:"LeftListOfWorkOrder",data:function(){return{activeClass1:-1,activeClass2:-1,activeClass3:-1,activeClass4:-1,activeClass5:-1,items1:[{name:"个人信息"},{name:"通知公告"}],items2:[{name:"企业信息"},{name:"客服管理"},{name:"分组管理"},{name:"角色管理"}],items3:[{name:"常用语"},{name:"自动回复"},{name:"对话规则"},{name:"分配规则"},{name:"会话评价"},{name:"客户信息"},{name:"客户标签"},{name:"黑名单"}],items4:[{name:"基础设置"},{name:"工单分类"}],items5:[{name:"操作日志"},{name:"消息通知"}]}},methods:{IsActive1:function(t){this.activeClass1=t,this.activeClass2=-1,this.activeClass3=-1,this.activeClass4=-1,this.activeClass5=-1,0==t&&this.$router.push("/settingofpersonal"),1==t&&this.$router.push("/settingofnotice")},IsActive2:function(t){this.activeClass1=-1,this.activeClass2=t,this.activeClass3=-1,this.activeClass4=-1,this.activeClass5=-1,0==t&&this.$router.push("/settingofcompany"),1==t&&this.$router.push("/settingofcustserv"),2==t&&this.$router.push("/settingofgroup"),3==t&&this.$router.push("/settingofrole")},IsActive3:function(t){this.activeClass1=-1,this.activeClass2=-1,this.activeClass3=t,this.activeClass4=-1,this.activeClass5=-1,0==t&&this.$router.push("/settingofcommonwords"),1==t&&this.$router.push("/settingofreply"),2==t&&this.$router.push("/settingofdialogrule"),3==t&&this.$router.push("/settingofdistributionrule"),4==t&&this.$router.push("/settingofsessionevaluation"),5==t&&this.$router.push("/settingofcustomerinfor"),6==t&&this.$router.push("/settingofcustomerlabel"),7==t&&this.$router.push("/settingofblacklist")},IsActive4:function(t){this.activeClass1=-1,this.activeClass2=-1,this.activeClass3=-1,this.activeClass4=t,this.activeClass5=-1,0==t&&this.$router.push("/settingofbasicsetting"),1==t&&this.$router.push("/settingofclassification")},IsActive5:function(t){this.activeClass1=-1,this.activeClass2=-1,this.activeClass3=-1,this.activeClass4=-1,this.activeClass5=t,0==t&&this.$router.push("/settingofoperatelog"),1==t&&this.$router.push("/settingofnotification")}}},l=n,c=(i("5718"),i("2877")),r=Object(c["a"])(l,a,e,!1,null,"4c89495d",null);s["a"]=r.exports},"28f0":function(t,s,i){"use strict";var a=i("af4f"),e=i.n(a);e.a},3819:function(t,s,i){},5718:function(t,s,i){"use strict";var a=i("0266"),e=i.n(a);e.a},"782e":function(t,s,i){},"8baf":function(t,s,i){"use strict";var a=i("782e"),e=i.n(a);e.a},af4f:function(t,s,i){},baa1:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"page"},[i("nav-bar"),i("g-header",{attrs:{name:"会话评价"}}),i("leftlist"),i("div",{staticClass:"container"},[i("div",{staticClass:"overview-style"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:16}},[i("div",{staticClass:"grid-content bg-purple"},[i("div",{staticStyle:{"margin-left":"20px"}},[i("br"),i("label",{staticStyle:{"font-size":"18px","font-weight":"500"}},[t._v("会话评价")]),i("br"),i("label",{staticStyle:{color:"#C0C4CC","font-size":"12px"}},[t._v("工单被更新时，同步通知工单创建人")]),i("br"),i("br")]),i("div",{staticStyle:{"margin-left":"20px","margin-right":"20px"}},[i("label",{staticStyle:{"font-size":"14px"}},[t._v("人工客服是否解决问题")]),i("el-switch",{staticStyle:{"padding-left":"10px"},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}}),i("br"),i("label",{staticStyle:{color:"#C0C4CC","font-size":"12px"}},[t._v("开启此功能后，在人工客服满意度评价页显示是否解决问题选项，帮助统计客服解决问题的能力。")]),i("el-divider")],1),i("div",{staticStyle:{"margin-left":"20px","margin-right":"20px"}},[i("label",{staticStyle:{"font-size":"14px"}},[t._v("结束对话时系统自动邀请评价")]),i("el-switch",{staticStyle:{"padding-left":"10px"},model:{value:t.value2,callback:function(s){t.value2=s},expression:"value2"}}),i("br"),i("br"),i("label",{staticStyle:{"font-size":"14px"}},[t._v("设置邀请评价文案")]),i("br"),i("br"),i("el-input",{attrs:{type:"textarea",placeholder:"请对客服的服务质量做出评价",rows:"8"},model:{value:t.textarea1,callback:function(s){t.textarea1=s},expression:"textarea1"}})],1),i("div",{staticStyle:{margin:"20px 0"}}),i("el-button",{staticStyle:{"margin-bottom":"20px","margin-left":"20px"},attrs:{type:"primary"}},[t._v("保存")])],1)]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content bg-purple"},[i("div",{staticStyle:{"margin-left":"20px"}},[i("br"),i("label",{staticStyle:{"font-size":"18px","font-weight":"500"}},[t._v("预览")]),i("br"),i("br")]),i("div",{staticStyle:{"margin-left":"20px","margin-right":"20px"},attrs:{align:"center"}},[i("label",{staticStyle:{"font-size":"14px"}},[t._v("请对客服的服务质量做出评价")]),i("br"),i("br"),i("el-row",{staticStyle:{"margin-bottom":"10px"}},[i("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(s){t.radio=s},expression:"radio"}},[i("i",{staticClass:"iconfont"},[t._v("")])]),i("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(s){t.radio=s},expression:"radio"}},[i("i",{staticClass:"iconfont"},[t._v("")])]),i("el-radio",{attrs:{label:"3"},model:{value:t.radio,callback:function(s){t.radio=s},expression:"radio"}},[i("i",{staticClass:"iconfont"},[t._v("")])])],1),i("div",{staticStyle:{"font-size":"14px"}},[i("label",{staticStyle:{margin:"30px"}},[t._v("好评")]),i("label",{staticStyle:{margin:"30px"}},[t._v("中评")]),i("label",{staticStyle:{margin:"30px"}},[t._v("差评")])]),i("br"),i("br"),i("el-input",{attrs:{type:"textarea",placeholder:"请对客服的服务做出评价",rows:"8"},model:{value:t.textarea2,callback:function(s){t.textarea2=s},expression:"textarea2"}}),i("div",{staticStyle:{margin:"20px 0"}}),i("el-button",{staticStyle:{"margin-bottom":"20px","margin-left":"20px"},attrs:{type:"primary"}},[t._v("提交")]),i("br"),i("br"),i("br")],1)])])],1)],1)])],1)},e=[],n=i("284c"),l=i("d000"),c=i("0418"),r=(i("baed"),{name:"sessionevaluation",components:{leftlist:n["a"],NavBar:l["a"],GHeader:c["a"]},data:function(){return{value1:!0,value2:!0,textarea1:"",textarea2:"",radio:""}}}),o=r,u=(i("c64e"),i("c7c0"),i("2877")),v=Object(u["a"])(o,a,e,!1,null,"2f117612",null);s["default"]=v.exports},baed:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"myf"},[i("div",{staticClass:"timelay"},[i("el-date-picker",{attrs:{"prefix-icon":"el-icon-date",type:"daterange","start-placeholder":"请选择日期","end-placeholder":"请选择日期",size:"medium","value-format":"yyyy-MM-dd"},on:{change:function(s){return t.selectModel4(s)}},model:{value:t.rangeDate,callback:function(s){t.rangeDate=s},expression:"rangeDate"}})],1),i("div",{staticClass:"layui-inline"},[i("div",{staticClass:"layui-input-inline"},[i("el-input",{staticStyle:{width:"170px"},attrs:{placeholder:"请输入公告标题"},model:{value:t.input,callback:function(s){t.input=s},expression:"input"}}),i("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v("搜索")])],1)]),i("div",{staticClass:"btn",attrs:{tyle:"width: 100px;"}},[i("el-button",{staticStyle:{width:"100px"},attrs:{type:"primary"}},[t._v("添加公告")])],1),i("div",{staticClass:"btn",staticStyle:{width:"100px"}},[i("el-button",{staticStyle:{width:"100px"}},[t._v("批量删除")])],1),i("div",{staticClass:"btn",staticStyle:{width:"120px"}},[i("el-button",{staticStyle:{width:"120px"}},[t._v("导出当前数据")])],1)])},e=[],n={name:"drop",data:function(){return{}}},l=n,c=(i("2333"),i("2877")),r=Object(c["a"])(l,a,e,!1,null,null,null);s["a"]=r.exports},c64e:function(t,s,i){"use strict";var a=i("063f"),e=i.n(a);e.a},c7c0:function(t,s,i){"use strict";var a=i("d633"),e=i.n(a);e.a},d000:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"nav"},[i("div",{staticClass:"logo"},[t._v("Logo")]),i("div",{staticClass:"menu"},[i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/home"}},[i("i",{staticClass:"iconfont icon-shouye7"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/index/current-session"}},[i("i",{staticClass:"iconfont icon-gongdanguanli"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/visit"}},[i("i",{staticClass:"iconfont icon-fangke"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/index/history-session"}},[i("i",{staticClass:"iconfont icon-lishi"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/customer"}},[i("i",{staticClass:"iconfont icon-yonghu"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/WorkOrder"}},[i("i",{staticClass:"iconfont icon-gongdan"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/data"}},[i("i",{staticClass:"iconfont icon-tongji"})])],1),t._m(0),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/settingofpersonal"}},[i("i",{staticClass:"iconfont icon-shezhi"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/login"}},[i("i",{staticClass:"iconfont icon-tubiaoshangchuanmoban"})])],1)])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"menu-item separate-line"},[i("i",{staticClass:"iconfont icon-hengxian"})])}],n={name:"NavBar",data:function(){return{}}},l=n,c=(i("28f0"),i("2877")),r=Object(c["a"])(l,a,e,!1,null,"6331d2fa",null);s["a"]=r.exports},d633:function(t,s,i){}}]);
//# sourceMappingURL=chunk-f76161a4.0b3a215c.js.map