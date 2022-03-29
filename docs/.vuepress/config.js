module.exports = {
    base: "/blog/",
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'en-US',
          title: 'VuePress',
          description: 'Vue-powered Static Site Generator',
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'VuePress',
          description: 'Vue 驱动的静态网站生成器',
        },
      },
    // 站点配置
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
    },
  }
