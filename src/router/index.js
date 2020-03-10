import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      isLogin: false,
    }
  },
  {
    path: '/goods',
    name: 'goods',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "goods" */ '../views/goods/Goods.vue'),
    meta: {
      isLogin: false,
    }
  },
  {
    path: '/about',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/About.vue')
  },
  {
    path: '/ratings',
    name: 'ratings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ratings" */ '../views/ratings/Ratings.vue'),
    meta: {
      isLogin: true,
    },
    children: [{
      path: 'experts',
      name: 'Experts',
      component: () => import(/* webpackChunkName: "Experts" */ '../views/ratings/Experts.vue')
    },
    ]
  },
  {
    path: '/sellers',
    name: 'sellers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: (resolve) => require(["../views/sellers/Sellers.vue"], resolve),
    meta: {
      isLogin: false,
    }
  }
]

const router = new VueRouter({
  routes
})
router.afterEach(route => {
  window.scroll(0, 0);
});

export default router
