import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import Home from '@/components/home'
import Register from '@/components/register'

var axios = require('axios')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index,
          meta: {
            requireAuth: true,
            allowRoles: [
              'ROLE_HR_STAFF'
            ]
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('token')
  console.log('to', to)
  console.log('from', from)
  console.log('next', next)
  console.log('isLogin', isLogin)
  if (to.meta.requireAuth) {
    axios
      .post('/loginService/auth/parse', {
        token: isLogin
      })
      .then((successResponse) => {
        let allow = false
        for (var i = 0; i < to.meta.allowRoles.length; i++) {
          if (to.meta.allowRoles[i] === successResponse.data.user_type) {
            allow = true
          }
        }

        if (to.meta.allowRoles.length === 0) {
          allow = true
        }

        if (allow) {
          next()
        } else {
          next('/login')
        }
      })
      .catch((failResponse) => {
        next('/login')
      })
  } else {
    // 反之，若沒有 requireAuth 的話，就會直接放行
    next()
  }
})

export default router
