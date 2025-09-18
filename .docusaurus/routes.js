import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/professional-portfolio/blog',
    component: ComponentCreator('/professional-portfolio/blog', 'bf7'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/archive',
    component: ComponentCreator('/professional-portfolio/blog/archive', 'ee9'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/authors',
    component: ComponentCreator('/professional-portfolio/blog/authors', '84f'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/professional-portfolio/blog/authors/all-sebastien-lorber-articles', '1fa'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/authors/yangshun',
    component: ComponentCreator('/professional-portfolio/blog/authors/yangshun', '2da'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/first-blog-post',
    component: ComponentCreator('/professional-portfolio/blog/first-blog-post', 'ffa'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/long-blog-post',
    component: ComponentCreator('/professional-portfolio/blog/long-blog-post', 'eef'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/mdx-blog-post',
    component: ComponentCreator('/professional-portfolio/blog/mdx-blog-post', '102'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/tags',
    component: ComponentCreator('/professional-portfolio/blog/tags', '392'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/tags/docusaurus',
    component: ComponentCreator('/professional-portfolio/blog/tags/docusaurus', 'd69'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/tags/facebook',
    component: ComponentCreator('/professional-portfolio/blog/tags/facebook', 'b96'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/tags/hello',
    component: ComponentCreator('/professional-portfolio/blog/tags/hello', 'ac5'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/tags/hola',
    component: ComponentCreator('/professional-portfolio/blog/tags/hola', '45d'),
    exact: true
  },
  {
    path: '/professional-portfolio/blog/welcome',
    component: ComponentCreator('/professional-portfolio/blog/welcome', '668'),
    exact: true
  },
  {
    path: '/professional-portfolio/markdown-page',
    component: ComponentCreator('/professional-portfolio/markdown-page', '348'),
    exact: true
  },
  {
    path: '/professional-portfolio/docs',
    component: ComponentCreator('/professional-portfolio/docs', '5d6'),
    routes: [
      {
        path: '/professional-portfolio/docs',
        component: ComponentCreator('/professional-portfolio/docs', '5c2'),
        routes: [
          {
            path: '/professional-portfolio/docs',
            component: ComponentCreator('/professional-portfolio/docs', '23d'),
            routes: [
              {
                path: '/professional-portfolio/docs/about-me/contact-information',
                component: ComponentCreator('/professional-portfolio/docs/about-me/contact-information', '2c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/about-me/experience-education',
                component: ComponentCreator('/professional-portfolio/docs/about-me/experience-education', '05a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/about-me/summary',
                component: ComponentCreator('/professional-portfolio/docs/about-me/summary', '639'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/category/about-me',
                component: ComponentCreator('/professional-portfolio/docs/category/about-me', '44e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/category/docs',
                component: ComponentCreator('/professional-portfolio/docs/category/docs', '18f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/docs-example/api-doc',
                component: ComponentCreator('/professional-portfolio/docs/docs-example/api-doc', 'e2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/docs-example/faqs',
                component: ComponentCreator('/professional-portfolio/docs/docs-example/faqs', '0b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/docs-example/glossary',
                component: ComponentCreator('/professional-portfolio/docs/docs-example/glossary', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/docs-example/release-notes',
                component: ComponentCreator('/professional-portfolio/docs/docs-example/release-notes', '348'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/docs-example/scripts',
                component: ComponentCreator('/professional-portfolio/docs/docs-example/scripts', '2f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/docs-example/tutorials',
                component: ComponentCreator('/professional-portfolio/docs/docs-example/tutorials', 'eef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/professional-portfolio/docs/docs-example/ux-writing',
                component: ComponentCreator('/professional-portfolio/docs/docs-example/ux-writing', 'a49'),
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
    path: '/professional-portfolio/',
    component: ComponentCreator('/professional-portfolio/', '0d4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
