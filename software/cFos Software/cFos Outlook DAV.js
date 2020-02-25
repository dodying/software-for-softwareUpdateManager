'use strict'

let data = {
  commercial: 3,
  url: 'https://www.cfos.de/en/download/download.htm',
  version: 'h2:contains("cFos Outlook DAV")',
  changelog: {
    url: 'https://www.cfos.de/en/cfos-outlook-dav/whats-new.txt',
    match: /^cFos Outlook DAV v[\d.]+/,
    split: true
  },
  download: (res, $) => 'https://www.cfos.de' + $('[title="Download cFos Outlook DAV"]').eq(0).attr('href').match(/\?file=(.*)$/)[1]
}
module.exports = data
