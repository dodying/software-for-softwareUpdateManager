'use strict'

let data = {
  url: 'https://update.pushbullet.com/desktop/update.json',
  version: (res, $) => res.json['.net2-prod'].version,
  download: (res, $) => res.json['.net2-prod'].url,
  install: 'install',
  other: {
    dev: {
      version: (res, $) => res.json['.net2-dev'].version,
      download: (res, $) => res.json['.net2-dev'].url
    },
    pe: {
      version: (res, $) => res.json['WindowsPE-32bit-prod'].version,
      download: (res, $) => res.json['WindowsPE-32bit-prod'].url
    },
    'pe-dev': {
      version: (res, $) => res.json['WindowsPE-32bit-dev'].version,
      download: (res, $) => res.json['WindowsPE-32bit-dev'].url
    }
  }
}
module.exports = data
