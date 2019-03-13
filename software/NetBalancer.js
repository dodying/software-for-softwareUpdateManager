'use strict'

let data = {
  commercial: 3,
  url: 'https://netbalancer.com/download',
  version: {
    selector: '#Download'
  },
  download: {
    plain: 'https://netbalancer.com/downloads/NetBalancerSetup.exe'
  },
  install: function (output, iPath) {
    return require('./../js/install_inno')(output, iPath)
  }
}
module.exports = data
