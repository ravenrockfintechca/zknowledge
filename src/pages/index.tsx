import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="ZKnowledge Portal"
      description="BOOK OF MARKET — The Macro Trading Codex · Liquidity · Language"
    >
      <main className="zk-hero">
        {/* 背景图片 */}
        <div className="zk-hero__bg" />

        {/* 光扫层 */}
        <div className="zk-hero__shine" />

        {/* 中央文字区 */}
        <div className="zk-hero__content">
          <h1 className="zk-hero__title">Macro × Options × Quant × AI</h1>
          <p className="zk-hero__subtitle">THE CODEX · Liquidity · Language</p>

          <div className="zk-hero__cta">
            <Link
              className="zk-btn"
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
