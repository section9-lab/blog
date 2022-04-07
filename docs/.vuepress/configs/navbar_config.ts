import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '技术专栏',
    link: '/guide/',
  },
  {
    text: 'oscp 101',
    children: [
      {
        text: '学习笔记',
        children: [
          '/guide/oscp/0x001.md',
          '/guide/oscp/config.md',
          '/guide/oscp/frontmatter.md',
          '/guide/oscp/components.md',
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