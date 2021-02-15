'use strict';

module.exports = {
  type: 'software-list',
  list: {
    AnyToISO: {
      site: {
        GitHub: 'https://github.com/crystalidea/anytoiso/releases/latest'
      },
      versionChoice: 'portable.zip',
      install: 'install'
    },
    'Geek Uninstaller': {
      url: 'https://geekuninstaller.com/download',
      version: 'h1+b',
      changelog: {
        selector: '.stripe+.stripe>div',
        attr: 'text',
        match: /^[\d.]+ \[/,
        split: true
      },
      download: 'https://geekuninstaller.com/geek.7z',
      install: 'install_zipped_single'
    },
    'Macs Fan Control': {
      site: {
        GitHub: 'https://github.com/crystalidea/macs-fan-control/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_inno', null, { '{code_Qt32Dir}': '{dir}' }]
    },
    SpeedyFox: {
      url: 'https://www.crystalidea.com/speedyfox/release-notes',
      version: '.release>.content-title',
      changelog: '.changes',
      download: 'https://www.crystalidea.com/downloads/speedyfox.zip',
      install: 'install_zipped_single'
    },
    'Uninstall Tool': {
      site: {
        GitHub: 'https://github.com/crystalidea/uninstall-tool/releases/latest'
      },
      versionChoice: 'portable.zip',
      install: 'install'
    }
  }
};
