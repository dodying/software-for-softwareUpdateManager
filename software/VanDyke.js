'use strict';

module.exports = {
  type: 'software-list',
  list: {
    SecureCRT: {
      commercial: 3,
      site: {
        'Sites/VanDyke': 'https://www.vandyke.com/cgi-bin/releases.php?product=securecrt'
      },
      installType: 'InstallShield'
    },
    SecureFX: {
      commercial: 3,
      site: {
        'Sites/VanDyke': 'https://www.vandyke.com/cgi-bin/releases.php?product=securefx'
      },
      installType: 'InstallShield'
    },
    'VanDyke ClientPack': {
      commercial: 3,
      site: {
        'Sites/VanDyke': 'https://www.vandyke.com/cgi-bin/releases.php?product=clientpack'
      },
      installType: 'InstallShield'
    },
    VShell: {
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
  }
};
