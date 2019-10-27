import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

import countDown from '../pages/countDown.vue'

const router = new vueRouter({
    routes: [{
            path: '*',
            redirect: '/countDown'
        },
        {
            name: 'countDown',
            path: '/countDown',
            component: countDown
        }
    ]
})

export default router