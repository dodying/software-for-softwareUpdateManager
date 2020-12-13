'use strict'

let data = {
  commercial: 0,
  site: {
    'Sites/TriSunSoft': 'https://www.trisunsoft.com/vb6-pure-code-lines-calculator/'
  },
  install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
}
module.exports = data
