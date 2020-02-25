'use strict'

let data = {
  url: 'https://files.teamspeak-services.com/releases/client/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'pre>a',
    sort: true,
    attr: 'text'
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'pre>a',
    sort: true
  }, {
    selector: 'pre>a',
    matchCheck: /win64-(.*?).(exe|zip)/
  }),
  install: 'install_nsis',
  other: {
    server: {
      url: 'https://files.teamspeak-services.com/releases/server/',
      install: 'install'
    },
    'server-pre_releases': {
      url: 'https://files.teamspeak-services.com/pre_releases/server/',
      install: 'install'
    }
  }
}
module.exports = data
