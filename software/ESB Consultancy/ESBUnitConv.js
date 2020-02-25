'use strict'

let data = {
  commercial: 2,
  url: 'https://www.esbconsult.com/esbcalc/esbunitconvpro.htm',
  version: 'p:has([href$=".zip"])>strong',
  download: 'https://www.esbconsult.com/esbunitconvpro-nosetup.zip',
  install: 'install_zipped_single',
  other: {
    free: {
      commercial: 0,
      url: 'https://www.esbconsult.com/esbcalc/esbunitconv.htm',
      download: 'https://www.esbconsult.com/esbunitconvport.zip'
    }
  }
}
module.exports = data
