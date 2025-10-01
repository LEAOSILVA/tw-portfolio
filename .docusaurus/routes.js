import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tw-portfolio/__docusaurus/debug',
    component: ComponentCreator('/tw-portfolio/__docusaurus/debug', '62e'),
    exact: true
  },
  {
    path: '/tw-portfolio/__docusaurus/debug/config',
    component: ComponentCreator('/tw-portfolio/__docusaurus/debug/config', '017'),
    exact: true
  },
  {
    path: '/tw-portfolio/__docusaurus/debug/content',
    component: ComponentCreator('/tw-portfolio/__docusaurus/debug/content', 'f44'),
    exact: true
  },
  {
    path: '/tw-portfolio/__docusaurus/debug/globalData',
    component: ComponentCreator('/tw-portfolio/__docusaurus/debug/globalData', '3ec'),
    exact: true
  },
  {
    path: '/tw-portfolio/__docusaurus/debug/metadata',
    component: ComponentCreator('/tw-portfolio/__docusaurus/debug/metadata', '0f5'),
    exact: true
  },
  {
    path: '/tw-portfolio/__docusaurus/debug/registry',
    component: ComponentCreator('/tw-portfolio/__docusaurus/debug/registry', 'a05'),
    exact: true
  },
  {
    path: '/tw-portfolio/__docusaurus/debug/routes',
    component: ComponentCreator('/tw-portfolio/__docusaurus/debug/routes', 'b98'),
    exact: true
  },
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
    component: ComponentCreator('/tw-portfolio/docs', '6cb'),
    routes: [
      {
        path: '/tw-portfolio/docs',
        component: ComponentCreator('/tw-portfolio/docs', 'a07'),
        routes: [
          {
            path: '/tw-portfolio/docs',
            component: ComponentCreator('/tw-portfolio/docs', '780'),
            routes: [
              {
                path: '/tw-portfolio/docs/about-me/contact',
                component: ComponentCreator('/tw-portfolio/docs/about-me/contact', '366'),
                exact: true,
                sidebar: "aboutMeSidebar"
              },
              {
                path: '/tw-portfolio/docs/about-me/resume',
                component: ComponentCreator('/tw-portfolio/docs/about-me/resume', '37e'),
                exact: true,
                sidebar: "aboutMeSidebar"
              },
              {
                path: '/tw-portfolio/docs/about-me/who-am-i',
                component: ComponentCreator('/tw-portfolio/docs/about-me/who-am-i', 'ac8'),
                exact: true,
                sidebar: "aboutMeSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/api',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/api', 'eb7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/faqs',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/faqs', '41c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/feature-spec',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/feature-spec', '9b8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/glossary',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/glossary', 'df6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/release-notes',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/release-notes', 'ccb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/scripts',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/scripts', 'b85'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/tutorials',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/tutorials', '3e9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/use-case',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/use-case', 'd76'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tw-portfolio/docs/docs-example/ux-writing',
                component: ComponentCreator('/tw-portfolio/docs/docs-example/ux-writing', '545'),
                exact: true,
                sidebar: "docsSidebar"
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
