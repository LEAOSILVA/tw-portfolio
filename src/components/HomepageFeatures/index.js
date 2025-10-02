import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Importando SVGs como React Components
import PersonalInfoIcon from '@site/static/img/personal-info.svg';
import FileSearchIcon from '@site/static/img/file-search.svg';
import BlogIcon from '@site/static/img/blog.svg';

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={{ padding: '2rem' }}>
        <div className="row" style={{ justifyContent: 'center', gap: '2rem' }}>
          
          {/* Card 1: About Me */}
          <div className={clsx('col col--5')}>
            <div className={clsx(styles.card)}>
              <Link to="/docs/about-me/who-am-i" className={styles.cardLink}>
                <h3>About Me</h3>
                <div className="text--center">
                  <PersonalInfoIcon className={styles.featureSvg} role="img" />
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2: Docs */}
          <div className={clsx('col col--5')}>
            <div className={clsx(styles.card)}>
              <Link to="/docs/docs-example/api" className={styles.cardLink}>
                <h3>Docs</h3>
                <div className="text--center">
                  <FileSearchIcon className={styles.featureSvg} role="img" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;


