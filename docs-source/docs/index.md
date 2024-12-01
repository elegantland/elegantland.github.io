---
layout: home

hero:
  name: "QQ Message Blocker"
  text: "QQ消息屏蔽插件"
  tagline: "儒雅且简洁"
  image:
    src: /favicon.jpg
    alt: QQ Message Blocker
  actions:
    - theme: brand
      text: 快速开始
      link: /getting-started
    - theme: alt
      text: 在GitHub上查看
      link: https://github.com/elegantland/qqMessageBlocker

features:
  - icon: 🎯
    title: 精准屏蔽
    details: 支持关键词、正则表达式等多种屏蔽方式，让消息过滤更加精准。轻松屏蔽垃圾消息，享受清爽的聊天环境。
  - icon: 😊
    title: 表情管理
    details: 智能表情过滤系统，一键屏蔽烦人的表情。支持按用户、群组设置不同的表情过滤规则。
  - icon: 🖼️
    title: 图片过滤
    details: 基于图片特征的智能过滤，自动识别并屏蔽不需要的图片。支持自定义图片过滤规则。
  - icon: ⚡
    title: 实时生效
    details: 所有设置即时生效，无需重启QQ。简单易用的界面，让你轻松管理所有屏蔽规则。
  - icon: 🔄
    title: 配置同步
    details: 支持配置导入导出，轻松备份和迁移你的屏蔽规则。多设备间无缝同步。
  - icon: 🛡️
    title: 隐私保护
    details: 所有配置都存储在本地，不会上传到服务器。充分保护你的隐私安全。
---

<style>
.VPHero .image-bg {
  opacity: 0.8;
  transition: opacity 1s ease;
}

.VPHero .image-container:hover .image-bg {
  opacity: 0.95;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(45deg, #4A00E0, #8E2DE2, #B100CD, #D100B1);
}

.dark {
  --vp-home-hero-name-background: linear-gradient(45deg, #7B66FF, #9C7EFF, #BE95FF, #E0B0FF);
}

.VPHero .name {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.VPFeature {
  transition: transform 0.2s ease;
}

.VPFeature:hover {
  transform: translateY(-2px);
}
</style>
