import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '关于博客',
    link: '/guide/',
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
        ],
      },
      {
        text: '内容搜索',
        children: [
          '/zh/reference/plugin/docsearch.md',
          '/zh/reference/plugin/search.md',
        ],
      },
    ],
  },
]