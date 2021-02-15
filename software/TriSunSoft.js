'use strict';

module.exports = {
  type: 'software-list',
  list: {
    '1Tree Pro': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://1tree.info/pro.htm'
      },
      install: 'install'
    },
    '1Tree': {
      site: {
        'Sites/TriSunSoft': 'https://1tree.info/basic.htm'
      },
      install: 'install'
    },
    'Access Password Recovery': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/access-password-recovery/'
      },
      install: 'install_inno'
    },
    'Advanced Date Time Calculator': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/advanced-date-time-calculator/'
      },
      install: 'install_inno'
    },
    'Advanced Recent Access': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/advanced-recent-access/'
      },
      install: 'install_inno'
    },
    'Auto Mail Sender Birthday Edition': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.automailsender.com/birthday-edition/'
      },
      install: 'install_inno'
    },
    'Auto Mail Sender File Edition': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.automailsender.com/file-edition/'
      },
      install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
    },
    'Auto Mail Sender Standard Edition': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.automailsender.com/auto-mail-sender-standard-edition.htm'
      },
      install: 'install_inno'
    },
    'Date Time Counter': {
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/date-time-counter/'
      },
      install: 'install_inno'
    },
    'Duplicate File Finder Mini': {
      site: {
        'Sites/TriSunSoft': 'https://duplicatefilefinder4pc.com/duplicate-file-finder-free.htm'
      },
      install: 'install_inno'
    },
    'Duplicate File Finder Plus': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://duplicatefilefinder4pc.com/duplicate-file-finder-plus.htm'
      },
      install: 'install_inno'
    },
    'Duplicate MP3 Finder Plus': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://duplicatefilefinder4pc.com/duplicate-mp3-finder-plus.htm'
      },
      install: 'install_inno'
    },
    'Duplicate Photo Finder Plus': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://duplicatefilefinder4pc.com/duplicate-photo-finder-plus.htm'
      },
      install: 'install_inno'
    },
    'Easy Work Time Calculator': {
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/easy-work-time-calculator/'
      },
      install: 'install_inno'
    },
    'Email Checker Basic': {
      site: {
        'Sites/TriSunSoft': 'https://www.automailsender.com/email-checker/basic.htm'
      },
      install: 'install_inno_single'
    },
    'Email Checker Pro': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.automailsender.com/email-checker/p.htm'
      },
      install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
    },
    'File & Folder Lister': {
      commercial: 0,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/file-folder-lister/'
      },
      install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
    },
    KeyMusic: {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/key-music.htm'
      },
      install: 'install_inno_single'
    },
    'NET WYSIWYG HTML Editor': {
      commercial: 0,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/dotnet-wysiwyg-html-editor/'
      },
      install: 'install_inno_single'
    },
    'PC WorkBreak ': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/pc-work-break/'
      },
      install: 'install_inno'
    },
    'PDF to DOC': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.pdf-helper.com/pdf-to-doc/'
      },
      install: 'install_inno'
    },
    'PDF to HTML': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.pdf-helper.com/pdf-to-html/'
      },
      install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
    },
    'PDF to JPG': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.pdf-helper.com/pdf-to-jpg/'
      },
      install: 'install_inno'
    },
    'PDF to Text': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.pdf-helper.com/pdf-to-text/'
      },
      install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
    },
    'PDF to X': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.pdf-helper.com/pdf-to-x/'
      },
      install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
    },
    'Process Guard for Developer': {
      commercial: 0,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/process-guard-developer/'
      },
      install: 'install_inno_single'
    },
    'tail for Windows': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/tail-for-windows.htm'
      },
      install: 'install_zipped_single'
    },
    'VB 6 Pure Code Lines Calculator': {
      commercial: 0,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/vb6-pure-code-lines-calculator/'
      },
      install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
    },
    'Windows Explorer Tracker': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/windows-explorer-tracker/'
      },
      install: 'install_inno'
    },
    'WinExt Batch Operator': {
      commercial: 3,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/webo/'
      },
      install: 'install_inno'
    },
    'WinExt Bulk Renamer': {
      commercial: 0,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/webr/'
      },
      install: 'install_inno'
    },
    WinExt: {
      commercial: 0,
      site: {
        'Sites/TriSunSoft': 'https://www.trisunsoft.com/we/'
      },
      install: 'install_inno'
    }
  }
};
