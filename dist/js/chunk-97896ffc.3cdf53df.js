(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97896ffc"],{"0418":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("div",{staticClass:"h3"},[t._v(t._s(t.name))]),a("div",{staticClass:"users-info"},[t._m(0),t._m(1),a("div",{staticClass:"user-name"},[t._v("\n\t\t\t"+t._s(t.user.nickName)),a("i",{staticClass:"iconfont icon-icon_down-arrow"}),t._m(2)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-msg msg"},[a("i",{staticClass:"iconfont icon-lingdang"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-img"},[a("img",{attrs:{src:"img/u94.svg"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-status"},[a("div",{staticClass:"user-status-item active"},[a("i",{staticClass:"iconfont icon-dian"}),t._v("在线")]),a("div",{staticClass:"user-status-item"},[a("i",{staticClass:"iconfont icon-dian"}),t._v("离线")])])}],i={props:["name"],name:"GHeader",data:function(){return{user:{}}},created:function(){var t=localStorage.getItem("user");this.user=JSON.parse(t)}},s=i,r=(a("8baf"),a("2877")),n=Object(r["a"])(s,l,o,!1,null,null,null);e["a"]=n.exports},"1d3c":function(t,e,a){"use strict";var l=a("e243"),o=a.n(l);o.a},"28f0":function(t,e,a){"use strict";var l=a("af4f"),o=a.n(l);o.a},"357b":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("NavBar"),a("g-header",{attrs:{name:"客户详情"}}),a("div",{staticClass:"btns"},[a("el-button",{staticClass:"button1"},[t._v("< 返回")]),a("ButtonCreateOrder",{staticClass:"button2"}),a("DeleteCustomer",{staticClass:"button3"}),a("ButtonBlack",{staticClass:"button4"})],1),a("div",{staticClass:"customer-info"},[a("dl",{staticClass:"customer-info-dl"},[a("dt",[t._v("客户信息\n\t\t\t\t"),a("div",{staticClass:"box"},[a("span",{staticClass:"dialog-btn",on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("编辑")]),a("el-dialog",{staticClass:"abow_dialog",attrs:{title:"编辑客户信息",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"客户名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"真实姓名","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:t.form.realname,callback:function(e){t.$set(t.form,"realname",e)},expression:"form.realname"}})],1),a("el-form-item",{attrs:{label:"客户电话","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),a("el-form-item",{attrs:{label:"客户邮箱","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"客户公司","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:t.form.corporation,callback:function(e){t.$set(t.form,"corporation",e)},expression:"form.corporation"}})],1),a("el-form-item",{attrs:{label:"客户地址","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"客户等级","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.level,callback:function(e){t.$set(t.form,"level",e)},expression:"form.level"}},[a("el-option",{attrs:{label:"普通客户",value:"1"}}),a("el-option",{attrs:{label:"VIP客户",value:"2"}}),a("el-option",{attrs:{label:"潜在客户",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"客户来源","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.source,callback:function(e){t.$set(t.form,"source",e)},expression:"form.source"}},[a("el-option",{attrs:{label:"客服录入",value:"1"}}),a("el-option",{attrs:{label:"网页介入",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"选择标签","label-width":t.formLabelWidth}},[a("el-radio",{attrs:{label:"1"},model:{value:t.form.radio,callback:function(e){t.$set(t.form,"radio",e)},expression:"form.radio"}},[t._v("潜在客户")]),a("el-radio",{attrs:{label:"2"},model:{value:t.form.radio,callback:function(e){t.$set(t.form,"radio",e)},expression:"form.radio"}},[t._v("上市公司")])],1),a("el-form-item",{attrs:{label:"客户备注","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off",placeholder:"请输入"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("保 存")])],1)],1)],1)]),a("dd",[a("span",{staticClass:"label"},[t._v("客户名称")]),a("span",{staticClass:"item"},[t._v(t._s(t.customer.nickName))])]),a("dd",[a("span",{staticClass:"label"},[t._v("真实姓名")]),a("span",{staticClass:"item"},[t._v(t._s(t.customer.realName))])]),a("dd",[a("span",{staticClass:"label"},[t._v("客户电话")]),a("span",{staticClass:"item"},[t._v(t._s(t.customer.phone))])]),a("dd",[a("span",{staticClass:"label"},[t._v("客户邮箱")]),a("span",{staticClass:"item"},[t._v(t._s(t.customer.email))])]),a("dd",[a("span",{staticClass:"label"},[t._v("客户公司")]),a("span",{staticClass:"item"},[t._v(t._s(t.customer.company))])]),a("dd",[a("span",{staticClass:"label"},[t._v("客户地址")]),a("span",{staticClass:"item"},[t._v(t._s(t.customer.address))])]),a("dd",[a("span",{staticClass:"label"},[t._v("客户等级")]),a("span",{staticClass:"item"},[t._v(t._s(t.customer.level))])]),a("dd",[a("span",{staticClass:"label"},[t._v("客户来源")]),a("span",{staticClass:"item"},[t._v(t._s(t.customer.channel))])]),a("dd",[a("span",{staticClass:"label"},[t._v("客户备注")]),a("span",{staticClass:"item"},[t._v(t._s(t.customer.remark))])]),t._m(0)])]),a("div",{staticClass:"details"},[t._m(1),a("div",{staticClass:"session-util-tab"},[a("dl",[a("dt",{staticClass:"tabs"},t._l(t.titles,function(e,l){return a("span",{class:t.activeClass==l?"tab-title active":"tab-title",on:{click:function(e){return t.IsActive(l)}}},[t._v(t._s(e.name))])}),0),a("dd",[a("div",{class:0==t.activeClass?"tab-content active":"tab-content"},[a("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("全部")]),a("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("本周")]),a("el-radio",{attrs:{label:"3"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("本月")]),a("el-radio",{attrs:{label:"4"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("上月")])],1),a("div",{class:1==t.activeClass?"tab-content active":"tab-content"},[a("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("全部")]),a("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("本周")]),a("el-radio",{attrs:{label:"3"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("本月")]),a("el-radio",{attrs:{label:"4"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("上月")])],1),a("div",{class:2==t.activeClass?"tab-content active":"tab-content"},[a("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("全部")]),a("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("本周")]),a("el-radio",{attrs:{label:"3"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("本月")]),a("el-radio",{attrs:{label:"4"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("上月")])],1)])])]),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tables.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),"tooltip-effect":"dark","header-cell-style":"background-color: rgba(0, 110, 255, 0.098)"}},[t._l(t.tableData,function(t){return[a("el-table-column",{key:t.dataItem,attrs:{sortable:"","show-overflow-tooltip":!0,prop:t.dataItem,label:t.dataName,width:"auto",align:"center"}})]})],2),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,20,40],"page-size":t.pagesize,layout:"total, sizes,prev, pager, next",total:t.tables.length,"prev-text":"上一页","next-text":"下一页"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dd",[a("span",{staticClass:"label"},[t._v("客户标签")]),a("span",{staticClass:"item"},[a("span",[t._v("已上市")]),a("span",[t._v("潜在客户")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("div",{staticClass:"user-img"},[a("i",{staticClass:"iconfont icon-beizit"})]),a("div",{staticClass:"msg-info"},[a("div",{staticClass:"user-info"},[a("span",{staticClass:"user"},[t._v("王伟")])]),a("div",{staticClass:"msg-latest"},[t._v("北京")])])])}],i=a("d000"),s=a("0418"),r=a("6dae"),n=a("a6bd"),c=a("8ab6"),m={name:"CustomerDetails",components:{NavBar:i["a"],GHeader:s["a"],ButtonCreateOrder:r["a"],DeleteCustomer:n["a"],ButtonBlack:c["a"]},data:function(){return{nickName:"",customer:{nickName:"",realName:"",phone:"",email:"",company:"",address:"",level:"",channel:"",remark:""},currentPage:1,pagesize:5,rangeDate:[],tables:[{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5},{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5},{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5},{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5},{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5},{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5},{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5},{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5},{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5},{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5},{Time:"2020/7/13 22:20",browser:"微信",customerService:"王美美",group:"未分组",visitDuration:"12分20秒",m:5}],myinputs:"",tableData:[{dataItem:"Time",dataName:"访问时间"},{dataItem:"browser",dataName:"来源"},{dataItem:"customerService",dataName:"客服"},{dataItem:"group",dataName:"客服组"},{dataItem:"visitDuration",dataName:"访问时常"},{dataItem:"m",dataName:"满意度"}],activeClass:0,activeName:"1",radio:"1",titles:[{name:"历史会话"},{name:"历史工单"},{name:"拉黑记录"}],dialogFormVisible:!1,form:{username:"",realname:"",email:"",phone:"",level:"",source:"",radio:"-1",corporation:"",address:""},formLabelWidth:"120px"}},created:function(){var t=this;this.nickName=this.$route.query.nickName,this.$axios.get("cInfo/selectBynickName?nickName=".concat(this.nickName)).then(function(e){var a=e.data;t.customer=a.result,console.log(t.customer)})},methods:{IsActive:function(t){this.activeClass=t}}},u=m,d=(a("1d3c"),a("2877")),f=Object(d["a"])(u,l,o,!1,null,"17eef5a9",null);e["default"]=f.exports},"3f16":function(t,e,a){},"6dae":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box tem1"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("创建工单")]),a("el-dialog",{staticClass:"abow_dialog",attrs:{title:"新建工单",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"工单分类","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("el-option",{attrs:{label:"分类一",value:"1"}}),a("el-option",{attrs:{label:"分类二",value:"2"}}),a("el-option",{attrs:{label:"分类三",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"工单标题","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入工单标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"工单描述","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off",placeholder:"请输入工单描述"},model:{value:t.form.orderDesc,callback:function(e){t.$set(t.form,"orderDesc",e)},expression:"form.orderDesc"}})],1),a("div",{staticClass:"appendix"},[t._v("添加附件（最多上传5个附件，单个文件最大20M)")]),a("el-form-item",{attrs:{label:"抄送人","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.cclist,callback:function(e){t.$set(t.form,"cclist",e)},expression:"form.cclist"}},[a("el-option",{attrs:{label:"七尾",value:"1"}}),a("el-option",{attrs:{label:"王美",value:"2"}}),a("el-option",{attrs:{label:"程琳",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"优先级","label-width":t.formLabelWidth}},[a("el-radio",{attrs:{label:"1"},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}},[t._v("低")]),a("el-radio",{attrs:{label:"2"},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}},[t._v("中")]),a("el-radio",{attrs:{label:"3"},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}},[t._v("高")]),a("el-radio",{attrs:{label:"4"},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}},[t._v("紧急")])],1),a("el-form-item",{attrs:{label:"工单状态","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}},[a("el-option",{attrs:{label:"未分配",value:"1"}}),a("el-option",{attrs:{label:"待处理",value:"2"}}),a("el-option",{attrs:{label:"处理中",value:"3"}}),a("el-option",{attrs:{label:"已解决",value:"4"}}),a("el-option",{attrs:{label:"已关闭",value:"5"}})],1)],1),a("el-form-item",{attrs:{label:"受理客服组","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.serviceGroup,callback:function(e){t.$set(t.form,"serviceGroup",e)},expression:"form.serviceGroup"}},[a("el-option",{attrs:{label:"客服组一",value:"1"}}),a("el-option",{attrs:{label:"客服组二",value:"2"}}),a("el-option",{attrs:{label:"客服组三",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"受理客服","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.customerServiceId,callback:function(e){t.$set(t.form,"customerServiceId",e)},expression:"form.customerServiceId"}},[a("el-option",{attrs:{label:"王美",value:"1"}}),a("el-option",{attrs:{label:"程琳",value:"2"}}),a("el-option",{attrs:{label:"七尾",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"所属客户","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.customerId,callback:function(e){t.$set(t.form,"customerId",e)},expression:"form.customerId"}},[a("el-option",{attrs:{label:"李雷",value:"1"}}),a("el-option",{attrs:{label:"韩梅梅",value:"2"}}),a("el-option",{attrs:{label:"康康",value:"3"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.doSubmit,t.dialogFormVisible=!1}}},[t._v("创建工单")])],1)],1)],1)},o=[],i={name:"ButtonCreateOrder",data:function(){return{dialogFormVisible:!1,form:{cclist:"",orderDesc:"",title:"",type:"",priority:"1",state:"",customerServiceId:"",customerId:""},formLabelWidth:"120px"}},methods:{doSubmit:function(t){console.log(this.form),this.$axios.post("workorder/create",this.form).then(function(t){var e=t.data;e.success}).catch(function(t){console.log(t)})}}},s=i,r=(a("7b01"),a("2877")),n=Object(r["a"])(s,l,o,!1,null,"dbba7946",null);e["a"]=n.exports},"782e":function(t,e,a){},"7b01":function(t,e,a){"use strict";var l=a("3f16"),o=a.n(l);o.a},"8ab6":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box tem3"},[a("el-button",{attrs:{type:"info",plain:""},on:{click:function(e){t.dialogFormVisible=!0}}},[a("span",{staticClass:"dialog-btn"},[t._v("拉黑客户")])]),a("el-dialog",{staticClass:"abow_dialog",attrs:{title:"拉黑客户",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"拉黑原因","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off",placeholder:"请输入拉黑原因"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.doSubmit}},[t._v("确 定")])],1)],1)],1)},o=[],i={name:"black",data:function(){return{dialogFormVisible:!1,form:{customerServiceId:"",reason:"",customerId:"12"},formLabelWidth:"120px"}},created:function(){var t=localStorage.getItem("user");this.form.customerServiceId=JSON.parse(t).customerServiceId},methods:{doSubmit:function(t){console.log(this.form),this.$axios.post("black/create",this.form).then(function(t){var e=t.data;e.success}).catch(function(t){console.log(t)}),this.dialogFormVisible=!1}}},s=i,r=a("2877"),n=Object(r["a"])(s,l,o,!1,null,null,null);e["a"]=n.exports},"8baf":function(t,e,a){"use strict";var l=a("782e"),o=a.n(l);o.a},a6bd:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("el-button",{attrs:{type:"info",plain:""},on:{click:function(e){t.dialogFormVisible=!0}}},[a("span",{staticClass:"dialog-btn"},[t._v("删除客户")])]),a("el-dialog",{staticClass:"abow_dialog",attrs:{title:"删除确认",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"客户信息删除后无法恢复，确定删除此客户信息吗？","label-width":t.formLabelWidth}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1)],1)},o=[],i={name:"DeleteCustomer",data:function(){return{dialogFormVisible:!1,form:{description:""},formLabelWidth:"480px"}}},s=i,r=a("2877"),n=Object(r["a"])(s,l,o,!1,null,null,null);e["a"]=n.exports},af4f:function(t,e,a){},d000:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("div",{staticClass:"logo"},[t._v("Logo")]),a("div",{staticClass:"menu"},[a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/home"}},[a("i",{staticClass:"iconfont icon-shouye7"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/index/current-session"}},[a("i",{staticClass:"iconfont icon-gongdanguanli"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/visit"}},[a("i",{staticClass:"iconfont icon-fangke"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/index/history-session"}},[a("i",{staticClass:"iconfont icon-lishi"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/customer"}},[a("i",{staticClass:"iconfont icon-yonghu"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/WorkOrder"}},[a("i",{staticClass:"iconfont icon-gongdan"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/data"}},[a("i",{staticClass:"iconfont icon-tongji"})])],1),t._m(0),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/settingofpersonal"}},[a("i",{staticClass:"iconfont icon-shezhi"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/login"}},[a("i",{staticClass:"iconfont icon-tubiaoshangchuanmoban"})])],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-item separate-line"},[a("i",{staticClass:"iconfont icon-hengxian"})])}],i={name:"NavBar",data:function(){return{}}},s=i,r=(a("28f0"),a("2877")),n=Object(r["a"])(s,l,o,!1,null,"6331d2fa",null);e["a"]=n.exports},e243:function(t,e,a){}}]);
//# sourceMappingURL=chunk-97896ffc.3cdf53df.js.map