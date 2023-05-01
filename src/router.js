import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/HomeView.vue')
    },{
        path: '/home',
        redirect: { name: 'Home' }
    },{
      path: '/kursy',
      name: 'Kursy',
      component: () => import('./views/KursyView.vue')
    },{
      path: '/kalkulator',
      name: 'Kalkulator',
      component: () => import('./views/KalkulatorView.vue')
    }
    ,{
      path: '/posts',
      name: 'Posts',
      component: () => import('./views/PostsView.vue')
    }
  ]
})