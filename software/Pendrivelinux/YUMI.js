'use strict'

let data = {
  withoutHeader: true,
  url: 'https://www.pendrivelinux.com/yumi-multiboot-usb-creator/',
  version: 'a[href^="/downloads/YUMI/YUMI-"]',
  changelog: {
    selector: '#Changelog',
    attr: 'text',
    match: /Version [\d.]+/,
    split: true
  },
  download: 'a[href^="/downloads/YUMI/YUMI-"]',
  install: 'install_single',
  other: {
    uefi: {
      version: 'a[href^="/downloads/YUMI/YUMI-UEFI-"]',
      download: 'a[href^="/downloads/YUMI/YUMI-UEFI-"]'
    }
  }
}
module.exports = data
