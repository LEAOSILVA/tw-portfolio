// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Natalia Leão',
  url: 'https://LEAOSILVA.github.io',
  baseUrl: '/tw-portfolio/',
  organizationName: 'LEAOSILVA',
  projectName: 'tw-portfolio',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  future: {
    v4: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My portfolio',
      logo: {
        alt: 'My portfolio logo',
        src: 'img/logo-tw.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutMeSidebar',
          position: 'left',
          label: 'About Me',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Natalia Leão. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    // ✅ Configuração Algolia movida para o lugar certo
    algolia: {
      appId: 'QIC0MAEMBM',
      apiKey: '3653422e2a8f855b81fb68c6561cee85', // Search-only API Key
      indexName: 'new-attempt-portfolio',
    },
  },
};

export default config;





