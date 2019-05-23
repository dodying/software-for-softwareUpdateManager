'use strict'

let data = {
  url: 'https://www.raidrive.com/download/',
  version: {
    selector: '#post-560 > div > div > div > div:nth-child(1) > div > div:nth-child(4) > div:nth-child(1) > strong'
  },
  download: {
    plain: 'https://www.raidrive.com/download.latest.php'
  },
  install: function (output, iPath, fns) {
    return fns.install.ai.cli(output, iPath, ['APPDIR={dir}'])
  }
}
module.exports = data
