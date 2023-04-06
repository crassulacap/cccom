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
      { text: 'Blog', link: 'https://blog.crassulacapital.com'}
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
      { icon: 'github', link: 'https://github.com/crassulacap' },
      { icon: 'twitter', link: 'https://twitter.com/crassulacap' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Matrix</title><path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"/></svg>'
        },
        link: 'https://matrix.to/#/!WpSLvDPdBByHbjqckM:matrix.org'
      }
    ],
    
    footer: {
      message: '<a class="VPLink link VPNavBarMenuLink" href="https://crassulacapital.com/disclaimer">Disclaimer</a><br><a href="https://crassulacapital.com/cta">(特定商取引法に基づく表記)</a>',
      copyright: 'Copyright © 2023 Crassula Capital. All Rights Reserved.'
    },
  }
})
