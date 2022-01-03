import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vue-tree-list',
    name: 'TreeList',
    component: () => import('@/views/vue-tree-list.vue')
  },
  {
    path: '/vue-draggable',
    name: 'VueDraggable',
    component: () => import('@/views/vue-draggable.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
