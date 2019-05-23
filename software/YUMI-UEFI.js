'use strict'

let data = {
  withoutHeader: true,
  url: 'https://www.pendrivelinux.com/yumi-multiboot-usb-creator/',
  version: {
    selector: 'a[href^="/downloads/YUMI/YUMI-UEFI-"]'
  },
  download: {
    selector: 'a[href^="/downloads/YUMI/YUMI-UEFI-"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
