'use strict'

let data = {
  url: 'https://www.ronsplace.eu/Products/LicenseTool/History',
  version: '.col-sm-8>table>tbody>tr',
  changelog: {
    selector: '.col-sm-8>table',
    attr: 'text',
    match: /Version \(?[\d.]+/,
    split: true
  },
  download: 'https://www.ronsplace.eu/ContentProduct/UTIL-LIC/Install.zip',
  install: 'install'
}
module.exports = data
