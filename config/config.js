const path = require('path')
const localIdentName = '[name]_[local]_[hash:base64:5]'
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
                fastClick: true,
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
    base: '/sensor/',
    publicPath: '/sensor/',
    disableCSSModules: false,
    routes: routerConfig,
    cssLoaderOptions: {
        localIdentName,
    },
    extraPostCSSPlugins: [
        require('postcss-import')({
            path: [path.join(__dirname, '../src/styles')],
        }),
        require('precss'),
    ],
    extraBabelPlugins: [
        [
            'react-css-modules',
            {
                webpackHotModuleReloading: true,
                generateScopedName: localIdentName,
            },
        ],
        [
            'import',
            {
                libraryName: 'antd-mobile',
                style: 'css',
            },
        ],
    ],
    proxy: {
        '/api': {
            target: 'http://116.62.130.69:8080',
            changeOrigin: true,
        },
    },
}
