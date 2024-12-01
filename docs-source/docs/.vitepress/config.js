import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'QQ Message Blocker',
  description: '优雅而强大的QQ消息屏蔽插件',
  lang: 'zh-CN',
  base: '/',

  head: [
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' }],
    // Google Analytics
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-NN6YTPJW8E' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      // 启用更详细的用户数据收集
      gtag('config', 'G-NN6YTPJW8E', {
        send_page_view: true,
        cookie_flags: 'max-age=7200;secure;samesite=none',
        allow_google_signals: true,
        allow_ad_personalization_signals: true,
        anonymize_ip: false,
        client_storage: 'none',
        transport_type: 'beacon',
        page_title: document.title,
        page_location: window.location.href,
        user_properties: {
          user_agent: navigator.userAgent,
          language: navigator.language,
          screen_resolution: \`\${window.screen.width}x\${window.screen.height}\`,
          viewport_size: \`\${window.innerWidth}x\${window.innerHeight}\`
        }
      });

      // 自定义事件跟踪
      document.addEventListener('DOMContentLoaded', function() {
        // 跟踪页面停留时间
        let startTime = new Date();
        window.addEventListener('beforeunload', function() {
          let endTime = new Date();
          let timeSpent = (endTime - startTime) / 1000;
          gtag('event', 'time_spent', {
            'event_category': 'User Engagement',
            'event_label': document.title,
            'value': timeSpent
          });
        });

        // 跟踪滚动深度
        let maxScroll = 0;
        window.addEventListener('scroll', function() {
          let scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
          if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll > 25 && maxScroll <= 100) {
              gtag('event', 'scroll_depth', {
                'event_category': 'User Engagement',
                'event_label': \`\${Math.floor(maxScroll)}%\`
              });
            }
          }
        });

        // 跟踪外部链接点击
        document.querySelectorAll('a[href^="http"]').forEach(link => {
          link.addEventListener('click', function(e) {
            gtag('event', 'click', {
              'event_category': 'Outbound Link',
              'event_label': this.href
            });
          });
        });
      });
    `]
  ],

  // VitePress 特定配置
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  appearance: true, // 启用暗色模式切换
  
  themeConfig: {
    logo: '/favicon.jpg',
    siteTitle: 'QQ Message Blocker',
    
    // 导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '使用手册', link: '/introduction' },
      { 
        text: 'GitHub',
        link: 'https://github.com/elegantland/qqMessageBlocker'
      }
    ],

    // 侧边栏
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

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/elegantland/qqMessageBlocker' }
    ],

    // 页脚
    footer: {
      message: '基于 GPL v3 许可发布',
      copyright: 'Copyright 2024 elegantland'
    },

    // 主题外观
    appearance: {
      maxWidth: '1440px',
      accentColor: '#3eaf7c'
    },

    // 移动端配置
    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
})
