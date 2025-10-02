// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Natalia Leão',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://LEAOSILVA.github.io',
  baseUrl: '/tw-portfolio/',

  // GitHub pages deployment config.
  organizationName: 'LEAOSILVA', // Usually your GitHub org/user name.
  projectName: 'tw-portfolio', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/banner2-tw.png',
      navbar: {
        title: 'My portfolio',
        logo: {
          alt: 'My portfolio logo',
          src: 'img/logo-tw.png',
          // Se quiser versão dark:
          // srcDark: 'img/banner-tw-dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'aboutMeSidebar', // conecta ao sidebar about-me
            position: 'left',
            label: 'About Me',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar', // conecta ao sidebar docs-example
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'search', // 🔍 botão de busca no header
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            items: [
              {
                html: `
                  <div style="display: flex; justify-content: flex-end; align-items: center; gap: 12px;">
                    <a href="https://www.linkedin.com/in/natalia-le%C3%A3o-494ba223/" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" 
                           width="24" height="24" 
                           viewBox="0 0 24 24" 
                           fill="black">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.6v1.71h.05c.5-.95 1.72-1.96 3.55-1.96 3.8 0 4.5 2.5 4.5 5.75V20h-4v-5.25c0-1.25-.02-2.85-1.74-2.85-1.74 0-2 1.35-2 2.75V20h-4V8z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/LEAOSILVA/tw-portfolio" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                           alt="GitHub" 
                           width="24" 
                           height="24" />
                    </a>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Natalia Leão. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      // 👇 Configuração Algolia
      algolia: {
        appId: 'QIC0MAEMBM',
        apiKey: '3653422e2a8f855b81fb68c6561cee85', // Search-Only API Key
        indexName: 'natalia-tw-portfolio',
      },
    }),
};

export default config;



