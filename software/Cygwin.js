'use strict'

let data = {
  url: 'http://mirrors.kernel.org/sourceware/cygwin/x86_64/',
  version: {
    func: async (res, $) => res.body.match(/<a href="release\/">release\/<\/a>\s+(\d+[\da-zA-Z\s:-]+\d+)\s/)[1].replace(/:|\s+/g, '-')
  },
  download: {
    plain: 'https://www.cygwin.com/setup-x86_64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['--root', output, '--root', '{dir}', '--no-admin', '--no-shortcuts', '--local-package-dir', '{dir}\\packages', '--wait', '--only-site', '--site', 'https://mirrors.shu.edu.cn/cygwin/', '--upgrade-also', '--quiet-mode', '--verbose', '--wait'], { wait: true })
  }
}
module.exports = data
