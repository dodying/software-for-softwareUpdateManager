'use strict'

let data = {
  url: 'https://csharp.love/chrome-update-tool.html',
  version: 'li:contains("当前版本")',
  download: 'https://static.pzhacm.org/software/ChromeUpdateSharp_v{version}.zip',
  install: 'install_zipped_single'
}
module.exports = data
