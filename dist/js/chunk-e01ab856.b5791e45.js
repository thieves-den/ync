(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e01ab856"],{"16bf":function(a,t,e){},"17af":function(a,t,e){"use strict";var n=e("16bf"),r=e.n(n);r.a},e722:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"boxShadow"},[e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:a.tables.slice((a.currentPage-1)*a.pagesize,a.currentPage*a.pagesize),"tooltip-effect":"dark","header-cell-style":"background-color: rgba(0, 110, 255, 0.098)"}},[a._l(a.tableData,function(a){return[e("el-table-column",{key:a.dataItem,attrs:{sortable:"","show-overflow-tooltip":!0,prop:a.dataItem,label:a.dataName,width:"auto",align:"center"}})]})],2),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{"current-page":a.currentPage,"page-sizes":[5,10,20,40],"page-size":a.pagesize,layout:"total, sizes,prev, pager, next",total:a.tables.length,"prev-text":"上一页","next-text":"下一页"},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1)],1)},r=[],i={name:"workload",components:{},data:function(){return{currentPage:1,pagesize:5,rangeDate:[],tables:[],myinputs:"",tableData:[{dataItem:"browser",dataName:"来源类型"},{dataItem:"visitNum",dataName:"浏览量"},{dataItem:"visitorNum",dataName:"访客量"},{dataItem:"averageDuration",dataName:"平均浏览时长"}]}},created:function(){var a=this;this.$axios.get("/visitor/visit").then(function(t){var e=t.data;a.tables=e.result})}},s=i,l=(e("17af"),e("2877")),o=Object(l["a"])(s,n,r,!1,null,"85c37b98",null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-e01ab856.b5791e45.js.map