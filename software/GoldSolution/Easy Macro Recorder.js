'use strict'

let data = {
  url: 'http://www.flashplayerpro.com/MacroRecorder/downloadMacroRecorder.htm',
  version: {
    selector: 'body > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > font:nth-child(1)'
  },
  download: {
    plain: 'http://www.flashplayerpro.com/EasyMacroRecorder.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
