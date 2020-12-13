'use strict'

let data = {
  commercial: 3,
  site: {
    'Sites/TriSunSoft': 'https://www.automailsender.com/email-checker/p.htm'
  },
  install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
}
module.exports = data
