'use strict'

let data = {
  url: 'https://www.launchy.net/download.php',
  version: ['[href$=".exe"]:contains("Stable")', 'text', /Version \((.*?)\)/],
  download: '[href$=".exe"]:contains("Stable")',
  install: 'install_inno',
  other: {
    beta: {
      version: ['[href$=".exe"]:contains("Beta")', 'text', /Version \((.*?)\)/],
      download: '[href$=".exe"]:contains("Beta")'
    }
  }
}
module.exports = data
