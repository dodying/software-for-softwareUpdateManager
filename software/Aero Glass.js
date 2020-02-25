'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Aero-Glass.shtml'
  },
  versionChoice: /([\d.]+) For Windows 8\.1\+$/,
  downloadChoice: /for Windows 8\.1\+$/,
  install: 'install_inno',
  other: {
    '8': {
      versionChoice: /([\d.]+) For Windows 8/,
      downloadChoice: /for Windows 8$/
    }
  }
}
module.exports = data
