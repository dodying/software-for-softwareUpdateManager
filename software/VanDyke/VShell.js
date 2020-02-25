'use strict'

let data = {
  commercial: 3,
  site: {
    'Sites/VanDyke': 'https://www.vandyke.com/cgi-bin/releases.php?product=vshell'
  },
  installType: 'InstallShield',
  other: {
    https: {
      downloadChoice: '[href*="vsh_x64_https"]'
    }
  }
}
module.exports = data
