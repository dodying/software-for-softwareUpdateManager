'use strict'

let data = {
  commercial: 2,
  url: 'https://velocity.silverlakesoftware.com/',
  preferPath: 'Velocity.exe',
  version: {
    selector: '#downloadbutton',
    attr: 'href',
    match: /VelocitySetup-([\d.]+).msi/
  },
  download: {
    selector: '#downloadbutton'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
