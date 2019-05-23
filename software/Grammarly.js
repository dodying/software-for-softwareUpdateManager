'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/Grammarly-Grammarly.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://download-editor.grammarly.com/windows/GrammarlySetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
