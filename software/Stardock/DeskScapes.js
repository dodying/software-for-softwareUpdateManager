'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Shell-Replacements/Stardock-DeskScapes.shtml'
  },
  fixedPath: '%ProgramFiles(x86)%\\Stardock\\DeskScapes8\\Deskscapes64.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/S'], { wait: true })
  }
}
module.exports = data
