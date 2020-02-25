'use strict'

let data = {
  commercial: 2,
  url: 'https://www.esbconsult.com/esbcalc/esbcalcpro.htm',
  version: 'p:has([href$=".zip"])>strong',
  download: 'https://www.esbconsult.com/esbcalcpro-nosetup.zip',
  install: 'install_zipped_single',
  other: {
    free: {
      commercial: 0,
      url: 'https://www.esbconsult.com/esbcalc/esbcalc.htm',
      download: 'https://www.esbconsult.com/esbcalcport.zip'
    }
  }
}
module.exports = data
