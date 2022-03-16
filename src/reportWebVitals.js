const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// web-vitals是一個前端工具，由google開發維護，可獲取web性能指標，以助達到更好的體驗優化
// CLS (Cumulative Layout Shift): 衡量视觉稳定性
// FID (First Input Delay): 首次输入延迟：记录用户和页面进行首次交互操作所花费的时间。
// FCP (First Contentful Paint): 首次内容绘制：标记浏览器渲染来自 DOM 第一位内容的时间点，该内容可能是文本、图像、SVG 甚至 元素.
// LCP (Largest Contentful Paint): 最大内容渲染 ：代表在viewport中最大的页面元素加载的时间. LCP的数据会通过PerformanceEntry对象记录, 每次出现更大的内容渲染, 则会产生一个新的
// TTFB (Time to First Byte): 浏览器接收第一个字节的时间