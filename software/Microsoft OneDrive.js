'use strict'

let data = {
  url: 'https://support.office.com/en-us/article/onedrive-release-notes-845dcf18-f921-435e-bf28-4e24b95e5fc0?ui=en-US&rs=en-US&ad=US',
  version: {
    selector: '#ID0EACAAA-supTabControlContent-1>p'
  },
  download: {
    plain: 'https://go.microsoft.com/fwlink/?linkid=844652'
  },
  fixedPath: '%LOCALAPPDATA%\\Microsoft\\OneDrive\\OneDrive.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath)
  }
}
module.exports = data
