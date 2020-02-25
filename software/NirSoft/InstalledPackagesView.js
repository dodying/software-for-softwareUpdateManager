'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/installed_packages_view.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+ul>li',
  download: 'https://www.nirsoft.net/utils/installedpackagesview-x64.zip',
  install: 'install_zipped_single'
}
module.exports = data
