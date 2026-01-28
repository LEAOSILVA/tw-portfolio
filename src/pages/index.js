import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import Banner from '@site/static/img/banner-tw3.png'; // caminho para a imagem

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <img
        src={Banner}
        alt="Natalia Leão - Technical Writer | UX Writer"
        style={{ width: '100%', height: 'auto' }}
      />
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Natalia Leão" description="Technical Writer | UX Writer">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

