import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '关于博客',
    link: '/',
  },
  {
    text: 'oscp 101',
    children: [
      {
        text: 'VuePress',
        children: [
          '/zh/reference/cli.md',
          '/zh/reference/config.md',
          '/zh/reference/frontmatter.md',
          '/zh/reference/components.md',
          '/zh/reference/plugin-api.md',
          '/zh/reference/theme-api.md',
          '/zh/reference/client-api.md',
          '/zh/reference/node-api.md',
        ],
      },
      {
        text: '打包工具',
        children: [
          '/zh/reference/bundler/vite.md',
          '/zh/reference/bundler/webpack.md',
        ],
      },
      {
        text: '默认主题',
        children: [
          '/zh/reference/default-theme/config.md',
          '/zh/reference/default-theme/frontmatter.md',
          '/zh/reference/default-theme/components.md',
          '/zh/reference/default-theme/markdown.md',
          '/zh/reference/default-theme/styles.md',
          '/zh/reference/default-theme/extending.md',
        ],
      },
    ],
  },
  {
    text: 'k8s',
    children: [
      {
        text: '常用功能',
        children: [
          '/zh/reference/plugin/back-to-top.md',
          '/zh/reference/plugin/container.md',
          '/zh/reference/plugin/external-link-icon.md',
          '/zh/reference/plugin/google-analytics.md',
          '/zh/reference/plugin/medium-zoom.md',
          '/zh/reference/plugin/nprogress.md',
          '/zh/reference/plugin/register-components.md',
        ],
      },
      {
        text: '内容搜索',
        children: [
          '/zh/reference/plugin/docsearch.md',
          '/zh/reference/plugin/search.md',
        ],
      },
      {
        text: 'PWA',
        children: [
          '/zh/reference/plugin/pwa.md',
          '/zh/reference/plugin/pwa-popup.md',
        ],
      },
      {
        text: '语法高亮',
        children: [
          '/zh/reference/plugin/prismjs.md',
          '/zh/reference/plugin/shiki.md',
        ],
      },
    ],
  },
]