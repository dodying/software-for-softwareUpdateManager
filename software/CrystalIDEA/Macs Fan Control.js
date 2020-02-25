'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/crystalidea/macs-fan-control/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
  install: ['install_inno', null, { '{code_Qt32Dir}': '{dir}' }]
}
module.exports = data
