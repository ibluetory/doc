/**
 * to主题使用者：你可以去掉本文件的所有代码
 */
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 还是 客户端
}) => {

  // 用于监控在路由变化时检查广告拦截器 (to主题使用者：你可以去掉本文件的所有代码)
  if (!isServer) {
    router.afterEach(() => {
      // 删除事件改为隐藏事件
      setTimeout(() => {
        const pageAD = document.querySelector('.page-ad');
        if (!pageAD) return;
        const btnEl = pageAD.querySelector('.wwads-hide');
        if (btnEl) {
          btnEl.onclick = () => {
            pageAD.style.display = 'none';
          }
        }
      }, 900);
    })
  }
}


//check document ready
function docReady(t) {
  "complete" === document.readyState ||
    "interactive" === document.readyState
    ? setTimeout(t, 1)
    : document.addEventListener("DOMContentLoaded", t);
}
