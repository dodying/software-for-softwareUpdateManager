'use strict'

let data = {
  url: 'https://github.com/nextcloud/desktop/releases/latest',
  version: ['.muted-link.css-truncate', 'text', /^v(.*)$/],
  changelog: '.release-header+.markdown-body',
  download: '.markdown-body [href$=".exe"]',
  install: 'install_nsis',
  other: {
    beta: {
      url: 'https://github.com/nextcloud/desktop/releases'
    }
  }
}
module.exports = data
