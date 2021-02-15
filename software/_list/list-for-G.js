'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'G Desktop Suite': {
      site: {
        GitHub: 'https://github.com/alexkim205/G-Desktop-Suite/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Galaxy Buds Client': {
      site: {
        GitHub: 'https://github.com/ThePBone/GalaxyBudsClient/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    },
    'gallery-dl': {
      site: {
        GitHub: 'https://github.com/mikf/gallery-dl/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Gameboy.Live': {
      site: {
        GitHub: 'https://github.com/HFO4/gameboy.live/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install_zipped_single'
    },
    Ganache: {
      site: {
        GitHub: 'https://github.com/trufflesuite/ganache/releases/latest'
      },
      versionChoice: /.exe$/,
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/trufflesuite/ganache/releases'
          }
        }
      }
    },
    GARbro: {
      site: {
        GitHub: 'https://github.com/morkt/GARbro/releases/latest'
      },
      versionChoice: '.rar',
      install: 'install'
    },
    GDevelop: {
      site: {
        GitHub: 'https://github.com/4ian/GDevelop/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Geany: {
      url: 'https://www.geany.org/Download/Releases',
      version: 'a[href$="_setup.exe"]',
      changelog: ['https://www.geany.org/documentation/releasenotes/', '#content-main'],
      download: 'a[href$="_setup.exe"]',
      install: 'install_nsis'
    },
    gedit: {
      url: 'http://ftp.gnome.org/pub/GNOME/binaries/win64/gedit/',
      version: ['a[href^="gedit-x86_64"][href$=".msi"]', 'href', /-(\d+[\d.]+\d+).msi$/],
      download: 'a[href^="gedit-x86_64"][href$=".msi"]',
      install: ['install_msi', null, 'bin/gedit.exe']
    },
    Geekbench: {
      commercial: 3,
      url: 'https://www.geekbench.com/download/windows/',
      version: ['.intro-description>a', 'href', /Geekbench-(.*?)-WindowsSetup.exe/],
      changelog: ['https://www.primatelabs.com/release/geekbench5/', 'ul'],
      download: '.intro-description>a',
      install: 'install_nsis_cli'
    },
    'GeForce Experience': {
      url: 'https://www.geforce.cn/drivers',
      version: ['[href*="GeForce_Experience"][href$=".exe"]', 'href'],
      download: '[href*="GeForce_Experience"][href$=".exe"]',
      install: 'install'
    },
    Gemini: {
      site: {
        GitHub: 'https://github.com/Gabe-H/Gemini/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    GestureSign: {
      site: {
        GitHub: 'https://github.com/TransposonY/GestureSign/releases/latest'
      },
      versionChoice: 'Setup-(.*).zip',
      install: ['install_zipped', 'install_nsis']
    },
    'GetGo Download Manager': {
      url: 'https://www.getgosoft.com/',
      version: '.paragh[id]>p',
      changelog: '.paragh[id]',
      download: 'http://downloads.getgosoft.com/GetGoDMSetup64.exe',
      install: 'install_nsis'
    },
    GetWindowsKernelExploitsKB: {
      site: {
        GitHub: 'https://github.com/Ch1ngg/GetWindowsKernelExploitsKB/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install'
    },
    Geyser: {
      site: {
        'GitHub-actions': 'https://github.com/GeyserMC/Geyser'
      },
      versionChoice: 'Geyser Standalone',
      install: 'install_zipped_single'
    },
    gfile: {
      site: {
        GitHub: 'https://github.com/Antonito/gfile/releases/latest'
      },
      versionChoice: 'Windows_x86_64.zip',
      install: 'install_zipped_single'
    },
    'Ghost In The Logs': {
      site: {
        GitHub: 'https://github.com/bats3c/Ghost-In-The-Logs/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    Ghost: {
      site: {
        GitHub: 'https://github.com/TryGhost/Ghost-Desktop/releases/latest'
      },
      versionChoice: 'windows-desktop.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    GhostBuster: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/ghostbuster,1.html'
      },
      install: 'install_single'
    },
    ghostwriter: {
      site: {
        GitHub: 'https://github.com/michelolvera/vs-ghostwriter/releases/latest'
      },
      versionChoice: 'portable.7z',
      install: 'install'
    },
    ghq: {
      site: {
        GitHub: 'https://github.com/x-motemen/ghq/releases/latest'
      },
      versionChoice: 'ghq_windows_amd64.zip',
      install: 'install'
    },
    GifCam: {
      url: 'https://blog.bahraniapps.com/gifcam/',
      version: 'a[title="GifCam.zip"]',
      download: 'https://www.bahraniapps.com/apps/gifcam/gifcam.php',
      install: 'install_zipped_single'
    },
    Gifsicle: {
      url: 'https://eternallybored.org/misc/gifsicle/',
      version: 'a[href$="win64.zip"]',
      download: 'a[href$="win64.zip"]',
      install: 'install'
    },
    gifski: {
      site: {
        GitHub: 'https://github.com/ImageOptim/gifski/releases/latest'
      },
      versionChoice: '.tar.xz',
      install: ['install_zipped', 'install_zipped_single']
    },
    gImageReader: {
      site: {
        GitHub: 'https://github.com/manisandro/gImageReader/releases/latest'
      },
      versionChoice: 'x86_64.exe',
      install: 'install_nsis',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/manisandro/gImageReader/releases'
          },
          versionChoice: ['x86_64.exe', null, null, 'published_at']
        }
      }
    },
    GIMP: {
      url: 'https://www.gimp.org/downloads/',
      version: '#pushPage > section > div > div > div > p > b',
      changelog: ['https://www.gimp.org/news/', '.entry-content'],
      download: '#win-download-link',
      install: ['install_inno_type', ['^\\lib\\python2.7', '^\\lib\\gimp\\2.0\\python', '^\\var']],
      afterInstall: info => {
        const fs = require('fs');
        const path = require('path');

        fs.appendFileSync(path.resolve(info.parentPath, 'lib/gimp/2.0/environ', 'default.env'), `PATH=${info.parentPath}\\bin;${info.parentPath}\\32\\bin\nPYTHONPATH=${info.parentPath}\\32\\lib\\gimp\\2.0\\python;${info.parentPath}\\lib\\gimp\\2.0\\plug-ins\\python-console`);

        fs.appendFileSync(path.resolve(info.parentPath, 'lib/gimp/2.0/environ', 'pygimp.env'), '__COMPAT_LAYER=HIGHDPIAWARE');

        fs.appendFileSync(path.resolve(info.parentPath, 'lib/gimp/2.0/interpreters', 'pygimp.interp'), `python=${info.parentPath}\\32\\bin\\pythonw.exe\npython2=${info.parentPath}\\32\\bin\\pythonw.exe\n/usr/bin/python=${info.parentPath}\\32\\bin\\pythonw.exe\n:Python:E::py::python:`);
      }
    },
    gInk: {
      site: {
        GitHub: 'https://github.com/geovens/gInk/releases/latest'
      },
      install: 'install'
    },
    'Git Extensions': {
      site: {
        GitHub: 'https://github.com/gitextensions/gitextensions/releases/latest'
      },
      versionChoice: 'Portable(.*).zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/gitextensions/gitextensions/releases'
          }
        }
      }
    },
    'Git Switch': {
      site: {
        GitHub: 'https://github.com/pluralsight/git-switch-electron/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: 'install'
    },
    'Git to Revison': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/Git%20to%20Revison/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install'
    },
    'Git-it': {
      site: {
        GitHub: 'https://github.com/jlord/git-it-electron/releases/latest'
      },
      versionChoice: 'Win-ia32.zip',
      install: 'install'
    },
    Git: {
      site: {
        GitHub: 'https://github.com/git-for-windows/git/releases/latest'
      },
      versionChoice: 'PortableGit(.*)64-bit.7z.exe',
      install: 'install',
      other: {
        MinGit: {
          versionChoice: 'MinGit(.*)64-bit.zip'
        }
      }
    },
    Gitea: {
      site: {
        GitHub: 'https://github.com/go-gitea/gitea/releases/latest'
      },
      versionChoice: 'amd64.exe$',
      install: 'install_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/go-gitea/gitea/releases'
          }
        }
      }
    },
    GitInfoExplorerExtension: {
      site: {
        GitHub: 'https://github.com/pedoc/GitInfoExplorerExtension/releases/latest'
      },
      install: 'install'
    },
    GitKraken: {
      commercial: 1,
      url: 'https://support.gitkraken.com/release-notes/current/',
      version: '[id^="version"]',
      changelog: {
        selector: '.md-content',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'https://release.gitkraken.com/win64/GitKrakenSetup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    GitNote: {
      site: {
        GitHub: 'https://github.com/zhaopengme/gitnote/releases/latest'
      },
      versionChoice: 'setup(.*).exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    glogg: {
      url: 'https://glogg.bonnefon.org/files/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '[href$="-x86_64-setup.exe"]',
        attr: 'text',
        match: /glogg-v(.*?)-x86_64-setup.exe/,
        sort: true
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '[href$="-x86_64-setup.exe"]',
        sort: true
      }),
      install: 'install_nsis'
    },
    Glow: {
      site: {
        GitHub: 'https://github.com/charmbracelet/glow/releases/latest'
      },
      versionChoice: 'Windows_x86_64.zip',
      install: 'install_zipped_single'
    },
    gMKVExtractGUI: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/gmkvextractgui/files/'
      },
      downloadChoice: [null, '.7z'],
      install: 'install'
    },
    Gnirehtet: {
      site: {
        GitHub: 'https://github.com/Genymobile/gnirehtet/releases/latest'
      },
      versionChoice: 'rust-win64(.*).zip',
      install: 'install',
      other: {
        java: {
        },
        java8: {
          versionChoice: 'java(.*)java8.zip'
        }
      }
    },
    GnuCash: {
      url: 'https://gnucash.org/download.phtml',
      version: ['a[href$=".exe"]', 'href', /gnucash-(.*?).setup.exe/],
      download: 'a[href$=".exe"]',
      install: 'install_inno'
    },
    GnuPG: {
      url: 'https://www.gnupg.org/download/index.html',
      version: '#text-1-1 > table > tbody:nth-child(3) > tr > td:nth-child(2)',
      changelog: ['https://www.gnupg.org/download/release_notes.html', 'h3[id]+div'],
      download: 'a[href$=".exe"][href*="w32"]',
      install: 'install_nsis'
    },
    'go-shadowsocks2': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/shadowsocks/go-shadowsocks2/releases'
      },
      install: 'install'
    },
    GoAdmin: {
      site: {
        GitHub: 'https://github.com/GoAdminGroup/go-admin/releases/latest'
      },
      versionChoice: 'windows_x86_64_v(.*?).zip',
      install: 'install_zipped_single'
    },
    GoBoy: {
      site: {
        GitHub: 'https://github.com/Humpheh/goboy/releases/latest'
      },
      versionChoice: 'GoBoy.Windows.zip',
      install: 'install_zipped_single'
    },
    Godot: {
      url: 'https://godotengine.org/download/windows',
      version: ['.download>a[href$="win64.exe.zip"]', 'href', /godotengine\/(.*?)\//],
      download: '.download>a[href$="win64.exe.zip"]',
      install: 'install',
      other: {
        mono: {
          version: ['.download>a[href$="win64.zip"][href*="/mono/"]', 'href', /godotengine\/(.*?)\//],
          download: '.download>a[href$="win64.zip"][href*="/mono/"]'
        }
      }
    },
    goflyway: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/coyove/goflyway/releases/latest'
      },
      versionChoice: 'goflyway_windows_amd64.zip',
      install: 'install'
    },
    'GOG Galaxy': {
      url: 'https://remote-config.gog.com/components/webinstaller?component_version=2.0.0',
      version: (res, $) => res.json.content.windows.version,
      download: (res, $) => res.json.content.windows.downloadLink,
      install: 'install_inno_cli',
      other: {
        1: {
          url: 'https://remote-config.gog.com/components/webinstaller?component_version=1.0.0'
        }
      }
    },
    Gogs: {
      site: {
        GitHub: 'https://github.com/gogs/gogs/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install'
    },
    'golangci-lint': {
      site: {
        GitHub: 'https://github.com/golangci/golangci-lint/releases/latest'
      },
      versionChoice: 'windows-amd64.zip',
      install: 'install_zipped_single'
    },
    GoldenDict: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/goldendict/files/goldendict/1.0/'
      },
      versionChoice: /GoldenDict-([\d.-]+)-Install.exe/,
      install: 'install_nsis',
      other: {
        early: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/goldendict/files/early%20access%20builds/'
          },
          versionChoice: /GoldenDict-([\d.]+-RC[\d-]+)-.*Install.exe/
        }
      }
    },
    GoodSync: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Back-Up-and-Recovery/GoodSync.shtml'
      },
      fixedPath: '%ProgramFiles%\\Siber Systems\\GoodSync\\GoodSync.exe',
      install: 'install_cli_s'
    },
    'Google-Play-Music': {
      site: {
        GitHub: 'https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-/releases/latest'
      },
      versionChoice: 'Setup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    GoogleTasks: {
      site: {
        GitHub: 'https://github.com/wixiweb/googletasks-desktop/releases'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    GoProxy: {
      site: {
        GitHub: 'https://github.com/alexhua/goproxy-ci/releases/latest'
      },
      versionChoice: 'windows_amd64(.*).7z',
      install: 'install'
    },
    GOST: {
      site: {
        GitHub: 'https://github.com/ginuerzh/gost/releases/latest'
      },
      versionChoice: 'gost-windows-amd64-.*?.zip',
      install: 'install_zipped_single'
    },
    GotoX: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/SeaHOH/GotoX/releases/latest'
      },
      versionChoice: 'win_amd64.7z',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/SeaHOH/GotoX/releases'
          }
        }
      }
    },
    Gow: {
      site: {
        GitHub: 'https://github.com/bmatzelle/gow/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    },
    GParted: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/gparted/files/gparted-live-stable/'
      },
      downloadChoice: [null, /gparted-live-(.*?)-amd64.iso/],
      changelog: ['https://gparted.org/news.php', '.newsbody'],
      other: {
        test: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/gparted/files/gparted-live-testing/'
          }
        }
      }
    },
    Gpg4win: {
      url: 'https://gpg4win.org/change-history.html',
      version: '#main>h2',
      changelog: '#main>ul',
      download: 'https://files.gpg4win.org/gpg4win-latest.exe',
      install: 'install_nsis'
    },
    gping: {
      site: {
        GitHub: 'https://github.com/orf/gping/releases/latest'
      },
      versionChoice: 'Windows-x86_64.zip',
      install: 'install_zipped_single'
    },
    'GPU Temp': {
      site: {
        SoftSea: 'http://www.softsea.com/review/GPU-Temp.html'
      },
      install: 'install_inno'
    },
    'GPU-Z': {
      site: {
        TechPowerUp: 'https://www.techpowerup.com/download/techpowerup-gpu-z/'
      },
      install: 'install_single'
    },
    GrabIt: {
      commercial: 2,
      url: 'https://shemes.com/index.php?p=download',
      version: ['td>[href$=".exe"]', 'text', /GrabIt (.*)/],
      download: 'td>[href$=".exe"]',
      install: 'install_inno_type'
    },
    Grammarly: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/Grammarly-Grammarly.shtml'
      },
      download: 'https://download-editor.grammarly.com/windows/GrammarlySetup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    GraphicsMagick: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/graphicsmagick/files/graphicsmagick-binaries/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, 'GraphicsMagick-(.*)-Q16-win64-dll.exe'],
      install: 'install_inno'
    },
    GraphStudioNext: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/graphstudionext,1.html'
      },
      install: 'install'
    },
    grepWin: {
      site: {
        GitHub: 'https://github.com/stefankueng/grepWin/releases/latest'
      },
      versionChoice: 'x64.msi',
      install: ['install_msi', null, 'grepWin.exe']
    },
    Grid: {
      site: {
        GitHub: 'https://github.com/majorworld/Grid/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    Gridea: {
      site: {
        GitHub: 'https://github.com/getgridea/gridea/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    gron: {
      site: {
        GitHub: 'https://github.com/tomnomnom/gron/releases'
      },
      versionChoice: 'windows-amd64-.*.zip',
      install: 'install_zipped_single'
    },
    GroupMe: {
      site: {
        GitHub: 'https://github.com/dcrousso/GroupMe/releases/latest'
      },
      versionChoice: 'windows(.*).zip',
      install: 'install'
    },
    Grub2Win: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Boot-Manager-Disk/Grub2Win.shtml'
      }
    },
    gsudo: {
      site: {
        GitHub: 'https://github.com/gerardog/gsudo/releases/latest'
      },
      install: 'install_zipped_single'
    },
    'GTK+': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/gtk-win/files/GTK%2B%20Runtime%20Environment/'
      },
      downloadChoice: [null, '-ash.exe'],
      install: 'install_nsis_cli'
    },
    gVim: {
      site: {
        GitHub: 'https://github.com/vim/vim-win32-installer/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: 'install'
    }
  }
};
