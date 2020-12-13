'use strict'

let data = {
  commercial: 3,
  url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=4',
  version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
  changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
  download: 'https://kcsoftwares.com/files/phototofilm_lite.exe',
  install: 'install_inno'
}
module.exports = data
