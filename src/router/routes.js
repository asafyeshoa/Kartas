
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pageTodo.vue') },
      { path: '/Settings', component: () => import('pages/pageSettings.vue') },
      { path: '/netCaulator', component: () => import('pages/pageCalculator.vue') },
      { path: '/chat', component: () => import('pages/pageChat.vue') },
      { path: '/Settings/help', component: () => import('pages/pageHelp.vue') },
      { path: '/auth', component: () => import('pages/pageAuth.vue') },
      { path: '/chatingPage/:uid', component: () => import('pages/ChatingPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
