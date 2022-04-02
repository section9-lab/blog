module.exports = {
    base: "/blog/",
    // 站点配置
    lang: 'zh-CN',
    title: 'Tachikoma Blog',
    description: '这是一个 VuePress 站点',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      repo: 'section9-lab/blog',
      logo: 'https://vuejs.org/images/logo.png',
      docsBranch: 'master',
      editLinkPattern: ':repo/-/edit/:branch/:path',
      backToHome: 'Back to home',

      sidebar: 'auto', // 侧边栏配置
    },
  }
