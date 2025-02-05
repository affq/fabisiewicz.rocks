import { createRouter, createWebHistory } from 'vue-router'
import SocialCollection from '../components/SocialCollection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'social',
      component: SocialCollection
    }
  ],
})

export default router
