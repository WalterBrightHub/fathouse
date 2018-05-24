<?php
include('simple_html_dom.php');//引入类库文件
$url = "https://www.ithome.com/";   
$html = file_get_contents($url);   
  
// 新建一个Dom实例
$htmldom = new simple_html_dom();
//加载
$htmldom->load($html);
//选择器
$bx = $htmldom->find('div.hot-list div.bx')[0];
$a =$bx->find('a');
for($i=0;$i<count($a);$i++){
    echo $a[$i];
}
//清理对象释放内存
$htmldom->clear();
?>          