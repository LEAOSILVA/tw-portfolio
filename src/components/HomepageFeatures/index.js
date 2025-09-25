import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Importando SVGs como React Components
import PersonalInfoIcon from '@site/static/img/personal-info.svg';
import FileSearchIcon from '@site/static/img/file-search.svg';

const AboutMeLinks = [
  { title: 'Summary', href: '/docs/about-me/summary' },
  { title: 'Experience and Education', href: '/docs/about-me/experience-education' },
];

const DocsLinks = [
  { title: 'API', href: '/docs/docs-example/api' },
  { title: 'FAQs', href: '/docs/docs-example/faqs' },
  { title: 'Feature Spec', href: '/docs/docs-example/feature-spec' },
  { title: 'Glossary', href: '/docs/docs-example/glossary' },
  { title: 'Release Notes', href: '/docs/docs-example/release-notes' },
  { title: 'Script', href: '/docs/docs-example/scripts' },
  { title: 'Tutorial', href: '/docs/docs-example/tutorials' },
  { title: 'UX Writing', href: '/docs/docs-example/ux-writing' },
];

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          {/* Coluna 1: imagem personal-info */}
          <div className={clsx('col col--3', 'text--center')}>
            <PersonalInfoIcon className={styles.featureSvg} role="img" />
          </div>

          {/* Coluna 2: About me e links */}
          <div className={clsx('col col--3')}>
            <Heading as="h3">About me</Heading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {AboutMeLinks.map((item, idx) => (
                <li key={idx} style={{ margin: '6px 0' }}>
                  <Link to={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: imagem file-search */}
          <div className={clsx('col col--3', 'text--center')}>
            <FileSearchIcon className={styles.featureSvg} role="img" />
          </div>

          {/* Coluna 4: links para páginas */}
          <div className={clsx('col col--3')}>
            <Heading as="h3">Docs</Heading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {DocsLinks.map((item, idx) => (
                <li key={idx} style={{ margin: '6px 0' }}>
                  <Link to={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
