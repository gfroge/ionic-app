import View from './view.vue'
import { ViewsList, ViewsProduct, ViewsCreate } from './views'

export default [
  {
    path: '/products',
    name: 'Products',
    component: View,
    children: [
      {
        path: '/products/list',
        name: 'ViewsList',
        component: ViewsList,
      },
      {
        path: '/products/:productId',
        name: 'ViewsProduct',
        component: ViewsProduct,
      },
    ]
  },
]