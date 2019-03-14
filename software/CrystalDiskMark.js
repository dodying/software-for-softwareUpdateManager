'use strict'

let data = {
  withoutHeader: true,
  url: 'https://crystalmark.info/en/download/',
  version: {
    selector: 'h2:has("#CrystalDiskMark")',
    match: /CrystalDiskMark ([\d.]+)/
  },
  download: {
    selector: 'h2:has("#CrystalDiskMark")+div a.icon-download:contains("zip")'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
