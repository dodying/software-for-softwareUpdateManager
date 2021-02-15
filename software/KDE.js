'use strict';

let url;

module.exports = {
  type: 'software-list',
  list: {
    Amarok: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/amarok/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: 'win32'
        }, {
          selector: 'a',
          matchCheck: '.exe'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: 'install_nsis'
    },
    AtCore: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/atcore/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: 'win32.zip$'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: 'install'
    },
    Clazy: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/clazy/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: 'msvc\\d+.zip'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: ['install', null, '*\\bin']
    },
    digiKam: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/digikam/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: /-Win64.exe$/
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: 'install_nsis'
    },
    Elisa: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/elisa/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: '.exe'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: ['install_zipped', 'install', '.7z']
    },
    Falkon: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/falkon/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: /.x64.exe$/
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: 'install_nsis'
    },
    Filelight: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/filelight/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: 'win32.exe$'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: 'install_nsis'
    },
    Kaidan: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/kaidan/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: '.exe'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: 'install_single'
    },
    Kate: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/kate/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        match: /KF(\d+[\d.]+\d+)-64bit.exe/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        matchCheck: /KF(\d+[\d.]+\d+)-64bit.exe/
      }),
      install: 'install_nsis'
    },
    Kdenlive: {
      url: 'https://kdenlive.org/en/download/',
      version: 'a[href$="exe"]',
      download: (res, $) => 'https://mirrors.ustc.edu.cn/kde-application' + new URL($('a[href$="exe"]').eq(0).attr('href')).pathname,
      install: ['install_zipped', 'install', '.7z']
    },
    KDevelop: {
      url: 'https://www.kdevelop.org/download',
      version: 'a[href$="x64-setup.exe"]',
      download: (res, $) => 'https://mirrors.ustc.edu.cn/kde' + new URL($('a[href$="x64-setup.exe"]').eq(0).attr('href')).pathname,
      installType: 'nsis',
      install: ['install_zipped', 'install', '.7z']
    },
    KEXI: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/kexi/win64/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        match: /KEXI_(.*?)_Preview/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true
      }),
      install: ['install_zipped', 'install', 'Win64.exe']
    },
    Kile: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/kile/files/'
      },
      versionChoice: 'kile-(.*?).exe',
      install: ['install_zipped', 'install', '.7z'],
      other: {
        unstable: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/kile/files/unstable/'
          },
          versionChoice: ['kile-(.*)', 'kile-(.*?).exe']
        }
      }
    },
    KMyMoney: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/kmymoney/latest/win64/',
      version: ['a[href$="bin.7z"]', 'text', /mingw64-(.*?)-bin.7z/],
      download: 'a[href$="bin.7z"]',
      install: 'install'
    },
    Krita: {
      url: 'https://krita.org/en/download/krita-desktop/',
      version: ['#sixty-four-bit-windows-installer', 'href'],
      download: (res, $) => 'https://mirrors.ustc.edu.cn/kde' + new URL($('#sixty-four-bit-windows-installer').eq(0).attr('href')).pathname,
      install: 'install_nsis'
    },
    KStars: {
      url: 'https://edu.kde.org/kstars/',
      version: '[href$=".exe"]',
      download: '[href$=".exe"]',
      install: ['install_zipped', 'install', '.7z']
    },
    KTimeTracker: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/ktimetracker/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: 'win64'
        }, {
          selector: 'a',
          matchCheck: '.exe'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: ['install_zipped', 'install', '.7z']
    },
    LabPlot: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/labplot/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: '.exe'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: ['install_zipped', 'install', '.7z']
    },
    Marble: {
      url: 'https://marble.kde.org/install.php',
      version: 'a[href$="x64.exe"]',
      download: (res, $) => 'https://mirrors.ustc.edu.cn/kde-application' + new URL($('a[href$="x64.exe"]').eq(0).attr('href')).pathname,
      install: 'install_inno'
    },
    'Mover-Sizer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/KDE-Mover-Sizer.shtml'
      },
      install: 'install_zipped_single'
    },
    Okular: {
      site: {
        chocolatey: 'https://chocolatey.org/packages/okular'
      },
      install: ['install_zipped', 'install_zipped', 'tools\\\\okular-.*.exe', 'install', '.7z']
    },
    Peruse: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/peruse/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          matchCheck: 'peruse-(.*)-x64.exe'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: 'install_nsis'
    },
    RKWard: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/rkward/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: 'win32'
        }, {
          selector: 'a',
          matchCheck: '.exe$'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: ['install_zipped', 'install', '.7z']
    },
    Simon: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/simon/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: 'win32'
        }, {
          selector: 'a',
          matchCheck: '.exe'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: 'install_nsis'
    },
    snoretoast: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/snoretoast/',
      version: async (res, $, fns, choice) => {
        url = await fns.walkLink(res, fns, {
          selector: 'a',
          sort: true
        }, {
          selector: 'a',
          matchCheck: 'bin'
        }, {
          selector: 'a',
          matchCheck: 'msvc.*?.7z'
        });
        return url.match(/(\d+[\d.]+\d+)/)[1];
      },
      download: async (res, $, fns, choice) => url,
      install: ['install', null, 'bin']
    },
    Trojita: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/trojita/files/win/'
      },
      versionChoice: 'Trojita-Setup-(.*?).exe',
      install: 'install_nsis'
    },
    Umbrello: {
      url: 'https://mirrors.ustc.edu.cn/kde/stable/umbrello/latest/win64/',
      version: ['a[href$="portable.7z"]', 'text', /mingw64-(.*?)-portable.7z/],
      download: 'a[href$="portable.7z"]',
      install: 'install'
    }
  }
};
