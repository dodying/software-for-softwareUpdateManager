'use strict'

let data = {
  url: 'https://www.skytopia.com/software/opalcalc/history.html',
  version: 'h2',
  changelog: {
    selector: 'body',
    attr: 'text',
    split: true
  },
  download: 'https://www.skytopia.com/software/opalcalc/OpalCalcSetup.exe'
}
module.exports = data
