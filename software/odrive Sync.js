'use strict'

let data = {
  commercial: 2,
  preferPath: 'odrive.exe',
  url: 'https://forum.odrive.com/c/release-notes',
  version: {
    func: async (res, $) => JSON.parse(JSON.parse($('#data-preloaded').attr('data-preloaded'))['topic_list_c/release-notes/l/latest'])['topic_list']['topics'].filter(i => i.title.match('Win v'))[0].title.match(/Win v.(\d+)/)[1]
  },
  download: {
    plain: 'https://www.odrive.com/downloaddesktop?platform=win'
  },
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, 'odrive.x64.msi', data.preferPath)
  }
}
module.exports = data
