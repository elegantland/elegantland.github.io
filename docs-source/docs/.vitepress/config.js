import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'QQ Message Blocker',
  description: '优雅而强大的QQ消息屏蔽插件',
  lang: 'zh-CN',
  base: '/',

  head: [
    // 设置网站图标
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' }],

    // 插入 Google Analytics 脚本
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-NN6YTPJW8E' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NN6YTPJW8E');
    `],
  ],

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  appearance: true,
  
  themeConfig: {
    logo: '/favicon.jpg',
    siteTitle: 'QQ Message Blocker',
    
    nav: [
      { text: '主页', link: '/' },
      { text: '使用手册', link: '/introduction' },
      { 
        text: 'GitHub',
        link: 'https://github.com/elegantland/qqMessageBlocker'
      }
    ],

    sidebar: {
      '/': [
        {
          text: '入门',
          items: [
            { text: '简介', link: '/introduction' },
            { text: '快速开始', link: '/getting-started' }
          ]
        },
        {
          text: '核心功能',
          items: [
            { text: '消息屏蔽', link: '/features/message-blocking' },
            { text: '表情屏蔽', link: '/features/emoji-blocking' },
            { text: '用户屏蔽', link: '/features/user-blocking' }
          ]
        },
        {
          text: '高级功能',
          items: [
            { text: '配置导入导出', link: '/advanced/config' },
            { text: '自定义规则', link: '/advanced/rules' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/elegantland/qqMessageBlocker' }
    ],

    footer: {
      message: '基于 GPL v3 许可发布',
      copyright: 'Copyright 2024 elegantland'
    },

    appearance: {
      maxWidth: '1440px'
    },

    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
})
