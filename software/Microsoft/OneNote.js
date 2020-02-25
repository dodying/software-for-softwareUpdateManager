'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/Microsoft-OneNote.shtml'
  },
  download: 'https://www.onenote.com/download/win32/x86/zh-CN',
  fixedPath: '%ProgramFiles(x86)%\\Microsoft Office\\root\\Office16\\ONENOTE.EXE',
  install: ['install_cli', null, [], { wait: true }],
  other: {
    'x64': {
      download: 'https://www.onenote.com/download/win32/x64/zh-CN',
      fixedPath: '%ProgramFiles%\\Microsoft Office\\root\\Office16\\ONENOTE.EXE'
    }
  }
}
module.exports = data
