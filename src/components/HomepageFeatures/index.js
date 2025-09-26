import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

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
  { title: 'Use case', href: '/docs/docs-example/use-case' },
  { title: 'UX Writing', href: '/docs/docs-example/ux-writing' },
];

function HomepageFeatures() {
  return (
    <section className={styles.features}>

      {/* About Me Section */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <PersonalInfoIcon className={styles.featureSvg} role="img" style={{ width: '180px', height: '180px' }} />
        <Heading as="h2" style={{ marginTop: '1rem' }}>About Me</Heading>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {AboutMeLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              style={{
                display: 'block',
                padding: '1.5rem',
                width: '220px',
                backgroundColor: '#f7f7f7',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#000',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <Heading as="h4">{item.title}</Heading>
            </Link>
          ))}
        </div>
      </div>

      {/* Docs Section */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <FileSearchIcon className={styles.featureSvg} role="img" style={{ width: '180px', height: '180px' }} />
        <Heading as="h2" style={{ marginTop: '1rem' }}>Docs</Heading>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
            justifyItems: 'center',
          }}
        >
          {DocsLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              style={{
                display: 'block',
                padding: '1.2rem',
                width: '180px',
                backgroundColor: '#f7f7f7',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#000',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <Heading as="h5">{item.title}</Heading>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
