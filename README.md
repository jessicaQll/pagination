# pagination
This is a custom jQuery plug-in

插件说明：

此插件pagination默认页码总数小于等于10页,页码全部显示，大于10页部分显示


效果说明：
页码总数小于等于10时，显示（假设页码总数为 10）： 

      上一页 1 2 3 4 5 6 7 8 9 10 下一页  //(假设当前页为1)
      
页码总数小于等于大于时，显示（假设页码总数为 100）：

      上一页 1 2 3 4 5 ... 100 下一页   //(假设当前页为1) 
      
      上一页 1 2 ... 44 45 46 ... 99 100 下一页  //(假设当前页为45) 
      
      上一页 1 2 ... 96 97 98 99 100 下一页  //(假设当前页为98) 


使用方法：

 使用前确认已经引入jQuery库文件，再引入pagination.js文件
 
 引入页码样式 
 
 .page {
  
     border: 1px solid #969696;
     
     box-sizing: border-box;
     
     width: 34px;
     
     height: 34px;
     
     line-height: 34px;
     
     margin-right: 9px;
     
     color: #2084ff;
     
     font-size: 14px;
     
     text-align: center;
     
     display: inline-block;
     
     -webkit-user-select: none;
     
     -moz-user-select: none;
     
     -ms-user-select: none;
     
     user-select: none; }
     
 .page-active {
 
     border: none;
     
     color: #4a4a4a;
     
     font-weight: bold; }
     
 .page-hide {
 
     border: none;
     
     width: 12px;
     
     font-weight: bold; }
     
 .prev, .next {
 
     width: 50px; }
     
 .click-disable {
 
     background-color: #efefef; }
     

 调用方法：
 
 参数说明：
 
 currentPage：当前页，可选，默认为1
 
 pageCount: 总页码，必须，否则无页码
 
 disableClassName：首尾页时上一页下一页禁止点击样式类，可选，默认为样式中的clickDisable
 
 clickCallback: function(){}//点击回调函数
 
 例如：
 
 $("分页器容器").pagination({
 
    currentPage : 1，
   
    pageCount : 10,
    
    disableClassName : "clickDisable",
    
    clickCallback: testConsole
    
 });
 
 function testConsole(page){//参数为带显示页码
 
    console.log(page);
 
 }
