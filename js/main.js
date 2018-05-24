$(function(){
    //肥宅看电影
    $longwang=$("#longwang");
    $longwang.hide();
    console.log("longwang ajax will start");
    
    $longwang.load("getlongwang.php",
        function(){
            console.log("longwang ajax callback");
            
            $("#longwang a").each(function(){
                url="http://www.321n.net/"+$(this).attr("href");
                $(this).attr("href",url).attr("target","_blank");
                txt=$(this).text();
                titles=txt.split("】【");
                $(this).text('【'+titles[1]+'】【'+titles[2]+'】');
                $(this).addClass("list-group-item title");
            });
            $("#longwang").closest(".panel").find(".panel-body").hide();
            $longwang.show(400);
        });
    //肥宅读新闻
    $ithome24h=$("#ithome24h");
    $ithome24h.hide();
    console.log("ithome will start ajax");
    $ithome24h.load("getithome24h.php",
        function(){
            console.log("ithome callback");
            //对已读新闻和未读新闻的处理
            $("#ithome24h a").each(function(){
                url=$(this).attr("href");
                smurl=url.split('/')[5].split('.')[0];
                if(Cookies.get(smurl)){
                    //console.log("has read");
                    $(this).addClass("list-group-item has-read");
                }
                else{
                    //console.log("has not read");
                    $(this).addClass("list-group-item has-not-read");
                }
                $(this).click(function(){
                    url=$(this).attr("href");//https://www.ithome.com/html/it/361100.htm
                    smurl=url.split('/')[5].split('.')[0];//361100
                    console.log(smurl);
                    if(!Cookies.get(smurl)){
                        //设置一个2天的Cookie
                        Cookies.set(smurl, 1, { expires: 2 });
                        $(this).toggleClass("has-read has-not-read");
                    }
                });
            });
            $("#ithome24h").closest(".panel").find(".panel-body").hide();
            $ithome24h.show(400);
        });
});