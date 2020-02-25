'use strict'

let data = {
  url: 'http://www.angusj.com/resourcehacker/',
  version: 'a[name="download"]+h3',
  changelog: 'strong:contains("Changes")+ul',
  download: 'http://www.angusj.com/resourcehacker/resource_hacker.zip',
  install: ['install_zipped_single', 'ResourceHacker.exe']
}
module.exports = data
