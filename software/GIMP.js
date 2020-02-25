'use strict'

let data = {
  url: 'https://www.gimp.org/downloads/',
  version: '#pushPage > section > div > div > div > p > b',
  changelog: ['https://www.gimp.org/news/', '.entry-content'],
  download: '#win-download-link',
  install: ['install_inno_type', ['^\\lib\\python2.7', '^\\lib\\gimp\\2.0\\python', '^\\var']],
  afterInstall: info => {
    let fs = require('fs')
    let path = require('path')

    fs.appendFileSync(path.resolve(info.parentPath, 'lib/gimp/2.0/environ', 'default.env'), `PATH=${info.parentPath}\\bin;${info.parentPath}\\32\\bin\nPYTHONPATH=${info.parentPath}\\32\\lib\\gimp\\2.0\\python;${info.parentPath}\\lib\\gimp\\2.0\\plug-ins\\python-console`)

    fs.appendFileSync(path.resolve(info.parentPath, 'lib/gimp/2.0/environ', 'pygimp.env'), `__COMPAT_LAYER=HIGHDPIAWARE`)

    fs.appendFileSync(path.resolve(info.parentPath, 'lib/gimp/2.0/interpreters', 'pygimp.interp'), `python=${info.parentPath}\\32\\bin\\pythonw.exe\npython2=${info.parentPath}\\32\\bin\\pythonw.exe\n/usr/bin/python=${info.parentPath}\\32\\bin\\pythonw.exe\n:Python:E::py::python:`)
  }
}
module.exports = data
