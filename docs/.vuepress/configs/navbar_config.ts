import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '杂文专栏',
    link: '/guide/BashQuickStart.md',
  },
  {
    text: 'oscp 101',
    children: [
      {
        text: 'oscp专栏说明',
        link: '/guide/oscp/README.md',
      },
      {
        text: 'linux',
        children: [
          '/guide/oscp/0x001.md',
          '/guide/oscp/0x002.md',
        ],
      },
      {
        text: 'windows',
        children: [
          '/guide/oscp/0x006.md',
          '/guide/oscp/0x007.md',
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
          '/guide/k8s/back-to-top.md',
          '/guide/k8s/container.md',
        ],
      },
      {
        text: '内容搜索',
        children: [
          '/guide/k8s/docsearch.md',
          '/guide/k8s/search.md',
        ],
      },
    ],
  },
]