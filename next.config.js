const compose = require('next-compose-plugins');

const plugins = [];

const nextConfiguration = {
  // https://nextjs.org/docs/advanced-features/compiler#minification
  swcMinify: true,
};

module.exports = compose(plugins, nextConfiguration)
