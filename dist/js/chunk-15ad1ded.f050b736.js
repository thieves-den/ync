(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15ad1ded","chunk-1dc3e27a"],{"0418":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top"},[e("div",{staticClass:"h3"},[t._v(t._s(t.name))]),e("div",{staticClass:"users-info"},[t._m(0),t._m(1),e("div",{staticClass:"user-name"},[t._v("\n\t\t\t"+t._s(t.user.nickName)),e("i",{staticClass:"iconfont icon-icon_down-arrow"}),t._m(2)])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-msg msg"},[e("i",{staticClass:"iconfont icon-lingdang"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-img"},[e("img",{attrs:{src:"img/u94.svg"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-status"},[e("div",{staticClass:"user-status-item active"},[e("i",{staticClass:"iconfont icon-dian"}),t._v("在线")]),e("div",{staticClass:"user-status-item"},[e("i",{staticClass:"iconfont icon-dian"}),t._v("离线")])])}],i={props:["name"],name:"GHeader",data:function(){return{user:{}}},created:function(){var t=localStorage.getItem("user");this.user=JSON.parse(t)}},l=i,c=(e("8baf"),e("2877")),r=Object(c["a"])(l,n,s,!1,null,null,null);a["a"]=r.exports},"28f0":function(t,a,e){"use strict";var n=e("af4f"),s=e.n(n);s.a},"2bf2":function(t,a,e){},"43c8":function(t,a,e){"use strict";var n=e("e596"),s=e.n(n);s.a},"512a":function(t,a,e){"use strict";var n=e("7f7e"),s=e.n(n);s.a},"53e0":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"myf"},[e("div",{staticClass:"timelay"},[e("el-date-picker",{attrs:{"prefix-icon":"el-icon-date",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small","value-format":"yyyy-MM-dd"},on:{change:function(a){return t.selectModel4(a)}},model:{value:t.rangeDate,callback:function(a){t.rangeDate=a},expression:"rangeDate"}})],1),e("div",{staticClass:"layui-inline"},[e("div",{staticClass:"layui-input-inline"},[e("el-select",{attrs:{filterable:"","collapse-tags":"",placeholder:"全部客服"},on:{change:function(a){return t.selectModel(a)}},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),e("div",{staticClass:"layui-inline"},[e("div",{staticClass:"layui-input-inline"},[e("el-select",{attrs:{filterable:"","collapse-tags":"",placeholder:"全部客服组"},on:{change:function(a){return t.selectModel2(a)}},model:{value:t.value2,callback:function(a){t.value2=a},expression:"value2"}},t._l(t.options2,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)])])},s=[],i={name:"drop",data:function(){return{options:[{value:"全部客服",label:"全部客服"},{value:"王美美",label:"王美美"},{value:"七尾",label:"七尾"},{value:"李想",label:"李想"},{value:"王之",label:"王之"}],options2:[{value:"全部来源",label:"全部来源"},{value:"Mac",label:"Mac"},{value:"Windows",label:"Windows"},{value:"手机",label:"手机"}],options3:[{value:"全部客服组",label:"全部客服组"},{value:"客服组一",label:"客服组一"},{value:"客服组二",label:"客服组二"},{value:"客服组三",label:"客服组三"}],value:"",value2:"",value3:""}}},l=i,c=(e("43c8"),e("2877")),r=Object(c["a"])(l,n,s,!1,null,"507f9d02",null);a["a"]=r.exports},"614c":function(t,a,e){"use strict";var n=e("e9c7"),s=e.n(n);s.a},"782e":function(t,a,e){},"7f7e":function(t,a,e){},"8baf":function(t,a,e){"use strict";var n=e("782e"),s=e.n(n);s.a},a823:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"boxShadow"},[e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tables.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),"tooltip-effect":"dark","header-cell-style":"background-color: rgba(0, 110, 255, 0.098)"}},[t._l(t.tableData,function(t){return[e("el-table-column",{key:t.dataItem,attrs:{sortable:"","show-overflow-tooltip":!0,prop:t.dataItem,label:t.dataName,width:"auto",align:"center"}})]})],2)],1)},s=[],i={name:"workload",components:{},data:function(){return{currentPage:1,pagesize:5,rangeDate:[],tables:[],myinputs:"",tableData:[{dataItem:"nickName",dataName:"客服昵称"},{dataItem:"onlineTimeBegin",dataName:"首次登陆时间"},{dataItem:"averageResponseTime",dataName:"忙碌时长"},{dataItem:"busyTime",dataName:"空闲时长"},{dataItem:"totalOnlineTime",dataName:"在线时长"},{dataItem:"averageSessionTime",dataName:"离线时长"}]}},created:function(){var t=this;this.$axios.get("/cs/CustomerServiceCheckingIn").then(function(a){var e=a.data;t.tables=e.result})}},l=i,c=(e("512a"),e("2877")),r=Object(c["a"])(l,n,s,!1,null,null,null);a["default"]=r.exports},ab10:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"workOrder"},[e("dl",[e("dt",[t._v("在线客服")]),t._l(t.items,function(a,n){return e("dd",{class:t.activeClass==t.position?"active":"",on:{click:function(a){return t.IsActive(n)}}},[e("div",{staticClass:"item"},[t._v(t._s(a.name))])])})],2)])},s=[],i={name:"LeftListOfData",data:function(){return{activeClass:-1,items:[{name:"数据总览"},{name:"工作量统计"},{name:"工作质量统计"},{name:"考勤统计"},{name:"访问统计"}]}},methods:{created:function(){this.k=this.$route.query.k,this.activeClass=k},IsActive:function(t){0==t&&this.$router.push({path:"/data?k=".concat(t),query:{k:t}}),1==t&&this.$router.push({path:"/workload?k=".concat(t),query:{k:t}}),2==t&&this.$router.push({path:"/workmanship?k=".concat(t),query:{k:t}}),3==t&&this.$router.push({path:"/attendance?k=".concat(t),query:{k:t}}),4==t&&this.$router.push({path:"/visits?k=".concat(t),query:{k:t}})}}},l=i,c=(e("614c"),e("2877")),r=Object(c["a"])(l,n,s,!1,null,"624803a3",null);a["a"]=r.exports},af4f:function(t,a,e){},c8c5:function(t,a,e){"use strict";var n=e("2bf2"),s=e.n(n);s.a},d000:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav"},[e("div",{staticClass:"logo"},[t._v("Logo")]),e("div",{staticClass:"menu"},[e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/home"}},[e("i",{staticClass:"iconfont icon-shouye7"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/index/current-session"}},[e("i",{staticClass:"iconfont icon-gongdanguanli"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/visit"}},[e("i",{staticClass:"iconfont icon-fangke"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/index/history-session"}},[e("i",{staticClass:"iconfont icon-lishi"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/customer"}},[e("i",{staticClass:"iconfont icon-yonghu"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/WorkOrder"}},[e("i",{staticClass:"iconfont icon-gongdan"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/data"}},[e("i",{staticClass:"iconfont icon-tongji"})])],1),t._m(0),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/settingofpersonal"}},[e("i",{staticClass:"iconfont icon-shezhi"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/login"}},[e("i",{staticClass:"iconfont icon-tubiaoshangchuanmoban"})])],1)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"menu-item separate-line"},[e("i",{staticClass:"iconfont icon-hengxian"})])}],i={name:"NavBar",data:function(){return{}}},l=i,c=(e("28f0"),e("2877")),r=Object(c["a"])(l,n,s,!1,null,"6331d2fa",null);a["a"]=r.exports},e596:function(t,a,e){},e9c7:function(t,a,e){},f4e3:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("nav-bar"),e("g-header",{attrs:{name:"考勤统计"}}),e("leftlist"),e("div",{staticClass:"container"},[e("div",{staticClass:"choice"},[e("drop")],1),e("div",[e("checkingin")],1)])],1)},s=[],i=e("ab10"),l=e("d000"),c=e("0418"),r=e("53e0"),o=e("a823"),u={name:"data",components:{leftlist:i["a"],NavBar:l["a"],GHeader:c["a"],drop:r["a"],checkingin:o["default"]}},d=u,v=(e("c8c5"),e("2877")),f=Object(v["a"])(d,n,s,!1,null,"2aa56b8b",null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-15ad1ded.f050b736.js.map