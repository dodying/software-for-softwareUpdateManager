'use strict'

let data = {
  url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=7',
  version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
  changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
  download: 'https://kcsoftwares.com/files/ignition_lite.exe',
  install: 'install_inno'
}
module.exports = data
