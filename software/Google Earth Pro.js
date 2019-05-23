'use strict'

let data = {
  // useProxy: true,
  url: 'https://support.google.com/earth/answer/168344',
  fixedPath: '%ProgramFiles%\\Google\\Google Earth Pro\\client\\googleearth.exe',
  version: {
    selector: 'a[href$="-x64.exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$="-x64.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['OMAHA=1'], { wait: true })
  }
}
module.exports = data
