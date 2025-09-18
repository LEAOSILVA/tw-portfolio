import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const AboutMeLinks = [
  { title: 'Summary', href: '/docs/about-me/summary' },
  { title: 'Experience and Education', href: '/docs/about-me/experience-education' },
];

const DocsLinks = [
  { title: 'API', href: '/docs/docs-example/api-doc' },
  { title: 'FAQs', href: '/docs/docs-example/faqs' },
  { title: 'Glossary', href: '/docs/docs-example/glossary' },
  { title: 'Release Notes', href: '/docs/docs-example/release-notes' },
  { title: 'Scripts', href: '/docs/docs-example/scripts' },
  { title: 'Tutorials', href: '/docs/docs-example/tutorials' },
  { title: 'UX Writing', href: '/docs/docs-example/ux-writing' },
];

function Column({ Svg, title, links }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {links.map((item, idx) => (
            <li key={idx} style={{ margin: '6px 0' }}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Column
            Svg={require('@site/static/img/personal-info.svg').default}
            title="About me"
            links={AboutMeLinks}
          />
          <Column
            Svg={require('@site/static/img/file-search.svg').default}
            title="Docs"
            links={DocsLinks}
          />
        </div>
      </div>
    </section>
  );
}
