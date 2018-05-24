<?php  
include('simple_html_dom.php');//引入类库文件
//$html = file_get_contents('');  
header("Content-Type:text/html;charset=utf-8");   
$keyworld="walter";   
$keyworld=iconv("utf-8","gb2312",$keyworld);   
$url = "http://www.321n.net/forum-292-1.html";   
$html = file_get_contents($url);   
$html = iconv("gb2312", "utf-8//IGNORE",$html);  
  // 新建一个Dom实例
$htmldom = new simple_html_dom();
//加载
$htmldom->load($html);
//选择器
$a = $htmldom->find('table#threadlisttableid a.s');
for($i=0;$i<10;$i++){
    echo $a[$i];
}
//清理对象释放内存
$htmldom->clear();
?>