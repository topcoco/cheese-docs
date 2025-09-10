---
layout: home

title: cheese
titleTemplate: 高扩展开源自动化测试框架

meta:
  - name: keywords
    content: 自动化测试框架, 脚本, autojs, 按键精灵, 黑科技, HID, cheese框架, 奶酪测试框架, 开源测试工具, 高扩展性, 自动化测试, 测试工具, Java测试框架, Python测试框架, Vue UI支持, IDE集成
  - name: description
    content: cheese 是一个高扩展的开源自动化测试框架，支持多语言和多种开发环境，帮您轻松解决重复性操作，提升开发效率。

hero:
  name: Cheese
  text: 奶酪
  tagline: 这是一套支持 iOS 脱机免越狱与 Android 免 root 的自动化测试框架，跨平台 UI 和高度复用 API，双端可共享同一接口完成相同操作。
  actions:
    - theme: brand
      text: 开始梦幻般的旅程
      link: /other/go
    - theme: brand
      text: 项目信息
      link: /other/project-information
#    - theme: brand
#      text: 高级加固保护你的脚本代码转汇编不可还原-支持[Easyclick,Aiwork,Cheese，Autojs]
#      link: http://49.232.248.72:8787
    - theme: brand
      text: 用户协议
      link: /agreement
    - theme: alt
      text: 我的b站
      link: https://b23.tv/Ky3VFuN
    - theme: alt
      text: GitHub
      link: https://github.com/topcoco

  image:
    src: /images/icon.png
    alt: cheese

features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#8ed6fb" d="M117.29 98.1L66.24 127v-22.51L98 87zm3.5-3.16V34.55l-18.68 10.8v38.81l18.67 10.77zM10.71 98.1l51 28.88v-22.49L29.94 87zm-3.5-3.16V34.55l18.68 10.8v38.81zm2.19-64.3L61.76 1v21.76L28.21 41.21l-.27.15zm109.18 0L66.24 1v21.76L99.79 41.2l.27.15l18.54-10.71z"/><path fill="#1c78c0" d="M61.76 99.37L30.37 82.1V47.92L61.76 66zm4.48 0l31.39-17.25v-34.2L66.24 66zM32.5 44L64 26.66L95.5 44L64 62.16z"/></svg>
    title: 高扩展
    details: 采用Vscode、IDEA编写脚本代码,支持Java、Python、Js等多种主流语言

  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    title: 美观界面
    details: 支持Vue、Xml、自研跨平台原生Jui编写精美界面
  - icon: 🚀
    title: 多种自动化方案
    details: HID、无障碍、ROOT、ADB、Frida、Wda

---

<style>
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
    --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
    --vp-home-hero-image-filter: blur(40px);
  }

  @media (min-width: 640px) {
    :root {
      --vp-home-hero-image-filter: blur(56px);
    }
  }

  @media (min-width: 960px) {
    :root {
      --vp-home-hero-image-filter: blur(72px);
    }
  }

 /* 新增横幅样式 */
.banner {
  background: linear-gradient(135deg, #ff4d4d 30%, #ff0000 70%); /* 渐变红色背景 */
  color: #fff; /* 字体颜色为白色 */
  text-align: center; /* 内容居中 */
  padding: 15px 0; /* 内边距，增加横幅的高度 */
  font-size: 18px; /* 字体大小 */
  font-weight: bold; /* 字体加粗 */
  position: fixed; /* 固定位置 */
  width: 100%; /* 宽度100%，但最大宽度为以下值 */
  max-width: 1200px; /* 最大宽度 */
  left: 50%; /* 让横幅居中 */
  transform: translateX(-50%); /* 使横幅居中 */
  bottom: 20px; /* 固定在页面底部并留出一点间距 */
  z-index: 100; /* 确保在其他元素上方 */
  border-radius: 10px; /* 圆角效果 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
  font-family: 'Arial', sans-serif; /* 设置字体 */
  letter-spacing: 1px; /* 增加字母间距，提升视觉效果 */
  text-transform: uppercase; /* 字母大写 */
  animation: slideIn 0.5s ease-out; /* 动画效果：滑入 */
  overflow: hidden; /* 防止文字溢出 */
}

/* 动画效果：横幅从底部滑入 */
@keyframes slideIn {
  from {
    transform: translateX(-50%) translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}

.banner-link {
  display: inline-block;
  margin-left: 10px; /* 按钮与文本间距 */
  padding: 8px 15px; /* 内边距 */
  background-color: #fff; /* 按钮背景颜色 */
  color: #ff0000; /* 按钮文字颜色 */
  font-weight: bold; /* 字体加粗 */
  border-radius: 5px; /* 圆角 */
  text-decoration: none; /* 去掉下划线 */
  transition: background-color 0.3s ease, color 0.3s ease; /* 添加过渡效果 */
  font-size: 16px; /* 按钮文字大小 */
}

.banner-link:hover {
  background-color: rgba(129,14,102,0.31); /* 悬停背景颜色 */
  color: #fff; /* 悬停文字颜色 */
}

/* 横幅上的装饰 */
.banner::before {
  content: "✨ "; /* 添加装饰图标 */
  font-size: 24px; /* 图标大小 */
  margin-right: 8px; /* 图标和文字之间的间隔 */
}

.banner::after {
  content: " ✨"; /* 添加装饰图标 */
  font-size: 24px; /* 图标大小 */
  margin-left: 8px; /* 图标和文字之间的间隔 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner {
    font-size: 16px; /* 字体变小 */
    padding: 12px 0; /* 减少上下内边距 */
    max-width: 100%; /* 横幅宽度全屏 */
  }

  .banner-link {
    font-size: 14px; /* 按钮文字变小 */
    padding: 6px 12px; /* 按钮内边距减少 */
  }
}

@media (max-width: 480px) {
  .banner {
    font-size: 14px; /* 字体进一步缩小 */
    padding: 10px 0; /* 横幅高度更小 */
  }

  .banner-link {
    font-size: 12px; /* 按钮文字进一步缩小 */
    padding: 4px 10px; /* 按钮内边距调整 */
  }
}

</style>

<!-- 横幅内容 -->
<div class="banner">
  ESP32系列USB和蓝牙HID固件和HID开发制作课程，全网最低：
  <a href="https://b23.tv/QAXxwsI" target="_blank" class="banner-link">
    点击购买
  </a>
</div>
