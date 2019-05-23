'use strict'

let data = {
  url: 'https://www.cfos.de/en/download/download.htm',
  commercial: 3,
  version: {
    selector: 'h2:contains("cFos Outlook DAV")'
  },
  download: {
    func: async (res, $) => 'https://www.cfos.de' + $('[title="Download cFos Outlook DAV"]').eq(0).attr('href').match(/\?file=(.*)$/)[1]
  }
}
module.exports = data
