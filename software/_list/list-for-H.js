'use strict';

let json;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'h-player': {
      site: {
        GitHub: 'https://github.com/ZyqGitHub1/h-player-v2/releases/latest'
      },
      versionChoice: /h-player-([\d.]+)-win.zip/,
      install: 'install'
    },
    Hackolade: {
      commercial: 3,
      url: 'https://hackolade.com/download.html',
      version: 'h3',
      download: 'a[href*="win64"]',
      install: 'install_inno_type'
    },
    Hain: {
      site: {
        GitHub: 'https://github.com/hainproject/hain/releases/latest'
      },
      versionChoice: 'Hain-x64(.*).zip',
      install: 'install'
    },
    HakuNeko: {
      site: {
        GitHub: 'https://github.com/manga-download/hakuneko/releases/latest'
      },
      versionChoice: 'windows-setup_amd64.exe',
      install: 'install_inno',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/manga-download/hakuneko/releases'
          },
          versionChoice: ['windows-setup_amd64.exe', /nightly-(.*)/]
        }
      }
    },
    Halite: {
      site: {
        GitHub: 'https://github.com/Eoinocal/Halite/releases/latest'
      },
      versionChoice: ['x64.7z', /Release-(.*)/],
      install: 'install'
    },
    HamMultiPlayer: {
      url: 'https://www.hammultiplayer.org/',
      version: 'a[href$=".exe"]',
      changelog: ['http://hammultiplayer.org/phpbb/viewtopic.php?f=5&t=6&sid=ca7507a62e541d358bee054853019f28', '.postbody'],
      download: 'https://www.hammultiplayer.org/Softs/HamMultiPlayer.exe',
      install: 'install_single'
    },
    HandBrake: {
      site: {
        GitHub: 'https://github.com/HandBrake/HandBrake/releases/latest'
      },
      versionChoice: 'x86_64-Win_GUI.exe',
      install: 'install_nsis',
      other: {
        cli: {
          versionChoice: 'HandBrakeCLI(.*)win-x86_64.zip',
          install: 'install'
        }
      }
    },
    'HappyPanda X': {
      site: {
        GitHub: 'https://github.com/happypandax/happypandax/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install',
      other: {
        desktop: {
          site: {
            GitHub: 'https://github.com/happypandax/desktop/releases/latest'
          },
          versionChoice: '.exe',
          install: ['install_zipped', 'install', 'app-64.7z']
        }
      }
    },
    Happypanda: {
      site: {
        GitHub: 'https://github.com/twiddli/happypanda/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install'
    },
    'Hard Disk Sentinel': {
      commercial: 3,
      url: 'https://www.hdsentinel.com/download.php',
      version: 'a[href="hard_disk_sentinel_professional.php#portable"]+b',
      changelog: ['https://www.hdsentinel.com/revision.php', '.box'],
      download: 'https://www.harddisksentinel.com/hdsentinel_pro_portable.zip',
      install: 'install'
    },
    'Hardlink Shell Extension': {
      site: {
        TechSpot: 'https://www.techspot.com/downloads/7107-hardlink-shell-extension.html'
      },
      install: 'install_nsis_cli'
    },
    hardseedGO: {
      site: {
        GitHub: 'https://github.com/leonunix/hardseedGO/releases/latest'
      },
      versionChoice: 'win_amd64.zip',
      install: 'install'
    },
    Hard_Configurator: {
      site: {
        'GitHub-code': 'https://github.com/AndyFul/Hard_Configurator'
      },
      versionChoice: /Hard_Configurator_setup\(x64\)_(.*?).exe/,
      install: 'install_nsis'
    },
    Harmony: {
      commercial: 2,
      site: {
        GitHub: 'https://github.com/vincelwt/harmony/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Haroopad: {
      site: {
        BitBucket: 'https://api.bitbucket.org/2.0/repositories/rhiokim/haroopad-download/downloads'
      },
      versionChoice: /Haroopad-v(.*)-win-x64.msi/,
      install: ['install_msi', null, 'haroopad.exe']
    },
    'Hb.HexEditor2': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/hb-hexeditor2/files/'
      },
      downloadChoice: [null, '_binaries', '-binaries.zip'],
      install: 'install'
    },
    'HD Tune Pro': {
      commercial: 2,
      url: 'http://www.hdtune.com/download.html',
      version: 'h3+table tbody>tr:nth-child(2)>td:nth-child(2)',
      download: 'a[href$=".exe"]',
      install: 'install_inno'
    },
    HDDScan: {
      url: 'https://hddscan.com/',
      version: '.btn[href$="download.html"]',
      download: 'https://hddscan.com/download/HDDScan.zip',
      install: 'install'
    },
    'HDoujin Downloader': {
      site: {
        GitHub: 'https://github.com/HDoujinDownloader/HDoujin-Downloader/releases/latest'
      },
      versionChoice: 'win.zip',
      install: 'install'
    },
    Headset: {
      site: {
        GitHub: 'https://github.com/headsetapp/headset-electron/releases/latest'
      },
      versionChoice: 'setup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    'Hearthstone-Deck-Tracker': {
      site: {
        GitHub: 'https://github.com/HearthSim/Hearthstone-Deck-Tracker/releases/latest'
      },
      install: 'install'
    },
    'HEIC File Converter': {
      url: 'https://heicfile.com/',
      version: '.version-info',
      download: 'https://heicfile.com/download/heic-file-converter-win.exe',
      install: ['install_ai_msi', null, 'HEIC File Converter.msi', 'HEIC-File-Converter.exe']
    },
    HeidiSQL: {
      url: 'https://www.heidisql.com/download.php',
      version: '#content-top+h1',
      changelog: ['https://github.com/HeidiSQL/HeidiSQL/releases/latest', '.release-header+.markdown-body'],
      download: '#download-portable-64',
      install: 'install',
      other: {
        nightly: {
          version: '#nightlybuilds>li>label',
          changelog: null,
          download: '#nightlybuilds>li .download-link[href*="heidisql64"]',
          install: 'install_single'
        }
      }
    },
    HelloFont: {
      commercial: 2,
      url: 'https://www.hellofont.cn/download',
      version: async (res, $, fns, choice) => {
        const res1 = await fns.req({
          method: 'POST',
          uri: 'https://back2.hellofont.cn/ziyou/clientversionmanagement/clientversionmanagerhandler.ashx?opera=GetLatestClientVersionItem',
          headers: {
            Referer: 'https://www.hellofont.cn/download',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
          },
          form: {
            json: '{"PlatformId":0}'
          }
        });
        json = res1.json;
        return json.Version;
      },
      changelog: async (res, $) => [].concat(json.News, json.Bugs).join('\n'),
      download: (res, $) => json.Url,
      install: 'install_zipped_single'
    },
    HelpNDoc: {
      commercial: 1,
      url: 'https://www.helpndoc.com/download/',
      version: '.btn-dl-version',
      download: 'https://www.helpndoc.com/helpndoc-setup.exe',
      install: ['install_inno_type', null, '1']
    },
    HexChat: {
      url: 'https://hexchat.github.io/downloads.html',
      version: ['[href$="x64.exe"]', 'href', /%20(.*?)%20x64/],
      changelog: ['https://hexchat.readthedocs.io/en/latest/changelog.html', '.simple'],
      download: '[href$="x64.exe"]',
      install: 'install_inno'
    },
    HFS: {
      url: 'https://www.rejetto.com/hfs/?f=dl',
      version: ['#lastver>b', 'text', /(.*)/],
      changelog: ['https://www.rejetto.com/hfs/?f=wn', '#details1'],
      download: 'https://www.rejetto.com/hfs/hfs.exe',
      install: 'install_single'
    },
    HiddeX: {
      url: 'http://dejavu.narod.ru/hiddex.html',
      version: ['.post_date', 'text', /version (.*) \(/],
      download: 'http://dejavu.narod.ru/hiddex.zip',
      install: 'install_zipped_single'
    },
    'Hide Window Plus': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Hide-Window-Plus.shtml'
      },
      install: 'install_inno'
    },
    'Hide.me': {
      useProxy: true,
      commercial: 2,
      url: 'https://hide.me/en/software/windows',
      version: '.c-btndownload+p',
      download: 'https://hide.me/download/windows',
      install: 'install_inno'
    },
    HideIt: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/VasanSoft-HideIt.shtml'
      },
      install: 'install_zipped_single'
    },
    HideWin: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/System/System-Enhancements/Windows-Portable-Applications-Portable-HideWin.shtml'
      },
      install: 'install_zipped_single'
    },
    higan: {
      site: {
        GitHub: 'https://github.com/higan-emu/higan/releases/latest'
      },
      versionChoice: 'windows-x86_64.zip',
      install: ['install_zipped', 'install']
    },
    highlight: {
      url: 'http://www.andre-simon.de/zip/download.php',
      version: '.dl[href$="x64.zip"]',
      changelog: ['http://www.andre-simon.de/doku/highlight/en/changelog.php', 'pre'],
      download: '.dl[href$="x64.zip"]',
      install: 'install'
    },
    'HiJackThis Fork': {
      site: {
        GitHub: 'https://github.com/dragokas/hijackthis/releases/latest'
      },
      versionChoice: 'HiJackThis.exe',
      install: 'install_single'
    },
    HiSuite: {
      url: 'https://consumer.huawei.com/cn/support/hisuite/',
      version: '.buttoncontent+p>span',
      download: '.buttoncontent>a',
      install: ['install_zipped', 'install_nsis']
    },
    'Hitomi-Downloader': {
      site: {
        GitHub: 'https://github.com/KurtBestor/Hitomi-Downloader/releases/latest'
      },
      install: 'install_zipped_single'
    },
    HkDown: {
      site: {
        lanzous: 'https://www.lanzous.com/b138462/'
      },
      versionChoice: [/【电脑】/i, /HKDOWN-(.*?).zip/]
    },
    'Hosts File Editor+': {
      url: 'https://hostsfileseditorplus.weebly.com/',
      version: '.paragraph>[size="5"]',
      changelog: '[style="color:rgb(144, 153, 159)"]+ul',
      download: '[href*="/uploads/"][href*="hosts_file_editor"]',
      install: 'install_zipped_single'
    },
    HostsFileEditor: {
      site: {
        GitHub: 'https://github.com/scottlerch/HostsFileEditor/releases/latest'
      },
      install: 'install'
    },
    HostsMan: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/hostsman,1.html'
      },
      install: ['install_zipped', 'install_inno']
    },
    'Hot Keyboard': {
      commercial: 3,
      url: 'https://www.hot-keyboard.com/download/',
      version: '[href="/download/history.htm"]',
      changelog: ['https://www.hot-keyboard.com/download/history.htm', 'p+ul'],
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    HotCorner: {
      site: {
        GitHub: 'https://github.com/taviso/hotcorner/releases/latest'
      },
      install: 'install_zipped_single'
    },
    'Hotkey Commander': {
      url: 'http://hkcmdr.anymania.com/',
      version: 'font>[href="hkcmdr_inst.exe"]',
      download: 'http://hkcmdr.anymania.com/hkcmdr_inst.exe',
      install: 'install_nsis'
    },
    HotspotShield: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Hotspot-Shield.shtml'
      },
      install: ['install_wix', null, /^HSS/i, 'bin/hsscp.exe']
    },
    HotSwap: {
      url: 'http://mt-naka.com/hotswap/index_enu.htm',
      version: '[href$=".ZIP"][href^="file"]',
      changelog: 'div:contains("History")+p+ul',
      download: '[href$=".ZIP"][href^="file"]',
      install: ['install_zipped_single', '64bit\\\\HotSwap!.EXE']
    },
    Houdoku: {
      site: {
        GitHub: 'https://github.com/xgi/houdoku/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    Hourglass: {
      site: {
        GitHub: 'https://github.com/dziemborowicz/hourglass/releases/latest'
      },
      versionChoice: 'Portable.exe',
      install: 'install_single'
    },
    HQPlayer: {
      commercial: 3,
      url: 'https://www.signalyst.com/professional.html',
      version: 'ul+h2',
      download: ['[action$="exe"]', 'action'],
      install: 'install_nsis',
      other: {
        desktop: {
          url: 'https://www.signalyst.com/consumer.html',
          version: 'a+br+h2'
        }
      }
    },
    Hsteam: {
      commercial: 3,
      url: 'https://h-steam.com/',
      version: ['.downloadBox>a', 'href', /%20([\d.]+).exe/],
      download: '.downloadBox>a'
    },
    'HTTP Debugger': {
      commercial: 3,
      fixedPath: '%ProgramFiles(x86)%\\HTTPDebuggerPro|HTTPDebuggerUI.exe',
      url: 'https://www.httpdebugger.com/changes.html',
      version: 'h3',
      changelog: {
        selector: '.emphasis-text+div',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: 'https://www.httpdebugger.com/downloads/HTTPDebuggerPro.msi',
      install: 'install_msi_cli'
    },
    'HTTP Toolkit': {
      commercial: 2,
      site: {
        GitHub: 'https://github.com/httptoolkit/httptoolkit-desktop/releases/latest'
      },
      versionChoice: 'full.nupkg',
      install: ['install', null, 'lib\\net*']
    },
    HttpWatch: {
      commercial: 3,
      url: 'https://www.httpwatch.com/download/versionhistory/',
      version: '.history',
      changelog: '.history+ul',
      download: 'https://download.httpwatch.com/httpwatchpro.exe?v={version}.exe',
      install: 'install_nsis_cli',
      other: {
        basic: {
          commercial: 0,
          download: 'https://download.httpwatch.com/httpwatch.exe?v={version}.exe'
        }
      }
    },
    HTTrack: {
      url: 'http://www.httrack.com/page/2/en/index.html',
      version: ['h2', 'text', /(\d+[\d.-]+\d+)/],
      download: 'a[href*="x64"][href$=".zip"]',
      install: ['install', null, 'httrack']
    },
    hub: {
      site: {
        GitHub: 'https://github.com/github/hub/releases/latest'
      },
      versionChoice: '-windows-amd64-(.*).zip',
      install: 'install'
    },
    Hurricane: {
      site: {
        GitHub: 'https://github.com/Anapher/Hurricane/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    HWiNFO: {
      url: 'https://www.hwinfo.com/download/',
      version: '.download>sub',
      changelog: ['https://www.hwinfo.com/version-history/', '.version-released+ul'],
      download: 'a[href$=".zip"][href*="sac.sk"]',
      install: 'install',
      other: {
        beta: {
          version: ['.btn-gray', 'text', /Download latest Beta v([\d.-]+)/],
          download: '.btn-gray a[href$=".zip"]'
        }
      }
    },
    HxD: {
      url: 'https://mh-nexus.de/en/hxd/changelog.php',
      version: '[id^="v_"]',
      changelog: ['https://mh-nexus.de/en/hxd/changelog.php', '[id^="v_"]+td'],
      download: 'https://mh-nexus.de/downloads/HxDSetup.zip',
      install: ['install_zipped', 'install_inno_type', null, /HxD,\d+.exe/, '7']
    },
    Hydrus: {
      site: {
        GitHub: 'https://github.com/hydrusnetwork/hydrus/releases/latest'
      },
      versionChoice: 'Windows.-.Installer.exe',
      install: 'install_inno'
    },
    Hyper: {
      site: {
        GitHub: 'https://github.com/vercel/hyper/releases/latest'
      },
      versionChoice: 'full.nupkg',
      install: ['install', null, 'lib\\net*'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/vercel/hyper/releases'
          }
        }
      }
    },
    Hypercube: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/hypercubegraphv/files/Windows/'
      },
      downloadChoice: '.exe',
      install: 'install_nsis'
    }
  }
};
