'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'AVI MetaEdit': {
      url: 'https://mediaarea.net/AVIMetaEdit/Download/Windows',
      version: ['a[href$="Windows_x64_WithoutInstaller.zip"]', 'href'],
      changelog: {
        url: 'https://raw.githubusercontent.com/MediaArea/AVIMetaEdit/master/History_GUI.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'a[href$="Windows_x64_WithoutInstaller.zip"]',
      install: 'install_zipped_single',
      other: {
        cli: {
          version: 'a[href$="Windows_x64.zip"]',
          download: 'a[href$="Windows_x64.zip"]',
          install: 'install_zipped_single'
        }
      }
    },
    BWFMetaEdit: {
      url: 'https://mediaarea.net/BWFMetaEdit/Download/Windows',
      version: ['a[href$="Windows_x64_WithoutInstaller.zip"]', 'href'],
      changelog: {
        url: 'https://raw.githubusercontent.com/MediaArea/BWFMetaEdit/master/History_GUI.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'a[href$="Windows_x64_WithoutInstaller.zip"]',
      install: 'install_zipped_single',
      other: {
        cli: {
          version: 'a[href$="Windows_x64.zip"]',
          download: 'a[href$="Windows_x64.zip"]',
          install: 'install_zipped_single'
        }
      }
    },
    'DV Analyzer': {
      url: 'https://mediaarea.net/DVAnalyzer/Download/Windows',
      version: ['a[href$="Windows_x64_WithoutInstaller.7z"]', 'href'],
      changelog: {
        url: 'https://raw.githubusercontent.com/MediaArea/DVAnalyzer/master/History_GUI.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'a[href$="Windows_x64_WithoutInstaller.7z"]',
      install: 'install_zipped_single',
      other: {
        cli: {
          version: 'a[href$="Windows_x64.zip"]',
          download: 'a[href$="Windows_x64.zip"]',
          install: 'install_zipped_single'
        }
      }
    },
    DVRescue: {
      url: 'https://mediaarea.net/DVRescue/Download/Windows',
      version: 'a[href$="Windows_x64.zip"]',
      changelog: {
        url: 'https://raw.githubusercontent.com/MediaArea/dvrescue/master/History.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'a[href$="Windows_x64.zip"]',
      install: 'install_zipped_single'
    },
    MediaConch: {
      url: 'https://mediaarea.net/MediaConch/Download/Windows',
      version: ['a[href$="Windows_x64_WithoutInstaller.7z"]', 'href'],
      changelog: {
        url: 'https://raw.githubusercontent.com/MediaArea/MediaConch_SourceCode/master/History_GUI.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'a[href$="Windows_x64_WithoutInstaller.7z"]',
      install: 'install',
      other: {
        cli: {
          version: 'a[href$="Windows_x64.zip"]',
          download: 'a[href$="Windows_x64.zip"]',
          install: 'install'
        }
      }
    },
    MediaInfo: {
      url: 'https://mediaarea.net/MediaInfo/Download/Windows',
      version: ['a[href$="Windows_x64_WithoutInstaller.7z"]', 'href'],
      changelog: ['https://mediaarea.net/rss/mediainfo_updates.xml', 'item>description'],
      download: 'a[href$="Windows_x64_WithoutInstaller.7z"]',
      install: 'install',
      other: {
        cli: {
          version: 'a[href$="Windows_x64.zip"]',
          download: 'a[href$="Windows_x64.zip"]',
          install: ['install', 'Plugin']
        }
      }
    },
    'MOV MetaEdit': {
      url: 'https://mediaarea.net/MOVMetaEdit/Download/Windows',
      version: ['a[href$="Windows_x64_WithoutInstaller.zip"]', 'href'],
      changelog: {
        url: 'https://raw.githubusercontent.com/MediaArea/MOVMetaEdit/master/History_GUI.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'a[href$="Windows_x64_WithoutInstaller.zip"]',
      install: 'install_zipped_single',
      other: {
        cli: {
          version: 'a[href$="Windows_x64.zip"]',
          download: 'a[href$="Windows_x64.zip"]',
          install: 'install_zipped_single'
        }
      }
    },
    QCTools: {
      url: 'https://mediaarea.net/QCTools/Download/Windows',
      version: ['a[href$="Windows_x64_WithoutInstaller.zip"]', 'href'],
      changelog: {
        url: 'https://raw.githubusercontent.com/MediaArea/QCTools/master/History.txt',
        split: true
      },
      download: 'a[href$="Windows_x64_WithoutInstaller.zip"]',
      install: 'install_zipped_single',
      other: {
        cli: {
          version: 'a[href$="Windows_x64.zip"]',
          download: 'a[href$="Windows_x64.zip"]',
          install: 'install_zipped_single'
        }
      }
    },
    RAWcooked: {
      url: 'https://mediaarea.net/RAWcooked/Download/Windows',
      version: 'a[href$="Windows_x64.zip"]',
      changelog: {
        url: 'https://raw.githubusercontent.com/MediaArea/RAWcooked/master/History_CLI.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'a[href$="Windows_x64.zip"]',
      install: 'install_zipped_single'
    }
  }
};
