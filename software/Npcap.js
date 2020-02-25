'use strict'

let data = {
  url: 'https://nmap.org/npcap/dist/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a[href$=".exe"]',
    sort: true,
    match: /npcap-(.*?).exe/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a[href$=".exe"]',
    sort: true
  }),
  // https://nmap.org/npcap/guide/npcap-users-guide.html#npcap-installation
  install: ['install_nsis_cli', ['/winpcap_mode=no'], { nosilent: true }]
}
module.exports = data
