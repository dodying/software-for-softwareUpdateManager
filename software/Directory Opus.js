'use strict'

let data = {
  commercial: 3,
  url: 'https://blog.dopus.com/search/label/main%20program%20updates',
  version: '.entry-title',
  changelog: '.entry-content',
  download: '[href*="download.asp?id"]',
  install: info => {
    const path = require('path')
    const fs = require('fs')
    const cp = require('child_process')

    cp.execSync(`"${info.output}" /extract_all:"${path.resolve(info.fns.dirname, 'unzip/OpusInstall')}"`)
    let iss = path.resolve(info.fns.dirname, 'unzip/OpusInstall/Disk1/setup.iss')
    let content = [
      '[InstallShield Silent]',
      'Version=v7.00',
      'File=Response File',
      '[File Transfer]',
      'OverwrittenReadOnly=NoToAll',
      '[{0A6AA615-5321-43A0-AFAE-97BF95013EA0}-DlgOrder]',
      'Dlg0={0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdWelcome-0',
      'Count=4',
      'Dlg1={0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdLicense-0',
      'Dlg2={0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdAskDestPath-0',
      'Dlg3={0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdFinish-0',
      '[{0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdWelcome-0]',
      'Result=1',
      '[{0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdLicense-0]',
      'Result=1',
      '[{0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdAskDestPath-0]',
      'szDir=' + info.parentPath,
      'Result=1',
      '[Application]',
      'Name=Directory Opus',
      'Version=12.12',
      'Company=GPSoftware',
      'Lang=0409',
      '[{0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdFinish-0]',
      'Result=1',
      'bOpt1=0',
      'bOpt2=1',
      ''
    ].join('\n')
    fs.writeFileSync(iss, content)

    let setup = path.resolve(info.fns.dirname, 'unzip/OpusInstall/Disk1/setup.exe')
    return info.fns.install.cli(info, setup, ['/s', `/f1"${iss}"`], { wait: true })
  },
  other: {
    beta: {
      url: 'https://blog.dopus.com/search/label/beta%20updates'
    }
  }
}
module.exports = data
