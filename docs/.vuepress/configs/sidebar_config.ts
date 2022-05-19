import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '杂文专栏',
      children: [
        '/guide/BashQuickStart.md',
        '/guide/Workflow-Git.md',
        '/guide/Workflow-Actions.md',
        '/guide/Java8-Stream.md',
        '/guide/Java8-Lambda.md',
        '/guide/Java8-Optional.md',
        '/guide/Java8-Time.md',
        '/guide/ClearCode-Util.md',
        '/guide/ClearCode-Validation.md',
        '/guide/ClearCode-Lombok.md',
        '/guide/ClearCode-MapStruct.md',
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
  '/zh/reference/': [
    {
      text: 'VuePress 参考',
      collapsible: true,
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
      text: '打包工具参考',
      collapsible: true,
      children: [
        '/zh/reference/bundler/vite.md',
        '/zh/reference/bundler/webpack.md',
      ],
    },
    {
      text: '默认主题参考',
      collapsible: true,
      children: [
        '/zh/reference/default-theme/config.md',
        '/zh/reference/default-theme/frontmatter.md',
        '/zh/reference/default-theme/components.md',
        '/zh/reference/default-theme/markdown.md',
        '/zh/reference/default-theme/styles.md',
        '/zh/reference/default-theme/extending.md',
      ],
    }
  ],
}