// docusaurus.config.ts
import type { Config } from '@docusaurus/types';
import type { ThemeConfig } from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ZKnowledge Portal',
  url: 'https://zwiki.ztrader.ai',
  baseUrl: '/wiki/',               // 你 Nginx 用的是 /wiki/ 前缀
  favicon: 'img/favicon.ico',
  organizationName: 'ztrader',     // 任意
  projectName: 'zknowledge',       // 任意
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  // 静态资源目录（可选）
  staticDirectories: ['static'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs', // 页面将位于 /wiki/docs/*
          editUrl: undefined,
        },
        blog: false,
        theme: {
          // ❗不能是 []，必须是字符串或字符串数组，并且文件要存在
          customCss: ['./src/css/custom.css'],
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'ZKnowledge Portal',
      logo: { alt: 'Z', src: 'img/logo.png' },
      items: [
        { type: 'docSidebar', sidebarId: 'default', position: 'left', label: 'Docs' },
        { href: 'https://ztrader.ai', label: 'Ztrader.ai', position: 'right' },
        { href: 'https://blog.ztrader.ai', label: 'Blog', position: 'right' },
        { href: 'https://www.youtube.com/@ravenrockfintech', label: 'YouTube', position: 'right' },
        { href: 'https://github.com/ravenrockfintechca/zknowledge', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© Ztrader ${new Date().getFullYear()} · Language · Liquidity · Intelligence`,
    },
  } satisfies ThemeConfig,
};

export default config;
