const compose = require('next-compose-plugins');

const plugins = [];

/**
 * @type {import('next').NextConfig}
 */
const nextConfiguration = {
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn'],
    },
    reactRemoveProperties: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = compose(plugins, nextConfiguration);
