'use strict'

let data = {
  url: 'https://app-updates.agilebits.com/product_history/OPW6',
  version: ['article[id]:not(.beta)>h3 a[href^="#"]', 'title', /(.*) - build/],
  changelog: 'article[id]:not(.beta)',
  download: 'article[id]:not(.beta)>h3 a[href$=".exe"]',
  install: 'install_single',
  other: {
    beta: {
      version: ['article[id]>h3 a[href^="#"]', 'title', /(.*) - build/],
      changelog: 'article[id]',
      download: 'article[id]>h3 a[href$=".exe"]'
    },
    4: {
      url: 'https://app-updates.agilebits.com/product_history/OPW4'
    },
    1: {
      url: 'https://app-updates.agilebits.com/product_history/OPW3'
    }
  }
}
module.exports = data
