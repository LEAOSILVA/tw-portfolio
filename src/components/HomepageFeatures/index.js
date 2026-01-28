import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const features = [
  {
    title: 'API Documentation',
    link: '/docs/api',
  },
  {
    title: 'FAQs',
    link: '/docs/faqs',
  },
  {
    title: 'Feature Specifications',
    link: '/docs/feature-spec',
  },
  {
    title: 'Glossary',
    link: '/docs/glossary',
  },
  {
    title: 'Release Notes',
    link: '/docs/release-notes',
  },
  {
    title: 'Scripts',
    link: '/docs/scripts',
  },
  {
    title: 'Tutorials',
    link: '/docs/tutorials',
  },
  {
    title: 'Use Cases',
    link: '/docs/use-case',
  },
  {
    title: 'UX Writing',
    link: '/docs/ux-writing',
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



