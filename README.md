# メアのポイ活メディア（mea-poikatsu-media）

メアのポイ活メディア「ハブ」の独立サイト版。Astro＋Markdownで構築し、Cloudflare Pages（Free）で公開する。旧サイト（muse.ai）は移行完了＋ユーザー最終承認があるまで削除しない。

## 公開URL（暫定）

- https://mea-poikatsu-media.pages.dev （Cloudflare Pagesのプロジェクト作成時にサブドメインが確定したら `astro.config.mjs`・`public/robots.txt`・`public/sitemap.xml` のURLを書き換えること）

## 内容

- トップページ：ヒーロー、ホームページ（ポイ活ブログ・ランキング・コード検索）、ブログ（マガジン・かんたん案内・ゲームブログ）、掲示板、note、X、注目案件カード12枚、AdMax 3箇所
- サービスカード：12サービス分のカード用データ（`src/content/articles/`）。ハブに個別記事ページはない（カードのタイトルはトップページ内のカードへのアンカー）。
- サイト内検索：`/search/`（ビルド時に `/search-index.json` を生成し、ブラウザ内で絞り込み）
- 法務ページ：広告・紹介報酬に関する表記／プライバシーポリシー（簡易）／免責事項（旧サイトの文言をそのまま移行）
- SEO：ページごとの固有title・meta description・canonical・XMLサイトマップ・robots.txt・OGP・JSON-LD（WebPage／ItemList／BreadcrumbList）・パンくず・内部リンク・モバイル対応。JavaScriptなしでも主要な本文はHTMLに含まれる。

## 紹介コード・URLの扱い

- コード・紹介URL・特典額・条件は `src/content/articles/*.md` のfrontmatterと本文に記載。変更するときは `~/workspace/*-referral-post.txt` と台帳 `~/workspace/site-migration-inventory.md` §4.1 で照合すること。
- **注意：ワラウの紹介URLは `https://www.warau.jp/friend/reg/bEs5`、コードは `bEs7`。公式バナーHTMLの `/boav` は別物で使わないこと。**
- ワラウのレートは公式確認で **1pt＝1円**（ワラウコインは別物で10コイン＝1pt）。

## 広告

- 忍者AdMaxの同期タグ2枠（SP ID 1239768・PC ID 1239769）を `src/components/AdSlot.astro` で3箇所（トップページ）に配置。同一タグの複数箇所流用は公式未確認のため、PCで表示されない場合は箇所ごとに枠を作り直すこと。

## GA4（未設定）

- 測定IDは `src/data/site.ts` の `gaMeasurementId` に入れる。空のままならGA4スクリプトは出力されない。GA4プロパティの作成はユーザーのGoogleアカウントでの操作が必要。

## 開発・ビルド

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # 静的HTMLを dist/ に出力
npm run preview  # ビルド結果の確認
```

## デプロイ（Cloudflare Pages）

1. Cloudflareアカウントを作成する（ユーザー側作業。2026-11-20時点ではTurnstileのため未作成）。
2. Cloudflare Pagesでプロジェクト作成 → このGitHubリポジトリを接続。
3. ビルド設定：フレームワークプリセット `Astro`、ビルドコマンド `npm run build`、出力ディレクトリ `dist`。
4. デプロイ後、Search Consoleでサイトマップ（`/sitemap.xml`）を送信し、所有権確認（HTMLファイル／メタタグ方式）を行う。

## 画像について

- `public/images/` の5ファイル（ヒーロー、Muse紹介画像、公式細型バナー3枚）は旧サイトで表示されていたものと同一（旧サイトのexportから抽出・SHA256照合はポイ活ブログ側で実施済みの同一ファイル）。
- **注意：このリポジトリへの画像（バイナリ）アップロードは、MuseのGitHub連携（push_files）ではUTF-8テキストのみ対応のため行えない。** 画像はGitHub Web UIのドラッグ＆ドロップで `public/images/` にアップロードするか、gitコマンドで直接プッシュすること。アップロードが済むまで、デプロイ先では画像が表示されない。

## 旧サイトとの対応

- 旧URL：https://muse.ai/s/musezong-he-medeia-pr6xcxtfrplwxt/NPnupwzcqqtYUBN_-w0KoHvF5cDIBSAOBo4Nt8ve-5o（v16・公開中）
- 旧サイトの301リダイレクトはmuse.ai共有URLでは不可のため、移行完了後は旧ページに移転案内と新URLへのリンクを掲示する。
- 姉妹ブログへのリンクは旧muse.ai URLのまま移行した。姉妹サイトの移行が完了したら新pages.dev URLに更新すること。
- 掲示板へのリンクは暫定で https://mea-keijiban.pages.dev としている。掲示板は別トラック（Workers＋D1新規構築、ユーザー判断12項目待ち）で、公開後にリンク先が確定する。
