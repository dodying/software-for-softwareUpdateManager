'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/executed_programs_list.html',
  version: '.utilcaption',
  changelog: '.utilsubject:contains("Versions History")+ul>li',
  download: 'https://www.nirsoft.net/utils/executedprogramslist.zip',
  install: 'install_zipped_single'
}
module.exports = data
