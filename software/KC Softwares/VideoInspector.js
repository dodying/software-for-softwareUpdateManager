'use strict'

let data = {
  url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=2',
  version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
  changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
  download: 'https://www.kcsoftwares.com/files/videoinspector.zip',
  install: 'install'
}
module.exports = data
