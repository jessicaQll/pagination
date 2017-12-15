;(function($){
    $.fn.pagination = function(options){

        var defaults = {
            currentPage : 1,//当前页
            pageCount : 10,// 总页码
            disableClassName : "disableClassName"//首尾页时上一页下一页禁止点击样式类

        };

        var opts = $.extend(defaults, options);
        var $pageContainer = this；

        //动态生成页码
        function createPageEle(currentPage, pageCount, disableClassName){
            var lisHtml = '<div class="page prev">上一页</div>';
            var i;

            if(1 == currentPage){//当前为首页，上一页不可点击
                lisHtml = '<div class="page prev '+ disableClassName + '">上一页</div>';
            }
            if(1 == pageCount){//只有一页时隐藏分页器
                $pageContainer.css("display","none");
            }else if(pageCount <= 10){//总页数小于等于10时，页码全部显示
                for(i = 1; i <= pageCount; i++){
                    if( i == currentPage ){
                        lisHtml += '<div class="page page-active">' + i + '</div>';
                    }else{
                        lisHtml += '<div class="page">' + i + '</div>';
                    }
                }
            }else{//总页数大于10时，页码显示样式
                if(5 > currentPage){//当前页码小于5时，显示前5个页码
                    for(i = 1; i <= 5; i++){
                        if( i == currentPage ){
                            lisHtml += '<div class="page page-active">' + i + '</div>';
                        }else{
                            lisHtml += '<div class="page">' + i + '</div>';
                        }
                    }
                    lisHtml += '<div class="page page-hide">...</div>';
                    for(i = pageCount; i <= pageCount; i++){
                        if( i == currentPage ){
                            lisHtml += '<div class="page page-active">' + i + '</div>';
                        }else{
                            lisHtml += '<div class="page">' + i + '</div>';
                        }
                    }
                }else if(pageCount - 4 < currentPage){//当前页码大于倒数第5页时，显示后5个页码
                    lisHtml += '<div class="page">1</div><div class="page">2</div><div class="page page-hide">...</div>';
                    for(i = pageCount - 4; i <= pageCount; i++){
                        if( i == currentPage ){
                            lisHtml += '<div class="page page-active">' + i + '</div>';
                        }else{
                            lisHtml += '<div class="page">' + i + '</div>';
                        }
                    }
                }else{
                    lisHtml += '<div class="page">1</div><div class="page">2</div><div class="page page-hide">...</div>';
                    for(i = currentPage - 1; i <= currentPage+1; i++){
                        if( i == currentPage ){
                            lisHtml += '<div class="page page-active">' + i + '</div>';
                        }else{
                            lisHtml += '<div class="page">' + i + '</div>';
                        }
                    }
                    lisHtml += '<div class="page page-hide">...</div><div class="page">' + ( pageCount-1) + '</div><div class="page">' + pageCount + '</div>';
                }
            }
            if(pageCount == currentPage){
                lisHtml += '<div class="page next ' + disableClassName + '">下一页</div>';
            }else{
                lisHtml += '<div class="page next">下一页</div>';
            }
            $pageContainer.append(lisHtml);
        };

        //页码点击事件
        $pageContainer.on("click",".page",function(e){
            var $tar = $(e.target);
            var clickPage = $tar.html();
            var showPage = $tar.siblings(".page-active").html();
            if(showPage == clickPage){//点击当前页无效
                return;
            }
            if($tar.hasClass("clickDisable")){//当前页为首页时点击上一页无效，当前页为尾页时点击下一页无效
                return;
            }
            if("上一页" == clickPage){
                $pageContainer.empty();
                createPageEle(showPage-1, opts.pageCount, "clickDisable" );
            }else if("下一页" == clickPage){
                if(opts.pageCount == showPage){
                    return;
                }
                $pageContainer.empty();
                createPageEle( parseInt(showPage)+1, opts.pageCount, "clickDisable" );
            }else{
                $pageContainer.empty();
               createPageEle( parseInt(clickPage), opts.pageCount, "clickDisable" );
            }
        });

        //初始加载分页器
        createPageEle(opts.currentPage, opts.pageCount, opts.disableClassName);
    };
})(jQuery);
