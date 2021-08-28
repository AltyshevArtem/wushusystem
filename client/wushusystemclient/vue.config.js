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
                // TODO: css стили тоже должны работать
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
