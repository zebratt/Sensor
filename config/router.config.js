module.exports = [
    {
        path: '/home',
        component: '../layouts/Base',
        routes: [
            { path: '/home/market', component: './Market' },
            { path: '/home/news', component: './News' },
            { path: '/home/trade', component: './Trade' },
            { path: '/home/money', component: './Money' },
        ],
    },
    {
        path: '/detail',
        component: '../layouts/Detail',
        routes: [
            { path: '/detail/:commodityNo/:contractNo', component: './Detail'}
        ]
    }
]
