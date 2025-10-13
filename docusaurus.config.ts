import type { Config } from '@docusaurus/types';
import classic from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ZKnowledge Portal',
  tagline: 'Macro & AI Trading Knowledge Base',
  favicon: 'img/favicon.ico',
  url: 'https://zwiki.ztrader.ai',
  baseUrl: '/wiki/',
  organizationName: 'ztrader',
  projectName: 'zknowledge',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  staticDirectories: ['static'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/', // 使 /wiki/docs/* 可直接作为 /wiki/* 访问
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'ZKnowledge Portal',
      logo: {
        alt: 'Ztrader Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs', // ✅ 改成 docs，不再用 default
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://ztrader.ai',
          label: 'Ztrader.ai',
          position: 'right',
        },
        {
          href: 'https://blog.ztrader.ai',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://www.youtube.com/@ravenrockfintech',
          label: 'YouTube',
          position: 'right',
        },
        {
          href: 'https://github.com/ravenrockfintechca/zknowledge',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© Ztrader ${new Date().getFullYear()} · Language · Liquidity · Intelligence`,
    },
  },
};

export default config;
