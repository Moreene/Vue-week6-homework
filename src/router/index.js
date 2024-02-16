import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrontPageView from '../views/frontend/FrontPageView.vue';
import ProductsView from '../views/frontend/ProductsView.vue';
import CartView from '../views/frontend/CartView.vue';
import AdminLoginView from '../views/backend/AdminLoginView.vue';
import AdminView from '../views/backend/AdminView.vue';
import BackendPageView from '../views/backend/BackendPageView.vue';
import BackendProductsView from '../views/backend/BackendProductsView.vue';
import BackendOrdersView from '../views/backend/BackendOrdersView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          component: FrontPageView,
        },
        {
          path: 'products',
          component: ProductsView,
        },
        {
          path: 'cart',
          component: CartView,
        },
      ]
    },
    {
      path: '/adminLogin',
      component: AdminLoginView,
    },
    {
      path: '/admin',
      component:AdminView,
      children:[
        {
          path: '',
          component: BackendPageView,
        },
        {
          path: 'products',
          component: BackendProductsView,
        },
        {
          path: 'orders',
          component: BackendOrdersView,
        },
      ]
    }
  ]
})

export default router
