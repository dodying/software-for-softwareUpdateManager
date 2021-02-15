'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'K-Lite Codec Pack': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/k_lite_codec_pack_standard,1.html'
      },
      install: 'install_inno_cli',
      other: {
        Basic: {
          site: {
            MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/k_lite_codec_pack_basic,1.html'
          }
        },
        Full: {
          site: {
            MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/k_lite_codec_pack_full,1.html'
          }
        },
        Update: {
          site: {
            MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/k_lite_codec_pack_update,1.html'
          }
        }
      }
    },
    K2pdfopt: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/k2pdfopt,1.html'
      },
      install: 'install'
    },
    Kakapo: {
      site: {
        GitHub: 'https://github.com/bluedaniel/Kakapo-app/releases/latest'
      },
      versionChoice: 'Win.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    Kaku: {
      site: {
        GitHub: 'https://github.com/EragonJ/Kaku/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Kalkules: {
      url: 'https://www.kalkules.com/download/',
      version: 'h2',
      changelog: ['https://www.kalkules.com/category/version-history/', '.entry-content'],
      download: 'h2:contains("zip")+p+p>a',
      install: 'install'
    },
    'Karaoke Forever': {
      site: {
        GitHub: 'https://github.com/bhj/karaoke-forever/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    kb: {
      site: {
        GitHub: 'https://github.com/gnebbia/kb/releases/latest'
      },
      versionChoice: 'win.exe',
      install: 'install_single'
    },
    KDiff3: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/kdiff3/files/kdiff3/'
      },
      downloadChoice: [null, /KDiff3-64bit-Setup_(.*).exe/],
      install: 'install_nsis'
    },
    KeenWrite: {
      site: {
        GitHub: 'https://github.com/DaveJarvis/keenwrite/releases'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    KeePass: {
      withoutHeader: true,
      url: 'https://keepass.info/download.html',
      version: 'body > table > tbody > tr:nth-child(1) > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > small > b',
      download: 'a[href$=".zip/download"]',
      install: 'install'
    },
    KeePassXC: {
      site: {
        GitHub: 'https://github.com/keepassxreboot/keepassxc/releases/latest'
      },
      versionChoice: 'Win64-portable.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/keepassxreboot/keepassxc/releases'
          }
        }
      }
    },
    Keepmark: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/System/File-management/Keepmark.shtml'
      },
      install: 'install'
    },
    KeeWeb: {
      site: {
        GitHub: 'https://github.com/keeweb/keeweb/releases/latest'
      },
      versionChoice: 'win.x64.zip',
      install: 'install'
    },
    KenPlayer: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_597891.html'
      },
      install: ['install_zipped', 'install_nsis_cli', '.exe']
    },
    'Key Extender': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Others/Miscellaneous/Key-Extender.shtml'
      },
      download: 'https://www.remapkey.com/down/KeyExtender.zip',
      install: ['install_zipped', 'install_inno_single']
    },
    Keybase: {
      site: {
        GitHub: 'https://github.com/keybase/client/releases/latest'
      },
      versionChoice: i => !i.prerelaese,
      download: 'https://prerelease.keybase.io/keybase_setup_amd64.msi',
      install: ['install_msi', null, 'keybase.exe']
    },
    'Keyboard Test Utility': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/Keyboard-Test-Utility.shtml'
      },
      install: 'install_single'
    },
    KeyCastOW: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_416166.html'
      },
      install: 'install_zipped_single'
    },
    Keyda: {
      url: 'https://github.com/miaomiaosoft/Keyda/releases/latest',
      version: '.muted-link.css-truncate',
      changelog: '.release-header+.markdown-body',
      download: '[href$="Keyda.zip"]',
      install: 'install_zipped_single'
    },
    KeymouseGo: {
      site: {
        GitHub: 'https://github.com/taojy123/KeymouseGo/releases/latest'
      },
      versionChoice: 'x64.exe',
      install: 'install_single'
    },
    'KeyNote NF': {
      site: {
        GitHub: 'https://github.com/dpradov/keynote-nf/releases/latest'
      },
      versionChoice: 'Release(.*).rar',
      install: 'install'
    },
    Keypirinha: {
      site: {
        GitHub: 'https://github.com/Keypirinha/Keypirinha/releases/latest'
      },
      versionChoice: 'x64-portable.7z',
      install: 'install'
    },
    'Kindle Mate': {
      url: 'https://kmate.me/download/',
      version: '[href$="Portable.zip"]',
      changelog: {
        url: 'https://kmate.me/new/',
        selector: '.entry-content',
        attr: 'text',
        match: /^Kindle Mate Version [\d.]+/,
        split: true
      },
      download: '[href$="Portable.zip"]',
      install: 'install'
    },
    KindleHelper: {
      site: {
        GitHub: 'https://github.com/Quanwei1992/KindleHelper/releases/latest'
      },
      install: 'install'
    },
    KinhDown: {
      site: {
        lanzous: 'https://www.lanzoux.com/s/KinhDown'
      },
      versionChoice: /版本(.*?).7z/
    },
    Kinovea: {
      url: 'https://www.kinovea.org/download.html',
      version: '[href$=".exe"]',
      download: '[href$=".exe"]',
      install: 'install_nsis',
      other: {
        beta: {
          version: 'h4:contains("beta")+p+ul a[href$="x64.exe"]',
          download: 'h4:contains("beta")+p+ul a[href$="x64.exe"]'
        }
      }
    },
    Kinza: {
      url: 'https://www.kinza.jp/en/download/thankyou/windows_x64/',
      version: ['body > section > div > p > a', 'href', /kinza_x64_([\d.]+).exe/],
      download: 'body > section > div > p > a',
      install: ['install_zipped', 'install']
    },
    Kitematic: {
      site: {
        GitHub: 'https://github.com/docker/kitematic/releases/latest'
      },
      versionChoice: 'Windows.zip',
      install: 'install'
    },
    KiTTY: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Network-Tools/Telnet-SSH-Clients/9bis-KiTTY.shtml'
      },
      install: 'install_single'
    },
    klogg: {
      site: {
        GitHub: 'https://github.com/variar/klogg/releases/latest'
      },
      versionChoice: '-x64-setup.exe',
      install: 'install_nsis',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/variar/klogg/releases'
          },
          versionChoice: ['-x64-setup.exe', null, null, 'published_at']
        }
      }
    },
    KMPlayer: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Video/Video-Players/KMPlayer.shtml'
      },
      versionChoice: /\d{4}\.\d{2}.\d{2}/,
      downloadChoice: /\d{4}\.\d{2}.\d{2}/,
      install: 'install'
    },
    Kodi: {
      url: 'https://kodi.tv/download/849',
      version: '.group-right>h2',
      download: 'a.download-link[href$=".exe"]',
      install: 'install_nsis'
    },
    Koko: {
      site: {
        GitHub: 'https://github.com/KokoIRC/koko/releases/latest'
      },
      versionChoice: 'win-64.zip',
      install: 'install'
    },
    Koofr: {
      commercial: 2,
      site: {
        download: 'https://koofr.eu/desktop-apps/'
      },
      versionChoice: 'https://app.koofr.net/dl/apps/win',
      install: 'install_nsis'
    },
    Kotlin: {
      site: {
        GitHub: 'https://github.com/JetBrains/kotlin/releases/latest'
      },
      versionChoice: 'kotlin-native-windows-(.*?).zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/JetBrains/kotlin/releases'
          }
        }
      }
    },
    KuShellExtension: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/kushellext/files/kushellext/'
      },
      downloadChoice: [null, '.7z'],
      install: ['install', '.xml']
    }
  }
};
