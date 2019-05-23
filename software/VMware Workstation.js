'use strict'

let data = {
  commercial: 3,
  serialNumber: 'ZC10K-8EF57-084QZ-VXYXE-ZF2XF',
  url: 'https://www.vmware.com/',
  version: {
    func: async (res, $, fns, choice) => {
      let res1 = await fns.reqHEAD('https://www.vmware.com/go/getworkstation-win')
      return res1.request.uri.href.match(/full-(.*?).exe$/)[1]
    }
  },
  download: {
    plain: 'https://www.vmware.com/go/getworkstation-win'
  },
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/v/qn', 'AUTOSOFTWAREUPDATE=0', 'DATACOLLECTION=0', 'EULAS_AGREED=1', `SERIALNUMBER="${data.serialNumber}"`, 'STARTMENU_SHORTCUT=0', 'INSTALLDIR="{dir}"'], { wait: true, shell: true })
  }
}
module.exports = data
