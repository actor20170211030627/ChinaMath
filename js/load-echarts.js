/**
 * https://github.com/apache/echarts
 * https://echarts.apache.org/zh/index.html
 * 
 *
 * 在h5中引用:
 * <head>
 *     ...
 *     <!-- echarts图表 -->
 *     <script src="js/load-echarts.js" async?????></script>
 */


//UncaughtReferenceError: echarts is not defined...
(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js';
  script.async = false;
  document.head.appendChild(script);
})();



// 如果单独在h5中配置:
//<head>
//...
//<!-- echarts图表: https://github.com/apache/echarts,
//     https://echarts.apache.org/zh/index.html -->
//<script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>