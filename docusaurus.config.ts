import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'ZKnowledge Portal',
  url: 'https://zwiki.ztrader.ai',
  baseUrl: '/wiki/',
  favicon: 'img/favicon.ico',
  organizationName: 'ravenrockfintechca',
  projectName: 'zknowledge',

  i18n: { defaultLocale: 'zh-Hans', locales: ['zh-Hans'] },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',        // /wiki/ 下直接是文档
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: { customCss: [] }
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'ZKnowledge Portal',
      items: [
        {href:'https://ztrader.ai', label:'Ztrader.ai', position:'right'},
        {href:'https://blog.ztrader.ai', label:'Blog', position:'right'},
        {href:'https://www.youtube.com/@yourchannel', label:'YouTube', position:'right'},
        {href:'https://github.com/ravenrockfintechca/zknowledge', label:'GitHub', position:'right'}
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};
export default config;
