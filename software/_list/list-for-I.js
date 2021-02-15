'use strict';

let downloadUrl;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    i4Helper: {
      url: 'https://www.i4.cn/pro_pc.html',
      version: '.windowsbtn font',
      download: '.windowsbtn',
      install: 'install'
    },
    IAMy: {
      site: {
        GitHub: 'https://github.com/99designs/iamy/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Icaros Shell Extensions': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Shell-Replacements/Icaros-Shell-Extensions.shtml'
      },
      install: 'install_inno',
      other: {
        beta: {
          versionChoice: 'Beta',
          downloadChoice: 'Beta'
        }
      }
    },
    IdCardGenerator: {
      site: {
        GitHub: 'https://github.com/airob0t/idcardgenerator/releases/latest'
      },
      versionChoice: ['.exe', 'win_v(.*)'],
      install: 'install_single'
    },
    'IDM Backup Manager': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Back-Up-and-Recovery/IDM-Backup-Manager.shtml'
      },
      install: ['install_zipped', 'install_ai']
    },
    'IGdm Messenger': {
      site: {
        GitHub: 'https://github.com/igdmapps/igdm/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    iisnode: {
      site: {
        GitHub: 'https://github.com/Azure/iisnode/releases/latest'
      },
      versionChoice: 'iisnode-full-v(.*?)-x64.msi',
      install: 'install_msi_cli'
    },
    ILSpy: {
      site: {
        GitHub: 'https://github.com/icsharpcode/ILSpy/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/icsharpcode/ILSpy/releases'
          }
        }
      }
    },
    'Image Uploader': {
      site: {
        GitHub: 'https://github.com/zenden2k/image-uploader/releases/latest'
      },
      versionChoice: 'portable.7z',
      install: 'install'
    },
    ImageGlass: {
      site: {
        GitHub: 'https://github.com/d2phap/ImageGlass/releases/latest'
      },
      install: 'install'
    },
    ImageMagick: {
      url: 'https://imagemagick.org/script/download.php',
      version: ['a[href*="portable"][href$="x64.zip"]', 'href', /(\d+[\d.-]+\d+)/],
      changelog: ['https://www.imagemagick.org/script/changelog.php', 'dt+li+dt+li'],
      download: 'a[href*="portable"][href$="x64.zip"]',
      install: ['install', ['www', 'index.html', 'images']]
    },
    Imagemin: {
      site: {
        GitHub: 'https://github.com/imagemin/imagemin-app/releases'
      },
      versionChoice: 'win32.zip',
      install: 'install'
    },
    Imagine: {
      url: 'http://www.nyam.pe.kr/dev/imagine/',
      version: '.lead .label-default',
      changelog: {
        url: 'http://www.nyam.pe.kr/dev/imagine/doc/Whatsnew.txt',
        match: /^v[\d.]+/,
        split: true
      },
      download: '[data-lang-id="zip_version"]',
      install: 'install'
    },
    iMazing: {
      commercial: 3,
      url: 'https://imazing.com/download',
      version: '.block-download-stats:contains("Download for PC") tbody>tr:nth-child(1)>td:nth-child(2)',
      download: 'https://dl.devmate.com/com.DigiDNA.iMazing2Windows/iMazing2forWindows.exe',
      install: 'install_inno_type'
    },
    ImgBurn: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Data-CD-DVD-Burning/ImgBurn.shtml'
      },
      install: 'install_nsis'
    },
    Inboxer: {
      site: {
        GitHub: 'https://github.com/denysdovhan/inboxer/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    InfraRecorder: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/infrarecorder/files/InfraRecorder/'
      },
      downloadChoice: [null, 'portable_x64.zip'],
      install: 'install'
    },
    Inkscape: {
      url: 'https://inkscape.org/release/',
      version: '#sidecategory>h1',
      changelog: '.notes',
      download: 'https://media.inkscape.org/dl/resources/file/inkscape-{version}-x64.7z',
      install: 'install'
    },
    Inky: {
      site: {
        GitHub: 'https://github.com/inkle/inky/releases/latest'
      },
      versionChoice: 'windows_64.zip',
      install: 'install'
    },
    inlets: {
      site: {
        GitHub: 'https://github.com/inlets/inlets/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install',
      other: {
        pro: {
          commercial: 3,
          site: {
            GitHub: 'https://github.com/inlets/inlets-pro/releases/latest'
          }
        }
      }
    },
    'Inno Setup Unpacker': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/innounp/files/innounp/'
      },
      downloadChoice: [null, /\d+(?!src)\.rar/],
      install: ['install_zipped_single', 'innounp.exe']
    },
    'Inno Setup XDELTA Patch Maker': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Programming/Patchers/Inno-Setup-XDELTA-Patch-Maker.shtml'
      },
      install: 'install'
    },
    'Inno Setup': {
      url: 'http://www.jrsoftware.org/isdl.php',
      version: '.standard tbody>tr:nth-child(2)>td',
      changelog: ['http://www.jrsoftware.org/files/is6-whatsnew.htm', 'p+ul'],
      download: 'http://www.jrsoftware.org/download.php/is.exe',
      install: 'install_inno'
    },
    innoextract: {
      site: {
        GitHub: 'https://github.com/dscharrer/innoextract/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: ['install_zipped_single', 'innoextract.exe']
    },
    'Input Director': {
      url: 'https://www.inputdirector.com/downloads.html',
      version: ['a[href*="downloads/InputDirect"]', 'href', /InputDirector.v([\d.]+).zip/],
      changelog: ['https://www.inputdirector.com/latestnews.html', 'p+ul'],
      download: 'a[href*="downloads/InputDirect"]',
      install: ['install_zipped', 'install_nsis']
    },
    Insomnia: {
      site: {
        GitHub: 'https://github.com/Kong/insomnia/releases/latest'
      },
      versionChoice: 'Insomnia.Core-(.*?).exe$',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
      other: {
        designer: {
          versionChoice: 'Insomnia.Designer-(.*?).exe$'
        },
        core: {}
      }
    },
    Inspire: {
      commercial: 3,
      url: 'https://www.inspire-writer.com/version-history',
      version: '.entry-content>h3',
      changelog: '.entry-content>p',
      download: 'https://www.inspire-writer.com/inspire-app/inspire_windows_setup.exe',
      install: 'install_inno'
    },
    InstallBuilder: {
      url: 'https://installbuilder.com/changelog.html',
      version: '#changelog>h4',
      changelog: '#changelog>h4+ul',
      download: 'https://installbuilder.com/installbuilder-enterprise-{version}-windows-x64-installer.exe',
      other: {
        qt: {
          download: 'https://installbuilder.com/installbuilder-qt-enterprise-{version}-windows-x64-installer.exe'
        }
      }
    },
    InstallMate: {
      commercial: 3,
      url: 'https://tarma.com/installmate/download',
      version: '#content > article > table > tbody > tr:nth-child(2) > td:nth-child(2)',
      changelog: {
        url: '[href$="/whatsnew.htm"]',
        selector: '#page > div.content > table > tbody > tr:nth-child(2) > td:nth-child(3)'
      },
      download: '[href$=".exe"]'
    },
    Instatron: {
      site: {
        GitHub: 'https://github.com/alexdevero/instatron/releases/latest'
      },
      versionChoice: /win32-x64.zip$/,
      install: 'install'
    },
    'Intel Driver & Support Assistant': {
      url: 'https://downloadcenter.intel.com/download/28425',
      version: '.version>.value',
      changelog: 'p:contains("What\'s new")+p+ul',
      download: '.download-btn[href$=".exe"]',
      fixedPath: '%ProgramFiles(x86)%\\Intel\\Driver and Support Assistant\\DSATray.exe',
      install: 'install_cli_s'
    },
    'Internet Download Accelerator': {
      commercial: 1,
      url: 'https://www.westbyte.com/ida/index.phtml?page=download',
      version: '.mainbig01',
      changelog: ['https://www.westbyte.com/ida/index.phtml?page=history&lng=English', '[width="162"]+td p+p'],
      download: 'https://www.westbyte.com/ida/download/idasetup.exe',
      install: 'install_inno'
    },
    'Internet Download Manager': {
      commercial: 3,
      url: 'https://www.internetdownloadmanager.com/news.html',
      version: ['.style28', 'text', /version ([\d.]+) Build (\d+)/, '$1.$2'],
      changelog: '.style12+ul',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.internetdownloadmanager.com/download.html', fns, 'a[href$=".exe"]'),
      install: ['install_cli', null, ['/skipdlgs'], { wait: true }]
    },
    'Internet Friendly Media Encoder': {
      site: {
        GitHub: 'https://github.com/Anime4000/IFME/releases'
      },
      install: 'install'
    },
    'IO Ninja': {
      commercial: 3,
      url: 'https://ioninja.com/downloads.html',
      version: '[href$="windows-amd64.7z"]',
      changelog: ['https://ioninja.com/history.html', '.main>div>ul'],
      download: '[href$="windows-amd64.7z"]',
      install: 'install'
    },
    'Iperius Backup': {
      commercial: 3,
      url: 'https://www.iperiusbackup.com/news.aspx',
      version: '.blogPost>h3',
      changelog: '.blogPost',
      download: 'https://www.iperiusbackup.fr/dsib.aspx',
      install: 'install_inno'
    },
    iPhotoDraw: {
      url: 'https://www.iphotodraw.com/',
      version: '.textBrightBold',
      download: 'https://www.iphotodraw.com/download/iPhotoDraw.zip',
      install: 'install'
    },
    IP雷达: {
      url: 'http://www.ipneed.com/main/download.html',
      version: '#download > table > tbody > tr:nth-child(5) > td:nth-child(2)',
      download: 'http://www.ipneed.com/download/IPRadar5.zip',
      install: 'install'
    },
    iRead: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/5/detail_3425.html'
      },
      install: 'install_inno'
    },
    IrfanView: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Viewers/IrfanView.shtml'
      },
      install: 'install'
    },
    Iris: {
      site: {
        'GitHub-code': 'https://github.com/danielng01/Iris-Builds/tree/master/Windows'
      },
      versionChoice: /Iris-(.*?).exe/,
      install: 'install_nsis'
    },
    iSlide: {
      url: 'https://www.islide.cc/release-notes',
      version: '[style="color: #cc4b4a;"]',
      changelog: '.wpb_content_element.wpb_text_column',
      download: 'https://api.islide.cc/download/package',
      install: 'install_ai'
    },
    ISx: {
      url: 'https://github.com/lifenjoiner/ISx/releases/latest',
      version: ['.muted-link.css-truncate', 'text', /v(.*)/],
      changelog: '.release-header+.markdown-body',
      download: 'a[href$="bin.zip"]',
      install: 'install_zipped_single'
    },
    itch: {
      url: 'https://broth.itch.ovh/itch/windows-amd64/LATEST',
      version: 'html',
      download: 'https://broth.itch.ovh/itch/windows-amd64/{version}/archive/default',
      install: 'install'
    },
    'iTools Airplayer': {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/6/detail_12666.html'
      },
      install: 'install_single'
    },
    iTools: {
      url: 'https://www.itools.cn/',
      version: async (res, $, fns, choice) => {
        const res1 = await fns.reqHEAD('https://update2.itools.cn/api/v1/redirect?p=itools4&c=pc_Thinksky');
        downloadUrl = res1.request.uri.href;
        return downloadUrl.match(/itoolssetup_([\d.]+).exe/)[1];
      },
      download: () => downloadUrl,
      install: 'install',
      other: {
        3: {
          version: ['[data-type="itools3_download"]', 'href', /itoolssetup_([\d.]+).exe/],
          download: '[data-type="itools3_download"]'
        }
      }
    }
  }
};
