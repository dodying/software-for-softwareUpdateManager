'use strict';

// 'use strict'
// let data = {
//   url: 'https://www.phrozen.io/freeware/winja/',
//   version: 'h1',
//   changelog: ['https://www.phrozen.io/changelog/winja/', '.item>ul'],
//   download: '[href$=".zip"]',
//   install: ['install_zipped_single', '64bit\\\\Winja.exe']
// }
// module.exports = data

module.exports = {
  type: 'software-list',
  list: {
    'Browser Forensic Tool': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Other-Internet-Related/Browser-Forensic-Tool.shtml'
      },
      install: 'install'
    },
    'DarkComet RAT Remover': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Antivirus/Removal-Tools/DarkComet-RAT-Remover.shtml'
      },
      install: ['install_zipped_single', 'Portable.exe']
    },
    'Mirage Anti-Bot': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Mirage-Anti-Bot.shtml'
      },
      install: ['install_zipped', 'install_inno']
    },
    'Orion Browser Dumper': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Other-Internet-Related/Orion-Browser-Dumper.shtml'
      },
      install: 'install'
    },
    'Password Revealer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Password-Managers-Generators/Phrozen-Password-Revealer.shtml'
      },
      install: 'install'
    },
    PasswordWallet: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Password-Managers-Generators/Phrozen-PasswordWallet.shtml'
      },
      install: ['install_zipped', 'install_inno']
    },
    'Phrozensoft Up2Date': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Other-Internet-Related/Phrozensoft-Up2Date.shtml'
      },
      install: ['install_zipped', 'install_inno_single']
    },
    PZenDump: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/PZenDump.shtml'
      },
      install: 'install_inno_single'
    },
    'QIcon Changer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Icons-Related/QIcon-Changer.shtml'
      },
      install: 'install_zipped_single'
    },
    'Safe USB': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/Phrozen-Safe-USB.shtml'
      },
      install: 'install_zipped_single'
    },
    'Shortcut Scanner': {
      // url: 'https://www.phrozen.io/freeware/shortcut-scanner/',
      // version: 'h1',
      // changelog: ['https://www.phrozen.io/changelog/shortcut-scanner/', '.item>ul'],
      // download: '[href$=".zip"]',
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Shortcut-Scanner.shtml'
      },
      install: ['install_zipped_single', '64.exe']
    },
    'Skype REC': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Chat/Other-Chat-Tools/Phrozen-Skype-REC.shtml'
      },
      install: 'install_inno_type'
    },
    'Skype ROB': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Chat/Other-Chat-Tools/Phrozen-Skype-ROB.shtml'
      },
      install: ['install_zipped', 'install_inno']
    },
    'Terminal Wings': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Shell-Replacements/Terminal-Wings.shtml'
      },
      install: ['install_zipped_single', '64.exe']
    },
    'Who Stalks My Cam': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Windows-Widgets/Webcams/Who-Stalks-My-Cam.shtml'
      },
      install: ['install_zipped_single', '64.exe']
    },
    'Windows File Monitor': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Phrozen-Windows-File-Monitor.shtml'
      },
      install: 'install_zipped_single'
    },
    'Windows Privacy Tweaker': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/Windows-Privacy-Tweaker.shtml'
      },
      install: 'install'
    },
    Winja: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Winja.shtml'
      },
      install: ['install_zipped_single', '64bit\\\\Winja.exe']
    }
  }
};
