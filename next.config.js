const path = require('path')

module.exports = {
  target: 'serverless',
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['utils'] = path.join(__dirname, 'utils')
    
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