import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="ZKnowledge Portal"
      description="Codex · Market Liquidity · Language"
    >
      <main className="zk-hero">
        {/* 光扫容器 */}
        <div className="zk-hero__shine" />

        {/* 文案层 */}
        <div className="zk-hero__content">
          <h1 className="zk-hero__title">BOOK OF MARKET</h1>
          <p className="zk-hero__subtitle">
            THE MACRO TRADING CODEX · Liquidity · Language
          </p>

          <div className="zk-hero__cta">
            <Link
              className="zk-btn zk-btn--ghost"
              to="https://zwiki.ztrader.ai/wiki"
            >
              ENTER
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
