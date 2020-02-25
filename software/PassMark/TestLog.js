'use strict'

let data = {
  commercial: 3,
  url: 'http://www.testlog.com/',
  version: ['.sidebox>p', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
  changelog: ['http://www.testlog.com/support/ver_history.htm', '.Normal+ul'],
  download: 'http://www.testlog.com/ftp/testlog.exe',
  install: 'install_inno'
}
module.exports = data
