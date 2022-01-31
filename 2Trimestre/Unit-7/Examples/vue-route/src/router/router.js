
const routes = [
    { 
        path: '/', 
        name: 'Private',
        component: () => import('../components/Private.vue')
    },
    { 
        path: '/hello/:name',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue')
    },
]

export {routes};