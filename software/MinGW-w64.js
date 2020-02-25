'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/'
  },
  downloadChoice: [null, 'win32', 'seh', /x86_64-(.*).7z/],
  install: 'install',
  afterInstall: info => {
    let path = require('path')

    require('fs').copyFileSync(path.resolve(info.parentPath, 'bin', 'mingw32-make.exe'), path.resolve(info.parentPath, 'bin', 'make.exe'))
  },
  other: {
    'win32-seh-x86_64': { downloadChoice: [null, 'win32', 'seh', /x86_64-(.*).7z/] },
    // 'win32-sjlj-i686': { downloadChoice: [null, 'win32', 'sjlj', /i686-(.*).7z/] },
    'win32-sjlj-x86_64': { downloadChoice: [null, 'win32', 'sjlj', /x86_64-(.*).7z/] },
    // 'win32-dwarf-i686': { downloadChoice: [null, 'win32', 'dwarf', /i686-(.*).7z/] },
    'posix-sjlj-x86_64': { downloadChoice: [null, 'posix', 'sjlj', /x86_64-(.*).7z/] },
    // 'posix-sjlj-i686': { downloadChoice: [null, 'posix', 'sjlj', /i686-(.*).7z/] },
    // 'posix-dwarf-i686': { downloadChoice: [null, 'posix', 'dwarf', /i686-(.*).7z/] },
    'posix-seh-x86_64': { downloadChoice: [null, 'posix', 'seh', /x86_64-(.*).7z/] }
  }
}
module.exports = data
