import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const features = [
  {
    title: 'API Documentation',
    link: '/docs/docs-example/api',
  },
  {
    title: 'FAQs',
    link: '/docs/docs-example/faqs',
  },
  {
    title: 'Feature Specifications',
    link: '/docs/docs-example/feature-spec',
  },
  {
    title: 'Glossary',
    link: '/docs/docs-example/glossary',
  },
  {
    title: 'Release Notes',
    link: '/docs/docs-example/release-notes',
  },
  {
    title: 'Scripts',
    link: '/docs/docs-example/scripts',
  },
  {
    title: 'Tutorials',
    link: '/docs/docs-example/tutorials',
  },
  {
    title: 'Use Cases',
    link: '/docs/docs-example/use-case',
  },
  {
    title: 'UX Writing',
    link: '/docs/docs-example/ux-writing',
  },
];

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={{ padding: '2rem' }}>
        <div
          className="row"
          style={{
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          {features.map(({ title, link }) => (
            <div key={title} className={clsx('col col--4')}>
              <div className={styles.card}>
                <Link to={link} className={styles.cardLink}>
                  <h3 className={styles.cardTitle}>{title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;



