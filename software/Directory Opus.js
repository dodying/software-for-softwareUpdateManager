'use strict'

let data = {
  commercial: 3,
  url: 'https://www.gpsoft.com.au/DScripts/download.asp',
  version: {
    selector: '#page-min-height > div.art-post > div > div.art-post-inner.art-article > div.art-postcontent > div > table > tbody > tr:nth-child(4) > td:nth-child(3)'
  },
  download: {
    func: async (res, $, fns, choice) => {
      let uri1 = $('[href^="download.asp?file"]').eq(0).attr('href')
      let res1 = await fns.reqHEAD(uri1)
      return res1.request.uri.href
    }
  },
  install: function (output, iPath, fns) {
    const path = require('path')
    const fs = require('fs')
    const cp = require('child_process')

    let { dir: parentPath } = path.parse(iPath)
    while (parentPath.toLowerCase().split(/[/\\]+/).includes('bin')) {
      parentPath = path.parse(parentPath).dir
    }

    cp.execSync(`"${output}" /extract_all:"${path.resolve(fns.dirname, 'unzip/OpusInstall')}"`)
    let iss = path.resolve(fns.dirname, 'unzip/OpusInstall/Disk1/setup.iss')
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
      'szDir=' + parentPath,
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

    let setup = path.resolve(fns.dirname, 'unzip/OpusInstall/Disk1/setup.exe')
    return fns.install.cli(output, iPath, setup, ['/s', `/f1"${iss}"`], { wait: true })
  }
}
module.exports = data
