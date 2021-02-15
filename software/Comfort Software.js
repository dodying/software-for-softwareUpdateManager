'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Comfort Clipboard': {
      commercial: 2,
      url: 'https://www.comfort-software.com/clipboard-manager/version-history/',
      version: 'h4',
      changelog: 'h4+ul',
      download: 'https://www.comfort-software.com/download/ComfortClipboardSetup.exe',
      install: 'install_inno',
      other: {
        lite: {
          commercial: 0,
          download: 'https://www.comfort-software.com/download/cc_lite.exe'
        }
      }
    },
    'Comfort Keys': {
      commercial: 2,
      url: 'https://www.comfort-software.com/comfort-keys/version-history/',
      version: 'h4',
      changelog: 'h4+ul',
      download: 'https://www.comfort-software.com/download/ComfortKeysSetup.exe',
      install: 'install_inno_type',
      other: {
        lite: {
          commercial: 0,
          download: 'https://www.comfort-software.com/download/ck_lite.exe'
        }
      }
    },
    'Comfort On-Screen Keyboard': {
      commercial: 2,
      url: 'https://www.comfort-software.com/on-screen-keyboard/',
      version: '.borderless.table td+td',
      changelog: ['https://on-screen-keyboard.blogspot.com/search/label/new%20version', '.post-body ul'],
      download: 'https://www.comfort-software.com/download/ComfortOSKSetup.exe',
      install: 'install_inno_type',
      other: {
        lite: {
          commercial: 0,
          download: 'https://www.comfort-software.com/download/kb_lite.exe'
        }
      }
    },
    'Comfort Typing': {
      commercial: 2,
      url: 'https://www.comfort-software.com/other-products/',
      version: '.block-box:contains("Comfort Typing") h4',
      download: 'https://www.comfort-software.com/download/ct_setup.exe',
      install: 'install_inno',
      other: {
        lite: {
          commercial: 0,
          download: 'https://www.comfort-software.com/download/ct_lite.exe'
        }
      }
    },
    'Free Alarm Clock': {
      url: 'https://freealarmclocksoftware.com/',
      version: 'p:has(.btn-download)+p',
      download: 'https://freealarmclocksoftware.com/FreeAlarmClockPortable.zip',
      install: 'install'
    },
    'Free Virtual Keyboard': {
      url: 'https://freevirtualkeyboard.com/',
      version: '.col-right>h2+p+p',
      changelog: ['https://freevirtualkeyboard.blogspot.com/search/label/new%20version', '.post-body ul'],
      download: 'https://freevirtualkeyboard.com/FreeVK.exe',
      install: 'install_single'
    },
    'Hot Alarm Clock': {
      commercial: 2,
      url: 'https://hotalarmclock.com/download/',
      version: '[colspan="3"]',
      changelog: ['https://hotalarmclock.blogspot.com/search/label/new%20version', '.post-body ul'],
      download: 'https://hotalarmclock.com/files/HotAlarmClockSetup.exe',
      install: 'install_inno'
    },
    'Hot Copy Paste': {
      commercial: 2,
      url: 'https://windowsclipboard.com/download/',
      version: '[colspan="3"]',
      changelog: ['https://windowsclipboard.blogspot.com/search/label/new%20version', '.post-body ul'],
      download: 'https://windowsclipboard.com/files/HotCopyPasteSetup.exe',
      install: 'install_inno'
    },
    'Hot Virtual Keyboard': {
      commercial: 2,
      url: 'https://hot-virtual-keyboard.com/download/',
      version: 'body > div.body > div > div > section.section.section-no-background > div > div > table > tbody > tr:nth-child(1) > th',
      download: 'https://hot-virtual-keyboard.com/files/HotVirtualKeyboardSetup.exe',
      install: 'install_inno'
    }
  }
};
