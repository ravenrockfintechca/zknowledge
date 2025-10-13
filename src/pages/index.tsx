import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const heroUrl = useBaseUrl('/img/obsidian-gold.png'); // ← 指向 static/img/obsidian-gold.png

  return (
    <Layout title="ZKnowledge Portal" description="The Oracle of Liquidity • Intelligence • Language">
      <header
        className="hero hero--dark heroBanner"
        style={{
          backgroundImage: `url(${heroUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container heroContent">
          <h1 className="hero__title">ZKNOWLEDGE PORTAL</h1>
          <p className="hero__subtitle">
            ⚡ The Oracle of Intelligence · Liquidity · Language ⚡
          </p>
          <div className="buttons">
            <Link className="button button--primary button--lg" to="/wiki/intro">
              Enter Wiki
            </Link>
            <Link className="button button--secondary button--lg" to="https://ztrader.ai" style={{marginLeft: 12}}>
              Main Site
            </Link>
            <Link className="button button--secondary button--lg" to="https://youtube.com/@ravenrockfintech" style={{marginLeft: 12}}>
              YouTube
            </Link>
          </div>
        </div>
      </header>

      <main className="homeMain">
        {/* 这里可以继续放简介或 Cards */}
      </main>
    </Layout>
  );
}
