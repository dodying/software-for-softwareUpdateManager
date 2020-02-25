'use strict'

let data = {
  site: {
    download: 'https://www.pcmgr-global.com/'
  },
  versionChoice: ['https://www.pcmgr-global.com/download.php?do=oem', /PCMgr_Setup_(\d{2})(\d+)_(\d+)_(\d+).exe/, '$1.$2.$3.$4'],
  fixedPath: ['%ProgramFiles(x86)%\\Tencent\\QQPCMgr', /[\d.]+/, 'QQPCMgr.exe'],
  install: 'install_cli_s'
}
module.exports = data
