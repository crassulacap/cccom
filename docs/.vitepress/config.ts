import { defineConfig } from 'vitepress'

//import { VueTradingView } from 'vue-trading-view/src/vue-trading-view'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CrassulaCapital",
  description: "Asset management services",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      //{ text: 'Our Approach', link: '/approach' },
      //{ text: 'How to Invest', link: '/invest' },
      //{
      //  text: 'Resources',
      //  items: [
      //    { text: 'Item A', link: '/item-1' },
      //    { text: 'Item B', link: '/item-2' },
      //    { text: 'Item C', link: '/item-3' }
      //  ]
      //}
    ],

    logo: '/seedling-solid-b.svg',

    sidebar: [
      {
        text: 'Content',
        items: [
          //{ text: 'Background Examples', link: '/background' },
          //{ text: 'Chart', link: '/chart' },
          //{ text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cccom' },
      //{ icon: 'twitter', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    footer: {
      message: '',
      copyright: 'Copyright © 2023 Crassula Capital. All Rights Reserved.'
    },
  }
})
