const path = require('path')

module.exports = {
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/press': { page: '/press' },
      '/events': { page: '/events' },
      '/event': { page: '/event' },
    }
  }
}