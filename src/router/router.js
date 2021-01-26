import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/home2',
      name: 'home2',
      component: () => import('@/views/Home2.vue'),
      meta: {
        pageTitle: 'Home2',
        breadcrumb: [
          {
            text: 'Home2',
            active: true,
          },
        ],
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue'),
      meta: {
        pageTitle: 'Contact',
        breadcrumb: [
          {
            text: 'contact',
            active: true,
          },
        ],
      },
    },
    {
      path: '/plan',
      name: 'plan',
      component: () => import('@/views/Plan.vue'),
      meta: {
        pageTitle: 'Plan',
        breadcrumb: [
          {
            text: 'Plan',
            active: true,
          },
        ],
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/Settings.vue'),
      meta: {
        pageTitle: 'Settings',
        breadcrumb: [
          {
            text: 'Settings',
            active: true,
          },
        ],
      },
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('@/views/Support.vue'),
      meta: {
        pageTitle: 'Support',
        breadcrumb: [
          {
            text: 'Support',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/authentificator/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/authentificator/Register.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

export default router
