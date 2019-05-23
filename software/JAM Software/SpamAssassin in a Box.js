'use strict'

let data = {
  commercial: 3,
  url: 'https://www.jam-software.com/spamassassin_in_a_box/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/spamassassin_in_a_box/SpamAssassinInABox-Demo-x64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, '1')
  }
}
module.exports = data
