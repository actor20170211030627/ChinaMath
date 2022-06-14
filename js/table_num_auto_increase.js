
/*
 * 给 table 第1列自动排序号, 需要第一列是一个 <td></td> 空标签
 * 使用:
 * <!-- 给 table 第1列自动排序号, <table class="num_auto_increase" -->
 * <script type="text/javascript" src="../js/table_num_auto_increase.js"></script>
 */
window.onload = function() {
    //1.获取表格
    var tables = document.getElementsByClassName('num_auto_increase');
    var length = tables.length;
    for (var i = 0; i < length; i++) {
        var table = tables[i];
        //2.获取表格的行数
        var len = table.rows.length;
        //3.对行进行遍历
        for(var j = 1; j < len; j++) {
            table.rows[j].cells[0].innerHTML = j;
        }
    }
};
