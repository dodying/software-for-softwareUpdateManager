'use strict'

let data = {
  commercial: 3,
  site: {
    'Sites/TriSunSoft': 'https://www.pdf-helper.com/pdf-to-html/'
  },
  install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
}
module.exports = data
