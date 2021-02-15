'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Universal USB Installer': {
      withoutHeader: true,
      url: 'https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/',
      version: 'a[href*="/downloads/Universal-USB-Installer/Universal-USB-Installer-"]',
      changelog: {
        selector: '#Changelog',
        attr: 'text',
        match: /Version [\d.]+/,
        split: true
      },
      download: 'a[href*="/downloads/Universal-USB-Installer/Universal-USB-Installer-"]',
      install: 'install_single'
    },
    YUMI: {
      withoutHeader: true,
      url: 'https://www.pendrivelinux.com/yumi-multiboot-usb-creator/',
      version: 'a[href^="/downloads/YUMI/YUMI-"]',
      changelog: {
        selector: '#Changelog',
        attr: 'text',
        match: /Version [\d.]+/,
        split: true
      },
      download: 'a[href^="/downloads/YUMI/YUMI-"]',
      install: 'install_single',
      other: {
        uefi: {
          version: 'a[href^="/downloads/YUMI/YUMI-UEFI-"]',
          download: 'a[href^="/downloads/YUMI/YUMI-UEFI-"]'
        }
      }
    }
  }
};
