'use strict'

let data = {
  url: 'https://www.ronsplace.eu/Products/VisualFilesScriptEditor/History',
  version: '.col-sm-8>table>tbody>tr',
  changelog: {
    selector: '.col-sm-8>table',
    attr: 'text',
    match: /Version \(?[\d.]+/,
    split: true
  },
  download: 'https://www.ronsplace.eu/ContentProduct/VF-SCPTED/Setup.exe',
  install: 'install_inno'
}
module.exports = data
