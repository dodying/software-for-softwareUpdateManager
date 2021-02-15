'use strict';

let version;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'C++ Insights': {
      site: {
        GitHub: 'https://github.com/andreasfertig/cppinsights/releases/latest'
      },
      versionChoice: ['windows-64bit.zip', 'v_(.*)'],
      install: 'install_zipped_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/andreasfertig/cppinsights/releases'
          },
          versionChoice: ['windows.zip', null, null, 'published_at']
        }
      }
    },
    Cacher: {
      url: 'https://cacher-download.nyc3.digitaloceanspaces.com/latest.yml',
      version: (res, $) => res.body.match(/Cacher Setup (.*?).exe/)[1],
      download: (res, $) => 'https://s3.amazonaws.com/download.cacher.io/' + res.body.match(/path:\s+(.*)/)[1],
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Cairo: {
      fixedPath: '%ProgramFiles%\\Cairo Shell\\CairoDesktop.exe',
      site: {
        GitHub: 'https://github.com/cairoshell/cairoshell/releases'
      },
      versionChoice: '64bit.exe',
      install: 'install_nsis_cli'
    },
    'Calibre-Web': {
      site: {
        GitHub: 'https://github.com/janeczku/calibre-web/releases/latest'
      },
      install: 'install'
    },
    Calibre: {
      site: {
        download: 'https://calibre-ebook.com/changelog.rss'
      },
      versionChoice: ['https://calibre-ebook.com/dist/win64', /calibre-64bit-(.*?).msi/],
      changelog: async (res, $, fns, choice) => [$('item>description').eq(0).text(), true],
      install: ['install_msi', null, 'calibre.exe'],
      other: {
        portable: {
          versionChoice: ['https://calibre-ebook.com/dist/portable', /calibre-portable-installer-(.*?).exe/],
          install: info => info.fns.install.cli(info, null, [require('path').resolve(info.parentPath, '../')])
        }
      }
    },
    'CAM UnZip': {
      commercial: 1,
      url: 'https://www.camunzip.com/download.htm',
      version: 'body > div.main > table > tbody > tr:nth-child(2) > td > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > p:nth-child(1)',
      download: 'https://www.camunzip.com/products/cuz_setup.exe',
      install: 'install_inno'
    },
    Cameyo: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/Cameyo.shtml'
      },
      download: 'https://online.cameyo.com/apps/1/download',
      install: 'install_single'
    },
    Candy: {
      site: {
        GitHub: 'https://github.com/Simonwep/candy/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Cantabile: {
      commercial: 3,
      url: 'https://www.cantabilesoftware.com/releaseNotes3500.json',
      version: (res, $) => `3.0.${(version = res.json.releases.filter(i => !i.experimental)[0].build)}.0`,
      changelog: async (res, $) => res.json.releases.filter(i => !i.experimental)[0].points.join('\n'),
      download: () => `https://download.cantabilesoftware.com/Cantabile-x64-${version}.zip`,
      install: 'install',
      other: {
        experimental: {
          version: (res, $) => `3.0.${(version = res.json.releases[0].build)}.0`,
          changelog: async (res, $) => res.json.releases[0].points.join('\n')
        }
      }
    },
    Caprine: {
      site: {
        GitHub: 'https://github.com/sindresorhus/caprine/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Caps Writer': {
      site: {
        GitHub: 'https://github.com/HaujetZhao/CapsWriter/releases/latest'
      },
      versionChoice: 'CapsWriter.exe',
      install: 'install_single'
    },
    'Capslock+': {
      url: 'https://cjkis.me/capslock+/',
      version: ['a[download]', 'href', /v(.*?).exe/],
      changelog: '.change-log ul>li',
      download: 'a[download]',
      install: 'install_single'
    },
    Caption: {
      site: {
        GitHub: 'https://github.com/gielcobben/caption/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Captura: {
      site: {
        GitHub: 'https://github.com/MathewSachin/Captura/releases/latest'
      },
      versionChoice: 'Portable.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/MathewSachin/Captura/releases'
          }
        }
      }
    },
    Capture2Text: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/capture2text/files/Capture2Text/'
      },
      downloadChoice: [null, '64bit.zip'],
      install: 'install'
    },
    Caret: {
      site: {
        GitHub: 'https://github.com/careteditor/issues/releases/latest'
      },
      versionChoice: 'full.nupkg',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/careteditor/releases-beta/releases'
          }
        }
      }
    },
    CareUEyes: {
      url: 'https://care-eyes.com/release.html',
      version: 'h4[id^="version"]',
      changelog: 'h4[id^="version"]+p+ul',
      download: 'https://care-eyes.com/careueyes/v1/package/CareUEyes_setup.exe',
      install: 'install_inno'
    },
    CashNotify: {
      site: {
        GitHub: 'https://github.com/BaguetteEngineering/download.cashnotify.com/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    CatLight: {
      commercial: 3,
      url: 'https://catlight.io/downloads',
      version: '.platform-info',
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://support.catlight.io/s1-general/updates', fns, {
        selector: '.topic-list__title>a[href*="catlight"]'
      }, {
        selector: '.topic__item',
        attr: 'html'
      })), true],
      download: 'https://catlight.io/downloads/win/beta',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    CatMemoNote: {
      url: 'http://www.cc9.ne.jp/~pappara/catmemonote.html',
      version: 'h2+p',
      download: 'h2+p>a[href$=".zip"]',
      install: 'install'
    },
    CCProxy: {
      url: 'https://www.youngzsoft.net/ccproxy/proxy-server-download.htm',
      version: ['td:has([itemprop="name"])', 'text', /v(.*?\))/],
      changelog: {
        url: 'https://www.youngzsoft.net/ccproxy/whatsnew.htm',
        selector: '#content',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: 'http://update.youngzsoft.com/ccproxy/update/ccproxysetup.exe',
      install: 'install_inno_type'
    },
    CC助手: {
      site: {
        download: 'https://ccyixia.com/'
      },
      versionChoice: 'https://ccyixia.com/updates/download?platform=windows&arch=x64',
      changelog: {
        url: 'https://ccyixia.com/docs/changelog/',
        selector: '.content',
        attr: 'text',
        match: /^#[\d-]+/,
        split: true
      },
      install: 'install_inno_type'
    },
    CDBurnerXP: {
      url: 'https://www.cdburnerxp.se/en/download',
      version: 'h3>a',
      download: 'https://www.cdburnerxp.se/downloadsetup.exe',
      install: 'install_inno_type'
    },
    Cemu: {
      url: 'https://cemu.info/',
      version: 'h1:contains("Latest release")+p',
      changelog: ['https://cemu.info/changelog.html', '.col-sm-12.well'],
      download: '[name="download"]',
      install: 'install'
    },
    CentBrowser: {
      url: 'https://www.centbrowser.cn/history.html',
      version: ['.list>p', 'id'],
      changelog: '.list>span',
      download: '.list a[href$="x64_portable.exe"]',
      install: 'install',
      other: {
        beta: {
          url: 'https://static.centbrowser.com/win_beta/',
          version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'a',
            match: /centbrowser_(.*?)_x64_portable.exe/,
            sort: true
          }),
          download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'a',
            matchCheck: /centbrowser_(.*?)_x64_portable.exe/,
            sort: true
          })
        }
      }
    },
    'Cerberus FTP Server': {
      commercial: 3,
      url: 'https://www.cerberusftp.com/products/releasenotes/',
      version: '.releaseHeader',
      changelog: '.notes-content',
      download: 'https://www.cerberusftp.com/files/CerberusInstall64.exe',
      install: 'install_ai'
    },
    Cerebro: {
      site: {
        GitHub: 'https://github.com/KELiON/cerebro/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Certbot: {
      site: {
        GitHub: 'https://github.com/certbot/certbot/releases/latest'
      },
      versionChoice: 'installer-win32.exe',
      install: 'install_nsis'
    },
    Chameleon: {
      site: {
        GitHub: 'https://github.com/ianmartinez/Chameleon/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_single'
    },
    Championify: {
      site: {
        GitHub: 'https://github.com/dustinblackman/Championify/releases/latest'
      },
      versionChoice: 'WIN(.*).zip',
      install: 'install'
    },
    Charles: {
      withoutHeader: true,
      url: 'https://www.charlesproxy.com/latest-release/download.do',
      version: ['[name="version"]', 'value'],
      changelog: {
        url: 'https://www.charlesproxy.com/documentation/version-history/',
        selector: '.content',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => {
        const res1 = await fns.reqHEAD({
          uri: 'https://www.charlesproxy.com/latest-release/download.do',
          method: 'POST',
          form: {
            __csrf: $('[name="__csrf"]').eq(0).attr('value'),
            os: 'windows64',
            beta: 'false',
            version: $('[name="version"]').eq(0).attr('value')
          }
        });
        return res1.request.uri.href;
      },
      install: 'install_msi_cli'
    },
    'Cheat Engine': {
      site: {
        GitHub: 'https://github.com/cheat-engine/cheat-engine/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_type'
    },
    cheat: {
      site: {
        GitHub: 'https://github.com/cheat/cheat/releases/latest'
      },
      versionChoice: 'windows-amd64.exe.zip',
      install: 'install_zipped_single'
    },
    Chemo: {
      site: {
        GitHub: 'https://github.com/t-richards/chemo/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    CherryPlayer: {
      commercial: 2,
      site: {
        download: 'https://www.cherryplayer.com/'
      },
      versionChoice: 'http://cherryplayer.com/download.php',
      changelog: {
        url: '[href*="cherryplayer.com/cherryplayer"]',
        selector: '.post-content'
      },
      install: 'install_inno'
    },
    CherryTree: {
      site: {
        'GitHub-commit': 'https://github.com/giuspen/cherrytree/releases'
      },
      changelog: {
        url: 'https://github.com/giuspen/cherrytree/raw/master/changelog.txt',
        split: true
      },
      download: 'http://www.giuspen.com/software/cherrytree_{version}_setup.exe',
      install: 'install_inno'
    },
    'Chez Scheme': {
      site: {
        GitHub: 'https://github.com/cisco/ChezScheme/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_wix', null, 'ChezScheme64.msi', 'bin/a6nt/scheme.exe']
    },
    ChineseConverter: {
      site: {
        GitHub: 'https://github.com/miaolapd/chinese-converter/releases/latest'
      },
      install: 'install'
    },
    'CHK Hash Tool': {
      url: 'https://compressme.net/',
      version: '[href$=".zip"]',
      download: '[href$=".zip"]',
      install: 'install_zipped_single'
    },
    Chocolatey: {
      site: {
        download: 'https://chocolatey.org/install'
      },
      versionChoice: 'https://chocolatey.org/api/v2/package/chocolatey',
      install: ['install', null, 'tools\\chocolateyInstall']
    },
    Chord: {
      site: {
        GitHub: 'https://github.com/PeterDing/chord/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Chromecast Audio Stream': {
      site: {
        GitHub: 'https://github.com/acidhax/chromecast-audio-stream/releases/latest'
      },
      install: 'install'
    },
    ChromeUpdateSharp: {
      url: 'https://csharp.love/chrome-update-tool.html',
      version: 'li:contains("当前版本")',
      download: 'https://api.pzhacm.org/iivb/ChromeUpdateSharp.zip',
      install: 'install_zipped_single'
    },
    CintaNotes: {
      commercial: 2,
      url: 'http://cintanotes.com/download/',
      version: '.download-button>a',
      changelog: ['http://cintanotes.com/release-notes/', '.entry-content'],
      download: (res, $) => $('a[href$=".zip"]').attr('href').replace('/download-start?file=', ''),
      install: 'install'
    },
    'citra-emu': {
      site: {
        // https://github.com/citra-emu/citra
        GitHub: 'https://github.com/citra-emu/citra-nightly/releases/latest'
      },
      versionChoice: ['citra-windows-mingw-(.*).7z', /nightly-(.*)/],
      install: ['install'],
      other: {
        nightly: {
          site: {
            GitHub: 'https://github.com/citra-emu/citra-nightly/releases/latest'
          },
          versionChoice: ['citra-windows-mingw-(.*).7z', /nightly-(.*)/]
        },
        canary: {
          site: {
            GitHub: 'https://github.com/citra-emu/citra-canary/releases/latest'
          },
          versionChoice: ['citra-windows-mingw-(.*).7z', /canary-(.*)/]
        }
      }
    },
    'Clash for Windows': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/Fndroid/clash_for_windows_pkg/releases/latest'
      },
      versionChoice: /Clash.for.Windows.Setup.[\d.]+.exe/,
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Clash: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/Dreamacro/clash/releases'
      },
      versionChoice: 'windows-amd64(.*).zip',
      install: 'install_zipped_single'
    },
    'ClashCS-Beta': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/Krazysdaki/ClashCS-Beta/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Clashr Auto': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/ClashrAuto/Clashr-Auto-Desktop/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    clashR: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/WhoJave/clashr/releases'
      },
      versionChoice: 'windows-amd64(.*).zip',
      install: 'install_zipped_single'
    },
    ClashWeb: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/lzdnico/ClashWeb/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    Clashy: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/SpongeNobody/Clashy/releases'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Classic Shell': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/classicshell/files/'
      },
      downloadChoice: [null, /ClassicShellSetup_.*?.exe/]
    },
    CLaunch: {
      url: 'https://hp.vector.co.jp/authors/VA018351/claunch.html',
      version: '.links a',
      changelog: ['https://hp.vector.co.jp/authors/VA018351/history_cl.html', '.version'],
      download: '.links a:contains("64-bit")',
      install: 'install'
    },
    'Clavier+': {
      site: {
        GitHub: 'https://github.com/guilryder/clavier-plus/releases/latest'
      },
      versionChoice: ['64.zip', /release([\d.]+)/],
      install: 'install'
    },
    CLCL: {
      url: 'https://www.nakka.com/soft/clcl/index_eng.html',
      version: '.detail>p>b',
      download: '[href^="download/clcl"][href$=".zip"]',
      install: 'install'
    },
    CleanMyWechat: {
      site: {
        GitHub: 'https://github.com/blackboxo/CleanMyWechat/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    cleanup: {
      site: {
        GitHub: 'https://github.com/Simonwep/cleanup-files/releases/latest'
      },
      versionChoice: 'cleanup.exe',
      install: 'install'
    },
    Cleaver: {
      url: 'https://blog.getcleaver.com/',
      version: 'h2',
      changelog: '.article-summary',
      download: 'https://getcleaver.com/downloads/windows',
      install: ['install_zipped', 'install_zipped', null, 'install', 'app-32.7z']
    },
    Clementine: {
      site: {
        GitHub: 'https://github.com/clementine-player/Clementine/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/clementine-player/Clementine/releases'
          }
        }
      }
    },
    Clibor: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Clipboard/Clibor.shtml'
      },
      install: 'install'
    },
    clink: {
      site: {
        GitHub: 'https://github.com/mridgers/clink/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/mridgers/clink/releases'
          }
        }
      }
    },
    ClipAngel: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/clip-angel/files/'
      },
      versionChoice: /ClipAngel (.*).zip/,
      install: 'install'
    },
    'Clipboard Master': {
      url: 'https://www.clipboardmaster.com/support/revision-history.html',
      version: '.neos-contentcollection>header',
      changelog: '.neos-contentcollection>ul',
      download: 'https://www.jumpingbytes.com/down/ClipboardMasterInst.exe'
    },
    ClipClip: {
      site: {
        download: 'https://clipclip.com/'
      },
      versionChoice: 'https://clipclip.com/download',
      install: 'install_inno'
    },
    ClipCube: {
      site: {
        download: 'http://zodcode.com/clipcube/download'
      },
      versionChoice: ['http://zodcode.com/clipcube/download/stable', 'ClipCube-(.*?).zip'],
      install: 'install_zipped_single',
      other: {
        dev: {
          versionChoice: ['http://zodcode.com/clipcube/download/dev', 'ClipCube-(.*?).zip']
        }
      }
    },
    Clipdiary: {
      commercial: 1,
      url: 'http://clipdiary.com/download.php',
      version: '#DownloadPortableDownloadPage',
      changelog: '#wnew .panel-body',
      download: '#DownloadPortableDownloadPage',
      install: 'install'
    },
    Clipjump: {
      site: {
        GitHub: 'https://github.com/aviaryan/Clipjump/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: 'install'
    },
    ClipX: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Clipboard/ClipX.shtml'
      },
      downloadChoice: 'Stable',
      install: ['install_zipped_single', 'clipx.exe'],
      other: {
        beta: {
          versionChoice: /(.*Beta.*)/,
          downloadChoice: 'x64 Beta'
        }
      }
    },
    Cloak: {
      site: {
        GitHub: 'https://github.com/cbeuw/Cloak/releases/latest'
      },
      versionChoice: 'ck-client-windows-amd64(.*).exe',
      install: 'install_single'
    },
    cloc: {
      site: {
        GitHub: 'https://github.com/AlDanial/cloc/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    Clonezilla: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/clonezilla/files/clonezilla_live_stable/'
      },
      changelog: ['https://clonezilla.org/downloads/stable/changelog.php', '[name="generator"]+p+ul'],
      downloadChoice: [null, /clonezilla-live-(.*?)-amd64.iso/],
      install: 'install',
      other: {
        alternative: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/clonezilla/files/clonezilla_live_alternative/'
          }
        }
      }
    },
    'cloud-torrent': {
      site: {
        GitHub: 'https://github.com/jpillora/cloud-torrent/releases/latest'
      },
      versionChoice: 'windows_amd64.exe.gz',
      install: 'install_zipped_single'
    },
    CloudBuckIt: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/File-Sharing/CloudBuckit.shtml'
      },
      install: ['install_msi', null, 'CloudBuckitApp.exe']
    },
    CloudflareScanner: {
      site: {
        GitHub: 'https://github.com/Spedoske/CloudflareScanner/releases/latest'
      },
      versionChoice: 'Windows_x64.tar.gz',
      install: ['install_zipped', 'install']
    },
    CloudflareSpeedTest: {
      site: {
        GitHub: 'https://github.com/XIU2/CloudflareSpeedTest/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install'
    },
    CloudShot: {
      url: 'https://cloudshot.com/whatIsNew.html',
      version: 'h5',
      changelog: '.panel-body',
      download: 'https://cloudshot.com/downloads/release/CloudShotSetup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    Clover: {
      url: 'http://cn.ejie.me/download.html',
      version: (res, $) => res.body.match(/self.location='(.*?)';/)[1].match(/clover@(.*?).exe/)[1],
      changelog: ['http://cn.ejie.me/', '.simpleTabs>div:nth-child(3)>ul'],
      download: (res, $) => res.body.match(/self.location='(.*?)';/)[1]
    },
    clumsy: {
      site: {
        GitHub: 'https://github.com/jagt/clumsy/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/jagt/clumsy/releases'
          }
        }
      }
    },
    CMAK: {
      site: {
        GitHub: 'https://github.com/yahoo/CMAK/releases/latest'
      },
      install: 'install'
    },
    Cmder: {
      site: {
        GitHub: 'https://github.com/cmderdev/cmder/releases/latest'
      },
      versionChoice: 'cmder.7z',
      install: 'install',
      other: {
        mini: {
          versionChoice: 'mini.zip'
        }
      }
    },
    'CMWTAT Digital Edition': {
      site: {
        GitHub: 'https://github.com/TGSAN/CMWTAT_Digital_Edition/releases/latest'
      },
      install: 'install_zipped_single'
    },
    CnCrypt: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_217731.html'
      },
      install: 'install_single'
    },
    'Cocoon Browser': {
      commercial: 2,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Browsers/Cocoon-Browser.shtml'
      },
      download: 'https://getcocoon.com/downloads/vwc_cocoon.exe',
      install: ['install', null, 'core']
    },
    Codecov: {
      site: {
        GitHub: 'https://github.com/codecov/codecov-exe/releases/latest'
      },
      versionChoice: 'win7-x64.zip',
      install: 'install'
    },
    CodeExpander: {
      site: {
        GitHub: 'https://github.com/oncework/codeexpander/releases/latest'
      },
      versionChoice: ['.exe', 'Setup.(.*?).exe', false, i => i.assets.map(j => j.name).join('\n')],
      install: 'install'
    },
    CodeNotes: {
      site: {
        GitHub: 'https://github.com/lauthieb/code-notes/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Colorist: {
      site: {
        GitHub: 'https://github.com/joedrago/colorist/releases/latest'
      },
      versionChoice: 'colorist-v(.*?)-win10.zip',
      install: 'install_zipped_single'
    },
    'ColorSchemer Studio': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/WEB-Design/Web-Design-related/Color-Schemer-Studio.shtml'
      },
      install: 'install_inno'
    },
    'Combined Community Codec Pack': {
      url: 'http://www.cccp-project.net/download.php?type=cccp64',
      version: ['a[href$=".exe"]', 'href', /64bit-(.*?).exe$/],
      download: 'a[href$=".exe"]',
      install: 'install_inno'
    },
    'Combined Windows Privacy Utilities': {
      site: {
        GitHub: 'https://github.com/bongochong/CWP-Utilities/releases/latest'
      },
      versionChoice: 'CWPU-Stable.zip',
      install: 'install'
    },
    ComicRackKeygen: {
      site: {
        GitHub: 'https://github.com/maforget/ComicRackKeygen/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Comics Enhancer Pro': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Multimedia/Graphics/Windows-Portable-Applications-Portable-Comics-Enhancer-Pro.shtml'
      },
      install: 'install_zipped_single'
    },
    ComicsViewer: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Multimedia/Graphics/Portable-ComicsViewer.shtml'
      },
      install: 'install'
    },
    ComicTagger: {
      site: {
        GitHub: 'https://github.com/comictagger/comictagger/releases/latest'
      },
      versionChoice: '.exe.zip',
      install: 'install_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/comictagger/comictagger/releases'
          },
          versionChoice: '.exe.zip'
        }
      }
    },
    CommaFeed: {
      site: {
        GitHub: 'https://github.com/Athou/commafeed/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    CommandTrayHost: {
      site: {
        GitHub: 'https://github.com/rexdf/CommandTrayHost/releases/latest'
      },
      install: ['install_zipped_single', 'x64\\\\CommandTrayHost.exe']
    },
    ConEmu: {
      site: {
        GitHub: 'https://github.com/Maximus5/ConEmu/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    connect: {
      site: {
        BitBucket: 'https://api.bitbucket.org/2.0/repositories/gotoh/connect/downloads'
      },
      versionChoice: /connect-([\d.]+)-win32-msvc.zip/,
      install: 'install_zipped_single'
    },
    ConPtyShell: {
      site: {
        GitHub: 'https://github.com/antonioCoco/ConPtyShell/releases/latest'
      },
      install: 'install'
    },
    'Console Calculator': {
      commercial: 3,
      url: 'http://www.zoesoft.com/console-calculator/ccalc-downloads/',
      version: 'h3',
      changelog: ['https://www.zoesoft.com/blog/', '.post-intro>ul'],
      download: 'http://www.zoesoft.com/downloads/CCalc.zip',
      install: 'install_zipped_single'
    },
    ConsoleZ: {
      site: {
        GitHub: 'https://github.com/cbucher/console/releases/latest'
      },
      versionChoice: 'ConsoleZ.x64.(.*?).zip',
      install: 'install'
    },
    containerd: {
      site: {
        GitHub: 'https://github.com/containerd/containerd/releases/latest'
      },
      versionChoice: 'containerd-(.*?)-windows-amd64.tar.gz',
      install: ['install_zipped', 'install'],
      other: {
        nightly: {
          site: {
            'GitHub-actions': 'https://github.com/containerd/containerd/releases/latest'
          },
          versionChoice: 'windows_amd64',
          install: 'install'
        }
      }
    },
    ContextMenuManager: {
      site: {
        GitHub: 'https://github.com/BluePointLilac/ContextMenuManager/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    ConyEdit: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_622621.html'
      },
      install: ['install_zipped', 'install_inno_single', '.exe']
    },
    coodesker: {
      site: {
        GitHub: 'https://github.com/coodesker/coodesker-desktop/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    },
    'Cool Reader': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/crengine/files/CoolReader3/cr3-newui-opengl/'
      },
      versionChoice: /cr3-win32-qt-opengl-(.*).zip/,
      install: 'install'
    },
    CoolFormat: {
      site: {
        GitHub: 'https://github.com/akof1314/CoolFormat/releases/latest'
      },
      versionChoice: '.rar',
      install: 'install_zipped_single'
    },
    CopyQ: {
      site: {
        GitHub: 'https://github.com/hluk/CopyQ/releases/latest'
      },
      install: 'install'
    },
    CopyTranslator: {
      site: {
        GitHub: 'https://github.com/CopyTranslator/CopyTranslator/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/CopyTranslator/CopyTranslator/releases'
          },
          versionChoice: '.exe'
        }
      }
    },
    CoreDNS: {
      site: {
        GitHub: 'https://github.com/coredns/coredns/releases/latest'
      },
      versionChoice: /windows_amd64.tgz$/,
      downloadChoice: [/windows_amd64.tgz$/, '.tgz'],
      install: ['install_zipped', 'install_zipped_single']
    },
    CoreTemp: {
      useProxy: true,
      url: 'https://www.alcpu.com/CoreTemp/',
      version: '[style="height: 21px;"]>font>b',
      changelog: '[valign="top"]+tr>td>p:contains("Version")',
      download: 'https://www.alcpu.com/CoreTemp/Core-Temp-setup.exe',
      install: 'install_inno_type'
    },
    coreutils: {
      site: {
        GitHub: 'https://github.com/uutils/coreutils/releases/latest'
      },
      versionChoice: 'x86_64-pc-windows-msvc.zip',
      install: 'install_zipped_single'
    },
    cow: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/cyfdecyf/cow/releases/latest'
      },
      versionChoice: 'win64(.*).zip',
      install: 'install'
    },
    'CPU Core Analyzer': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/cpu_core_analyzer,1.html'
      },
      install: 'install'
    },
    CRONw: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/cronw/files/CRONw%202.x%20-%20and%20quot_Sapphire%20Gloss%20and%20quot_/'
      },
      versionChoice: /CRONw (.*)/,
      downloadChoice: [null, '.zip'],
      install: 'install'
    },
    Crypter: {
      site: {
        GitHub: 'https://github.com/HR/Crypter/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Crypto-Notepad': {
      site: {
        GitHub: 'https://github.com/Crypto-Notepad/Crypto-Notepad/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install_zipped_single'
    },
    CrySearch: {
      url: 'https://www.crysearch.nl/index.php?p=downloads',
      version: 'p+h4',
      changelog: ['https://www.crysearch.nl/index.php?p=relnotes', '.content>ul'],
      download: '[href$=".zip"]',
      install: ['install', null, 'x64']
    },
    CubicExplorer: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/File-managers/CubicExplorer.shtml'
      },
      install: 'install_nsis'
    },
    curl: {
      url: 'https://curl.haxx.se/windows/',
      version: ['.relatedbox+p+p', 'text', /Build: (.*?)\s+/],
      changelog: {
        url: 'https://curl.haxx.se/changes.html',
        selector: '.contents',
        attr: 'text',
        match: /Fixed in [\d.]+/,
        split: true
      },
      download: 'a.windl[href$="win64-mingw.zip"]',
      install: ['install', null, '*\\bin']
    },
    CuteFTP: {
      commercial: 3,
      url: 'https://www.globalscape.com/products/cute-ftp',
      version: '.change-log-title-wrapper',
      changelog: '.log_wrapper',
      download: 'http://installer.globalscape.com/pub/cuteftp/cuteftp.exe'
    },
    CuteHttpFileServer: {
      url: 'http://iscute.cn/chfs',
      version: '[href*="chfs-windows-x64"][href$=".zip"]',
      changelog: {
        url: 'http://iscute.cn/tar/chfs/2.0/chfs-changelog.txt',
        selector: 'body',
        attr: 'text',
        match: /^版本：v[\d.]+/,
        split: true
      },
      download: '[href*="chfs-windows-x64"][href$=".zip"]',
      install: 'install_zipped_single',
      other: {
        gui: {
          download: '[href*="gui-chfs-windows"][href$=".zip"]'
        }
      }
    },
    Cyberduck: {
      url: 'https://cyberduck.io/changelog/',
      version: 'strong>a',
      changelog: '.list-unstyled',
      download: '[href$=".msi"]',
      install: ['install_msi', null, 'Cyberduck.exe']
    },
    'Cydia Impactor': {
      site: {
        download: 'https://cydia.saurik.com/'
      },
      versionChoice: 'https://cydia.saurik.com/api/latest/2',
      install: 'install'
    },
    CyDownload: {
      site: {
        GitHub: 'https://github.com/borishonman/cydownload/releases/latest'
      },
      versionChoice: 'win32.zip',
      install: 'install'
    },
    Cygwin: {
      url: 'http://mirrors.kernel.org/sourceware/cygwin/x86_64/',
      version: (res, $) => res.body.match(/<a href="release\/">release\/<\/a>\s+(\d+[\da-zA-Z\s:-]+\d+)\s/)[1].replace(/:|\s+/g, '-'),
      download: 'https://www.cygwin.com/setup-x86_64.exe',
      install: ['install_cli', null, ['--root', '{output}', '--root', '{dir}', '--no-admin', '--no-shortcuts', '--local-package-dir', '{dir}\\packages', '--wait', '--only-site', '--site', 'http://mirrors.ustc.edu.cn/cygwin/', '--upgrade-also', '--quiet-mode', '--verbose', '--wait'], { wait: true }],
      other: {
        setup: {
          install: 'install_single'
        }
      }
    }
  }
};
