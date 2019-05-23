'use strict'

let data = {
  url: 'https://github.com/chengr28/Pcap_DNSProxy/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="bin.7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'Pcap_DNSProxy-bin\\Windows')
  }
}
module.exports = data
