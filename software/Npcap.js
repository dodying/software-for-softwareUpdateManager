'use strict'

let data = {
  url: 'https://nmap.org/npcap/dist/',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: 'a[href$=".exe"]',
      sort: true,
      match: /npcap-(.*?).exe/
    })
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: 'a[href$=".exe"]',
      sort: true
    })
  },
  install: function (output, iPath, fns) {
    // https://nmap.org/npcap/guide/npcap-users-guide.html#npcap-installation
    return fns.install.nsis(output, iPath, ['/winpcap_mode=no'], { nosilent: true })
  }
}
module.exports = data
