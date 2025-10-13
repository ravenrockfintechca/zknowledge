import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="ZKnowledge Portal"
      description="BOOK OF MARKET — The Macro Trading Codex · Liquidity · Language"
    >
      <main className="zk-hero">
        {/* 光扫容器 */}
        <div className="zk-hero__shine" />

        {/* 文案层 */}
        <div className="zk-hero__content">
          <h1 className="zk-hero__title">Macro X Options X Quant X AI</h1>
          <p className="zk-hero__subtitle">
            THE CODEX · Liquidity · Language
          </p>

          <div className="zk-hero__cta">
            <Link
              className="zk-btn zk-btn--ghost"
              to="https://zwiki.ztrader.ai/wiki/intro/"
            >
              ENTER
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
