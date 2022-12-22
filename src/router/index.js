import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import ProductList from '@/components/ProductList'
import Product from '@/components/Product'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/productlist',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/:product_id',
      name: 'Product',
      component: Product
    }
  ]
})
