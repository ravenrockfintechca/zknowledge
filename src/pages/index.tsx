import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const bg = useBaseUrl('/img/obsidian-gold.png'); // 基于 baseUrl，避免 /wiki 前缀问题

  return (
    <Layout
      title="ZKnowledge Portal"
      description="BOOK OF MARKET — The Macro Trading Codex · Liquidity · Language"
    >
      <main className={styles.hero}>
        {/* 背景层 */}
        <div className={styles.bg} style={{ backgroundImage: `url(${bg})` }} />

        {/* 光扫层 */}
        <div className={styles.shine} />

        {/* 中央内容 */}
        <div className={styles.content}>
          <h1 className={styles.title}>Macro × Options × Quant × AI</h1>
          <p className={styles.subtitle}>THE CODEX · Liquidity · Language</p>

          <div className={styles.cta}>
            <Link className={styles.btn} to="https://zwiki.ztrader.ai/wiki/intro/">
              ENTER
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
