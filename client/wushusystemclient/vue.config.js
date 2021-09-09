const conf = {
    publicPath: process.env.BASE_URL || '/',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true,
            },
            '^/admin': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true,
            },
            '^/static': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true,
            },
            '^/media': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true,
            },
        },
    },
};

module.exports = conf;
