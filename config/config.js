const path = require('path')
const routerConfig = require('./router.config')

export default {
    treeShaking: true,
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: false,
                dva: false,
                dynamicImport: { webpackChunkName: true },
                title: 'Sensor',
                dll: false,
                routes: {
                    exclude: [/components\//],
                },
            },
        ],
    ],
    alias: {
        '@src': path.join(__dirname, '../src'),
    },
    history: 'hash',
    hash: true,
    disableCSSModules: true,
    routes: routerConfig,
    extraPostCSSPlugins: [
        require('postcss-import')({
            path: [path.join(__dirname, '../src/styles')],
        }),
        require('precss'),
    ],
}
