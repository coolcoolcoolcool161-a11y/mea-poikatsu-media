import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// F-22: lastmod は確かな日付があるページにのみ付ける。
// このサイトではトップページだけが src/data/site.ts の SITE.dateModified（ページ上に最終更新日として表示）を持つため、
// lastmod はトップページのみ。その他のページには付けない（ビルド日の一律設定はしない）。
const TOP_LASTMOD = '2026-11-20';

export default defineConfig({
  site: 'https://coolcoolcoolcool161-a11y.github.io',
  base: '/mea-poikatsu-media',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        if (item.url.endsWith('/mea-poikatsu-media/')) item.lastmod = TOP_LASTMOD;
        return item;
      },
    }),
  ],
});
