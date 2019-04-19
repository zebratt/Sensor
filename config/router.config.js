module.exports = [
    {
        path: '/',
        component: '../layouts/Base',
        routes: [
            { path: '/market', component: './Market' },
            { path: '/news', component: './News' },
            { path: '/trade', component: './Trade' },
            { path: '/money', component: './Money' },
        ],
    },
]
