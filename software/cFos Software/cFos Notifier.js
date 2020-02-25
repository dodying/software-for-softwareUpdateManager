'use strict'

let data = {
  url: 'https://www.cfos.de/en/cfos-notifier/whats-new.txt',
  version: ['body', 'text', /\ncFos Notifier ([\d.]+)/],
  changelog: {
    match: /^cFos Notifier [\d.]+/,
    split: true
  },
  download: 'https://www.cfos.de/files/notify.msi',
  install: ['install_msi', null, 'notify.exe']
}
module.exports = data
