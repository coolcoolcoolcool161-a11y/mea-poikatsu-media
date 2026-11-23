// サイト共通の設定。GA4測定IDはユーザーから提供され次第ここに入れる。
// 空のままならGA4スクリプトは出力されない。
export const SITE = {
  name: 'メアのポイ活メディア',
  operator: 'メア',
  siteUrl: 'https://mea-poikatsu.github.io/mea-poikatsu-media',
  description:
    'メアが集めた紹介コード・招待コードとポイ活情報をぎゅっとまとめた総合案内。Freecash・ワラウ・TikTok・TikTok Lite・モッピー・ハピタス・Muse・サンポ・ぶたまる・ミラポイ・トクエル・dipsファームの12サービス。ブログ・掲示板・note・Xへの入口はこちら。',
  dateModified: '2026-11-23',
  gaMeasurementId: 'G-8BB8V3DRW8',
  xAccount: 'https://x.com/pppppuririn',
  noteUrl: 'https://note.com/k_n702',
  boardUrl: 'https://mea-poikatsu.github.io/mea-keijiban/',
  blogUrl: 'https://mea-poikatsu.github.io/mea-poikatsu-blog/',
} as const;

// Astro 5ではcontent collectionのentry.idに拡張子（.md）が付くため、URL用スラッグに変換する
export const slugOf = (id: string) => id.replace(/\.md$/, '');

// ハブのカード表示順＝おすすめ順位（2026-11-23 全運営一新バッチ2で統一）
// ①Freecash ②ワラウ ③TikTok系統（本家→Lite） ④モッピー ⑤ハピタス ⑥その他
export const HUB_ORDER = [
  'freecash',
  'warau',
  'tiktok',
  'tiktok-lite',
  'moppy',
  'hapitas',
  'muse',
  'sampo',
  'butamaru',
  'mirapoi',
  'tokueru',
  'dips',
] as const;

export const CATEGORIES = [
  { slug: 'point-sites', name: 'ポイントサイト' },
  { slug: 'sns-video', name: 'SNS・動画' },
  { slug: 'payment-bank', name: '決済・銀行・通信' },
  { slug: 'others', name: 'その他' },
  { slug: 'new-apps', name: '新着ポイ活アプリ' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_NAMES: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c.name]),
);

// 姉妹ブログ（旧muse.ai URL。2026-11-21にGitHub Pagesの新URLへ更新済み）
export const MEDIA_HOME = [
  {
    name: 'ポイ活ブログ（メイン）',
    note: '気になるサービスを探して比べてみてね♪',
    url: 'https://mea-poikatsu.github.io/mea-poikatsu-blog/',
  },
  {
    name: 'おすすめ紹介コード',
    note: 'おすすめ順に並べた紹介コード案内。',
    url: 'https://mea-poikatsu.github.io/mea-ranking/',
  },
  {
    name: 'ポイ活コード検索',
    note: '検索と絞り込みに特化。サービス名やカテゴリから紹介コードを素早く探せます。',
    url: 'https://mea-poikatsu.github.io/mea-code-search/',
  },
] as const;

export const MEDIA_BLOGS = [
  {
    name: 'ポイ活マガジン',
    note: '読み物スタイルでじっくり紹介。特集記事のように読んでから登録したい方に。',
    url: 'https://mea-poikatsu.github.io/mea-poikatsu-magazine/',
  },
  {
    name: 'かんたん紹介コード案内',
    note: 'ポイ活が初めての方にも分かりやすく、やさしく案内する初心者向けブログです。',
    url: 'https://mea-poikatsu.github.io/mea-kantan-guide/',
  },
  {
    name: 'ゲームポイ活ブログ',
    note: 'ゲームを遊んで稼ぐ案件が中心。Freecashなどゲーム系ポイ活を深掘りしています。',
    url: 'https://mea-poikatsu.github.io/mea-game-poikatsu/',
  },
  {
    name: '紹介コードまとめブログ',
    note: '全サービスの紹介コードを一覧でまとめたブログ。まとめて確認したい方に。',
    url: 'https://mea-poikatsu.github.io/mea-code-matome/',
  },
] as const;
