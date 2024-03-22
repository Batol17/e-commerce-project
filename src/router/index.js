import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import { createApp } from 'vue'
// import App from '@/App.vue'
import Dashboard  from '../views/Dashboard.vue'
import Users from '@/views/Users.vue'
import Projects from '@/views/Projects.vue'
import Services from '@/views/Services.vue'
import Solutions from '@/views/Solutions.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/solutions',
      name: 'Solutions',
      component: Solutions
    },
    
       
  ]
})

export default router
