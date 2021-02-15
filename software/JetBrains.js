'use strict';

module.exports = {
  type: 'software-list',
  list: {
    CLion: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=CL&latest=true',
      version: async (res, $) => res.json.CL[0].version,
      changelog: async (res, $) => [res.json.CL[0].whatsnew, true],
      download: async (res, $) => res.json.CL[0].downloads.windowsZip.link,
      install: 'install'
    },
    DataGrip: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=DG&latest=true',
      version: async (res, $) => res.json.DG[0].version,
      changelog: async (res, $) => [res.json.DG[0].whatsnew, true],
      download: async (res, $) => res.json.DG[0].downloads.windows.link,
      install: 'install'
    },
    dotCover: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=DC&latest=true',
      version: async (res, $) => res.json.DC[0].version,
      changelog: async (res, $) => [res.json.DC[0].whatsnew, true],
      download: async (res, $) => res.json.DC[0].downloads.windowsWeb.link,
      install: 'install'
    },
    dotMemory: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=DM&latest=true',
      version: async (res, $) => res.json.DM[0].version,
      changelog: async (res, $) => [res.json.DM[0].whatsnew, true],
      download: async (res, $) => res.json.DM[0].downloads.windows64.link,
      install: 'install'
    },
    dotPeek: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=DPK&latest=true',
      version: async (res, $) => res.json.DPK[0].version,
      changelog: async (res, $) => [res.json.DPK[0].whatsnew, true],
      download: async (res, $) => res.json.DPK[0].downloads.windows64.link,
      install: 'install'
    },
    dotTrace: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=DP&latest=true',
      version: async (res, $) => res.json.DP[0].version,
      changelog: async (res, $) => [res.json.DP[0].whatsnew, true],
      download: async (res, $) => res.json.DP[0].downloads.windows64.link,
      install: 'install'
    },
    GoLand: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=GO&latest=true',
      version: async (res, $) => res.json.GO[0].version,
      changelog: async (res, $) => [res.json.GO[0].whatsnew, true],
      download: async (res, $) => res.json.GO[0].downloads.windows.link,
      install: 'install'
    },
    Hub: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=HB&latest=true',
      preferPath: 'bin/hub.bat',
      version: async (res, $) => res.json.HB[0].version,
      changelog: async (res, $) => [res.json.HB[0].whatsnew, true],
      download: async (res, $) => res.json.HB[0].downloads.windows.link,
      install: ['install_msi', null, 'bin/hub.bat']
    },
    'IntelliJ IDEA Community': {
      url: 'https://data.services.jetbrains.com/products/releases?code=IIC&latest=true',
      version: async (res, $) => res.json.IIC[0].version,
      changelog: async (res, $) => [res.json.IIC[0].whatsnew, true],
      download: async (res, $) => res.json.IIC[0].downloads.windowsZip.link,
      install: 'install'
    },
    'IntelliJ IDEA Ultimate': {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=IIU&latest=true',
      version: async (res, $) => res.json.IIU[0].version,
      changelog: async (res, $) => [res.json.IIU[0].whatsnew, true],
      download: async (res, $) => res.json.IIU[0].downloads.windowsZip.link,
      install: 'install'
    },
    MPS: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=MPS&latest=true',
      version: async (res, $) => res.json.MPS[0].version,
      changelog: async (res, $) => [res.json.MPS[0].whatsnew, true],
      download: async (res, $) => res.json.MPS[0].downloads.zip.link,
      install: 'install'
    },
    PhpStorm: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=PS&latest=true',
      version: async (res, $) => res.json.PS[0].version,
      changelog: async (res, $) => [res.json.PS[0].whatsnew, true],
      download: async (res, $) => res.json.PS[0].downloads.windows.link,
      install: 'install'
    },
    'PyCharm Community': {
      url: 'https://data.services.jetbrains.com/products/releases?code=PCC&latest=true',
      version: async (res, $) => res.json.PCC[0].version,
      changelog: async (res, $) => [res.json.PCC[0].whatsnew, true],
      download: async (res, $) => res.json.PCC[0].downloads.windows.link,
      install: 'install'
    },
    'PyCharm Edu': {
      url: 'https://data.services.jetbrains.com/products/releases?code=PCE&latest=true',
      version: async (res, $) => res.json.PCE[0].version,
      changelog: async (res, $) => [res.json.PCE[0].whatsnew, true],
      download: async (res, $) => res.json.PCE[0].downloads.windows.link,
      install: 'install'
    },
    'PyCharm Professional': {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=PCP&latest=true',
      version: async (res, $) => res.json.PCP[0].version,
      changelog: async (res, $) => [res.json.PCP[0].whatsnew, true],
      download: async (res, $) => res.json.PCP[0].downloads.windows.link,
      install: 'install'
    },
    'ReSharper C++': {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=RC&latest=true',
      version: async (res, $) => res.json.RC[0].version,
      changelog: async (res, $) => [res.json.RC[0].whatsnew, true],
      download: async (res, $) => res.json.RC[0].downloads.windowsWeb.link,
      install: 'install'
    },
    ReSharper: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=RS&latest=true',
      version: async (res, $) => res.json.RS[0].version,
      changelog: async (res, $) => [res.json.RS[0].whatsnew, true],
      download: async (res, $) => res.json.RS[0].downloads.windowsWeb.link,
      install: 'install'
    },
    ReSharperCommandLineTools: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=RSCLT&latest=true',
      version: async (res, $) => res.json.RSCLT[0].version,
      changelog: async (res, $) => [res.json.RSCLT[0].whatsnew, true],
      download: async (res, $) => res.json.RSCLT[0].downloads.windows.link,
      install: 'install'
    },
    ReSharperUltimate: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=RSU&latest=true',
      version: async (res, $) => res.json.RSU[0].version,
      changelog: async (res, $) => [res.json.RSU[0].whatsnew, true],
      download: async (res, $) => res.json.RSU[0].downloads.windows.link,
      install: 'install'
    },
    Rider: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=RD&latest=true',
      version: async (res, $) => res.json.RD[0].version,
      changelog: async (res, $) => [res.json.RD[0].whatsnew, true],
      download: async (res, $) => res.json.RD[0].downloads.zip.link,
      install: 'install'
    },
    RubyMine: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=RM&latest=true',
      version: async (res, $) => res.json.RM[0].version,
      changelog: async (res, $) => [res.json.RM[0].whatsnew, true],
      download: async (res, $) => res.json.RM[0].downloads.windows.link,
      install: 'install'
    },
    TeamCity: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=TC&latest=true',
      version: async (res, $) => res.json.TC[0].version,
      changelog: async (res, $) => [res.json.TC[0].whatsnew, true],
      download: async (res, $) => res.json.TC[0].downloads.windows.link,
      install: 'install'
    },
    'Toolbox App': {
      url: 'https://data.services.jetbrains.com/products/releases?code=TBA&latest=true',
      version: async (res, $) => res.json.TBA[0].version,
      changelog: async (res, $) => [res.json.TBA[0].whatsnew, true],
      download: async (res, $) => res.json.TBA[0].downloads.windows.link,
      install: 'install'
    },
    Upsource: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=US&latest=true',
      version: async (res, $) => res.json.US[0].version,
      changelog: async (res, $) => [res.json.US[0].whatsnew, true],
      download: async (res, $) => res.json.US[0].downloads.zip.link,
      install: 'install'
    },
    WebStorm: {
      commercial: 3,
      url: 'https://data.services.jetbrains.com/products/releases?code=WS&latest=true',
      version: async (res, $) => res.json.WS[0].version,
      changelog: async (res, $) => [res.json.WS[0].whatsnew, true],
      download: async (res, $) => res.json.WS[0].downloads.windows.link,
      install: 'install'
    }
  }
};
