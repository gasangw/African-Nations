const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/v3.1/region/africa', {
      target: 'https://restcountries.com',
      changeOrigin: true,
    }),
  );
};
