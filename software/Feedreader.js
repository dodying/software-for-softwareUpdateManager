'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/News-Newsgroups-Blog-Tools/Feedreader.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
