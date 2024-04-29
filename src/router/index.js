import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import Projects from '../views/projects.vue'
import Connect from '../views/connect.vue'

const router = createRouter({
  history: createWebHistory('/page/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/connect',
      name: 'connect',
      component: Connect
    }
  ]
})

export default router
