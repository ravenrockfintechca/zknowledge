import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="ZKnowledge Portal"
      description="The Oracle of Intelligence · Liquidity · Language"
    >
      {/* 用于只在首页作用 CSS */}
      <Head>
        <meta name="page" content="home" />
      </Head>

      <header className="zk-hero zk-hero--gold">
        {/* 叠加层：金色泛光 + 暗角 */}
        <div className="zk-hero__overlay" />
        {/* 轻微动态光扫 */}
        <div className="zk-hero__sheen" aria-hidden="true" />

        <div className="container zk-hero__inner">
          <h1 className="zk-hero__title">BOOK OF MARKET</h1>
          <p className="zk-hero__subtitle">
             THE MACRO TRADING CODEX · Liquidity · Language 
          </p>
        </div>
      </header>

      <main />
    </Layout>
  );
}
