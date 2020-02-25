'use strict'

let data = {
  commercial: 3,
  fixedPath: '%ProgramFiles(x86)%\\HTTPDebuggerPro|HTTPDebuggerUI.exe',
  url: 'https://www.httpdebugger.com/changes.html',
  version: 'h3',
  changelog: {
    selector: '.emphasis-text+div',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'https://www.httpdebugger.com/downloads/HTTPDebuggerPro.msi',
  install: 'install_msi_cli'
}
module.exports = data
