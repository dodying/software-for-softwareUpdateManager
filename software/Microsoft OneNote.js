'use strict'

let data = {
  withoutHeader: true,
  url: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/Microsoft-OneNote.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://www.onenote.com/download/win32/x86/zh-CN'
  },
  fixedPath: '%ProgramFiles(x86)%\\Microsoft Office\\root\\Office16\\ONENOTE.EXE',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, [], { wait: true })
  },
  other: {
    'x64': {
      download: {
        plain: 'https://www.onenote.com/download/win32/x64/zh-CN'
      },
      fixedPath: '%ProgramFiles%\\Microsoft Office\\root\\Office16\\ONENOTE.EXE'
    }
  }
}
module.exports = data
