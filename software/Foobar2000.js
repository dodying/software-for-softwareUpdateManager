'use strict'

let data = {
  url: 'http://www.foobar2000.org/download',
  version: ['a[href^="/getfile/"]', 'text', /v([\d.]+)/],
  changelog: ['https://www.foobar2000.org/changelog', '.level3>ul'],
  download: (res, $) => $('a[href^="/getfile/"]').attr('href').replace('getfile', 'files'),
  install: 'install_nsis',
  other: {
    beta: {
      version: ['h2:contains("beta")+a[href^="/getfile/"]', 'text', /v([\d.]+ beta \d+)/],
      download: (res, $) => $('h2:contains("beta")+a[href^="/getfile/"]').attr('href').replace('getfile', 'files')
    }
  }
}
module.exports = data
