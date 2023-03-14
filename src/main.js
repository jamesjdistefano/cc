// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Header from '~/components/Header.vue'
import GridRow from '~/components/GridRow.vue'
import GridItem from '~/components/GridItem.vue'

import '~/assets/css/styles.scss'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Header', Header)
  Vue.component('GridRow', GridRow)
  Vue.component('GridItem', GridItem)
}
