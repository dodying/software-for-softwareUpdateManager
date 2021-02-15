'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Kaspersky Products Remover': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/Uninstallers/Kaspersky-Anti-Virus-Remover.shtml'
      },
      download: 'http://media.kaspersky.com/utilities/ConsumerUtilities/kavremvr.exe',
      install: 'install_single'
    },
    'Kaspersky Virus Removal Tool': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Antivirus/Kaspersky-Virus-Removal-Tool.shtml'
      },
      download: 'https://devbuilds.s.kaspersky-labs.com/devbuilds/KVRT/latest/full/KVRT.exe',
      install: 'install_single'
    }
  }
};
