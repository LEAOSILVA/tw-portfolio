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
        // 🔹 removido o campo de busca
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
  },
};

export default config;






