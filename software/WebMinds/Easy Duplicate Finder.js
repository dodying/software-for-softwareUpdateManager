'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/System/File-management/Windows-Portable-Applications-Easy-Duplicate-Finder-Portable.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
