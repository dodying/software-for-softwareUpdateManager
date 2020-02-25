'use strict'

let data = {
  url: 'http://www.drivermagician.com/download.htm',
  version: 'body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)',
  changelog: {
    url: 'https://www.drivermagician.com/index.htm',
    selector: '[bgcolor="#f7f7f7"]',
    attr: 'text',
    match: /Version [\d.]+/,
    split: true
  },
  download: 'http://www.drivermagician.com/DriverMagician.exe',
  install: 'install_inno'
}
module.exports = data
