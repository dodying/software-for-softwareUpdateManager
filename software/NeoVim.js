'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/neovim/neovim/releases/latest'
  },
  downloadChoice: '[href$="nvim-win64.zip"]',
  install: 'install',
  other: {
    nightly: {
      url: 'https://github.com/neovim/neovim/releases/tag/nightly',
      version: ['.release-header+.markdown-body>pre', 'text', /NVIM v([\d.]+.*)/],
      changelog: '.release-header+.markdown-body',
      download: 'https://github.com/neovim/neovim/releases/download/nightly/nvim-win64.zip'
    }
  }
}
module.exports = data
