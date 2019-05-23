'use strict'

let data = {
  url: 'https://www.cpuid.com/softwares/perfmonitor-2.html',
  version: {
    selector: '#download h4+.subtitle'
  },
  download: {
    func: async (res, $) => 'http://download.cpuid.com' + $('#download .icon-zip[href$=".zip"]').attr('href').replace('/downloads', '').replace('http://www.cpuid.com', '')
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
