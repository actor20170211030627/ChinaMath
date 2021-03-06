/**
 * MathJax数学公式,官网 https://github.com/mathjax/MathJax
 * 
 * 配置抄自: http://docs.mathjax.org/en/latest/web/configuration.html#web-configuration
 * 
 *
 * 在h5中引用:
 * <head>
 *     ...
 * 	   <!-- MathJax数学公式 -->
 * 	   <script src="../../js/load-mathjax.js" async></script>
 */
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};

(function () {
  var script = document.createElement('script');
  // script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  //下面这个好像显示更清晰(但是外网不能访问)
  // script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.src = 'https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js';
  //   script.src = 'https://cdn.staticfile.org/mathjax/3.2.0/mathjax.min.js';
  //   script.src = 'https://cdn.staticfile.org/mathjax/3.2.0/es5/core.js';
    // script.src = 'https://cdn.mathjax.org/mathjax/2.7.9/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  script.async = true;
  document.head.appendChild(script);
})();



// 如果单独在h5中配置:
//<head>
//...
//<!-- https://github.com/mathjax/MathJax -->
// 	<script>
// 	  MathJax = {
// 		tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]}
// 	  };
// 	</script>
// 	<script id="MathJax-script"
// 			async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
// 	</script>
