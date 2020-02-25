'use strict'

let data = {
  url: 'https://bluesky23.yukishigure.com/en/ATIcInstallTool.html',
  version: 'b:contains("Changes")+div',
  changelog: 'b:contains("Changes")+div>ul',
  download: ['[type="button"][onclick*=".zip"]', 'onclick', /location.href='(.*)'/],
  install: 'install'
}
module.exports = data
