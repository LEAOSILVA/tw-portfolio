import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tw-portfolio/blog',
    component: ComponentCreator('/tw-portfolio/blog', 'd5c'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/archive',
    component: ComponentCreator('/tw-portfolio/blog/archive', 'e47'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/authors',
    component: ComponentCreator('/tw-portfolio/blog/authors', '3aa'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/tw-portfolio/blog/authors/all-sebastien-lorber-articles', '7ef'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/authors/yangshun',
    component: ComponentCreator('/tw-portfolio/blog/authors/yangshun', 'fd8'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/first-blog-post',
    component: ComponentCreator('/tw-portfolio/blog/first-blog-post', '612'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/long-blog-post',
    component: ComponentCreator('/tw-portfolio/blog/long-blog-post', '0d3'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/mdx-blog-post',
    component: ComponentCreator('/tw-portfolio/blog/mdx-blog-post', 'a59'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/tags',
    component: ComponentCreator('/tw-portfolio/blog/tags', '393'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/tags/docusaurus',
    component: ComponentCreator('/tw-portfolio/blog/tags/docusaurus', '11b'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/tags/facebook',
    component: ComponentCreator('/tw-portfolio/blog/tags/facebook', 'f4e'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/tags/hello',
    component: ComponentCreator('/tw-portfolio/blog/tags/hello', 'f10'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/tags/hola',
    component: ComponentCreator('/tw-portfolio/blog/tags/hola', '721'),
    exact: true
  },
  {
    path: '/tw-portfolio/blog/welcome',
    component: ComponentCreator('/tw-portfolio/blog/welcome', 'ba5'),
    exact: true
  },
  {
    path: '/tw-portfolio/markdown-page',
    component: ComponentCreator('/tw-portfolio/markdown-page', '82f'),
    exact: true
  },
  {
    path: '/tw-portfolio/docs',
    component: ComponentCreator('/tw-portfolio/docs', '903'),
    routes: [
      {
        path: '/tw-portfolio/docs',
        component: ComponentCreator('/tw-portfolio/docs', '7be'),
        routes: [
          {
            path: '/tw-portfolio/docs',
            component: ComponentCreator('/tw-portfolio/docs', '266'),
            routes: [
              {
                path: '/tw-portfolio/docs/about-me/contact-information',
                component: ComponentCreator('/tw-portfolio/docs/about-me/contact-information', '6c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/about-me/experience-education',
                component: ComponentCreator('/tw-portfolio/docs/about-me/experience-education', 'a32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/about-me/summary',
                component: ComponentCreator('/tw-portfolio/docs/about-me/summary', '4c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/category/about-me',
                component: ComponentCreator('/tw-portfolio/docs/category/about-me', '40c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/category/docs',
                component: ComponentCreator('/tw-portfolio/docs/category/docs', 'f84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/api-doc',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/api-doc', 'dfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/faqs',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/faqs', '17e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/glossary',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/glossary', '2f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/release-notes',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/release-notes', 'f74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/scripts',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/scripts', '767'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/tutorials',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/tutorials', '59d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/ux-writing',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/ux-writing', 'ff1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/tw-portfolio/',
    component: ComponentCreator('/tw-portfolio/', '208'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
