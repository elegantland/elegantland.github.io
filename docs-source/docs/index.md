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
      link: /guide/
    - theme: alt
      text: 在GitHub上查看
      link: https://github.com/elegantland/message_blocker

features:
  - icon: 🎯
    title: 精准屏蔽
    details: 支持精准的消息屏蔽，可以按照用户、群组、关键词等多个维度进行屏蔽
  - icon: 🔒
    title: 隐私保护
    details: 所有数据都存储在本地，不会上传到任何服务器
  - icon: ⚡
    title: 高性能
    details: 采用高效的算法，对QQ的性能影响极小
  - icon: 🎨
    title: 简洁界面
    details: 简洁优雅的界面设计，操作直观易用
  - icon: 🔧
    title: 灵活配置
    details: 提供丰富的配置选项，可以根据需要自定义屏蔽规则
  - icon: 🚀
    title: 持续更新
    details: 持续维护和更新，及时修复问题，添加新功能

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
