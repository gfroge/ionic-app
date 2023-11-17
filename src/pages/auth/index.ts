import View from './view.vue'

export default [
  {
    path: '/auth',
    name: 'Auth',
    component: View,
  },
  {
    path: '/',
    redirect: to => {
      return { path: '/auth' }
    },
  },
]