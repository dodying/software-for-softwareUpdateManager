'use strict'

let data = {
  commercial: 3,
  url: 'https://www.vmware.com/',
  version: async (res, $, fns, choice) => {
    let res1 = await fns.reqHEAD('https://www.vmware.com/go/getworkstation-win')
    return res1.request.uri.href.match(/full-(.*?).exe$/)[1]
  },
  download: 'https://www.vmware.com/go/getworkstation-win',
  install: ['install_cli', null, ['/v/qn', 'AUTOSOFTWAREUPDATE=0', 'DATACOLLECTION=0', 'EULAS_AGREED=1', `SERIALNUMBER="${'ZC10K-8EF57-084QZ-VXYXE-ZF2XF'}"`, 'STARTMENU_SHORTCUT=0', 'INSTALLDIR="{dir}"'], { wait: true, shell: true }]
}
module.exports = data
