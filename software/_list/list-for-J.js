'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    JabRef: {
      site: {
        GitHub: 'https://github.com/JabRef/jabref/releases/latest'
      },
      versionChoice: 'portable_windows.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/JabRef/jabref/releases'
          },
          versionChoice: 'portable_windows.zip'
        }
      }
    },
    Jadx: {
      site: {
        GitHub: 'https://github.com/skylot/jadx/releases/latest'
      },
      install: 'install'
    },
    James: {
      site: {
        GitHub: 'https://github.com/james-proxy/james/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Jampal: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/jampal/files/jampal/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, '.exe'],
      install: 'install_inno'
    },
    jasper: {
      site: {
        GitHub: 'https://github.com/jasperapp/jasper/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: 'install'
    },
    'Java Decompiler': {
      site: {
        GitHub: 'https://github.com/java-decompiler/jd-gui/releases/latest'
      },
      versionChoice: '-windows-(.*).zip',
      install: 'install'
    },
    'Java REPL': {
      site: {
        GitHub: 'https://github.com/albertlatacz/java-repl/releases/latest'
      },
      versionChoice: 'javarepl-\\d+.jar',
      install: 'install_single'
    },
    JavGo: {
      site: {
        GitHub: 'https://github.com/javgo-2020/JavGo/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    JByteMod: {
      site: {
        GitHub: 'https://github.com/GraxCode/JByteMod-Beta/releases/latest'
      },
      install: 'install'
    },
    JDRead: {
      url: 'https://jdread-api.jd.com/jdread/api/version?app=pc&os=windows',
      version: (res, $) => res.json.data.version_no,
      changelog: (res, $) => res.json.data.info,
      download: (res, $) => res.json.data.url,
      install: 'install'
    },
    jEdit: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/jedit/files/jedit/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, '.jar']
    },
    Jellyfin: {
      site: {
        GitHub: 'https://github.com/jellyfin/jellyfin/releases/latest'
      },
      versionChoice: 'windows-x64.zip',
      install: 'install'
    },
    JGlossator: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/jglossator/files/'
      },
      downloadChoice: [null, '.zip'],
      install: 'install'
    },
    JiJiDownForWPF: {
      url: 'http://l.acesheep.com/bili/re.php?callback=?',
      version: async (res, $, fns) => fns.cheerio.load(JSON.parse(res.body.match(/\?\((.*)\)/)[1]).txt).text().match(/(\d+[\d.]+\d+)/)[1],
      download: async (res, $, fns) => fns.cheerio.load(JSON.parse(res.body.match(/\?\((.*)\)/)[1]).txt)('a[href$=".zip"]').attr('href'),
      install: 'install'
    },
    JMeld: {
      site: {
        GitHub: 'https://github.com/albfan/jmeld/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    JoclyBoard: {
      site: {
        GitHub: 'https://github.com/mi-g/joclyboard/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Joplin: {
      site: {
        GitHub: 'https://github.com/laurent22/joplin/releases/latest'
      },
      versionChoice: 'Portable.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/laurent22/joplin/releases'
          }
        }
      }
    },
    JoyToKey: {
      commercial: 3,
      url: 'https://joytokey.net/en/news',
      version: 'h5',
      changelog: 'h5+ul',
      download: 'https://joytokey.net/download/JoyToKey_en.zip',
      install: 'install'
    },
    JPEGmini: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Editors/JPEGmini-Pro.shtml'
      },
      download: 'https://assets.jpegmini.com/downloads/pro/win/JPEGminiPro_installer.msi',
      install: ['install_msi', null, 'JPEGminiPro.exe']
    },
    JPEGsnoop: {
      site: {
        GitHub: 'https://github.com/ImpulseAdventure/JPEGsnoop/releases/latest'
      },
      install: 'install_zipped_single'
    },
    JPEGView: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/jpegview/files/jpegview/'
      },
      downloadChoice: [null, '.zip'],
      install: ['install', null, 'JPEGView64']
    },
    'JPEXS Free Flash Decompiler': {
      site: {
        GitHub: 'https://github.com/jindrapetrik/jpexs-decompiler/releases/latest'
      },
      versionChoice: 'setup.exe',
      install: 'install_nsis'
    },
    jq: {
      site: {
        GitHub: 'https://github.com/stedolan/jq/releases/latest'
      },
      versionChoice: ['jq-win64.exe', 'jq-(.*)'],
      install: 'install_zipped_single'
    },
    JQTools: {
      site: {
        GitHub: 'https://github.com/188080501/JQTools/releases/latest'
      },
      versionChoice: 'Windows.zip',
      install: 'install_zipped_single'
    },
    JsDroid: {
      url: 'http://www.jsdroid.com/doc/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97/readme.md',
      version: (res) => res.body.match(/\[jsdroid(.*?).exe.*?\]\((.*?)\)/)[1],
      download: (res) => res.body.match(/\[jsdroid(.*?).exe.*?\]\((.*?)\)/)[2],
      install: 'install'
    },
    'json-avro-converter': {
      site: {
        GitHub: 'https://github.com/allegro/json-avro-converter/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    Juisreader: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_48748.html'
      },
      install: ['install', null, 'Juisreader']
    },
    JumpFm: {
      site: {
        GitHub: 'https://github.com/JumpFm/jumpfm/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    Jvedio: {
      url: 'https://hitchao.gitee.io/jvedioupdate/Version', // https://hitchao.gitee.io/jvediowebpage/download.html
      version: (res, $) => res.body.split(/[\n]/)[0]
    }
  }
};
