# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Web制作案件獲得を目的とした営業用ポートフォリオサイト。ターゲットはWeb制作・EC運営を依頼したい国内クライアント。No build tools, no frameworks, no package manager — pure HTML/CSS/JS served as static files.

**正式な名前表記:** 前田 和也（title・og:title・schema.orgすべて「和也」が正しい）

**対応サービス:** WordPress / Shopify / カラーミーショップ / LP制作 / サイト修正

**実績:** e-gang.co.jp / egang-global-shop.com / MatchPulse / SnowBase / CORE SHIFT / noa LP

## 優先方針

すべての変更はこの優先順位で判断する:

1. **CV向上** — お問い合わせへの導線を最短にする。CTAの視認性・文言・配置を常に意識する
2. **問い合わせ獲得** — フォームや連絡手段の摩擦を減らす。信頼感を高めるコンテンツ（実績・料金・強み）を充実させる
3. **SEO** — タイトル・メタ・見出し構造・Schema.org・サイトマップを適切に維持する
4. **モバイルファースト** — レイアウト・タップターゲット・読み込み速度をモバイル基準で検証する

## Development

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

There are no lint, build, or test commands.

## Architecture

Single-page layout with five anchor-linked sections: `#service`, `#works`, `#strengths`, `#pricing`, `#contact`. All navigation (header and footer) links to these anchors.

**File roles:**
- `index.html` — all markup and inline SVG icons; structured with BEM-style class names
- `css/style.css` — all styles; no preprocessor
- `js/main.js` — three behaviors: header shadow on scroll, hamburger menu (mobile), fade-in via IntersectionObserver, and smooth-scroll offset accounting for the fixed header height
- `sitemap.xml` / `robots.txt` — SEO; the placeholder domain `yourdomain.com` must be replaced before deployment

**CSS conventions:**
- All design tokens live in `:root` custom properties at the top of `style.css` (colors, fonts, spacing, shadows, transition duration)
- Primary accent color: `--color-accent: #2A2A2A`（モノトーン。差し色を使わず黒〜グレーの濃淡で構成）
- Two typefaces: `--font-serif` (Shippori Mincho, used for headings) and `--font-sans` (Noto Sans JP, used for body/UI)
- Responsive breakpoints: `900px` (tablet: 2-col grids) and `640px` (mobile: 1-col, hamburger nav)
- Fade-in animation: add `.fade-in` class to any element; JS adds `.is-visible` via IntersectionObserver

**JS conventions:**
- Vanilla JS, no dependencies
- Hamburger state is tracked via `.is-open` on both `#hamburger` and `#site-nav`; `body.overflow` is locked while mobile nav is open

## AI利用ルール

* 提案だけでなく、可能な限り実装まで行う
* 大きな変更を行う前に理由を説明する
* 既存デザインやブランドイメージを尊重する
* 不要なライブラリや依存関係は追加しない
* 保守性・表示速度・シンプルさを優先する
* SEOへの影響を考慮して変更する
* モバイル表示を必ず考慮する
* コード変更の説明は日本語で行う
* 技術的なかっこよさよりも、ビジネス成果を優先する

## 強み・ポジショニング

このポートフォリオサイトでは以下を強みとして訴求する。

* 実店舗運営経験
* 自社ECサイト運営経験
* Shopify運営経験
* カラーミーショップ運営経験
* WordPress制作経験
* SEO改善経験
* フロントエンド開発経験
* デザインから実装まで対応可能

訪問者に「この人は実際にEC運営やWeb制作を経験しているので安心して依頼できそう」と思ってもらうことを重視する。

改善提案を行う際は、

1. 案件獲得
2. 問い合わせ獲得
3. 信頼性向上
4. 実務経験の訴求
5. WordPress・Shopify実績の訴求

を優先すること。

## Deployment checklist

Before going live, update these placeholder values:
- `<link rel="canonical">` href in `<head>`
- `og:image` (not yet added)
- `sitemap.xml` and `robots.txt` — replace `yourdomain.com` with the real domain
- Schema.org JSON-LD `"url"` field in `<head>`
