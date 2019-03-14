'use strict'

let data = {
  url: 'https://www.pendrivelinux.com/yumi-multiboot-usb-creator/',
  version: {
    selector: 'a[href^="/downloads/YUMI/YUMI-UEFI-"]'
  },
  download: {
    selector: 'a[href^="/downloads/YUMI/YUMI-UEFI-"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
