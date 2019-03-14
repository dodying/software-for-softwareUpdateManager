'use strict'

let data = {
  url: 'https://www.autoitscript.com/site/autoit/downloads/',
  version: {
    selector: '.entry-content table>tbody>tr>td'
  },
  download: {
    plain: 'https://www.autoitscript.com/cgi-bin/getfile.pl?autoit3/autoit-v3.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
