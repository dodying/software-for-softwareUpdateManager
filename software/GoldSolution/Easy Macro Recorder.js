'use strict'

let data = {
  url: 'http://www.flashplayerpro.com/MacroRecorder/downloadMacroRecorder.htm',
  version: 'body > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > font:nth-child(1)',
  changelog: {
    url: 'https://www.flashplayerpro.com/MacroRecorder/index.htm',
    selector: 'body > div > table > tbody > tr:nth-child(16)',
    attr: 'text',
    match: /Version [\d.]+/,
    split: true
  },
  download: 'http://www.flashplayerpro.com/EasyMacroRecorder.exe',
  install: 'install_inno'
}
module.exports = data
