import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="ZKnowledge Portal"
      description="Obsidian Gold Oracle of Intelligence · Liquidity · Language"
    >
      <main className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1 className={styles.title}>ZKnowledge Portal</h1>
          <p className={styles.subtitle}>
            <span>⚡ The Oracle of Intelligence · Liquidity · Language ⚡</span>
          </p>
          <p className={styles.phrase}>
            “在黑曜金之光下，知识不再被书写——它被召唤。”
          </p>
          <p className={styles.links}>
            <a href="/docs/intro" className={styles.link}>Enter Wiki</a>
            <a href="https://ztrader.ai" className={styles.link}>Main Site</a>
            <a href="https://www.youtube.com/@ravenrockfintech" className={styles.link}>YouTube</a>
          </p>
        </div>
      </main>
    </Layout>
  );
}
