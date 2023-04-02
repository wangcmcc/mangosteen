import { createApp } from 'vue'
import  { createRouter, createWebHashHistory }  from 'vue-router'
import { App } from './App'
import { Foo } from './views/Foo'
import { Bar } from './views/Bar'

const routes = [
    { path: '/', component: Foo },
    { path: '/bar', component: Bar },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

const app = createApp(App)
app.use(router)
app.mount('#app')
