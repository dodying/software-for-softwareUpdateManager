// 'use strict'

// let data = {
//   commercial: 2,
//   site: {
//     Softpedia: 'https://www.softpedia.com/get/Internet/Popup-Ad-Spyware-Blockers/Adguard.shtml'
//   },
//   preferPath: 'Adguard.exe',
//   install: function (output, iPath, fns) {
//     return fns.install.msi(output, iPath, null, 'setup.msi', data.preferPath)
//   }
// }
// module.exports = data
'use strict'

let data = {
  url: 'https://github.com/AdguardTeam/AdguardForWindows/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  preferPath: 'Adguard.exe',
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, 'setup.msi', data.preferPath)
  },
  other: {
    beta: {
      url: 'https://github.com/AdguardTeam/AdguardForWindows/releases/latest'
    }
  }
}
module.exports = data
