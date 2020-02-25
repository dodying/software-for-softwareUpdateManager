'use strict'

let data = {
  withoutHeader: true,
  url: 'https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/',
  version: 'a[href*="/downloads/Universal-USB-Installer/Universal-USB-Installer-"]',
  changelog: {
    selector: '#Changelog',
    attr: 'text',
    match: /Version [\d.]+/,
    split: true
  },
  download: 'a[href*="/downloads/Universal-USB-Installer/Universal-USB-Installer-"]',
  install: 'install_single'
}
module.exports = data
