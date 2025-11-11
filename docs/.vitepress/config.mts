import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
  	config: (md) => {
  		md.use(footnote)
  	}
  },
  lang: 'fr-CA',
  base: '/Boite-a-outils/',
  title: "Boite à outils",
  description: "Des ressources et leçons pour le français au niveau secondaire en Ontario",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '🧰 Boîte à outils',
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Ressources', link: '/ressources' }
    ],

    sidebar: [
      {
        text: 'La boîte à outils',
        items: [
          { text: 'Outils', link: '/ressources' },
          { text: 'Bibliographie', link: '/bibliographie' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/samyarvahid/' }
    ]
  }
})
