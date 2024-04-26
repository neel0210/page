import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import Projects from '../views/projects.vue'

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
    }
  ]
})

export default router
