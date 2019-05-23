'use strict'

let data = {
  commercial: 3,
  url: 'http://www.internetdownloadmanager.com/',
  version: {
    selector: 'img[src="home/new!.gif"]+font'
  },
  download: {
    selector: 'a[href*="idman"][href*=".exe"]'
  },
  install: function (output, iPath, fns, choice) {
    return fns.install.cli(output, iPath, output, ['/skipdlgs'], { wait: true })
  }
}
module.exports = data
