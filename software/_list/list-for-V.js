'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    V2Fly: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/v2fly/v2ray-core/releases/latest'
      },
      versionChoice: 'v2ray-windows-64.zip',
      install: 'install'
    },
    'V2Ray-Desktop': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/Dr-Incognito/V2Ray-Desktop/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install',
      other: {
        beta: {
          tags: ['proxy'],
          site: {
            GitHub: 'https://github.com/Dr-Incognito/V2Ray-Desktop/releases'
          }
        }
      }
    },
    v2ray: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/v2ray/v2ray-core/releases/latest'
      },
      versionChoice: 'windows-64.zip$',
      install: 'install'
    },
    v2rayN: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/2dust/v2rayN/releases/latest'
      },
      versionChoice: 'v2rayN.zip',
      install: 'install',
      other: {
        beta: {
          tags: ['proxy'],
          site: {
            GitHub: 'https://github.com/2dust/v2rayN/releases'
          }
        }
      }
    },
    V2RayS: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/Shinlor/V2RayS/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: 'install'
    },
    V2RayW: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/Cenmrev/V2RayW/releases'
      },
      install: 'install'
    },
    Valdec: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/Valdec%20%28AC3-Filter%29/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install_zipped_single'
    },
    'Valentina Studio': {
      commercial: 2,
      url: 'https://www.valentina-db.com/en/all-downloads/vstudio/current',
      version: '.item-page h4>a',
      download: 'https://www.valentina-db.com/en/all-downloads/vstudio/current/vstudio_win_64?format=raw',
      install: 'install_inno_type',
      other: {
        server: {
          url: 'https://www.valentina-db.com/en/all-downloads/valentina-server/current',
          download: 'https://www.valentina-db.com/en/all-downloads/valentina-server/current/vserver_win_64?format=raw'
        }
      }
    },
    'Valve Steam': {
      url: 'http://client-download.steampowered.com/client/steam_client_win32',
      version: (res, $) => res.body.match(/"version"\s+"(.*?)"/)[1],
      download: 'https://media.st.dl.pinyuncloud.com/client/installer/SteamSetup.exe',
      install: 'install_nsis'
    },
    VcXsrv: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/vcxsrv/files/vcxsrv/'
      },
      downloadChoice: [null, /vcxsrv-64\.(.*)\.installer\.exe/],
      install: 'install_nsis'
    },
    VDesk: {
      site: {
        GitHub: 'https://github.com/eksime/VDesk/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'VDesk.exe']
    },
    Velocity: {
      commercial: 2,
      url: 'https://velocity.silverlakesoftware.com/',
      version: ['#downloadbutton', 'href', /VelocitySetup-([\d.]+).msi/],
      changelog: ['https://velocity.silverlakesoftware.com/releasenotes', '.page-header+h3+ul+h3+ul+h3+ul'],
      download: '#downloadbutton',
      install: ['install_msi', null, 'Velocity.exe']
    },
    Ventoy: {
      site: {
        GitHub: 'https://github.com/ventoy/Ventoy/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: 'install'
    },
    VeraCrypt: {
      url: 'https://www.veracrypt.fr/en/Downloads.html',
      version: ['[href$=".exe"][href*="Portable"]', 'text', /Portable (.*?).exe/],
      changelog: ['https://www.veracrypt.fr/en/Release%20Notes.html', '.wikidoc>ul'],
      download: '[href$=".exe"][href*="Portable"]'
    },
    VerySleepy: {
      site: {
        GitHub: 'https://github.com/VerySleepy/verysleepy/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_type',
      other: {
        beta: {
          site: {
            AppVeyor: 'https://ci.appveyor.com/api/projects/CyberShadow/verysleepy'
          },
          downloadChoice: '.exe'
        }
      }
    },
    Viber: {
      url: 'https://developers.viber.com/releases/',
      version: 'h3[id]',
      changelog: {
        selector: '.releases',
        attr: 'text',
        split: true
      },
      download: 'https://download.cdn.viber.com/desktop/windows/ViberSetup.exe',
      install: ['install_wix', null, 'ViberSetup.msi', 'Viber.exe']
    },
    Victoria: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Hard-Disk-Utils/Victoria.shtml'
      },
      install: 'install'
    },
    'Video Download Manager': {
      site: {
        GitHub: 'https://github.com/ingbyr/VDM/releases/latest'
      },
      install: 'install'
    },
    'Video DownloadHelper Companion Application': {
      site: {
        GitHub: 'https://github.com/mi-g/vdhcoapp/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_cli'
    },
    'Video Rotator': {
      commercial: 3,
      url: 'https://www.videorotator.com/download.html',
      version: 'h1+p',
      download: 'https://www.videorotator.com/down/videorotator.exe',
      install: 'install_inno'
    },
    Video2X: {
      site: {
        GitHub: 'https://github.com/k4yt3x/video2x/releases/latest'
      },
      versionChoice: 'win32-full.zip',
      install: 'install',
      other: {
        light: {
          versionChoice: 'win32-light.zip'
        }
      }
    },
    Videoder: {
      url: 'https://www.videoder.com/download/videoder-for-windows?arch=64',
      version: ['#restart-download-button', 'href', /Setup%20(.*?).exe/],
      download: '#restart-download-button',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    VideoSrt: {
      site: {
        GitHub: 'https://github.com/wxbool/video-srt-windows/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: 'install'
    },
    VideoSubFinder: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/videosubfinder/files/'
      },
      versionChoice: /VideoSubFinder_([\d.]+)_x64.zip/,
      install: 'install'
    },
    Vidiot: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/vidiot/files/'
      },
      versionChoice: 'Vidiot-(.*?)-win64.zip',
      install: 'install',
      other: {
        preview: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/vidiot/files/preview/'
          },
          versionChoice: 'Vidiot-(.*?)-win64_preview.zip'
        }
      }
    },
    'Virtual Chess Clock': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/vchessclock/files/'
      },
      downloadChoice: [null, 'Windows-x86.exe'],
      install: 'install_nsis'
    },
    'VirtualBox-Portable': {
      url: 'http://www.vbox.me/changelog/',
      version: 'h2',
      changelog: 'h2+p',
      download: 'a[href$=".exe"]',
      install: 'install'
    },
    VirtualBox: {
      url: 'https://www.virtualbox.org/wiki/Downloads',
      version: 'h3',
      changelog: ['https://www.virtualbox.org/wiki/Changelog', '[id^="ChangelogforVirtualBox"]~ul'],
      download: 'h3+ul a[href$="Win.exe"]',
      install: info => {
        const killed = info.fns.kill(info.parentPath);
        if (!killed) return false;
        const path = require('path');
        require('child_process').execSync(`"${info.output}" --extract --path "${path.resolve(info.fns.dirname, 'unzip')}"`);

        info.output = path.resolve(info.fns.dirname, info.fns.walk('unzip').filter(i => i.match('_amd64.msi'))[0]);
        return info.fns.install.msi.cli(info, ['VBOX_INSTALLSTARTMENUENTRIES=0', 'VBOX_INSTALLDESKTOPSHORTCUT=0', 'VBOX_INSTALLQUICKLAUNCHSHORTCUT=0', 'VBOX_REGISTERFILEEXTENSIONS=1', 'VBOX_START=0']);
      }
    },
    VirtualDub: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/virtualdub/files/virtualdub-win/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, 'AMD64.zip'],
      install: 'install'
    },
    VirtuaNES: {
      url: 'http://virtuanes.s1.xrea.com/vnes_dl.php',
      version: '[href$="e.zip"]',
      download: '[href$="e.zip"]',
      install: 'install'
    },
    VirtuaWin: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/virtuawin/files/VirtuaWin/'
      },
      downloadChoice: [null, 'portable_unicode'],
      install: 'install'
    },
    'VirusTotal Scanner': {
      useProxy: true,
      url: 'https://securityxploded.com/virus-total-scanner.php',
      version: '.page_subtitle>div',
      changelog: '#sx_core_body > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(50) > td > table > tbody > tr:nth-child(2)',
      download: 'https://cdn.securityxploded.com/download/VirusTotalScanner.zip',
      install: ['install_zipped', 'install_ai_msi', '.exe', null, 'VirusTotalScanner.msi', 'VirusTotalScanner.exe']
    },
    'VirusTotal Uploader': {
      url: 'https://www.virustotal.com/en/documentation/desktop-applications/',
      version: ['[href$=".exe"]', 'href'],
      download: '[href$=".exe"]',
      install: ['install_zipped_single', 'VirusTotalUploader']
    },
    VirusTotalContextMenu: {
      site: {
        GitHub: 'https://github.com/Genbox/VirusTotalContextMenu/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install'
    },
    VirusTotalUploader: {
      site: {
        GitHub: 'https://github.com/SamuelTulach/VirusTotalUploader/releases/latest'
      },
      install: 'install'
    },
    'Visual C++ Redistributable Runtimes': {
      url: 'https://gitlab.com/api/v4/projects/11037551/releases',
      version: (res, $) => res.json[0].tag_name.match(/v(.*)/)[1],
      changelog: (res, $) => res.json[0].description,
      download: async (res, $, fns, choice) => {
        const $1 = fns.cheerio.load(res.json[0].description_html);
        return [$1('[href*="2019_WinAll"]').eq(0).attr('href'), '.wa'];
      }
    },
    'Visual Studio Code': {
      site: {
        download: 'https://code.visualstudio.com/updates/'
      },
      versionChoice: ['https://update.code.visualstudio.com/latest/win32-x64/stable', /VSCodeSetup-x64-(.*).exe/],
      changelog: '.body>ul',
      install: ['install_inno', null, { '{code_GetDestDir}': '{dir}' }],
      other: {
        portable: {
          versionChoice: ['https://update.code.visualstudio.com/latest/win32-x64-archive/stable', /VSCode-win32-x64-(.*).zip/],
          install: 'install'
        },
        user: {
          versionChoice: ['https://update.code.visualstudio.com/latest/win32-x64-user/stable', /VSCodeUserSetup-x64-(.*).exe/]
        }
      }
    },
    VisualComicReader: {
      site: {
        GitHub: 'https://github.com/evuz/VisualComicReader/releases/latest'
      },
      versionChoice: 'win.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'VisualCppRedist AIO': {
      site: {
        GitHub: 'https://github.com/abbodi1406/vcredist/releases/latest'
      },
      install: 'install_zipped_single'
    },
    Vitomu: {
      site: {
        GitHub: 'https://github.com/digimezzo/vitomu/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/digimezzo/vitomu/releases'
          }
        }
      }
    },
    Vivlio: {
      site: {
        download: 'https://app.vivlio.com/'
      },
      versionChoice: 'https://app.vivlio.com/download/win64',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    vivo手机助手: {
      url: 'https://zs.vivo.com.cn/',
      version: '.version',
      download: 'http://zs.vivo.com.cn/download.php?sel_type=1',
      install: 'install_inno_type'
    },
    vJoy: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/vjoystick/files/Beta%202.x/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, 'vJoySetup.exe'],
      install: 'install_inno_type'
    },
    vlang: {
      site: {
        GitHub: 'https://github.com/vlang/v/releases/latest'
      },
      versionChoice: 'v_windows.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/vlang/v/releases'
          }
        }
      }
    },
    'VLC Media Player': {
      withoutHeader: true,
      url: 'https://www.videolan.org/vlc/download-windows.html',
      version: '#downloadVersion',
      changelog: {
        url: 'https://www.videolan.org/developers/vlc-branch/NEWS',
        match: /^Changes between/,
        split: true
      },
      download: 'a[href$="win32.7z"]',
      install: 'install'
    },
    Vmd: {
      site: {
        GitHub: 'https://github.com/yoshuawuyts/vmd/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    'VMware Workstation': {
      commercial: 3,
      url: 'https://www.vmware.com/',
      version: async (res, $, fns, choice) => {
        const res1 = await fns.reqHEAD('https://www.vmware.com/go/getworkstation-win');
        return res1.request.uri.href.match(/full-(.*?).exe$/)[1];
      },
      download: 'https://www.vmware.com/go/getworkstation-win',
      install: ['install_cli', null, ['/v/qn', 'AUTOSOFTWAREUPDATE=0', 'DATACOLLECTION=0', 'EULAS_AGREED=1', `SERIALNUMBER="${'ZC10K-8EF57-084QZ-VXYXE-ZF2XF'}"`, 'STARTMENU_SHORTCUT=0', 'INSTALLDIR="{dir}"'], { wait: true, shell: true }]
    },
    VNote: {
      site: {
        GitHub: 'https://github.com/vnotex/vnote/releases/latest'
      },
      versionChoice: '64_portable(.*).zip',
      install: 'install'
    },
    Voicemod: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Audio/Other-AUDIO-Tools/Voicemod.shtml'
      },
      download: 'https://download.voicemod.net/b2c/newRelease/VoicemodSetup.exe',
      install: 'install_inno_type'
    },
    VolPI: {
      site: {
        GitHub: 'https://github.com/raymelon/VolPI/releases/latest'
      },
      install: 'install'
    },
    Volta: {
      site: {
        GitHub: 'https://github.com/volta-cli/volta/releases'
      },
      versionChoice: 'windows.zip',
      install: 'install'
    },
    VoltMemo: {
      commercial: 3,
      url: 'http://www.voltmemo.com/chs/downloading.php?id=chs-en',
      version: ['a[href$=".exe"]', 'href'],
      download: 'a[href$=".exe"]',
      install: 'install_nsis',
      other: {
        fr: { url: 'http://www.voltmemo.com/chs/downloading.php?id=chs-fr' },
        jp: { url: 'http://www.voltmemo.com/chs/downloading.php?id=chs-jp' },
        ru: { url: 'http://www.voltmemo.com/chs/downloading.php?id=chs-ru' },
        de: { url: 'http://www.voltmemo.com/chs/downloading.php?id=chs-de' },
        'cht-en': { url: 'http://www.voltmemo.com/chs/downloading.php?id=cht-en' }
      }
    },
    Volume2: {
      url: 'https://irzyxa.blogspot.com/p/downloads.html',
      version: '.entry-content span[style*="0069d2"]',
      download: '.entry-content a[href$=".zip"]',
      install: ['install', 'Config.ini']
    },
    VOX: {
      site: {
        GitHub: 'https://github.com/fresk-nc/VOX/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    VSCodium: {
      site: {
        GitHub: 'https://github.com/VSCodium/vscodium/releases/latest'
      },
      versionChoice: 'VSCodiumUserSetup-x64-(.*?).exe',
      install: ['install_inno', null, { '{code_GetDestDir}': '{dir}' }]
    },
    'VT Hash Check': {
      site: {
        GitHub: 'https://github.com/charonn0/VT-Hash/releases/latest'
      },
      install: ['install_zipped', 'install_inno', '.exe']
    },
    VTerm: {
      site: {
        GitHub: 'https://github.com/vterm/vterm/releases/latest'
      },
      install: 'install'
    },
    VTUploader: {
      useProxy: true,
      url: 'https://www.adlice.com/download/vtuploader/',
      version: 'table > tbody > tr:nth-child(3) > td:nth-child(2)',
      changelog: {
        url: 'https://download.adlice.com/VTU/changelog.txt',
        match: /^V[\d.]+/,
        split: true
      },
      download: 'https://download.adlice.com/api/?action=download&app=vtuploader&type=x86',
      install: 'install_single'
    },
    VueScan: {
      commercial: 3,
      url: 'https://www.hamrick.com/vuescan/vuescan.htm',
      version: 'p:has([name="changes"])',
      changelog: 'p:has([name="changes"])+ul',
      download: (res, $, fns, choice) => fns.walkLink('https://www.hamrick.com/download.html', fns, '.vsDownloadLink'),
      install: 'install_single'
    },
    vuetron: {
      site: {
        GitHub: 'https://github.com/vuetwo/vuetron/releases/latest'
      },
      versionChoice: 'win(.*).zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/vuetwo/vuetron/releases'
          }
        }
      }
    },
    'vultr-cli': {
      tags: ['open-source', 'command-line', 'official'],
      site: {
        GitHub: 'https://github.com/vultr/vultr-cli/releases/latest'
      },
      versionChoice: 'windows_64-bit.zip',
      install: 'install_zipped_single'
    },
    vultr: {
      tags: ['open-source', 'command-line', 'unofficial'],
      site: {
        GitHub: 'https://github.com/JamesClonk/vultr/releases/latest'
      },
      versionChoice: 'Windows-64bit.zip',
      install: 'install_zipped_single'
    },
    Vuze: {
      commercial: 2,
      site: {
        SourceForge: 'https://sourceforge.net/projects/azureus/files/vuze/'
      },
      downloadChoice: [null, 'Installer64.exe']
    },
    Vysor: {
      commercial: 2,
      site: {
        SoftPedia: 'https://www.softpedia.com/get/Mobile-Phone-Tools/Others/Vysor.shtml'
      },
      download: 'https://vysornuts.clockworkmod.com/download/win32'
    }
  }
};
