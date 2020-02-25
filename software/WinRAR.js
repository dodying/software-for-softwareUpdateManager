'use strict'

let data = {
  commercial: 2,
  url: 'https://www.rarlab.com/download.htm',
  version: ['a[href^="/rar/winrar-x64"][href$=".exe"]', 'text', /\(64 bit\)\s+(.*)/],
  changelog: {
    url: 'https://rarlab.com/rarnew.htm',
    selector: 'pre',
    attr: 'text',
    match: /Version [\d.]+/,
    split: true
  },
  download: 'a[href^="/rar/winrar-x64"][href$=".exe"]',
  fixedPath: '%ProgramFiles%\\WinRAR\\WinRAR.exe',
  install: 'install_cli_s'
}
module.exports = data
