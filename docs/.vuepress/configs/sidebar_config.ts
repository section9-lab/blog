import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '杂文专栏',
      children: [
        '/guide/BashGuide',
        '/guide/GitGuide',
        '/guide/REST-API',
        '/guide/Java8-Feat',
        '/guide/ClearCode',
        '/guide/ElegantProject',
      ],
    },
  ],
  '/guide/oscp/': [
    {
      text: 'linux',
      collapsible: true,
      children: [
        '/guide/oscp/0x001.md',
        '/guide/oscp/0x002.md',
      ],
    },
    {
      text: 'windows',
      collapsible: true,
      children: [
        '/guide/oscp/0x006.md',
        '/guide/oscp/0x007.md',
      ],
    }
  ],
}
