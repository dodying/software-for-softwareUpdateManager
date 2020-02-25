'use strict'

let data = {
  site: {
    download: 'https://support.bluestacks.com/hc/en-us/articles/360021469391'
  },
  versionChoice: ['https://cloud.bluestacks.com/get_offline_download?os_arch=x64', /BlueStacks-Installer_([\d.]+)_/],
  changelog: '.article-body>.wysiwyg-indent1+.wysiwyg-indent1'
}
module.exports = data
