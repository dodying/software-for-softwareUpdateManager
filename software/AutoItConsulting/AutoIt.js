'use strict'

let data = {
  url: 'https://www.autoitscript.com/site/autoit/downloads/',
  version: '.entry-content table>tbody>tr>td',
  changelog: {
    url: 'https://www.autoitscript.com/autoit3/docs/history.htm',
    selector: 'body',
    attr: 'text',
    match: /^[\d.]+/,
    split: true
  },
  download: 'https://www.autoitscript.com/cgi-bin/getfile.pl?autoit3/autoit-v3.zip',
  install: 'install',
  other: {
    beta: {
      url: 'https://www.autoitscript.com/autoit3/files/beta/autoit/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        match: /autoit-v([\d.]+).zip/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        matchCheck: /autoit-v([\d.]+).zip/
      })
    }
  }
}
module.exports = data
