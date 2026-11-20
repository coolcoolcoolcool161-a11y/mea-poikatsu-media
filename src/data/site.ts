// サイト共通の設定。GA4測定IDはユーザーから提供され次第ここに入れる。
// 空のままならGA4スクリプトは出力されない。
export const SITE = {
  name: 'メアのポイ活メディア',
  operator: 'メア',
  siteUrl: 'https://mea-poikatsu-media.pages.dev',
  description:
    'メアが集めた紹介コード・招待コードとポイ活情報をぎゅっとまとめた総合案内。Freecash・TikTok・ワラウ・モッピー・Muse・サンポ・ぶたまる・ミラポイ・トクエル・dipsファーム・ハピタスの12サービス。ブログ・掲示板・note・Xへの入口はこちら。',
  dateModified: '2026-11-20',
  gaMeasurementId: '',
  xAccount: 'https://x.com/pppppuririn',
  noteUrl: 'https://note.com/k_n702',
  boardUrl: 'https://mea-keijiban.pages.dev',
  blogUrl: 'https://mea-poikatsu-blog.pages.dev',
} as const;

// Astro 5ではcontent collectionのentry.idに拡張子（.md）が付くため、URL用スラッグに変換する
export const slugOf = (id: string) => id.replace(/\.md$/, '');

// ハブのカード表示順（旧サイトと同じ順序）
export const HUB_ORDER = [
  'freecash',
  'tiktok',
  'tiktok-lite',
  'warau',
  'moppy',
  'muse',
  'sampo',
  'butamaru',
  'mirapoi',
  'tokueru',
  'dips',
  'hapitas',
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

// 姉妹ブログ（旧muse.ai URL。姉妹サイトの移行が完了したら新pages.dev URLに更新する）
export const MEDIA_HOME = [
  {
    name: 'ポイ活ブログ（メイン）',
    note: '気になるサービスを探して比べてみてね♪',
    url: 'https://muse.ai/s/poihuo-burogu-xlxi6xcxsxg4ghx07/74yi0ejxEmcRwO9Gsp15bpRovm76_UruhoA3biG-N2o',
  },
  {
    name: '紹介コードランキング',
    note: '特典額の大きい順に並べたランキング形式。',
    url: 'https://muse.ai/s/shao-jie-kodorankingu-jxj6xcxsxfxqxj6xqx0/OqiA00u9xkaSI9_7bBwCrskhhMRQu3SkOvHqtDonW84',
  },
  {
    name: 'ポイ活コード検索',
    note: '検索と絞り込みに特化。サービス名やカテゴリから紹介コードを素早く探せます。',
    url: 'https://muse.ai/s/poihuo-kodojian-suo-hb6xcxsxg20qsxl/6jl8s6igC6cBHibzVwCEADiLunryhUT0jRZr_pVQrQE',
  },
] as const;

export const MEDIA_BLOGS = [
  {
    name: 'ポイ活マガジン',
    note: '読み物スタイルでじっくり紹介。特集記事のように読んでから登録したい方に。',
    url: 'https://muse.ai/s/poihuo-magazin-ob6xcxsxgwsxa0y/2A2y1OC2F5lmACOSYdjgyPIv_dFmUkHnjAtMs7Xkfcc',
  },
  {
    name: 'かんたん紹介コード案内',
    note: 'ポイ活が初めての方にも分かりやすく、やさしく案内する初心者向けブログです。',
    url: 'https://muse.ai/s/kantanshao-jie-kodoan-nei-sb6xcxsxgtxkxkbk/iHPHnEFAX37Hrni_FagP81wlqfSoecaEv0cODGcaaS8',
  },
  {
    name: 'ゲームポイ活ブログ',
    note: 'ゲームを遊んで稼ぐ案件が中心。Freecashなどゲーム系ポイ活を深掘りしています。',
    url: 'https://muse.ai/s/gemupoihuo-burogu-gxi6xcxsxgpf18xc/dc3zg6z-_dnAhCoD7Nkbu9w9wGj0ytBYpNWuVBeOS-I',
  },
] as const;
